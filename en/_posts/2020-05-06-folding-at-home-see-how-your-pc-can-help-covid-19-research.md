---
date: '2020-05-06 20:00:00 GMT-3'
layout: post
title: 'Folding@home: see how your PC can help Covid-19 research'
image: '/files/2020/05/fah.jpg'
nickname: 'fah'
---

Around the world, many people are doing their best to combat the current [Covid-19] pandemic in many different (and creative) ways: from [3D printed face shields][face-shields] and [homebrew face masks][face-masks] to [replacements for full-fledged mechanical ventilators][ventilator], the outpouring of ideas and contributions has been impressive and motivating. At universities, researchers try to model and understand the coronavirus, a challenging task that involves complex calculations and requires massive computing power, and that has also been receiving help from volunteers.

In this regard, the best-known project is [**Folding@home**][fah] (**F@h** or **FAH**). Its website provides a program that anyone can run on their computer to contribute to research by donating their household's unused computing power. The program downloads a task, works on it and sends the result back, contributing to the bigger task, which is modeling the virus.

{% include image.html src="/files/2020/05/fah.jpg" %}

## A little about the project

Folding@home was created in 2000 by the [Pande Lab][pandelab] at the [Stanford University][stanford], led by professor [Dr. Vijay Pande][pande]. He sought to understand how proteins self-organize (a process called **protein folding**, hence the project name) and why this process sometimes goes wrong, causing issues such as [cancer] and [Alzheimer's disease][alzheimer]. Since 2018, the project is based at the [Washington University in St. Louis][wustl], led by professor [Dr. Gregory Bowman][bowman], a former student of Dr. Pande, and receives contributions from other universities and companies.

The project has already produced big findings, reported in [224 research papers][fah-papers], which include work on antibiotic-resistant bacteria and proteins from the [Ebola virus][ebola].

By January 2020, Folding@home had the support of 30,000 users, which was already pretty good, but that number suddenly jumped to 400,000 in March, due to people's interest in helping find a therapy for Covid-19. Many of those new users embarked on the project together with [NVIDIA], which tweeted out a "call to arms".

<div class="d-flex justify-content-center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">PC Gamers, let’s put those GPUs to work. <br><br>Join us and our friends at <a href="https://twitter.com/OfficialPCMR?ref_src=twsrc%5Etfw">@OfficialPCMR</a> in supporting folding@home and donating unused GPU computing power to fight against COVID-19! <br><br>Learn more → <a href="https://t.co/EQE4u7xTZT">https://t.co/EQE4u7xTZT</a> <a href="https://t.co/uO0ZCq8PEv">pic.twitter.com/uO0ZCq8PEv</a></p>&mdash; NVIDIA GeForce (@NVIDIAGeForce) <a href="https://twitter.com/NVIDIAGeForce/status/1238496311776653312?ref_src=twsrc%5Etfw">March 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

Folding@home reached a peak [performance][fah-stats] of 1.5 [exaFLOPs], making it more than seven times faster than [the world's current fastest supercomputer, IBM Summit][summit].

## Minimum system requirements

There are no minimum hardware requirements to enter Folding@home, all computers can contribute to the project. However, if the computer is too slow, it might not be fast enough to make the deadlines of typical tasks. The project [estimates][fah-faq] that computers built in the last 5 years or so can well meet the demand. On the other side, gaming PCs with a NVIDIA or [AMD] graphics card are the ideal candidates due to their greater capacity for parallel processing.

Note that tasks are very processor-intensive and your computer might overheat.

## Is this program open source?

Maybe this is important to you, so I think it's worth noting: the Folding@home program is **not** [open source][opensource], although it is built from several open source tools, among which are [mentioned][fah-opensource] on the project's website: [Gromacs], [TINKER], [Amber] and [MPICH]. The project states that any changes it makes to those tools are contributed back.

The project's [justification][fah-faq] for not open sourcing the program is the concern for scientific integrity, since malicious people could modify the code to produce bogus scientific results, which would make the whole project pointless.

I won't discuss whether I agree or not, I just reproduced the information I found on the project's website.

If despite of that you want to donate your computing power for Covid-19 research, now you are going to see how. As usual, I focus on [openSUSE] and [Linux Kamarada][kamarada-15.1]. In other [Linux distributions][linux], the step-by-step may be slightly different.

## Download

Go to the Folding@home download page:

- [https://foldingathome.org/start-folding/](https://foldingathome.org/start-folding/)

Observe that Folding@home does not officially support openSUSE, but we can make it work. See that there are 3 RPM packages for close distributions ([RedHat], [CentOS] and [Fedora]):

{% include image.html src="/files/2020/05/fah-download.jpg" %}

You don't need to actually install all the 3 packages. See what each one is:

- **FAHClient**: this is the most important package because it contains:
  - the client software that downloads tasks, works on them and sends the results back, typically runs behind the scenes (in background), as a system service, without user interaction (back-end)
  - a simple web interface which you can access from the web browser to monitor the client and minimally set it up (front-end)
- **FAHControl**: a graphical user interface (GUI) application that allows you to monitor the client and make more advanced settings, this package is optional
- **FAHViewer**: a GUI application that allows you to view the model on which your computer is working, this package is optional

For demonstration purposes, I'm going to download and install each of them. Feel free to download and install just the one(s) you want.

## FAHClient

After downloading the **fahclient** RPM package, open a terminal window in the folder where it was downloaded and install it by running this command as administrator (_root_ user):

```
# zypper in fahclient-7.6.9-1.x86_64.rpm
```

The **zypper** package manager informs that it cannot find a dependency of the package:

```
Loading repository data...
Reading installed packages...
Resolving package dependencies...

Problem: nothing provides bzip2-libs needed by fahclient-7.6.9-1.x86_64
 Solution 1: do not install fahclient-7.6.9-1.x86_64
 Solution 2: break fahclient-7.6.9-1.x86_64 by ignoring some of its dependencies

Choose from above solutions by number or cancel [1/2/c/d/?] (c):
```

Remember that this RPM package was not made for openSUSE, which provides the **[bzip2]** libraries in a package named **libbz2-1**, which is already installed by default. Thus, type `2` (meaning you want to ignore the missing dependency) and hit **Enter**:

```
Choose from above solutions by number or cancel [1/2/c/d/?] (c): 2
Resolving dependencies...
Resolving package dependencies...

The following NEW package is going to be installed:
  fahclient

1 new package to install.
Overall download size: 3.5 MiB. Already cached: 0 B. After the operation, additional 8.9 MiB will be used.
Continue? [y/n/v/...? shows all options] (y):
```

Hit **Enter** to accept the default option (`y`, which here means "yes, continue").

Then, **zypper** is faced with another problem. The package is not signed and, therefore, it's not possible to do [authenticity verification][gpg]:

```
Retrieving package fahclient-7.6.9-1.x86_64                          (1/1),   3.5 MiB (  8.9 MiB unpacked)
fahclient-7.6.9-1.x86_64.rpm:
    Package is not signed!

fahclient-7.6.9-1.x86_64 (Plain RPM files cache): Signature verification failed [6-File is unsigned]
Abort, retry, ignore? [a/r/i] (a):
```

This error message is common when installing a manually downloaded RPM package (not a package retrieved from a known repository). You can safely type `i` (ignore) and press **Enter**:

```
Abort, retry, ignore? [a/r/i] (a): i

Checking for file conflicts: .......................................................................[done]
(1/1) Installing: fahclient-7.6.9-1.x86_64 .........................................................[done]
Additional rpm output:
Unknown option: levels
usage:
        chkconfig -A|--allservices              (together with -l: show all services)
        chkconfig -t|--terse [names]            (shows the links)
        chkconfig -e|--edit  [names]            (configure services)
        chkconfig -s|--set   [name state]...    (configure services)
        chkconfig -l|--list [--deps] [names]    (shows the links)
	chkconfig -L|--liston [--deps] [names]  (as -l, enabled in at least 1 level)
        chkconfig -c|--check name [state]       (check state)
        chkconfig -a|--add   [names]            (runs insserv)
        chkconfig -d|--del   [names]            (runs insserv -r)
        chkconfig -h|--help                     (print usage)
        chkconfig -f|--force ...                (call insserv with -f)

        chkconfig [name]             same as chkconfig -t
        chkconfig name state...      same as chkconfig -s name state
        chkconfig --root=<root> ...  use <root> as the root file system
Starting fahclient ... FAIL
```

**zypper** finishes the installation, but shows a few more error messages. Again, remember that this RPM package was not made for openSUSE. Although one of those error messages informs that the client failed to start, that's not the case.

If you use the **[htop]** command, you will notice that not only the client is running, but it also quickly puts your processor to work hard, reaching 100% usage:

```
$ htop
```

{% include image.html src="/files/2020/05/fahclient-01-en.jpg" %}

To exit **htop**, hit **F10** or click **Quit** on the bottom-right corner of the window.

Reload the system services (needed because FAHClient is still based on `/etc/init.d`):

```
# systemctl daemon-reload
```

And enable the FAHClient service so that it gets started automatically at boot time:

```
# systemctl enable FAHClient
```

To finish the configuration, open your web browser and go to [client.foldingathome.org](http://client.foldingathome.org/):

{% include image.html src="/files/2020/05/fahclient-02.jpg" %}

That page redirects to your FAHClient's web interface. If you prefer, you can access it directly at [localhost:7396](http://localhost:7396/).

In **I support research fighting**, there is a dropdown menu that you can open and select a disease to direct your computer efforts:

{% include image.html src="/files/2020/05/fahclient-03.jpg" %}

You can choose a line of research of your choice (e.g. **COVID-19**) or leave the default, which is to contribute to researches against **Any disease**.

In **Power**, you can define how much of your processing power will be donated (default is **Light**).

In **When**, you can define when the computer will work on protein folding: during all the time, even while you are using the computer (**While I'm working**, default) or only while you're away from the computer (**Only when idle**).

If you need, you can stop the FAHClient's work at any time by clicking the **Stop Folding** button.

Note that closing this browser tab does not stop FAHClient's work, which runs in background.

That's it, congratulations! You are already contributing to researches. If you want, you can stop here, the following steps are optional. Follow me the curious ones!

## FAHControl

You can install the **fahcontrol** package the same way:

```
# zypper in fahcontrol-7.6.9-1.noarch.rpm
```

Once installed, to start FAHControl, if you use the [GNOME] desktop, click **Activities**, on the top-left screen corner, type `fah` and click the **FAHControl** icon:

{% include image.html src="/files/2020/05/fahcontrol-01-en.jpg" %}

Note that this application presents the same options of the web interface and more:

{% include image.html src="/files/2020/05/fahcontrol-02-en.jpg" %}

If you need, you can pause the FAHClient's work at any time by clicking the **Pause** button, or abort it completely using the **Finish** button. In both cases, to resume working, click **Fold**.

Note that closing this program does not stop FAHClient's work as well.

## FAHViewer

You can install the **fahviewer** package the same way:

```
# zypper in fahviewer-7.6.9-1.noarch.rpm
```

Once installed, to start FAHViewer, if you use the GNOME desktop, click **Activities**, type `fah` and click the **FAHViewer** icon:

{% include image.html src="/files/2020/05/fahviewer-01-en.jpg" %}

This app shows you graphically the model your computer is working on:

{% include image.html src="/files/2020/05/fahviewer-02.jpg" %}

If you want, you can rotate the protein 3D image using the mouse.

## References

- [Folding@Home: How Your PC Can Help in the Fight Against COVID-19][medium]
- [Folding@home - Fighting disease with a world wide distributed super computer][fah]
- [Folding@home - Wikipedia][wikipedia]
- [So What Is Protein Folding, Anyway? - Hackaday][hackaday]
- [The coronavirus pandemic turned Folding@Home into an exaFLOP supercomputer - Ars Technica][arstechnica]
- [init.d - What's the easiest way to make my old init script work in systemd? - Server Fault][serverfault]

[covid-19]:         https://en.wikipedia.org/wiki/Coronavirus_disease_2019
[face-shields]:     https://hackaday.com/2020/03/29/nih-approved-3d-printed-face-shield-design-for-hospitals-running-out-of-ppe/
[face-masks]:       https://hackaday.com/2020/03/18/homemade-masks-in-a-time-of-shortage/
[ventilator]:       https://hackaday.com/2020/03/23/mit-ventilator-designed-with-common-manual-resuscitator-submitted-for-fda-testing/
[fah]:              https://foldingathome.org/
[pandelab]:         https://www.pandelab.org/
[stanford]:         https://www.stanford.edu/
[pande]:            https://profiles.stanford.edu/vijay-pande
[cancer]:           https://en.wikipedia.org/wiki/Cancer
[alzheimer]:        https://en.wikipedia.org/wiki/Alzheimer's_disease
[wustl]:            https://wustl.edu/
[bowman]:           https://bowmanlab.biochem.wustl.edu/
[fah-papers]:       https://foldingathome.org/papers-results/
[ebola]:            https://en.wikipedia.org/wiki/Zaire_ebolavirus
[nvidia]:           https://www.nvidia.com/
[fah-stats]:        https://stats.foldingathome.org/os
[exaflops]:         https://en.wikipedia.org/wiki/FLOPS
[summit]:           https://en.wikipedia.org/wiki/Summit_(supercomputer)
[fah-faq]:          https://foldingathome.org/support/faq/project-details/
[amd]:              https://www.amd.com/
[opensource]:       https://opensource.org/osd
[fah-opensource]:   https://foldingathome.org/support/faq/opensource/
[gromacs]:          http://www.gromacs.org
[tinker]:           http://dasher.wustl.edu
[amber]:            http://ambermd.org/
[mpich]:            http://www-unix.mcs.anl.gov/mpi/mpich/
[kamarada-15.1]:    {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[linux]:            https://www.kernel.org/linux.html
[opensuse]:         https://www.opensuse.org/
[redhat]:           https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux
[centos]:           https://www.centos.org/
[fedora]:           https://getfedora.org/
[bzip2]:            http://www.bzip.org/
[gpg]:              {% post_url en/2018-11-08-verifying-data-integrity-and-authenticity-using-sha-256-and-gpg %}
[htop]:             http://hisham.hm/htop/
[gnome]:            https://www.gnome.org/
[medium]:           https://medium.com/syncedreview/folding-home-how-your-pc-can-help-in-the-fight-against-covid-19-69ed30a5a144
[wikipedia]:        https://en.wikipedia.org/wiki/Folding@home
[hackaday]:         https://hackaday.com/2020/04/14/so-what-is-protein-folding-anyway/
[arstechnica]:      https://arstechnica.com/science/2020/04/how-the-pandemic-revived-a-distributed-computing-project-and-made-history/
[serverfault]:      https://serverfault.com/a/713857/357679
