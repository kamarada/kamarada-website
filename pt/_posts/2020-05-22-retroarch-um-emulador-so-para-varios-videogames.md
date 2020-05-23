---
date: '2020-05-22 08:30:00 GMT-3'
image: '/files/2020/05/retroarch.jpg'
layout: post
published: true
nickname: 'retroarch'
title: 'RetroArch: um emulador só para vários videogames'
---

Um **emulador** é um programa que permite que seu computador execute programas feitos para outro dispositivo. Um emulador de um _videogame_ permite que seu computador rode os jogos feitos para aquele _videogame_.

Há anos, existem vários emuladores para vários _videogames_ e eles fazem a alegria seja dos saudosistas, que querem jogar novamente jogos de _videogames_ que eles possuem mas não funcionam mais, seja dos que não têm _videogames_ para jogar.

Quando eu tive meu primeiro contato com emuladores, há quase 20 anos, usava [Windows] e precisava instalar um emulador para cada _videogame_ que eu quisesse emular, por exemplo: para emular [Super Nintendo][snes], usava o [Snes9x], para [Mega Drive][genesis], o [Gens], e assim por diante.

Será que existe um emulador para [Linux] capaz de emular todos (ou pelo menos vários) _videogames_?

Hoje, sim: temos o [RetroArch]. _Software_ livre, gratuito e multi-plataforma, o RetroArch é, na verdade, não um emulador, mas uma interface (_front end_) para vários emuladores, uma espécie de central de emulação, capaz de rodar praticamente todos os jogos retrô imagináveis. Ele se comunica com os emuladores por meio da biblioteca [libretro] (_back end_). Cada emulador suportado corresponde a um **núcleo** (_core_) da libretro.

{% include image.html src="/files/2020/05/retroarch.jpg" %}

A lista de _videogames_ que o RetroArch consegue emular inclui, mas não se limita a:

- Atari 2600
- Nintendo Entertainment System (NES)
- Sega Genesis, também conhecido por Mega Drive
- Game Boy, Game Boy Color (GBC), Game Boy Advance (GBA)
- Super Nintendo Entertainment System (SNES)
- PlayStation (PS, PS1, PSX), PlayStation 2 (PS2), PlayStation Portable (PSP)
- Nintendo 64 (N64)
- GameCube
- Nintendo DS
- Nintendo Wii

Gostou? Então continue lendo para ver como instalar e usar o RetroArch no [Linux Kamarada][kamarada-15.1] e no [openSUSE].

## Onde obter jogos (ROMs)

Comumente, os arquivos que contém os jogos são chamados de **ROMs**.

No caso de _videogames_ cujos jogos eram armazenados em cartuchos, como o Super Nintendo e o Mega Drive, as ROMs são arquivos com os conteúdos extraídos dos cartuchos.

O RetroArch não vem com ROMs. Também não há ROMs para _download_ aqui no _site_ do Linux Kamarada. Você pode procurar ROMs em ferramentas de busca como o [Google].

Experimente pesquisar, por exemplo, por `roms de mega drive`.

**Dica:** se você baixar uma ROM compactada como um arquivo ZIP, não é necessário descompacta-la, o RetroArch consegue abri-la como está.

## Instalando o RetroArch

Você pode instalar o RetroArch no openSUSE de duas formas: pela interface gráfica, usando a instalação com 1 clique (*1-Click Install*), ou pelo terminal, usando o gerenciador de pacotes **zypper**. Escolha a que prefere.

Para instalar usando a instalação com 1 clique, clique no botão abaixo:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/retroarch.ymp'><i class='fas fa-bolt'></i> Instalação com 1 clique</a></p>

Para instalar usando o terminal, primeiro adicione o repositório necessário:

```
# zypper addrepo -f http://download.opensuse.org/repositories/Emulators/openSUSE_Leap_15.1/ emuladores
```

Depois, instale o pacote do RetroArch:

```
# zypper in retroarch
```

