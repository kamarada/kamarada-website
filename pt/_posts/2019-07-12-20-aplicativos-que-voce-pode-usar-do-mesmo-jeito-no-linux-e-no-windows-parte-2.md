---
date: '2019-07-12 02:00:00 GMT-3'
layout: post
published: true
title: '20 aplicativos que você pode usar do mesmo jeito no Linux e no Windows — parte 2'
image: /files/2019/07/apps-linux-windows-2.jpg
nickname: 'apps-linux-windows-2'
excerpt: 'A intenção original era falar de 18 programas que estão disponíveis tanto para Linux quanto para Windows, mas me lembrei de mais 2 programas e decidi fechar em 20. Além disso, adicionei um bônus: ao final, apresento alguns serviços bastante conhecidos que podem ser usados diretamente do navegador, sem precisar instalar aplicativos.'
---

{% include image.html src="/files/2019/07/apps-linux-windows-2.jpg" %}

A intenção original era falar de 18 programas que estão disponíveis tanto para [Linux] quanto para [Windows], mas me lembrei de mais 2 programas e decidi fechar em 20. Além disso, adicionei um bônus: ao final, apresento alguns serviços bastante conhecidos que podem ser usados diretamente do navegador, sem precisar instalar aplicativos. Esses serviços também funcionam da mesma forma no Windows e no Linux.

Esse *post* é o segundo de dois que mostram 20 (não mais 18) programas para Linux e Windows. Se você caiu aqui de paraquedas, comece a leitura pela primeira parte, na qual apresento os 10 primeiros programas:

- [18 aplicativos que você pode usar do mesmo jeito no Linux e no Windows — parte 1][apps-linux-windows]

Todo mundo na mesma página, agora sim, vamos à segunda parte.

## 11) Foxit Reader

{% include image.html src="/files/2019/07/foxit-reader.jpg" %}

O [Foxit Reader][foxit-reader] é um popular leitor de [PDF] desenvolvido pela [Foxit Software][foxit-software]. Leve, rápido e intuitivo, ele possui várias funcionalidades que vão além do básico que é abrir e ler documentos em PDF, como comentários, destaques, desenhos, até assinatura digital.

Embora seja gratuito, o Foxit Reader é [proprietário][proprietary-sw]. Portanto, para instalá-lo, tanto no Linux quanto no Windows, você deve baixá-lo do seu *site*:

- [https://www.foxitsoftware.com/pt-br/pdf-reader/](https://www.foxitsoftware.com/pt-br/pdf-reader/)

## 12) Telegram

{% include image.html src="/files/2019/07/telegram-pt.jpg" %}

O [Telegram] é um aplicativo para troca de mensagens disponível para computadores, *smartphones* e *tablets*. Permite enviar e receber mensagens de texto e de áudio, fotos, vídeos, arquivos e figurinhas (*stickers*). Além desses recursos, comuns aos mensageiros, o Telegram tem algumas funcionalidades voltadas à segurança e a privacidade.

O Telegram ficou conhecido no Brasil devido aos [bloqueios judiciais do WhatsApp][whatsapp-justica]. Durante esses bloqueios, as pessoas recorreram ao Telegram como uma alternativa. Diferente do [WhatsApp], o Telegram pode ser usado em vários dispositivos ao mesmo tempo.

No [openSUSE], o aplicativo do Telegram pode ser obtido do repositório da distribuição:

```
# zypper in telegram-desktop
```

Para instalar o aplicativo do Telegram no Windows, baixe o instalador do seu *site*:

- [https://telegram.org/](https://telegram.org/)

No Windows, também é possível [baixar o aplicativo do Telegram pela Microsoft Store][telegram-ms-store].

**Dica:** você não precisa instalar o aplicativo para usar o Telegram, você pode usá-lo pelo navegador. Acesse [web.telegram.org](https://web.telegram.org/).

## 13) VirtualBox

{% include image.html src="/files/2019/07/virtualbox-pt.jpg" %}

[VirtualBox] é um *software* de virtualização gratuito, livre e multi-plataforma desenvolvido pela [Oracle]. Ele permite criar máquinas virtuais nas quais podem ser instalados sistemas operacionais e aplicativos. Com isso, você pode usar dois ou mais sistemas ao mesmo tempo, como se estivesse usando dois ou mais computadores, mas compartilhando fisicamente o mesmo *hardware* (na verdade, você usa apenas um computador).

O VirtualBox chama a máquina real (a que você usa) de **hospedeira** (*host*): ela hospeda as máquinas virtuais, que são chamadas de **convidadas** (*guests*).

Para instalar o VirtualBox na máquina hospedeira, no openSUSE, execute:

```
# zypper in virtualbox virtualbox-qt
```

Se a máquina hospedeira roda Windows, baixe o instalador do VirtualBox seu *site*:

- [https://www.virtualbox.org/](https://www.virtualbox.org/)

Na máquina virtual, é recomendado instalar os adicionais para convidado, que melhoram a interação entre máquina real e virtual por meio do VirtualBox.

Se você instalou o openSUSE na máquina virtual, execute (na máquina virtual):

```
# zypper in virtualbox-guest-{tools,x11}
```

Se a máquina virtual roda Windows ou outro sistema operacional (inclusive outras distribuições Linux), para instalar os adicionais de convidado, na janela da máquina virtual, abra o menu **Dispositivos** e clique em **Inserir imagem de CD dos Adicionais para Convidado**.

{% include image.html src="/files/2019/07/virtualbox-guest-additions-pt.jpg" %}

**Dica:** se você usa Windows e quer experimentar o Linux, pode instalar o VirtualBox, criar uma máquina virtual e instalar o Linux nela.

## 14) GIMP

{% include image.html src="/files/2019/07/gimp-pt.jpg" %}

[GIMP] é a sigla de *GNU Image Manipulation Program* (programa de manipulação de imagens do GNU, em uma tradução livre). É um editor de imagens gratuito, livre e multi-plataforma que pode ser usado para criar, editar e retocar [imagens matriciais][imagens-matriciais] (como *bitmaps* do [Paint] ou fotos no formato [JPG], por exemplo), desenhar livremente à mão, fazer composições de imagens, converter entre diferentes formatos de imagens e mais. Indicado para *designers*, fotógrafos e ilustradores, pode ser visto como uma alternativa gratuita ao [Adobe Photoshop][photoshop].

No openSUSE, o GIMP pode ser obtido do repositório da distribuição. Para isso, execute:

```
# zypper in gimp gimp-lang
```

Para instalar o GIMP no Windows, baixe o instalador do seu *site*:

- [https://www.gimp.org/](https://www.gimp.org/)

## 15) Inkscape

{% include image.html src="/files/2019/07/inkscape-pt.jpg" %}

[Inkscape] é um aplicativo de editoração eletrônica de documentos e [imagens vetoriais][imagens-vetoriais] gratuito, livre e multi-plataforma. Trabalha com imagens no formato [SVG], um formato aberto de imagens vetoriais, exporta para o formato [PNG], popular na Internet, e importa vários formatos vetoriais e matriciais, como JPG, por exemplo. É semelhante ao [CorelDRAW][coreldraw].

No openSUSE, o Inkscape pode ser obtido do repositório da distribuição. Para isso, execute:

```
# zypper in inkscape inkscape-lang
```

Para instalar o Inkscape no Windows, baixe o instalador do seu *site*:

- [https://inkscape.org/pt-br/](https://inkscape.org/pt-br/)

## 16) Audacity

{% include image.html src="/files/2019/07/audacity-pt.jpg" %}

[Audacity] é um editor digital de áudio multi-faixa gratuito, livre e multi-plataforma. Permite gravar, importar, mixar, cortar e editar arquivos de áudio, aplicar efeitos como normalização, *fade in*, *fade out* e outros e pode ser estendido pela adição de *plugins*. Possui interface bastante intuitiva e fácil de usar.

No openSUSE, o Audacity pode ser obtido do repositório da distribuição. Para isso, execute:

```
# zypper in audacity audacity-lang
```

Para instalar o Audacity no Windows, baixe o instalador do seu *site*:

- [https://www.audacityteam.org/](https://www.audacityteam.org/)

## 17) Shotcut

{% include image.html src="/files/2019/07/shotcut-pt.jpg" %}

O [Shotcut] é um editor de vídeo gratuito, livre e multi-plataforma. Possui uma interface simples que apresenta o balanço perfeito entre recursos e usabilidade. Permite filmar diretamente da *webcam*, importar, cortar, transmitir e exportar vídeos para vários formatos, além de aplicar filtros e efeitos especiais.

No openSUSE, o Shotcut pode ser obtido do repositório da distribuição. Para isso, execute:

```
# zypper in shotcut shotcut-lang
```

Para instalar o Shotcut no Windows, baixe o instalador do seu *site*:

- [https://shotcut.org/](https://shotcut.org/)

## 18) Navegador Tor

{% include image.html src="/files/2019/07/tor-browser-pt.jpg" %}

O [Projeto Tor][tor-project] (sigla de *The Onion Router*, "o roteador cebola", em uma tradução livre) mantém uma rede de túneis ao redor do mundo — a Rede Tor — pela qual trafegam dados de seus usuários de forma anônima, criptografada, privada, segura e livre de censura.

O [Navegador Tor][tor-browser] é uma versão do [Mozilla Firefox][firefox] modificada para trafegar dados somente dentro da Rede Tor. Ao usar o Navegador Tor, você navega sem ser identificado ou rastreado, para os *sites* seu endereço IP aparece diferente, como se estivesse em outro país. É a forma mais fácil de se conectar à rede Tor e burlar a censura de governos ditatoriais ou empresas.

No openSUSE, o Navegador Tor pode ser obtido do repositório da distribuição:

```
# zypper in torbrowser-launcher torbrowser-launcher-lang
```

Para instalar o Navegador Tor no Windows, baixe o instalador do seu *site*:

- [https://www.torproject.org/projects/torbrowser.html](https://www.torproject.org/projects/torbrowser.html)

## 19) Steam

{% include image.html src="/files/2019/07/steam-pt.jpg" %}

[Steam] é um serviço de distribuição de jogos criado pela empresa [Valve]. Atualmente oferece quase 30.000 jogos, gratuitos ou pagos, de grandes conhecidos a pequenos independentes, jogados por mais de 100 milhões de usuários que podem se comunicar pela rede e virar amigos (ou inimigos). Se você é desenvolvedor, também pode lançar seus próprios jogos.

Alguns jogos famosos que podem ser obtidos pelo Steam incluem: [Counter-Strike][cs], [Half-Life][hl], [Grand Theft Auto V][gta-v] e [Dota 2][dota-2]. Antes, esses jogos estavam disponíveis apenas para Windows. Agora, com o Steam, também podem ser jogados no Linux.

Embora seja gratuito, o Steam não é [livre][free-software]. Ele está está disponível no repositório oficial não-livre da distribuição openSUSE. Para adicionar esse repositório, caso não o tenha, execute:

```
# zypper addrepo -f -K -n "Non-OSS Repository" http://download.opensuse.org/distribution/leap/15.1/repo/non-oss/ repo-non-oss
```

Feito isso, para instalar o Steam:

```
# zypper in steam
```

Para instalar o Steam no Windows, baixe o instalador do seu *site*:

- [https://store.steampowered.com/about/](https://store.steampowered.com/about/)

## 20) FileZilla

{% include image.html src="/files/2019/07/filezilla-pt.jpg" %}

[FileZilla] é um cliente [FTP], [SFTP] e [FTPS] gratuito, livre e multi-plataforma. Usado principalmente por *webdesigners* e *webmasters* que precisam enviar arquivos para servidores *web* usando o protocolo FTP, possui interface amigável e é fácil de usar.

No openSUSE, o FileZilla pode ser obtido do repositório da distribuição:

```
# zypper in filezilla filezilla-lang
```

Para instalar o FileZilla no Windows, baixe o instalador do seu *site*:

- [https://filezilla-project.org/](https://filezilla-project.org/)

## Bônus: aplicativos ou serviços?

{% include image.html src="/files/2019/07/netflix-pt.jpg" %}

Embora estejam disponíveis na [Microsoft Store][microsoft-store], alguns aplicativos correspondem a serviços *online*, que podem ser usados diretamente pelo navegador:

- [Netflix](https://www.netflix.com/br/)
- [WhatsApp Web](https://web.whatsapp.com/)
- [Instagram](https://www.instagram.com/?hl=pt-br)
- [Facebook](https://pt-br.facebook.com/)
- [Messenger](https://www.messenger.com/)
- [Telegram Web](https://web.telegram.org/)
- [YouTube](https://br.youtube.com/)
- [Slack](https://slack.com/intl/pt-br/)
- [Microsoft Office Online](https://www.office.com/)
- [Pinterest](https://br.pinterest.com/)
- [Trello](https://trello.com/)
- [Twitter](https://twitter.com/)
- [Evernote](https://evernote.com/intl/pt-br/)

Esses serviços não disponibilizam aplicativos nativos para Linux, mas você pode abrir seu navegador, acessá-los e usá-los normalmente: um aplicativo não faz falta.

Um serviço que não está disponível como aplicativo nem para Windows, nem para Linux, mas que pode ser usado pelo navegador e merece menção é o [Google Docs](https://docs.google.com/).

**Dica:** favorite os serviços que você usa no navegador, para acessá-los mais rápido.

## Referências

Para escolher os aplicativos e serviços, consultei páginas que listam programas populares ou indicados para usuários de Windows:

- [Aplicativos mais populares - Microsoft Store][ms-store-most-popular]
- [Top Semanal de Downloads para Windows - Baixaki][baixaki]
- [New PC? 15 Must-Have Windows Applications You Should Install First][makeuseof]
- [20 of the best free Windows 7 apps 2019: bring your PC right up to date - TechRadar][techradar]
- [Best free software for Windows 10 in 2019][thewindowsclub]

Portanto, tentei escrever do ponto de vista de alguém que usa Windows e se pergunta se existem os mesmos aplicativos no Linux.

Espero que tenha ajudado. Ficou com alguma dúvida? Gostaria de saber mais sobre algum desses programas? Quer indicar algum programa? Escreva nos comentários!

[linux]:                    http://www.vivaolinux.com.br/linux/
[windows]:                  https://www.microsoft.com/pt-br/windows/
[apps-linux-windows]:       {%post_url pt/2019-07-05-18-aplicativos-que-voce-pode-usar-do-mesmo-jeito-no-linux-e-no-windows-parte-1 %}

[foxit-reader]:             https://www.foxitsoftware.com/pt-br/pdf-reader/
[pdf]:                      https://pt.wikipedia.org/wiki/Portable_Document_Format
[foxit-software]:           https://www.foxitsoftware.com/pt-br/
[proprietary-sw]:           https://pt.wikipedia.org/wiki/Software_propriet%C3%A1rio

[telegram]:                 https://telegram.org/
[whatsapp-justica]:         https://pt.wikipedia.org/wiki/Bloqueio_do_WhatsApp_no_Brasil
[whatsapp]:                 https://www.whatsapp.com/?lang=pt_br
[opensuse]:                 https://www.opensuse.org/
[telegram-ms-store]:        https://www.microsoft.com/pt-br/search?q=telegram

[virtualbox]:               https://www.virtualbox.org/
[oracle]:                   https://www.oracle.com/br/

[gimp]:                     https://www.gimp.org/
[imagens-matriciais]:       https://pt.wikipedia.org/wiki/Raster
[paint]:                    https://pt.wikipedia.org/wiki/Microsoft_Paint
[jpg]:                      https://pt.wikipedia.org/wiki/Joint_Photographic_Experts_Group
[photoshop]:                https://www.adobe.com/br/products/photoshop/

[inkscape]:                 https://inkscape.org/pt-br/
[imagens-vetoriais]:        https://pt.wikipedia.org/wiki/Desenho_vetorial
[svg]:                      https://pt.wikipedia.org/wiki/SVG
[png]:                      https://pt.wikipedia.org/wiki/PNG
[coreldraw]:                https://www.coreldraw.com/br/

[audacity]:                 https://www.audacityteam.org/

[shotcut]:                  https://shotcut.org/

[tor-project]:              https://www.torproject.org/
[tor-browser]:              https://www.torproject.org/projects/torbrowser.html
[firefox]:                  https://mozilla.org/firefox

[steam]:                    https://store.steampowered.com/
[valve]:                    https://www.valvesoftware.com/pt-br/
[cs]:                       https://store.steampowered.com/app/10/CounterStrike/
[hl]:                       https://store.steampowered.com/app/70/HalfLife/
[gta-v]:                    https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/
[dota-2]:                   https://store.steampowered.com/app/570/Dota_2/
[free-software]:            https://www.gnu.org/philosophy/free-sw.pt-br.html

[filezilla]:                https://filezilla-project.org/
[ftp]:                      https://pt.wikipedia.org/wiki/File_Transfer_Protocol
[sftp]:                     https://pt.wikipedia.org/wiki/SSH_File_Transfer_Protocol
[ftps]:                     https://pt.wikipedia.org/wiki/FTPS

[microsoft-store]:          https://www.microsoft.com/pt-br/store/

[ms-store-most-popular]:    https://www.microsoft.com/pt-br/store/most-popular/apps/pc
[baixaki]:                  https://www.baixaki.com.br/top-semanal.htm
[makeuseof]:                https://www.makeuseof.com/tag/getting-a-new-pc-12-must-have-applications-to-install-first/
[techradar]:                https://www.techradar.com/news/software/applications/20-windows-7-free-apps-to-download-today-648954
[thewindowsclub]:           https://www.thewindowsclub.com/best-free-software-for-windows-10
