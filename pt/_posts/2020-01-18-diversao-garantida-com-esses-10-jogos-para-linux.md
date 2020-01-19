---
date: '2020-01-18 22:10:00 GMT-3'
layout: post
published: true
title: 'Diversão garantida com esses 10 jogos para Linux!'
image: '/files/2020/01/have-a-lot-of-fun-10-games.jpg'
nickname: 'have-a-lot-of-fun-10-games'
---

{% include image.html src="/files/2020/01/have-a-lot-of-fun-10-games.jpg" %}

Antes de entrar em recesso, prometi que mostraria 20 jogos para [Linux], provando que esse sistema é bom até mesmo para quem usa o computador pra se divertir. Para o _post_ não ficar muito grande, decidi dividi-lo em duas partes, essa é a segunda.

<!--more-->

A primeira parte você pode conferir no _link_ a seguir:

- [10 jogos clássicos para Linux][classic-games]

Os jogos que vou mostrar aqui hoje (e os da primeira parte também) tem em comum:

- são **multi-plataforma**, ou seja, feitos para vários sistemas, como Linux e [Windows], mas alguns também estão disponíveis para outros sistemas, como [Android] e [iOS];
- são **gratuitos** — podem ser baixados e jogados sem custo; e
- são [**_softwares_ livres**][free-sw]: oferecem as quatro liberdades essenciais dos _softwares_ livres — o usuário é livre para usar, estudar o [código-fonte][source-code], modificar e distribuir como quiser.

Como de costume, aqui eu foco no [openSUSE] e no [Linux Kamarada][kamarada], mas se você usa outra distribuição Linux, provavelmente deve ser possível instalar esses jogos nela com facilidade.

A maioria dos jogos a seguir pode ser obtida do [repositório principal do openSUSE][oss-repo], que contém apenas [_softwares_ de código aberto][oss] (do inglês _open source sofware_, OSS). Normalmente, esse repositório está habilitado. Portanto, nenhuma configuração adicional é necessária antes de instalar um jogo que está nesse repositório.

Mas alguns jogos estão disponíveis apenas no [repositório oficial do openSUSE para jogos][games-repo] (no inglês, _games_). Alguns jogos até estão disponíveis nos dois repositórios (OSS e Games), mas alguns desses jogos estão mais atualizados no repositório Games.

Para todos os casos, convém habilitar o repositório Games antes de começarmos:

```
# zypper ar http://download.opensuse.org/repositories/games/openSUSE_Leap_15.1/ games
# zypper ref
```

Sem mais delongas, vamos aos jogos!

<div class="media mb-3">
    <img src="/files/2020/01/hedgewars.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Hedgewars</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/hedgewars-1-pt.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/hedgewars-2-pt.jpg" %}
    </div>
</div>

[Hedgewars] é um jogo de estratégia, artilharia, ação e comédia no qual equipes de ouriços cor-de-rosa lutam entre si com armas pesadas. É para até 8 jogadores, conectados _online_ ou se revezando no mesmo computador, competindo entre si ou contra equipes de [inteligência artificial (IA)][ia] do computador. Existe um modo de treinamento para iniciantes e campanhas para apenas um jogador. Hedgewars toma conceitos emprestados de [Worms], uma série de jogos de estratégia e artilharia bem sucedidos durante os anos 90.

Você pode obter o Hedgewars tanto do repositório Games quanto do repositório OSS executando:

```
# zypper in hedgewars
```

Você pode encontrar mais informações sobre o Hedgewars lendo o manual _online_:

- [Main Page - Hedgewars Wiki][hedgewars-manual] (em inglês)

<div class="media mb-3">
    <img src="/files/2020/01/supertux.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">SuperTux</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/supertux-1-pt.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/supertux-2.jpg" %}
    </div>
</div>

[SuperTux] é um jogo para uma pessoa em que o jogador controla o pinguim [Tux], o mascote do Linux. Ele terá que passar por vários níveis para encontrar e resgatar sua amada Penny, que foi capturada pelo vilão Nolok. Corra por vários lugares, lute contra inimigos pulando sobre eles, cabeceando-os ou atirando objetos neles, colete objetos bônus pelo caminho. O SuperTux é um [jogo de plataforma][plataforma] 2D clássico do tipo _jump'n'run_ (pular e correr), no mesmo estilo dos conhecidos jogos de [Super Mario][mario].

