---
date: '2021-03-05 11:50:00 GMT-3'
image: '/files/2021/03/tuxguitar-pt.jpg'
layout: post
nickname: 'tuxguitar'
title: 'TuxGuitar: já pensou aprender guitarra com ajuda do Linux?'
---

{% include image.html src='/files/2021/03/tuxguitar-pt.jpg' %}

Se você já toca, ou quer aprender a tocar, algum instrumento musical, especialmente se for violão ou guitarra, não deixe de dar uma conferida no [TuxGuitar], um editor de tablaturas e partituras gratuito, [livre][free-sw] e [multiplataforma]. Com ele, você pode escrever partituras ou escutar a música que está em uma partitura já existente, estudar escalas, afinar seu instrumento, dentre outros recursos. O TuxGuitar foca principalmente em violão e guitarra, mas permite montar arranjos de músicas também com outros instrumentos, como baixo e bateria.

O TuxGuitar é compatível com outros aplicativos do mesmo gênero, como o [Guitar Pro][guitar-pro], que também é um editor de tablaturas e partituras bastante conhecido, mas é pago (é necessário comprar uma licença para usar) e só está disponível para [Windows] e [macOS]. O TuxGuitar consegue abrir partituras do Guitar Pro, arquivos com extensão `gp3`, `gp4` ou `gp5`.

O TuxGuitar está disponível para Windows, macOS, [Linux] e [FreeBSD].

A seguir, você verá como instalar e usar o TuxGuitar na distribuição [Linux Kamarada][kamarada-15.2]. Você pode seguir as mesmas instruções se usa uma das [distribuições do Projeto openSUSE][leap-tumbleweed].

## Instalando o TuxGuitar

Você pode instalar o TuxGuitar a partir dos [repositórios oficiais do openSUSE][repos] de duas formas: pela interface gráfica, usando a instalação com 1 clique (*1-Click Install*), ou pelo terminal, usando o gerenciador de pacotes **zypper**. Escolha a que prefere.

Para instalar o TuxGuitar usando a instalação com 1 clique, clique no botão abaixo:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/tuxguitar.ymp'><i class='fas fa-bolt'></i> Instalação com 1 clique</a></p>

Para instalar o TuxGuitar usando o terminal, execute o comando a seguir:

```
# zypper in tuxguitar
```

Se você usa o [FlatPak], outra opção é instalar o TuxGuitar a partir do [Flathub]:

```
# flatpak install ar.com.tuxguitar.TuxGuitar
```

Logo após a instalação, você já deve ser capaz de iniciar o TuxGuitar.

## Iniciando o TuxGuitar

Para iniciar o TuxGuitar, se você usa a área de trabalho [GNOME], clique em **Atividades**, no canto superior esquerdo da tela, digite `tuxguitar` e clique no ícone correspondente:

{% include image.html src='/files/2021/03/tuxguitar-01-pt.jpg' %}

## A interface do TuxGuitar

A interface do TuxGuitar é bem enxuta, simples e intuitiva:

{% include image.html src='/files/2021/03/tuxguitar-02-pt.jpg' %}

Na parte de cima, temos menus e barras de ferramentas, com ícones para diversas ações, como criar uma nova partitura, abrir, salvar ou imprimir uma partitura, desfazer, refazer e controles de reprodução ao final.

À esquerda, temos elementos para escrever partituras.

À direita, temos a partitura e a tablatura. No menu **Visualizar**, você consegue selecionar se deseja exibir apenas a partitura, apenas a tablatura ou ambas:

{% include image.html src='/files/2021/03/tuxguitar-03-pt.jpg' %}

Na parte de baixo, temos a lista de pistas (_tracks_), que são os instrumentos que compõem a música (cada um tem sua partitura), e a representação dos compassos da partitura como quadrados. Essa representação permite avançar rapidamente o cursor pela partitura. Clique em um quadrado para deslocar o cursor para o compasso correspondente na partitura.

{% include image.html src='/files/2021/03/tuxguitar-04-pt.jpg' caption='Exemplo: clicar no quinto quadrado faz o cursor ir para o quinto compasso na partitura' %}

