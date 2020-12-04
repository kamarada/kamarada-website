---
date: 2020-12-04 00:10:00 GMT-3
image: '/files/2020/11/electrum-2020-en.jpg'
layout: post
published: true
nickname: 'electrum-2020'
title: 'Installing the Electrum Bitcoin wallet on Linux'
---

{% include image.html src="/files/2020/11/electrum-2020-en.jpg" %}

[Electrum] is the [Bitcoin] wallet recommended by the official Bitcoin website ([bitcoin.org][bitcoin-wallet]) for [Linux] users who are starting to pĺay with bitcoins, so they are looking for an easy-to-use wallet, but also for those who want some more advanced features, such as [Lightning Network][lightning]  support and integration with hardware wallets. Electrum allows you to easily recover your wallet from a secret phrase (seed).

It's possible to install Electrum in some ways, from the quickest — and safe, but not so safe — for the hurried ones, to the safest rocky road for the cautious. Today I'm going to show you four ways of installing Electrum. See the options, choose your favorite one and hands-on!

At the moment, the latest version of Electrum is [4.0.5], released on [November 18, 2020][4.0.5].

Here I use [Linux Kamarada 15.2][kamarada-15.2], which is a Linux distro based on [openSUSE Leap 15.2][leap-15.2].

## 1) openSUSE's 1 Click Install

{% include image.html src="/files/2020/11/electrum-softwareoo.jpg" %}

The Electrum Bitcoin wallet is not available on the official [openSUSE repositories][opensuse-repos]. But if you search for it at [software.opensuse.org][softwareoo], you will find that it is available on the semi-official [network:cryptocurrencies][electrum-network] repository. If you are an [openSUSE] (or Linux Kamarada) user, getting the Electrum wallet from this repository is the easiest way to install it.

openSUSE Tumbleweed users are going to get Electrum 4.0.5, while openSUSE Leap 15.2 (and Linux Kamarada 15.2) users are going to get Electrum 4.0.2. That's because the latest Electrum version depends on a [Python] library that is not yet available for Leap 15.2, which is [python3-aiorpcX]. That library is now available for Tumbleweed only.

There are two different methods for installing the Electrum wallet package on openSUSE: from the graphical interface using 1 Click Install or from the terminal using the **zypper** package manager — choose whichever method you prefer.

To install Electrum using 1 Click Install, just click the following button:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/electrum.ymp'><i class='fas fa-bolt'></i> 1 Click Install</a></p>

To install Electrum using the terminal, first add the needed repository:

- for openSUSE Leap 15.2 or Linux Kamarada 15.2:

```
# zypper addrepo -f https://download.opensuse.org/repositories/network:/cryptocurrencies/openSUSE_Leap_15.2/ cryptocurrencies
```

- for openSUSE Tumbleweed:

```
# zypper addrepo -f https://download.opensuse.org/repositories/network:/cryptocurrencies/openSUSE_Tumbleweed/ cryptocurrencies
```

Then, install the Electrum package itself:

```
# zypper in electrum
```

The source code of this package can be found on the [openSUSE Build Service][obs]. I'm familiar with packaging for openSUSE using the OBS — not least because I use that same infrastructure to build Linux Kamarada packages — so I inspected the source files, mainly the `electrum.spec` file. The files `Electrum-4.0.5.tar.gz` and `Electrum-4.0.5.tar.gz.asc` match those available on the [official Electrum website][electrum]. I believe it is safe to install Electrum from that openSUSE repository.

## 2) Installing Electrum with Flatpak

{% include image.html src="/files/2020/11/electrum-flatpak.jpg" %}

[Flatpak] is a distribution-agnostic package manager. Until recently, different Linux distros used different package formats, often incompatible with each other. For example, [Debian] and [Ubuntu] use [DEB] packages, while [RedHat], [Fedora] and openSUSE use [RPM] packages. Flatpak brought a simpler alternative to install programs on different distros: as long as Flatpak is installed, the same Flatpak package can be installed on any distro.

There is a [Flatpak package for the Electrum wallet][electrum-flatpak]. At the moment, it brings Electrum version 4.0.4. It is an alternative that allows openSUSE Leap and Linux Kamarada users to get a newer version of the wallet with ease.

First, to install Flatpak on openSUSE, in case you haven't done it already, run:

```
# zypper in flatpak
```

