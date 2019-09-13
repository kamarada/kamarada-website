---
date: 2019-09-13 11:45:00 GMT-3
image: '/files/2019/09/kamarada-15.1.jpg'
layout: post
published: true
nickname: 'kamarada-15.1-beta'
title: 'Primeira versão beta da distribuição Linux Kamarada'
---

{% include image.html src="/files/2019/09/kamarada-15.1.jpg" %}

O Projeto Linux Kamarada anuncia o lançamento da primeira versão [beta] da [distribuição Linux][linux] de mesmo nome. Ela já está disponível para [download].

O Linux Kamarada surgiu da vontade de mostrar para as pessoas o "[Linux] como eu vejo": um sistema viável de usar no dia-a-dia em casa e no trabalho. Dessa forma, comecei a escrever compartilhando minha experiência usando o Linux. Mas sempre tive vontade de criar uma distribuição, contendo os programas que uso, indico e acredito que são os melhores. Finalmente isso deixou de ser apenas uma vontade e virou algo concreto.

"Se um amigo me pedisse para formatar o computador dele e instalar o Linux, como eu faria?" Foi com esse pensamento que eu fiz a distribuição, incluindo os programas e personalizações que eu mesmo uso nos computadores de casa e do trabalho. Claro, não exatamente todos os programas que eu uso (eu não queria fazer uma distribuição voltada para programadores), mas os que eu uso e acredito que interessariam a muitas pessoas.

O Linux Kamarada não foi criado "do nada", mas baseado na distribuição [openSUSE], que eu uso há 7 anos. É uma das distribuições Linux mais usadas no mundo, desenvolvida pela comunidade do Projeto openSUSE, patrocinada pela [SUSE] e outras empresas. Seu foco é criar ferramentas de [_software_ livre][free-software] para desenvolvedores e administradores de sistemas, fornecer um sistema amigável para _desktops_ e rico em funcionalidades para servidores.

A distribuição Linux Kamarada é destinada ao uso em _desktops_ em casa e no trabalho, seja em empresas privadas ou em órgãos públicos. Contém os programas essenciais a qualquer instalação do Linux e uma área de trabalho com visual moderno e agradável.

Não é recomendado usar o Linux Kamarada em servidores, embora seja possível. Nesse caso, a distribuição openSUSE é mais adequada, por fornecer uma opção de instalação própria para servidores, sem interface gráfica.

## Por que se chama Kamarada?

O nome remete à palavra [camarada], que quer dizer: amigo, companheiro, simpático, gentil, solidário, algo nesse sentido.

O mascote do Linux é o pinguim [Tux]. O mascote do Kamarada é o Tux piscando o olho:

{% include image.html src="/files/2019/09/tux-evolution.png" caption='A "evolução" do Tux: primeira versão do mascote por [Larry Ewing](https://isc.tamu.edu/~lewing/linux/) em 1996, uma imagem bitmap GIF feita no [GIMP](https://www.gimp.org/); depois uma versão estilizada, agora já uma imagem vetorial [SVG](https://pt.wikipedia.org/wiki/SVG); e, por fim, o Tux Kamarada.' %}

A troca da letra C pela letra K, embora não mude a pronúncia, foi feita com intenção de remeter à área de trabalho [KDE], assim como muitos aplicativos para KDE têm seus nomes começando com a letra K, como [Konsole] ou [Kleopatra]. Quando comecei a usar o openSUSE, eu usava essa área de trabalho. Depois de muito me aborrecer com _bugs_ e mudanças constantes, mudei para a área de trabalho [GNOME], que considero mais estável e uso desde então. O projeto Linux Kamarada já existia e continuou com o mesmo nome.

## O que traz o Linux Kamarada?

{% include image.html src="/files/2019/09/kamarada-15.1-desktop-pt.jpg" caption="Área de trabalho do Linux Kamarada. O plano de fundo é uma foto da belíssima praia da [Barra da Lagoa](https://goo.gl/maps/CLygYshBfm12i3TY8), em [Florianópolis (SC)](https://pt.wikipedia.org/wiki/Florianópolis)." %}

