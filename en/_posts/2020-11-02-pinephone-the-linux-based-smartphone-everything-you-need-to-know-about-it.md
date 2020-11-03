---
date: '2020-11-02 22:45:00 GMT-3'
image: '/files/2020/10/pinephone-manjaro-banner.jpg'
layout: post
nickname: 'pinephone'
title: 'PinePhone, the Linux-based smartphone: everything you need to know about it'
---

{% include image.html src='/files/2020/10/pinephone-manjaro-banner.jpg' %}

The **[PinePhone]** is an affordable [Linux] smartphone created by [PINE64]. It is ideal for Linux fans looking for an alternative to the most common [Android] and [iOS] devices. PinePhone users have full control over the phone: in addition to the [open source][opensource] Linux system, it has six hardware kill switches for disabling components that are critical for security and privacy (such as the camera and GPS). Also, the phone is assembled with screws so it's easy to disassemble it and replace parts for repairs or upgrades.

{% include image.html src='/files/2020/10/pinephone-switches.jpg' style='max-width: 400px' caption='Hardware kill switches allow you to disable hardware components: a remarkable difference from PinePhone to other more common smartphones' %}

[pinephone]:    https://www.pine64.org/pinephone/
[linux]:        https://www.kernel.org/linux.html
[pine64]:       https://www.pine64.org/
[android]:      https://www.android.com/
[ios]:          https://www.apple.com/ios/
[opensource]:   https://opensource.org/osd-annotated

## Made by PINE64

{% include image.html src='/files/2020/10/pine64-logo.png' %}

[PINE64] is a community-driven company focused on creating high-quality, low-cost ARM devices that run mainline Linux — as well as any other operating systems that you port to them. PINE64 made its debut with the [PINE A64][pine-a64], a single-board computer (similar to the [Raspberry Pi][rpi4b]), which successfully launched on the [Kickstarter] crowdfunding platform in 2015. Since then, PINE64 has launched several other devices, both for designers and end users. Its product line based on the ARM architecture and the Linux system includes:

* the [PINE A64][pine-a64] and [ROCK64] single board computers;
* the [PineBook] laptop;
* the [PinePhone] smartphone;
* the [PineTab] tablet; and
* the [PineTime] smartwatch.

Have you ever thought of using Linux on all your devices? As for PINE64, that will be possible.

[pine-a64]:     https://www.pine64.org/devices/single-board-computers/pine-a64/
[rpi4b]:        {% post_url en/2019-09-29-getting-started-on-raspberry-pi-with-noobs-and-raspbian %}
[kickstarter]:  https://www.kickstarter.com/
[rock64]:       https://www.pine64.org/devices/single-board-computers/rock64/
[pinebook]:     https://www.pine64.org/pinebook/
[pinetab]:      https://www.pine64.org/pinetab/
[pinetime]:     https://www.pine64.org/pinetime/

## ARM architecture

PinePhone is based on the [ARM] architecture, as well as the Raspberry Pi and most Android smartphones.

Then, does that mean that I will be able to use the apps I downloaded from the [Play Store][play-store] on my PinePhone with Linux? Well, it's not that simple...

Note that you are actually talking about two different operating systems: it is true that [Android is based on the Linux kernel][howtogeek], but that does not make Android a Linux distribution like [openSUSE] or [Ubuntu]. Android apps are developed for Android, not for Linux. The same logic applies to programs for Linux. So if you copy an app from a smartphone with Android to a PinePhone with Linux (or vice-versa), it won't work.

The same happens if you have a computer with Windows and another computer with Linux: they may have the same architecture, but as their operating systems are different, you can't just copy applications from one to the other.

Because of that, don't expect that you will just unbox your PinePhone and install [WhatsApp] or [Instagram] on it, for example. If you need to use Android apps on the PinePhone, at the moment there are two solutions you can try:

