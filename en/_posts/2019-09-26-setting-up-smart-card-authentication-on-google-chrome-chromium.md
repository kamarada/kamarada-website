---
date: 2019-09-26 09:00:00 GMT-3
image: '/files/2019/09/chrome-token.png'
layout: post
published: true
nickname: 'chrome-token'
title: 'Setting up smart card authentication on Google Chrome / Chromium'
---

Today you are going to see how to set up the [Google Chrome][google-chrome] web browser to use digital certificates stored on criptographic media, such as smart cards or tokens. Same instructions for Chrome apply to its [open source][opensource] base [Chromium]. To test your setup, you are going to log in to a smart card enabled website using your certificate.

{% include image.html src="/files/2019/09/chrome-token.png" %}

For future reference, here I use [Linux Kamarada 15.1 Beta][kamarada-15.1-beta] (based on [openSUSE Leap 15.1][leap-15.1]).

## Previous reading

Before starting, to get everyone on the same page, I recommend reading previous posts about digital certificates:

- [How to install website certificates on Linux][how-to-install-certificates]: here you are going to see how to install the CA certificate on Chrome
- [Using smart cards on openSUSE Linux][how-to-token]: here you are going to see how to install support for smart cards and tokens (you don't need to read from the browser configuration part to the end, which is what we are going to do here, but using Chrome instead of [Mozilla Firefox][mozilla-firefox], which was the browser used in that post)

## Setting up Chrome to use your token

Chrome for Linux manages digital certificates similarly to Firefox — using [Mozilla NSS][nss] as backend. But, unlike Firefox, Chrome does not provide a graphical user interface to install [PKCS11] modules. So, to set up Chrome you need to use the command line.

Plug in your token before proceeding.

First, start by opening the terminal and installing [Mozilla NSS Tools][mozilla-nss-tools] (they may be already installed on your system):

```
# zypper in mozilla-nss-tools
```

Then, make sure you are on your home folder and run the following command (making the appropriate substitutions) to add your token to the list of security modules and devices:

```
$ cd
$ modutil -dbdir sql:.pki/nssdb/ -add "token_name" -libfile /path/to/library
```

Replace `token_name` by a name that identifies your token (for instance, `eToken`).

Replace `/path/to/library` with the path to your token's library:

- if your token is supported by [OpenSC][how-to-token], type `/usr/lib64/opensc-pkcs11.so`;
- if you have a SafeNet token and needed to install [SAC][how-to-token] (like me), type `/usr/lib64/libeToken.so`;
- for other token models, ask your token vendor or your certificate authority which path should be informed.

I currently use a [SafeNet eToken 5110][etoken]. So, for me, that command ended like this:

```
$ modutil -dbdir sql:.pki/nssdb/ -add "eToken" -libfile /usr/lib64/libeToken.so
```

**modutil** alerts you that you need to close your browser:

```
WARNING: Performing this operation while the browser is running could cause
corruption of your security databases. If the browser is currently running,
you should exit browser before continuing this operation. Type
'q <enter>' to abort, or <enter> to continue:
```

Close any running web browsers and hit **Enter**. When the command finishes, you can reopen them:

```
Module "eToken" added to database.
```

You can verify that the token has been successfully added by running:

```
$ modutil -dbdir sql:.pki/nssdb/ -list

Listing of PKCS #11 Modules
-----------------------------------------------------------
  1. NSS Internal PKCS #11 Module
	   uri: pkcs11:library-manufacturer=Mozilla%20Foundation;library-description=NSS%20Internal%20Crypto%20Services;library-version=3.45
	 slots: 2 slots attached
	status: loaded

	 slot: NSS Internal Cryptographic Services
	token: NSS Generic Crypto Services
	  uri: pkcs11:token=NSS%20Generic%20Crypto%20Services;manufacturer=Mozilla%20Foundation;serial=0000000000000000;model=NSS%203

	 slot: NSS User Private Key and Certificate Services
	token: NSS Certificate DB
	  uri: pkcs11:token=NSS%20Certificate%20DB;manufacturer=Mozilla%20Foundation;serial=0000000000000000;model=NSS%203

  2. eToken
	library name: /usr/lib64/libeToken.so
	   uri: pkcs11:library-manufacturer=SafeNet,%20Inc.;library-description=SafeNet%20eToken%20PKCS%2311;library-version=9.0
	 slots: 10 slots attached
	status: loaded

	 slot: AKS ifdh [eToken 5110 SC] 00 00
	token: Vinicius
	  uri: pkcs11:token=Vinicius;manufacturer=SafeNet,%20Inc.;serial=026a102c;model=eToken

	 slot:
	token:
	  uri: pkcs11:

	 slot:
	token:
	  uri: pkcs11:

	 slot:
	token:
	  uri: pkcs11:

	 slot: ETOKEN HID READER 0
	token:
	  uri: pkcs11:

	 slot: ETOKEN HID READER 1
	token:
	  uri: pkcs11:

	 slot: ETOKEN HID READER 2
	token:
	  uri: pkcs11:

	 slot: ETOKEN HID READER 3
	token:
	  uri: pkcs11:

	 slot:
	token:
	  uri: pkcs11:

	 slot:
	token:
	  uri: pkcs11:
-----------------------------------------------------------
```

## Logging in to a website using a digital certificate

Let's see how to access a smart card enabled website with Chrome.

As I live in Brazil, I'm going to use Brazilian [eCAC] as example. Use whatever smart card enabled website you may have access.

Make sure your smart card is plugged in.

Navigate to your chosen website and choose to log in using your digital certificate:

{% include image.html src="/files/2019/09/chrome-token-01.jpg" %}

Enter the PIN for your smart card and click **Unlock**:

{% include image.html src="/files/2019/09/chrome-token-02-en.jpg" %}

Select the certificate to use and click **OK**:

{% include image.html src="/files/2019/09/chrome-token-03-en.jpg" %}

Check the website displays your information and you successfully logged in:

{% include image.html src="/files/2019/09/chrome-token-04-en.jpg" %}

Now you are ready to access websites with your smart card and use it in other applications.

Have a lot of fun!

## Further reading

See how you can use your digital certificate in openSUSE:

- [Sending digitally signed emails with Thunderbird]({% post_url en/2019-07-02-sending-digitally-signed-emails-with-thunderbird %})

## References

- [CommonAccessCard - Community Help Wiki - Ubuntu][ubuntu]
- [Smartcard authentification in Chromium - Jan Holthuis][jan.holthuis]

[google-chrome]:                https://www.google.com/chrome/
[opensource]:                   https://opensource.org/osd-annotated
[chromium]:                     https://www.chromium.org/
[kamarada-15.1-beta]:           {% post_url en/2019-09-13-first-beta-release-of-the-kamarada-linux-distribution %}
[leap-15.1]:                    {% post_url en/2019-05-22-opensuse-community-releases-leap-15-1-version %}
[how-to-install-certificates]:  {% post_url en/2018-10-30-how-to-install-website-certificates-on-linux %}
[how-to-token]:                 {% post_url en/2019-06-28-using-smart-cards-on-opensuse-linux %}
[mozilla-firefox]:              https://www.mozilla.org/firefox/
[nss]:                          https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS
[pkcs11]:                       https://en.wikipedia.org/wiki/PKCS_11
[mozilla-nss-tools]:            https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/Tools
[etoken]:                       https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/etoken-5110-usb-token/
[ecac]:                         https://cav.receita.fazenda.gov.br/
[ubuntu]:                       https://help.ubuntu.com/community/CommonAccessCard#Google_Chrome.2FChromium_Setup
[jan.holthuis]:                 https://homepage.ruhr-uni-bochum.de/jan.holthuis/posts/smartcard-authentification-in-chrome