A versão 15.1 Beta do Linux Kamarada — embora seja a primeira versão, o número é grande para haver um alinhamento com a base, que é o [openSUSE Leap versão 15.1][leap-15.1] — traz:

- [_kernel_ Linux][kernel] 4.12.14
- área de trabalho [GNOME] 3.26 acompanhada de seus principais aplicativos ([_core apps_][gnome-core-apps]), como [Arquivos][files] (antigo Nautilus), [Calculadora][calculator], [Terminal], Editor de texto ([gedit]), Captura de tela e outros
- navegador [Chromium] 74
- cliente de _e-mail_ [Evolution]
- mensageiro instantâneo [Pidgin] 2.13.0
- suíte de aplicativos de escritório [LibreOffice] 6.1.3
- reprodutor multimídia [VLC] 3.0.6
- jogos: [Aisleriot] (Paciência), [Mahjongg], [Minas][mines] (Campo minado), [Quadrapassel] (Tetris), [Sudoku] e [Xadrez][chess]
- centro de controle do [YaST]
- cliente de _torrent_ [Transmission] 2.94
- _softphone_ VoIP [Linphone] 4.1
- gravador de CD/DVD [Brasero]
- editor de partições [GParted] 0.31.0
- Java ([OpenJDK]) 11.0.3
- [PDFsam] 4.0.4
- [Wine] 3.7
- [Firewalld] 0.5.5

{% include image.html src="/files/2019/09/yast-pt.jpg" caption="O Centro de controle do YaST: uma mão na roda para iniciantes, é uma das coisas que mais gosto no openSUSE." %}

Essa lista não é exaustiva, mas já dá uma noção do que você vai encontrar na distribuição.

Note que a distribuição ainda está em fase [beta]. Portanto, _bugs_ são esperados. Se você encontrar um _bug_, por favor, reporte. Leia sobre ajuda mais adiante.

## Constante aprendizado e aperfeiçoamento

Não é objetivo do Linux Kamarada — ao menos não nesse primeiro momento — entregar uma distribuição inovadora, cheia de diferenciais em meio a (tantas) outras que já existem ou otimizada para um público específico, como _gamers_ ou programadores.

Antes, a distribuição aqui apresentada é fruto de um **estudo** para trazer a potenciais novos usuários de Linux o que esse sistema tem de mais útil a oferecer. Só incluí na distribuição programas que conheço e uso. Inclusive já escrevi sobre alguns deles aqui no _blog_. Com o tempo, conforme descubra coisas novas, posso adicionar novas funcionalidades ou substituir ou remover programas conforme se tornem obsoletos.

O Linux Kamarada pode ser visto como uma **prova de conceito**: uma prova de que o Linux é um sistema simples e fácil de usar como qualquer outro — como o [Windows], o [macOS], o [Android] ou o [iOS]. Muitas pessoas acham difícil usar o Linux, talvez por desconhecimento. Mas é perfeitamente possível usá-lo no dia-a-dia em casa e no trabalho.

Além disso, o Linux Kamarada também é um exemplo de como a **identidade visual** do Linux pode ser personalizada. Muitos elementos visuais do openSUSE foram substituídos pelos do Linux Kamarada. Uma empresa que deseje implantar o Linux em seus computadores pode se utilizar da mesma "receita" do Linux Kamarada para criar uma distribuição baseada no openSUSE e personalizada com sua marca. Ou usar o próprio Linux Kamarada como ponto de partida, atalhando o caminho e economizando tempo. Os códigos-fonte da distribuição estão disponíveis (mais sobre isso adiante). Pretendo em breve escrever uma série de _posts_ sobre o processo de personalização (_branding_).

{% include image.html src="/files/2019/09/kamarada-15.1-branding-pt.jpg" %}

## Projetos futuros

Lançada a distribuição para _desktops_, pretendo estudar como instalar o Linux em _smartphones_ e _tablets_ e lançar edições do Linux Kamarada para esses dispositivos. Alguns aplicativos já foram incluídos pensando nisso, como [Agenda][calendar], [Contatos][contacts], [Fotos][photos], [Meteorologia][weather] e [Relógios][clocks]. Confesso que não uso esses aplicativos no computador, mas sim no celular.