After installing Flatpak, add the [Flathub] repository, which is the main Flatpak repository:

```
# flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Finally, to install Electrum using Flatpak, run:

```
# flatpak install org.electrum.electrum
```

The source code of the Electrum Flatpak package can be found on [GitHub][github-flatpak]. I haven't inspected this source code because I don't understand how Flatpak packaging is done. But I believe it's just as safe to install Electrum using Flatpak.

Note that the Flatpak package, like the openSUSE package, was also contributed by the community. I haven't found any mention to those packages on the [official Electrum website][electrum].

## 3) Download from Electrum website

In fact, this is the recommendation of the Electrum's creator: "do not download Electrum from another source than [electrum.org][electrum], and learn to verify GPG signatures".

However, it is worth noting that Electrum depends on the [secp256k1] library, which can be easily installed from the official repositories of Linux distros such as [Debian][debian-libsecp256k1] or [Ubuntu][ubuntu-libsecp256k1], but is not available on the official openSUSE repositories.

That creates a problem for openSUSE users, which is installing this library before actually installing Electrum. It could be retrieved from the [network:cryptocurrencies][libsecp256k1] repo, but then it would make more sense to also install Electrum from that same repo (option \#1). Another option is compiling both the library and the wallet from their source codes.

## 4) Compiling from source

People concerned about security are going to prefer compiling the Electrum Bitcoin wallet from its source code, because doing that makes it possible to [verify the integrity and authenticity][how-to-verify-iso] of the code. It's also possible to audit the source before installing — as long as you have the knowledge and the time that requires, of course.

Start by installing everything you will need to compile and use both the Electrum wallet and the secp256k1 library. To do this, open the terminal and run the following command as root:

```
# zypper install autoconf automake gcc gettext-tools git libtool make python3-cryptography python3-devel python3-pip python3-requests python3-setuptools
```

To verify the integrity and authenticity of the source, we need to import the developer's public key. I'm going to explain the process briefly, if you want more information, read:

- [Verifying data integrity and authenticity using SHA-256 and GPG][how-to-verify-iso]

Go to the official Electrum wallet website ([electrum.org][electrum]) and click **Download**. On the next page, click the **ThomasV** link at the beginning of the page, where it reads "Sources and executables are signed by ThomasV":

{% include image.html src="/files/2020/11/electrum-thomasv.jpg" %}

Your browser downloads the developer's public key, a file called `ThomasV.asc`. To import it, run the following command:

```
$ gpg --import ThomasV.asc

gpg: key 2BD5824B7F9470E6: public key "Thomas Voegtlin (https://electrum.org) <thomasv@electrum.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```

Optionally, if you have your own GPG key, sign the imported key:

```
$ gpg --edit-key 2BD5824B7F9470E6
> trust
> sign
> quit
```
Now let's get the source of the Electrum wallet, which is hosted on [GitHub]:

```
$ git clone https://github.com/spesmilo/electrum.git
$ cd electrum
$ git submodule update --init
```

At the moment, the latest version of Electrum is 4.0.5, and the developer follows the good practice of creating a [Git] tag for each version. Check out the source code of this version:

```
$ git checkout 4.0.5
```

Source codes versioned with Git have their own way of verifying integrity and authenticity. To verify this source code on this specific tag, run:

```
$ git verify-tag 4.0.5
```

Make sure the **good signature** message appears:

```
gpg: Signature made qua 18 nov 2020 16:24:04 -03
gpg:                using RSA key 6694D8DE7BE8EE5631BED9502BD5824B7F9470E6
gpg: Good signature from "Thomas Voegtlin (https://electrum.org) <thomasv@electrum.org>" [ultimate]
gpg:                 aka "ThomasV <thomasv1@gmx.de>" [ultimate]
gpg:                 aka "Thomas Voegtlin <thomasv1@gmx.de>" [ultimate]
```

If the verification was successful, we can trust this source code and move on.

The Electrum source comes with a script to download and build the secp256k1 library, whose source is also hosted on [GitHub][secp256k1]. Run this script:

```
$ ./contrib/make_libsecp256k1.sh
```

The secp256k1 binaries are created inside the `electrum` folder, at `contrib/secp256k1/dist/lib`.

To install Electrum's Python dependencies, run:

```
$ python3 -m pip install --user -e .
```

