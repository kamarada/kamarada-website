---
date: 2019-05-10 11:30:00 GMT-3
image: '/files/2019/05/gnome-extension-user-themes-04-pt.jpg'
layout: post
published: true
nickname: 'gnome-extension-user-themes'
title: 'Personalize o GNOME com temas'
---

Você gostaria de usar um *desktop* estiloso? A maioria das pessoas não se importa em usar o tema padrão da distribuição Linux, mas algumas levam personalização realmente a sério. O ambiente de trabalho [GNOME], com seu foco em prover apenas as funcionalidades mais essenciais, parece não oferecer opções para personalizar a aparência. Mas na verdade elas estão meio que escondidas no *app* [**Ajustes**][tweaks] e dependem da instalação de uma [extensão do GNOME][gnome-extensions], a extensão [User Themes][user-themes] (do inglês *temas do usuário*).

Veja como você pode deixar seu ambiente de trabalho GNOME realmente estiloso!

<!--more-->

{% include image.html src="/files/2016/10/sw-updates.jpg" style="max-width: 300px;" caption="Imagem obtida do site [OMG! Ubuntu!](http://www.omgubuntu.co.uk/2016/10/why-use-linux-answer-three-short-words)" %}

## Instalando o suporte a extensões do GNOME

Antes de personalizar o GNOME usando extensões, você precisa instalar algumas coisas, caso ainda não tenha feito. Eu expliquei isso em um *post* anterior:

- [Monitorando recursos do sistema com a extensão do GNOME System Monitor][system-monitor]

Portanto, aqui vou apenas resumir o que você precisa instalar. Caso precise de mais informações, leia aquele *post*.

Execute o seguinte comando para instalar os pacotes necessários:

```
# zypper in gnome-tweak-tool gnome-shell-extensions-common chrome-gnome-shell
```

E instale a extensão do navegador para integração com o GNOME clicando em um dos *links* a seguir, conforme o navegador que você usa:

- para [Google Chrome][chrome], [Chromium], [Opera] e [Vivaldi]: visite a [Chrome Web Store][chrome-web-store];
- para [Mozilla Firefox][firefox]: visite o *site* [Mozilla Addons][mozilla-addons].

Com tudo instalado, reinicie o computador (talvez seja suficiente fazer *logout* e *login*).

## Instalando a extensão User Themes

No [*post* anterior][system-monitor], eu também expliquei como instalar extensões do GNOME. Nele, eu usei como exemplo a extensão [System Monitor][system-monitor]. Hoje, vamos instalar a extensão [User Themes][user-themes].

Abra o navegador e acesse a página da extensão:

- [User Themes - GNOME Shell Extensions][user-themes]

Clique na chave de liga e desliga:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-01.jpg" %}

Confirme que você quer baixar e instalar a extensão clicando em **Instalar** na caixa de diálogo que aparece.

## Baixando e instalando temas

Você pode encontrar muitos temas interessantes para o GNOME, temas para a biblioteca GTK3 e artes de todo tipo para estilizar seu *desktop* no *site* [Gnome-look.org][gnome-look].

Como exemplo, vou usar o tema [Yaru-Colors][yaru-colors], que é um *fork* do [Yaru], tema padrão do [Ubuntu], portado para várias cores diferentes.

Vejamos como podemos deixar nosso [openSUSE] parecendo um Ubuntu verde!

Acesse a página do tema:

- [Yaru-Colors - Gnome-look.org][yaru-colors]

Selecione a guia **Files** (arquivos) e clique no botão **Download** na linha do arquivo `Yaru-MATE-1.0-manual.tar.gz`:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-02.jpg" %}

Agora você tem um arquivo chamado `Yaru-MATE-1.0-manual.tar.gz` na sua pasta `Downloads`.

Usando o *app* [**Terminal**][terminal], extraia o conteúdo do arquivo e copie os devidos arquivos para seus devidos lugares:

```
$ cd ~/Downloads
$ tar -xzvf Yaru-MATE-1.0-manual.tar.gz
$ mkdir -p ~/.local/share/{icons,themes}
$ cp -r Yaru-MATE/Icons/Yaru-Mate ~/.local/share/icons/
$ cp -r Yaru-MATE/Theme/* ~/.local/share/themes/
```

As instruções de instalação podem variar de tema para tema. Se você ler a descrição do tema Yaru-Colors em sua página no [Gnome-look.org][yaru-colors], verá que ele fornece um *script* de instalação. Eu optei pela instalação manual apenas para ilustrar como a instalação de um tema funciona.

## Aplicando temas

Com o tema baixado e instalado, agora podemos aplicá-lo.

Abra o *app* **Ajustes**.

Bem na primeira seção, **Aparência**, selecione **Yaru-MATE** como tema do **Shell**:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-03-pt.jpg" %}

Também mude os temas de **Aplicativos** e **Ícones** para **Yaru-MATE**.

Observe que as mudanças são aplicadas imediatamente conforme você muda as opções.

Agora seu *desktop* deve estar assim:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-04-pt.jpg" %}

## Obtendo temas dos repositórios do openSUSE

Alguns temas são disponibilizados na forma de pacotes nos [repositórios do openSUSE][repos]. Por exemplo, o tema para GTK [Adapta] e o tema de ícones [Papirus]. Ambos são baseados no [Material Design][material] do [Google], lembram o [Android] e são os temas usados por padrão na distribuição Linux [Manjaro].

Vejamos como podemos deixar nosso [openSUSE] parecendo o Manjaro! (ou o Android)

Instale os pacotes dos temas Adapta e Papirus:

```
# zypper in gnome-shell-theme-adapta gtk2-metatheme-adapta gtk3-metatheme-adapta gedit-theme-adapta papirus-icon-theme
```

Abra o *app* **Ajustes**. Na seção **Aparência**, selecione:

- **Adapta** como temas dos **Aplicativos** e do **Shell**; e
- **Papirus** como tema dos **Ícones**.

Agora seu *desktop* deve estar assim:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-05-pt.jpg" %}

Olhando os temas disponíveis no *site* [Gnome-look.org][gnome-look], você gosta de algum? Deixe sua indicação nos comentários!

[gnome]:            https://www.gnome.org/
[tweaks]:           https://wiki.gnome.org/Apps/Tweaks
[gnome-extensions]: https://extensions.gnome.org/
[user-themes]:      https://extensions.gnome.org/extension/19/user-themes/
[system-monitor]:   {%post_url pt/2019-04-04-monitorando-recursos-do-sistema-com-a-extensao-do-gnome-system-monitor %}
[chrome]:           https://www.google.com/chrome/
[chromium]:         https://www.chromium.org/Home
[opera]:            https://www.opera.com/
[vivaldi]:          https://vivaldi.com/
[chrome-web-store]: https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep
[firefox]:          https://www.mozilla.org/
[mozilla-addons]:   https://addons.mozilla.org/firefox/addon/gnome-shell-integration/
[gnome-look]:       https://www.gnome-look.org/
[yaru-colors]:      https://www.gnome-look.org/p/1299514/
[ubuntu]:           https://www.ubuntu.com/
[yaru]:             https://github.com/ubuntu/yaru
[opensuse]:         https://www.opensuse.org/
[terminal]:         https://wiki.gnome.org/Apps/Terminal
[repos]:            https://en.opensuse.org/Package_repositories
[adapta]:           https://github.com/adapta-project/adapta-gtk-theme
[papirus]:          https://git.io/papirus-icon-theme
[google]:           https://www.google.com.br/
[material]:         https://material.io/
[android]:          https://www.android.com/
[manjaro]:          https://manjaro.org/
