---
date: 2019-04-01 22:45:00 GMT-3
image: '/files/2019/03/chromecast.jpg'
layout: post
published: true
nickname: 'chromecast'
title: 'Streaming from Linux to TV using Chromecast'
excerpt: 'Google Chromecast is a small device that, once connected to your Wi-Fi network and plugged into your TV’s HDMI port, allows you to stream video, music, web pages or even your computer’s or mobile device’s whole screen content to the TV. On Linux, you can use the Google Chrome web browser or its open equivalent, Chromium, to stream (cast) to Chromecast. How to do that is what you are going to see here.'
---

{% include image.html src="/files/2019/03/chromecast.jpg" %}

[Google Chromecast][chromecast] is a small device that, once connected to your Wi-Fi network and plugged into your TV's [HDMI] port, allows you to stream video, music, web pages or even your computer's or mobile device's whole screen content to the TV.

On [Linux], you can use the [Google Chrome][chrome] web browser or its open equivalent, [Chromium], to stream (cast) to Chromecast. How to do that is what you are going to see here.

## Set up your Chromecast device

Before we get started, make sure your Chromecast device is ready to receive streams.

It's not possible to setup Chromecast using a computer. In case you haven't setup your Chromecast yet, use a mobile device with [Android] or [iOS] to set it up.

For more information on how to do that, refer to the Chromecast help:

- [Set up your Chromecast device - Chromecast Help][chromecast-help-1]

It was possible in the past to setup Chromecast using a computer. That feature was [discontinued][9to5google] when [Google] released [Chrome version 72][chrome-72] by [January, 2019][chrome-72].

## Set up your computer

To stream from a computer to a Chromecast device, both must be on the same Wi-Fi network (for instance, your home Wi-Fi).

Besides that, you need to adjust some settings on your computer before your first streaming.

First, let's open in the firewall the ports used by Chromecast to communicate with the computer. According to [this blog post][g3rt], Chromecast uses the following ports:

- TCP 8008 and 8009; and
- UDP 32768 through 61000.

Starting with [openSUSE Leap 15][opensuse-leap-15], openSUSE's default firewall is [**firewalld**][firewalld].

To set it up, open the **Firewall** app:

{% include image.html src="/files/2019/04/chromecast-01-en.jpg" %}

(you can click either icon)

It will ask you the administrator (*root* user) password, which you must provide to continue.

Switch **Configuration** (on top) to **Permanent**:

{% include image.html src="/files/2019/04/chromecast-02-en.jpg" %}

Select the **Services** tab right below and click the **Add Service** button.

In the **Base Service Settings** dialog box, fill in the **Name** field with `chromecast` and click **OK**:

{% include image.html src="/files/2019/04/chromecast-03-en.jpg" %}

Back to the main screen, select the just created **chromecast** service, select the **Ports** tab and click **Add**. Fill in the **Port / Port Range** field with `8008-8009`:

{% include image.html src="/files/2019/04/chromecast-04-en.jpg" %}

In **Protocol**, choose **tcp**. Then, click **OK**.

Add the UDP ports the same way: click **Add**. Fill in the **Port / Port Range** field with `32768-61000`. In **Protocol**, choose **udp**. Click **OK**.

By now, your **Firewall Configuration** window should look like this:

{% include image.html src="/files/2019/04/chromecast-05-en.jpg" %}

Open the **Options** menu and click the **Reload Firewalld** option:

{% include image.html src="/files/2019/04/chromecast-06-en.jpg" %}

Select the **Zones** tab. Then, select the **home** zone and in the **Services** tab (there are two **Services** tabs, now I refer to the one below) enable the **chromecast** service:

{% include image.html src="/files/2019/04/chromecast-07-en.jpg" %}

Reload the firewall once more (**Options**, **Reload Firewalld**).

Last, select the Wi-Fi connection by the left (**wlan1**) and click **Change Zone**.

Select the **home** zone and click **OK**:

{% include image.html src="/files/2019/04/chromecast-08-en.jpg" %}

In short, you have just (1) set up the firewall to allow connections between your computer and Chromecast devices when you're at home and (2) said the Wi-Fi network you are now connected to is your home network.

You can classify different networks into different zones: home, work, public. By default, firewalld treats all new networks as public and allow just a few services, but I'm not going to dive into firewall details now.

If you use the Chromium open web browser, there is one more thing to do: by default, Chromium is setup to not search for Chromecast devices on the network.

To change that setting, open Chromium, go to `chrome://flags/#load-media-router-component-extension` and select **Enabled**:

{% include image.html src="/files/2019/03/chromecast-09.jpg" %}

Then, restart Chromium.

Now we are ready to cast!

## How to cast from Chrome / Chromium

Browse to the video or web page you want to cast, open the browser menu and click **Cast**:

{% include image.html src="/files/2019/04/chromecast-10-en.jpg" %}

Choose the Chromecast device you want to cast to:

{% include image.html src="/files/2019/04/chromecast-11-en.jpg" %}

Now your TV should be playing audio and video cast from your computer through Chromecast. You can control the streaming by the browser:

{% include image.html src="/files/2019/04/chromecast-12-en.jpg" %}

Click **Stop** when you no longer want to stream.

**Hint:** pin the **Cast** button to the browser toolbar by right-clicking it and then clicking **Always show icon**.

{% include image.html src="/files/2019/04/chromecast-13-en.jpg" %}

Follow Linux Kamarada to discover other ways you can have fun with Linux and Chromecast.

# References

- [Set up your Chromecast device - Chromecast Help][chromecast-help-1]
- [Google killing desktop Chromecast setup for Mac and PC with Chrome 72 - 9to5Google][9to5google]
- [Chromium - openSUSE Wiki][opensuse-wiki]
- [Documentation - HowTo - Add a Service - firewalld][firewalld-doc]
- [5 Useful Examples of firewall-cmd command - The Geek Diary][thegeekdiary]
- [How To Set Up a Firewall Using FirewallD on CentOS 7 - DigitalOcean][digitalocean]
- [Adding the Cast button to the Chrome toolbar - Chromecast Help][chromecast-help-2]

[chromecast]:           https://store.google.com/product/chromecast
[HDMI]:                 https://en.wikipedia.org/wiki/HDMI
[chrome]:               https://www.google.com/chrome/
[chromium]:             https://www.chromium.org/Home
[android]:              https://www.android.com/
[ios]:                  https://www.apple.com/ios/
[chromecast-help-1]:    https://support.google.com/chromecast/answer/2998456
[9to5google]:           https://9to5google.com/2018/12/30/chrome-72-killing-chromecast-setup-mac-windows/
[google]:               https://www.google.com/
[chrome-72]:            https://chromereleases.googleblog.com/2019/01/stable-channel-update-for-desktop.html
[g3rt]:                 https://blog.g3rt.nl/allow-google-chromecast-host-firewall-iptables.html
[opensuse-leap-15]:     {% post_url en/2018-05-25-based-on-enterprise-code-tested-millions-of-times-opensuse-leap-15-released %}
[firewalld]:            https://firewalld.org/
[linux]:                https://www.kernel.org/linux.html
[opensuse-wiki]:        https://en.opensuse.org/Chromium
[firewalld-doc]:        https://firewalld.org/documentation/howto/add-a-service.html
[thegeekdiary]:         https://www.thegeekdiary.com/5-useful-examples-of-firewall-cmd-command/
[digitalocean]:         https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7
[chromecast-help-2]:    https://support.google.com/chromecast/answer/7249696
