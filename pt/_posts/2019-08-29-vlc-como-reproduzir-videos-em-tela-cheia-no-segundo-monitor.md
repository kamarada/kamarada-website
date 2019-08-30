---
date: 2019-08-30 01:00:00 GMT-3
image: '/files/2019/08/vlc-dual-monitor.jpg'
layout: post
published: true
nickname: 'vlc-dual-monitor'
title: 'VLC: como reproduzir vídeos em tela cheia no segundo monitor'
---

Você conectou seu *notebook* a um projetor e deseja reproduzir um vídeo no projetor, mas manter os controles no *notebook*? Veja nesse _post_ como fazer isso.

No _post_ sobre [20 aplicativos que você pode usar do mesmo jeito no Linux e no Windows][apps-linux-windows], eu disse que o [VLC] era o "canivete suíço" multimídia. O título é merecido: esse reprodutor multimídia é cheio de funcionalidades e permite configurar cada detalhe.

Exibir apenas o vídeo para a plateia e ocultar os controles dá um ar mais profissional à sua apresentação.

## Juntando as telas

Primeiro, certifique-se de que o *notebook* e o projetor exibem imagens diferentes, e não a mesma imagem. Você deve juntar as telas, não espelhá-las.

Como fazer isso, depende do ambiente que você usa. Como eu uso [GNOME], vou falar dele.

Clique no **menu do sistema**, no canto superior direito da tela, e clique no ícone das **Configurações**:

{% include image.html src="/files/2019/08/gnome-settings-pt.jpg" %}

Na lista à esquerda, selecione **Dispositivos** (penúltima opção) e em seguida, **Telas**:

{% include image.html src="/files/2019/08/gnome-dual-monitor-01-pt.jpg" %}

Observe que as telas são identificadas por números. No meu caso, a tela do *notebook* foi identificada como 1 e a tela do projetor como 2:

{% include image.html src="/files/2019/08/gnome-dual-monitor-02-pt.jpg" %}

Em **Modo da tela**, selecione **Juntar as telas**.

Em **Tela primária**, selecione **Tela embutida** (a tela do *notebook*).

Se essas configurações já estavam assim, tudo bem. É só fechar a janela. Se não, caso você tenha alterado as configurações, aparecerá o botão **Aplicar** no canto superior direito. Clique nesse botão. Em seguida, na mensagem que aparece, clique em **Manter alterações**:

{% include image.html src="/files/2019/08/gnome-dual-monitor-03-pt.jpg" %}

## Configurando o VLC

Abra o VLC. Clique no menu **Ferramentas** e depois, na opção **Preferências**:

{% include image.html src="/files/2019/08/vlc-settings-pt.jpg" %}

A caixa de diálogo já abre com a guia **Interface** selecionada. Nessa guia, desative a opção **Embutir o vídeo na interface**:

{% include image.html src="/files/2019/08/vlc-dual-monitor-01-pt.jpg" %}

Depois, selecione a guia **Vídeo**. Ative a opção **Tela inteira**, desative a opção **Decorações da janela** e em **Dispositivo de vídeo de Tela inteira**, selecione o projetor (no meu caso, ele aparece como **HDMI-1**):

{% include image.html src="/files/2019/08/vlc-dual-monitor-02-pt.jpg" %}

Por fim, clique em **Salvar**.

## Reproduzindo o vídeo

Prontinho! Agora é só reproduzir o vídeo. Os controles aparecerão no *notebook* e o vídeo, no projetor:

{% include image.html src="/files/2019/08/vlc-dual-monitor.jpg" %}

## Referência

- [VLC 2.0.2 - Dual Monitor Full-Screen Playback In Windows - Inlet Technologies][inlet]

[apps-linux-windows]:   {%post_url pt/2019-07-05-18-aplicativos-que-voce-pode-usar-do-mesmo-jeito-no-linux-e-no-windows-parte-1 %}
[vlc]:                  https://www.videolan.org/vlc/
[gnome]:                https://br.gnome.org/
[inlet]:                http://inlet.co.nz/support/tutorials/microsoft/19-vlc-2-0-2-dual-monitor-full-screen-playback-in-windows