Você pode obter o SuperTux tanto do repositório Games quanto do repositório OSS executando:

```
# zypper in supertux2
```

Você pode encontrar mais informações sobre o SuperTux lendo o manual _online_:

- [User Manual - SuperTux Wiki - GitHub][supertux-manual] (em inglês)

<div class="media mb-3">
    <img src="/files/2020/01/supertuxkart.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">SuperTuxKart</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/supertuxkart-1-pt.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/supertuxkart-2.jpg" %}
    </div>
</div>

[SuperTuxKart] é um jogo de [corrida de _kart_][kart] 3D com vários personagens, pistas e modos de jogo. Não é um clone do [Mario Kart][mario-kart], mas lembra de alguma forma. Ele é mais divertido do que realista e oferece boa jogabilidade. Até 8 jogadores podem competir em corridas ou batalhas, entre si ou contra adversários com IA, no mesmo computador, rede local ou _online_ com jogadores do mundo todo. Você pode correr só uma corrida ou passar pelo Modo História, tentar bater seu recorde na Corrida Contra o Relógio, competir no Grand Prix e mais!

Você pode obter o SuperTuxKart tanto do repositório Games quanto do repositório OSS executando:

```
# zypper in supertuxkart
```

Você pode encontrar mais informações no menu **Ajuda** no próprio jogo (em português).

<div class="media mb-3">
    <img src="/files/2020/01/opensnc.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Open Sonic</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/opensnc-1-pt.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/opensnc-2.jpg" %}
    </div>
</div>

[Open Sonic][opensnc] é um jogo de código aberto baseado no universo do [Sonic, o ouriço][sonic]. Ele introduz um estilo de jogo diferente chamado de jogo cooperativo: o jogador controla 3 personagens de forma alternada. O Open Sonic é um jogo de plataforma 2D, mas diferente da maioria dos jogos do gênero, ele requer mais interação do jogador com os níveis: mais que pular e correr, o jogador precisa usar alguma estratégia para avançar pelos níveis.

O Open Sonic não está disponível nem no repositório Games, nem no OSS, mas pode ser obtido do repositório [Packman]. Para instalar o Open Sonic no openSUSE (e no Linux Kamarada), você precisa adicionar o repositório Packman primeiro:

```
# zypper ar -cfp 90 http://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_15.1/ packman
```

Aí sim, na sequência, você pode instalar o Open Sonic executando:

```
# zypper in opensnc
```

O jogo oferece um modo tutorial que explica os controles e como jogar.

<div class="media mb-3">
    <img src="/files/2020/01/extreme-tuxracer.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Extreme Tux Racer</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/extreme-tuxracer-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/extreme-tuxracer-2.jpg" %}
    </div>
</div>

[Extreme Tux Racer][extreme-tuxracer] é um jogo de corrida em 3D no qual o jogador deve controlar o Tux, o pinguim do Linux, correndo e deslizando por uma pista de neve descendo uma montanha em alta velocidade, tentando pegar os peixes que estão no caminho.

O Extreme Tux Racer é um _fork_ do bem sucedido [Tux Racer][tuxracer] original, que no começo tinha código aberto, depois se tornou fechado e comercial, e acabou sendo descontinuado.

Você pode obter o Extreme Tux Racer tanto do repositório Games quanto do repositório OSS executando:

```
# zypper in extreme-tuxracer
```

O jogo tem um menu **Help** (ajuda) que lista os controles (em inglês).

<div class="media mb-3">
    <img src="/files/2020/01/frets-on-fire.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Frets on Fire</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/frets-on-fire-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/frets-on-fire-2.jpg" %}
    </div>
</div>

[Frets on Fire (FoF)][fretsonfire] é um jogo de habilidade musical e dedos rápidos, inspirado nos jogos musicais comerciais mais populares, como [Guitar Hero][guitar-hero] e [Rock Band][rock-band]. Nesse jogo, o teclado vira uma guitarra e o objetivo é tocar a música o mais certo possível. Marcadores coloridos na tela indicam as notas e o ritmo. Além disso, cada marcador corresponde a uma tecla do teclado. Aperte a tecla certa no momento certo para tocar a música e marcar pontos. Você também pode jogar FoF usando controles de _videogame_ ou controles em forma de guitarra.