Outro dispositivo que pretendo estudar é o [Raspberry Pi][raspberry-pi], o computador de baixo custo e alta performance do tamanho de um cartão de crédito. Ele é usado em escolas para ensinar informática básica e pode ser integrado a diversos componentes para fazer experiências com Internet das Coisas. Seu baixo custo visa promover a inclusão digital: há [diversos modelos][raspberry-pi-products] disponíveis, com preços variando de R$ 100,00 a R$ 400,00.

{% include image.html src="/files/2019/09/raspberry-pi-4.jpg" caption="Raspberry Pi: o computador do tamanho de um cartão de crédito" style="max-width: 370px" %}

No momento, a distribuição openSUSE suporta a família Raspberry Pi até o modelo [Raspberry Pi 3][raspberry-pi-3]. O modelo mais novo, o [Raspberry Pi 4][raspberry-pi-4], lançado em julho desse ano, ainda não é suportado pelo openSUSE. Eu [já comprei o meu][aliexpress] e desejo ajudar o Projeto openSUSE a portar a distribuição para ele. Estou aguardando ele chegar para iniciar os trabalhos.

## Em que o Linux Kamarada difere do openSUSE?

<div class='media mb-3' style='display: table'>
    <img class='mr-3' src='/assets/img/powered-by-opensuse.png' alt='Baseada no openSUSE' style='display: table-cell; max-width: 64px; vertical-align: middle;'>
    <div class='media-body' style='display: table-cell; vertical-align: middle;'>
       Uma vez que o Linux Kamarada é baseado no openSUSE, há muitas semelhanças, mas também há algumas diferenças. Confira:
    </div>
</div>

- o Linux Kamarada traz como navegador padrão o Chromium (semelhante ao [Google Chrome][chrome], porém _software_ livre), enquanto o openSUSE traz como padrão o [Mozilla Firefox][firefox]. Atualmente, o Chrome é o navegador mais usado no mundo e também no Brasil. Por isso fiz essa escolha. Eu particularmente uso ambos os navegadores, mas uso o Chrome com mais frequência.

- o Linux Kamarada traz como reprodutor multimídia o VLC, enquanto a edição com área de trabalho GNOME do openSUSE traz os aplicativos [Música][music] e [Vídeos][videos] (Totem).

- o Linux Kamarada traz o Wine instalado por padrão, facilitando o uso no Linux de aplicativos desenvolvidos para Windows (note que nem todos os aplicativos para Windows são compatíveis ou funcionam perfeitamente no Linux).

- a [imagem ISO][iso] do Linux Kamarada (ou o [LiveDVD/USB][live] gerados a partir dela) inclui um instalador que instala o conteúdo da própria mídia para o computador, enquanto o instalador do openSUSE sempre baixa todos os pacotes da Internet, ainda que esteja sendo usada a mídia _Live_.

- para os usuários brasileiros, o Linux Kamarada tem ainda mais uma diferença: a edição brasileira da imagem ISO já vem com todas as traduções instaladas, idioma, leiaute de teclado e fuso horário configurados.

## Onde baixo o Linux Kamarada?

A página [Download] foi atualizada com o _link_ para _download_ da versão 15.1 Beta.

A título de curiosidade, existiram versões do Linux Kamarada baseadas no openSUSE Leap 42.2 e 42.3 que nunca foram lançadas oficialmente como essa baseada no 15.1 está sendo. Para minha surpresa, elas tiveram 550 _downloads_ desde 2016. Esses arquivos antigos podem ser encontrados no [SourceForge.net][sf.net].

## Já uso o Linux openSUSE

Você já usa o Linux openSUSE e quer transformá-lo no Linux Kamarada? Simples!

Basta adicionar o repositório do Linux Kamarada e instalar o pacote **[patterns-kamarada-gnome]**. Você pode fazer isso de duas formas: pela interface gráfica, usando a instalação com 1 clique (*1-Click Install*), ou pelo terminal, usando o gerenciador de pacotes **zypper**. Escolha a que prefere.

Para instalar usando a instalação com 1 clique, clique no botão abaixo:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/patterns-kamarada-gnome.ymp'><i class='fas fa-bolt'></i> Instalação com 1 clique</a></p>

