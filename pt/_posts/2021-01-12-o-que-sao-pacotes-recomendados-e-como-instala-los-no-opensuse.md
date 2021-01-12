---
date: '2021-01-12 11:30:00 UTC-3'
image: /files/2021/01/recommended.jpg'
layout: post
title: 'O que são pacotes recomendados e como instalá-los no openSUSE'
excerpt: 'No Linux, pacotes podem ser entendidos como &quot;pedaços&quot; do software que compõe o sistema. Quando você quer adicionar uma funcionalidade ao sistema, geralmente você procura o pacote que a traz e o instala. Pacotes podem recomendar a instalação de outros pacotes. Nesse texto, você verá algumas dicas de como lidar com pacotes recomendados.'
---

{% include image.html src='/files/2021/01/recommended.jpg' %}

No [Linux], **pacotes** podem ser entendidos como "pedaços" do _software_ que compõe o sistema. Quando você quer adicionar uma funcionalidade ao sistema, geralmente você procura o pacote que a traz e o instala. Veja alguns exemplos do que pacotes podem trazer:

- **Programas:** o navegador [Mozilla Firefox][firefox] corresponde ao pacote [**MozillaFirefox**][softwareoo-1];
- **Traduções:** o pacote [**libreoffice-l10n-pt_BR**][softwareoo-2] traz a tradução do [LibreOffice] para o Português Brasileiro;
- **Documentações:** o pacote [**man-pages**][softwareoo-3] traz informações sobre vários comandos;
- **Personalizações:** o pacote [**MozillaFirefox-branding-openSUSE**][softwareoo-4] traz personalizações do navegador Firefox para o [openSUSE];
- **_Drivers_:** o pacote [**hplip**][softwareoo-5] adiciona suporte a [impressoras da HP][howto-hp-printer];
- **_Plugins_:** o pacote [**evince-plugin-xpsdocument**][softwareoo-6] faz com que o [Visualizador de documentos do GNOME (Evince)][evince] consiga abrir documentos XPS;
- **Bibliotecas:** o pacote [**libavcodec58**][softwareoo-7] traz _codecs_ para vários formatos multimídia;
- **Fontes:** o pacote [**google-roboto-fonts**][softwareoo-8] instala a família de fontes [Roboto]; e
- **Ícones:** o pacote [**papirus-icon-theme**][softwareoo-9] traz o tema de ícones [Papirus].

Provavelmente há mais exemplos de "categorias" de pacotes, mas acho que já deu pra entender a ideia. Todos os exemplos de pacotes listados acima são das distribuições do openSUSE e já vem instalados por padrão na distribuição [Linux Kamarada][kamarada-15.2].

## Pacotes requeridos

Há casos em que um pacote X traz um recurso que só funciona se também um pacote Y estiver instalado. Nesse caso, dizemos que o pacote X **depende** do (ou **requer** o) pacote Y ou que o pacote Y é uma **dependência** ou **requisito** do pacote X. Em casos assim, se você pedir ao sistema para instalar o pacote X, o pacote Y também será instalado. Ou, se por algum motivo não for possível instalar o pacote Y, o pacote X também não será instalado.

Por exemplo, o pacote [**inkscape**][softwareoo-10], que não vem instalado no Linux Kamarada, depende do pacote [**ImageMagick**][softwareoo-11]. Se você pedir para instalar o pacote **inkscape**, o pacote **ImageMagick** será instalado automaticamente, porque é uma dependência do pacote **inkscape**.

## Pacotes recomendados

Há casos em que um pacote X traz um recurso que pode funcionar melhor se o pacote Y também estiver instalado. O pacote Y não é necessário para que o pacote X funcione, mas acrescenta ou melhora alguma funcionalidade do pacote X. Nesse caso, dizemos que o pacote X **recomenda** o pacote Y ou que o pacote Y é **recomendado** pelo pacote X.

Geralmente, as traduções são pacotes recomendados dos pacotes dos programas. Por exemplo, o pacote **inkscape** recomenda o pacote [**inkscape-lang**][softwareoo-12]. O Inkscape funciona se a tradução não estiver instalada, você pode usá-lo com a interface não traduzida em inglês, mas para os usuários brasileiros imagino que seja mais confortável usá-lo no português.

