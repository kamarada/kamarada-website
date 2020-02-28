---
date: '2019-06-28 01:45:00 UTC-3'
image: '/files/2019/06/smart-card.jpg'
layout: post
published: true
title: 'Using smart cards on openSUSE Linux'
nickname: 'how-to-token'
excerpt: 'In this post, you are going to see how to install support for smart cards and tokens on openSUSE Linux and how to log in to a government system using a digital certificate.'
---

[Digital certificates][digital-certificate] are used to **identify** and **authenticate** individuals, companies or computers on websites and systems. They ensure basic principles of [information security][infosec], such as **authenticity** and **non-repudiation**, to data signed with them. Digitally signed documents are as legally valid as handwritten signed documents.

Digital certificates can be stored:

- as files in computers or mobile devices (common file extensions include `.crt`, `.cer` and `.pem`); or
- in cryptographic media, such as [smart cards][smart-card] (which look like credit cards) or [tokens][token] (which look like USB sticks).

You need a smart card reader to use smart cards. USB tokens are standalone devices with a smart card chip inside (like a smart card reader with one non-removable smart card present).

{% include image.html src="/files/2019/06/smart-card.jpg" caption="A smart card and a smart card reader." %}

{% include image.html src="/files/2019/06/safenet-etoken-5110-fips.jpg" caption="A USB token looks like a USB stick, but it is a criptographic medium: it stores only digital certificates." %}

Many government and military websites require you to log in using a digital certificate.

[US Department of Defense (DoD)][dod] limits access to many of its websites to be via a [Common Access Card (CAC)][cac], a kind of smart card.

In Brazil, an example such a website is [eCAC], a system of the [Receita Federal (the Brazilian federal revenue service agency)][receita-federal]. Using that system, Brazilian citizens can consult information regarding their income tax declaration and refund, for instance.

There are also certificates that identify websites. When you visit a website that presents a valid digital certificate, your browser displays a green lock icon, indicating the page is authentic and secure. We have already talked about website certificates in [another post][how-to-install-certificates].

In this post, you are going to see how to install support for smart cards and tokens on [openSUSE Linux][opensuse] and how to log in to a government system using a digital certificate.

For future reference, here I use the [openSUSE Leap 15.1][opensuse-leap-15.1] distribution.

I'm going to use the USB token presented on the image above, an [eToken 5110][etoken], made by [SafeNet] (previously, [Aladdin]).

Smart cards and USB tokens are similar in functionality, installation and use, so through this post I refer to them interchangeably.

## Installing the needed packages

On Linux, support for smart cards is provided mainly by the [PC/SC][pcsc] and [OpenSC][opensc] softwares.

openSUSE users can install them running (as root):

```
# zypper in opensc pcsc-ccid pcsc-lite pcsc-tools
```

Start the PC/SC service, which makes smart cards available to applications:

```
# systemctl start pcscd
```

Also, enable the PC/SC service, so that it always gets started with the system:

```
# systemctl enable pcscd
```

You can verify the PC/SC service is running with:

```
# systemctl status pcscd
● pcscd.service - PC/SC Smart Card Daemon
   Loaded: loaded (/usr/lib/systemd/system/pcscd.service; indirect; vendor preset: disabled)
   Active: active (running) since Mon 2019-05-27 22:22:27 -03; 1h 23min ago
     Docs: man:pcscd(8)
 Main PID: 25347 (pcscd)
    Tasks: 8 (limit: 4915)
   CGroup: /system.slice/pcscd.service
           └─25347 /usr/sbin/pcscd --foreground

May 27 22:22:27 viny-notebook systemd[1]: Started PC/SC Smart Card Daemon.
```

Plug in your token and make sure it is recognized as a USB device:

```
$ lsusb
Bus 003 Device 002: ID 8087:8001 Intel Corp.
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 007: ID 0bda:0129 Realtek Semiconductor Corp. RTS5129 Card Reader Controller
Bus 001 Device 006: ID 1bcf:2c81 Sunplus Innovation Technology Inc.
Bus 001 Device 005: ID 8087:0a2b Intel Corp.
Bus 001 Device 009: ID 0529:0620 Aladdin Knowledge Systems Token JC
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

My token appears in the penultimate line (`0529:0620`).

Verify that PC/SC recognizes your token with:

```
$ pcsc_scan
Using reader plug'n play mechanism
Scanning present readers...
0: AKS ifdh [eToken 5110 SC] 00 00

Mon May 27 23:53:00 2019
 Reader 0: AKS ifdh [eToken 5110 SC] 00 00
  Event number: 0
  Card state: Card inserted, Shared Mode,
  ATR: 3B D5 18 00 81 31 FE 7D 80 73 C8 21 10 F4

ATR: 3B D5 18 00 81 31 FE 7D 80 73 C8 21 10 F4
+ TS = 3B --> Direct Convention
+ T0 = D5, Y(1): 1101, K: 5 (historical bytes)
  TA(1) = 18 --> Fi=372, Di=12, 31 cycles/ETU
    129032 bits/s at 4 MHz, fMax for Fi = 5 MHz => 161290 bits/s
  TC(1) = 00 --> Extra guard time: 0
  TD(1) = 81 --> Y(i+1) = 1000, Protocol T = 1