Optionally, to download and build Electrum translations, run:

```
$ ./contrib/pull_locale
```

At this point, you're already able to start Electrum from the source folder:

```
$ ./run_electrum
```

{% include image.html src="/files/2020/11/electrum-run-en.jpg" %}

Click **Cancel** to exit Electrum.

Note that to start Electrum from the source code, it is always needed to enter the source folder and run that command. For daily usage, it is more interesting to install Electrum.

To do this, start by copying the secp256k1 library to the system libraries folder:

```
# cp --preserve=links contrib/secp256k1/dist/lib/*.so.* /usr/lib64/
# ldconfig
```

Then, install the Electrum wallet:

```
$ python3 -m pip install --user .
```

Make sure the command informs that the installation was successful:

```
Successfully installed Electrum-4.0.5
```

You can close the terminal window now.

Finally, you can delete the `electrum` folder containing the source code, if you want. As the wallet has been installed on the system, this folder is not needed for everyday use. However, I recommend keeping it, as it may make it easier to update Electrum in the future.

## Starting Electrum

Regardless of the installation method you have chosen, to start the Electrum Bitcoin wallet, click **Activities**, by the upper-left corner of the screen, type `electrum` and click its icon:

{% include image.html src="/files/2020/11/electrum-activities-en.jpg" %}

When run for the first time, Electrum presents a configuration wizard.

The goal of this how-to (installing Electrum) was met, so today I'm going to stop here.

## Do you want to know more?

Using Electrum to make Bitcoin transactions will be the subject of a future post.

In the meanwhile, if you want to know more about bitcoins and the Electrum wallet, I recommend you this great guide:

- [A Beginner's Guide to the Electrum Bitcoin Wallet - Bitzuma][bitzuma]

[electrum]:                 https://electrum.org/
[bitcoin]:                  https://bitcoin.org/
[bitcoin-wallet]:           https://bitcoin.org/en/choose-your-wallet
[linux]:                    https://www.kernel.org/linux.html
[lightning]:                https://en.wikipedia.org/wiki/Lightning_Network
[4.0.5]:                    https://github.com/spesmilo/electrum/releases/tag/4.0.5
[kamarada-15.2]:            {% post_url en/2020-09-11-linux-kamarada-15.2-come-to-the-elegant-modern-green-side-of-the-force %}
[leap-15.2]:                {% post_url en/2020-07-02-opensuse-leap-15-2-release-brings-exciting-new-artificial-intelligence-ai-machine-learning-and-container-packages %}
[opensuse-repos]:           https://en.opensuse.org/Package_repositories
[softwareoo]:               https://software.opensuse.org/package/electrum
[electrum-network]:         https://build.opensuse.org/package/show/network:cryptocurrencies/electrum
[opensuse]:                 https://www.opensuse.org/
[python]:                   https://www.python.org/
[python3-aiorpcx]:          https://software.opensuse.org/package/python3-aiorpcX
[obs]:                      https://build.opensuse.org/package/show/network:cryptocurrencies/electrum
[flatpak]:                  https://flatpak.org/
[debian]:                   https://www.debian.org/
[ubuntu]:                   https://ubuntu.com/
[deb]:                      https://en.wikipedia.org/wiki/Deb_(file_format)
[redhat]:                   https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux
[fedora]:                   https://getfedora.org/
[rpm]:                      https://en.wikipedia.org/wiki/RPM_Package_Manager
[electrum-flatpak]:         https://flathub.org/apps/details/org.electrum.electrum
[flathub]:                  https://flathub.org/
[github-flatpak]:           https://github.com/flathub/org.electrum.electrum
[secp256k1]:                https://github.com/bitcoin-core/secp256k1
[debian-libsecp256k1]:      https://packages.debian.org/search?keywords=libsecp256k1
[ubuntu-libsecp256k1]:      https://packages.ubuntu.com/search?keywords=libsecp256k1
[libsecp256k1]:             https://software.opensuse.org/package/libsecp256k1
[how-to-verify-iso]:        {% post_url en/2018-11-08-verifying-data-integrity-and-authenticity-using-sha-256-and-gpg %}
[github]:                   https://github.com/spesmilo/electrum
[git]:                      https://git-scm.com/
[bitzuma]:                  https://bitzuma.com/posts/a-beginners-guide-to-the-electrum-bitcoin-wallet/
