---
date: 2019-06-07 17:30:00
image: '/files/2018/09/thunderbird-gmail.png'
layout: post
published: true
nickname: 'how-to-thunderbird-gmail'
title: 'Read Gmail messages on Thunderbird'
excerpt: "Thunderbird is a free email client developed by the Mozilla Foundation, the same foundation behind the well-known Firefox web browser. And Gmail needs no introduction: it’s the free email service offered by the giant Google. In this post, you'll see how to install Thunderbird and set it up to sync your Gmail messages."
---

{% include image.html src="/files/2018/09/thunderbird-gmail.png" style="max-width: 200px;" %}

[Thunderbird][thunderbird] is a free email client developed by the [Mozilla Foundation][mozilla], the same foundation behind the well-known [Firefox][firefox] web browser. And [Gmail][gmail] needs no introduction: it's the free email service offered by the giant [Google][google].

In this post, you'll see how to install Thunderbird and set it up to sync your Gmail messages.

Indeed people have preferred to use browsers instead of email clients to read and send messages, because it's more practical. However, email clients provide us some interesting possibilities, which we'll see in the next posts.

{% capture update %}
As promised, here is an interesting use for the Thunderbird email client:

- [Sending digitally signed emails with Thunderbird]({% post_url en/2019-07-02-sending-digitally-signed-emails-with-thunderbird %})
{% endcapture %}
{% include update.html date="Jul 02, 2019" message=update %}

## Installing Thunderbird

openSUSE distributes Thunderbird in the [MozillaThunderbird][sw] package.

To install it, open **Terminal** and run as *root* (administrator):

```
# zypper in MozillaThunderbird MozillaThunderbird-translations-common
```

## Starting Thunderbird

Once Thunderbird has been installed, launch it by the **Activities overview** typing `Thunderbird` and clicking its icon:

{% include image.html src="/files/2019/06/thunderbird-gmail-01.jpg" %}

## Syncing with Gmail

When launched for the first time, Thunderbird should show the account setup wizard:

{% include image.html src="/files/2019/06/thunderbird-gmail-02.jpg" %}

If you're not in the setup wizard shown above, follow these steps to open it: in the Thunderbird start screen, below **Set up an account**, click **Email**.

{% include image.html src="/files/2019/06/thunderbird-gmail-03.jpg" %}

In the setup wizard, enter your name, email address and password. You can check the **Remember password** option, if you want. When you are ready, click **Continue**.

Thunderbird searches for the settings to connect with Gmail in the Mozilla ISP database.

The setup wizard lets you choose whether you want to retrieve your emails via IMAP or POP:

{% include image.html src="/files/2019/06/thunderbird-gmail-04.jpg" %}

Both [IMAP][imap] and [POP3][pop3] are standard protocols used by email clients to **retrieve** email messages from a mail server.

[SMTP][smtp] is a standard protocol used by email clients to **send** email messages.

The main difference between IMAP and POP3 is that POP3 downloads messages to the client computer and does not sync them with the mail server anymore (i.e. if a message is deleted on the computer, it does not get deleted on the server, and vice versa).

In contrast, IMAP leave all messages on the server and download them as needed, keeping them in sync with the server (i.e. if a message is deleted on the computer, it is also deleted on the server, and vice versa). The IMAP protocol is an evolution of the POP3 protocol.

As IMAP leaves messages on the server, it allows for keeping email in sync across multiple devices (desktop, laptop, smartphones and tablets) and generally is recommended.

IMAP is also the option that Thunderbird brings selected by default.

In case Thunderbird does not find Gmail settings automatically, click **Manual config** and enter them manually:

* Incoming: IMAP (or POP3)
    - Server hostname: imap.gmail.com (or pop.gmail.com)
    - Port: 993 (or 995)
    - SSL: SSL/TLS
* Outgoing: SMTP
    - Server hostname: smtp.gmail.com
    - Port: 465
    - SSL: SSL/TLS

When you finish, click **Done**.

Finally, Thunderbird opens a Gmail window, in which you enter your email, password and authorize Thunderbird to manage your email by clicking **Allow**:

{% include image.html src="/files/2019/06/thunderbird-gmail-05.jpg" %}

Back to the Thunderbird main window, note that your Gmail account is now listed by the left and your email messages are being retrieved:

{% include image.html src="/files/2019/06/thunderbird-gmail-06.jpg" %}

## Some fine tuning

Thunderbird shows the message pane by default. If you want to hide it, click the **Menu** button, on the top right corner of the window, go to **Preferences**, **Layout** and uncheck the **Message Pane** option:

{% include image.html src="/files/2019/06/thunderbird-gmail-07.jpg" %}

Without the message pane, to read an email message, double click it and it will be opened on a new tab.

Also, Thunderbird used to sort emails by oldest first. That seems to be fixed in newer versions. Just to make sure, click the **Date** column repeatedly until newer emails are listed first (the same way Gmail does):

{% include image.html src="/files/2019/06/thunderbird-gmail-08.jpg" %}

Another problem I noticed while using Thunderbird: it does not add the signature to forwarded emails by default. Let's see how to adjust that.

Open the Thunderbird menu and go to **Preferences**, **Account Settings**:

{% include image.html src="/files/2019/06/thunderbird-gmail-09.jpg" %}

In the left panel, select **Composition & Addressing**, then check the option **Include signature for forwards** and click **OK**:

{% include image.html src="/files/2019/06/thunderbird-gmail-10.jpg" %}

I hope it was helpful. Until next time!

## References

- [Use IMAP to check Gmail on other email clients - Gmail Help][gmail-help-imap]
- [Read Gmail messages on other email clients using POP - Gmail Help][gmail-help-pop]
- [Set Up a New Email Account in Thunderbird - Liquid Web][liquidweb]

[thunderbird]:      https://www.thunderbird.net/
[mozilla]:          https://foundation.mozilla.org/
[firefox]:          https://www.mozilla.org/firefox/
[gmail]:            https://gmail.com/
[google]:           https://www.google.com/
[sw]:               https://software.opensuse.org/package/MozillaThunderbird
[imap]:             https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol
[pop3]:             https://en.wikipedia.org/wiki/Post_Office_Protocol
[smtp]:             https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol
[gmail-help-imap]:  https://support.google.com/mail/answer/7126229
[gmail-help-pop]:   https://support.google.com/mail/answer/7104828
[liquidweb]:        https://www.liquidweb.com/kb/how-to-set-up-email-in-thunderbird/
