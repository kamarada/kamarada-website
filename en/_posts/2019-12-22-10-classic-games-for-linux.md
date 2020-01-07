---
date: '2019-12-22 23:00:00 GMT-3'
layout: post
published: true
title: '10 classic games for Linux'
image: '/files/2019/12/classic-games.jpg'
nickname: 'classic-games'
---

{% include image.html src="/files/2019/12/classic-games.jpg" %}

Who said [Linux] is not an operating system for games? Christmas break was coming, so I decided to search games for Linux and I found the results quite impressive. I myself didn't know there were that many options available, and more are being released every day, as the community of Linux users and developers grows.

I chose 20 games to talk about here and I'm going to start by 10 that are classic ones.

Some of these classic games became popular among desktop users because they have been included in the [Windows] operating system.

Linux users can enjoy the versions provided by [GNOME] and [KDE], the two major desktop environments in terms of number of users and integrated apps.

Actually, all of the games listed here should work well on all desktop environments, but KDE games may work better on [Qt]-based DEs (such as KDE itself, [Deepin] and [LXQt]), while GNOME games may work better on [GTK]-based DEs (almost all of the others, including GNOME itself, [Unity], [Xfce], [Cinnamon], [MATE], [Pantheon], [LXDE] and [Budgie]).

Also, all of the following games are [free and open source][foss] and, except by the last one, are all included in [Linux Kamarada][kamarada]. As usual, I focus on openSUSE and Linux Kamarada, but if you use another Linux distribution, you may easily find out how to install those games on it.

<div class="media mb-3">
    <img src="/files/2019/12/kpatience.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Solitaire</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/aisleriot-en.jpg" caption="Aisleriot" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kpat-en.jpg" caption="KPatience" %}
    </div>
</div>

**[Solitaire]** is any tabletop game — tipically a card game — which one can play by oneself. The most famous solitaire game is **[Klondike]**, better known as **Patience** or Solitaire (Windows ships it as Solitaire). Other popular solitaire games include **[FreeCell]** and **[Spider]**.

For simple games, where the way the game goes depends only upon how the cards fall, your patience might be the only thing you need. There are also solitaire games where you must plan your strategy and think ahead in order to win. A theme common to all the games is the player must put the cards in some special order — moving, turning and reordering them.

GNOME provides a compilation of 80 different solitaire card games in the **[Aisleriot]** app, which comes out-of-the-box on Linux Kamarada and can be installed on openSUSE running:

```
# zypper in aisleriot
```

You can find more information about each of the games in Aisleriot on the app itself, by opening the **Help** menu or pressing **F1**, or reading the online manual:

- [AisleRiot Manual][aisleriot-manual]

KDE also has its own solitaire card games compilation named **[KPatience]**. It can be installed with:

```
# zypper in kpat
```

You can find more information about each of the games in KPatience on the app itself, by opening the **Help** menu or pressing **F1**, or reading the online manual:

- [The KPatience Handbook][kpatience-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/kmahjongg.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Mahjongg solitaire</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-mahjongg-en.jpg" caption="GNOME Mahjongg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kmahjongg-en.jpg" caption="KMahjongg" %}
    </div>
</div>

[**Mahjongg solitaire**][mahjongg-solitaire], also known simply as Mahjongg, is a solitaire version of the classic Chinese four-player tile-based game [Mahjong]. The game is played with a set of 144 tiles based on Chinese characters and symbols. Some versions add Latin letters and Arabic numerals appealling to a Western audience.

The 144 tiles are arranged in layers. Tiles that are below other tiles cannot be seen initially. A tile is said to be open or exposed if no other tile is lying directly on it, so it can be removed from the board without disturbing other tiles. You can recognize open tiles by a free long edge on either the left or the right. The goal is to match pairs of open identical tiles and remove them from the board, exposing the tiles under them for play. The game is finished when all pairs have been removed or when there are no exposed pairs remaining.

[**GNOME Mahjongg**][gnome-mahjongg] comes out-of-the-box on Linux Kamarada and can be installed on openSUSE running:

```
# zypper in gnome-mahjongg
```

KDE's version of Mahjongg is called **[KMahjongg]** and can be installed on openSUSE running:

```
# zypper in kmahjongg
```

You can find more information about both games in their **Help** menu, pressing **F1**, or reading their online helps:

- [Mahjongg - GNOME Help][gnome-mahjongg-help]
- [The KMahjongg Handbook][kmahjongg-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/kmines.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Minesweeper</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-mines-en.jpg" caption="GNOME Mines" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kmines-en.jpg" caption="KMines" %}
    </div>
</div>

**[Minesweeper]** is a single-player logic puzzle game. The aim is to locate all the mines that are hidden under tiles on a rectangular board. You will need to use a combination of logic and luck to find all the mines without triggering an explosion.

You start the game with a grid of covered squares and no idea what is in them. Clicking on a square reveals what is in it: either empty or a mine. If you hit a mine, the game is over. If you uncover an empty square, it may show a number, which indicates how many mines there are in the neighbor squares, or nothing, if there are no mines nearby. Once you find a few clear squares you can start to deduce which squares have mines in them and which don't. You win the game once you have revealed all the empty squares and marked all the mined squares.

GNOME has a minesweeper clone called [**GNOME Mines**][gnome-mines], which comes out-of-the-box on Linux Kamarada and can be installed on openSUSE running:

```
# zypper in gnome-mines
```

KDE also has its own minesweeper game named **[KMines]**. It can be installed with:

```
# zypper in kmines
```

You can find more information about both games in their **Help** menu, pressing **F1**, or reading their online helps:

- [GNOME Mines - GNOME Help][gnome-mines-help]
- [The KMines Handbook][kmines-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/chess.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Chess</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-chess-en.jpg" caption="GNOME Chess" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/knights-en.jpg" caption="KNights" %}
    </div>
</div>

**[Chess]** is a two-player strategy game played on a 8x8 checkered board (with squares of alternating colors). The game is played by millions of people worldwide.

One player controls the white pieces and the other player controls the black pieces. Each player begins the game with 16 pieces: 1 king, 1 queen, 2 rooks, 2 knights, 2 bishops, and 8 pawns. Each piece type moves differently. The two players simulate a battle by moving their pieces and capturing each other's pieces. The objective of the game is to checkmate the opponent's king. This occurs when the king is under immediate attack (in check) and there is no move able to remove it from attack.

[**GNOME Chess**][gnome-chess] allows a human to play against a computer [chess engine][chess-engine] such as [GNU Chess][gnu-chess] (default) or against another human locally. It comes out-of-the-box on Linux Kamarada and can be installed on openSUSE running:

```
# zypper in gnome-chess gnuchess
```

KDE's chess is called **[KNights]**. It supports playing local games against human players or against chess engines, as well as playing online games on the [Free Internet Chess Server (FICS)][fics]. Furthermore, it is possible to watch two different chess engines playing against each other. It can be installed with:

```
# zypper in knights
```

You can find more information about both games in their **Help** menu, pressing **F1**, or reading their online manuals:

- [GNOME Chess Manual][gnome-chess-manual]
- [The Knights Handbook][knights-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/qgo.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Reversi</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/iagno-en.jpg" caption="Iagno" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kreversi-en.jpg" caption="KReversi" %}
    </div>
</div>

**[Reversi]**, also known as **Othello**, is a strategy game for two players, played on an 8×8 uncheckered board (with squares of the same color). The game pieces are 64 identical two sided disks, which are light on one side and dark on the other.

Players take turns tactically placing disks on the board with their assigned color facing up. During a play, any disks of the opponent's color that are in a straight line and bounded by the disk just placed and another disk of the current player's color are turned over to the current player's color. The game ends when the board is completely filled by disks and the winner is the player with most disks of their color on the board.

The GNOME version of Reversi is called **[Iagno]**. It comes out-of-the-box on Linux Kamarada and can be installed on openSUSE running:

```
# zypper in iagno
```

The KDE version of Reversi is called **[KReversi]** and can be installed on openSUSE running:

```
# zypper in kreversi
```

You can find more information about both games in their **Help** menu, pressing **F1**, or reading their online helps:

- [Iagno - GNOME Help][iagno-help]
- [The KReversi Handbook][kreversi-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/ksudoku.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Sudoku</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-sudoku-en.jpg" caption="GNOME Sudoku" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/ksudoku-en.jpg" caption="KSudoku" %}
    </div>
</div>

**[Sudoku]** (meaning "single number") is a Japanese logic puzzle game featuring a 9x9 square grid divided into 9 subgrids of 3x3 squares. The objective is to fill each square with a number between 1 and 9 (inclusive) such that no number is repeated in any row, column or subgrid. Puzzles start partially filled and it's the player's job to fill in the rest. Each puzzle has only one solution. In a solved puzzle, each row, column and subgrid contains all the numbers 1 to 9.

[**GNOME Sudoku**][gnome-sudoku] comes out-of-the-box on Linux Kamarada and can be installed on openSUSE running:

```
# zypper in gnome-sudoku
```

KDE's version of Sudoku is called **[KSudoku]** and can be installed on openSUSE running:

```
# zypper in ksudoku
```

You can find more information about both games in their **Help** menu, pressing **F1**, or reading their online helps:

- [GNOME Sudoku - GNOME Help][gnome-sudoku-help]
- [The KSudoku Handbook][ksudoku-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/quadrapassel.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Tetris</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/quadrapassel-en.jpg" caption="Quadrapassel" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/kblocks-en.jpg" caption="KBlocks" %}
    </div>
</div>

**[Tetris]** is the classic falling-block game. Geometric shapes made of blocks fall from the top center of the screen in a random order. Your task is to rotate and move the shapes across the screen to stack the blocks in a way that lines are completely filled. When a line is completed, it is removed, and more space is available in the play area. When there is not enough space for blocks to fall, the game is over. Blocks come in seven different shapes made from four blocks each: one straight, two L-shaped, one square, and two S-shaped.

The GNOME version of Tetris is called **[Quadrapassel]**. It comes out-of-the-box on Linux Kamarada and can be installed on openSUSE running:

```
# zypper in quadrapassel
```

The KDE version of Tetris is called **[KBlocks]**. It can be installed on openSUSE running:

```
# zypper in kblocks
```

You can find more information about both games in their **Help** menu, pressing **F1**, or reading their online helps:

- [Quadrapassel - GNOME Help][quadrapassel-help]
- [The KBlocks Handbook][kblocks-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/ksnakeduel.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Snake</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-nibbles-en.jpg" caption="Nibbles" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/ksnakeduel-en.jpg" caption="KSnakeDuel" %}
    </div>
</div>

**[Snake]** is the name for a video game concept where the player controls a snake which grows in length. It became popular after a variant was preloaded on [Nokia] mobile phones in 1998.

TODO Incluir imagem do Snake, da Nokia

There is a snake game for GNOME called **[Nibbles]**. The aim of the game is to swallow as many objects as you can while avoiding maze walls and other snakes. Nibbles comes out-of-the-box on Linux Kamarada and can be installed on openSUSE running:

```
# zypper in gnome-nibbles
```

The snake game for KDE is called **[KSnakeDuel]** and it features two game types:

- **KSnakeDuel:** a two-player game, that you can play against the computer or a friend, in which snakes grow in length without eating anything. The aim of the game is to live longer than your opponent. To do that, avoid running into a wall, your own tail and that of your opponent. Actually, that is closer to the concept of [TRON].
- **KSnake:** this is a simple snake-like game in which your objective is to survive as long as possible and eat as many fruits as you can.

You can switch between these game types using the game type selector in the configuration dialog. KSnakeDuel can be installed on openSUSE running:

```
# zypper in ksnakeduel
```

You can find more information about Nibbles and KSnakeDuel (and KSnake) in their **Help** menu, pressing **F1**, or reading their online helps:

- [Nibbles - GNOME Help][nibbles-help]
- [The KSnakeDuel Handbook][ksnakeduel-handbook]

<div class="media mb-3">
    <img src="/files/2019/12/kpatience.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Hearts</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2019/12/gnome-hearts-en.jpg" caption="GNOME Hearts" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2019/12/hearts.jpg" caption="Hearts (Qt version)" %}
    </div>
</div>

**[Hearts]** is a trick-taking card game played by four players using a full 52 cards deck (without jokers). The objective is to gain as few point cards as possible, with the point cards usually being all the hearts and the queen of spades. As soon as one player reaches a set number of points the game is over and the player with the lowest score is declared the winner.

How many points a card is and when the game ends depends on the ruleset. The standard ruleset is what most people will be familiar with. All of the hearts are worth 1 point and the queen of spades is worth 13 points, other cards don't add up points. The game ends as soon as one player reaches 100 points.

There was a Hearts game for GNOME which is unmaintained now. You can install and play it, it works, but nobody knows for how long, as it has not been receiving updates for some time.

Although abandoned, I decided to include it on Linux Kamarada because I really liked to play Hearts.

**GNOME Hearts** is not on the OSS repo. To install it on openSUSE, you need to add the [Games] repo first:

```
# zypper ar http://download.opensuse.org/repositories/games/openSUSE_Leap_15.1/ games
```

Then, install GNOME Hearts running:

```
# zypper in gnome-hearts
```

As an alternative, you can install a Qt version of Hearts (not part of KDE games) simply called [**Hearts**][qt-hearts]. It is available on the Games repo:

```
# zypper in hearts
```

You can find more information about both games in their **Help** menu.

<div class="media mb-3">
    <img src="/files/2019/12/kcheckers.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Checkers</h2>
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

**[Checkers]** (American English) or **Draughts** (British English) is a two-player strategy game played on an 8×8 checkerboard which involve diagonal moves of uniform game pieces and mandatory captures by jumping over opponent pieces.

Actually there is no checkers version as part of either GNOME or KDE families of games, but there is a Qt-based checkers game for Linux: **[QCheckers]**, formerly known as **KCheckers** (the letter K in the name is misleading, this game was never part of the KDE family).

The older version (KCheckers) is available on the Games repo. You can install it on Linux Kamarada and openSUSE running:

```
# zypper in kcheckers
```

QCheckers is in development and it's not available on either the OSS or the Games repo, but you can retrieve it from community repos at [software.opensuse.org][qcheckers-package], or download and compile its source code from [GitHub][qcheckers-source], if you prefer (and know how to do it).

In both versions, you can find more information in the **Help** menu.

## Other GNOME and KDE games

This page is far from listing all the GNOME and KDE games, here was just a part of them. To get the complete list of games currently maintained by GNOME and KDE, visit the following websites:

- [GNOME Wiki - Apps - Games][gnome-games]
- [Games - KDE.org][kde-games]

And there are more to come! Follow Linux Kamarada to know more games for Linux!

[linux]:                https://www.kernel.org/linux.html
[windows]:              https://www.microsoft.com/windows/
[gnome]:                https://www.gnome.org/
[kde]:                  https://kde.org/
[qt]:                   https://www.qt.io/
[deepin]:               https://www.deepin.org/
[lxqt]:                 https://lxqt.org/
[gtk]:                  https://gtk.org/
[unity]:                https://unity8.io/
[xfce]:                 https://xfce.org/
[cinnamon]:             http://developer.linuxmint.com/projects/cinnamon-projects.html
[mate]:                 https://mate-desktop.org/
[pantheon]:             https://elementary.io/
[lxde]:                 https://lxde.org/
[budgie]:               https://budgie-desktop.org/
[foss]:                 https://en.wikipedia.org/wiki/Free_and_open-source_software
[kamarada]:             {% post_url en/2019-09-13-first-beta-release-of-the-kamarada-linux-distribution %}

[solitaire]:            https://en.wikipedia.org/wiki/Solitaire
[klondike]:             https://en.wikipedia.org/wiki/Klondike_(solitaire)
[freecell]:             https://en.wikipedia.org/wiki/FreeCell
[spider]:               https://en.wikipedia.org/wiki/Spider_(solitaire)
[aisleriot]:            https://wiki.gnome.org/Apps/Aisleriot
[aisleriot-manual]:     https://help.gnome.org/users/aisleriot/stable/
[kpatience]:            https://kde.org/applications/games/org.kde.kpat
[kpatience-handbook]:   https://docs.kde.org/stable5/en/kdegames/kpat/index.html

[minesweeper]:          https://en.wikipedia.org/wiki/Minesweeper_(computer_game)
[gnome-mines]:          https://wiki.gnome.org/Apps/Mines
[kmines]:               https://kde.org/applications/games/org.kde.kmines
[gnome-mines-help]:     https://help.gnome.org/users/gnome-mines/stable/
[kmines-handbook]:      https://docs.kde.org/stable5/en/kdegames/kmines/index.html

[reversi]:              https://en.wikipedia.org/wiki/Reversi
[iagno]:                https://wiki.gnome.org/Apps/Iagno
[kreversi]:             https://kde.org/applications/games/org.kde.kreversi
[iagno-help]:           https://help.gnome.org/users/iagno/stable/
[kreversi-handbook]:    https://docs.kde.org/stable5/en/kdegames/kreversi/index.html

[chess]:                https://en.wikipedia.org/wiki/Chess
[gnome-chess]:          https://wiki.gnome.org/Apps/Chess
[chess-engine]:         https://en.wikipedia.org/wiki/Chess_engine
[gnu-chess]:            https://www.gnu.org/software/chess/
[knights]:              https://kde.org/applications/games/org.kde.knights
[fics]:                 https://www.freechess.org/
[gnome-chess-manual]:   https://help.gnome.org/users/gnome-chess/stable/
[knights-handbook]:     https://docs.kde.org/stable5/en/kdegames/knights/index.html

[mahjongg-solitaire]:   https://en.wikipedia.org/wiki/Mahjong_solitaire
[mahjong]:              https://en.wikipedia.org/wiki/Mahjong
[gnome-mahjongg]:       https://wiki.gnome.org/Apps/Mahjongg
[kmahjongg]:            https://kde.org/applications/games/org.kde.kmahjongg
[gnome-mahjongg-help]:  https://help.gnome.org/users/gnome-mahjongg/stable/
[kmahjongg-handbook]:   https://docs.kde.org/stable5/en/kdegames/kmahjongg/index.html

[sudoku]:               https://en.wikipedia.org/wiki/Sudoku
[gnome-sudoku]:         https://wiki.gnome.org/Apps/Sudoku
[ksudoku]:              https://kde.org/applications/games/org.kde.ksudoku
[gnome-sudoku-help]:    https://help.gnome.org/users/gnome-sudoku/stable/
[ksudoku-handbook]:     https://docs.kde.org/stable5/en/kdegames/ksudoku/index.html

[tetris]:               https://en.wikipedia.org/wiki/Tetris
[quadrapassel]:         https://wiki.gnome.org/Apps/Quadrapassel
[kblocks]:              https://kde.org/applications/games/org.kde.kblocks
[quadrapassel-help]:    https://help.gnome.org/users/quadrapassel/stable/
[kblocks-handbook]:     https://docs.kde.org/stable5/en/kdegames/kblocks/index.html

[snake]:                https://en.wikipedia.org/wiki/Snake_(video_game_genre)
[nokia]:                https://www.nokia.com/
[nibbles]:              https://wiki.gnome.org/Apps/Nibbles
[ksnakeduel]:           https://kde.org/applications/games/org.kde.ksnakeduel
[tron]:                 https://en.wikipedia.org/wiki/Tron
[nibbles-help]:         https://help.gnome.org/users/gnome-nibbles/stable/
[ksnakeduel-handbook]:  https://docs.kde.org/stable5/en/kdegames/ksnakeduel/index.html

[hearts]:               https://en.wikipedia.org/wiki/Hearts_(card_game)
[games]:                https://en.opensuse.org/openSUSE:Games
[qt-hearts]:            https://github.com/Rescator7/Hearts

[checkers]:             https://en.wikipedia.org/wiki/Checkers
[qcheckers]:            https://portnov.github.io/qcheckers/
[qcheckers-package]:    https://software.opensuse.org/package/qcheckers
[qcheckers-source]:     https://github.com/portnov/qcheckers

[gnome-games]:          https://wiki.gnome.org/Apps#Games
[kde-games]:            https://kde.org/applications/games/
