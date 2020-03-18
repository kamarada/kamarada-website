---
date: '2017-07-07 01:15:00 UTC-3'
layout: post
published: true
title: 'How to setup an OpenVPN client on openSUSE Linux'
image: '/files/2017/07/openvpn-client.png'
nickname: 'openvpn-client'
---

We've got used to access everything from anywhere. With an Internet connection, today it is possible to work from home on company's systems, or view home computer's documents on a cell phone while on the go. But the world wide web is, in principle, an insecure public space, accessible, visible to everyone. To ensure privacy and security in remote access to private networks, a technology called virtual private network (VPN) was created.

<!--more-->

{% include image.html src="/files/2017/07/openvpn-client.png" caption="A VPN allows you to send a document from home to print at work" %}

## What is a VPN?

A [**Virtual Private Network**][vpn] (VPN) establishes a connection between two distant computers, which start to communicate over the Internet as if they were physically, directly connected to the same [local network][lan].

A VPN works like this: two computers are in different local area networks (they can be in different buildings, cities or even countries). But they need to communicate and have Internet connection. Then, they establish a circuit on the world wide network, and through this circuit they exchange information privately. It's like a phone call that can't be tapped.

{% include image.html src="/files/2017/07/openvpn-client-01.jpg" caption="Despite being connected to the Internet, two computers on a VPN communicate privately" %}

A VPN is said to be **private** because computers use cryptography to exchange data, preventing computers outside of the VPN from reading their communication. That's why a VPN is also called a **tunnel** (a perfect analogy, if you think about it). The word **virtual** comes from the fact that a VPN simulates a single local network, while there are actually two distinct local networks connected by a wide, global network that is the Internet.

{% include image.html src="/files/2017/07/openvpn-client-02.png" caption="A tunnel is just like this: what enters in one end comes out in the other end, being hidden from the outside along the way" %}

VPNs allow us do some interesting things. Companies have been using VPNs to allow their employees to work remotely, as well as to interconnect headquarters and branch offices, taking advantage of their Internet connections. Without VPNs, that would have to be made using antennas or fiber optic cables, and would be much more expensive or even unfeasible. Also, people have used VPNs to access blocked or censored content in certain countries.

## How does a VPN work?

Connecting to a VPN is a surprisingly simple procedure, although many things are done behind the scenes (connection, encryption, etc). For example, you are at home and need to connect to your work network. Your home and work both are connected to the Internet. You install and set up a VPN client on your computer and connect to your work's VPN server. Client and server establish the tunnel and grant you access to the work network. That's it!

To be able to communicate, client and server must use a protocol. There are many VPN protocols. Each of them provides a different type of VPN and fits better for one purpose or another. Examples include [PPTP, L2TP, SSTP][vpn-protocols] and [OpenVPN].

OpenVPN is a popular protocol because it is [free][free-software], versatile, [cross-platform] and easy to set up and use. It is suitable, for example, to connect to the work network.

Let's see in this post how you can connect your [openSUSE] Linux desktop to your work network using the OpenVPN client.

A pre-requisite is that the company has an OpenVPN server, like the one [this post][vinyanalista-vpn] (in Portuguese) teachs how to setup on [pfSense], an equally free, versatile and popular firewall. How to set up an OpenVPN server on an openSUSE server will be the subject of another post.

To access blocked or censored content, or simply to browse anonymously and privately, another type of VPN is more appropriate, I will talk about it in another post (for the sake of the curious, it's the [Tor] Project).

## How to connect to an OpenVPN server?

After all those explanations, let's go to the objective of this post.

Ask your work network administrator for the OpenVPN client configuration file. It should have a **.ovpn** extension (e.g. **work-vpn-settings.ovpn**). Also ask any other information you need to connect to the VPN, usually just your username (login) and password.

On the computer you want to connect to the VPN, open the **Settings** app and click **Network**:

{% include image.html src="/files/2017/07/openvpn-client-03-en.jpg" %}

Network connections are listed on the left. Click the add button below:

{% include image.html src="/files/2017/07/openvpn-client-04-en.jpg" %}

Select **VPN**:

{% include image.html src="/files/2017/07/openvpn-client-05-en.jpg" %}

Select **Import from file**:

{% include image.html src="/files/2017/07/openvpn-client-06-en.jpg" %}

Look for the configuration file provided by your work network administrator and select it.

On the **Add Network Connection** dialog box, most of the fields are already filled with data retrieved from that file:

{% include image.html src="/files/2017/07/openvpn-client-07-en.jpg" %}

You must fill in the remaining fields, such as **User name**, **Password** and **Private Key Password**, following your network administrator orientation. Optionally, you can change the connection name to something that helps you identify it (for instance, I named it as `work`).

When you are finished, click **Add**.

Back to the **Network** settings, activate the connection:

{% include image.html src="/files/2017/07/openvpn-client-08-en.jpg" %}

If the connection status has not changed to **Connected**, click the settings button (the gear icon on the lower-right corner) and check the VPN settings.

When you no longer need to use the VPN, disconnect by opening the system menu on the upper-right corner of the screen, then expanding the VPN menu and finally clicking **Turn Off**:

{% include image.html src="/files/2017/07/openvpn-client-09-en.jpg" %}

I hope the information presented here have been useful to you!

For future reference, in this post I used the [openSUSE Leap 42.2][opensuse-leap-42.2] Linux distribution with the [GNOME 3.20][gnome-3.20] desktop and the [OpenVPN 2.3.8][openvpn-2.3.8] client.

## References

- [Como criar uma VPN utilizando pfSense e OpenVPN - Antônio Vinícius][vinyanalista-vpn] (in Portuguese)
- [Why You Should Be Using a VPN (and How to Choose One)][lifehacker-vpn]
- [VPNs: What They Do, How They Work, and Why You're Dumb for Not Using One][gizmodo-vpn]
- [Connecting to pfSense-based OpenVPN Server From Linux Mint 17 - YouTube][youtube-openvpn-linux]

[vpn]:                      https://en.wikipedia.org/wiki/Virtual_private_network
[lan]:                      https://en.wikipedia.org/wiki/Local_area_network
[vpn-protocols]:            https://technet.microsoft.com/en-us/library/cc771298(v=ws.10).aspx
[openvpn]:                  https://openvpn.net/
[free-software]:            https://www.gnu.org/philosophy/free-sw.html
[cross-platform]:           https://en.wikipedia.org/wiki/Cross-platform_software
[opensuse]:                 https://www.opensuse.org/
[vinyanalista-vpn]:         https://vinyanalista.github.io/blog/2016/06/26/como-criar-uma-vpn-pfsense-openvpn/
[pfsense]:                  https://www.pfsense.org/
[tor]:                      https://www.torproject.org/
[opensuse-leap-42.2]:       {%post_url en/2016-11-16-optimal-release-for-linux-professionals-arrives-with-opensuse-leap-42-2 %}
[gnome-3.20]:               https://www.gnome.org/news/2016/03/gnome-3-20-released/
[openvpn-2.3.8]:            https://github.com/OpenVPN/openvpn/releases/tag/v2.3.8
[lifehacker-vpn]:           http://lifehacker.com/5940565/why-you-should-start-using-a-vpn-and-how-to-choose-the-best-one-for-your-needs
[gizmodo-vpn]:              http://gizmodo.com/5990192/vpns-what-they-do-how-they-work-and-why-youre-dumb-for-not-using-one
[youtube-openvpn-linux]:    https://youtu.be/LaKdl2Dv920?t=61
