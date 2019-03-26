---
date: 2019-03-26 01:00:00 GMT-3
image: '/files/2019/03/chromecast.jpg'
layout: post
published: true
nickname: 'chromecast'
title: 'Transmitindo do Linux para a TV com Chromecast'
excerpt: 'O Google Chromecast é um pequeno aparelho que, conectado à rede Wi-Fi e à TV por HDMI, permite que você transmita músicas, vídeos, páginas da Internet ou até mesmo toda a tela do seu computador, smartphone ou tablet para a TV. No computador, você pode usar o navegador Google Chrome ou o seu equivalente aberto, o Chromium, para fazer transmissões. Nessa página você vai aprender como fazer isso.'
---

{% include image.html src="/files/2019/03/chromecast.jpg" %}

O [Google Chromecast][chromecast] é um pequeno aparelho que, conectado à rede Wi-Fi e à TV por [HDMI], permite que você transmita músicas, vídeos, páginas da Internet ou até mesmo toda a tela do seu computador, *smartphone* ou *tablet* para a TV.

No computador, você pode usar o navegador [Google Chrome][chrome] ou o seu equivalente aberto, o [Chromium], para fazer transmissões. Nessa página você vai aprender como fazer isso.

## Configuração do Chromecast

Antes de começar, certifique-se que seu Chromecast esteja pronto para receber transmissões.

Não é possível fazer a configuração inicial do Chromecast usando um computador. Caso seu Chromecast ainda não esteja pronto, você deve usar *smartphone* ou *tablet* com [Android] ou [iOS] para configurá-lo.

Para mais informações, consulte a ajuda do Chromecast:

- [Configurar seu dispositivo Chromecast - Ajuda do Chromecast][chromecast-help-1]

Já foi possível configurar um Chromecast usando um computador. Essa possibilidade foi [descontinuada][9to5google] com o lançamento da [versão 72 do navegador Chrome][chrome-72] em [janeiro de 2019][chrome-72].

## Configuração do computador

Para transmitir de um computador para o Chromecast, ambos devem estar conectados à mesma rede (a rede doméstica, por exemplo).

Além disso, é necessário fazer algumas configurações no computador antes da primeira transmissão. Uma delas é liberar no *firewall* as portas usadas pelo Chromecast.

De acordo com [essa página][g3rt], o Chromecast usa as portas:

- 8008 e 8009 TCP; e
- 32768 a 61000 UDP.

Desde o lançamento do openSUSE Leap 15, o *firewall* padrão do openSUSE é o [**firewalld**][firewalld].

Para configurá-lo, inicie o aplicativo **Firewall**:

{% include image.html src="/files/2019/03/chromecast-01-pt.jpg" %}

(pode clicar em qualquer um dos dois ícones)

Será solicitada a senha do administrador (usuário *root*), você deve fornecê-la para continuar.

Mude o campo **Configuração** (na parte de cima) para **Permanente**:

{% include image.html src="/files/2019/03/chromecast-02-pt.jpg" %}

Logo abaixo, selecione a aba **Serviços** e clique no botão **Adicionar Serviço**.

Na caixa de diálogo **Configurações do serviço base**, informe em **Nome:** `chromecast` e clique em **OK**:

{% include image.html src="/files/2019/03/chromecast-03-pt.jpg" %}

De volta à tela principal, selecione a aba **Portas** e clique em **Adicionar**.

No campo **Porta / Intervalo de portas**, informe `8008-8009`:

{% include image.html src="/files/2019/03/chromecast-04-pt.jpg" %}

Em **Protocolo**, selecione **tcp**. Depois, clique em **OK**.

Adicione as portas UDP da mesma forma: clique em **Adicionar**. Em **Porta / Intervalo de portas**, informe `32768-61000`. Em **Protocolo**, selecione **udp**. Clique em **OK**.

Ao final, sua janela deve estar assim:

{% include image.html src="/files/2019/03/chromecast-05-pt.jpg" %}

Clique no menu **Opções** e depois, na opção **Recarregar Firewalld**:

{% include image.html src="/files/2019/03/chromecast-06-pt.jpg" %}

Selecione a aba **Zonas**. Depois, selecione a zona **home** (casa) e na aba **Serviços** (há duas abas **Serviços**, agora me refiro à de baixo), marque o serviço **chromecast**:

{% include image.html src="/files/2019/03/chromecast-07-pt.jpg" %}

Recarregue o *firewall* mais uma vez (menu **Opções**, opção **Recarregar Firewalld**).

Por fim, selecione a conexão Wi-Fi à esquerda (**wlan1**) e clique em **Mudar Zona**. Selecione a zona **home** e clique em **OK**:

{% include image.html src="/files/2019/03/chromecast-08-pt.jpg" %}

Com isso, você liberou no *firewall* conexões com dispositivos Chromecast em redes domésticas e informou que a rede atual é uma rede doméstica.

Você pode classificar diferentes redes em diferentes tipos: casa, trabalho, pública. Por padrão, todas as redes são tratadas como públicas e poucos serviços são liberados, mas não vou entrar em detalhes sobre *firewall* agora.

Se você usa o navegador aberto Chromium, há mais uma configuração que precisa fazer. Por padrão, ele vem configurado para não procurar por dispositivos Chromecast na rede.

Vamos mudar isso. Abra o navegador, acesse o endereço `chrome://flags/#load-media-router-component-extension` e selecione **Enabled** (habilitado):

{% include image.html src="/files/2019/03/chromecast-09.jpg" %}

Reinicie o navegador.

Agora estamos prontos para transmitir!

## Como transmitir

Navegue até o vídeo ou página que deseja transmitir, abra o menu do navegador e clique na opção **Transmitir**:

{% include image.html src="/files/2019/03/chromecast-10-pt.jpg" %}

Clique no **Chromecast**:

{% include image.html src="/files/2019/03/chromecast-11-pt.jpg" %}

Feito isso, você pode controlar a transmissão pelo navegador:

{% include image.html src="/files/2019/03/chromecast-12-pt.jpg" %}

Sua TV já deve ter som e imagem que vem do computador via Chromecast.

Clique em **Parar** quando não quiser mais transmitir.

**Dica:** para fixar o botão **Transmitir** ao lado da barra de endereços, clique com o botão direito nele e depois em **Sempre mostrar ícone**.

{% include image.html src="/files/2019/03/chromecast-13-pt.jpg" %}

Siga o Linux Kamarada para ver outras dicas de como usar seu computador com [Linux] em conjunto com seu Chromecast.

# Referências

- [Configurar seu dispositivo Chromecast - Ajuda do Chromecast][chromecast-help-1]
- [Google killing desktop Chromecast setup for Mac and PC with Chrome 72 - 9to5Google][9to5google]
- [Chromium - openSUSE Wiki][opensuse-wiki]
- [Documentation - HowTo - Add a Service - firewalld][firewalld-doc]
- [5 Useful Examples of firewall-cmd command - The Geek Diary][thegeekdiary]
- [How To Set Up a Firewall Using FirewallD on CentOS 7 - DigitalOcean][digitalocean]
- [Adicionar o botão Transmitir à barra de ferramentas do Chrome - Ajuda do Chromecast][chromecast-help-2]

[chromecast]:           https://store.google.com/product/chromecast
[HDMI]:                 https://pt.wikipedia.org/wiki/High-Definition_Multimedia_Interface
[chrome]:               https://www.google.com/chrome/
[chromium]:             https://www.chromium.org/Home
[android]:              https://www.android.com/
[ios]:                  https://www.apple.com/br/ios/
[chromecast-help-1]:    https://support.google.com/chromecast/answer/2998456?hl=pt-BR
[9to5google]:           https://9to5google.com/2018/12/30/chrome-72-killing-chromecast-setup-mac-windows/
[chrome-72]:            https://chromereleases.googleblog.com/2019/01/stable-channel-update-for-desktop.html
[g3rt]:                 https://blog.g3rt.nl/allow-google-chromecast-host-firewall-iptables.html
[firewalld]:            https://firewalld.org/
[linux]:                https://www.vivaolinux.com.br/linux/
[opensuse-wiki]:        https://en.opensuse.org/Chromium
[firewalld-doc]:        https://firewalld.org/documentation/howto/add-a-service.html
[thegeekdiary]:         https://www.thegeekdiary.com/5-useful-examples-of-firewall-cmd-command/
[digitalocean]:         https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7
[chromecast-help-2]:    https://support.google.com/chromecast/answer/7249696?hl=pt-BR
