---
date: '2020-04-20 00:25:00 GMT-3'
layout: post
title: 'Remote Desktop Connection to Windows from Linux using RDP clients'
image: '/files/2020/04/rdp-client.jpg'
nickname: 'rdp-client'
---

Have you ever used the [Windows] app [**Remote Desktop Connection**][win-rdc]? This app, included in all Windows installations, allows you to remotely access another Windows PC or a server with [Windows Server][windows-server]. For this purpose, it employs the [Remote Desktop Protocol][rdp] (RDP).

Organizations can install applications on a central server instead of various computers. To use those applications, employees must remotely access that server. Such centralization can make maintenance and troubleshooting easier. This technology was formerly known as [Terminal Services][ts] (TS). Currently, web systems are more common. But, in some scenarios, Windows remote apps are still needed.

In those scenarios, [Linux] users can remotely access Windows computers and servers from their favorite system using an RDP client.

{% include image.html src='/files/2020/04/rdp-client.jpg' %}

There are a few RDP clients available for Linux and we are going to talk about them today:

1. [Remmina](#remmina)
2. [FreeRDP](#freerdp)
3. [rdesktop](#rdesktop)
4. [Vinagre](#vinagre)

You can choose the one you like best or the one that best suits your needs.

Out of curiosity, FreeRDP is both an app and a library, which provides reusable features for other apps. Except for rdesktop, all of the other clients above use the FreeRDP library.

## Enabling remote desktop on Windows

First of all, you must set up the computer you want to connect to so it allows remote connections. On the Windows machine you want to connect to, logged on with an administrator account, open the **Start menu** and click **Settings**. To do that, on the window that appears, open the **System** category, and then **Remote Desktop**. Finally, enable it:

{% include image.html src="/files/2020/04/windows-rdp-01-en.png" %}

Note that you can't connect to computers running a Windows Home edition (for instance, Windows 10 Home). This screen informs you, if that is the case:

{% include image.html src="/files/2020/04/windows-rdp-02-en.jpg" caption="Your Home edition of Windows 10 doesn&apos;t support Remote Desktop." %}

Source of the image: [Digital Citizen](https://www.digitalcitizen.life/enable-remote-desktop-windows)

If you want more information about remote desktop on Windows, take a look at:

- [How to use Remote Desktop - Windows Support][win-rdc]
- [Remote Desktop - Allow access to your PC - Microsoft Docs][microsoft-docs]

<div class="media mb-3">
    <img src="/files/2020/04/remmina.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0" id="remmina">Remmina</h2>
    </div>
</div>

[Remmina] is a remote desktop client that supports many remote access protocols such as RDP, [VNC], [NX], [XDMCP] and [SSH]. It aims to be useful for system administrators and travellers, who need to work with lots of remote desktops and/or servers. Remmina is included in the [Ubuntu] Linux distribution and is its default remote desktop client.

To install Remmina on [Linux Kamarada][kamarada-15.1] and [openSUSE], run:

```
# zypper in remmina remmina-plugin-rdp
```

Once installed, to start Remmina, if you use the [GNOME] desktop environment, open the **Activities** menu, on the top-left screen corner, type `remmina` and click its icon:

{% include image.html src="/files/2020/04/remmina-01-en.jpg" %}

To quickly start a remote access, select the **RDP** protocol, type the hostname or IP address of the computer you want to connect to (e.g. `10.0.0.251`) and hit **Enter**:

{% include image.html src="/files/2020/04/remmina-02-en.png" %}

If it's the first time you connect to this computer, Remmina asks whether to trust its certificate, click **Yes**:

{% include image.html src="/files/2020/04/remmina-03-en.png" %}

On the next screen, enter your **User name** and **Password** on the remote computer. Also inform the **Domain**, if necessary. Optionally, you can choose to **Save password**. Click **OK**:

{% include image.html src="/files/2020/04/remmina-04-en.png" %}

You will see the remote computer's desktop in the Remmina window:

{% include image.html src="/files/2020/04/remmina-05-en.jpg" %}

From now on, you are using that computer, but remotely, without sitting in front of it. Each clicking and typing is sent to be processed on the remote computer.

If the remote computer is a Windows desktop, its screen is locked during remote access.

If you are going to access this computer often, consider saving the connection settings, so that remote access can be easily initiated. To do this, click the **Create a new connection profile** button on the top-left corner of the Remmina main window:

{% include image.html src="/files/2020/04/remmina-06-en.jpg" %}

On the next screen, give a **Name** to identify the connection, select **RDP** in the **Protocol** field and enter the connection settings: **Server**, **User name**, **User password** and **Domain** (if necessary). When you're finished, click **Save**:

{% include image.html src="/files/2020/04/remmina-07-en.png" %}

After that, the connection becomes listed on the Remmina main window:

{% include image.html src="/files/2020/04/remmina-08-en.png" %}

When you want to remotely access that computer, just double-click it on the list.

<div class="media mb-3">
    <img src="/files/2020/02/utilities-terminal.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0" id="freerdp">FreeRDP</h2>
    </div>
</div>

[FreeRDP] is a [free][free-sw] implementation of the Remote Desktop Protocol following the [Microsoft Open Specifications][freerdp-ref]. This implementation provides both the client and the server applications as well as a library, which allows other applications to use the RDP protocol. Today, we are interested in the FreeRDP client application.

To install the FreeRDP client on Linux Kamarada and openSUSE, run:

```
# zypper in freerdp
```

The FreeRDP client does not have a main screen like Remmina. To start a remote access using the FreeRDP client, run this command from a terminal:

```
$ xfreerdp /v:hostname_or_ip_address /u:username
```

Making the appropriate substitutions. For example:

```
$ xfreerdp /v:10.0.0.251 /u:Kamarada
```

If you need to inform the computer's domain, use the `/d` parameter:

```
$ xfreerdp /v:hostname_or_ip_address /d:domain /u:username
```

If it's the first time you connect to this computer, the FreeRDP client asks whether to trust its certificate:

```
[18:10:18:588] [3213:3214] [INFO][com.freerdp.client.common.cmdline] - loading channelEx cliprdr
[18:10:18:604] [3213:3214] [INFO][com.freerdp.crypto] - creating directory /home/linux/.config/freerdp
[18:10:18:604] [3213:3214] [INFO][com.freerdp.crypto] - creating directory [/home/linux/.config/freerdp/certs]
[18:10:18:604] [3213:3214] [INFO][com.freerdp.crypto] - created directory [/home/linux/.config/freerdp/server]
[18:10:18:613] [3213:3214] [ERROR][com.freerdp.crypto] - @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
[18:10:18:613] [3213:3214] [ERROR][com.freerdp.crypto] - @           WARNING: CERTIFICATE NAME MISMATCH!           @
[18:10:18:613] [3213:3214] [ERROR][com.freerdp.crypto] - @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
[18:10:18:613] [3213:3214] [ERROR][com.freerdp.crypto] - The hostname used for this connection (10.0.0.251:3389)
[18:10:18:613] [3213:3214] [ERROR][com.freerdp.crypto] - does not match the name given in the certificate:
[18:10:18:613] [3213:3214] [ERROR][com.freerdp.crypto] - Common Name (CN):
[18:10:18:613] [3213:3214] [ERROR][com.freerdp.crypto] - 	WinDev2003Eval
[18:10:18:613] [3213:3214] [ERROR][com.freerdp.crypto] - A valid certificate for the wrong name should NOT be trusted!
Certificate details:
	Subject: CN = WinDev2003Eval
	Issuer: CN = WinDev2003Eval
	Thumbprint: 23:7e:de:bc:85:d7:13:f3:e5:ce:e2:56:58:93:7d:f7:db:d1:bd:85
The above X.509 certificate could not be verified, possibly because you do not have
the CA certificate in your certificate store, or the certificate has expired.
Please look at the OpenSSL documentation on how to add a private CA to the store.
Do you trust the above certificate? (Y/T/N)
```

Type `Y` (yes) and hit **Enter**. Then type your user password on the remote computer and hit **Enter**:

```
Do you trust the above certificate? (Y/T/N) Y
Password:
[18:11:31:595] [3213:3214] [INFO][com.freerdp.gdi] - Local framebuffer format  PIXEL_FORMAT_BGRX32
[18:11:31:596] [3213:3214] [INFO][com.freerdp.gdi] - Remote framebuffer format PIXEL_FORMAT_RGB16
[18:11:32:782] [3213:3214] [INFO][com.winpr.clipboard] - initialized POSIX local file subsystem
```

After that, the remote desktop connection is initiated:

{% include image.html src="/files/2020/04/freerdp-en.jpg" %}

If you have ever started the remote desktop connection on Windows by the **Command Prompt** (using the **[mstsc]** command), you may have noticed that the FreeRDP client uses the same command syntax. It was implemented that way on purpose, to keep compatibility.

If you are a curious person and want to check it out by yourself:

- on Windows, run:

```
> mstsc /?
```

- on Linux, run:

```
$ xfreerdp /?
```

<div class="media mb-3">
    <img src="/files/2020/02/utilities-terminal.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0" id="rdesktop">rdesktop</h2>
    </div>
</div>

[rdesktop] was the first RDP client for Linux and, for many years, it was the most used. But since [November 2019][rdesktop-group], the project is looking for a new  maintainer.

In contrast, [FreeRDP was born in 2009][freerdp-blog] as a fork of rdesktop, when [Microsoft] decided to open the RDP specifications. As time passed and the FreeRDP project evolved, it became the standard RDP client on systems where no native Microsoft client is available.

I present rdesktop here for information purposes only. Unless you have a good reason to use it, you are advised to use one of the other RDP clients, based on FreeRDP.

To install rdesktop on Linux Kamarada and openSUSE, run:

```
# zypper in rdesktop
```

Then, to start a remote access using rdesktop, invoke it from a terminal followed by the hostname or IP address of the computer you want to connect to. For example:

```
$ rdesktop 10.0.0.251
```

In the past, that would suffice and rdesktop would just work. But now we face a problem that comes from the lack of proper maintenance and updates:

```
Autoselected keyboard map en-us
ERROR: CredSSP: Initialize failed, do you have correct kerberos tgt initialized ?
Failed to connect, CredSSP required by server.
```

At some point, Microsoft released an Windows update that has since made the use of [Network Level Authentication][nla] (NLA) required by default. FreeRDP does support NLA, while rdesktop does not. You can still use rdesktop for remote access, as long as you disable NLA on the computer you want to connect to. Note that this makes the connection less secure.

To disable NLA on the Windows machine you want to connect to, logged on with an administrator account, open the **Control Panel**, open the **System and Security** category, then click the **System** icon. On the next screen, click the **Remote settings** link by the left. On the dialog box that appears, select the **Remote** tab. Finally, disable the option **Allow connections only from computers running Remote Desktop with Network Level Authentication** and click **OK**:

{% include image.html src="/files/2020/04/windows-rdp-03-en.png" %}

With NLA disabled, back to the Linux computer that will start the remote access, try again:

```
$ rdesktop 10.0.0.251
```

This time, rdesktop will work. A window presents the Windows logon screen. Enter your username and password and press **Enter** to start the remote access:

{% include image.html src="/files/2020/04/rdesktop-en.jpg" %}

If you want more information about that rdesktop bug, see:

- [CredSSP does not work - Issue #71 - rdesktop/rdesktop - GitHub][rdesktop-bug-1]
- [Add support for Network Level Authentication - Issue #279 - rdesktop/rdesktop - GitHub][rdesktop-bug-2]
- [Doesn't work if there is Fortress machine between connecting to the remote  server - Issue #261 - rdesktop/rdesktop - GitHub][rdesktop-bug-3]
- [Network Level Authentication (NLA) - rdesktop/rdesktop Wiki - GitHub][nla]

<div class="media mb-3">
    <img src="/files/2020/02/preferences-desktop-remote-desktop.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0" id="vinagre">Vinagre</h2>
    </div>
</div>

[Vinagre] is the default remote desktop client for the GNOME desktop. That's why it is also the default remote desktop client for Linux Kamarada 15.1, the current stable release. Like Remmina, it supports some connection protocols: SSH, RDP, [SPICE] and VNC. However, like rdesktop, Vinagre is unmaintained for some time now.

When trying a RDP access, Vinagre only displays a black screen, as I reported on the openSUSE mailing list some time ago:

- [\[opensuse-factory\] Black screen when trying a RDP access to Windows 10 using Vinagre (Leap 15.1/15.2 and Tumbleweed)][opensuse-mailing-list]

On some distributions, like [Debian], Vinagre works. I believe that those distributions applied some patch to Vinagre.

Probably, [the next Linux Kamarada release][kamarada-15.2-beta] will come with Remmina instead of Vinagre, following the Ubuntu Linux distribution.

Because of that, I present Vinagre here just for information purposes as well.

Vinagre comes already installed by default on Linux Kamarada and openSUSE, if you chose the GNOME desktop, but if you need or want to install it, you can do this by running:

```
# zypper in vinagre
```

To start Vinagre, which appears as **Remote Desktop Viewer** on the applications list, open the **Activities** menu, on the top-left screen corner, type `remote` or `vinagre` and click the corresponding icon:

{% include image.html src="/files/2020/04/vinagre-01-en.jpg" %}

On the Vinagre main screen, click **Connect**:

{% include image.html src="/files/2020/04/vinagre-02-en.jpg" %}

Fill in the next screen fields with the connection settings:

{% include image.html src="/files/2020/04/vinagre-03-en.jpg" %}

- on the **Protocol** field, select **RDP**;
- on the **Host** field, enter the hostname or IP address of the computer to connect to;
- enter your **Username** on the remote computer; and
- enter the **Domain**, if necessary.

When you are finished, click **Connect**.

If it’s the first time you connect to this computer, Vinagre asks whether to trust its certificate:

{% include image.html src="/files/2020/04/vinagre-04-en.jpg" %}

Tell it to do so by clicking **Connect**.

Enter your **Password**, optionally enable **Remember this credential** and click **Authenticate**:

{% include image.html src="/files/2020/04/vinagre-05-en.jpg" %}

At this point, you should see the remote computer's desktop. You can notice it has its screen locked (as it normally does during RDP accesses). But, as I said, Vinagre only displays a black screen:

{% include image.html src="/files/2020/04/vinagre-06-en.png" %}

Like Remmina, Vinagre allows you to memorize the connection settings, to easily connect to the same computer again in the future. To do this, during the remote access, open the **Bookmarks** menu and click **Add Bookmark**.

After you created the bookmark, it will now be listed on the **Bookmarks** menu. When you want to remotely access this computer again, just open this menu and click the bookmark.

## References

- [How to use Remote Desktop - Windows Support][win-rdc]
- [Remote Desktop - Allow access to your PC - Microsoft Docs][microsoft-docs]
- [Remote Graphical Sessions with VNC - Reference - openSUSE Leap 15.1][opensuse-docs]
- [Hi! - The history of the FreeRDP project - FreeRDP][freerdp-blog]

Since it's not possible to remotely access computers running Windows 10 Home, to write this how-to I used a [VirtualBox virtual machine][virtualbox] with a Windows 10 Enterprise evaluation version legally downloaded from:

- [Download a Windows 10 virtual machine - Windows app development][windows-10-vm]

[windows]:                  https://www.microsoft.com/windows/
[win-rdc]:                  https://support.microsoft.com/help/4028379/windows-10-how-to-use-remote-desktop
[windows-server]:           https://www.microsoft.com/cloud-platform/windows-server
[rdp]:                      https://en.wikipedia.org/wiki/Remote_Desktop_Protocol
[ts]:                       https://en.wikipedia.org/wiki/Remote_Desktop_Services
[linux]:                    https://www.kernel.org/linux.html
[microsoft-docs]:           https://docs.microsoft.com/windows-server/remote/remote-desktop-services/clients/remote-desktop-allow-access
[remmina]:                  https://remmina.org/
[vnc]:                      https://en.wikipedia.org/wiki/Virtual_Network_Computing
[nx]:                       https://en.wikipedia.org/wiki/NX_technology
[xdmcp]:                    https://en.wikipedia.org/wiki/X_display_manager
[ssh]:                      https://en.wikipedia.org/wiki/Secure_Shell
[ubuntu]:                   https://ubuntu.com/
[kamarada-15.1]:            {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[opensuse]:                 https://www.opensuse.org/
[gnome]:                    https://www.gnome.org/
[freerdp]:                  https://www.freerdp.com/
[free-sw]:                  https://www.gnu.org/philosophy/free-sw.html
[freerdp-ref]:              https://github.com/FreeRDP/FreeRDP/wiki/Reference-Documentation
[mstsc]:                    https://docs.microsoft.com/windows-server/administration/windows-commands/mstsc
[rdesktop]:                 https://www.rdesktop.org/
[rdesktop-group]:           https://groups.google.com/forum/#!topic/rdesktop-announce/AddglSNxK90
[freerdp-blog]:             http://www.freerdp.com/2019/01/16/hi-freerdp-history
[microsoft]:                https://www.microsoft.com/
[nla]:                      https://github.com/rdesktop/rdesktop/wiki/Network-Level-Authentication-(NLA)
[rdesktop-bug-1]:           https://github.com/rdesktop/rdesktop/issues/71
[rdesktop-bug-2]:           https://github.com/rdesktop/rdesktop/issues/279
[rdesktop-bug-3]:           https://github.com/rdesktop/rdesktop/issues/261#issuecomment-382608793
[vinagre]:                  https://wiki.gnome.org/Apps/Vinagre
[spice]:                    https://en.wikipedia.org/wiki/Simple_Protocol_for_Independent_Computing_Environments
[opensuse-mailing-list]:    https://lists.opensuse.org/opensuse-factory/2020-01/msg00308.html
[debian]:                   https://www.debian.org/
[kamarada-15.2-beta]:       {% post_url en/2020-04-14-linux-kamarada-15.2-beta-makes-your-desktop-greener-than-ever %}
[opensuse-docs]:            https://doc.opensuse.org/documentation/leap/reference/html/book.opensuse.reference/cha-vnc.html
[virtualbox]:               {% post_url en/2019-10-10-virtualbox-the-easiest-way-to-try-linux-without-installing-it %}
[windows-10-vm]:            https://developer.microsoft.com/windows/downloads/virtual-machines/
