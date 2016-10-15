---
date: 2015-11-04 10:00:00
excerpt: "A espera acabou e uma nova era começa para o openSUSE. Colaboradores, amigos e fãs agora podem baixar a primeira distribuição Linux híbrida: o openSUSE Leap 42.1. Desde o lançamento da última versão, há exatamente um ano, o openSUSE transformou seu processo de desenvolvimento para criar um tipo completamente novo de distribuição Linux híbrida, batizada de openSUSE Leap."
image: "/files/2015/11/Leap-green.png"
layout: post
nickname: "opensuse-421-release-announcement"
title: "openSUSE Leap 42.1 se torna a primeira distribuição Linux híbrida"
---

## Ligando comunidades e empresas

A espera acabou e uma nova era começa para o openSUSE! Colaboradores, amigos e fãs agora podem baixar a primeira distribuição Linux híbrida: o openSUSE Leap 42.1. Desde o lançamento da última versão, há exatamente um ano, o openSUSE mudou seu processo de desenvolvimento para criar um tipo completamente novo de distribuição Linux híbrida, batizada de **openSUSE Leap**.

{% include image.html src="/files/2015/11/Leap-green.png" style="max-width: 150px;" %}

A versão 42.1 é a primeira versão do openSUSE Leap que utiliza código do SUSE Linux Enterprise (SLE), oferecendo um nível de estabilidade que se provará inalcançável por outras distribuições Linux. Aliar o desenvolvimento comunitário à confiabilidade empresarial provê maior coesão ao projeto e às atualizações de seus colaboradores. O openSUSE Leap se beneficiará do empenho empresarial em manutenção e compartilhará alguns pacotes e atualizações com o SLE, diferente de versões anteriores do openSUSE que usavam fluxos de manutenção separados.

Os desenvolvedores da comunidade provêm um nivel igual de contribuição ao Leap e aos projetos originais (*upstream*), o que reduz a distância entre os pacotes maduros e os pacotes mais novos encontrados na outra distribuição do openSUSE, o Tumbleweed.

Já que houve uma grande mudança em relação às versões anteriores, um novo número de versão e uma nova estratégia de nomeação foram adotados para refletir a mudança. Os fontes do SLE vêm do SLE 12 Service Pack 1 (SP1), que será lançado em breve. A estratégia de nomeação é SLE 12 SP 1 (ou 12.1) + 30 = openSUSE Leap 42.1. Muitos perguntaram porque 42, mas a SUSE e o openSUSE têm uma tradição de começar grandes ideias com um quatro e um dois, uma referência a O Guia do Mochileiro das Galáxias.

A cada nova versão menor do openSUSE Leap os usuários podem esperar um novo KDE ou GNOME, porém hoje tudo é sobre o openSUSE Leap 42.1. Então, se você está cansado de uma área de trabalho marrom, experimente uma verde!

Divirta-se!

## O openSUSE Leap 42.1 é…

<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/favorites.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Inovador e estável

O Leap oferece um balanço entre novo e inovador e antigo e maduro. O Leap oferece aquela sensação profissional, suporte a *hardware* moderno e tem alguns pacotes intencionalmente mais antigos (porém estáveis) para reforçar a visão de Suporte a Longo Prazo (*Long Term Support*, LTS) do Leap. Novos lançamentos como o KDE Plasma 5 e o LibreOffice 5 estão no Leap, assim como versões estáveis a exemplo do GNOME 3.16 e do GNU Compiler Collection 4.8.5 também estão (também é possível utilizar o GCC 5.2).

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/start-here-branding.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Confiável