Ao instalar um pacote, os pacotes recomendados podem ser instalados junto ou não.

A configuração padrão tanto do openSUSE quanto do Linux Kamarada é instalar tanto os pacotes requeridos quanto os recomendados. Provavelmente essa é a melhor configuração para a maioria das pessoas, já que melhora a experiência dos usuários.

Mas nem sempre esse é o caso. Veja alguns cenários em que instalar os pacotes recomendados pode não ser a melhor opção:

- se você está usando o Linux Kamarada em um _pendrive_, por exemplo, pode preferir instalar somente os pacotes requeridos para economizar espaço
- se você está usando um [LiveDVD][what-is-a-livecd-dvd-usb], alterações que você faz no sistema são armazenadas na memória RAM, nesse cenário a instalação de pacotes recomendados pode esgotar a memória e travar o sistema
- se você está usando o [openSUSE em um servidor][how-to-server], onde as prioridades são espaço em disco, desempenho e segurança, instalar apenas pacotes requeridos te dá mais controle sobre o que de fato está instalado e rodando no seu servidor

Por isso, preparei algumas dicas de como lidar com pacotes recomendados, veja a seguir.

## Mudando a configuração padrão

No openSUSE e no Linux Kamarada, pacotes podem ser instalados usando o gerenciador de pacotes **[zypper]**. Por exemplo, você poderia instalar o [Inkscape] com o comando:

```
# zypper in inkscape
```

Esse `in` é a abreviação de `install` (instalar, em inglês). O comando também poderia ser:

```
# zypper install inkscape
```

Outra opção é usar o módulo **Gerenciamento de software** do [Centro de controle do YaST][yast]:

{% include image.html src='/files/2021/01/recommended-01-pt.jpg' %}

Note que quando você marca o pacote **inkscape** para instalação, vários outros pacotes, tanto requeridos quanto recomendados, são marcados para instalação também.

Ambos usam nos bastidores a biblioteca [libzypp], cuja configuração fica no arquivo de texto `/etc/zypp/zypp.conf`. Se você ainda não alterou esse arquivo, ele tem um trecho assim:

```ini
##
## Whether only required packages are installed.
##
## Recommended packages, will not be regarded.
##
## Valid values: boolean
## Default value: false
##
# solver.onlyRequires = false
```

Você pode usar a opção `solver.onlyRequires` para definir se apenas pacotes requeridos devem ser instalados. Por padrão, ela está comentada (desabilitada) e seu valor é falso (`false`), ou seja, tanto pacotes requeridos quanto recomendados devem ser instalados.

Caso queira alterar esse comportamento padrão, descomente essa linha e defina se apenas pacotes requeridos devem ser instalados (`true`) ou se pacotes recomendados também devem ser instalados (`false`). Por exemplo:

```ini
##
## Whether only required packages are installed.
##
## Recommended packages, will not be regarded.
##
## Valid values: boolean
## Default value: false
##
solver.onlyRequires = true
```

Se prefere usar o YaST, você pode habilitar ou desabilitar a instalação de pacotes recomendados abrindo o menu **Dependências** e marcando ou desmarcando a opção **Instalar pacotes recomendados**:

{% include image.html src='/files/2021/01/recommended-02-pt.jpg' %}

Essa opção do YaST se aplica apenas ao YaST, não muda a configuração da libzypp.

## Mudando a configuração pontualmente

Se não quiser modificar o comportamento padrão do **zypper**, você pode usar os parâmetros `--recommends` ou `--no-recommends` para mudar o comportamento só nessa instalação.

Por exemplo, para instalar o Inkscape junto dos pacotes requeridos e recomendados:

```
# zypper in inkscape --recommends
```

Para instalar o Inkscape junto dos pacotes requeridos, mas não os recomendados:

```
# zypper in inkscape --no-recommends
```

Usando esses parâmetros, o **zypper** ignora a opção `solver.onlyRequires` do arquivo `/etc/zypp/zypp.conf` e adota o comportamento que você pedir na hora.

Esses parâmetros também podem ser usados com outros comandos do **zypper**, como o que busca atualizações (_updates_):

```
# zypper up --no-recommends
```

