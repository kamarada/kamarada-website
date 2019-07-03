---
date: 2019-07-02 22:50:00
image: '/files/2018/09/thunderbird-token.png'
layout: post
published: true
nickname: 'how-to-thunderbird-token'
title: 'Sending digitally signed emails with Thunderbird'
excerpt: 'Although webmails are today more popular than email clients, some interesting features are exclusive of those desktop apps. For instance, if you have a digital certificate, you can digitally sign the emails you send, giving their recipients more confidence about their authenticity and integrity. In this post, you are going to see you can do that using the Mozilla Thunderbird email client.'
---

{% include image.html src="/files/2018/09/thunderbird-token.png" style="max-width: 340px;" %}

Although webmails are today more popular than email clients, some interesting features are exclusive of those desktop apps. For instance, if you have a [digital certificate][how-to-token], you can digitally sign the emails you send, giving their recipients more confidence about their authenticity and integrity.

In this post, you are going to see you can do that using the [Mozilla Thunderbird][thunderbird] email client.

Before starting, to get everyone on the same page, I recommend reading previous posts about digital certificates and Thunderbird:

- [How to install website certificates on Linux][how-to-install-certificates]
- [Using smart cards on openSUSE Linux][how-to-token]
- [Read Gmail messages on Thunderbird][how-to-thunderbird-gmail]

## Installing your CA certificate on Thunderbird

Similarly as [we did][how-to-token] with [Mozilla Firefox][firefox], first we need to add our CA certificate to our email client, otherwise it won't be able to validate our certificate hierarchy.

Let's see how to add a CA certificate to Thunderbird.

To demonstrate, I'm going to import the certificate of the Brazilian root CA [ICP-Brasil], as my certificate was issued by a CA that belongs to its hierarchy.

Pull down the **Thunderbird menu** (top right corner of the window) and click **Preferences**:

{% include image.html src="/files/2019/07/thunderbird-token-01.jpg" %}

On the **Thunderbird Preferences** dialog, select the **Advanced** tab, then the **Certificates** tab below and click **Manage Certificates**:

{% include image.html src="/files/2019/07/thunderbird-token-02.jpg" %}

On the **Certificate Manager** dialog, select the **Authorities** tab and click **Import**:

{% include image.html src="/files/2019/07/thunderbird-token-03.jpg" %}

Select the CA certificate file you want to import.

Check all the options to fully trust the Certificate Authority and click **OK**:

{% include image.html src="/files/2019/07/thunderbird-token-04.jpg" %}

Make sure your CA certificate appears listed and click **OK**:

{% include image.html src="/files/2019/07/thunderbird-token-05.jpg" %}

Click **Close** to close the **Thunderbird Preferences** dialog.

## Setting up Thunderbird to use your token

Similarly as [we did][how-to-token] with Firefox, now we set up Thunderbird to use our token.

Open the **Thunderbird menu** and click **Preferences**.

On the **Thunderbird Preferences** dialog, select the **Advanced** tab, then the **Certificates** tab below and click **Security Devices**.

On the **Device Manager** dialog, click **Load**:

{% include image.html src="/files/2019/07/thunderbird-token-06.jpg" %}

On the next dialog box, fill in the **Module Name** field with a name that identifies your token (for instance, `eToken`).

Fill in the **Module filename** field with the path to your token's library:

- if your token is supported by OpenSC, type `/usr/lib64/opensc-pkcs11.so`;
- if you have a SafeNet token and needed to install SAC (like me), type `/usr/lib64/libeToken.so`;
- for other token models, ask your token vendor or your certificate authority which path should be informed.

When you finish, click **OK**:

{% include image.html src="/files/2019/07/thunderbird-token-07.jpg" %}

Your token is added to the list of **Security Modules and Devices**. Click **OK**:

{% include image.html src="/files/2019/07/thunderbird-token-08.jpg" %}

Click **Close** to close the **Thunderbird Preferences** dialog.

## Setting up digital signing on Thunderbird

The next step is to set up Thunderbird to sign the emails sent from our email account with our certificate.

Open the **Thunderbird menu** and go to **Preferences**, **Account Settings**:

{% include image.html src="/files/2019/06/thunderbird-gmail-09.jpg" %}

On the left panel, among the account settings, select **Security** and by the right, near **Digital Signing**, click **Select**:

{% include image.html src="/files/2019/07/thunderbird-token-09.jpg" %}

Enter the PIN for your token and click **OK**:

{% include image.html src="/files/2019/07/thunderbird-token-10.jpg" %}

Select the certificate to be used for digital signing and click **OK**:

{% include image.html src="/files/2019/07/thunderbird-token-11.jpg" %}

As we are going to set up criptography just for sending, not for replying, choose **No**:

{% include image.html src="/files/2019/07/thunderbird-token-12.jpg" %}

Back to the **Account Settings** dialog, in case you want to always sign the emails you send, check the **Digitally sign messages (by default)** option.

Click **OK** to close the **Account Settings** dialog and go back to the Thunderbird main window.

