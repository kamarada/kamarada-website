---
date: 2019-04-04 23:00:00 GMT-3
image: '/files/2019/04/gnome-extension-system-monitor-07-pt.jpg'
layout: post
published: true
nickname: 'gnome-extension-system-monitor'
title: 'Monitorando recursos do sistema com a extensão do GNOME System Monitor'
---

Você é do tipo que consome muita memória RAM? Navegador com várias guias abertas, ambiente de desenvolvimento, máquina virtual, emulador do [Android] são alguns exemplos de programas que podem drenar recursos do seu computador. Como monitorá-los para prevenir o travamento do computador? Se você usa o ambiente de trabalho [GNOME], pode instalar a extensão [System Monitor][system-monitor]. Como fazer isso é o que você verá nesse *post*.

<!--more-->

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-01.jpg" caption="A extensão do GNOME System Monitor" style="max-width: 450px;" %}

O ambiente GNOME foca na usabilidade e traz consigo apenas um conjunto essencial de recursos, em contrapartida apresenta um funcionamento bem estável. Mas você pode estendê-lo com [extensões][gnome-extensions], algumas bastante úteis. Caso ainda não conheça, visite:

- [GNOME Shell Extensions][gnome-extensions]

Hoje vou mostrar como instalar a extensão System Monitor (do inglês *monitor do sistema*), que fornece de forma gráfica, rápida e acessível diversas informações sobre o desempenho e consumo de recursos do sistema. Dentre elas, o uso da memória RAM.

## Instalando o suporte a extensões do GNOME

Para personalizar o GNOME usando extensões, você vai precisar do aplicativo [**Ajustes**][tweaks] (*Tweaks*, não confundir com o aplicativo [**Configurações**][settings], *Settings*). Se você usa a distribuição [openSUSE] com o ambiente GNOME, esse aplicativo já vem instalado por padrão. Mas caso precise, ele é fornecido pelo pacote [gnome-tweak-tool].

Há também algumas extensões que já fazem parte da própria distribuição e são fornecidas pelo pacote [gnome-shell-extensions-common].

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-02-pt.jpg" caption="O aplicativo Ajustes mostrando as extensões instaladas" %}

Além disso, se você acessou o *site* [GNOME Shell Extensions][gnome-extensions], talvez tenha visto o aviso:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-03.jpg" %}

*To control GNOME Shell extensions using this site you must install GNOME Shell integration that consists of two parts: browser extension and native host messaging application.*

(para controlar as extensões do GNOME Shell usando este *site* você deve instalar a integração do GNOME Shell que consiste em duas partes: extensão do navegador e aplicativo de mensagens nativas)

Quanto à extensão do navegador, você pode instalá-la clicando no *link* apresentado pela própria mensagem, ou clicar em um dos *links* a seguir, conforme o navegador que você usa:

- para [Google Chrome][chrome], [Chromium], [Opera] e [Vivaldi]: visite a [Chrome Web Store][chrome-web-store];
- para [Mozilla Firefox][firefox]: visite o *site* [Mozilla Addons][mozilla-addons].

A segunda parte, que é o aplicativo, também é fornecida pela própria distribuição por meio do pacote [chrome-gnome-shell].

Para instalar todos os pacotes necessários de uma vez só, execute o comando:

```
# zypper in gnome-tweak-tool gnome-shell-extensions-common chrome-gnome-shell typelib-1_0-GTop-2_0 typelib-1_0-NetworkManager-1_0
```

(já que o objetivo é instalar tudo de uma vez só, incluí os pacotes [typelib-1_0-GTop-2_0][typelib1] e [typelib-1_0-NetworkManager-1_0][typelib2], que são solicitados pela extensão System Monitor)

Com tudo instalado, reinicie o computador (talvez seja suficiente fazer *logout* e *login*).

Abra o navegador e visite mais uma vez o *site* [GNOME Shell Extensions][gnome-extensions].

Perceba que dessa vez o aviso não aparece.

Agora você está pronto para instalar e usar extensões do GNOME!

## Instalando a extensão System monitor

Para conseguir monitorar os recursos do sistema, a extensão System Monitor requer que os pacotes [typelib-1_0-GTop-2_0][typelib1] e [typelib-1_0-NetworkManager-1_0][typelib2] estejam instalados. Já fizemos essa instalação no passo anterior.

Acesse a página da extensão:

- [system-monitor - GNOME Shell Extensions][system-monitor]

E clique na chave de liga e desliga:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-04.jpg" %}

Confirme o *download* e instalação da extensão clicando em **Instalar**:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-05-pt.jpg" %}

Após a instalação, já é possível ver medidores de recursos na barra do topo do GNOME:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-06-pt.jpg" %}

Na sequência, eles mostram:

- consumo de processador (CPU),
- consumo de memória, e
- tráfego de rede.

Clique nos medidores para ver mais informações:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-07-pt.jpg" %}

Clique em **Preferências** para personalizar o que é exibido e como é exibido:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-08-pt.jpg" %}

Eu costumo remover o monitor de tráfego de rede, deixando apenas CPU e memória.

Caso queira desabilitar ou remover essa extensão (assim como qualquer extensão do GNOME), utilize o aplicativo **Ajustes**.

Agora você pode monitorar a memória RAM em uso e não ser pego de surpresa: quando houver pouca memória disponível, feche programas, para que o computador não trave.

Faça bom proveito!

## Referências

- [How to Use GNOME Shell Extensions - Complete Guide - It's FOSS][itsfoss]
- [Projects/GnomeShellIntegrationForChrome/Installation - GNOME Wiki!][gnome-wiki]
- [paradoxxxzero/gnome-shell-system-monitor-applet - GitHub][github]

[android]:                          https://www.android.com/
[gnome]:                            https://www.gnome.org/
[system-monitor]:                   https://extensions.gnome.org/extension/120/system-monitor/
[gnome-extensions]:                 https://extensions.gnome.org/
[typelib1]:                         https://software.opensuse.org/package/typelib-1_0-GTop-2_0
[typelib2]:                         https://software.opensuse.org/package/typelib-1_0-NetworkManager-1_0
[tweaks]:                           https://wiki.gnome.org/Apps/Tweaks
[settings]:                         https://wiki.gnome.org/Design/Apps/Settings
[opensuse]:                         https://www.opensuse.org/
[gnome-tweak-tool]:                 https://software.opensuse.org/package/gnome-tweak-tool
[gnome-shell-extensions-common]:    https://software.opensuse.org/package/gnome-shell-extensions-common
[chrome-gnome-shell]:               https://software.opensuse.org/package/chrome-gnome-shell
[chrome]:                           https://www.google.com/chrome/
[chromium]:                         https://www.chromium.org/Home
[opera]:                            https://www.opera.com/pt-br/
[vivaldi]:                          https://vivaldi.com/
[chrome-web-store]:                 https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep
[firefox]:                          https://www.mozilla.org/pt-BR/
[mozilla-addons]:                   https://addons.mozilla.org/pt-BR/firefox/addon/gnome-shell-integration/
[itsfoss]:                          https://itsfoss.com/gnome-shell-extensions/
[gnome-wiki]:                       https://wiki.gnome.org/Projects/GnomeShellIntegrationForChrome/Installation
[github]:                           https://github.com/paradoxxxzero/gnome-shell-system-monitor-applet
