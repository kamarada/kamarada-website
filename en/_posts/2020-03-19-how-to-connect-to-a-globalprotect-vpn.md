---
date: '2020-03-19 00:20:00 GMT-3'
image: '/files/2020/03/globalprotect.png'
layout: post
nickname: 'globalprotect'
title: 'How to connect to a GlobalProtect VPN'
---

{% include image.html src='/files/2020/03/globalprotect.png' style='max-width: 200px;' %}

[GlobalProtect] is the name of the [virtual private network (VPN)][vpn] provided by the [Palo Alto Networks][pan] firewalls. Are you going to work remotely for a company that requires you to use this VPN? Here's how to install the necessary software and connect on [openSUSE] Leap and Tumbleweed and also on [Linux Kamarada][kamarada-15.1] (a novel Linux distro based on openSUSE Leap).

<!--more-->

VPNs are used by organizations (such as companies and universities) to allow people (employees and students) to remotely connect to their networks. A VPN provides an encrypted connection (a tunnel) between your home computer and the organization network. If you want to know more about VPNs, read the beginning of this post:

- [How to setup an OpenVPN client on openSUSE Linux][vpn]

On that occasion, we talked about [OpenVPN][vpn], another VPN technology.

Today, we are going to talk about GlobalProtect.

[Linux] users have two options for connecting to GlobalProtect VPNs:

1. the OpenConnect client, which is a [free software][free-sw], thus provided by the Linux distributions themselves; or
2. the official (proprietary) GlobalProtect client, provided by Palo Alto Networks.

I advance that I was not able to make the official client work on openSUSE. So, I mention it here just to let you know that it exists.

## Option #1: OpenConnect client

