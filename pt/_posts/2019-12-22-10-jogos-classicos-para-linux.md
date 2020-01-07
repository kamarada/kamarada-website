---
date: '2019-12-22 23:00:00 GMT-3'
layout: post
published: true
title: '10 jogos clássicos para Linux'
image: '/files/2019/12/classic-games.jpg'
nickname: 'classic-games'
---

{% include image.html src="/files/2019/12/classic-games.jpg" %}

Quem disse que o [Linux] não é um sistema operacional para jogos? No clima do recesso de Natal, decidi pesquisar jogos para Linux e fiquei impressionado com o que encontrei. Eu mesmo não sabia que havia tantas opções disponíveis, e mais jogos são lançados a cada dia, à medida em que o Linux atrai novos usuários e desenvolvedores.

Escolhi 20 jogos para mostrar aqui e vou começar pelos 10 que são verdadeiros clássicos.

Alguns desses jogos clássicos se tornaram populares entre os usuários de computadores _desktops_ porque vem incluídos no sistema operacional [Windows].

Usuários do Linux podem desfrutar das versões fornecidas pelo [GNOME] e pelo [KDE], as duas maiores áreas de trabalho para Linux em número de usuários e aplicativos integrados.

Na verdade, todos os jogos listados a seguir devem funcionar bem em todas as áreas de trabalho, mas pode ser que os jogos do KDE funcionem melhor em áreas de trabalho baseadas na biblioteca [Qt] (como o próprio KDE, o [Deepin] e o [LXQt]), enquanto os jogos do GNOME funcionem melhor em áreas de trabalho baseadas em [GTK] (o próprio GNOME e quase todas as outras, incluindo [Unity], [Xfce], [Cinnamon], [MATE], [Pantheon], [LXDE] e [Budgie]).

Além disso, todos os jogos listados a seguir são [_softwares_ livres e de código aberto][foss] e, exceto pelo último, todos vem incluídos no [Linux Kamarada][kamarada]. Como de costume, aqui eu foco no openSUSE e no Linux Kamarada, mas se você usa outra distribuição Linux, provavelmente deve ser possível instalar esses jogos nela com facilidade.

<div class="media mb-3">
    <img src="/files/2019/12/kpatience.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Paciência</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/aisleriot-pt.jpg" caption="Aisleriot" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kpat-pt.jpg" caption="KPatience" %}
    </div>
</div>

[**Paciência**][solitaire] é qualquer jogo de mesa — comumente jogo de baralho — que uma pessoa pode jogar sozinha. O jogo de paciência mais famoso é o **[Klondike]**, tanto que a palavra "Paciência" normalmente remete a ele, uma vez que o Windows o batizou assim. Outros jogos populares de paciência incluem **[FreeCell]** e **[Spider]**.

Para jogar jogos de paciência, você precisa, como o nome sugere, de paciência. Para os jogos mais simples, onde a forma como o jogo se desenrola depende apenas de como as cartas vão aparecendo, sua paciência é mesmo a única coisa que você precisa. Mas existem também jogos de paciência onde você precisa planejar sua estratégia e pensar no futuro para ganhar. Todos os jogos de paciência têm em comum a necessidade do jogador colocar as cartas numa determinada ordem — enquanto as move, vira e reordena.

O GNOME oferece uma coleção de 80 jogos de paciência no aplicativo **[Aisleriot]**, que vem instalado por padrão no Linux Kamarada e pode ser instalado no openSUSE executando:

```
# zypper in aisleriot aisleriot-lang
```

Você pode encontrar mais informações sobre cada um dos jogos do Aisleriot no próprio aplicativo, abrindo o menu **Ajuda** ou pressionando a tecla **F1**, ou lendo o manual _online_:

- [Manual do AisleRiot][aisleriot-manual]

O KDE também tem sua própria coleção de jogos de paciência chamada **[KPatience]**. Ela pode ser instalada executando o seguinte comando:

```
# zypper in kpat kpat-lang
```

Você pode encontrar mais informações sobre cada um dos jogos do KPatience no próprio aplicativo, abrindo o menu **Ajuda** ou pressionando a tecla **F1**, ou lendo o manual _online_:

- [Manual do KPatience][kpatience-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/kmahjongg.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Paciência Mahjongg</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-mahjongg-pt.jpg" caption="Mahjongg do GNOME" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kmahjongg-pt.jpg" caption="KMahjongg" %}
    </div>