Eu instalei o Frets on Fire usando o [Flatpak], um gerenciador de pacotes independente de distribuição (semelhante ao [Snap], que [usamos uma vez para instalar o Spotify][apps-linux-windows]).

Para instalar o Flatpak:

```
# zypper install flatpak
```

Depois, para instalar o Frets on Fire:

```
# flatpak install --user https://flathub.org/repo/appstream/net.sourceforge.fretsonfire.flatpakref
```

O jogo oferece um modo tutorial que explica os controles e como jogar.

<div class="media mb-3">
    <img src="/files/2020/01/stepmania.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Stepmania</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/stepmania-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/stepmania-2.jpg" %}
    </div>
</div>

[Stepmania] é um jogo de música/ritmo. É semelhante ao Frets on Fire no sentido em que o jogador deve apertar diferentes botões no tempo da música e conforme as indicações na tela. Mas o objetivo do Stepmania é dançar! Geralmente é jogado com tapetes de dança, mas também pode ser jogado com controles de _videogame_ ou com o teclado. O Stepmania se parece com o [Dance Dance Revolution][ddr], que talvez você já tenha visto em algum _shopping_.

Você pode obter o Stepmania do repositório Games executando:

```
# zypper in stepmania
```

Você pode encontrar mais informações sobre o Stepmania na _wiki_ do jogo:

- [Stepmania Wiki - GitHub][stepmania-wiki] (em inglês)

<div class="media mb-3">
    <img src="/files/2020/01/pinball.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Pinball</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/pinball-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/pinball-2.jpg" %}
    </div>
</div>

[Emilia Pinball][emilia-pinball] é um simulador de _[pinball]_ (também conhecido como "fliperama") para Linux. No _pinball_, o jogador controla alavancas (_flippers_) que são usadas para acertar bolas nos alvos para marcar pontos. Além disso, as alavancas devem proteger as bolas de cair no vão que fica na parte de baixo da mesa. O jogo termina depois que todas as bolas caem no vão.

Emilia Pinball também é chamado apenas de Pinball, provavelmente porque foi o primeiro jogo desse gênero para Linux. Infelizmente, seu desenvolvimento parou muito cedo. Ele vem com apenas duas (viciantes) mesas, mas mesmo assim ainda é muito divertido jogá-lo!

Você pode obter o Emilia Pinball do repositório Games executando:

```
# zypper in pinball
```

<div class="media mb-3">
    <img src="/files/2020/01/pokerth.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">PokerTH</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/pokerth-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/pokerth-2.jpg" %}
    </div>
</div>