[OpenConnect] is a VPN client initially created to support [Cisco's AnyConnect][cisco] VPN. It has since been ported to support the [Pulse Connect Secure][pulse] VPN and the PAN GlobalProtect VPN. Support for the latter came with version 8.00, [released on January 4, 2019][openconnect-8.00].

### Installation

[openSUSE Tumbleweed][tumbleweed], the rolling release version of openSUSE, has OpenConnect version 8.05 available on its official repositories. If you use this distribution, to install OpenConnect, you just need to run:

```
# zypper in openconnect
```

[openSUSE Leap 15.1][leap-15.1], the (traditional) regular release version of openSUSE, offers OpenConnect version 7.08 on its official repositories.

That is the same version that comes installed out-of-the-box on [Linux Kamarada 15.1][kamarada-15.1].

If you are an user of either of these distros, you need to update OpenConnect to version 8.05, which can be retrieved from the network repository. To do this, first add the network repo:

```
# zypper ar http://download.opensuse.org/repositories/network/openSUSE_Leap_15.1/ network
```

Then, install the OpenConnect package (explicitly stating that you want to download it from the network repo):

```
# zypper in network:openconnect
```

Up-to-date OpenConnect installed, everyone on the same page, let's see how to use it.

### Connection

To connect to a GlobalProtect VPN, have the following information ready:

- GlobalProtect server, you need either its IP address or its [full qualified domain name (FQDN)][fqdn];
- user name (login); and
- user password.

If you don't know them, ask your organization's network administrator or IT staff.

Open a terminal window (reserve a terminal window just for connecting) and run the following command, making the appropriate replacements:

```
$ sudo openconnect --protocol=gp global.protect.server -u user-name
```

Type the administrator (root user) password and hit **Enter**:

```
[sudo] password for root:
```

Then, when prompted, enter your user password to access the VPN:

```
POST https://vpn.XXXXXXXX.br/ssl-vpn/prelogin.esp?tmp=tmp&clientVer=4100&clientos=Linux
Connected to 200.XXXXX.4:443
SSL negotiation with vpn.XXXXXXXX.br
Connected to HTTPS on vpn.XXXXXXXX.br
Digite o seu usuário e senha:
Senha:
```

Connection is established and the IP address you obtained from the VPN is informed:

```
POST https://vpn.XXXXXXXX.br/ssl-vpn/login.esp
GlobalProtect login returned authentication-source=auth-seq_ad-local-vpn
POST https://vpn.XXXXXXXX.br/ssl-vpn/getconfig.esp
Session will expire after 43199 minutes.
Tunnel timeout (rekey interval) is 180 minutes.
Idle timeout is 180 minutes.
No MTU received. Calculated 1422 for ESP tunnel
POST https://vpn.XXXXXXXX.br/ssl-vpn/hipreportcheck.esp
Connected as 10.22.4.171, using SSL, with ESP in progress
ESP session established with server
ESP tunnel connected; exiting HTTPS mainloop.
```

In this example, `10.22.4.171`.

The OpenConnect command does not end immediately. Instead, it runs indefinitely. You remain connected to the VPN as long as you keep that program running (that's why I advised to reserve a terminal window just for it).

{% include image.html src='/files/2020/03/globalprotect-connected-en.jpg' %}

During this time, you can access the organization's internal systems from your home computer as if you were there (phisically speaking).

When you no longer need the VPN and want to disconnect, press **Ctrl + C** to stop OpenConnect (and close the connection):

```
^CPOST https://vpn.XXXXXXXX.br/ssl-vpn/logout.esp
SSL negotiation with vpn.XXXXXXXX.br
Connected to HTTPS on vpn.XXXXXXXX.br
Logout successful
RTNETLINK answers: No such process
RTNETLINK answers: No such process
RTNETLINK answers: No such process
RTNETLINK answers: No such process
User cancelled (SIGINT/SIGTERM); exiting.
```

## Option #2: GlobalProtect official client

Palo Alto Networks provides a [GlobalProtect app for Linux][globalprotect-app] in two versions: a command line interface (CLI) version and a graphical user interface (GUI) version. Ideally, the package or installer should be provided to you by the organization's network administrator or IT staff.

Unfortunately, there are organizations that do not support Linux. [Searching the Internet][google], I found a link to download the GlobalProtect app on this page of the Kansas State University:

- [Virtual Private Networking - Kansas State University][k-state]

Also unfortunately, I was unable to make it work on Linux Kamarada 15.1, neither the CLI version, nor the GUI version. The [GlobalProtect compatibility matrix][globalprotect-compatibility] shows that the Linux distributions officially supported by Palo Alto Networks are [CentOS], [Red Hat Enterprise Linux (RHEL)][rhel] and [Ubuntu]. openSUSE distributions are not officially supported.

## References

- [Como se conectar a uma VPN Global Protector no Linux - Blog do Edivaldo][edivaldobrito] (in Portuguese)
- [Openconnect - Conexão de VPN Paloalto no Debian - Artigo - Viva o Linux][vivaolinux] (in Portuguese)
- [GlobalProtect App for Linux - Palo Alto Networks][globalprotect-app]

[globalprotect]:                https://www.paloaltonetworks.com/products/globalprotect
[vpn]:                          {% post_url en/2017-07-07-how-to-setup-an-openvpn-client-on-opensuse-linux %}
[pan]:                          https://www.paloaltonetworks.com/
[opensuse]:                     https://www.opensuse.org/
[kamarada-15.1]:                {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[linux]:                        https://www.kernel.org/linux.html
[free-sw]:                      https://www.gnu.org/philosophy/free-sw.html
[openconnect]:                  https://www.infradead.org/openconnect/
[cisco]:                        http://www.cisco.com/go/asm
[pulse]:                        https://www.pulsesecure.net/products/connect-secure/
[openconnect-8.00]:             https://lists.infradead.org/pipermail/openconnect-devel/2019-January/005178.html
[tumbleweed]:                   https://en.opensuse.org/Portal:Tumbleweed
[leap-15.1]:                    {% post_url en/2019-05-22-opensuse-community-releases-leap-15-1-version %}
[fqdn]:                         https://en.wikipedia.org/wiki/Fully_qualified_domain_name
[globalprotect-app]:            https://docs.paloaltonetworks.com/globalprotect/5-1/globalprotect-app-user-guide/globalprotect-app-for-linux.html
[google]:                       https://www.google.com/search?q=download+Global+Protect+Linux
[k-state]:                      https://www.k-state.edu/its/security/secure-data/vpn/index.html
[globalprotect-compatibility]:  https://docs.paloaltonetworks.com/compatibility-matrix/globalprotect/where-can-i-install-the-globalprotect-app#id7a3c3401-b233-43b0-8d78-dfceab88798f_idbcd7ccf7-eceb-462c-8678-1a5fa51cbc18
[centos]:                       https://www.centos.org/
[rhel]:                         https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux
[ubuntu]:                       https://ubuntu.com/
[edivaldobrito]:                https://www.edivaldobrito.com.br/conectar-a-uma-vpn-global-protector-no-linux/
[vivaolinux]:                   https://www.vivaolinux.com.br/artigo/Openconnect-Conexao-de-VPN-Paloalto-no-Debian
