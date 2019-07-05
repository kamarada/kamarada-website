---
date: '2019-07-05 01:40:00 GMT-3'
layout: post
published: true
title: '18 aplicativos que você pode usar do mesmo jeito no Linux e no Windows — parte 1'
image: /files/2019/07/apps-linux-windows.jpg
nickname: 'apps-linux-windows'
excerpt: 'Talvez você não dê uma chance ao Linux por medo de não saber usar o sistema ou receio de que não encontre os programas que utiliza no dia-a-dia. Se eu te disser que existem pelo menos 18 aplicativos populares no Windows que também podem ser usados do mesmo jeito no Linux, um sistema livre e gratuito, se anima de experimentar?'
---

{% include image.html src="/files/2019/07/apps-linux-windows.jpg" %}

Talvez você não dê uma chance ao [Linux] por medo de não saber usar o sistema ou receio de que não encontre os programas que utiliza no dia-a-dia. Se eu te disser que existem pelo menos 18 aplicativos populares no [Windows] que também podem ser usados do mesmo jeito no Linux, um sistema [livre][free-software] e gratuito, se anima de experimentar?

Perceba que não estou falando de **alternativas** do Linux para aplicativos do Windows: falo dos **mesmos aplicativos** sendo usados **da mesma forma** nos dois sistemas!

Caso deseje migrar para o Linux, você pode inclusive começar a usar esses aplicativos no sistema operacional que já lhe é familiar, facilitando a mudança.

Os aplicativos que vou mostrar aqui são:

- **multi-plataforma:** são feitos para vários sistemas, a exemplo de Linux e Windows, mas alguns também estão disponíveis para outros sistemas, como [Android] e [iOS];
- **conhecidos:** populares, há muita informação sobre eles na Internet;
- **gratuitos:** podem ser usados sem custo, alguns possuem funcionalidades adicionais que podem ser compradas;
- em sua maioria, **livres**: oferecem as quatro liberdades essenciais dos [*softwares* livres][free-software] — seja livre para usar, estudar o [código-fonte][source-code], modificar e distribuir como quiser; e
- em sua maioria, podem ser obtidos facilmente do **repositório** da própria distribuição.

Aqui vou focar na distribuição Linux [openSUSE], que é a que eu uso e recomendo, mas esses programas podem ser facilmente instalados em outras distribuições.

Para o *post* não ficar muito grande, decidi dividi-lo em duas partes.

Sem mais delongas, vejamos os programas selecionados!

## 1) Mozilla Firefox

{% include image.html src="/files/2019/07/mozilla-firefox-pt.jpg" %}

O [Mozilla Firefox][firefox] é um navegador gratuito, livre e multi-plataforma desenvolvido pela [Fundação Mozilla][mozilla] com ajuda de centenas de colaboradores. A intenção da fundação é desenvolver um navegador leve, seguro, intuitivo e altamente extensível.

Segundo o [StatCounter], serviço que analisa o tráfego da *web* desde 1999, atualmente o Firefox é usado por cerca de 9,78% dos usuários de *desktop* do mundo e 6,14% dos usuários de *desktop* brasileiros. É o navegador padrão das distribuições Linux mais populares.

A distribuição [openSUSE Leap][leap] utiliza uma versão do Firefox desenvolvida especialmente para grandes organizações (como empresas, universidades e órgãos públicos) chamada [ESR][firefox-esr] (*Extended Support Release*, versão com suporte estendido). Essa versão recebe atualizações de segurança e estabilidade sempre, mas novas funcionalidades apenas de tempos em tempos. Portanto, é atualizada com menor frequência.

Você já deve ter o Firefox instalado no openSUSE, mas caso precise instalá-lo manualmente:

```
# zypper in MozillaFirefox MozillaFirefox-translations-common MozillaFirefox-branding-openSUSE
```

Para instalar o Firefox no Windows, baixe o instalador de um dos seguintes *links*:

- Versão padrão (no momento da escrita, a 67.0.4):
    - [https://www.mozilla.org/pt-BR/firefox/new/](https://www.mozilla.org/pt-BR/firefox/new/)
- Versão ESR (60.7.2):
    - [https://www.mozilla.org/pt-BR/firefox/organizations/all/](https://www.mozilla.org/pt-BR/firefox/organizations/all/)

## 2) Google Chrome

{% include image.html src="/files/2019/07/google-chrome-pt.jpg" %}

O [Google Chrome][chrome] é um navegador [proprietário][proprietary-sw] desenvolvido pela companhia [Google]. É gratuito, multi-plataforma e apresenta uma interface minimalista.

Segundo o StatCounter, atualmente o Chrome é o navegador mais usado no mundo (70% dos usuários de *desktop*) e também no Brasil (85% dos usuários de *desktop*).

Para instalá-lo, tanto no Linux quanto no Windows, você deve baixá-lo do seu *site*:

- [https://www.google.com/chrome/](https://www.google.com/chrome/)

Por ser um *software* proprietário, o Chrome não é disponibilizado nos repositórios oficiais das distribuições Linux. O que talvez muitas pessoas não saibam é que a base do Chrome é um navegador livre chamado [Chromium]. O Chrome nada mais é que a base do Chromium acrescida de componentes proprietários inseridos pelo Google.

Se você quiser instalar o Chromium no openSUSE, execute:

```
# zypper in chromium
```

O Chrome é mais comum que o Chromium no Windows, mas caso você queira usar o Chromium no Windows, este *site* disponibiliza instaladores:

- [https://chromium.woolyss.com/](https://chromium.woolyss.com/)

## 3) LibreOffice

{% include image.html src="/files/2019/07/libreoffice-pt.jpg" %}

O [LibreOffice] é uma suíte de aplicativos de escritório livre e gratuita. Vem instalada por padrão nas distribuições Linux mais populares. Utiliza o formato padronizado [OpenDocument] e também é compatível com os formatos do [Microsoft Office][ms-office], além de outros formatos mais antigos. O LibreOffice surgiu como uma ramificação do projeto original [OpenOffice], que aqui no Brasil era chamado de [BrOffice].

Você já deve ter o LibreOffice instalado no openSUSE, mas caso precise instalá-lo manualmente, execute:

```
# zypper in libreoffice-{writer,calc,impress,draw,base,math,l10n-pt_BR}
```

Para instalar o LibreOffice no Windows, baixe o instalador do *site* do LibreOffice:

- [https://pt-br.libreoffice.org/baixe-ja/libreoffice-novo/](https://pt-br.libreoffice.org/baixe-ja/libreoffice-novo/)

## 4) Dropbox

{% include image.html src="/files/2019/07/dropbox-pt.jpg" %}

O [Dropbox] é um serviço de armazenamento de arquivos na nuvem. Ele disponibiliza um programa cliente que cria uma pasta chamada Dropbox no computador e sincroniza os arquivos dessa pasta com os arquivos que estão na nuvem. O plano gratuito oferece 2GB de espaço. Há planos individuais e para empresas que oferecem mais espaço e recursos.

**Dica:** inscreva-se no Dropbox por [este *link*][dropbox-referral] de indicação e ganhe 250MB de espaço extra!

Para instalar o cliente do Dropbox no Windows, baixe o instalador do *site*:

- [https://www.dropbox.com/pt_BR/](https://www.dropbox.com/pt_BR/)

Para instalar o cliente do Dropbox no openSUSE, execute:

```
# zypper in dropbox
```

Ao abrir o Dropbox pela primeira vez, ele baixará parte do cliente que é proprietária.

Se você usa o ambiente de trabalho [GNOME], instale também a integração com o gerenciador de arquivos, para que o estado da sincronização de pastas e arquivos seja exibido em seus ícones:

```
# zypper in nautilus-extension-dropbox
```

Também observe que [o GNOME não exibe ícones da área de notificação][gnome-systray] por padrão. Você pode instalar a extensão [TopIcons Plus][topicons-plus] para que o ícone do Dropbox seja exibido na barra do topo, próximo ao relógio.

Se você não sabe instalar extensões do GNOME, veja como fazer isso no *post*:

- [Monitorando recursos do sistema com a extensão do GNOME System Monitor][gnome-extensions]

## 5) Skype

{% include image.html src="/files/2019/07/skype-pt.jpg" %}

O [Skype] é um programa que permite enviar mensagens e fazer ligações de voz e vídeo pela Internet, tanto gratuitamente, entre usuários do Skype, quanto a preços acessíveis, do Skype para telefones fixos ou celulares em qualquer lugar do mundo.

Para instalá-lo, tanto no Linux quanto no Windows, você deve baixá-lo do seu *site*:

- [https://www.skype.com/pt-br/](https://www.skype.com/pt-br/)

No Windows, também é possível [baixar o Skype pela Microsoft Store][skype-ms-store].

## 6) TeamViewer

{% include image.html src="/files/2019/07/teamviewer-pt.jpg" %}

O [TeamViewer] é um serviço de acesso remoto, compartilhamento de área de trabalho, conferência online e transferência de arquivos entre computadores. É possível, a partir de um computador ou dispositivo móvel, visualizar a tela de outro computador ou dispositivo móvel e também controlá-lo. O uso pessoal é gratuito, há planos para empresas.

Para instalá-lo, tanto no Linux quanto no Windows, você deve baixá-lo do seu *site*:

- [https://www.teamviewer.com/pt-br/](https://www.teamviewer.com/pt-br/)

## 7) VLC

{% include image.html src="/files/2019/07/vlc-pt.jpg" %}

O [VLC] é um reprodutor multimídia livre e gratuito que reproduz a maioria dos arquivos de mídia (por exemplo, [MP3] e [DivX]), mídias (CD, DVD, Blu-ray) e transmissões pela rede (*streamings*). Eu considero o VLC o "canivete suíço" multimídia: se há algum arquivo de mídia que o VLC não consegue abrir, provavelmente nenhum outro programa consegue!

Para instalar o VLC no Windows, baixe o instalador do seu *site*:

- [https://www.videolan.org/vlc/](https://www.videolan.org/vlc/)

No openSUSE, como o VLC é um *software* livre, pode ser obtido dos repositórios oficiais:

```
# zypper in vlc vlc-lang
```

No entanto, o pacote disponibilizado pelo openSUSE suporta apenas formatos multimídia livres (por exemplo, [Xvid]). Portanto, não consegue reproduzir muitos arquivos.

A dica é baixar o VLC do repositório do projeto [Packman], que disponibiliza o pacote [vlc-codecs], que contém os [*codecs*][codecs] que não são empacotados pelo openSUSE:

```
# zypper ar -cfK -p 90 -n "Packman Repository" http://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_15.1/ packman
# zypper in vlc vlc-lang vlc-codecs
```

## 8) Spotify

{% include image.html src="/files/2019/07/spotify-pt.jpg" %}

O [Spotify] é o serviço de *streaming* de música e *podcasts* mais popular do mundo. É um serviço *freemium* (mistura de *free* — gratuito — com *premium*): todos os recursos básicos podem ser usados de graça, com propagandas, ou é possível pagar uma assinatura para ter acesso a recursos adicionais, como maior qualidade e possibilidade de baixar as músicas.

Para instalar o cliente do Spotify no Windows, baixe o instalador do seu *site*:

- [https://www.spotify.com/br/](https://www.spotify.com/br/)

No Windows, também é possível [baixar o Spotify pela Microsoft Store][spotify-ms-store].

Há um [cliente do Spotify para Linux][spotify-linux] que pode ser instalado pelo [Snap], um gerenciador de pacotes independente de distribuição.

Para instalar o Snap:

```
# zypper ar --refresh https://download.opensuse.org/repositories/system:/snappy/openSUSE_Leap_15.1 snap
# zypper in snapd
# systemctl enable snapd
# systemctl start snapd
```

Depois, para instalar o cliente do Spotify para Linux:

```
$ snap install spotify
```

## 9) Java

{% include image.html src="/files/2019/07/java-pt.jpg" %}

[Java] não é propriamente um programa, mas uma linguagem de programação, na qual vários programas são desenvolvidos. Para usar programas feitos em Java, é necessário instalar o ambiente de execução do Java (do inglês *Java Runtime Environment*, JRE), também conhecido como máquina virtual Java (*Java Virtual Machine*, JVM). Normalmente quando as pessoas falam em "instalar o Java", elas querem dizer "instalar o JRE".

Há duas versões do JRE, ambas gratuitas e multi-plataforma: uma livre, fornecida pelo projeto [OpenJDK], e outra proprietária, fornecida pela empresa [Oracle].

No Windows, normalmente é instalado o JRE da Oracle, que pode ser baixado do *site*:

- [https://www.java.com/pt_BR/](https://www.java.com/pt_BR/)

No Linux, é mais fácil instalar o JRE do OpenJDK, que pode ser obtido dos repositórios oficiais das distribuições. Para instalá-lo no openSUSE, execute:

```
# zypper in java-openjdk
```

Alguns programas, como o Imposto de Renda e os módulos de segurança de alguns bancos, como Banco do Brasil e Caixa, exigem que o JRE da Oracle esteja instalado no computador.

Para mais informações sobre o JRE da Oracle e os programas citados no Linux, leia:

- [Como instalar o Java da Oracle no Linux openSUSE][how-to-oracle-jre]
- [Como instalar o programa do Imposto de Renda 2017 no Linux openSUSE][irpf]
- [Como acessar o netbanking do Banco do Brasil no openSUSE][bb]
- [Como acessar o netbanking da Caixa no openSUSE][caixa]

## 10) PDF Split and Merge (PDFsam)

{% include image.html src="/files/2019/07/pdfsam-pt.jpg" %}

O [PDF Split and Merge][pdfsam], também conhecido como PDFsam, é um programa que permite manipular documentos em [PDF]. A edição Basic é livre e gratuita e contempla todas as funcionalidades mais básicas, como dividir um documento em partes (seja pela quantidade de páginas, seja pelo tamanho do arquivo em *bytes*), unir documentos, girar ou extrair páginas. Há edições comerciais com funcionalidades adicionais.

Para instalá-lo, tanto no Linux quanto no Windows, você deve baixá-lo do seu *site*:

- [https://pdfsam.org/pt/](https://pdfsam.org/pt/)

## Continua...

Na parte 2, veremos mais programas feitos tanto para Linux quanto para Windows.

## Referências

Para escolher os aplicativos, consultei páginas que listam programas populares ou indicados para usuários de Windows:

- [Aplicativos mais populares - Microsoft Store][microsoft-store]
- [New PC? 15 Must-Have Windows Applications You Should Install First][makeuseof]
- [20 of the best free Windows 7 apps 2019: bring your PC right up to date - TechRadar][techradar]
- [Best free software for Windows 10 in 2019][thewindowsclub]

Portanto, tentei escrever do ponto de vista de alguém que usa Windows e se pergunta se existem os mesmos aplicativos no Linux.

Espero que tenha ajudado. Ficou com alguma dúvida? Gostaria de sugerir algum programa para a próxima parte ou futuros textos? Escreva nos comentários!

[linux]:                http://www.vivaolinux.com.br/linux/
[windows]:              https://www.microsoft.com/pt-br/windows/
[free-software]:        https://www.gnu.org/philosophy/free-sw.pt-br.html
[android]:              https://www.android.com/
[ios]:                  https://www.apple.com/br/ios/
[source-code]:          https://www.codigofonte.com.br/artigos/o-que-e-codigo-fonte
[opensuse]:             https://www.opensuse.org/

[firefox]:              https://mozilla.org/firefox
[mozilla]:              https://foundation.mozilla.org/
[statcounter]:          http://gs.statcounter.com/
[leap]:                 https://en.opensuse.org/Portal:Leap
[firefox-esr]:          https://www.mozilla.org/en-US/firefox/organizations/

[chrome]:               https://www.google.com/chrome/
[proprietary-sw]:       https://pt.wikipedia.org/wiki/Software_propriet%C3%A1rio
[google]:               https://www.google.com/
[chromium]:             https://www.chromium.org/

[libreoffice]:          https://pt-br.libreoffice.org/
[opendocument]:         http://www.opendocument.com.br/project-definition
[ms-office]:            https://www.office.com/
[openoffice]:           https://www.openoffice.org/pt-br/
[broffice]:             https://www.vivaolinux.com.br/artigo/Conheca-o-OpenOffice.org-e-o-BrOffice.org?pagina=3

[dropbox]:              https://www.dropbox.com/pt_BR/
[dropbox-referral]:     https://db.tt/4VzN0K26
[gnome]:                https://www.gnome.org/
[gnome-systray]:        https://www.omgubuntu.co.uk/2017/09/will-you-miss-gnome-legacy-tray
[topicons-plus]:        https://extensions.gnome.org/extension/1031/topicons/
[gnome-extensions]:     {%post_url pt/2019-04-04-monitorando-recursos-do-sistema-com-a-extensao-do-gnome-system-monitor %}

[skype]:                https://www.skype.com/pt-br/
[skype-ms-store]:       https://www.microsoft.com/pt-br/search?q=skype

[teamviewer]:           https://www.teamviewer.com/pt-br/

[vlc]:                  https://www.videolan.org/vlc/
[mp3]:                  https://pt.wikipedia.org/wiki/MP3
[divx]:                 https://en.wikipedia.org/wiki/DivX
[xvid]:                 https://en.wikipedia.org/wiki/Xvid
[packman]:              http://packman.links2linux.com/
[vlc-codecs]:           http://packman.links2linux.com/package/vlc
[codecs]:               https://pt.wikipedia.org/wiki/Codec

[spotify]:              https://www.spotify.com/br/
[spotify-ms-store]:     https://www.microsoft.com/pt-br/search?q=spotify
[spotify-linux]:        https://www.spotify.com/br/download/linux/
[snap]:                 https://snapcraft.io/

[java]:                 https://www.java.com/pt_BR/
[openjdk]:              https://openjdk.java.net/
[oracle]:               https://www.oracle.com/br/
[how-to-oracle-jre]:    {%post_url pt/2017-02-28-como-instalar-o-programa-do-imposto-de-renda-2017-no-linux-opensuse %}
[irpf]:                 {%post_url pt/2017-02-28-como-instalar-o-programa-do-imposto-de-renda-2017-no-linux-opensuse %}
[bb]:                   {%post_url pt/2017-06-03-como-acessar-o-netbanking-do-banco-do-brasil-no-opensuse %}
[caixa]:                {%post_url pt/2017-06-04-como-acessar-o-netbanking-da-caixa-no-opensuse %}

[pdfsam]:               https://pdfsam.org/pt/
[pdf]:                  https://pt.wikipedia.org/wiki/Portable_Document_Format
[makeuseof]:            https://www.makeuseof.com/tag/getting-a-new-pc-12-must-have-applications-to-install-first/
[techradar]:            https://www.techradar.com/news/software/applications/20-windows-7-free-apps-to-download-today-648954
[thewindowsclub]:       https://www.thewindowsclub.com/best-free-software-for-windows-10
[microsoft-store]:      https://www.microsoft.com/pt-br/store/most-popular/apps/pc
