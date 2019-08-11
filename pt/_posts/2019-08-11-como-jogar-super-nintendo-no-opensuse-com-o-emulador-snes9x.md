---
date: 2019-08-11 02:00:00 GMT-3
image: '/files/2019/08/snes9x.jpg'
layout: post
published: true
nickname: 'snes9x'
title: 'Como jogar Super Nintendo no openSUSE com o emulador Snes9x'
excerpt: 'Relembre a infância jogando os clássicos que marcaram a década de 90!'
---

{% include image.html src="/files/2019/08/snes9x.jpg" %}

O [**Super Nintendo Entertainment System**][snes] (**SNES**), mais conhecido simplesmente por **Super Nintendo**, foi um console de *videogame* de 16 *bits* fabricado pela [Nintendo] durante a década de 90. Foi um sucesso à época, com quase 50 milhões de unidades vendidas e diversos jogos emplacados, como [Super Mario World][smw], [Donkey Kong Country][dkc], [Super Mario Kart][smk], [Street Fighter][sf], [Zelda], [Final Fantasy][ff], [Chrono Trigger][ct] e outros.

Gostaria de relembrar algum desses clássicos? Sabia que há um programa próprio para isso, chamado de emulador?

Um **emulador** é um programa que permite que seu computador execute programas feitos para outros dispositivos. Um emulador de um *videogame* permite que seu computador rode os jogos feitos para aquele *videogame*. Comumente, os arquivos que contém os jogos são chamados de **ROMs**. No caso do Super Nintendo, a ROM seria o conteúdo do cartucho.

Existem alguns emuladores de Super Nintendo. Um dos mais conhecidos é o Snes9x.

O [**Snes9x**][snes9x] é um emulador multi-plataforma capaz de emular a maioria dos jogos de Super Nintendo no computador. É um [*software* livre][free-software] e seu código-fonte está disponível no [GitHub].

Nesse *post*, você verá como instalar e usar o Snes9x na distribuição Linux [openSUSE].

## Aviso legal

No Brasil, de acordo com a Lei de Programa de Computador ([Lei nº 9.609 de 1998][lei-9609]), você só pode armazenar em seu computador ROMs de jogos que você comprou e que estejam sob sua posse. Disponibilizar ROMs para *download* é uma violação de direitos autorais ("pirataria"), mas baixá-las, não (desde que você tenha os jogos originais).

Alguns *sites* afirmam, erroneamente, que você pode baixar ROMs contanto que as apague dentro de 24 horas, mas isso não possui fundamento jurídico.

Na prática, como no Brasil ninguém fiscaliza o que você baixa, depende apenas da sua consciência baixar ou não baixar ROMs e quais ROMs baixar.

Aparentemente, não há problema legal quanto aos emuladores, pois até o momento nenhuma empresa conseguiu impedir sua distribuição. Os desenvolvedores alegam que usam engenharia reversa para criar os emuladores e, por isso, estão dentro da lei.

## Onde baixar ROMs

Uma simples pesquisa em mecanismos de busca como o [Google] revela *sites* que disponibilizam diversas [ROMs de jogos para Super Nintendo para *download*][google].

## Requisitos mínimos do Snes9x

Para emular jogos de Super Nintendo no Linux usando o Snes9x você não precisa de um supercomputador. A [documentação][snes9x-docs] fala em no mínimo um processador Pentium 2 300MHz com 16MB de memória RAM, ou um processador de 1GHz para uma experiência perfeita. Se seu computador tem 10 anos ou menos (pra dar uma noção, estamos falando de 2009, lançamento do [Windows 7][windows-7]), com certeza se encaixa nessas especificações.

## Instalando o Snes9x

Você pode instalar o Snes9x no openSUSE de duas formas: pela interface gráfica, usando a instalação com 1 clique (*1-Click Install*), ou pelo terminal, usando o gerenciador de pacotes **zypper**. Escolha a que prefere.

