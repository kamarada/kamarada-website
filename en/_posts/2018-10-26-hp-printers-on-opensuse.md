---
date: 2018-10-26 19:30:00
image: '/files/2018/09/hp-printers.png'
layout: post
published: true
nickname: 'howto-hp-printer'
title: 'HP printers on openSUSE'
excerpt: 'HP printers and all-in-one devices (printer, scanner and fax) are very popular in Brazil. In this post, I show how I have my HP DeskJet Ink Advantage 3836 setup to print via network on openSUSE. Other HP printers can be setup the same way.'
---

{% include image.html src="/files/2018/09/hp-printers.png" %}

[HP][hp] printers and all-in-one devices (printer, scanner and fax) are very popular in Brazil.

In this post, I show how I have my [HP DeskJet Ink Advantage 3836][hp-3836] setup to print via network on [openSUSE][opensuse]. Other HP printers can be setup the same way.

I suppose your printer is already connected to the network, but if you are just unboxing it, there is no problem, you can set its networking up using openSUSE too.

## Installing the HP printing driver

The HP printing driver for [Linux][linux] is called [**HPLIP (HP Linux Imaging and Printing)**][hplip].

You can install it on openSUSE by the same name package [hplip][hplip-sw]:

```
# zypper in hplip
```

The official [openSUSE Leap 15.0][opensuse-leap] repository provides HPLIP version 3.17.9.

## Adding the HP printer

With HPLIP installed, launch the **HP Device Manager** app.

It starts warning there are no HP devices setup:

{% include image.html src="/files/2018/09/hp-printers-01.jpg" %}

Click on **Setup Device**.

Turn on your printer, in case it is not turned on yet.

On the first screen of the setup wizard, choose your printer connection type:

{% include image.html src="/files/2018/09/hp-printers-02.jpg" %}

- if your printer is directly connected to your computer by an USB cable, choose **Universal Serial Bus (USB)**;
- if your printer is connected to your network (already setup, that is my case), choose **Network/Ethernet/Wireless network**;
- if your printer is to be connected to a Wi-Fi network (not setup yet), choose **Wireless/802.11**; or
- if your printer uses a [parallel port][lpt] (probably it is an old printer, because many desktops and laptops don't have that port anymore), choose **Parallel Port (LPT)**.

**Tip:** if you have just unboxed your printer, choose the third option (**Wireless/802.11**). First connect your printer to your computer using an USB cable. The wizard will set up your printer networking. In the end, you are going to remove the USB cable and print wirelessly.

Choose your printer connection type and click on **Next**.

The wizard is going to look for your printer on the network.

It may not find your printer (it happened to me):

{% include image.html src="/files/2018/09/hp-printers-03.jpg" %}

If that happen to you, click on **OK** to get back to the **Device Discovery** screen.

Check your printer networking settings. The exact steps may vary depending on your printer model. On mine, I just touched the **Wireless** icon:

{% include image.html src="/files/2018/10/hp-printers-04-en.jpg" %}

Take note of the **IP** address:

{% include image.html src="/files/2018/10/hp-printers-05-en.jpg" %}

(e.g. `172.17.0.2`)

Back to the wizard first screen, click on **Show Advanced Options**, check the **Manual Discovery** option, fill in the **IP Address** field and click on **Next**:

{% include image.html src="/files/2018/09/hp-printers-06.jpg" %}

Now the wizard finds the printer. It even shows its model:

{% include image.html src="/files/2018/09/hp-printers-07.jpg" %}

If the wizard still does not find your printer, close it and read the troubleshooting section at the end of this post.

Click on **Next**.

If your printer has fax capability but you don't use it, uncheck the **Fax Setup** option:

{% include image.html src="/files/2018/09/hp-printers-08.jpg" %}

Lastly, click on **Add Printer**.

Enter an administrator (e.g. *root*) **Username** and **Password** and click on **OK**:

{% include image.html src="/files/2018/09/hp-printers-09.jpg" %}

And that's all! Now the printer is shown on the HP Device Manager main screen:

{% include image.html src="/files/2018/09/hp-printers-10.jpg" %}

You can use **Print Test Page** to check if your printer has been properly setup.

## Printing a document

Now your printer is already available for printing on apps.

Instructions on how to print vary from app to app.

As an example, let's see how to print a [PDF document][pdf] using [**Document Viewer**][evince].

Click on the **File options** button (top right corner of the window) and click on **Print**:

{% include image.html src="/files/2018/10/hp-printers-11-en.jpg" %}

On the **Print** dialog, select your printer on the list, optionally adjust any printing settings, lastly click on the **Print** button:

{% include image.html src="/files/2018/10/hp-printers-12-en.jpg" %}

## Tip: draft mode

If you are printing a text just for reading at home, you can use the draft mode of your printer to save ink. The only disadvantage of this mode is that photos and pictures in general may seem pixelated.

To print in draft mode, on the **Print** dialog, open the **Advanced** tab and change the **Printout Mode** setting to **Draft Grayscale** or **Draft** (color):

{% include image.html src="/files/2018/10/hp-printers-13-en.jpg" %}

On the other hand, if you need a higher quality printing (at the expense of ink), you can choose **High Quality Grayscale** or **High Quality** (color).

## HPLIP cannot detect my printer

The HPLIP driver available on the distribution official repository is not always the latest version available on the [HPLIP's site][hplip] (at the time of writing, version 3.18.9). Therefore, it may not recognize your printer, mainly if it is a later model.

To get a more recent version of the HPLIP driver, add the [Printing project][printing] repository:

```
# zypper ar http://download.opensuse.org/repositories/Printing/openSUSE_Leap_15.0/ printing
```

Then, reinstall the HPLIP driver and try to add the printer again.

[hp]:               https://www.hp.com
[hp-3836]:          https://support.hp.com/us-en/product/HP-DeskJet-Ink-Advantage-3830-All-in-One-Printer-series/7172328/model/7429639
[opensuse]:         https://www.opensuse.org/
[linux]:            https://www.kernel.org/linux.html
[hplip]:            https://developers.hp.com/hp-linux-imaging-and-printing
[hplip-sw]:         https://software.opensuse.org/package/hplip
[opensuse-leap]:    {% post_url en/2018-05-25-based-on-enterprise-code-tested-millions-of-times-opensuse-leap-15-released %}
[lpt]:              https://en.wikipedia.org/wiki/Parallel_port
[evince]:           https://wiki.gnome.org/Apps/Evince
[pdf]:              https://en.wikipedia.org/wiki/PDF
[printing]:         https://build.opensuse.org/project/show/Printing
