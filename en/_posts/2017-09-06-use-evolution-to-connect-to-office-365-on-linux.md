---
date: 2017-09-06 23:45:00
image: '/files/2017/09/evolution.png'
layout: post
published: true
nickname: 'how-to-evolution-office-365'
title: 'Use Evolution to connect to Office 365 on Linux'
---

If you work at a company whose email is locally hosted on a [Microsoft Exchange][exchange] server or cloud hosted on [Office 365][office-365], you can use traditional [POP], [IMAP] and [SMTP] email apps to manage email on your workstation. However, some additional features such as calendaring and contact management are available only if you connect by using the [Microsoft]'s proprietary [Exchange ActiveSync][activesync] protocol.

The good news is that in an Exchange company [Linux] users don't have to give up their favorite system to communicate with co-workers: here you are going to see how to connect [Evolution] to Exchange or Office 365 using [GNOME Online Accounts][goa].

{% include image.html src="/files/2017/09/evolution.png" %}

**Evolution** is one of the most powerful [open source][opensource] [groupware] clients out there. It is the default groupware client of the [GNOME] desktop environment and can be considered the Linux counterpart to [Outlook] for [Windows]. GNOME users setup their online accounts (such as Office 365) using the **Settings** app and then can access them using GNOME integrated apps (like Evolution).

To enable Evolution to manage your Exchange or Office 365 email, make sure your system has the packages [gnome-online-accounts][sw-gnome-online-accounts] (it should have been installed by default if you use [openSUSE] with GNOME) and [evolution-ews][sw-evolution-ews]:

```
# zypper in gnome-online-accounts evolution-ews
```

To add your Exchange account, open the **Settings** app and click on **Online Accounts**:

{% include image.html src="/files/2017/09/evolution-office-365-1-en.jpg" %}

Online accounts are listed on the left. Click the **add button** below:

{% include image.html src="/files/2017/09/evolution-office-365-2-en.jpg" %}

On the **Add Account** dialog box, choose **Microsoft Exchange**:

{% include image.html src="/files/2017/09/evolution-office-365-3-en.jpg" %}

Expand the **Custom** section so all fields are shown. Fill them with your account information:

- **E-mail:** your e-mail address (e.g. `your.name@example.com`)
- **Password:** your e-mail account password
- **Username:** your e-mail address once more
- **Server:** `outlook.office365.com`

Those values may be different depending on how your company email has been set up. In case you are not able to add your account, contact your company's network administrator.

When you are ready, click on **Connect**:

{% include image.html src="/files/2017/09/evolution-office-365-4-en.jpg" %}

Your Exchange account is now listed besides your other online accounts, choose what you want to sync (by default, all features are enabled):

{% include image.html src="/files/2017/09/evolution-office-365-5-en.jpg" %}

Now you can close the **Online Accounts** dialog box and open the **Evolution** app. Note that now it shows:

{% include image.html src="/files/2017/09/evolution-office-365-6-en.jpg" caption="Your mail" %}

{% include image.html src="/files/2017/09/evolution-office-365-7-en.jpg" caption="Your contacts" %}

{% include image.html src="/files/2017/09/evolution-office-365-8-en.jpg" caption="Your calendar" %}

Enjoy!

## References

- [Use Evolution to Connect to Microsoft Exchange on Linux - Linux.com][linux.com]
- [Office 365 (Evolution) - Configure Evolution][kb.wisc.edu]

[exchange]:                 https://products.office.com/en-us/exchange
[office-365]:               https://portal.office.com
[POP]:                      https://en.wikipedia.org/wiki/Post_Office_Protocol
[IMAP]:                     https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol
[SMTP]:                     https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol
[activesync]:               https://technet.microsoft.com/en-us/library/dn551174(v=exchg.150).aspx
[Microsoft]:                https://www.microsoft.com/en-us
[Linux]:                    https://www.kernel.org/linux.html
[Evolution]:                https://wiki.gnome.org/Apps/Evolution
[goa]:                      https://wiki.gnome.org/Projects/GnomeOnlineAccounts
[groupware]:                https://en.wikipedia.org/wiki/Collaborative_software
[opensource]:               https://opensource.org/osd-annotated
[GNOME]:                    https://www.gnome.org
[Outlook]:                  https://products.office.com/en-us/outlook
[Windows]:                  https://www.microsoft.com/en-us/windows
[sw-gnome-online-accounts]: https://software.opensuse.org/package/gnome-online-accounts
[openSUSE]:                 https://www.opensuse.org
[sw-evolution-ews]:         https://software.opensuse.org/package/evolution-ews
[linux.com]:                https://www.linux.com/learn/use-evolution-connect-microsoft-exchange-linux
[kb.wisc.edu]:              https://kb.wisc.edu/helpdesk/page.php?id=28462
