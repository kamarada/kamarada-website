---
date: 2019-03-19 01:30:00 GMT-3
image: '/files/2019/03/obs-and-github.jpg'
layout: post
published: true
nickname: 'obs-and-github'
title: 'Integrating the Open Build Service with GitHub'
excerpt: 'Get your software built and available for download right after a git push!'
---

{% include image.html src="/files/2019/03/obs-and-github.jpg" %}

If you are developing software for [Linux], you should know the [**Open Build Service (OBS)**][obs]. What does it do that makes it such an interesting tool? Let me quote [its website][obs]:

> The Open Build Service (OBS) is a system to build and distribute binary packages from sources in an automatic, consistent and reproducible way. You can release packages as well as updates, add-ons, appliances and entire distributions for a wide range of operating systems and hardware architectures.

In practice, you software developer can upload your software souce to OBS and build ready to install packages for [openSUSE], [Fedora], [Debian], [Ubuntu] and other distributions, as well as packages for [i586], [x86_64], [ARM] and other architectures. Your software users can download those packages directly from OBS. It is also able to build [Live images][what-is-a-livecd-dvd-usb], so users can try your software on a clean and controlled system prior to actually installing anything.

OBS is [free software][free-software], so you can download, install and run it on a server of your own. Or (easier) you can use the reference server publicly and freely available at [build.opensuse.org][buildoo]. That server is used mainly for development of the openSUSE distribution, but it also hosts many community projects.

Also, if you are a software developer, you probably know [Git] and [GitHub] — they need no introduction. What if I tell you that you can integrate OBS with GitHub so that you always get your software built and available for download right after a `git push`?

How to set up that integration is what you are going to see here.

## OBS basics

I'm not going to dive into OBS basics here, I'll write an entire post about them someday. By now, you can find how to get started with OBS here:

- [Documentation - Open Build Service][obs-help]
- [openSUSE:Build Service Tutorial - openSUSE Wiki][obs-tutorial]