O Leap tem um sistema de arquivos Btrfs ainda mais desenvolvido como opção padrão e um sistema de arquivos para dados XFS para desempenho, porém há muitas outras opções para escolher. Os benefícios do Btrfs permitem aos usuários aproveitar o Snapper, que os permite recuperar um estado anterior do sistema por meio de instantâneos (*snapshots*). A ferramenta Snapper cria instantâneos do sistema automaticamente de hora em hora, assim como antes e depois de operações do YaST e do zypper (o que pode ser desabilitado). Essa nova versão acrescenta a possibilidade de iniciar a partir de um instantâneo para recuperar o sistema após danos a arquivos importantes, a exemplo do bash. Uma ferramenta poderosa, e um sistema poderoso.

{% endmarkdown %}
</div>
</div>

## Baixe o Leap!

*Downloads* do openSUSE Leap 42.1 podem ser encontrados em [software.opensuse.org][software-opensuse-org]. Recomendamos verificar as [Notas de Lançamento][release-notes] antes de atualizar ou instalar.

Usuários do openSUSE 13.2 podem [atualizar para o openSUSE Leap 42.1 seguindo as instruções neste *link*][upgrade].

Confira as imagens para ARM na [*wiki* do ARM][arm-wiki]. As imagens para ARMv7 e ARMv8 (AArch64) baseadas no Leap estável estão lá e receberão completa manutenção paralelamente ao Leap. O porte para ARMv6 está em fase de experimentação e não oferece garantias.

## Obrigado!

O openSUSE Leap 42.1 representa o esforço conjunto de milhares de desenvolvedores que participam das nossas distribuições e projetos que fazem parte dela. Os colaboradores, dentro e fora do Projeto openSUSE, devem se orgulhar desse lançamento, e merecem um enorme **"obrigado"** por todo o trabalho duro e cuidado que tiveram com ele. Acreditamos que o Leap é um grande lançamento e será uma distribuição Linux na qual desenvolvedores, administradores de sistemas e usuários poderão confiar! Esperamos que você se divirta bastante usando o Leap, e aguardamos ansiosamente contar com você no próximo lançamento!

## Para desenvolvedores

<div class='row'>
    <div class='col-sm-4'>{% include image.html caption="GNOME Builder" src="/files/2015/11/gnome-builder.png" %}</div>
    <div class='col-sm-4'>{% include image.html caption="KDE Anjunta" src="/files/2015/11/kde-anjunta.png" %}</div>
    <div class='col-sm-4'>{% include image.html caption="KDE Qt5 Designer" src="/files/2015/11/kde-qt5-designer.png" %}</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/categories/applications-development.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Ambientes de desenvolvimento e ferramentas

O Leap inclui a última versão do Qt 5 GUI toolkit (5.5). O Qt 5.5 traz muitas funcionalidades e melhorias para desenvolvedores, mas também para usuários normais, que se beneficiarão de grandes avanços no gerenciamento de múltiplas telas e no QML (o que é muito utilizado pelo Plasma). O Builder é um ambiente de desenvolvimento completamente novo, destinado a facilitar a criação de aplicativos para o GNOME. O lançamento inicial da versão 3.16 é uma prévia, que apresenta funcionalidades de edição, como a visao dividida, fragmentos de código (*snippets*), auto-indentação e um motor (*engine*) VIM. O Builder foi apoiado por uma campanha bem sucedida de financiamento colaborativo (*crowdfunding*) no início de 2015, e possui grandes planos para o futuro, incluindo funcionalidades de gerenciamento de projetos, busca global, controle de versão, depuração, integração ao Glade e muito mais.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/categories/applications-engineering.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Linguagens e bibliotecas

As bibliotecas do KDE Frameworks 5 estão na versão estável mais recente até o momento do lançamento (5.15), trazendo várias correções que afetam os vários aplicativos para KDE que as utilizam. Destaca-se o *framework* de indexação de arquivos Baloo, que foi o alvo de muitas mudanças, de correções de erros a melhorias no desempenho.

{% endmarkdown %}
</div>
</div>

## Para administradores de sistemas

