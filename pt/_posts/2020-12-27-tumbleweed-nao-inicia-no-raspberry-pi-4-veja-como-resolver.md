---
date: '2020-12-27 18:00:00 GMT-3'
image: '/files/2020/12/rpi4b-tumbleweed-waiting-for-phy-auto-negotiation.jpg'
layout: post
published: true
nickname: 'rpi4b-tumbleweed-bug'
title: 'Tumbleweed não inicia no Raspberry Pi 4: veja como resolver'
---

O [openSUSE Tumbleweed][leap-vs-tumbleweed] funciona bem no [Raspberry Pi 4][rpi4b] (e também no recém-lançado [Raspberry Pi 400][raspberry-pi-400]), embora [o suporte ao _hardware_ ainda não esteja completo][rpi4b-opensuse], de modo que alguns recursos como Bluetooth e som ainda não funcionam.&nbsp;

Mas as imagens mais recentes do Tumbleweed para o Raspberry Pi 4 não inicializam (não "dão _boot_", na gíria técnica). O sistema mostra várias vezes na tela a mensagem:

`Waiting for PHY auto negotiation to complete... TIMEOUT !`

{% include image.html src='/files/2020/12/rpi4b-tumbleweed-waiting-for-phy-auto-negotiation.jpg' %}

E reinicia. O menu do [GRUB] sequer é exibido.

Eu me deparei com esse problema enquanto tentava testar a última imagem do Tumbleweed com área de trabalho [XFCE], baseada no _snapshot_ 20201214.

Esse problema não acontece com a última imagem do [Leap 15.2][leap-15.2] com XFCE.

Eu pedi ajuda na [lista de discussão openSUSE ARM][opensuse-arm-1] e me indicaram uma solução de contorno (nome bonito para "gambiarra", "armengue", no Brasil varia de região pra região).

Se você está tentando iniciar o Tumbleweed no seu Raspberry Pi 4/400 e está se deparando com esse mesmo problema, enquanto ele não é resolvido em definitivo, você pode baixar o arquivo `u-boot.bin` [daqui][u-boot-1] ou [daqui][u-boot-2] (eu fiz uma cópia dele) e substituir o arquivo de mesmo nome que está na partição EFI do seu cartão SD.

Com isso, você já deve conseguir usar o Tumbleweed no seu Raspberry Pi 4/400 de novo.

Esse é um [_bug_ conhecido][bugzilla] e a equipe do [openSUSE] já está trabalhando para resolvê-lo.

## Referências

Se você quiser saber mais sobre esse _bug_, assim como sua solução de contorno, consulte os _links_ a seguir (todos em inglês):

- [Tumbleweed 20201214 on RPi4 - Waiting for PHY auto negotiation to complete - openSUSE ARM - openSUSE Mailing Lists][opensuse-arm-1]
- [raspberry pi 400 - openSUSE ARM - openSUSE Mailing Lists][opensuse-arm-2]
- [Regression observed on Rasbperry Pi 4 with snapshot 20201214 - openSUSE ARM - openSUSE Mailing Lists][opensuse-arm-3]
- [Bug 1180338 — \[RPi4\] u-boot can't handle DMA addresses different from CPU's][bugzilla]

[leap-vs-tumbleweed]:   {% post_url pt/2020-12-06-opensuse-leap-e-opensuse-tumbleweed-qual-e-a-diferenca %}
[rpi4b]:                {% post_url pt/2019-09-20-primeiros-passos-no-raspberry-pi-com-noobs-e-raspbian %}
[raspberry-pi-400]:     https://www.raspberrypi.org/blog/raspberry-pi-400-the-70-desktop-pc/
[rpi4b-opensuse]:       {% post_url pt/2020-10-07-opensuse-no-raspberry-pi-4-parte-1-download-e-instalacao %}
[grub]:                 https://www.gnu.org/software/grub/
[xfce]:                 https://www.xfce.org/
[leap-15.2]:            {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[opensuse-arm-1]:       https://lists.opensuse.org/archives/list/arm@lists.opensuse.org/thread/CWV5EK7ZPVLT2CH4LGP77UL3DRA4GDXM/
[u-boot-1]:             https://lists.opensuse.org/archives/list/arm@lists.opensuse.org/message/J2YM5M5TMWZC5DUYHU2YQ2KLS2BUH6LW/attachment/3/u-boot.bin
[u-boot-2]:             /files/2020/12/u-boot.bin
[bugzilla]:             https://bugzilla.suse.com/show_bug.cgi?id=1180338
[opensuse]:             https://www.opensuse.org/
[opensuse-arm-2]:       https://lists.opensuse.org/archives/list/arm@lists.opensuse.org/thread/QTYDOH45WSLGC4KKBTGK5YXMZZUHIXWC/#J2YM5M5TMWZC5DUYHU2YQ2KLS2BUH6LW
[opensuse-arm-3]:       https://lists.opensuse.org/archives/list/arm@lists.opensuse.org/thread/5BEWN672GVVCJCMPZTYC2QCNO7AMBS2Y/