I assume that you are able to login with your openSUSE account at [build.opensuse.org][buildoo] (if you don't have an account yet, click on the **Sign Up** link at the top of the page to create one).

Create an empty package for your software at OBS. Here I'm going to use as example the Linux Kamarada's [patterns] GitHub repository, which by now has just a spec file.

If you don't know what a spec file is and/or are new to [RPM] packaging, read these:

- [Fedora RPM Guide][fedora-rpm-guide]
- [openSUSE:Packaging guidelines - openSUSE Wiki][opensuse-packaging]

I also assume that you have installed [**osc**][osc], the OBS command-line client, on your machine. If you are using openSUSE, you can do that running:

```
# zypper install osc
```

Checkout your OBS home project using:

```
$ osc checkout home:username
```

Enter the package directory:

```
$ cd home:username/packagename
```

Now let's integrate OBS with GitHub.

## OBS: retrieving sources from GitHub

Set up the [source service][obs-user-guide] to retrieve sources from GitHub using **osc**:

```
$ osc add git://github.com/kamarada/patterns.git
```

Edit the generated `_service` file and exchange its contents with:

```xml
<services>
    <service name="obs_scm">
        <param name="scm">git</param>
        <param name="url">git://github.com/kamarada/patterns.git</param>
        <param name="revision">15.1-dev</param>
        <param name="extract">patterns-kamarada-gnome.spec</param>
    </service>
</services>
```

Note that I'm using the `15.1-dev` branch. If you are going to use the `master` branch for your package, you can just omit the `revision` parameter.

Commit changes:

```
$ osc commit
```

The commit automatically triggers the source service and the build process. If you go to [build.opensuse.org][buildoo], your project is already building:

{% include image.html src="/files/2019/03/obs-and-github-1.jpg" %}

In order for GitHub to trigger your package build you need to generate a [token][obs-reference-guide-1] using **osc**:

```
$ osc token --create home:username packagename
```

The command will return the token and its id:

```xml
<status code="ok">
  <summary>Ok</summary>
  <data name="token">AcRaZyStRiNgWhIcHiSyOuRtOkeN</data>
  <data name="id">4321</data>
</status>
```

As a test, you can manually trigger your package build using the generated token:

```
$ osc token --trigger AcRaZyStRiNgWhIcHiSyOuRtOkeN
```

If you go to [build.opensuse.org][buildoo], your project is building.

## GitHub: alerting OBS of new commits

We want to update our package sources in OBS whenever they change in GitHub. We can have GitHub trigger that update automatically setting up a [GitHub webhook][github-webhook].

To do this execute the following steps:

1. Sign in to GitHub and go to your repository (in my case, [https://github.com/kamarada/patterns](https://github.com/kamarada/patterns))
2. Click **Settings**
3. Click **Webhooks**
4. Click the **Add webhook** button:

{% include image.html src="/files/2019/03/obs-and-github-2.jpg" %}

Provide the following parameters:

- **Payload URL:** `https://build.opensuse.org/trigger/webhook?id=4321` (remember to replace `4321` by your token's id)
- **Content type:** `application/x-www-form-urlencoded` (default)
- **Secret:** `AcRaZyStRiNgWhIcHiSyOuRtOkeN`

Leave the other parameters with their default values:

- **SSL verification**: Enable SSL verification
- **Which events would you like to trigger this webhook?** Just the push event.
- **Active**

Finally, click the **Add webhook** green button:

{% include image.html src="/files/2019/03/obs-and-github-3.jpg" %}

Back to the previous page, you can see the added webhook:

{% include image.html src="/files/2019/03/obs-and-github-4.jpg" %}

From now on, each `git push` to GitHub will trigger a package rebuild in OBS. Your username will appear in the `osc log` source history.

Have a lot of fun!

## References

- [openSUSE:Build Service Tutorial - openSUSE Wiki][obs-tutorial]
- [Let github.com trigger your source update - OBS blog][obs-blog]
- [OBS + GitHub - deprecation of GitHub Services - opensuse-buildservice Mailing List Archive][mailing-list-1] (and its [follow up][mailing-list-2] a few months later)
- [Integrating External Source Repositories - OBS Reference Guide][obs-reference-guide-2]
- [Using Source Services - OBS User Guide][obs-user-guide]
- [OBS Token Authorization - OBS Reference Guide][obs-reference-guide-1]
- [GitHub - seccubus/obs_autobuild_test: Test to see how you make OpenSUSE build services build automagically][seccubus]

[linux]:                    https://www.kernel.org/linux.html
[obs]:                      https://openbuildservice.org/
[opensuse]:                 https://www.opensuse.org/
[fedora]:                   https://getfedora.org/
[debian]:                   https://www.debian.org
[ubuntu]:                   https://www.ubuntu.com/
[i586]:                     https://en.wikipedia.org/wiki/X86
[x86_64]:                   https://en.wikipedia.org/wiki/X86-64
[arm]:                      https://en.wikipedia.org/wiki/ARM_architecture
[what-is-a-livecd-dvd-usb]: {%post_url en/2015-11-25-what-is-a-livecd-dvd-usb %}
[free-software]:            https://www.gnu.org/philosophy/free-sw.en.html
[buildoo]:                  https://build.opensuse.org
[github]:                   https://github.com/
[git]:                      https://git-scm.com/
[obs-help]:                 https://openbuildservice.org/help/
[obs-tutorial]:             https://en.opensuse.org/openSUSE:Build_Service_Tutorial
[patterns]:                 https://github.com/kamarada/patterns/tree/15.1-dev
[rpm]:                      https://en.wikipedia.org/wiki/RPM_Package_Manager
[fedora-rpm-guide]:         http://docs.fedoraproject.org/en-US/Fedora_Draft_Documentation/0.1/html/RPM_Guide/index.html
[opensuse-packaging]:       https://en.opensuse.org/openSUSE:Packaging_guidelines
[osc]:                      https://linux.die.net/man/1/osc
[obs-user-guide]:           https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.source_service.html
[obs-reference-guide-1]:    https://openbuildservice.org/help/manuals/obs-reference-guide/cha.obs.authorization.token.html#id-1.7.18.4
[github-webhook]:           https://developer.github.com/webhooks/
[obs-blog]:                 https://openbuildservice.org/2013/11/22/source-update-via_token/
[mailing-list-1]:           https://lists.opensuse.org/opensuse-buildservice/2018-05/msg00042.html
[mailing-list-2]:           https://lists.opensuse.org/opensuse-buildservice/2018-10/msg00034.html
[obs-reference-guide-2]:    https://openbuildservice.org/help/manuals/obs-reference-guide/cha.obs.concepts.html#concept_scm_integration
[seccubus]:                 https://github.com/seccubus/obs_autobuild_test