Para instalar usando o terminal, primeiro adicione o repositório do Linux Kamarada:

```
# zypper addrepo -f -K -n "Linux Kamarada" http://download.opensuse.org/repositories/home:/kamarada:/15.1/openSUSE_Leap_15.1/ kamarada
```

Depois, instale o pacote **patterns-kamarada-gnome**:

```
# zypper in patterns-kamarada-gnome
```

Se você já usa a área de trabalho GNOME, a mesma usada por padrão pelo Linux Kamarada, provavelmente será necessário baixar poucos pacotes. Se você usa outra área de trabalho, o tamanho do _download_ será maior.

Quando a instalação terminar, se você criar um novo usuário, perceberá que ele receberá as configurações padrão do Linux Kamarada (como tema, papel de parede, etc.) Usuários já existentes podem seguir usando suas personalizações ou ajustar a aparência do sistema (por exemplo, usando os aplicativos **Ajustes** e **Configurações**).

## Onde obtenho ajuda?

Outra novidade no _site_ é a página [Ajuda][help], que pode ser acessada pela barra de navegação no topo. Ela indica alguns lugares onde é possível obter auxílio com o Linux Kamarada, o openSUSE ou distribuições Linux em geral (incluindo essas duas).

Foi criado um [grupo do Google][google-group] para o Linux Kamarada, que pode ser usado semelhante a uma lista de discussão por _e-mail_ ou diretamente a partir do navegador. Esse será o principal canal de suporte para os usuários.

## Onde obtenho os códigos-fonte?

Como todo projeto de _software_ livre, o Linux Kamarada disponibiliza seus códigos-fonte para quem quiser estudá-los, adaptá-los ou contribuir com o projeto.

O desenvolvimento do Linux Kamarada ocorre no [GitHub] e no [Open Build Service][obs]. Lá podem ser obtidos os códigos-fonte dos pacotes desenvolvidos especificamente para esse projeto (até mesmo [o código-fonte deste _site_][kamarada-website] que você lê está disponível).

Os códigos-fonte de pacotes herdados do openSUSE podem ser obtidos diretamente dessa distribuição. Se precisar de ajuda para fazer isso, entre em contato, posso ajudar.

## Quem eu sou

O Projeto Linux Kamarada é formado por uma equipe de uma pessoa só — em outras palavras, uma "euquipe". Na verdade, eu sou o único responsável por manter esse projeto enquanto _site_ e distribuição, mas em ambos eu uso e herdo muito _software_ livre feito pela distribuição maior openSUSE e por diversas pessoas ao redor do mundo. Como diz o ditado, "nenhum ser humano é uma ilha".

<p class='text-center'>
    <img src='/files/2019/09/vinyanalista.jpg' alt='Antônio Vinícius' class='img-fluid img-thumbnail rounded-circle'>
</p>

Meu nome é Antônio Vinícius (me chamam por um nome ou outro). Nasci em 1992, no dia do [santo][santo-antonio]. Sou brasileiro de [Aracaju (SE)][aracaju], mas atualmente moro em Florianópolis (SC) e trabalho como analista de sistemas no [TJSC]. Sou formado como técnico em Informática e cientista da Computação. Uso Linux há 12 anos (desde 2007). Sou usuário entusiasta de Linux e _softwares_ livres em geral. Curioso, estou sempre em busca de conhecer novas tecnologias e adquirir conhecimentos, que compartilho neste _blog_ do Linux Kamarada e no meu outro [_blog_ pessoal][vinyanalista].

