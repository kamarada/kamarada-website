---
date: '2020-12-07 00:20:00 GMT-3'
image: '/files/2020/12/leap-tumbleweed.png'
layout: post
published: true
nickname: 'leap-vs-tumbleweed'
title: 'openSUSE Leap vs openSUSE Tumbleweed: what is the difference?'
---

{% include image.html src="/files/2020/12/leap-tumbleweed.png" %}

When I started using [openSUSE], back to [2012][vinyanalista], "openSUSE" was the name of both the [Linux] distribution and the project maintaining it. Today, the openSUSE Project offers two distributions, called [Leap] and [Tumbleweed]. In this text, you are going to see how they differ from each other and how they were born.

<!--more-->

First, let's see what these Linux distributions are and the differences between them:

- **[openSUSE Leap][leap]:** more stable, keeps the regular release cycle of the old but gold openSUSE (and other traditional distributions such as [Ubuntu], [Debian] and [Fedora]), but brings a new development process, it is currently at [version 15.2][leap-15.2] and new versions are released usually once a year; and

- **[openSUSE Tumbleweed][tumbleweed]:** is a _rolling release_ version of openSUSE, that means it does not have different versions, but just the latest version, which always contains the latest software, Tumbleweed receives small and frequent updates whenever a software is updated, similar to distributions such as [Arch], [Manjaro] and [Gentoo].

Leap is best suited for novice users and organizations, who tend to avoid frequent updates. Tumbleweed is preferred by enthusiastic users who want bleeding edge Linux.

Usually I write about openSUSE Leap here. It's the distro that I've been using for years and recommend for everyone, so much so that I made [Linux Kamarada][kamarada-15.2] based on it. Linux Kamarada is currently at [version 15.2][kamarada-15.2], based on the latest openSUSE Leap release, also 15.2. I use identical version numbers to show this alignment.

## A little history and more details

The openSUSE Project develops its distributions on the [openSUSE Build Service][obs] (OBS), more precisely on the [Factory] repository. New versions of packages always enter openSUSE via this repository. If you are familiar to Debian, the openSUSE Factory repo is like the [unstable][debian-sid] ("sid") Debian repo.

The Tumbleweed project was started in [November 2010][tumbleweed-2010] by [Greg Kroah-Hartman][gkh], a major [Linux kernel][linux-kernel] developer who at that time was working for [Novell], then owner of [SUSE]. Originally, it was not exactly an entire distribution itself, but an "add-on" set of rolling updates which could be installed on top of the regular openSUSE release.

At that time, the openSUSE Project had only one distribution, which was openSUSE 11.3.

Four years later, in [November 2014][opensuse-13.2], openSUSE 13.2 was released. It ended up being the last regular openSUSE release to be called as just "openSUSE". At the same time, the Factory and Tumbleweed projects were [merged][tumbleweed-2014], creating the openSUSE Tumbleweed rolling release we have today.

{% include image.html src="/files/2020/12/tumbleweed.jpg" %}

On the OBS, the [Factory][factory-obs] repo still exists internally. The core system packages are subjected to automated tests by the [openQA] tool integrated with OBS. When automated testing is completed and the repo is in a state considered stable, then the repo is synced to the [mirrors] and published as openSUSE Tumbleweed. Each of these updates are logged as [snapshots] and they usually happen two to three times a week.

At the end of 2014, therefore, the openSUSE Project was offering 2 distros: openSUSE 13.2 and openSUSE Tumbleweed.

Aiming to improve the release process, SUSE decided to release [SUSE Linux Enterprise][sle] (SLE) sources for the community to use and help offering a distribution based on it. To express this change, the openSUSE Project decided that the [version number][opensuse-42] of the next regular release would jump to 42 and the [name][leap-name] of the distro would change to Leap. And so the successor to openSUSE 13.2 was [openSUSE Leap 42.1][leap-42.1], released in [November 2015][leap-42.1].

{% include image.html src="/files/2020/12/leap.jpg" %}

So, at the end of 2015, the openSUSE Project was already offering its 2 distros with the same names they use nowadays: openSUSE Leap 42.1 and openSUSE Tumbleweed.