Para instalar usando a instalação com 1 clique, clique no botão abaixo:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/snes9x.ymp'><i class='fas fa-bolt'></i> Instalação com 1 clique</a></p>

Para instalar usando o terminal, primeiro adicione o repositório necessário:

```
# zypper addrepo -f http://download.opensuse.org/repositories/Emulators/openSUSE_Leap_15.1/ emuladores
```

Depois, instale o pacote do Snes9x:

```
# zypper in snes9x
```

Após a instalação, você já deve ser capaz de iniciar o emulador.

## Iniciando o Snes9x

Se você possui um *joystick* e pretende jogar com ele, conecte-o antes de iniciar o emulador.

Para iniciar o Snes9x, se você usa o ambiente [GNOME], clique em **Atividades**, no canto superior esquerdo da tela, comece a digitar `snes9x` e clique no ícone do emulador:

[GNOME]: https://br.gnome.org/

{% include image.html src="/files/2019/08/snes9x-launching-pt.jpg" %}

{% include image.html src="/files/2019/08/snes9x-start-screen.png" caption="A tela inicial do Snes9x" %}

## Configurando o Snes9x

Existem algumas configurações que você precisa fazer antes de começar a jogar. Normalmente, elas são feitas apenas uma vez, no primeiro uso do emulador.

### Configuração dos controles

Para acessar as configurações do Snes9x, abra o menu **Options** e clique em **Preferences**:

{% include image.html src="/files/2019/08/snes9x-preferences.jpg" %}

Para configurar os controles, selecione a aba **Joypads**:

{% include image.html src="/files/2019/08/snes9x-keyboard.jpg" %}

Essa caixa de diálogo lista os botões do *joystick* do Super Nintendo e os botões correspondentes no computador. Para associar um botão do Super Nintendo, clique no campo e pressione a tecla do teclado ou o botão do *joystick* que deseja associar.

Por padrão, o Snes9x muda para o botão seguinte, permitindo que você atribua os 12 botões com agilidade. Comece associando o primeiro botão (**Up**, cima). Depois que você associar o botão **Up**, o Snes9x muda para **Down** (baixo), depois para **Left** (esquerda), depois **Right** (direita), depois **Start** (iniciar) e assim sucessivamente.

Se quiser uma sugestão de configuração, consulte essa imagem:

{% include image.html src="/files/2019/08/snes9x-setup.jpg" %}

Se você for jogar a dois, para configurar os controles do segundo jogador, mude **Joypad** para **2** e repita o processo. Para o segundo jogador, vou usar um *joystick* USB:

{% include image.html src="/files/2019/08/snes9x-joypad.jpg" %}

### Configuração do som

Precisamos fazer mais uma configuração antes de começar a jogar: indicar ao Snes9x qual sistema de som usar. No openSUSE, o sistema de som instalado por padrão é o [PulseAudio].

Selecione a aba **Sound**. Na opção **Sound driver**, selecione **PulseAudio**:

{% include image.html src="/files/2019/08/snes9x-sound.jpg" %}

Clique em **OK** para salvar as configurações e fechar a caixa de diálogo de preferências.

## Abrindo uma ROM

Para abrir uma ROM, abra o menu **File** e clique em **Open ROM Image**:

{% include image.html src="/files/2019/08/snes9x-open-rom-1.jpg" %}

Navegue até a pasta onde está a ROM que deseja jogar e dê dois cliques nela. Normalmente é um arquivo com a extensão `.smc`, `.sfc` ou `.zip`:

{% include image.html src="/files/2019/08/snes9x-open-rom-2.jpg" %}

O jogo deve começar:

{% include image.html src="/files/2019/08/snes9x-game-started.png" %}

## Salvando e retomando

Uma vantagem do emulador em relação ao *videogame* é que você pode salvar o estado do jogo a qualquer momento, assim como retomar a qualquer momento do ponto em que salvou.

Jogando no Snes9x, você pode salvar da mesma forma que no Super Nintendo (usando o menu do próprio jogo), ou pode usar uma das 10 memórias que o emulador oferece.