- install Android on the PinePhone: there is a project called [GloDroid], which aims to port Android to PinePhone, Raspberry Pi and other devices
- use a software compatibility layer that allows you to run Android apps on Linux, such as [Anbox] (it's somehow similar to [Wine], which allows you to use Windows programs on Linux)

You can try them, but they are not guaranteed to work. I myself have not tested them yet, for now I just know they exist.

Ideally, developers should release versions of their applications for Linux ARM devices.

[arm]:          https://en.wikipedia.org/wiki/ARM_architecture
[play-store]:   https://play.google.com/store/
[howtogeek]:    https://www.howtogeek.com/189036/android-is-based-on-linux-but-what-does-that-mean/
[opensuse]:     https://www.opensuse.org/
[ubuntu]:       https://ubuntu.com/
[windows]:      https://www.microsoft.com/windows/
[whatsapp]:     https://www.whatsapp.com/
[instagram]:    https://www.instagram.com/
[glodroid]:     https://github.com/GloDroid/glodroid_manifest
[anbox]:        https://anbox.io/
[wine]:         https://www.winehq.org/

## PinePhone BraveHeart Edition

PINE64 started selling the PinePhone to the general public in [November 2019][braveheart-orders] and shipped the purchased units in [January 2020][braveheart-shipping]. The first edition of the PinePhone was named BraveHeart and was intended for early adopters and software developers. It wasn't preloaded with an operating system, but just a [factory test image][factorytest] instead. The user needed to download and install a Linux distribution — or even create one.

{% include image.html src='/files/2020/10/pinephone-factory-test.jpg' caption='The factory test image preloaded on the PinePhone BraveHeart' style='max-width: 400px;' %}

Some of the Linux distros that already supported the PinePhone since that beginning included: [Ubuntu Touch (UBports)][ubports], [postmarketOS], [KDE Neon (Plasma Mobile)][plasma-mobile] and [LuneOS].

The following image summarizes the PinePhone specs. You can check the complete technical specifications at the end of this text.

{% include image.html src='/files/2020/10/pinephone-specs.jpg' caption='PinePhone specs brief' %}

It's a humble phone indeed, it doesn't compare to a high-end Android smartphone or an [iPhone]. But it is more than enough to entertain geeks looking for fun.

[braveheart-orders]:    https://www.pine64.org/2019/11/05/brave-heart-edition-pinephones/
[braveheart-shipping]:  https://www.pine64.org/2020/01/15/pinephones-start-shipping-all-you-want-to-know/
[factorytest]:          https://wiki.pine64.org/index.php/PinePhone_Software_Releases#Factory_Test_OS
[ubports]:              https://ubports.com/
[postmarketos]:         https://postmarketos.org/
[plasma-mobile]:        https://www.plasma-mobile.org/get/
[luneos]:               http://www.webos-ports.org/
[iphone]:               https://www.apple.com/iphone/

## PinePhone Community Edition

The purpose of the PinePhone isn't only to deliver a functioning Linux phone to end-users, but also to encourage the creation of a whole market and ecosystem for it. PINE64 has supported Linux distros that develop for the PinePhone.

Thus, PINE64 has been making PinePhone editions preloaded with Linux distributions. For each unit sold, [PINE64 donates part of their income to the included distribution][pine64-donation].

The first PinePhone Community Edition featured Ubuntu Touch (UBports) with the [Lomiri] (formerly [Unity8]) user interface. It began taking orders in [April][ubports-orders] and shipped in May.

{% include image.html src='/files/2020/10/pinephone-ubports.png' style='max-height: 400px;' %}

The second PinePhone Community Edition was announced in [June][postmarketos-orders], it featured postmarketOS with the [Phosh] interface (based on [GNOME]) and shipped in late August.

{% include image.html src='/files/2020/10/pinephone-postmarketos.png' style='max-height: 400px;' %}

This edition brought a new optional version called Convergence Package with more RAM (3GB instead of 2GB), double the internal storage (32GB versus 16GB) and a compatible USB-C dock for connecting a monitor via HDMI, desktop peripherals such as mouse and keyboard via USB, etc so the PinePhone could be used as if it were a desktop.

{% include youtube.html id="yBeza4UNOm8" %}

The third PinePhone Community Edition, available for preorder since [September][manjaro-orders], features [Manjaro] with Phosh and is also available in both the regular and Convergence Package versions. Shipping [already started][manjaro-shipping], but it's still possible to order it.

{% include image.html src='/files/2020/10/pinephone-manjaro.png' style='max-height: 400px;' %}

It's interesting to note that the PinePhone received some [hardware revisions][pinephone-revisions] with each edition:

- PinePhone BraveHeart Edition was considered version 1.1
- PinePhone UBports Community Edition: version 1.2
- PinePhone postmarketOS Community Edition: version 1.2a
- PinePhone Manjaro Community Edition: version 1.2b

Those revisions didn't change the specs, but brought minor fixes and improvements.

[pine64-donation]:      https://www.pine64.org/2019/08/19/its-time-to-start-giving-back/
[lomiri]:               https://ubports.com/blog/ubport-blogs-news-1/post/lomiri-new-name-same-great-unity8-115
[unity8]:               https://unity8.io/
[ubports-orders]:       https://www.pine64.org/2020/04/02/pinephone-ubports-community-edition-pre-orders-now-open/
[postmarketos-orders]:  https://www.pine64.org/2020/06/15/june-update-postmarketos-ce-pinephone-shipping-pine64-cluster/
[phosh]:                https://wiki.postmarketos.org/wiki/Phosh
[gnome]:                https://www.gnome.org/
[manjaro-orders]:       https://www.pine64.org/2020/08/31/pinephone-manjaro-community-edition/
[manjaro]:              https://manjaro.org/
[manjaro-shipping]:     https://forum.pine64.org/showthread.php?tid=11959
[pinephone-revisions]:  https://wiki.pine64.org/index.php?title=PinePhone#Hardware_revisions

## Supported Linux distributions

You don't need to be stuck with the distro your PinePhone shipped with. Unlike most smartphones that come with a vendor lock-in that prevents you from installing other operating systems, the PinePhone allows you to boot from a microSD card, which is as easy as using a [LiveUSB] to boot a desktop. The PinePhone also allows you to flash an operating system to its internal memory using the [Jumpdrive] utility.

Besides that, all the hardware components selected by PINE64 to make the PinePhone have modules in the [mainline Linux kernel][kernel], which makes it easy to port Linux distros for it. They did different from, for example, the Raspberry Pi Foundation, which maintains its own fork of the Linux kernel and uses hardware components from Broadcom, which require proprietary kernel modules. That's why openSUSE is taking longer to support the Raspberry Pi.

At the moment, there are at least [18 operating systems available for the PinePhone][pinephone-oses], some designed from the ground up for mobile devices, such as Ubuntu Touch, others based on existing desktop Linux distributions, such as [Mobian] (Debian). The list of systems you can test on your PinePhone today includes:

- [Ubuntu Touch (UBports)][ubports]
- [KDE Neon (Plasma Mobile)][plasma-mobile]
- [Mobian] (Debian for mobile)
- [PureOS]
- [Fedora]
- [Arch Linux][arch]
- [Manjaro]
- [openSUSE] (yes, there is an [openSUSE image][pinephone-opensuse] being developed, we'll talk about it soon)
- [postmarketOS]
- [Gentoo]
- [GloDroid]

Note that not all of those images are officially provided by the distributions themselves (many are contributed by users) and most are in development. So, today, not all of the PinePhone features work on all Linux distributions.

There is a [multiboot image][multiboot] that allows you to test 13 distributions from a microSD card.

{% include image.html src='/files/2020/10/pinephone-multiboot-image.jpg' style='max-height: 400px;' %}

[liveusb]:              {% post_url en/2015-11-25-what-is-a-livecd-dvd-usb %}
[jumpdrive]:            https://wiki.pine64.org/PinePhone#Flashing_eMMC_using_Jumpdrive
[kernel]:               https://www.kernel.org/
[pinephone-oses]:       https://wiki.pine64.org/index.php?title=PinePhone_Software_Releases
[mobian]:               https://mobian-project.org/
[pureos]:               https://pureos.net/
[fedora]:               https://getfedora.org/
[arch]:                 https://archlinuxarm.org
[pinephone-opensuse]:   https://wiki.pine64.org/index.php?title=PinePhone_Software_Releases#openSUSE
[gentoo]:               https://www.gentoo.org/
[multiboot]:            https://xnux.eu/p-boot-demo/

## Where to buy? How does shipping work?

You won't find the PinePhone on retailer stores together with other more common smartphones, at least not for now. If you want to buy a PinePhone, you have to access the [Pine Store][pine-store]. There you will find not only the PinePhone itself, but also accessories for it (such as protective cases and screen protectors) and spare parts (such as the mainboard, the battery, the screen glass and others) in case you need to replace them in the future.

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/10/pinephone-pine-store.jpg' caption='PinePhone for sale at the Pine Store' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/10/pinephone-parts.jpg' caption='PinePhone spare parts at the Pine Store' %}
    </div>
</div>

Since the PinePhone contains a lithium-ion battery, the Pine Store does not allow combining it with other products, the PinePhone can only be shipped on its own, separately from other items. The reason for that was not clear for me, but I believe it is because of restrictions imposed to international air freight services. If you want to buy other PINE64 products besides the PinePhone, you will have to place more than one order.

Payment is made using a credit card, either via [PayPal] or by entering the credit card data directly on the website, in which case the payment is processed by [Stripe].

Speaking of PayPal, in the PinePhone product page, there is an information that needs to be noticed: a warning about possible hardware defects.

> Small numbers (1-3) of stuck or dead pixels are a characteristic of LCD screens. This is very rare, but normal and should not be considered a defect. When fulfilling the purchase, please bear in mind that we are offering the PinePhone at this price as a community service to PINE64 and Manjaro communities. If you think that a minor dissatisfaction, such as a dead pixel, will prompt you to file a PayPal dispute then please do not purchase the PinePhone. Thank you!

Another difference from usual orders is that the PinePhone is not shipped as soon as you buy it: the Pine Store keeps it available for sale for a while, usually a month or two, orders are gathered, and then the purchased units are sent all at once only the following month. The [Shipping Information][pine64-shipping] page on the PINE64 website estimates when product batches are going to be shipped. The PinePhone is always shipped by a courier service (currently, [DHL]).

Accessories, unlike the handset, are shipped immediately and you can choose between courier and postal services.

When you purchase the PinePhone, you will receive an email confirming the order. When the PinePhone is sent, you will receive another email with the tracking code for the shipment.

The edition that is now on sale [already started to ship][manjaro-shipping]. Selling is probably going to end soon.

[pine-store]:       https://pine64.com/
[paypal]:           https://www.paypal.com/
[stripe]:           https://stripe.com/
[pine64-shipping]:  https://www.pine64.org/shipping/
[dhl]:              https://www.dhl.com/

## Warranty

It's important to test all of the PinePhone features as soon as you receive it, as the product page informs it has a **30-day warranty**. You may need to flash other Linux distributions to the microSD card to be able to test all of the features.

## How much is the PinePhone?

The PinePhone costs 150 dollars (the store actually says $149.99, but I always round up to avoid [psychological pricing][psychological-pricing]). The Convergence Package, which adds the dock, increases the RAM memory and doubles the internal storage, costs 200 dollars ($199.99), so $50 more. For each PinePhone sold, $10 will be donated for the preloaded distro (currently, Manjaro).

Thinking on dollars, it's not an unrealistic price. It is close to some of the [cheapest Android smartphones][androidcentral], like the [Motorola Moto E][moto-e], which can be found on [Amazon] by the same $150. It is true that comparing specs the Moto E beats the PinePhone, but who buys a PinePhone probably prefers it because it's a Linux-based smartphone that puts the user in control.

Note that these prices do not include import taxes (where appropriate) and shipping.

[psychological-pricing]:    https://en.wikipedia.org/wiki/Psychological_pricing
[androidcentral]:           https://www.androidcentral.com/best-cheap-android-phones
[moto-e]:                   https://www.gsmarena.com/motorola_moto_e_(2020)-10287.php
[amazon]:                   https://www.amazon.com/dp/B086H3HH5V

## Mind the import taxes!

{% include image.html src='/files/2020/10/my-pinephone.jpg' caption='My PinePhone' style='max-width: 400px' %}

I bought the PinePhone postmarketOS Community Edition with the dock (the Convergence Package, $199.99), as well as a [hard case][pinestore-hard-case] ($9.99) and a [glass screen protector][pinestore-glass-protector] ($4.99). Due to the lithium-ion battery issue, I placed 2 orders: one for the phone and other for the accessories. The accessories were exempted from import taxes, but the phone was not.

My PinePhone was shipped by DHL. It was told on the [PINE64 forum][forum-pine64] that the phones after leaving Hong Kong should arrive at their destinations within 5-10 days regardless of the geographic location (depending on import procedures in each country, of course). The service of this courier company is indeed very good and fast. But to achieve such a fast delivery, [DHL pays the customs authority on your behalf][dhl-support] for any import taxes that are due on the product, and then delivers it to you after you repay them.

I live in Brazil, [a country known for charging high taxes and offering poor public services][high-taxes]. Only on import taxes I had to pay 1,274.17 Brazilian reais — 221.98 dollars, in current quotation (1 USD = 5.74 BRL). So, import taxes costed me more than the cell phone itself.

Until then, I had bought abroad just a few times, and I had been "lucky" that my imports were exempted from import taxes. This time, I've got this bad surprise. Because of what happened to me, here is my advice: get informed about import taxes in your country. International shopping is not my expertise, so I suggest that you search and read about it on other sites.

[pinestore-hard-case]:          https://pine64.com/product/pinephone-hard-protective-case/
[pinestore-glass-protector]:    https://pine64.com/product/pinephone-tempered-glass-screen-protector/
[forum-pine64]:                 https://forum.pine64.org/showthread.php?tid=11134
[dhl-support]:                  https://www.dhl.com/en/express/customs_support/duties_taxes/duties_taxes_receivers.html
[high-taxes]:                   https://www.ft.com/content/d5251061-1f09-3beb-94c9-fa7c09c622fa

## Summary

Perhaps you have noticed, but in case you haven't, it's important to make it very clear: today, the PinePhone is still unable to replace the smartphone you use daily. It is still more akin to a hardware and software prototype than a completed product. The user experience is still rough, the user interface isn't glamorous, there are still just a few compatible apps, but in part this is what makes the PinePhone so exciting: it is a technology that is beginning right now!

At the moment, the idea is that it will be acquired by enthusiastic users and software developers who will assist in developing the product.

It is also worth it noticing that the PinePhone is a cheap ($150) cell phone, produced in limited batches by a company with no previous experience in the smartphone industry. Flagship-level performance is out of the question for this phone, which isn't trying to compete with Samsung's or Apple's latest handsets.

PinePhone's ambitions are more "humble": to provide an open, reliable, "hackable" (and possibly upgradeable) smartphone based on the mainline Linux kernel.

Let's see what the community around the PinePhone can accomplish. We probably won't see it on the shelves of big stores anytime soon. But for people who appreciate the combination of free software and hardware kill switches, which are perfect for privacy and allow full user control over the phone, the PinePhone is certainly a very promising option.

## References

In addition to the various links spread across the text, to write it I also consulted the following:

- [PinePhone - PINE64 wiki][pinephone-pine64-wiki]
- [PinePhone - Wikipedia][pinephone-wikipedia]
- [PINEPHONE – "Community Edition: Manjaro with Convergence Package" Limited Edition Linux SmartPhone – Pine Store][pine-store-manjaro]
- [postmarketOS // PinePhone: postmarketOS community edition][postmarketos-blog]
- [The Linux-based PinePhone is the most interesting smartphone I've tried in years - Android Police][androidpolice]
- [PinePhone: What You Need to Know About This Linux Phone - OMG! Ubuntu!][omgubuntu-1]
- [New PinePhone with 3GB RAM and USB Dock Goes on Sale - OMG! Ubuntu!][omgubuntu-2]
- [PinePhone User Manual - Quick Start Guide (EN)][pinephone-manual]

[pinephone-pine64-wiki]:    https://wiki.pine64.org/index.php?title=PinePhone
[pinephone-wikipedia]:      https://en.wikipedia.org/wiki/PinePhone
[pine-store-manjaro]:       https://pine64.com/product/pinephone-community-edition-manjaro-with-convergence-package-limited-edition-linux-smartphone/
[postmarketos-blog]:        https://postmarketos.org/blog/2020/06/15/pinephone-postmarketos-community-edition/
[androidpolice]:            https://www.androidpolice.com/2020/08/13/the-linux-based-pinephone-is-the-most-interesting-smartphone-ive-tried-in-years/
[omgubuntu-1]:              https://www.omgubuntu.co.uk/2019/11/pinephone-specs-price-release-date
[omgubuntu-2]:              https://www.omgubuntu.co.uk/2020/07/buy-pinephone-postmarketos
[pinephone-manual]:         https://wiki.pine64.org/images/f/f7/USER_MANUAL_-_QUICK_START_GUIDE_EN_GER_FR_ESP_V1.3.pdf

## Technical specifications

- **Mobile networks:**
  - 2G (GSM/GPRS/EDGE)
  - 3G (UMTS/HSPA)
  - 4G (LTE)
  - all the worldwide bands
  - micro-SIM card
- **Wireless networks:**
  - Wi-Fi 802.11 b/g/n, single-band (2.4GHz), hotspot capable
  - Bluetooth 4.0, A2DP
- **Location:**
  - GPS/GLONASS/BeiDou/Galileo/QZSS, with A-GPS
- **Display:**
  - HD IPS LCD
  - 5.95 inches
  - 1440 × 720 pixels resolution, 18:9 ratio
  - 16 million colors
  - hardened glass
  - capacitive touchscreen
- **Platform:**
  - Allwinner A64 system-on-a-chip (SoC)
  - processor (CPU): ARM Cortex-A53
  - quad core
  - 1.2GHz clock
  - 64-bit ARMv8 architecture
  - graphics (GPU): ARM Mali-400 MP2
- **Memory:**
  - system memory: 2GB or 3GB LPDDR3 SDRAM
  - internal storage: 16GB or 32GB eMMC
  - microSD card slot, support up to 2TB, SDHC/SDXC, bootable
- **Cameras:**
  - rear (main) camera: 5MP, 1/4", LED flash
  - front (selfie) camera: 2MP, 1/5", f/2.8 aperture
- **Sound:**
  - built-in mono loudspeaker
  - built-in microphone
  - 3.5mm jack connector for stereo headphone with microphone
- **Sensors:**
  - accelerometer
  - gyro
  - proximity
  - ambient light
  - compass
  - barometer
- **Battery:**
  - lithium-ion, removable, 3,000 mAh
  - Samsung J7 form-factor
  - requires a 15W (5V 3A) charger
- **External buttons and connectors:**
  - volume up/down and power buttons
  - USB-C port (for charging, transfering data and connecting the dock)
- **Body:** matte black finished plastic
- **Other:**
  - hardware kill switches:
    - LTE and GPS
    - Wi-Fi and Bluetooth
    - microphone
    - rear camera
    - front camera
    - headphone
  - expansion pins for serial connection using the I2C protocol
  - multi-color notification LED
  - vibration

{% include image.html src='/files/2020/10/pinephone-pins.jpg' caption="Breakout board for the PinePhone&apos;s expansion pins. Source of images: [https://github.com/SMR404/PinephonePogoBreakout](https://github.com/SMR404/PinephonePogoBreakout)" %}

- **Size and weight of the phone:**
  - height: 160.5mm
  - width: 76.6mm
  - depth: 9.2mm
  - weight: between 180 and 200 grams
- **Package contents:**
  - PinePhone
  - USB-A to USB-C cable
  - quick start guide (you can see a PDF copy of it [here][pinephone-manual])
  - nano-SIM to micro-SIM adapter
  - USB-C docking bar (optional): contains HDMI video output,
   2 USB-A ports, 10/100Mbps Ethernet port and USB-C port (for power)

{% include image.html src='/files/2020/10/pinephone-sim-adapter.jpg' caption='Only later I realized that a nano-SIM to micro-SIM adapter came in the box.' %}

- **Size and weight of the package:**
  - length: 18cm
  - width: 10cm
  - height: 4cm
  - weight: 0.5kg