No openSUSE, cada núcleo da libretro tem seu próprio pacote. Vários núcleos já são instalados por padrão como dependências do RetroArch. Depois, você pode abrir o **Gerenciamento de software** do [YaST], pesquisar por `libretro` e instalar ou remover núcleos como quiser.

Após a instalação, você já deve ser capaz de iniciar o RetroArch.

## Iniciando o RetroArch

Para iniciar o RetroArch, se você usa o ambiente [GNOME], clique em **Atividades**, no canto superior esquerdo da tela, comece a digitar `retroarch` e clique no ícone correspondente:

{% include image.html src="/files/2020/05/retroarch-launching-pt.jpg" %}

{% include image.html src="/files/2020/05/retroarch-main-screen-pt.jpg" caption="A tela inicial do RetroArch" %}

## Configuração dos controles

Uma característica interessante do RetroArch é que ele possui uma configuração global de controles, que só precisam ser configurados uma vez. O RetroArch se encarrega de adaptar essa configuração global para cada _videogame_ da melhor forma possível. Se você usasse os vários emuladores individualmente, teria que configurar os controles em cada um deles.

O RetroArch mapeia os botões do seu _joystick_ ou teclado para um controle virtual chamado [RetroPad], e então ele mapeia os botões do RetroPad para os botões dos controles dos _videogames_. Não existe um RetroPad de verdade, é só um conceito dentro do RetroArch.

{% include image.html src="/files/2020/05/retropad.jpg" caption="Seu joystick ou teclado é mapeado para o RetroPad, que por sua vez é mapeado para os controles dos videogames." %}

Os botões do RetroPad são os mesmos do [Sony DualShock][dualshock], o controle do [PlayStation]. Por isso, se você for comprar um controle, recomendo que compre um para PC com o mesmo formato do DualShock. Eu tenho um controle assim e é o melhor controle para emulação, porque possui muitos botões, consegue ser mapeado pro controle de qualquer _videogame_.

Você pode usar um controle com menos botões, sem problemas. Porém, nesse caso, talvez falte botões para alguns _videogames_.

Se for jogar com um controle, conecte-o. O RetroArch deve detecta-lo:

{% include image.html src="/files/2020/05/retroarch-joystick-detected-pt.jpg" %}

O RetroArch também é capaz de configurar automaticamente a maioria dos controles: você conecta seu controle e ele simplesmente funciona, como em um _videogame_ de verdade. Possivelmente, seu controle já está pronto pra uso e você já pode sair jogando.

Para navegar pelo menu do RetroArch, você pode usar o teclado, o _mouse_ ou o controle que acabou de conectar. Para usar o _mouse_, basta sair clicando onde deseja ir.

Para navegar pelo menu usando o teclado, use as **setas** para se mover pelas opções, **Enter** para avançar, **Backspace** para voltar e **Esc** para sair do RetroArch.

Para navegar pelo menu usando o controle, use as **setas** para se mover pelas opções, **O** (círculo) para avançar e **X** (cruz) para voltar.

Se quiser alterar o mapeamento do seu teclado ou controle para o RetroPad, vá em **Configurações**, depois em **Entrada**, e por fim em **Vínculos de entrada do usuário 1**:

{% include image.html src="/files/2020/05/retroarch-setup-1-pt.png" %}

No meu caso, o RetroArch já configurou meu controle:

{% include image.html src="/files/2020/05/retroarch-setup-2-pt.jpg" %}

Para alterar todos os botões de uma vez, escolha **Vincular todos**.

Vá apertando os botões no controle seguindo as orientações do RetroArch:

{% include image.html src="/files/2020/05/retroarch-setup-3-pt.jpg" %}

Ao final, todos os botões estarão configurados e você voltará para o menu.

Se você for jogar a dois, configure os controles do segundo jogador de forma semelhante.

## Iniciando um jogo

Para iniciar um jogo (abrir uma ROM) no RetroArch, vá no **Menu principal** e depois em **Carregar conteúdo**. Navegue até o local do jogo:

{% include image.html src="/files/2020/05/retroarch-open-rom-1-pt.jpg" %}

Selecione o arquivo do jogo:

