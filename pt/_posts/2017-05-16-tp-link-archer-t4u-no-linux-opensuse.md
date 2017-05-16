---
date: '2017-05-16 01:15:00 UTC-3'
layout: post
published: true
title: 'TP-Link Archer T4U no Linux openSUSE'
image: '/files/2017/05/tp-link-archer-t4u.jpg'
nickname: 'tp-link-archer-t4u'
excerpt: 'Mês passado decidi turbinar a rede Wi-Fi da minha casa. Eu, que já tinha comprado uma RouterBOARD hAP, comprei dessa vez uma antena para conectar meu notebook à frequência de 5GHz do padrão 802.11ac: a TP-Link Archer T4U. O novo padrão de Wi-Fi 802.11ac visa ao desempenho. Além de maior velocidade, a frequência maior também garante que haja menos interferência, seja pela menor quantidade de aparelhos que a utilizam (hoje, por exemplo, telefones sem fio, microondas e dispositivos Bluetooth competem com a Wi-Fi pela frequência de 2,4GHz), seja pelo menor alcance das redes a 5GHz (o comprimento da onda reduz quando aumenta a frequência, na prática isso quer dizer que se a sua Wi-Fi e a do vizinho transmitem a 5GHz, é mais difícil que elas invadam a casa um do outro).'
---

Mês passado decidi turbinar a rede Wi-Fi da minha casa. Eu, que já tinha comprado uma [RouterBOARD hAP][routerboard-hap], comprei dessa vez uma antena para conectar meu *notebook* à frequência de 5GHz do padrão [802.11ac][802.11ac]: a [TP-Link Archer T4U][tp-link-archer-t4u].

{% include image.html src='/files/2017/05/tp-link-archer-t4u.jpg' %}

O novo padrão de Wi-Fi 802.11ac visa ao desempenho. Além de maior velocidade, a frequência maior também garante que haja menos interferência, seja pela menor quantidade de aparelhos que a utilizam (hoje, por exemplo, telefones sem fio, microondas e dispositivos [Bluetooth][bluetooth] competem com a Wi-Fi pela frequência de 2,4GHz), seja pelo menor alcance das redes a 5GHz (o comprimento da onda reduz quando aumenta a frequência, na prática isso quer dizer que se a sua Wi-Fi e a do vizinho transmitem a 5GHz, é mais difícil que elas invadam a casa um do outro).

Escolhi a antena levando em consideração que [o fabricante disponibiliza um *driver* para Linux][archer-t4u-driver] (um módulo para o [*kernel* Linux][kernel]). No entanto, não consegui fazê-la funcionar no [openSUSE Leap 42.2][opensuse-leap-42.2] seguindo o tutorial do fabricante. O *driver* oficial foi desenvolvido para o [Ubuntu 14.04][ubuntu-14.04] com o *kernel* versão 3.16.0, ambos lançados em 2014. De lá pra cá, muita coisa mudou, de sorte que o *driver* oficial não mais funciona com o *kernel* 4.4.27 que acompanha a versão mais recente do openSUSE Leap.

Felizmente, como é frequente no mundo do [*software* livre][free-software], pesquisando no [Google][google], encontrei [uma versão comunitária desse *driver* no GitHub][archer-t4u-github]. Com um pouco de leitura, consegui instalá-la e hoje estou usufruindo da minha conexão a 5GHz.

Para dar minha contribuição, decidi escrever o que eu fiz, passo a passo, pro caso de alguém precisar.

## O que vamos utilizar

Vamos baixar o código-fonte do *driver* comunitário. Se você tem familiaridade com o [Git][git], pode obter o código-fonte clonando seu repositório:

```
$ git clone https://github.com/abperiasamy/rtl8812AU_8821AU_linux.git
$ cd rtl8812AU_8821AU_linux/
```

Se você não usa Git, não se preocupe: aqui ele seria apenas uma facilidade, um atalho, para quem o usa. Para baixar o código-fonte do *driver* comunitário, acesse [sua página no GitHub][archer-t4u-github], clique em **Clone or download** e depois em **Download ZIP**:

{% include image.html src='/files/2017/05/tp-link-archer-t4u-1.png' %}

