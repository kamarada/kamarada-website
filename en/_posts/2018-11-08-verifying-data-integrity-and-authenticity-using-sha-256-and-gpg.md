---
date: 2018-11-08 19:15:00 GMT-2
image: '/files/2018/10/how-to-verify-iso.png'
layout: post
published: true
nickname: 'how-to-verify-iso'
title: 'Verifying data integrity and authenticity using SHA-256 and GPG'
excerpt: "Sometimes it is important to verify a downloaded file. Two common verifications that greatly reduce chances of using a corrupted or tampered file are the checksum and the digital signature. In this post, you are going to see how to do those verifications with sha256sum and gpg, two command-line utilities that come already installed on most Linux distributions by default. If you have never used the Linux terminal, don't be afraid: you're going to see that it's not difficult at all!"
---

Sometimes it is important to verify a downloaded file. For example, the [ISO image][iso] of a [Linux distribution][linux-distro] - it contains the operating system that you will use or install on your computer, bad things may happen if the file was corrupted during download or tampered by a [man-in-the-middle attack][man-in-the-middle].

Two common verifications that greatly reduce chances of using a corrupted or tampered file are [checksum] and [digital signature][gph]:

- a **checksum** is made by who creates and uploads the file, before uploading, and later verified by who downloads the file, after downloading. There are some algorithms to compute checksums, but the general idea behind them is to sum all bytes of the file. When verifying the checksum of a downloaded file, if the file or the checksum itself were modified, verification fails, indicating it is not safe to use the file; and
- a **digital signature** certifies a file, similar to a hand-written signature, but has the advantage of being tamper-resistant, because it uses encryption mechanisms. When verifying the digital signature of a downloaded file, if the file or the signature itself were modified, or if the signature was made using another person's key, verification fails, indicating it is not safe to use the file.

Those verifications are for **integrity** and **authenticity** respectively, two basic properties of [information security][information-security].

Linux distributions often provide [SHA-256] checksums and [GPG] digital signatures to verify their ISO images.

In this post, you are going to see how to do those verifications with [**sha256sum**][sha256sum-man] and [**gpg**][gpg-man] (from [**GNU Privacy Guard**][gpg], also known as **GnuPG** or simply **GPG**), two command-line utilities that come already installed on most Linux distributions by default.

{% include image.html src="/files/2018/10/how-to-verify-iso.png" %}

Although I use the example of an ISO image, any file can be verified, as long as there are a checksum and a digital signature available. For instance, that is the case of the files available for download on the [VeraCrypt] software website.

**Tip:** if you don't use [Linux] yet and is using [Windows] to download a Linux distribution ISO image, read [this page][gpg4win] instead.

For future reference, here I use the [openSUSE Leap 15.0][opensuse-leap] Linux distribution and the **sha256sum** and **gpg** utilities on the versions available on the official repositories of the distribution.

If you have never used the Linux **command-line interface** (also known as [**terminal**][terminal]), don't be afraid: you're going to see that it's not difficult at all!

## Overview

The process of checking an ISO image is not so simple, so before we roll up our sleeves, let’s get an overview of it:

1. Download the ISO image from the Linux distribution's website (as usual);
2. Download checksum and digital signature from the Linux distribution's website, depending on the distribution they can be two files or a single text file containing both (openSUSE provides them as a single text file);
3. Import the public PGP key belonging to the Linux distribution, depending on the distribution you may get that key from the distribution's website or from a trusted key server (here we are going to retrieve the openSUSE key from a key server, but it is also available on the [downloads page][download-leap]);
4. Compute the checksum of the downloaded ISO image and compare it against the expected checksum, provided by the distribution; and
5. Verify the digital signature, which might have been computed against the ISO image itself or against the checksum file, which is better, because authenticity protection is extended to the checksum file (openSUSE has made it the second way).

The process may differ a bit according to the distribution, but it usually follows that general pattern. For example, there are several different checksum algorithms. The [MD5] algorithm has been the most popular, but has been replaced by the [SHA-256] algorithm, which is theoretically more resistant to attacks. Also some distros don’t provide digital signatures, users of those distros are more vulnerable to man-in-the-middle attacks.

## Using Terminal

