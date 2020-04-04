---
date: '2020-04-03 01:00:00 GMT-3'
layout: post
title: 'Transmitindo do VLC para a TV com o Chromecast'
image: '/files/2020/04/vlc-chromecast.jpg'
nickname: 'vlc-chromecast'
---

O [VLC] é o reprodutor multimídia padrão do [Linux Kamarada][kamarada-15.1]. Já o elogiei algumas vezes aqui com relação a seu suporte a vários formatos multimídia e sua quantidade de recursos, ele é realmente inteligente! Dentre esses recursos, hoje mostrarei como transmitir vídeos ou músicas do VLC para a TV por meio do [Chromecast].

<!--more-->

{% include image.html src='/files/2020/04/vlc-chromecast.jpg' %}

O Chromecast é um pequeno aparelho criado pelo [Google] que permite transmitir conteúdos dos seus dispositivos para a TV via Wi-Fi. Ele transforma TVs comuns em _smart_ TVs e elimina a necessidade de cabos HDMI, que antes eram usados para conectar coisas à TV. Menos cabos significam menos bagunça e mais praticidade!

## Antes de começar

Certifique-se que seu Chromecast esteja pronto para receber transmissões.

Caso ainda não tenha feito a configuração inicial do Chromecast, você deve usar um _smartphone_ ou _tablet_ com [Android] ou [iOS] para configurá-lo. Se precisar de ajuda, consulte:

- [Configurar seu dispositivo Chromecast - Ajuda do Chromecast][chromecast-help]

No computador, você deve liberar no _firewall_ as portas usadas pelo Chromecast. Se ainda não fez isso, veja como fazer no _post_:

- [Transmitindo do Linux para a TV com Chromecast][chromecast-howto]

Além disso, você deve estar usando a versão 3.0 do VLC ou mais recente. [Foi essa versão que introduziu o suporte ao Chromecast][vlc-3.0]. O Linux Kamarada 15.1 já vem com o VLC 3.0.7.

Por fim, seu computador e o Chromecast devem estar conectados à mesma rede (a rede Wi-Fi de casa, por exemplo).

## Transmitindo do VLC

Atendidos os pré-requisitos, transmitir do VLC para a TV por meio do Chromecast é simples.

Para isso, inicie o VLC, abra o menu **Reprodução** e aponte para **Exibidor**:

{% include image.html src='/files/2020/04/vlc-chromecast-01-pt.jpg' %}

Provavelmente a opção **Local** estará selecionada, indicando que arquivos multimídia serão reproduzidos no próprio computador. O VLC deve buscar dispositivos compatíveis para transmissão na rede e listá-los. Se seu Chromecast aparece na lista, selecione-o.

Agora é só abrir o arquivo multimídia que deseja reproduzir usando o VLC:

{% include image.html src='/files/2020/04/vlc-chromecast-02-pt.jpg' %}

E esse arquivo será transmitido para a TV:

{% include image.html src='/files/2020/04/vlc-chromecast-03.jpg' %}

Você pode controlar a reprodução (pausar, retomar, parar, aumentar ou reduzir o volume, etc) usando o VLC no computador ou o controle remoto da televisão.

## Solução de problemas

Se seu Chromecast não é listado pelo VLC, que mostra apenas **Procurando**:

{% include image.html src='/files/2020/04/vlc-chromecast-04-pt.jpg' %}

Provavelmente seu _firewall_ está bloqueando a conexão entre o VLC e o Chromecast. Nesse caso, libere as portas usadas pelo Chromecast para que a conexão seja possível. Veja como fazer isso no _post_:

- [Transmitindo do Linux para a TV com Chromecast][chromecast-howto]

Pode ser também que seu roteador esteja bloqueando a descoberta de vizinhos na rede usando pacotes [_multicast_ DNS (mDNS)][mdns]. Se precisar de ajuda com isso, solicite ao seu provedor de Internet que verifique a configuração do seu roteador.

## Curiosidade

O filme exibido na imagem acima é o primeiro da trilogia [Caminandes], uma série de curtas-metragens feitos com o [Blender], um [_software_ livre][free-sw] para criação de conteúdo 3D. Assim como o Blender é [código aberto][opensource] (_opensource_), esses filmes também são abertos ([_open movies_][open-movies]): não só os filmes propriamente ditos estão disponíveis para _download_ (de forma completamente gratuita e legal), como também todos os arquivos usados para produzi-los.

Você pode baixar os filmes (e o código) da trilogia Caminandes em [www.caminandes.com][caminandes].

Você também pode conferir outras produções independentes do [Instituto Blender][blender-institute] em:

- [Open Projects - blender.org][blender-projects] (em inglês)

Divirta-se bastante!

## Referências

- [Aprenda a transmitir conteúdos para o Chromecast usando o VLC - TecMundo][tecmundo]
- [How To Use VLC With Chromecast On Linux - AddictiveTips][addictivetips]
- [How To Connect Your Chromecast To VLC? - Stream From VLC To Chromecast - Fossbytes][fossbytes]
- [Unable to find chromecast with "Render" Stuck on "Scanning" - The VideoLAN Forums][videolan-forums]

[vlc]:                  https://www.videolan.org/vlc/
[kamarada-15.1]:        {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[chromecast]:           https://store.google.com/br/product/chromecast
[google]:               https://www.google.com/
[android]:              https://www.android.com/
[ios]:                  https://www.apple.com/br/ios/
[chromecast-help]:      https://support.google.com/chromecast/answer/2998456?hl=pt-BR
[chromecast-howto]:     {% post_url pt/2019-03-26-transmitindo-do-linux-para-a-tv-com-chromecast %}
[vlc-3.0]:              https://www.videolan.org/vlc/releases/3.0.0.html
[mdns]:                 https://en.wikipedia.org/wiki/Multicast_DNS
[caminandes]:           http://www.caminandes.com/
[blender]:              https://www.blender.org/
[free-sw]:              https://www.gnu.org/philosophy/free-sw.pt-br.html
[opensource]:           https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto
[open-movies]:          https://en.wikipedia.org/wiki/Open-source_film
[blender-institute]:    https://www.blender.org/institute/
[blender-projects]:     https://www.blender.org/about/projects/
[tecmundo]:             https://www.tecmundo.com.br/produto/127203-aprenda-transmitir-conteudos-chromecast-usando-o-vlc.htm
[addictivetips]:        https://www.addictivetips.com/ubuntu-linux-tips/use-vlc-with-chromecast-on-linux/
[fossbytes]:            https://fossbytes.com/connect-vlc-chromecast-stream-from-pc/
[videolan-forums]:      https://forum.videolan.org/viewtopic.php?t=145455