</div>

A **Paciência Mahjongg**, também conhecida simplesmente como **Mahjongg**, é uma versão para um jogador do clássico jogo de mesa chinês para quatro jogadores chamado [Mahjong]. É composto de 144 peças com símbolos chineses, chamadas de pedras. Algumas versões adicionam letras latinas e algarismos arábicos pensando em um público ocidental.

As 144 pedras são empilhadas em camadas. No início, há pedras que estão embaixo de outras e não podem ser vistas. Uma pedra está "aberta" se nenhuma outra pedra está apoiada nela, de modo que pode ser removida da pilha sem derrubar outras pedras. Você pode identificar pedras abertas pela borda livre à esquerda ou à direita. Seu objetivo é combinar pares de peças abertas idênticas e removê-los da pilha. O jogo termina quando todos os pares foram removidos ou quando não há pares abertos restantes.

O [**Mahjongg**][gnome-mahjongg] do GNOME vem instalado por padrão, pronto pra usar no Linux Kamarada. No openSUSE, ele pode ser instalado executando o comando:

```
# zypper in gnome-mahjongg gnome-mahjongg-lang
```

A versão do KDE se chama **[KMahjongg]** e pode ser instalada no openSUSE executando:

```
# zypper in kmahjongg kmahjongg-lang
```

Em ambos os jogos, você pode encontrar mais informações no menu **Ajuda**, pressionando a tecla **F1** ou lendo a ajuda _online_:

- [Mahjongg - GNOME Help][gnome-mahjongg-help] (em inglês)
- [Manual do KMahjongg][kmahjongg-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/kmines.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Campo minado</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-mines-pt.jpg" caption="Minas do GNOME" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kmines-pt.jpg" caption="KMines" %}
    </div>
</div>

**[Campo minado][minesweeper]** é um jogo de lógica para um jogador. O objetivo é encontrar todas as minas que estão escondidas sem detoná-las. Você precisará, além de lógica, de um pouco de sorte.

O jogo começa com uma grade de quadrados cobertos e você não faz ideia do que há neles. Clicar em um quadrado revela o que há nele: vazio ou mina. Se você acertar uma mina, o jogo acaba. Se o quadrado estiver vazio, ele poderá mostrar um número, indicando quantos quadrados vizinhos tem minas, ou nada, se não houver minas por perto. Depois de descobrir alguns quadrados, você começa a deduzir quais tem minas e quais não tem. Você vence o jogo depois de revelar todos os quadrados vazios e marcar todos os quadrados com minas.

O GNOME tem um clone do campo minado chamado [**Minas**][gnome-mines], que vem instalado por padrão, pronto pra usar no Linux Kamarada e pode ser instalado no openSUSE executando:

```
# zypper in gnome-mines gnome-mines-lang
```

O KDE também tem seu próprio clone do campo minado chamado **[KMines]**, que pode ser instalado no openSUSE executando:

```
# zypper in kmines kmines-lang
```

Em ambos os jogos, você pode encontrar mais informações no menu **Ajuda**, pressionando a tecla **F1** ou lendo a ajuda _online_:

- [GNOME Mines - GNOME Help][gnome-mines-help] (em inglês)
- [Manual do KMines][kmines-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/chess.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Xadrez</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-chess-pt.jpg" caption="Xadrez do GNOME" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/knights-pt.jpg" caption="KNights" %}
    </div>
</div>

O [**xadrez**][chess] é um jogo de estratégia para dois jogadores, jogado em um tabuleiro quadriculado 8x8 com quadrados de cores claras e escuras alternadas. É jogado por milhões de pessoas em todo o mundo e é considerado também um esporte.

Um jogador controla as peças brancas e o outro, as pretas. Cada jogador começa o jogo com 16 peças: 1 rei, 1 rainha, 2 torres, 2 cavalos, 2 bispos e 8 peões. Cada tipo de peça se move de maneira diferente. Os jogadores travam uma batalha movendo suas peças e capturando as peças um do outro. O objetivo do jogo é deixar o rei do adversário em xeque-mate. Isso acontece quando o rei está sob ataque imediato (em xeque) e não há movimento que possa tirá-lo do ataque.