No caso do YaST, não há como mudar a configuração pontualmente, porque ele sempre lembra a última usada. O que você pode fazer é mudar a configuração, instalar o que precisa, e depois mudar de novo.

## Instalando os recomendados pelos já instalados

Se em algum momento você desabilitou a instalação de pacotes recomendados, depois mudou de ideia e agora quer instalar os pacotes recomendados que não foram instalados, pode usar o comando:

```
# zypper inr
```

Ou, se você preferir:

```
# zypper install-new-recommends
```

(instalar novos recomendados)

Esse comando pode ser útil para instalar traduções, se você acabou de mudar o idioma do sistema, ou instalar _drivers_, se você acabou de adicionar um componente de _hardware_.

No YaST, comando semelhante pode ser encontrado no menu **Extras**, clique em **Instalar todos os pacotes recomendados correspondentes**:

{% include image.html src='/files/2021/01/recommended-03-pt.jpg' %}

## Consultando quais pacotes são recomendados

Para consultar quais são os pacotes recomendados pelo pacote **inkscape**, por exemplo, usando o **zypper**, execute o comando:

```
# zypper info --recommends inkscape
```

Ele traz informações sobre o pacote **inkscape**, mostrando os pacotes recomendados ao final:

```
Informação para pacote inkscape:
--------------------------------
Repositório             : Main Update Repository
Nome                    : inkscape
Versão                  : 0.92.2-lp152.8.3.1
Arquitetura             : x86_64
Fornecedor              : openSUSE
Tamanho após instalação : 94,0 MiB
Instalado               : Não
Status                  : não instalado
Pacote fonte            : inkscape-0.92.2-lp152.8.3.1.src
Resumo                  : Vector Illustration Program
Descrição               :
    Inkscape is a vector illustration program for the GNOME desktop.
Recomenda               : [2]
    inkscape-lang
    python-lxml
```

No caso do YaST, selecione o pacote **inkscape** e consulte a aba **Dependências**:

{% include image.html src='/files/2021/01/recommended-04-pt.jpg' %}

[linux]:                    https://www.vivaolinux.com.br/linux/
[firefox]:                  https://www.mozilla.org/pt-BR/firefox/
[softwareoo-1]:             https://software.opensuse.org/package/MozillaFirefox
[softwareoo-2]:             https://software.opensuse.org/package/libreoffice-l10n-pt_BR
[libreoffice]:              https://pt-br.libreoffice.org/
[softwareoo-3]:             https://software.opensuse.org/package/man-pages
[softwareoo-4]:             https://software.opensuse.org/package/MozillaFirefox-branding-openSUSE
[opensuse]:                 https://www.opensuse.org/
[softwareoo-5]:             https://software.opensuse.org/package/hplip
[howto-hp-printer]:         {% post_url pt/2018-09-19-impressoras-hp-no-opensuse %}
[softwareoo-6]:             https://software.opensuse.org/package/evince-plugin-xpsdocument
[evince]:                   https://wiki.gnome.org/Apps/Evince
[softwareoo-7]:             https://software.opensuse.org/package/libavcodec58
[softwareoo-8]:             https://software.opensuse.org/package/google-roboto-fonts
[roboto]:                   https://fonts.google.com/specimen/Roboto
[softwareoo-9]:             https://software.opensuse.org/package/papirus-icon-theme
[papirus]:                  https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/
[kamarada-15.2]:            {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[softwareoo-10]:            https://software.opensuse.org/package/inkscape
[softwareoo-11]:            https://software.opensuse.org/package/ImageMagick
[softwareoo-12]:            https://software.opensuse.org/package/inkscape-lang
[what-is-a-livecd-dvd-usb]: {% post_url pt/2021-01-12-o-que-sao-pacotes-recomendados-e-como-instala-los-no-opensuse %}
[how-to-server]:            {% post_url pt/2017-01-15-levante-um-servidor-com-o-linux-opensuse-leap %}
[zypper]:                   https://pt.opensuse.org/Portal:Zypper
[inkscape]:                 https://inkscape.org/pt-br/
[yast]:                     http://yast.opensuse.org/
[libzypp]:                  https://en.opensuse.org/Portal:Libzypp
