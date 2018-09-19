---
date: 2018-09-19 19:00:00
image: '/files/2018/09/hp-printers.png'
layout: post
published: true
nickname: 'howto-hp-printer'
title: 'Impressoras HP no openSUSE'
excerpt: 'As impressoras da marca HP são bastante comuns no Brasil. Nesse post, mostro como adicionei uma HP DeskJet Ink Advantage 3836 ao openSUSE para imprimir pela rede. O procedimento é semelhante para outros modelos de impressoras HP.'
---

{% include image.html src="/files/2018/09/hp-printers.png" %}

As impressoras da marca [HP][hp] são bastante comuns no Brasil.

Nesse *post*, mostro como adicionei uma [HP DeskJet Ink Advantage 3836][hp-3836] ao [openSUSE][opensuse] para imprimir pela rede. O procedimento é semelhante para outros modelos de impressoras HP.

Suponho que a conexão da impressora à rede já tenha sido configurada, mas dou uma dica para quem acabou de tirar a impressora da caixa.

## Instalando o driver da impressora HP

No [Linux][linux], quem fornece suporte às impressoras HP é o *driver* [**HPLIP**][hplip], abreviação de [*HP Linux Imaging and Printing*][hplip] (Impressão e Digitalização da HP para Linux, em inglês).

No openSUSE, ele é instalado pelo pacote de mesmo nome, [hplip][hplip-sw]:

```
# zypper in hplip
```

A versão 15.0 da distribuição openSUSE Leap fornece a versão 3.17.9 do *driver* HPLIP.

## Adicionando a impressora HP

Instalado o HPLIP, inicie o **Gerenciador de dispositivos HP** (HP Device Manager).

A interface do aplicativo está em inglês e não possui tradução. A tela inicial alerta que não há dispositivos HP instalados (**No Installed HP Devices Found**):

{% include image.html src="/files/2018/09/hp-printers-01.jpg" %}

Clique em **Setup Device** (configurar dispositivo).

Caso ainda não tenha ligado a impressora, ligue-a agora.

Na primeira tela do assistente de configuração, selecione o tipo de conexão:

{% include image.html src="/files/2018/09/hp-printers-02.jpg" %}

- se sua impressora está conectada diretamente ao computador por um cabo USB, selecione **Universal Serial Bus (USB)**;
- se sua impressora está conectada pela rede e já está configurada (meu caso), selecione **Network/Ethernet/Wireless network**;
- se sua impressora será conectada a uma rede sem fio e ainda não está configurada, selecione **Wireless/802.11**; ou
- se sua impressora usa a [porta paralela][lpt] (provavelmente é uma impressora antiga, porque muitos computadores e *notebooks* já não oferecem mais essa conexão), selecione a opção **Parallel Port (LPT)**.

A dica para quem acabou de tirar a impressora da caixa é selecionar a terceira opção: primeiro a impressora será conectada ao computador usando um cabo USB, o assistente auxiliará a configuração de rede sem fio da impressora, no final o cabo será removido e ela poderá ser utilizada pela rede sem fio.

Quando terminar, clique em **Next** (avançar).

O assistente vai procurar sua impressora na rede.

É possível que ele não encontre a impressora (aconteceu comigo):

{% include image.html src="/files/2018/09/hp-printers-03.jpg" %}

Se esse for o caso, clique em **OK** e depois em **Back** para voltar à tela anterior.

Verifique a configuração de rede da sua impressora. Como fazer isso é algo que pode variar de modelo para modelo. No caso da minha, eu toquei no ícone **Sem fio** (na parte de baixo, a figura de antena, no meio):

{% include image.html src="/files/2018/09/hp-printers-04-pt.jpg" %}

Anote o endereço **IP**:

{% include image.html src="/files/2018/09/hp-printers-05-pt.jpg" %}

Nesse exemplo, `172.17.0.2`.

De volta à primeira tela do assistente, clique em **Show Advanced Options** (mostrar opções avançadas), marque a opção **Manual Discovery** (descoberta manual), informe o endereço IP (**IP Address**) e clique em **Next**:

{% include image.html src="/files/2018/09/hp-printers-06.jpg" %}

Agora sim a impressora é encontrada. Perceba que o assistente se comunicou com ela e já apresentou o modelo correto:

{% include image.html src="/files/2018/09/hp-printers-07.jpg" %}

Se mesmo informando o IP manualmente o assistente não encontrar a impressora, saia do assistente e verifique a informação que consta na última seção dessa página.

Com a impressora aparecendo na lista e devidamente selecionada, clique em **Next**.

Se sua impressora possui fax mas você não utiliza, desmarque a opção **Fax Setup**:

{% include image.html src="/files/2018/09/hp-printers-08.jpg" %}

Por fim, clique em **Add Printer** (adicionar impressora).

Forneça o nome de usuário e a senha de uma conta com permissão de administrador (*root*):

{% include image.html src="/files/2018/09/hp-printers-09.jpg" %}

E pronto! A impressora passa a aparecer na tela principal do Gerenciador de dispositivos HP:

{% include image.html src="/files/2018/09/hp-printers-10.jpg" %}

Você pode usar a opção **Print Test Page** para enviar uma página de teste à impressora, para testar se a configuração funciona.

## Imprimindo um documento

Agora sua impressora já aparece disponível nos aplicativos para impressão.

Como imprimir é algo que pode variar de aplicativo para aplicativo. Por exemplo, para imprimir no [**Visualizador de documentos**][evince] (usado para ler documentos em [PDF][pdf]), clique no botão **Opções do arquivo** (canto superior direito da tela) e clique em **Imprimir**:

{% include image.html src="/files/2018/09/hp-printers-11-pt.jpg" %}

Na caixa de diálogo **Imprimir**, selecione sua impressora na lista, opcionalmente ajuste outras opções de impressão e, por fim, clique no botão **Imprimir**:

{% include image.html src="/files/2018/09/hp-printers-12-pt.jpg" %}

## Dica: modo rascunho

Caso não esteja imprimindo um documento importante (por exemplo, um texto para ler em casa mesmo), você pode usar o modo rascunho da impressora para economizar tinta. O único porém desse modo é que imagens e fotos podem ser prejudicadas.

Para imprimir no modo rascunho, na caixa de diálogo **Imprimir**, vá à última aba **Avançado** e mude o valor da opção **Printout Mode** (modo de impressão) para **Draft Grayscale** (rascunho em preto e branco) ou **Draft** (rascunho, colorido):

{% include image.html src="/files/2018/09/hp-printers-13-pt.jpg" %}

Caso precise, você também pode usar essa mesma opção para aumentar a qualidade da impressão (**High Quality**), ao custo de usar mais tinta.

## Minha impressora não é reconhecida

A versão do *driver* HPLIP disponível no repositório oficial da distribuição nem sempre corresponde à versão mais recente disponível no [*site* do HPLIP][hplip] (no momento da escrita, 3.18.7). Como consequência disso, é possível que sua impressora não seja reconhecida, principalmente se o modelo for recente.

Para usar uma versão mais atual do *driver*, adicione o repositório do projeto [*Printing*][printing] (impressão):

```
# zypper ar http://download.opensuse.org/repositories/Printing/openSUSE_Leap_15.0/ printing
```

Feito isso, experimente repetir a instalação do HPLIP e a adição da impressora.

[hp]:       https://www.hp.com
[hp-3836]:  https://support.hp.com/br-pt/product/hp-deskjet-ink-advantage-3830-all-in-one-printer-series/7172328/model/7429639
[opensuse]: https://www.opensuse.org/
[linux]:    http://www.vivaolinux.com.br/linux/
[hplip]:    https://developers.hp.com/hp-linux-imaging-and-printing
[hplip-sw]: https://software.opensuse.org/package/hplip
[lpt]:      https://pt.wikipedia.org/wiki/Interface_paralela
[evince]:   https://wiki.gnome.org/Apps/Evince
[pdf]:      https://pt.wikipedia.org/wiki/Portable_Document_Format
[printing]: https://build.opensuse.org/project/show/Printing
