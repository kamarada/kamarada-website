---
date: '2020-04-14 11:45:00 GMT-3'
layout: post
title: 'Linux Kamarada 15.2 Beta deixa o seu desktop ainda mais verde'
image: '/files/2020/04/kamarada-15.2.jpg'
nickname: 'kamarada-15.2-beta'
---

{% include image.html src='/files/2020/04/kamarada-15.2.jpg' %}

Assim como a nave-mãe, a distribuição [openSUSE Leap][opensuse-leap], anunciou que a próxima versão [15.2 está na fase beta][leap-15.2-beta], a distribuição Linux Kamarada anuncia que já está disponível a versão 15.2 beta com o lançamento da _build_ (compilação) 22.1.

<!--more-->

A página [Download] foi atualizada e agora oferece as duas versões para _download_:

- a versão 15.1 Final, que você pode instalar no computador de casa ou do trabalho; e
- a versão 15.2 Beta, que você pode testar, se quiser ajudar no desenvolvimento.

Devo frisar que a versão 15.2 ainda está em fase [beta]. Portanto, é esperado que ela tenha _bugs_ e não esteja pronta para o uso diário. Se você encontrar um _bug_, por favor, reporte. Veja formas de entrar em contato na página [Ajuda][help].

Claro, _bugs_ podem ser encontrados e corrigidos a qualquer momento, mas quanto antes, melhor!

A forma mais fácil de testar o Linux é usando o [VirtualBox]. Para mais informações, leia:

- [VirtualBox: a forma mais fácil de conhecer o Linux sem precisar instalá-lo][virtualbox-howto]

Se você deseja instalar o Linux Kamarada no computador para usar no dia-a-dia, o recomendado é que você instale a versão 15.1 Final, que já está pronta, e depois, quando a versão 15.2 estiver pronta, atualize. Para mais informações sobre a versão 15.1 Final, leia:

- [Kamarada 15.1 vem com tudo que você precisa para usar o Linux no dia a dia][kamarada-15.1]

## Novidades

Por enquanto, a versão 15.2 se resume a:

- mesmos aplicativos da versão 15.1, porém atualizados, em novas versões, com novas funcionalidades e _bugs_ corrigidos;
- novos papéis de parede (ainda é possível usar os antigos ou o padrão do openSUSE, se você preferir); e
- um novo tema, na mesma linha do [Material Design][material] (o mesmo _design_ do [Android]), mas mais atual, mais consistente e com as [cores do openSUSE][opensuse-colors] (principalmente, verde).

{% include image.html src='/files/2020/04/kamarada-15.2-desktop-pt.jpg' caption='Área de trabalho GNOME' %}

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/04/kamarada-15.2-apps-pt.jpg' caption='GNOME core apps' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/04/kamarada-15.2-lock-pt.jpg' caption='Tela de bloqueio' %}
    </div>
</div>

## Ficha técnica

Para que seja possível comparar esta versão com a anterior e as futuras, segue um resumo do _software_ contido no Linux Kamarada 15.2 Beta Build 22.1:

- _kernel_ Linux 5.3.18
- servidor gráfico X.Org 1.20.3 (sem Wayland)
- área de trabalho GNOME 3.34.4 acompanhada de seus principais aplicativos (_core apps_), como Arquivos (antigo Nautilus), Calculadora, Terminal, Editor de texto (gedit), Captura de tela e outros
- suíte de aplicativos de escritório LibreOffice 6.4.2
- navegador Chromium 80
- reprodutor multimídia VLC 3.0.7
- cliente de _e-mail_ Evolution
- centro de controle do YaST
- Brasero
- CUPS 2.2.7
- Firewalld 0.5.5
- GParted 0.31.0
- HPLIP 3.18.6
- Java (OpenJDK) 11.0.6
- KolourPaint 19.12.3
- Linphone 4.1.1
- PDFsam Basic 4.1.2
- Pidgin 2.13.0
- Samba 4.11.5
- Transmission 2.94
- Vim 8.0
- Wine 3.7
- jogos: Aisleriot (Paciência), Copas, Iagno (Reversi), Mahjongg, Minas (Campo minado), Nibbles (Cobras), Quadrapassel (Tetris), Sudoku, Xadrez

Essa lista não é exaustiva, mas já dá uma noção do que se encontra na distribuição.

[opensuse-leap]:    https://www.opensuse.org/
[leap-15.2-beta]:   https://news.opensuse.org/2020/02/25/leap-15-2-enters-beta-builds-phase/
[download]:         /pt/download
[beta]:             https://pt.wikipedia.org/wiki/Ciclo_de_vida_de_liberação_de_software#Beta
[help]:             /pt/ajuda
[virtualbox]:       https://www.virtualbox.org/
[virtualbox-howto]: {% post_url pt/2019-10-08-virtualbox-a-forma-mais-facil-de-conhecer-o-linux-sem-precisar-instala-lo %}
[kamarada-15.1]:    {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[material]:         https://material.io/
[android]:          https://www.android.com/
[opensuse-colors]:  https://en.opensuse.org/Help:Colors