[PokerTH] é um jogo de [pôquer][poker] de código aberto. Ele te permite jogar [Texas hold'em][texas-holdem], a variante de pôquer mais popular na maioria dos cassinos, contra até nove oponentes do computador ou jogadores humanos, na mesma rede local ou _online_ no mundo todo. Para jogar _online_, você precisa se registrar sem custo no _site_ [pokerth.net][pokerth]. Existe um fórum no qual os jogadores organizam competições e divulgam seus resultados.

Você pode obter o PokerTH do repositório Games executando:

```
# zypper in pokerth
```

<div class="media mb-3">
    <img src="/files/2020/01/xgalaga.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">XGalaga++</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/xgalaga-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/xgalaga-2.jpg" %}
    </div>
</div>

[XGalaga++][xgalagapp] é um clássico jogo de tiro vertical (estilo [shoot'em up][shoot-em-up]) de tela única. Nele, você controla uma espaçonave e combate inimigos atirando neles e desviando dos seus disparos. O XGalaga++ foi inspirado no [XGalaga], mas recriado do zero, exceto pelos gráficos, que foram aproveitados do XGalaga. Por sua vez, o XGalaga é um clone do antigo jogo de arcade espacial [Galaga].

Você pode obter o XGalaga++ tanto do repositório Games quanto do repositório OSS executando:

```
# zypper in xgalaga++
```

Quando você inicia o jogo, a primeira tela (em inglês, veja a figura acima) explica os controles e os itens bônus. Quando terminar de ler, tecle **s** para começar a jogar.

## Que tal mais?

Além dos 10 jogos que você viu hoje, e dos 10 jogos que mostramos no _post_ anterior:

- [10 jogos clássicos para Linux][classic-games]

Não deixe de conferir:

- [Como jogar Super Nintendo no openSUSE com o emulador Snes9x][snes9x]
- [20 aplicativos que você pode usar do mesmo jeito no Linux e no Windows — parte 2][apps-linux-windows-2] (aqui falamos do Steam, que é um serviço onde você pode obter jogos para Linux)

E você? Indica algum jogo para Linux que ainda não apareceu aqui no _blog_ do Linux Kamarada? Escreva nos comentários!

Abraço e até a próxima!

[linux]:                http://www.vivaolinux.com.br/linux/
[classic-games]:        {% post_url pt/2019-12-22-10-jogos-classicos-para-linux %}
[windows]:              https://www.microsoft.com/pt-br/windows/
[android]:              https://www.android.com/
[ios]:                  https://www.apple.com/br/ios/
[free-sw]:              https://www.gnu.org/philosophy/free-sw.pt-br.html
[source-code]:          https://www.codigofonte.com.br/artigos/o-que-e-codigo-fonte
[opensuse]:             https://www.opensuse.org/
[kamarada]:             {% post_url pt/2020-01-14-linux-kamarada-libera-versao-candidata-a-lancamento-15.1-rc %}
[oss-repo]:             https://en.opensuse.org/Package_repositories#OSS
[oss]:                  https://pt.wikipedia.org/wiki/Software_de_código_aberto
[games-repo]:           https://en.opensuse.org/Additional_package_repositories#Games

[hedgewars]:            http://www.hedgewars.org/
[ia]:                   https://pt.wikipedia.org/wiki/Inteligência_artificial
[worms]:                https://pt.wikipedia.org/wiki/Worms_(série)
[hedgewars-manual]:     http://www.hedgewars.org/wiki.html

[supertux]:             https://www.supertux.org/
[tux]:                  https://pt.wikipedia.org/wiki/Tux
[plataforma]:           https://pt.wikipedia.org/wiki/Jogo_eletrônico_de_plataforma
[mario]:                https://pt.wikipedia.org/wiki/Mario_(personagem)
[supertux-manual]:      https://github.com/SuperTux/supertux/wiki/User-Manual

[supertuxkart]:         https://supertuxkart.net/
[kart]:                 https://pt.wikipedia.org/wiki/Karting
[mario-kart]:           https://pt.wikipedia.org/wiki/Mario_Kart

[opensnc]:              http://opensnc.sourceforge.net/
[sonic]:                https://pt.wikipedia.org/wiki/Sonic_the_Hedgehog
[packman]:              https://en.opensuse.org/Additional_package_repositories#Packman

[extreme-tuxracer]:     https://sourceforge.net/projects/extremetuxracer/
[tuxracer]:             https://pt.wikipedia.org/wiki/Tux_Racer

[fretsonfire]:          http://fretsonfire.sourceforge.net/
[guitar-hero]:          https://pt.wikipedia.org/wiki/Guitar_Hero_(série)
[rock-band]:            https://pt.wikipedia.org/wiki/Rock_Band
[flatpak]:              https://flatpak.org/
[snap]:                 https://snapcraft.io/
[apps-linux-windows]:   {% post_url pt/2019-07-05-18-aplicativos-que-voce-pode-usar-do-mesmo-jeito-no-linux-e-no-windows-parte-1 %}

[stepmania]:            https://www.stepmania.com/
[ddr]:                  https://pt.wikipedia.org/wiki/Dance_Dance_Revolution
[stepmania-wiki]:       https://github.com/stepmania/stepmania/wiki

[emilia-pinball]:       http://pinball.sourceforge.net/
[pinball]:              https://pt.wikipedia.org/wiki/Pinball

[pokerth]:              https://www.pokerth.net/
[poker]:                https://pt.wikipedia.org/wiki/Pôquer
[texas-holdem]:         https://pt.wikipedia.org/wiki/Texas_hold'em

[xgalagapp]:            http://marc.mongenet.ch/OSS/XGalaga/
[shoot-em-up]:          https://pt.wikipedia.org/wiki/Shoot_'em_up
[xgalaga]:              http://rumsey.org/xgal.html
[galaga]:               https://pt.wikipedia.org/wiki/Galaga

[snes9x]:               {% post_url pt/2019-08-11-como-jogar-super-nintendo-no-opensuse-com-o-emulador-snes9x %}
[apps-linux-windows-2]: {% post_url pt/2019-07-12-20-aplicativos-que-voce-pode-usar-do-mesmo-jeito-no-linux-e-no-windows-parte-2 %}