-----
  TD(2) = 31 --> Y(i+1) = 0011, Protocol T = 1
-----
  TA(3) = FE --> IFSC: 254
  TB(3) = 7D --> Block Waiting Integer: 7 - Character Waiting Integer: 13
+ Historical bytes: 80 73 C8 21 10
  Category indicator byte: 80 (compact TLV data object)
    Tag: 7, len: 3 (card capabilities)
      Selection methods: C8
        - DF selection by full DF name
        - DF selection by partial DF name
        - Implicit DF selection
      Data coding byte: 21
        - Behaviour of write functions: proprietary
        - Value 'FF' for the first byte of BER-TLV tag fields: invalid
        - Data unit in quartets: 2
      Command chaining, length fields and logical channels: 10
        - Logical channel number assignment: by the card
        - Maximum number of logical channels: 1
+ TCK = F4 (correct checksum)

Possibly identified card (using /usr/share/pcsc/smartcard_list.txt):
3B D5 18 00 81 31 FE 7D 80 73 C8 21 10 F4
	Bank of Lithuania Identification card
	Gemalto SafeNet eToken Java Based Cards
	https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/
```

That command does not stop, hit **Ctrl + C** to interrupt it.

Check if OpenSC finds your token:

```
$ opensc-tool -l
# Detected readers (pcsc)
Nr.  Card  Features  Name
0    Yes             AKS ifdh [eToken 5110 SC] 00 00
```
### Specifics of Aladdin / SafeNet tokens

PC/SC and OpenSC are able to recognize SafeNet tokens, but not to manage them:

```
$ opensc-tool -n
Using reader with a card: AKS ifdh [eToken 5110 SC] 00 00
Unsupported card

$ opensc-tool -r 0 -f
SELECT FILE failed: Incorrect parameters in APDU