O [**Xadrez**][gnome-chess] do GNOME permite que você jogue contra um [mecanismo de xadrez][chess-engine] do computador, como o [GNU Chess][gnu-chess] (padrão), ou contra outra pessoa se revezando no mesmo computador. Ele vem pronto pra usar no Linux Kamarada e pode ser instalado no openSUSE executando:

```
# zypper in gnome-chess gnome-chess-lang gnuchess
```

O xadrez do KDE se chama **[KNights]**. Ele permite que você jogue localmente, contra um mecanismo de xadrez ou outra pessoa, ou _online_, por meio do [Free Internet Chess Server (FICS)][fics]. Além disso, você pode assistir a dois mecanismos de xadrez jogando um contra o outro. O KNights pode ser instalado executando:

```
# zypper in knights knights-lang
```

Em ambos os jogos, você pode encontrar mais informações no menu **Ajuda**, pressionando a tecla **F1** ou lendo o manual _online_:

- [Manual do jogo de xadrez GNOME Chess][gnome-chess-manual]
- [Manual do Knights][knights-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/qgo.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Reversi</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/iagno-pt.jpg" caption="Iagno" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kreversi-pt.jpg" caption="KReversi" %}
    </div>
</div>

**[Reversi]**, também conhecido como **Othello**, é um jogo de estratégia para dois jogadores, jogado em um tabuleiro 8x8 com quadrados da mesma cor. As peças do jogo são 64 discos idênticos de dois lados, que são claros de um lado e escuros do outro.

Os jogadores se revezam colocando discos no tabuleiro, com sua cor atribuída virada pra cima. Durante uma jogada, todos os discos do adversário que estejam em uma linha reta (horizontal, vertical ou diagonal) entre o disco recém-colocado e outro disco do jogador atual são virados e passam a ser da cor desse jogador. O jogo termina quando todas as casas estiverem ocupadas e o vencedor é o jogador com mais discos da sua cor no tabuleiro.

O GNOME chama sua versão do Reversi de **[Iagno]**. Ele vem instalado por padrão, pronto pra usar no Linux Kamarada e pode ser instalado no openSUSE executando:

```
# zypper in iagno iagno-lang
```

O KDE chama sua versão do Reversi de **[KReversi]**. Ela pode ser instalada executando:

```
# zypper in kreversi kreversi-lang
```

Em ambos os jogos, você pode encontrar mais informações no menu **Ajuda**, pressionando a tecla **F1** ou lendo a ajuda _online_:

- [Iagno - Ajuda do GNOME][iagno-help]
- [Manual do KReversi][kreversi-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/ksudoku.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Sudoku</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-sudoku-pt.jpg" caption="Sudoku do GNOME" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/ksudoku-pt.jpg" caption="KSudoku" %}
    </div>
</div>

**[Sudoku]** ("número único", em japonês) é um jogo de lógica com uma grade quadriculada 9x9 dividida em 9 subgrades 3x3. O objetivo é preencher cada quadrado com um número entre 1 e 9 (inclusive), de modo que esse número não seja repetido na mesma linha, coluna ou subgrade. O quebra-cabeça tem algumas pistas iniciais, que são números inseridos em alguns quadrados, e os restantes devem ser preenchidos. Cada quebra-cabeça admite uma única solução, na qual cada linha, coluna e subgrade contém todos os números de 1 a 9.

O [**Sudoku**][gnome-sudoku] do GNOME vem instalado por padrão, pronto pra usar no Linux Kamarada e pode ser instalado no openSUSE executando:

```
# zypper in gnome-sudoku gnome-sudoku-lang
```

A versão do KDE se chama **[KSudoku]** e pode ser instalada no openSUSE executando:

```
# zypper in ksudoku ksudoku-lang
```

Em ambos os jogos, você pode encontrar mais informações no menu **Ajuda**, pressionando a tecla **F1** ou lendo a ajuda _online_:

- [GNOME Sudoku - GNOME Help][gnome-sudoku-help] (em inglês)
- [Manual do KSudoku][ksudoku-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/quadrapassel.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Tetris</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/quadrapassel-pt.jpg" caption="Quadrapassel" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kblocks-pt.jpg" caption="KBlocks" %}
    </div>
</div>