The number 42 — the answer to "the ultimate question of life, the universe, and everything" — was a reference to the [Hitchhiker's Guide to the Galaxy][42]. The number 1 indicated the alignment with the SLE 12 Service Pack 1 (SP1).

Probably that jump of the version number was mainly a marketing strategy, because after versions [42.2] and [42.3], the lower version numbers returned, closer to the ones used before. SUSE and openSUSE [decided][leap-15-announcement] that the next releases of their distros would be [openSUSE Leap 15.0][leap-15.0] and SLE 15. Since then, we had [openSUSE Leap 15.1][leap-15.1] and [15.2][leap-15.2] and the next release will be [15.3].

{% include image.html src="/files/2020/12/opensuse-releases.png" caption="openSUSE releases (source: [Wikipedia](https://en.wikipedia.org/wiki/OpenSUSE_version_history))" %}

The name Leap refers to the way how the distribution moves forward, which distinguishes it from the other distribution, Tumbleweed. By the way, have you ever seen a rolling plant in a western movie? In case you haven't, this is what is looks like, it's called a [tumbleweed][tumbleweed-wikipedia]:

{% include image.html src="/files/2020/12/tumbleweed.gif" %}

While Leap users "jump" from one version to another (e.g. from 15.0 to 15.1, from 15.1 to 15.2, and so on), Tumbleweed users are constantly "rolling" in the only version that exists, which is always the latest one, with the latest software.

[opensuse]:             https://www.opensuse.org/
[vinyanalista]:         https://vinyanalista.github.io/blog/2012/04/21/problemas-envolvendo-bootloaders-mbr-e-tabela-de-particoes/
[linux]:                https://www.kernel.org/linux.html
[leap]:                 https://en.opensuse.org/Portal:Leap
[tumbleweed]:           https://en.opensuse.org/Portal:Tumbleweed
[leap-15.2]:            {% post_url en/2020-07-02-opensuse-leap-15-2-release-brings-exciting-new-artificial-intelligence-ai-machine-learning-and-container-packages %}
[ubuntu]:               https://ubuntu.com/
[debian]:               https://www.debian.org/
[fedora]:               https://getfedora.org/
[arch]:                 https://www.archlinux.org/
[manjaro]:              https://manjaro.org/
[gentoo]:               https://www.gentoo.org/
[kamarada-15.2]:        {% post_url en/2020-09-11-linux-kamarada-15.2-come-to-the-elegant-modern-green-side-of-the-force %}
[obs]:                  https://build.opensuse.org/
[factory]:              https://en.opensuse.org/Portal:Factory
[debian-sid]:           https://www.debian.org/releases/sid/
[tumbleweed-2010]:      https://lists.opensuse.org/opensuse-project/2010-11/msg00206.html
[gkh]:                  https://en.wikipedia.org/wiki/Greg_Kroah-Hartman
[linux-kernel]:         https://www.kernel.org/
[novell]:               https://en.wikipedia.org/wiki/Novell
[suse]:                 https://www.suse.com/
[opensuse-13.2]:        https://news.opensuse.org/2014/11/04/opensuse-13-2-green-light-to-freedom/
[tumbleweed-2014]:      https://news.opensuse.org/2014/10/24/tumbleweed-factory-rolling-releases-to-merge/
[factory-obs]:          https://build.opensuse.org/project/show/openSUSE:Factory
[openqa]:               https://openqa.opensuse.org/
[mirrors]:              https://en.opensuse.org/openSUSE:Mirrors
[snapshots]:            https://review.tumbleweed.boombatower.com/
[sle]:                  https://www.suse.com/products/
[opensuse-42]:          https://lists.opensuse.org/opensuse-factory/2015-06/msg00203.html
[leap-name]:            https://lists.opensuse.org/opensuse-project/2015-07/msg00054.html
[leap-42.1]:            {% post_url en/2015-11-04-opensuse-leap-42-1-becomes-first-hybrid-distribution %}
[42]:                   https://en.wikipedia.org/wiki/The_Hitchhiker's_Guide_to_the_Galaxy
[42.2]:                 {% post_url en/2016-11-16-optimal-release-for-linux-professionals-arrives-with-opensuse-leap-42-2 %}
[42.3]:                 {% post_url en/2017-07-26-refresh-of-linux-distribution-continues-leveraging-community-enterprise-benefits %}
[leap-15-announcement]: https://lists.opensuse.org/opensuse-project/2017-04/msg00014.html
[leap-15.0]:            {% post_url en/2018-05-25-based-on-enterprise-code-tested-millions-of-times-opensuse-leap-15-released %}
[leap-15.1]:            {% post_url en/2019-05-22-opensuse-community-releases-leap-15-1-version %}
[15.3]:                 https://lists.opensuse.org/opensuse-announce/2020-04/msg00000.html
[tumbleweed-wikipedia]: https://en.wikipedia.org/wiki/Tumbleweed