{% include image.html src="/files/2020/05/retroarch-open-rom-2-pt.jpg" %}

No caso de um arquivo ZIP, o RetroArch oferece **Navegar no arquivo** ou **Carregar arquivo**:

{% include image.html src="/files/2020/05/retroarch-open-rom-3-pt.jpg" %}

Se o arquivo ZIP contém apenas um jogo (mais comum), você já pode carregá-lo.

Com base no arquivo selecionado, o RetroArch sugere alguns emuladores (núcleos):

{% include image.html src="/files/2020/05/retroarch-open-rom-4-pt.jpg" %}

Selecione o núcleo adequado. Como exemplo, estou carregando um jogo de Mega Drive. Por isso, vou selecionar o núcleo de Mega Drive, que no RetroArch é o emulador [BlastEm].

O jogo é iniciado:

{% include image.html src="/files/2020/05/retroarch-open-rom-5.png" %}

## Acessando o menu durante o jogo

Se no meio do jogo você precisar acessar o menu do RetroArch, tecle **F1**.

{% include image.html src="/files/2020/05/retroarch-game-menu-pt.jpg" %}

## Salvando e retomando

Uma vantagem do emulador em relação ao _videogame_ é que você pode salvar o estado do jogo a qualquer momento, assim como retomar a qualquer momento do ponto em que salvou.

Jogando no RetroArch, você pode salvar da mesma forma que no _videogame_ de verdade (usando o menu do próprio jogo), ou pode usar uma das memórias do RetroArch.

Geralmente, os _videogames_ oferecem apenas uma memória para salvar o jogo, de modo que só um jogo pode ser salvo. O RetroArch oferece dezenas de memórias (compartimentos).

Perceba que o menu do RetroArch oferece as opções **Salvar jogo** e **Carregar jogo salvo**, assim como **Compartimento de jogo salvo**, que permite mudar a memória que está em uso.

Se você precisar de uma dessas opções rapidamente durante o jogo, pode usar as teclas:

- **F2** para salvar o estado do jogo
- **F4** para retomar o estado que foi salvo antes
- **F7** para mudar para a memória seguinte (de 0 para 1, de 1 para 2, e assim por diante)
- **F6** para mudar para a memória anterior (de 2 para 1, de 1 para 0)

## Encerrando o jogo

Quando não quiser mais jogar, você pode simplesmente fechar a janela do RetroArch ou apertar **Esc**. Note que, se você não salvou o jogo, ao sair, seu avanço será perdido.

Se você quiser encerrar o jogo atual mas voltar para o menu principal do RetroArch, aperte **F1** para abrir o menu e use a opção **Fechar conteúdo**.

## Histórico de jogos

O RetroArch permite que você acesse facilmente jogos que já jogou no menu **Histórico**:

{% include image.html src="/files/2020/05/retroarch-history-pt.jpg" %}

## Jogos favoritos

Você também pode adicionar jogos que gosta mais ou que joga com frequência aos jogos favoritos, que é outra forma de acessá-los com facilidade. Há duas formas de fazer isso.

Durante o jogo, você pode abrir o menu do RetroArch e usar a opção **Adicionar aos favoritos**.

Ou você pode, a partir do menu **Histórico**, selecionar o jogo e usar essa mesma opção:

{% include image.html src="/files/2020/05/retroarch-favorites-1-pt.jpg" %}

Depois, para acessar seus jogos favoritos, use o menu **Favoritos**:

{% include image.html src="/files/2020/05/retroarch-favorites-2-pt.jpg" %}

## Requisitos de sistema

O RetroArch é, grosso modo, uma interface gráfica feita de menus. Por isso não possui requisitos mínimos e pode ser instalado em qualquer computador.

Mas cada emulador tem seus próprios requisitos. Portanto, quais _videogames_ seu computador é capaz de emular depende do seu _hardware_.

Pra você ter uma ideia, é possível usar o RetroArch no [Raspberry Pi 4][rpi4] de forma simples por meio da distribuição [RetroPie] (falaremos dela oportunamente). Você pode conferir as especificações técnicas do Raspberry Pi 4 no texto que escrevi sobre ele:

- [Primeiros passos no Raspberry Pi com NOOBS e Raspbian][rpi4]

O Raspberry Pi 4 possui um poder computacional considerável para um computador do tamanho de um cartão de crédito. Mas, ainda que seja mais simples que a maioria dos PCs (_desktops_ e _notebooks_) atuais, um Raspberry Pi 4 já consegue emular um PlayStation perfeitamente.

Qualquer computador hoje em dia deve ser capaz de emular _videogames_ da quinta geração, como o PlayStation (lançado em 1994) e o [Nintendo 64][n64] (1996), ou mais antigos, como o Super Nintendo (1990) e o Mega Drive (1988).

Para uma lista completa de _videogames_ classificados por gerações, consulte a Wikipedia:

- [Lista de consoles de videogame – Wikipédia, a enciclopédia livre][wikipedia]

A emulação de _videogames_ mais recentes e mais "pesados", como o [PlayStation 2][ps2] (2000), o [GameCube][gc] (2001), o [Nintendo DS][nds] (2004) e o [Nintendo Wii][wii] (2006), certamente vai exigir computadores mais poderosos. Nesses casos, convém consultar os requisitos nos _sites_ dos emuladores para saber se seu computador consegue emular esses _videogames_.

## Referências

- [Transforme seu computador num emulador de jogos com o RetroArch - Canaltech][canaltech]
- [Emulação: download e configuração do RetroArch - Memória BIT][memoriabit]
- [Libretro Docs][libretro-docs]
- [System requirements (analysis, work in progress) - Cores - Libretro Forums][libretro-forums]
- [RetroArch - openSUSE Wiki][opensuse-wiki]

[windows]:          https://www.microsoft.com/pt-br/windows/
[snes]:             https://pt.wikipedia.org/wiki/Super_Nintendo_Entertainment_System
[snes9x]:           {% post_url pt/2019-08-11-como-jogar-super-nintendo-no-opensuse-com-o-emulador-snes9x %}
[genesis]:          https://pt.wikipedia.org/wiki/Mega_Drive
[gens]:             http://www.gens.me/
[linux]:            https://www.vivaolinux.com.br/linux/
[retroarch]:        https://www.retroarch.com/
[libretro]:         http://www.libretro.com/
[kamarada-15.1]:    {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[opensuse]:         https://www.opensuse.org/
[google]:           https://www.google.com.br/
[yast]:             http://yast.opensuse.org/
[gnome]:            https://br.gnome.org/
[retropad]:         https://docs.libretro.com/guides/input-and-controls/
[dualshock]:        https://www.playstation.com/pt-br/explore/accessories/dualshock-4/
[playstation]:      https://pt.wikipedia.org/wiki/PlayStation_(console)
[blastem]:          https://www.retrodev.com/blastem/
[rpi4]:             {% post_url pt/2019-09-20-primeiros-passos-no-raspberry-pi-com-noobs-e-raspbian %}
[retropie]:         https://retropie.org.uk/
[n64]:              https://pt.wikipedia.org/wiki/Nintendo_64
[wikipedia]:        https://pt.wikipedia.org/wiki/Lista_de_consoles_de_videogame
[ps2]:              https://pt.wikipedia.org/wiki/PlayStation_2
[gc]:               https://pt.wikipedia.org/wiki/Nintendo_GameCube
[nds]:              https://pt.wikipedia.org/wiki/Nintendo_DS
[wii]:              https://pt.wikipedia.org/wiki/Wii
[canaltech]:        https://canaltech.com.br/games/transforme-seu-computador-numa-central-de-emulacao-de-videogames-com-o-retroarch/
[memoriabit]:       https://www.memoriabit.com.br/emulacao-download-e-configuracao-do-retroarch/
[libretro-docs]:    https://docs.libretro.com/
[libretro-forums]:  https://forums.libretro.com/t/system-requirements-analysis-work-in-progress/13746
[opensuse-wiki]:    https://en.opensuse.org/RetroArch
