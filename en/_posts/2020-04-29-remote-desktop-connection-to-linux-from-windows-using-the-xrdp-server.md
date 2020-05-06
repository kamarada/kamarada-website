---
date: '2020-04-29 21:25:00 GMT-3'
layout: post
title: 'Remote Desktop Connection to Linux from Windows using the XRDP server'
image: '/files/2020/04/rdp-server.jpg'
nickname: 'rdp-server'
---

In the [previous post][rdp-client], we saw how to use [Linux] RDP clients to remotely access [Windows] desktops or apps provided by [Terminal Services][ts], a [Windows Server][windows-server] technology. But what if you need to provide Linux desktops to be accessed by Windows clients (a kind of "Linux-based Terminal Services"), is it possible?

{% include image.html src="/files/2020/04/rdp-server.jpg" %}

Yes, it is! Today you are going to see how to achieve that on [Linux Kamarada][kamarada-15.1] and [openSUSE] using XRDP.

[XRDP] is a remote desktop server for Linux based on the [Remote Desktop Protocol][rdp] (RDP), the same protocol used by the Windows app [**Remote Desktop Connection**][rdc] and the RDP clients for Linux that we saw in the [previous post][rdp-client].

## Installing XRDP

On the Linux PC or server that will provide desktops for remote access (let's just call it "server" from now on), install XRDP by running the following commands as root:

```
# zypper ref
# zypper in xrdp
```

Enable the XRDP service, so that it gets automatically started at boot time:

```
# systemctl enable xrdp
```

You can also start the XRDP service immediately, you don't need to reboot the server:

```
# systemctl start xrdp
```

## Installing VNC

To provide remote access via RDP, a Windows native protocol, XRDP behind the scenes uses  [VNC], a remote access protocol more common in Linux. Therefore, before using XRDP itself, we need to install VNC, which is an easy task on Linux Kamarada and openSUSE thanks to the [YaST Control Center][yast].

Open the YaST Control Center by opening the **Activities** menu , on the top-left screen corner, typing `yast` and clicking the corresponding icon:

{% include image.html src="/files/2020/04/rdp-server-01-en.jpg" %}

Within the **Network Services** category, click the **Remote Administration (VNC)** item:

{% include image.html src="/files/2020/04/rdp-server-02-en.jpg" %}

On the next screen, check the **Allow Remote Administration with Session Management** option and click **Next**:

{% include image.html src="/files/2020/04/rdp-server-03-en.jpg" %}

(actually, I tested both of the first two options and saw no difference at the end)

YaST informs you that it needs to install the **vncmanager** package. Click **Install**:

{% include image.html src="/files/2020/04/rdp-server-04-en.jpg" %}

Wait for the installation and configuration process to finish. At the end, click **OK**:

{% include image.html src="/files/2020/04/rdp-server-05-en.jpg" %}

## Configuring the firewall on the server

To finish the installation and configuration of XRDP, just one thing is missing: set up the server firewall to allow the port used by RDP, which is, by default, the port 3389/TCP.

If you use [firewalld], which is Linux Kamarada's default firewall, the RDP protocol is a predefined service named `ms-wbt` (acronym for Microsoft Windows-Based Terminal). You just need to open it in your network interface zone. Assuming it is the public zone, you can open it with the command (modify as needed):

```
# firewall-cmd --permanent --zone=public --add-service=ms-wbt
```

Then, reload the firewalld rules:

```
# firewall-cmd --reload
```

If you use the [**iptables** firewall][iptables], to allow the port 3389/TCP, append these lines to your configuration script:

```
# RDP (port 3389/TCP)
iptables -A INPUT -p tcp --dport 3389 -j ACCEPT
```

Note that you just need to set up the firewall on the server. If it was also needed on the client, we would have done it in the [previous post][rdp-client].

## Logging out from the server

While using Windows' Remote Desktop Connection, you cannot locally use the server and remotely access it at the same time: if you start a remote access, the server screen becomes locked. The same way, if you log on to the server, remote access is interrupted.

On Linux, XRDP works similarly, with the difference that it does not lock screens nor close connections automatically. Instead, you yourself must do it manually. Before starting a remote access to an XRDP server, you must log out from that server.

To log out from Linux Kamarada, open the **system menu**, on the top-right screen corner, expand the dropdown menu with your username and click **Log Out**:

{% include image.html src="/files/2020/04/rdp-server-06-en.jpg" %}

## Remote access from a Windows PC

On the Windows PC from which you are going to remotely access the Linux server, open the **Start menu**, type `remote` and click **Remote Desktop Connection**:

{% include image.html src="/files/2020/04/rdp-server-07-en.jpg" %}

Enter the IP address or hostname of the **Computer** you want to connect to (e.g. `10.0.0.253`) and click **Connect**:

{% include image.html src="/files/2020/04/rdp-server-08-en.png" %}

The Remote Desktop Connection app asks if it can trust connecting to the remote computer. Check the **Don't ask me again for connections to this computer** option and click **Yes**:

{% include image.html src="/files/2020/04/rdp-server-09-en.png" %}

Then, the Windows RDP client shows the XRDP login screen:

{% include image.html src="/files/2020/04/rdp-server-10.png" %}

Enter your **username** and **password** on the Linux server and click **OK**.

You will now access your desktop on the Linux server:

{% include image.html src="/files/2020/04/rdp-server-11-en.jpg" %}

(note that the remote access is full screen by default, but you can switch to a window)

When you no longer need the remote desktop, remember to log out from the Linux server.

## Tip: saving connection settings for quick access

If you are going to access this Linux server often, you can, for convenience, save the connection settings in some easily accessible place, such as the Desktop.

To do this, on the Remote Desktop Connection main screen, click **Show Options**. Enter the IP address or hostname of the remote Linux **Computer**. Also enter your **User name** on that computer. Optionally, check the option **Allow me to save credentials** if you want to save your password too. Finally, click **Save As**:

{% include image.html src="/files/2020/04/rdp-server-12-en.png" %}

Choose a folder and a name for the file and save it.

Then click **Connect**. Let's make a quick connection just to save the password.

The app asks if you trust connecting to this remote computer. Check the option **Don't ask me again for connections to this computer** and click **Connect**:

{% include image.html src="/files/2020/04/rdp-server-13-en.png" %}

If you chose to save your password, enter it on the next dialog box, make sure the **Remember me** option is checked (it is, by default) and click **OK**:

{% include image.html src="/files/2020/04/rdp-server-14-en.png" %}

You will now actually access the remote desktop. You can just log out.

That's it! From now on, when you need to remotely access that Linux server, just double-click the file:

{% include image.html src="/files/2020/04/rdp-server-15-en.jpg" %}

## Remote access from a Linux PC

If your Linux PC has an RDP client installed, you can remotely access another Linux PC or server running XRDP, that is, a Linux to Linux RDP connection:

{% include image.html src="/files/2020/04/rdp-server-16-en.jpg" %}

For more information on the RDP clients available for Linux, see the previous post:

- [Remote Desktop Connection to Windows from Linux using RDP clients][rdp-client]

## Conclusion

As we've seen, XRDP is a practical way of providing remote access to Linux from Windows, since it's not necessary to install additional software on Windows, which has a native RDP client.

In a way, it is also a practical way of providing remote access from Linux to Linux. One just needs to install XRDP on the server machine and on the client machines, one of the RDP clients listed in the [previous post][rdp-client].

## References

- [OpenSUSE Leap 15: Connect to KDE desktop environment via XRDP - Narrow Escape][hiroom2]
- [Remote Graphical Sessions with VNC - Reference - openSUSE Leap 15.1][opensuse-doc]
- [Connecting via RDP - Guide - SUSE Linux Enterprise Server for SAP Applications 15 SP1][suse-doc]
- [opensuse - Enabling XRDP for remote on SUSE Linux Enterprise Server 12 SP3 (HVM) - Unix & Linux Stack Exchange][stackexchange]
- [How To Save Password in A Remote Desktop Connection in Windows 8 - Next of Windows][nextofwindows]
- [Virtual Desktop Infrastructure by xrdp - openSUSE - YouTube][youtube]

[rdp-client]:       {% post_url en/2020-04-20-remote-desktop-connection-to-windows-from-linux-using-rdp-clients %}
[linux]:            https://www.kernel.org/linux.html
[windows]:          https://www.microsoft.com/windows/
[ts]:               https://en.wikipedia.org/wiki/Remote_Desktop_Services
[windows-server]:   https://www.microsoft.com/cloud-platform/windows-server
[kamarada-15.1]:    {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[opensuse]:         https://www.opensuse.org/
[xrdp]:             http://xrdp.org/
[rdp]:              https://en.wikipedia.org/wiki/Remote_Desktop_Protocol
[rdc]:              https://support.microsoft.com/help/4028379/windows-10-how-to-use-remote-desktop
[vnc]:              https://en.wikipedia.org/wiki/Virtual_Network_Computing
[yast]:             http://yast.opensuse.org/
[firewalld]:        https://firewalld.org/
[iptables]:         {% post_url en/2019-11-24-protect-yourself-with-the-iptables-firewall %}
[hiroom2]:          https://www.hiroom2.com/2018/06/14/opensuse-15-xrdp-kde-en/
[opensuse-doc]:     https://doc.opensuse.org/documentation/leap/reference/html/book.opensuse.reference/cha-vnc.html
[suse-doc]:         https://documentation.suse.com/sles-sap/15-SP1/html/SLES4SAP-guide/cha-s4s-configure-rdp.html
[stackexchange]:    https://unix.stackexchange.com/a/480858/106621
[nextofwindows]:    https://www.nextofwindows.com/how-to-save-password-in-a-remote-desktop-connection-in-windows-8
[youtube]:          https://www.youtube.com/watch?v=b3wTEelo7zo