**[Tetris]** é o clássico jogo de encaixar blocos. Formas geométricas, feitas de quatro blocos cada, caem em ordem aleatória. Você deve girar e mover as formas pela tela para empilhar os blocos de forma que linhas sejam completamente preenchidas. Quando uma linha é completada, ela é removida, liberando mais espaço na área de jogo. Se a pilha cresce de um jeito que não há mais espaço suficiente para que os blocos caiam, o jogo acaba.

O GNOME tem uma versão do Tetris chamada **[Quadrapassel]**. Ela vem instalada por padrão, pronta pra usar no Linux Kamarada e pode ser instalada no openSUSE executando:

```
# zypper in quadrapassel quadrapassel-lang
```

O KDE também tem seu Tetris, chamado **[KBlocks]**, que pode ser instalado no openSUSE com:

```
# zypper in kblocks kblocks-lang
```

Em ambos os jogos, você pode encontrar mais informações no menu **Ajuda**, pressionando a tecla **F1** ou lendo a ajuda _online_:

- [Quadrapassel - GNOME Help][quadrapassel-help] (em inglês)
- [Manual do KBlocks][kblocks-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/ksnakeduel.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Cobra</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-nibbles-pt.jpg" caption="Nibbles" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/ksnakeduel-pt.jpg" caption="KSnakeDuel" %}
    </div>
</div>

O [**jogo da cobrinha**][snake] é um conceito de jogo em que o jogador controla uma cobra que cresce em comprimento. Tornou-se popular depois que foi incluído nos celulares da [Nokia] em 1998.

TODO Incluir imagem do Snake, da Nokia

Existe um jogo de cobra para GNOME chamado **[Nibbles]**. O objetivo do jogo é engolir o máximo de objetos possível, evitando paredes de labirintos e outras cobras. O Nibbles vem pronto pra usar no Linux Kamarada e pode ser instalado no openSUSE executando:

```
# zypper in gnome-nibbles gnome-nibbles-lang
```

O jogo da cobra para KDE é chamado **[KSnakeDuel]** e possui dois tipos de jogos:

- **KSnakeDuel:** um jogo para dois jogadores, que você pode jogar contra o computador ou um amigo, no qual as cobras crescem sem precisar comer nada. Seu objetivo no jogo é viver mais tempo que o seu adversário. Para isso, evite bater numa parede, na sua própria cauda ou na do seu adversário. Na verdade, esse tipo de jogo está mais próximo do conceito de [TRON].
- **KSnake:** esse é um clone simples do jogo Snake em que o seu objetivo é sobreviver o maior tempo possível, comendo o máximo de frutas possível.

Você pode alternar entre esses tipos de jogos usando o seletor de tipo de jogo na caixa de diálogo de configuração. O KSnakeDuel pode ser instalado no openSUSE executando:

```
# zypper in ksnakeduel ksnakeduel-lang
```

Você pode encontrar mais informações sobre o Nibbles e o KSnakeDuel (e o KSnake) no menu **Ajuda**, pressionando a tecla **F1** ou lendo a ajuda _online_:

- [Nibbles - Ajuda do GNOME][nibbles-help]
- [Manual do KSnakeDuel][ksnakeduel-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/kpatience.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Copas</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-hearts-pt.jpg" caption="Copas do GNOME" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/hearts.jpg" caption="Hearts (Qt version)" %}
    </div>
</div>

[**Copas**][hearts] é um jogo de baralho para quatro jogadores que usa um baralho completo de 52 cartas (sem coringas). O objetivo é evitar puxar as cartas que tem valor, normalmente as cartas de copas e a dama de espadas. Assim que um jogador atinge um determinado número de pontos, o jogo termina e o jogador com a pontuação mais baixa é o vencedor.

Quantos pontos valem cada carta e quando o jogo termina depende da variante jogada. A maioria das pessoas está acostumada com variante padrão, em que cada carta de copas vale 1 ponto e a dama de espadas vale 13 pontos, as demais cartas não somam pontos. Nessa variante, o jogo termina assim que um jogador atinge 100 pontos.

Existe um jogo de Copas para o GNOME, mas foi descontinuado, tanto que não é listado na [lista oficial de jogos para o GNOME][gnome-games]. Dá pra instalar e jogar, funciona, mas ninguém sabe por quanto tempo vai continuar funcionando, porque não recebe atualizações há algum tempo.

Apesar disso, decidi incluí-lo no Linux Kamarada, porque eu realmente gostava de jogar Copas!

