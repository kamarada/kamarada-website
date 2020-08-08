---
date: 2020-08-08 20:20:00 GMT-3
image: '/files/2020/04/kamarada-15.2.jpg'
layout: post
published: true
nickname: 'kamarada-15.2-rc'
title: 'Linux Kamarada libera versão candidata a lançamento (15.2 RC)'
---

{% include image.html src='/files/2020/04/kamarada-15.2.jpg' %}

O desenvolvimento está quase concluído: já está disponível para _[download]_ a versão candidata a lançamento do Linux Kamarada 15.2, baseado no [openSUSE Leap 15.2][leap-15.2].

Nesse momento, a página [Download] oferece duas versões para _download_:

- a versão [15.1 Final][kamarada-15.1], que você pode instalar no computador de casa ou do trabalho; e
- a versão 15.2 RC, que você pode testar, se quiser ajudar no desenvolvimento.

A forma mais fácil de testar o [Linux] é usando uma máquina virtual do [VirtualBox]:

- [VirtualBox: a forma mais fácil de conhecer o Linux sem precisar instalá-lo][virtualbox]

Mas, se você quiser testar o Linux Kamarada no seu próprio computador, a forma mais fácil de fazer isso é usando um _pendrive_ inicializável que você pode criar com o [Ventoy]:

- [Ventoy: crie um pendrive multiboot simplesmente copiando imagens ISO para ele][ventoy]

## O que é versão candidata a lançamento?

Uma versão **candidata a lançamento** (do inglês [_release candidate_][rc], por isso abreviada **RC**) é uma versão de um _software_ que está praticamente pronto para ser lançado no mercado. Essa versão pode se tornar a versão final (estável) do _software_, a não ser que algum defeito (_bug_) sério seja percebido a tempo de ser corrigido antes do lançamento final. Nesse estágio do desenvolvimento, todas as funcionalidades inicialmente planejadas já estão presentes e nenhum recurso novo é adicionado.

Uma versão RC pode ser considerada um tipo de versão [beta]. Portanto, _bugs_ são esperados. Se você encontrar um _bug_, por favor, me avise por um dos canais listados na página [Ajuda].

Claro, _bugs_ podem ser encontrados e corrigidos a qualquer momento, mas quanto antes, melhor!

## Novidades

Além das novidades listadas quando a versão [15.2 Beta][kamarada-15.2-beta] foi lançada, em abril, nessa nova versão 15.2 RC você vai encontrar as seguintes:

- o navegador padrão agora é o [Mozilla Firefox][firefox], na versão com suporte estendido ([ESR], _Extended Support Release_) distribuída pelo openSUSE Leap (o [Chromium], navegador padrão na versão anterior, foi mantido como alternativa, pelo menos por enquanto)
- o [cliente de área de trabalho remota][rdp-client] padrão agora é o [Remmina], o [Vinagre] foi removido porque não recebe manutenção há algum tempo
- recursos de [privacidade]: gerenciador de senhas [KeePassXC] e suporte à rede [Tor]
- programas atualizados e _bugs_ corrigidos
- novo logotipo e nova identidade visual (_branding_)

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/08/keepassxc-pt.png' caption='Gerenciador de senhas KeePassXC' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/08/tor-pt.jpg' caption='Rede de anonimato Tor' %}
    </div>
</div>

## Ficha técnica

Para que seja possível comparar esta versão com a anterior e as futuras, segue um resumo do _software_ contido no Linux Kamarada 15.2 RC 1 Build 42.1:

- _kernel_ Linux 5.3.18
- servidor gráfico X.Org 1.20.3 (sem Wayland)
- área de trabalho GNOME 3.34.4 acompanhada de seus principais aplicativos (_core apps_), como Arquivos (antigo Nautilus), Calculadora, Terminal, Editor de texto (gedit), Captura de tela e outros
- suíte de aplicativos de escritório LibreOffice 6.4.4
- navegador Mozilla Firefox ESR 78.1.0 (navegador padrão)
- navegador Chromium 84 (navegador alternativo disponível)
- reprodutor multimídia VLC 3.0.10
- cliente de _e-mail_ Evolution
- centro de controle do YaST
- Brasero
- CUPS 2.2.7
- Firewalld 0.5.5
- GParted 0.31.0
- HPLIP 3.19.12
- Java (OpenJDK) 11.0.7
- KeePassXC 2.6.0
- KolourPaint 20.04.2
- Linphone 4.1.1
- PDFsam Basic 4.1.4
- Pidgin 2.13.0
- Samba 4.11.11
- Tor 0.4.2
- Transmission 2.94
- Vim 8.0
- Wine 5.0
- jogos: Aisleriot (Paciência), Copas, Iagno (Reversi), Mahjongg, Minas (Campo minado), Nibbles (Cobras), Quadrapassel (Tetris), Sudoku, Xadrez

Essa lista não é exaustiva, mas já dá uma noção do que se encontra na distribuição.

## Sobre o Linux Kamarada

O Projeto Linux Kamarada visa divulgar e promover o Linux como um sistema operacional robusto, seguro, versátil e fácil de usar, adequado para o uso diário seja em casa, no trabalho ou no servidor. O projeto começou como um _blog_ sobre o [openSUSE], que é a distribuição Linux que eu uso há 8 anos (desde abril de 2012, na época eu instalei o openSUSE 11.4 e depois atualizei para o 12.1). Agora o projeto disponibiliza sua própria distribuição Linux, que traz vários programas apresentados no _blog_ já instalados e prontos para uso.

A distribuição Linux Kamarada é baseada no openSUSE Leap e se destina ao uso em _desktops_ em casa e no trabalho, seja em empresas privadas ou em órgãos públicos. Contém os programas essenciais a qualquer instalação do Linux e uma área de trabalho com visual moderno e agradável.

Não é recomendado usar o Linux Kamarada em servidores, embora seja possível. Nesse caso, a distribuição openSUSE é mais adequada, por fornecer uma opção de instalação própria para servidores, sem interface gráfica.

Se você ainda não conhecia a distribuição Linux Kamarada, leia o [_post_ de lançamento da versão 15.1][kamarada-15.1], a primeira versão, para mais informações.

Siga o Linux Kamarada nas [redes sociais](#about) para ser notificado sobre novas versões.

[download]:             /pt/download
[leap-15.2]:            {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[kamarada-15.1]:        {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[linux]:                https://www.vivaolinux.com.br/linux/
[virtualbox]:           {% post_url pt/2019-10-08-virtualbox-a-forma-mais-facil-de-conhecer-o-linux-sem-precisar-instala-lo %}
[ventoy]:               {% post_url pt/2020-07-29-ventoy-crie-pendrives-multiboot-simplesmente-copiando-imagens-iso-para-ele %}
[rc]:                   https://pt.wikipedia.org/wiki/Ciclo_de_vida_de_liberação_de_software#Release_candidate
[beta]:                 https://pt.wikipedia.org/wiki/Ciclo_de_vida_de_liberação_de_software#Beta
[ajuda]:                /pt/ajuda
[kamarada-15.2-beta]:   {% post_url pt/2020-04-14-linux-kamarada-15.2-beta-deixa-o-seu-desktop-ainda-mais-verde %}
[firefox]:              https://www.mozilla.org/pt-BR/firefox/new/
[esr]:                  https://www.mozilla.org/pt-BR/firefox/enterprise/
[chromium]:             https://www.chromium.org/
[rdp-client]:           {% post_url pt/2020-04-11-conexao-de-area-de-trabalho-remota-do-windows-no-linux-com-clientes-rdp %}
[remmina]:              {% post_url pt/2020-04-11-conexao-de-area-de-trabalho-remota-do-windows-no-linux-com-clientes-rdp %}#remmina
[vinagre]:              {% post_url pt/2020-04-11-conexao-de-area-de-trabalho-remota-do-windows-no-linux-com-clientes-rdp %}#vinagre
[privacidade]:          https://tab.uol.com.br/edicao/privacidade
[keepassxc]:            https://keepassxc.org/
[tor]:                  https://www.torproject.org/
[opensuse]:             https://www.opensuse.org/