$ pkcs15-tool --reader 0 --list-pins
Failed to connect to card: Card is invalid or cannot be handled
```

Installing PC/SC and OpenSC, you should be ready to use most tokens, but to use SafeNet tokens you also need [SafeNet Authentication Client (SAC)][sac], which is a proprietary software.

Ideally, you should get SAC from your token vendor, or from your certificate authority. In case they don't provide you a Linux compatible version, you can [google] one.

I found a RPM package on [Comodo knowledgebase][comodo]. Here, I'm going to use it.

Open [this page][comodo] and click on **SafeNetAuthenticationClient-9.0.43-0_amd64.rpm**, by the end:

{% include image.html src="/files/2019/06/token-01-en.jpg" %}

Install the downloaded RPM package using YaST's **Install/Remove Software**:

{% include image.html src="/files/2019/06/token-02-en.jpg" %}

{% include image.html src="/files/2019/06/token-03-en.jpg" %}

I don't know why that RPM package does not declare some libraries it requires. You need to install them manually:

```
# zypper in libcrypto43 openssl
# ln -s /usr/lib64/libcrypto.so.1.1 /usr/lib64/libcrypto.so.6
```

Then, to start SAC, click on **Activities**, on the top-left screen corner, start typing `safenet` and click on the **SafeNet Authentication Client Tools** icon:

{% include image.html src="/files/2019/06/token-04-en.jpg" %}

(in doubt, try clicking both icons, it happens to me too)

Note that SAC correctly recognizes your token:

{% include image.html src="/files/2019/06/token-05-en.jpg" %}

## Setting up the browser to use your token

In order to log in to a website using your token, you need to set up your browser first.

Before that, make sure to add your CA certificate to your browser, otherwise it won't be able to validate your certificate hierarchy. For more information, please read:

- [How to install website certificates on Linux][how-to-install-certificates]

Let's see how to set up the [Mozilla Firefox][firefox] browser to use your token.

{% capture chrome %}
If you are looking for instructions for either [Google Chrome](https://www.google.com/chrome/) or [Chromium](https://www.chromium.org/) browsers, [click here]({% post_url en/2019-09-26-setting-up-smart-card-authentication-on-google-chrome-chromium %}).
{% endcapture %}
{% include update.html date="26/09/2019" message=chrome %}

Start **Mozilla Firefox**. Open the **Firefox menu** (top right corner of the window) and click **Preferences**.

By the left, select **Privacy & Security**. Scroll down and click the **Security Devices** button:

{% include image.html src="/files/2019/06/token-06-en.jpg" %}

On the **Device Manager** dialog box, click **Load**.

On the next dialog box, fill in the **Module Name** field with a name that identifies your token (for instance, `eToken`).

Fill in the **Module filename** field with the path to your token's library:

- if your token is supported by OpenSC, type `/usr/lib64/opensc-pkcs11.so`;
- if you have a SafeNet token and needed to install SAC (like me), type `/usr/lib64/libeToken.so`;
- for other token models, ask your token vendor or your certificate authority which path should be informed.

When you finish, click **OK**:

{% include image.html src="/files/2019/06/token-07-en.jpg" %}

Your token is added to the list of **Security Modules and Devices**. Click **OK**:

{% include image.html src="/files/2019/06/token-08-en.jpg" %}

## Logging in to a website using a digital certificate

Let's see how to access a smart card enabled website with Mozilla Firefox.

As I live in Brazil, I'm going to use Brazilian [eCAC] as example. Use whatever smart card enabled website you may have access.

Make sure your smart card is plugged in.

Navigate to your chosen website and choose to log in using your digital certificate.

Enter the PIN for your smart card and click **OK**:

{% include image.html src="/files/2019/06/token-09-en.jpg" %}

Select the certificate to use and click **OK**:

{% include image.html src="/files/2019/06/token-10-en.jpg" %}

Check the website displays your information and you successfully logged in:

{% include image.html src="/files/2019/06/token-11-en.jpg" %}

Now you are ready to access websites with your smart card and use it in other applications.

{% capture update %}
See how you can use your digital certificate in openSUSE:

- [Sending digitally signed emails with Thunderbird]({% post_url en/2019-07-02-sending-digitally-signed-emails-with-thunderbird %})
{% endcapture %}
{% include update.html date="Jul 02, 2019" message=update %}

Have a lot of fun!

## References

- [DoD Common Access Card (CAC) Reader - openSUSE Wiki][opensuse-wiki]
- [Configuring Smart Card authentication on SUSE Linux Enterprise - SUSE Communities][smart-cards-sle]
- [Use a DoD smartcard to access CAC enabled websites - Fedora Magazine][fedora-magazine]
- [Aladdin eToken PRO · OpenSC/OpenSC Wiki · GitHub][aladdin-etoken-opensc]
- [Unsuported Aladdin eToken PRO USB 72k Java · Issue #461 · OpenSC/OpenSC · GitHub][aladdin-etoken-opensc-issue]
- [SafeNet Authentication Client Administrator's Guide][safenet-admin-guide]
- [Installing OpenSC PKCS#11 Module in Firefox, Step by Step · OpenSC/OpenSC Wiki · GitHub][opensc-firefox]
- [DER vs. CRT vs. CER vs. PEM Certificates and How To Convert Them][ssl.com]
- [Howto use Aladdin eToken under Linux - René Mayrhofer][aladdin-etoken-linux]

[digital-certificate]:          https://en.wikipedia.org/wiki/Public_key_certificate
[infosec]:                      https://en.wikipedia.org/wiki/Information_security
[smart-card]:                   https://en.wikipedia.org/wiki/Smart_card
[token]:                        https://en.wikipedia.org/wiki/Security_token
[dod]:                          https://www.defense.gov/
[cac]:                          https://en.wikipedia.org/wiki/Common_Access_Card
[ecac]:                         https://cav.receita.fazenda.gov.br/
[receita-federal]:              https://en.wikipedia.org/wiki/Secretaria_da_Receita_Federal_do_Brasil
[how-to-install-certificates]:  {%post_url en/2018-10-30-how-to-install-website-certificates-on-linux %}
[opensuse]:                     https://www.opensuse.org/
[opensuse-leap-15.1]:           {%post_url en/2019-05-22-opensuse-community-releases-leap-15-1-version %}
[etoken]:                       https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/etoken-5110-usb-token/
[safenet]:                      https://safenet.gemalto.com/
[aladdin]:                      https://en.wikipedia.org/wiki/Aladdin_Knowledge_Systems
[pcsc]:                         https://pcsclite.apdu.fr/
[opensc]:                       https://github.com/OpenSC/OpenSC/wiki
[sac]:                          https://safenet.gemalto.com/etoken-pki-client/
[google]:                       https://www.google.com/search?q=SafeNet+Authentication+Client+for+Linux
[comodo]:                       https://support.comodo.com/index.php?/Knowledgebase/Article/View/1211/0/safenet-download-for-ev-codesigning-certificates
[firefox]:                      https://www.mozilla.org/firefox/
[opensuse-wiki]:                https://en.opensuse.org/DoD_Common_Access_Card_(CAC)_Reader
[smart-cards-sle]:              https://www.suse.com/c/configuring-smart-card-authentication-suse-linux-enterprise/
[fedora-magazine]:              https://fedoramagazine.org/use-dod-smartcards-access-cac-enabled-websites/
[aladdin-etoken-opensc]:        https://github.com/OpenSC/OpenSC/wiki/Aladdin-eToken-PRO
[aladdin-etoken-opensc-issue]:  https://github.com/OpenSC/OpenSC/issues/461
[safenet-admin-guide]:          https://www.eci.bce.ec/documents/10180/1296229/007-012830-001_SAC_9+0_GA_Admin_Guide_Windows_WLM_Revision+B.pdf/772eaaae-bb6b-49bc-922b-50ec77cfdbf9
[opensc-firefox]:               https://github.com/OpenSC/OpenSC/wiki/Installing-OpenSC-PKCS%2311-Module-in-Firefox,-Step-by-Step
[ssl.com]: https://support.ssl.com/Knowledgebase/Article/View/19/0/der-vs-crt-vs-cer-vs-pem-certificates-and-how-to-convert-them
[aladdin-etoken-linux]:         https://www.mayrhofer.eu.org/post/aladdin-etoken-under-linux/