O **Copas** do GNOME não está disponível no repositório OSS. Para instalá-lo no openSUSE, você precisa adicionar o [repositório de jogos][games] primeiro:

```
# zypper ar http://download.opensuse.org/repositories/games/openSUSE_Leap_15.1/ games
```

Aí sim, na sequência, você pode instalar o Copas executando:

```
# zypper in gnome-hearts gnome-hearts-lang
```

Alternativamente, você pode instalar uma versão feita em Qt do jogo Copas (não faz parte dos jogos do KDE) chamada simplesmente de [**Hearts**][qt-hearts] (copas, em inglês). Ela também está disponível no repositório de jogos e pode ser instalada executando:

```
# zypper in hearts
```

Você pode encontrar mais informações sobre ambos os jogos em seus menus de ajuda.

<div class="media mb-3">
    <img src="/files/2019/12/kcheckers.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Damas</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/kcheckers.jpg" caption="KCheckers" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/qcheckers.jpg" caption="QCheckers" %}
    </div>
</div>

[**Damas**][checkers] é um jogo de estratégia para dois jogadores jogado em um tabuleiro de xadrez 8×8. As peças se movimentam na diagonal e capturam as peças do adversário pulando-as. A captura, quando possível, é obrigatória. Vence o jogador que conseguir capturar todas as peças do adversário.

Atualmente, as famílias de jogos do GNOME e do KDE não incluem um jogo de damas, mas existe um jogo de damas para Linux feito em Qt chamado **[QCheckers]**, antes chamado KCheckers (a letra K no nome engana, porque esse jogo nunca fez parte da família do KDE).

A versão mais antiga (KCheckers) está disponível no repositório de jogos do openSUSE. Você pode instalá-la no Linux Kamarada e no openSUSE executando:

```
# zypper in kcheckers
```

A versão mais nova (QCheckers) está em desenvolvimento e não está disponível nos repositórios oficiais do openSUSE, mas você pode obter pacotes compilados pela comunidade de usuários em [software.opensuse.org][qcheckers-package] ou baixar o código-fonte do [GitHub][qcheckers-source] e compilar, se preferir (e souber como fazer).

Nas duas versões, você pode encontrar mais informações sobre o jogo no menu de ajuda.

## Outros jogos do GNOME e do KDE

Essa lista está longe de incluir todos os jogos do GNOME e do KDE, aqui apresentei apenas alguns deles. Para ver a lista completa dos jogos mantidos atualmente por esses dois projetos, visite os _sites_:

- [GNOME Wiki - Apps - Games][gnome-games]
- [Games - KDE.org][kde-games]

No próximo _post_ (que publicarei provavelmente quando voltar do recesso), mostrarei mais 10 jogos para Linux. Siga o Linux Kamarada nas redes sociais para receber a notificação!

[linux]:                https://www.vivaolinux.com.br/linux/
[windows]:              https://www.microsoft.com/pt-br/windows/
[gnome]:                https://www.gnome.org/
[kde]:                  https://kde.org/
[qt]:                   https://www.qt.io/
[deepin]:               https://www.deepin.org/
[lxqt]:                 https://lxqt.org/
[gtk]:                  https://gtk.org/
[unity]:                https://unity8.io/
[xfce]:                 https://xfce.org/
[cinnamon]:             http://developer.linuxmint.com/projects/cinnamon-projects.html
[mate]:                 https://mate-desktop.org/pt/
[pantheon]:             https://elementary.io/
[lxde]:                 https://lxde.org/
[budgie]:               https://budgie-desktop.org/
[foss]:                 https://pt.wikipedia.org/wiki/Software_livre_e_de_c%C3%B3digo_aberto
[kamarada]:             {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}

[solitaire]:            https://pt.wikipedia.org/wiki/Paci%C3%AAncia_(jogo)
[klondike]:             https://pt.wikipedia.org/wiki/Klondike_(solitaire)
[freecell]:             https://pt.wikipedia.org/wiki/FreeCell
[spider]:               https://pt.wikipedia.org/wiki/Paci%C3%AAncia_Spider
[aisleriot]:            https://wiki.gnome.org/Apps/Aisleriot
[aisleriot-manual]:     https://help.gnome.org/users/aisleriot/stable/index.html.pt_BR
[kpatience]:            https://kde.org/applications/games/org.kde.kpat
[kpatience-handbook]:   https://docs.kde.org/stable5/pt_BR/kdegames/kpat/index.html