Para salvar o estado do jogo, abra o menu **File**, aponte para **Save State** e escolha uma das memórias (*slots*) disponíveis:

{% include image.html src="/files/2019/08/snes9x-save-state.jpg" %}

Para retomar um estado previamente salvo, abra o menu **File**, aponte para **Load State** e escolha a memória que deseja retomar:

{% include image.html src="/files/2019/08/snes9x-load-state.jpg" %}

Para facilitar salvar e retomar, você pode criar atalhos do teclado para cada memória. Para isso, vá em **Options**, **Preferences**, **Shortcuts**, **Save states** e defina os atalhos de teclado, da mesma forma como definiu os controles:

{% include image.html src="/files/2019/08/snes9x-shortcuts.jpg" %}

Recomendo definir **Shift + F1** para salvar na memória 0 e **F1** para retomar da memória 0 e de forma análoga para as demais (para a memória 1, **Shift + F2** e **F2**, e assim sucessivamente).

**Dica:** se você usa um *joystick* USB parecido com um *joystick* de Playstation, deve ter notado que sobraram botões na configuração (ele tem mais botões que o *joystick* do Super Nintendo). Você pode associar os botões **L2** e **R2** a salvar e retomar um estado.

## Tela cheia

Se quiser jogar em tela cheia, abra o menu **View** e clique em **Fullscreen**.

Para sair do moto tela cheia, pressione **Esc**.

Encerro minha parte por aqui. Agora é com você: boa diversão!

## Referências

- [Super Nintendo Entertainment System - Wikipedia][snes]
- [Emulação: como jogar SNES no computador com o Snes9X - Memória BIT][memoriabit1]
- [Snes9xBR – emulador de Super Nintendo em português - Memória BIT][memoriabit2]
- [Configurando o emulador Snes9x para melhor gráfico - PC e Games][pcigames]
- [Snes9X Tutorial - Video Game Emulation for Newbies][fantasyanime]
- Revista PC Emuladores, ano 1, nº 2, São Paulo, Editora Escala

[snes]:             https://pt.wikipedia.org/wiki/Super_Nintendo_Entertainment_System
[nintendo]:         https://www.nintendo.com/pt_BR/
[smw]:              https://pt.wikipedia.org/wiki/Super_Mario_World
[dkc]:              https://pt.wikipedia.org/wiki/Donkey_Kong_Country
[smk]:              https://pt.wikipedia.org/wiki/Super_Mario_Kart
[sf]:               https://pt.wikipedia.org/wiki/Street_Fighter_II
[zelda]:            https://pt.wikipedia.org/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past
[ff]:               https://pt.wikipedia.org/wiki/Final_Fantasy_IV
[ct]:               https://pt.wikipedia.org/wiki/Chrono_Trigger
[snes9x]:           http://www.snes9x.com/
[free-software]:    https://www.gnu.org/philosophy/free-sw.pt-br.html
[github]:           https://github.com/snes9xgit/snes9x
[opensuse]:         https://www.opensuse.org/
[lei-9609]:         http://www.planalto.gov.br/ccivil_03/leis/l9609.htm
[google]:           https://www.google.com.br/search?q=roms+de+super+nintendo
[snes9x-docs]:      https://github.com/snes9xgit/snes9x/blob/master/unix/docs/readme_unix.html
[windows-7]:        https://pt.wikipedia.org/wiki/Windows_7
[pulseaudio]:       https://www.freedesktop.org/wiki/Software/PulseAudio/
[memoriabit1]:      https://www.memoriabit.com.br/emulando-velharias-como-jogar-games-do-snes-no-emulador-snes9x/
[memoriabit2]:      https://www.memoriabit.com.br/snes9x-pt-br/
[pcigames]:         http://pcigames.blogspot.com/2013/04/Configurando-o-emulador-Snes9x-para-melhor-grafico.html
[fantasyanime]:     https://www.fantasyanime.com/emuhelp/snes9x
