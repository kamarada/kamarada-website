---
date: 2019-04-10 22:30:00 GMT-3
image: '/files/2019/04/gnome-online-accounts-google.jpg'
layout: post
published: true
nickname: 'gnome-online-accounts-google'
title: 'Get the most out of GNOME syncing your Google account'
---

{% include image.html src="/files/2019/04/gnome-online-accounts-google.jpg" %}

Integrating your [Google] account to the [GNOME] desktop makes it more intelligent, productive and interesting, once you can have access to services like e-mail, calendar and files in the cloud straight from your desktop. Also, you can receive notifications from those services while using your computer. That integration is easy to setup, as you are going to see here.

<!--more-->

GNOME users setup their [online accounts][goa] (such as [Google accounts][google-account]) using the **Settings** app and then can access them using GNOME integrated apps.

If you work on a company or study at a school that provided you a [G Suite][gsuite] account, that account can be synced like any other Google account.

To add your Google (or G Suite) account to GNOME, open the **Settings** app, click on **Online Accounts** and then click on **Google**:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-01-en.jpg" %}

Sign in to your Google account (usually you inform your [Gmail] address here):

{% include image.html src="/files/2019/04/gnome-online-accounts-google-02-en.jpg" %}

Review the permissions GNOME is requesting and allow its access to your Google data:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-03-en.jpg" %}

Your account has been added and you can choose what you want to sync:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-04-en.jpg" %}

Or you can leave everything enabled (default).

Now you can close the **Settings** app and open the many GNOME apps to see your Google data in them.

The [**Evolution**][evolution] [groupware] client shows your Gmail messages:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-05-en.jpg" caption="Evolution (e-mail)" %}

**Note:** [Mozilla Thunderbird][thunderbird] is not integrated with GNOME online accounts. If you prefer Thunderbird to Evolution, you need to setup Gmail on Thunderbird.

Evolution is also capable of managing your [Google Contacts][google-contacts] and your [Google Calendar][google-calendar] events, but there are also specific apps for those. One of them is [**Contacts**][gnome-contacts]:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-06-en.jpg" caption="Contacts" %}

The other one is [**Calendar**][gnome-calendar]:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-07-en.jpg" caption="Calendar" %}

You can also take a quick look at your Google Calendar events clicking on the **date and time** entry in the GNOME **top bar** and then clicking on a day in the calendar popup:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-08-en.jpg" %}

The [**Documents**][gnome-documents] app shows your [Google Docs][google-docs] documents:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-09-en.jpg" caption="Documents" %}

More generally, you can use the [**Files**][gnome-files] app to access your [Google Drive][google-drive] files:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-10-en.jpg" caption="Files" %}

Open up Files and notice an entry for your Google account. Click on that entry and Files will connect to Google Drive and list your files (that can take some time). You can open your files, edit, rename and delete them as if they were on your computer. When you are finished, close your files and click on **Dismount**. Your Files disconnects from your Google Drive and remains disconnected until you click on that entry again.

Note that solution works differently, for instance, from the [Dropbox] client, which downloads all your files to the computer and allows you to work on them even when offline. GNOME Files downloads only the files you open and sends any changes immediately.

Não há um cliente oficial do Google Drive para Linux semelhante ao cliente para Dropbox.

Last but not least, if you have added any printer to [Google Cloud Print][google-cloud-print], it appears on the list of available printers when you print any document:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-11-en.jpg" caption="Printers" %}

Also is offered the option to save the document as [PDF] and send it to Google Drive.

The only GNOME app that I was not able to use with my Google account was [**Photos**][gnome-photos], which probably should show my [Google Photos][google-photos], but it didn't show them. That is [a known problem][photos-dont-sync].

If you work at a company whose e-mail is served by [Microsoft Exchange][exchange] or by [Office 365][office-365], note that you can also set it up as a GNOME online account. I showed how to do that on a previous post:

- [Use Evolution to connect to Office 365 on Linux][how-to-evolution-office-365]

## References

- [GNOME Online Accounts - GNOME Wiki][goa]
- [How to connect Ubuntu 18.04 to your Google account - TechRepublic][techrepublic-1]
- [How to make the most out of Google Drive on GNOME - TechRepublic][techrepublic-2]
- [Online accounts - GNOME Help][goa-help]

[google]:                       https://www.google.com/
[gnome]:                        https://www.gnome.org/
[goa]:                          https://wiki.gnome.org/Projects/GnomeOnlineAccounts
[google-account]:               https://myaccount.google.com/
[gsuite]:                       https://gsuite.google.com
[gmail]:                        https://gmail.com/
[evolution]:                    https://wiki.gnome.org/Apps/Evolution
[groupware]:                    https://en.wikipedia.org/wiki/Collaborative_software
[thunderbird]:                  https://www.thunderbird.net
[google-contacts]:              https://contacts.google.com/
[google-calendar]:              https://calendar.google.com/
[gnome-contacts]:               https://wiki.gnome.org/Apps/Contacts
[gnome-calendar]:               https://wiki.gnome.org/Apps/Calendar
[gnome-documents]:              https://wiki.gnome.org/Apps/Documents
[google-docs]:                  https://docs.google.com/
[gnome-files]:                  https://wiki.gnome.org/Apps/Files
[google-drive]:                 https://drive.google.com/
[dropbox]:                      https://www.dropbox.com/
[google-cloud-print]:           https://www.google.com/cloudprint
[pdf]:                          https://en.wikipedia.org/wiki/PDF
[gnome-photos]:                 https://wiki.gnome.org/Apps/Photos
[google-photos]:                https://photos.google.com/
[photos-dont-sync]:             https://www.reddit.com/r/gnome/comments/60o9uv/online_accounts_google_photos/
[exchange]:                     https://products.office.com/exchange/email
[office-365]:                   https://portal.office.com
[how-to-evolution-office-365]:  {%post_url en/2017-09-06-use-evolution-to-connect-to-office-365-on-linux %}
[techrepublic-1]:               https://www.techrepublic.com/article/how-to-connect-ubuntu-18-04-to-your-google-account/
[techrepublic-2]:               https://www.techrepublic.com/article/how-to-make-the-most-out-of-google-drive-on-gnome/
[goa-help]:                     https://help.gnome.org/users/gnome-help/stable/accounts.html.en