[mahjong]:              https://pt.wikipedia.org/wiki/Mahjong
[gnome-mahjongg]:       https://wiki.gnome.org/Apps/Mahjongg
[kmahjongg]:            https://kde.org/applications/games/org.kde.kmahjongg
[gnome-mahjongg-help]:  https://help.gnome.org/users/gnome-mahjongg/stable/
[kmahjongg-handbook]:   https://docs.kde.org/stable5/pt_BR/kdegames/kmahjongg/index.html

[minesweeper]:          https://pt.wikipedia.org/wiki/Campo_minado
[gnome-mines]:          https://wiki.gnome.org/Apps/Mines
[kmines]:               https://kde.org/applications/games/org.kde.kmines
[gnome-mines-help]:     https://help.gnome.org/users/gnome-mines/stable/
[kmines-handbook]:      https://docs.kde.org/stable5/pt_BR/kdegames/kmines/index.html

[chess]:                https://pt.wikipedia.org/wiki/Xadrez
[gnome-chess]:          https://wiki.gnome.org/Apps/Chess
[chess-engine]:         https://pt.wikipedia.org/wiki/Motor_de_xadrez
[gnu-chess]:            https://www.gnu.org/software/chess/
[knights]:              https://kde.org/applications/games/org.kde.knights
[fics]:                 https://www.freechess.org/
[gnome-chess-manual]:   https://help.gnome.org/users/gnome-chess/stable/index.html.pt_BR
[knights-handbook]:     https://docs.kde.org/stable5/pt_BR/kdegames/knights/index.html

[reversi]:              https://pt.wikipedia.org/wiki/Reversi
[iagno]:                https://wiki.gnome.org/Apps/Iagno
[kreversi]:             https://kde.org/applications/games/org.kde.kreversi
[iagno-help]:           https://help.gnome.org/users/iagno/stable/index.html.pt_BR
[kreversi-handbook]:    https://docs.kde.org/stable5/pt_BR/kdegames/kreversi/index.html

[sudoku]:               https://pt.wikipedia.org/wiki/Sudoku
[gnome-sudoku]:         https://wiki.gnome.org/Apps/Sudoku
[ksudoku]:              https://kde.org/applications/games/org.kde.ksudoku
[gnome-sudoku-help]:    https://help.gnome.org/users/gnome-sudoku/stable/
[ksudoku-handbook]:     https://docs.kde.org/stable5/pt_BR/kdegames/ksudoku/index.html

[tetris]:               https://pt.wikipedia.org/wiki/Tetris
[quadrapassel]:         https://wiki.gnome.org/Apps/Quadrapassel
[kblocks]:              https://kde.org/applications/games/org.kde.kblocks
[quadrapassel-help]:    https://help.gnome.org/users/quadrapassel/stable/
[kblocks-handbook]:     https://docs.kde.org/stable5/pt_BR/kdegames/kblocks/index.html

[snake]:                https://pt.wikipedia.org/wiki/Serpente_(jogo_eletr%C3%B4nico)
[nokia]:                https://www.nokia.com/pt_int/
[nibbles]:              https://wiki.gnome.org/Apps/Nibbles
[ksnakeduel]:           https://kde.org/applications/games/org.kde.ksnakeduel
[tron]:                 https://pt.wikipedia.org/wiki/Tron
[nibbles-help]:         https://help.gnome.org/users/gnome-nibbles/stable/index.html.pt_BR
[ksnakeduel-handbook]:  https://docs.kde.org/stable5/pt_BR/kdegames/ksnakeduel/index.html

[hearts]:               https://pt.wikipedia.org/wiki/Copas_(jogo_de_cartas)
[games]:                https://en.opensuse.org/openSUSE:Games
[qt-hearts]:            https://github.com/Rescator7/Hearts

[checkers]:             https://pt.wikipedia.org/wiki/Damas
[qcheckers]:            https://portnov.github.io/qcheckers/
[qcheckers-package]:    https://software.opensuse.org/package/qcheckers
[qcheckers-source]:     https://github.com/portnov/qcheckers

[gnome-games]:          https://wiki.gnome.org/Apps#Games
[kde-games]:            https://kde.org/applications/games/