[beta]:                     https://pt.wikipedia.org/wiki/Ciclo_de_vida_de_libera%C3%A7%C3%A3o_de_software#Beta
[linux]:                    https://www.vivaolinux.com.br/linux/
[download]:                 /pt/download
[opensuse]:                 https://www.opensuse.org/
[suse]:                     https://www.suse.com/pt-br/
[free-software]:            https://www.gnu.org/philosophy/free-sw.pt-br.html
[camarada]:                 https://michaelis.uol.com.br/moderno-portugues/busca/portugues-brasileiro/camarada/
[tux]:                      https://pt.wikipedia.org/wiki/Tux
[kde]:                      https://kde.org/
[konsole]:                  https://konsole.kde.org/
[kleopatra]:                https://kde.org/applications/utilities/org.kde.kleopatra
[gnome]:                    https://br.gnome.org/
[leap-15.1]:                {% post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[kernel]:                   https://kernel.org/
[gnome-core-apps]:          https://blogs.gnome.org/mcatanzaro/2017/08/13/gnome-3-26-core-applications/
[files]:                    https://wiki.gnome.org/Apps/Files
[calculator]:               https://wiki.gnome.org/Apps/Calculator
[terminal]:                 https://wiki.gnome.org/Apps/Terminal
[gedit]:                    https://wiki.gnome.org/Apps/Gedit
[chromium]:                 https://www.chromium.org/
[evolution]:                https://wiki.gnome.org/Apps/Evolution
[pidgin]:                   https://pidgin.im/
[libreoffice]:              https://pt-br.libreoffice.org
[vlc]:                      https://www.videolan.org/vlc/
[aisleriot]:                https://wiki.gnome.org/Apps/Aisleriot
[mahjongg]:                 https://wiki.gnome.org/Apps/Mahjongg
[mines]:                    https://wiki.gnome.org/Apps/Mines
[quadrapassel]:             https://wiki.gnome.org/Apps/Quadrapassel
[sudoku]:                   https://wiki.gnome.org/Apps/Sudoku
[chess]:                    https://wiki.gnome.org/Apps/Chess
[yast]:                     http://yast.opensuse.org/
[transmission]:             http://www.transmissionbt.com/
[linphone]:                 https://www.linphone.org/
[brasero]:                  https://wiki.gnome.org/Apps/Brasero
[gparted]:                  https://gparted.sourceforge.io/
[openjdk]:                  https://openjdk.java.net/
[pdfsam]:                   https://pdfsam.org/pt/
[wine]:                     https://www.winehq.org/
[firewalld]:                https://firewalld.org/
[windows]:                  https://www.microsoft.com/pt-br/windows/
[macos]:                    https://www.apple.com/br/macos/
[android]:                  https://www.android.com/intl/pt-BR_br/
[ios]:                      https://www.apple.com/br/ios/
[calendar]:                 https://wiki.gnome.org/Apps/Calendar
[contacts]:                 https://wiki.gnome.org/Apps/Contacts
[photos]:                   https://wiki.gnome.org/Apps/Photos
[weather]:                  https://wiki.gnome.org/Apps/Weather
[clocks]:                   https://wiki.gnome.org/Apps/Clocks
[raspberry-pi]:             https://www.raspberrypi.org/
[raspberry-pi-products]:    https://www.raspberrypi.org/products/
[raspberry-pi-3]:           https://en.opensuse.org/HCL:Raspberry_Pi3
[raspberry-pi-4]:           https://www.raspberrypi.org/products/raspberry-pi-4-model-b/
[aliexpress]:               http://s.click.aliexpress.com/e/KkS77oEk
[chrome]:                   https://www.google.com/chrome/
[firefox]:                  https://mozilla.org/firefox
[music]:                    https://wiki.gnome.org/Apps/Music
[videos]:                   https://wiki.gnome.org/Apps/Videos
[iso]:                      https://pt.wikipedia.org/wiki/Imagem_ISO
[live]:                     {% post_url pt/2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}
[sf.net]:                   https://sourceforge.net/projects/kamarada/
[patterns-kamarada-gnome]:  https://software.opensuse.org/package/patterns-kamarada-gnome
[help]:                     /pt/ajuda
[google-group]:             https://groups.google.com/forum/#!forum/linuxkamarada
[github]:                   https://github.com/kamarada
[obs]:                      https://build.opensuse.org/project/subprojects/home:kamarada
[kamarada-website]:         https://github.com/kamarada/kamarada-website
[santo-antonio]:            https://pt.wikipedia.org/wiki/Santo_Ant%C3%B3nio_de_Lisboa
[aracaju]:                  https://pt.wikipedia.org/wiki/Aracaju
[tjsc]:                     https://www.tjsc.jus.br/
[vinyanalista]:             https://vinyanalista.github.io/