Todos os arquivos que compõem o código-fonte são baixados na forma de um arquivo compactado ZIP. Extraia o conteúdo desse arquivo:

```
$ unzip rtl8812AU_8821AU_linux-master.zip
$ cd unzip rtl8812AU_8821AU_linux-master
```

Para compilar o código-fonte do *driver*, instale os pacotes **gcc**, **make**, **dkms** e **kernel-default-devel** (supondo que você utiliza o *kernel* padrão, que é o **kernel-default**):

```
# zypper ref
# zypper in gcc make dkms kernel-default-devel
```

## Mão na massa!

Para compilar e instalar o *driver* da TP-Link Archer T4U, dentro da pasta onde está seu código-fonte, basta executar o seguinte comando:

```
# make -f Makefile.dkms install
```

Note que o *driver* (módulo do *kernel*) ainda não é carregado de imediato. O comando a seguir não retorna nada:

```
# lsmod | grep rtl8812au
```

Carregue o módulo do *kernel* e verifique que ele foi de fato carregado:

```
# modprobe rtl8812au
# lsmod | grep rtl8812au
rtl8812au            1368064  0 
cfg80211              593920  5 mac80211,rtl8812au,ath9k,ath,ath9k_common
usbcore               245760  10 uvcvideo,usbhid,rtl8812au,ehci_hcd,xhci_pci,rtsx_usb,ath3k,btusb,xhci_hcd,ehci_pci
```

Os comandos dessa seção devem ser repetidos a cada atualização do *kernel*.

## Voilà!

Feito isso, o sistema já mostra seu novo adaptador Wi-Fi:

{% include image.html src='/files/2017/05/tp-link-archer-t4u-2.jpg' %}

Você já pode se conectar à sua rede Wi-Fi 802.11ac de 5GHz:

{% include image.html src='/files/2017/05/tp-link-archer-t4u-3.png' %}

Divirta-se bastante!

## Referências

- [802.11ac e 802.11n: veja diferenças entre padrões da performance Wi-Fi | Notícias | TechTudo][802.11ac]
- [Adaptador USB Wireless Dual Band AC1200 - TP-Link][tp-link-archer-t4u]
- [abperiasamy/rtl8812AU_8821AU_linux: rtl8812AU_8821AU linux kernel driver for AC1200 (801.11ac) Wireless Dual-Band USB Adapter][archer-t4u-github]
- [TP-LINK Archer T4U - WikiDevi][wikidevi]
- [Uso básico dos comandos zip e unzip [Dica] - Viva o Linux][unzip]
- [Howto: Linux Add or Remove a Linux Kernel Modules / Drivers - nixCraft][list-add-kernel-modules]

[routerboard-hap]:          https://routerboard.com/RB952Ui-5ac2nD-TC
[802.11ac]:                 http://www.techtudo.com.br/noticias/noticia/2016/09/80211ac-e-80211n-veja-diferencas-entre-padroes-da-performance-wi-fi.html
[tp-link-archer-t4u]:       http://www.tp-link.com.br/products/details/cat-11_Archer-T4U.html
[bluetooth]:                https://pt.wikipedia.org/wiki/Bluetooth
[archer-t4u-driver]:        http://www.tp-link.com.br/download/Archer-T4U_V1.html#Driver
[kernel]:                   https://www.kernel.org/
[opensuse-leap-42.2]:       {%post_url 2016-11-16-opensuse-leap-42-2-versao-otima-para-profissionais-linux %}
[ubuntu-14.04]:             https://wiki.ubuntu.com/TrustyTahr/ReleaseNotes
[free-software]:            https://www.gnu.org/philosophy/free-sw.pt-br.html
[google]:                   https://www.google.com.br
[archer-t4u-github]:        https://github.com/abperiasamy/rtl8812AU_8821AU_linux
[git]:                      https://git-scm.com/
[wikidevi]:                 https://wikidevi.com/wiki/TP-LINK_Archer_T4U
[unzip]:                    https://www.vivaolinux.com.br/dica/Uso-basico-dos-comandos-zip-e-unzip
[list-add-kernel-modules]:  https://www.cyberciti.biz/faq/add-remove-list-linux-kernel-modules/