A música de demonstração que vem com o programa tem apenas um instrumento. Voltaremos a falar dessa parte da interface mais adiante.

## Baixando, abrindo e tocando uma partitura

Você pode baixar partituras de _sites_ de cifras. Um dos mais conhecidos aqui no Brasil é o [Cifra Club][cifraclub]. Entre nesse _site_, pesquise a música que você quer aprender e clique no ícone do Guitar Pro (`gp`) para baixar a partitura:

{% include image.html src='/files/2021/03/tuxguitar-cifraclub.jpg' %}

Aqui, vou usar como exemplo a música [Lanterna dos Afogados][lanterna], da banda [Os Paralamas do Sucesso][paralamas].

Quando o _download_ terminar, abra o arquivo. O sistema já deve abri-lo com o TuxGuitar:

{% include image.html src='/files/2021/03/tuxguitar-05-pt.jpg' %}

Selecione a **Guitarra** na lista de instrumentos, clique no botão **Iniciar** (_play_) e veja a mágica acontecendo.

## Imprimindo uma partitura

Se você preferir imprimir a partitura para estudar sem ser no computador, abra o menu **Arquivo** e clique em **Imprimir**.

{% include image.html src='/files/2021/03/tuxguitar-06-pt.jpg' %}

Selecione qual instrumento deve ter sua partitura impressa. Você pode selecionar também determinados compassos para impressão (essa tela chama de **Faixa**, por padrão todos os compassos serão impressos). Pode escolher imprimir só a tablatura, só a partitura ou ambas. Pode ativar ou desativar a exibição dos nomes e figuras dos acordes (são as opções não traduzidas: **Show Chord Names** e **Show Chord Diagrams**, respectivamente).

Eu recomendo visualizar a impressão ou imprimir para um arquivo antes de imprimir propriamente para uma folha de papel, para se certificar de estar imprimindo o que deseja.

Para visualizar a impressão, abra o menu **Arquivo** e clique em **Visualizar Impressão**. As mesmas opções acima são apresentadas.

{% include image.html src='/files/2021/03/tuxguitar-07-pt.jpg' %}

## Escrevendo uma partitura

Como escrever uma partitura seria assunto para um tutorial inteiro. E eu uso o TuxGuitar só para abrir partituras, não sei como escrevê-las. Felizmente, há [um vídeo no canal Diolinux][diolinux] onde uma banda que já usa o TuxGuitar para escrever partituras explica como fazer. Se você deseja usar o TuxGuitar para escrever partituras, recomendo que veja esse vídeo:

{% include youtube.html id="60mKlVxj1Dw" %}

[tuxguitar]:        http://tuxguitar.com.ar/
[free-sw]:          https://www.gnu.org/philosophy/free-sw.pt-br.html
[multiplataforma]:  https://pt.wikipedia.org/wiki/Multiplataforma
[guitar-pro]:       https://www.guitar-pro.com/
[windows]:          https://www.microsoft.com/pt-br/windows/
[macos]:            https://www.apple.com/br/macos/
[linux]:            https://www.vivaolinux.com.br/linux/
[freebsd]:          https://www.freebsd.org/
[kamarada-15.2]:    {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[leap-tumbleweed]:  {% post_url pt/2020-12-06-opensuse-leap-e-opensuse-tumbleweed-qual-e-a-diferenca %}
[repos]:            https://en.opensuse.org/Package_repositories#Official_Repositories
[flatpak]:          https://flatpak.org/
[flathub]:          https://flathub.org/apps/details/ar.com.tuxguitar.TuxGuitar
[gnome]:            https://br.gnome.org/
[cifraclub]:        https://www.cifraclub.com.br/
[lanterna]:         https://www.cifraclub.com.br/os-paralamas-do-sucesso/lanterna-dos-afogados/guitarpro/
[paralamas]:        http://www.osparalamas.com.br/
[diolinux]:         https://www.youtube.com/watch?v=60mKlVxj1Dw