[**Terminal**][gnome-terminal] is an application that receives text-based commands. It is different from most applications, which you control using the mouse and clicking on buttons and menus.

To start Terminal, open the **Activities overview**, clicking **Activities**, on the top-left corner of the screen, or pressing the **Super** key (on some keyboards, it shows the Windows logo). Type `terminal` and click its icon:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-01-en.jpg" %}

Terminal is launched. It shows an almost empty window with a cursor blinking after a character, which can be `>` (greater than) or `$` (dollar sign):

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-02-en.png" %}

That character indicates the command will be executed by an ordinary user.

To execute a command (also said as *run* a command), you need to type it and press **Enter**.

In the following sections, we are going to execute some commands.

If Terminal is being used by the administrator (also known as **superuser** or *root* user), it shows the hash character (`#`). An example of [another post][how-to-upgrade-to-42.3]:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-07-en.jpg" %}

If you are familiar with Windows, perhaps you think Terminal resembles Windows' [Command Prompt][cmd].

## 1 & 2) Download the openSUSE ISO image

Download the openSUSE Leap network installation image as well as the checksum file from:

[https://software.opensuse.org/distributions/leap][download-leap]

{% include image.html src="/files/2018/11/how-to-verify-iso-01-en.jpg" %}

I chose the network installation image just to illustrate, because it's the smaller image available for download.

When you finish downloading, there should be two files in your `Downloads` folder:

- the ISO image (`openSUSE-Leap-15.0-NET-x86_64.iso.sha256`) and
- the checksum file (`openSUSE-Leap-15.0-NET-x86_64.iso.sha256`).

## 3) Import the openSUSE public key

Scroll down the **Get openSUSE** page and see the large [hexadecimal][hexadecimal] number on the **Verify Your Download Before Use** section:

{% include image.html src="/files/2018/11/how-to-verify-iso-02-en.jpg" %}

That number is the **fingerprint** of the openSUSE Project public GPG key.

To import that key, run the following command, informing the fingerprint last 8 digits:

```
$ gpg --recv-keys 3DBDC284
```

**Tip:** you can copy from and paste to the Terminal. To do that, use the **Ctrl + Shift + C** and **Ctrl + Shift + V** keyboard shortcuts respectively.

When running that command, terminal shows the following text, which is the **output** (or return) of that command:

```
gpg: directory '/home/kamarada/.gnupg' created
gpg: keybox '/home/kamarada/.gnupg/pubring.kbx' created
gpg: key B88B2FD43DBDC284: 20 signatures not checked due to missing keys
gpg: /home/kamarada/.gnupg/trustdb.gpg: trustdb created
gpg: key B88B2FD43DBDC284: public key "openSUSE Project Signing Key <opensuse@opensuse.org>" imported
gpg: no ultimately trusted keys found
gpg: Total number processed: 1
gpg:               imported: 1
```

Shortly, **gpg** informs that it has created some configuration files, because it has been executed for the first time, and imported the openSUSE key.

Run the following command to check the fingerprint of the imported key:

```
$ gpg --fingerprint 3DBDC284
```

It returns:

```
pub   rsa2048 2008-11-07 [SC] [expires: 2024-05-02]
      22C0 7BA5 3417 8CD0 2EFE  22AA B88B 2FD4 3DBD C284
uid           [ unknown] openSUSE Project Signing Key <opensuse@opensuse.org>
```

Compare the fingerprint returned by **gpg** with the one present on the openSUSE website:

{% include image.html src="/files/2018/11/how-to-verify-iso-03-en.jpg" %}

If the numbers match, you successfully imported the openSUSE Project public GPG key.

## 4) Verify the checksum

On terminal, enter the `Downloads` folder with the command:

```
$ cd Downloads
```

Then, verify the checksum of the ISO image using the **sha256sum** utility:

```
$ sha256sum -c openSUSE-Leap-15.0-NET-x86_64.iso.sha256
```

(note that in the command you need to inform the checksum file name, which ends with `.iso.sha256`, not the ISO image file name, which ends with `.iso`)

**sha256sum** takes some time computing the downloaded ISO image checksum and compares it against the expected checksum, present on the checksum file.

The command output should be:

```
openSUSE-Leap-15.0-NET-x86_64.iso: OK
sha256sum: WARNING: 14 lines are improperly formatted
```

{% include image.html src="/files/2018/11/how-to-verify-iso-04-en.jpg" %}

The first line means checksums match. So, from the integrity point of view, it is safe to use the downloaded ISO image. You can proceed to the authenticity verification.

If there is difference between the computed and the expected checksums, the command output is different. If that is the case, it is not safe to use the downloaded ISO image: it is broken and should be downloaded again.

The second line warns about some lines of the checksum file that **sha256sum** does not understand. Those lines are the digital signature, which the openSUSE Project writes on the same file. Just for the sake of curiosity, if you want to see those lines, you can open the checksum file using the terminal itself, since it is a text file:

```
$ cat openSUSE-Leap-15.0-NET-x86_64.iso.sha256
```

The [**cat**][cat-man] command shows the contents of a text file. Look:

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

1a322de7c215da96fdbad4c247d218eb79073c5620a332a759c0291b44746fbc  openSUSE-Leap-15.0-NET-x86_64.iso
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.0.7 (GNU/Linux)

iQEVAwUBWv2l17iLL9Q9vcKEAQgYyAf8DFVIKlbzmTteoIXCyxTO78QbJl764CvS
Vf+deIEIfyHwvHIFR9diQm3gWeSuxD4dE+rhmRrDZBXsOIf1Xr1cXCAOWfr6zn5E
8CurCwfYF4rKYu6wGqGJgf5WMh9E3swpJTfH4izvkRrGEDK13NRQcnXdhJYn5cJa
9tC8n9sNdmzGSwaK44WCxhoN5+8EgJoJQTh1m3n7+O5xD6un9MD7Xh8dlfBxBMtV
N0zZxCBEBbg+fL+/I7793R8RbZZwxihES4xmn2BLF5GeC28xBaWblbWmVBbo8un1
aJu8EqdG3Kn43bX1FwAecNgRov7PSFGua/38ANdLWMsBpV6jNpMoyA==
=YLLc
-----END PGP SIGNATURE-----
```

The **sha256sum** utility understands only this line:

```
1a322de7c215da96fdbad4c247d218eb79073c5620a332a759c0291b44746fbc  openSUSE-Leap-15.0-NET-x86_64.iso
```

It does not understand all the others, that's why it shows that warning.

## 5) Verify the digital signature

To verify the GPG signature of the ISO image, use the **gpg** utility:

```
$ gpg --verify openSUSE-Leap-15.0-NET-x86_64.iso.sha256
```

(once again we refer to the checksum file name, which ends with `.iso.sha256`)

The **gpg** output should inform **Good signature**:

```
gpg: Signature made qui 17 mai 2018 12:55:03 -03
gpg:                using RSA key B88B2FD43DBDC284
gpg: Good signature from "openSUSE Project Signing Key <opensuse@opensuse.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 22C0 7BA5 3417 8CD0 2EFE  22AA B88B 2FD4 3DBD C284
```

{% include image.html src="/files/2018/11/how-to-verify-iso-05-en.jpg" %}

The warning **This key is not certified with a trusted signature** does not really indicate a problem, but only the fact that you have not signed the key yourself. The next section shows how to optionally correct this.

If you received the above output, unless you are paranoid, you can feel satisfied and use the ISO image safely.

Look how the output is different if the signature verification fails:

```
gpg: CRC error; 60B2DC - 60B2DB
gpg: no signature found
gpg: the signature could not be verified.
Please remember that the signature file (.sig or .asc)
should be the first file given on the command line.
```

If you received that output, it is not safe to use that ISO image. You should check its origin and download it again.

## 6) Optionalities

At this point, you have done all the steps we have outlined in the overview at the beginning.

However, you could go a step further by signing the openSUSE Project public key with your private key. Doing that, you tell **gpg** you trust that the openSUSE Project public key actually belongs to the openSUSE Project.

It may seem bureaucratic, but the way GPG was designed, ideally people should exchange keys only in person to establish a web of trust. Real life people don't use it that way. Obtaining the public key from the distribution website is all you can reasonably do as an end-user trying to verify a downloaded ISO image. Anyway, you’re still safer than people who simply download and trust it without verifying it at all.

To sign the openSUSE public GPG key, you must first create your own GPG key pair.

## 6.1) Generate a personal key pair

To start generating a key pair, run the following command on terminal:

```
$ gpg --gen-key
```

**gpg** asks you to provide your name:

```
gpg (GnuPG) 2.2.5; Copyright (C) 2018 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Note: Use "gpg2 --full-generate-key" for a full featured key generation dialog.

GnuPG needs to construct a user ID to identify your key.

Real name:
```

Type your complete name and press **Enter**.

Then, **gpg** asks your email address. Type it and press **Enter**.

**gpg** offers you the opportunity to review your information and change it if necessary:

```
Real name: Linux Kamarada
Email address: linux@kamarada.com.br
You selected this USER-ID:
    "Linux Kamarada <linux@kamarada.com.br>"

Change (N)ame, (E)mail, or (O)kay/(Q)uit?
```

If everything is alright, type `O` and press **Enter**.

**gpg** asks you to create a password (*passphrase*) to protect your new private key. For some reason, it provides a window outside the terminal for entering the password:

{% include image.html src="/files/2018/11/how-to-verify-iso-06-en.jpg" %}

Enter the password in the first field and repeat it in the second field to make sure there is no typo. When you are finished, click **OK** (or press **Enter**).

After that, your personal key pair is generated:

```
Change (N)ame, (E)mail, or (O)kay/(Q)uit? o
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: key 203CFD6387754CFF marked as ultimately trusted
gpg: directory '/home/kamarada/.gnupg/openpgp-revocs.d' created
gpg: revocation certificate stored as '/home/kamarada/.gnupg/openpgp-revocs.d/A6EA439A6BC66CC857C85700203CFD6387754CFF.rev'
public and secret key created and signed.

pub   rsa2048 2018-11-06 [SC] [expires: 2020-11-05]
      A6EA439A6BC66CC857C85700203CFD6387754CFF
uid                      Linux Kamarada <linux@kamarada.com.br>
sub   rsa2048 2018-11-06 [E] [expires: 2020-11-05]
```

## 6.2) Sign the openSUSE public key

To sign the openSUSE public key, run:

```
$ gpg --edit-key 3DBDC284
```

**gpg** shows information about the key and starts its own terminal (starting with `gpg>`):

```
gpg (GnuPG) 2.2.5; Copyright (C) 2018 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.


pub  rsa2048/B88B2FD43DBDC284
     created: 2008-11-07  expires: 2024-05-02  usage: SC
     trust: unknown       validity: unknown
[ unknown] (1). openSUSE Project Signing Key <opensuse@opensuse.org>

gpg>
```

Compare the fingerprint with the one present on the openSUSE website once more.

To do that, type **fpr** (from *fingerprint*) and press **Enter**:

```
gpg> fpr
pub   rsa2048/B88B2FD43DBDC284 2008-11-07 openSUSE Project Signing Key <opensuse@opensuse.org>
 Primary key fingerprint: 22C0 7BA5 3417 8CD0 2EFE  22AA B88B 2FD4 3DBD C284

gpg>
```

If the numbers match, type **trust** and press **Enter**:

```
gpg> trust
pub  rsa2048/B88B2FD43DBDC284
     created: 2008-11-07  expires: 2024-05-02  usage: SC  
     trust: unknown       validity: unknown
[ unknown] (1). openSUSE Project Signing Key <opensuse@opensuse.org>

Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision?
```

**gpg** asks you how far you trust that key. I decided to trust it 100% (5 of 5) so I typed `5` and pressed **Enter**:

```
Your decision? 5
Do you really want to set this key to ultimate trust? (y/N)
```

It asks if you really want to trust this key, type `y` (*yes*) and press **Enter**:

```
Do you really want to set this key to ultimate trust? (y/N) y

pub  rsa2048/B88B2FD43DBDC284
     created: 2008-11-07  expires: 2024-05-02  usage: SC  
     trust: ultimate      validity: unknown
[ unknown] (1). openSUSE Project Signing Key <opensuse@opensuse.org>
Please note that the shown key validity is not necessarily correct
unless you restart the program.

gpg>
```

Now type **sign** and press **Enter**:

```
gpg> sign

pub  rsa2048/B88B2FD43DBDC284
     created: 2008-11-07  expires: 2024-05-02  usage: SC  
     trust: ultimate      validity: unknown
 Primary key fingerprint: 22C0 7BA5 3417 8CD0 2EFE  22AA B88B 2FD4 3DBD C284

     openSUSE Project Signing Key <opensuse@opensuse.org>

This key is due to expire on 2024-05-02.
Are you sure that you want to sign this key with your
key "Linux Kamarada <linux@kamarada.com.br>" (203CFD6387754CFF)

Really sign? (y/N)
```

It asks if you really want to sign this key, type `y` and press **Enter**:

Enter your private key password and click **OK** (or press **Enter**):

{% include image.html src="/files/2018/11/how-to-verify-iso-07-en.jpg" %}

Finally, type **quit** and press **Enter**:

```
gpg> quit
Save changes? (y/N)
```

It asks if you want to save changes, type `y` and press **Enter**.

The openSUSE public key is signed and we return to the ordinary terminal.

Confirm that the key has been actually signed running:

```
$ gpg --list-sig 3DBDC284
```

That command lists all signatures of the key. Note that yours appears on the last line:

{% include image.html src="/files/2018/11/how-to-verify-iso-08-en.jpg" %}

```
pub   rsa2048 2008-11-07 [SC] [expires: 2024-05-02]
      22C07BA534178CD02EFE22AAB88B2FD43DBDC284
uid           [ultimate] openSUSE Project Signing Key <opensuse@opensuse.org>
sig          EA7BF3970175623E 2012-08-23  [User ID not found]
sig          8BD82E6F30B94B5C 2013-05-04  [User ID not found]
sig          6347B5055AB3D350 2017-01-30  [User ID not found]
sig          1C2B0DA2920E6F97 2013-08-15  [User ID not found]
sig          29ED86E6F9CBBD4C 2018-02-10  [User ID not found]
sig          77B2E6003D25D3D9 2012-08-23  [User ID not found]
sig          080B3B0AD1E3EBDD 2014-02-11  [User ID not found]
sig          D9C63ADCE11CE0A5 2016-07-18  [User ID not found]
sig          4525B0A6741B9BBC 2018-04-02  [User ID not found]
sig 3        B88B2FD43DBDC284 2010-05-05  openSUSE Project Signing Key <opensuse@opensuse.org>
sig 3        B88B2FD43DBDC284 2014-05-05  openSUSE Project Signing Key <opensuse@opensuse.org>
sig 3        B88B2FD43DBDC284 2008-11-07  openSUSE Project Signing Key <opensuse@opensuse.org>
sig          37F0BE6297A01F40 2015-09-03  [User ID not found]
sig          E7820D7B72511999 2016-02-29  [User ID not found]
sig          A485A0ED51B8B7C4 2015-05-19  [User ID not found]
sig          37B31673C6FD5677 2016-04-10  [User ID not found]
sig          CA3A5E56C08DE9DB 2016-11-28  [User ID not found]
sig          449AC1719D98D793 2017-12-01  [User ID not found]
sig          2209D6902F969C95 2016-02-29  [User ID not found]
sig          E6596246D46BD98A 2016-12-03  [User ID not found]
sig          F8E8F9BBBD86B2BD 2018-09-18  [User ID not found]
sig          19D77FD04BCDA246 2018-10-03  [User ID not found]
sig          58FC58B1317CD502 2017-09-28  [User ID not found]
sig          203CFD6387754CFF 2018-11-06  Linux Kamarada <linux@kamarada.com.br>
```

## 6.3) Verify the digital signature (this time with the key signed)

Repeat verifying the GPG signature of the ISO image (step 5):

```
$ gpg --verify openSUSE-Leap-15.0-NET-x86_64.iso.sha256
```

Now **gpg** does not warn you the key is not trusted nor show its fingerprint at the end. **gpg** just informs **Good signature**:

```
gpg: Signature made qui 17 mai 2018 12:55:03 -03
gpg:                using RSA key B88B2FD43DBDC284
gpg: Good signature from "openSUSE Project Signing Key <opensuse@opensuse.org>" [ultimate]
```

{% include image.html src="/files/2018/11/how-to-verify-iso-09-en.jpg" %}

## Summing up

Now that you are familiar with **sha256sum** and **gpg**, you can use them to verify ISO images downloaded from openSUSE, as well as from other Linux distributions, or any files you need to verify. As I explained in the overview, the process is similar.

Possibly, much of what you did here you won't have to do again:

- you only need to repeat importing the openSUSE public key (section 3) if the openSUSE Project generates a new key in the future;
- you only need to re-sign the openSUSE public key (section 6.2) if you import a new openSUSE key in the future; and
- if you use your personal GPG key only to check downloaded files, you do not need to create a new GPG key pair (section 6.1).

In case you download another ISO image from openSUSE (for instance, when there is a new release), skip step 3 and repeat steps 1, 2, 4 and 5.

In case you download an ISO image from another distribution, then you should repeat the entire process, optionally signing the public key of the distribution after importing it (section 6.2).

I hope this post has helped you. I leave the references in case you want to read more.

## References

- [How to Verify a Linux ISO's Checksum and Confirm It Hasn't Been Tampered With][howtogeek]
- [How to Verify an Electrum Download on Windows - Bitzuma][bitzuma]
- [How to verify the authenticity and integrity of a downloaded file on Linux - Xmodulo][xmodulo]
- [SDB:Download help - openSUSE][opensuse-wiki]
- [The GNU Privacy Handbook][gph]
- [GnuPrivacyGuardHowto][ubuntu-wiki]
- [digital signature - Verify a key was signed by another key - Information Security Stack Exchange][security]

[iso]:                      https://en.wikipedia.org/wiki/ISO_image
[linux-distro]:             https://en.wikipedia.org/wiki/Linux_distribution
[man-in-the-middle]:        https://en.wikipedia.org/wiki/Man-in-the-middle_attack
[checksum]:                 https://en.wikipedia.org/wiki/Checksum
[gph]:                      https://www.gnupg.org/gph/en/manual.html
[information-security]:     https://en.wikipedia.org/wiki/Information_security
[sha-256]:                  https://en.wikipedia.org/wiki/SHA-2
[gpg]:                      https://gnupg.org/
[sha256sum-man]:            https://linux.die.net/man/1/sha256sum
[gpg-man]:                  https://linux.die.net/man/1/gpg
[veracrypt]:                https://www.veracrypt.fr/en/Downloads.html
[linux]:                    https://www.kernel.org/linux.html
[windows]:                  https://www.microsoft.com/windows/
[gpg4win]:                  http://translate.google.com/translate?js=n&sl=pt&tl=en&u=https://vinyanalista.github.io/blog/2018/10/05/verificacao-de-integridade-e-autenticidade-com-o-gpg4win/
[opensuse-leap]:            {% post_url en/2018-05-25-based-on-enterprise-code-tested-millions-of-times-opensuse-leap-15-released %}
[terminal]:                 http://opensuse-guide.org/command.php
[download-leap]:            https://software.opensuse.org/distributions/leap
[md5]:                      https://en.wikipedia.org/wiki/MD5
[gnome-terminal]:           https://help.gnome.org/users/gnome-terminal/stable/index.html
[how-to-upgrade-to-42.3]:   {% post_url en/2017-08-03-how-to-upgrade-from-opensuse-leap-422-to-423 %}
[cmd]:                      https://en.wikipedia.org/wiki/Cmd.exe
[hexadecimal]:              https://en.wikipedia.org/wiki/Hexadecimal
[cat-man]:                  https://linux.die.net/man/1/cat
[kleopatra]:                https://www.openpgp.org/software/kleopatra/
[notepad]:                  https://notepad-plus-plus.org/
[google-translate]:         https://translate.google.com/
[howtogeek]:                https://www.howtogeek.com/246332/how-to-verify-a-downloaded-linux-iso-file-wasnt-tampered-with/
[bitzuma]:                  https://bitzuma.com/posts/how-to-verify-an-electrum-download-on-windows/
[xmodulo]:                  http://xmodulo.com/verify-authenticity-integrity-downloaded-file.html
[opensuse-wiki]:            https://en.opensuse.org/SDB:Download_help
[ubuntu-wiki]:              https://help.ubuntu.com/community/GnuPrivacyGuardHowto
[security]:                 https://security.stackexchange.com/a/120926