<div class='row'>
    <div class='col-sm-4'>{% include image.html caption="YaST App Folder" src="/files/2015/11/yast-app-folder.png" %}</div>
    <div class='col-sm-4'>{% include image.html caption="Visão geral da instalação" src="/files/2015/11/installation-overview.png" %}</div>
    <div class='col-sm-4'>{% include image.html caption="YaST" src="/files/2015/11/yast.png" %}</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/hicolor/64x64/apps/yast-virtualisation.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Virtualização

O openSUSE Leap 42.1 está repleto de soluções de virtualização: QEMU 2.3.1, VirtualBox 5.0.6 e Docker 1.8.2 tornam-no o sistema base perfeito para distribuir aplicações. Configurá-lo é fácil com o YaST, você será capaz de implantar soluções fácil e rapidamente. GNOME Boxes, virt-manager e virsh também são ferramentas úteis aos administradores de sistemas que usam openSUSE.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/hicolor/48x48/apps/yast.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### YaST melhorado

Sendo um projeto de código completamente aberto, as versões e funcionalidades do YaST que integram o SLE e openSUSE sempre estiveram bem próximas. Com o Leap, essa proximidade aumenta ainda mais: a partir da versão 42.1, o openSUSE incluirá exatamente as mesmas versões do YaST, AutoYaST e Linuxrc que integrarão o SLE12-SP1. Em comparação às versões trazidas no openSUSE 13.2, isso significa mais de 600 alterações incluindo correções de erros, novas funcionalidades e melhorias nas já existentes. Usuários e administradores de sistemas se beneficiarão do YaST melhorado incluído no Leap 42.1. Agora o YaST é mais amigável aos desenvolvedores do que nunca, com um código mais polido (embora ainda haja muito código convertido automaticamente da YCP), melhores ferramentas para desenvolvimento e documentação e uma integração muito melhor com o ecossistema Ruby, incluindo assistentes do RSpec, tarefas do Rake e outros extras. Embora o módulo YaST2-lxc tenha sido descontinuado, a família YaST cresceu com o acréscimo de três novos módulos. Leia mais a respeito dos [novos módulos](https://news.opensuse.org/2015/02/25/openness-brings-fresh-air-to-yast/).

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/files/2015/11/machinery.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Machinery

Está disponível para o openSUSE Leap 42.1 o [Machinery](http://machinery-project.org/). Ele é um aplicativo de linha de comando que pode ser utilizado por administradores de sistemas para criar descrições de sistemas Linux e trabalhar com elas. Você pode usá-las para obter mais informações sobre instalações existentes, armazenar e monitorar seus estados, ou criar novos sistemas baseados em outros já existentes. O Machinery oferece visões de sistemas individuais assim como comparações entre sistemas poderosas. Ele também pode exportar descrições para outras ferramentas para instalação, migração, construção de imagens, conteinerização ou implantação na nuvem, e provê interfaces definidas para trabalhar com descrições de sistemas das ferramentas que você utiliza.

{% endmarkdown %}
</div>
</div>

## Para usuários

<div class='row'>
    <div class='col-sm-4'>{% include image.html caption="LibreOffice 5" src="/files/2015/11/libreoffice5.png" %}</div>
    <div class='col-sm-4'>{% include image.html caption="GNOME Weather" src="/files/2015/11/gnome-weather.png" %}</div>
    <div class='col-sm-4'>{% include image.html caption="GIMP no Plasma 5" src="/files/2015/11/gimp.png" %}</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/apps/kde.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### KDE

O openSUSE Leap 42.1 é a primeira versão estável do openSUSE a trazer o KDE Plasma 5 (versão 5.4.2) como área de trabalho padrão. Agora o Plasma 5 está maduro o suficiente para que uma grande audiência aproveite sua área de trabalho bonita, cheia de recursos, inovadora e rápida. A versão 5.4 da área de trabalho introduz um novo *applet* de controle de volume, um menu de aplicativos em tela cheia, vários novos ícones (mais de 1600 foram adicionados) e melhorias no suporte a telas de alta definição HDPI. Alguns erros pequenos de versões anteriores também foram corrigidos, como, por exemplo, formatos de data adicionais no relógio ou melhorias no comportamento e visual da Visualização de Pastas.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/hicolor/48x48/apps/pattern-gnome.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### GNOME

O openSUSE Leap 42.1 vem com o GNOME 3.16.2. A série de versões 3.16.x do GNOME foi lançada em Abril de 2015 e teve várias iterações de correções de erros, tornando-as versões bem testadas e estabilizadas para equipar o sistema base sólido como pedra do SLE12. O visual do GNOME 3 foi atualizado na versão 3.16. A visão das Atividades, a tela de *login*, os menus do sistema e outros componentes do sistema receberam um visual novo, mais moderno. O novo aspecto visual foi desenhado para se integrar com o estilo visual dos aplicativos do GNOME, para uma experiência mais coesa. A versão 3.16 traz um novo estilo de barra de rolagem para o GNOME 3. Em vez de estarem sempre visíveis, essas novas barras de rolagem sobrepostas aparecem apenas quando necessário: um pequeno indicador de rolagem é exibido quando o cursor se move, e uma barra mais larga aparece quando o controle é desejado.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/user-desktop.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Outros ambientes de trabalho

O openSUSE Leap 42.1 inclui o MATE (1.10), que oferece suporte a ambas as bibliotecas GTK2 e GTK3, adicionado suporte para os 3.x GUI *toolkits* e melhorias na biblioteca de mixagem de áudio. O openSUSE Leap 42.1 também vem com XFCE (4.12.1). O painel do XFCE agora pode esconder-se de maneira inteligente, suporta complementos (*plugins*) do GTK3, e teve vários de seus complementos de terceiros atualizados para tirar o máximo proveito das funcionalidades adicionadas na versão 4.10. O Enlightenment 19 (0.19.12) vem no openSUSE Leap 42.1 e agora é capaz de mostrar clientes quando eles são ativados, atualiza o compositor X11 para utilizar eventos de modificação (*damage events*), e atualiza a lista de busca de temas de ícones para o assistente.

{% endmarkdown %}
</div>
</div>

Mais informações sobre o suporte às arquiteturas Power 8 (ppc64le) e ARM (AArch64) no openSUSE Leap 42.1 serão lançados em uma data futura.

## Sobre o Projeto openSUSE

O Projeto openSUSE é uma comunidade ao redor do mundo que promove o uso do Linux em todos os lugares. Ele cria uma das melhores distribuições Linux do mundo, trabalhando de maneira conjunta, aberta, transparente e amigável como parte da comunidade internacional de *Software* Livre e Aberto. O projeto é comandado por sua comunidade e depende das contribuições de pessoas, que trabalham como testadores, escritores, tradutores, especialistas em usabilidade, artistas, embaixadores ou desenvolvedores. O projeto abrange uma ampla variedade de tecnologias, pessoas com diferentes níveis de conhecimentos, que falam diferentes línguas e possuem diversas raízes culturais. Saiba mais sobre o Projeto openSUSE em [opensuse.org][opensuse-org].

*Essa é uma tradução não oficial da notícia originalmente publicada por [Douglas DeMaio][douglas-demaio] em [news.opensuse.org][news-opensuse-org].*

[software-opensuse-org]:    http://software.opensuse.org/
[release-notes]:            http://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/42.1/RELEASE-NOTES.pt_BR.html
[upgrade]:                  http://en.opensuse.org/Upgrade
[arm-wiki]:                 https://en.opensuse.org/Portal:ARM
[opensuse-org]:             http://www.opensuse.org/
[douglas-demaio]:           https://news.opensuse.org/author/ddemaio/
[news-opensuse-org]:        https://news.opensuse.org/2015/11/04/opensuse-leap-42-1-becomes-first-hybrid-distribution/