Right now, digital signing is set up and ready to be used!

## Sending digitally signed emails

On the Thunderbird main window, click the **Write** button:

{% include image.html src="/files/2019/07/thunderbird-token-13.jpg" %}

As usual, fill in the **From** and **To** fields and type the message body.

Before sending, open the **Security** menu and make sure the **Digitally Sign This Message** option is checked:

{% include image.html src="/files/2019/07/thunderbird-token-14.jpg" %}

(if you have setup Thunderbird to always sign the emails you send, that option should be already checked by default)

When you finish, click **Send**.

Thunderbird asks for the token PIN to sign the email right before sending.

## Checking the digital signature of received emails

If the recipient uses Thunderbird, they can check the digital signature of the message:

{% include image.html src="/files/2019/07/thunderbird-token-15.jpg" %}

{% include image.html src="/files/2019/07/thunderbird-token-16.jpg" %}

If Thunderbird tells the digital signature is not valid, the recipient may be missing your CA certificate. They need to add that certificate to their Thunderbird installation following the instructions presented on this page. After doing that, back to the message window, Thunderbird will be able to validate the signature.

If the recipient uses a webmail, it may allow to check the digital signature of the message. For instance, that is possible with [Gmail]:

{% include image.html src="/files/2019/07/thunderbird-token-17.jpg" %}

Note that Gmail does not trust a certificate that belongs to the hierarchy of the Brazilian root CA ICP-Brasil. Unfortunately, the definitive solution to this issue would require [Google] to install and trust the ICP-Brasil certificate on its servers.

As a workaround, you can click the **Sender info** link and then click **Download certificates**:

{% include image.html src="/files/2019/07/thunderbird-token-18.jpg" %}

Open the downloaded file (the sender certificate) and check its hierarchy by yourself:

{% include image.html src="/files/2019/07/thunderbird-token-19.jpg" %}

## Thunderbird bug: certificate could not be found

When trying to send a digitally signed email, you may face a Thunderbird bug:

- [531073 - S/MIME certificate could not be found although it is available][bugzilla]

Instead of signing and sending the email, Thunderbird shows the following error message:

{% include image.html src="/files/2019/07/thunderbird-token-bug-en.jpg" caption="Send Message Error. Sending of message failed. You specified that this message should be digitally signed, but the application either failed to find the signing certificate specified in your Mail & Newsgroup Account Settings, or the certificate has expired." %}

That bug has been fixed on Thunderbird 69.0 (regular release) and 60.7.1 ([ESR]), which has been made available for [openSUSE Leap 15.1][leap-15.1] users through a security update.

If you faced that bug, check for updates to your system. You can read more info here:

- [How to get updates for openSUSE Linux][howto-update]

<!--

If that happens, repeat the steps to set up Thunderbird to use your token: go to **Preferences**, select the **Advanced** tab, then the **Certificates** tab and click **Security Devices**. Thunderbird asks for the token PIN. Inform it and click **OK**.

Now, close the **Preferences** dialog and go back to the message window.

This time, you should be able to send the email. Thunderbird may not ask your token PIN.

-->

## References

- [S/MIME Email Encryption with Thunderbird - Nitrokey][nitrokey]
- [Install Certificate - Mozilla Thunderbird - GlobalSign][globalsign]
- [Basics of email encryption, Export /Import email certificate and enable to use in Mozilla Thunderbird - Sectigo KnowledgeBase][sectigo]
- [PSM:Changing Trust Settings - MozillaWiki][mozilla-wiki]

[how-to-token]:                 {%post_url en/2019-06-28-using-smart-cards-on-opensuse-linux %}
[thunderbird]:                  https://www.thunderbird.net
[how-to-install-certificates]:  {%post_url en/2018-10-30-how-to-install-website-certificates-on-linux %}
[how-to-thunderbird-gmail]:     {%post_url en/2019-06-07-read-gmail-messages-on-thunderbird %}
[firefox]:                      https://www.mozilla.org/firefox/
[icp-brasil]:                   http://www.iti.gov.br/icp-brasil
[gmail]:                        https://gmail.com
[google]:                       https://www.google.com
[bugzilla]:                     https://bugzilla.mozilla.org/show_bug.cgi?id=531073
[esr]:                          https://www.thunderbird.net/en-US/organizations/
[leap-15.1]:                    {%post_url en/2019-05-22-opensuse-community-releases-leap-15-1-version %}
[howto-update]:                 {%post_url en/2019-05-20-how-to-get-updates-for-opensuse-linux %}
[nitrokey]:                     https://www.nitrokey.com/documentation/smime-thunderbird
[globalsign]:                   https://support.globalsign.com/customer/en/portal/articles/1214955-install-certificate---mozilla-thunderbird
[sectigo]:                      https://support.sectigo.com/Com_KnowledgeDetailPage?Id=kA01N000000zFNM
[mozilla-wiki]:                 https://wiki.mozilla.org/PSM:Changing_Trust_Settings
