---
date: '2016-04-22 12:00:00 GMT-3'
excerpt: 'Um LiveDVD é uma boa opção para quem deseja conhecer o Linux, sem a necessidade de instalá-lo no computador, ou carregar o Linux para utilizar onde quiser. Com um LiveDVD, você pode usar o Linux em qualquer computador que ofereça a possibilidade de iniciar o sistema operacional ("dar o boot", na gíria técnica) a partir de um DVD. Nesse post, veremos como gravar um LiveDVD do Linux.'
layout: post
published: true
title: 'Como gravar um LiveDVD'
image: /files/2015/11/livecd.png
nickname: 'how-to-livedvd'
---

{% include image.html src="/files/2015/11/livecd.png" %}

Um [LiveDVD]({% post_url pt/2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}) é uma boa opção para quem deseja conhecer o Linux, sem a necessidade de instalá-lo no computador, ou para quem deseja carregar o Linux para utilizar onde quiser. Com um LiveDVD, você pode usar o Linux em qualquer computador que ofereça a possibilidade de iniciar o sistema operacional ("dar o *boot*", na gíria técnica) a partir de um DVD.

Nesse *post*, veremos como gravar um LiveDVD do Linux.

Se você não sabe o que é um LiveDVD, já apresentamos ele em [outro *post*]({% post_url pt/2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}).

Antes de gravar um LiveDVD, você deve [baixar o Linux][download]. Caso precise de ajuda com o *download*, consulte esse [outro *post*]({% post_url pt/2015-12-20-como-baixar-o-linux %}). Você também vai precisar de uma mídia DVD vazia que possa ser gravada.

As instruções para gravar um LiveDVD variam de acordo com o sistema operacional que você usa. Isso porque os programas utilizados são diferentes.

Identifique abaixo o sistema operacional que você está usando agora e clique nele para ver as instruções de como gravar um LiveDVD usando o seu sistema.

[download]: /pt/download/

<div class="no-ads-here panel-group" id="help-accordion" role="tablist" aria-multiselectable="true">
<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="help-windows">
        <h4 class="panel-title">
            <a role="button" data-toggle="collapse" href="#help-windows-collapse" aria-expanded="true" aria-controls="help-windows-collapse">
                <i class="fa fa-windows"></i> Windows
            </a>
        </h4>
    </div>
    <div id="help-windows-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="help-windows">
        <div class="panel-body">
{% markdown %}

Para usuários de [Windows][windows], recomendamos a utilização do programa gratuito [CDBurnerXP][cdburnerxp].

Antes de começar, insira a mídia DVD vazia no seu gravador de DVD.

Baixe o CDBurnerXP do seu [*site* oficial][cdburnerxp]:

{% include image.html src="/files/2016/04/cdburnerxp01.jpg" %}

Instale o CDBurnerXP:

{% include image.html src="/files/2016/04/cdburnerxp02.jpg" %}

Após a instalação, o CDBurnerXP será iniciado automaticamente.

Selecione a opção **Gravar imagem ISO** e clique em **OK**:

{% include image.html src="/files/2016/04/cdburnerxp03.jpg" %}

Onde se lê **Selecione a imagem ISO para gravar**, clique em **Procurar**:

{% include image.html src="/files/2016/04/cdburnerxp04.jpg" %}

Abra a imagem ISO do Linux:

{% include image.html src="/files/2016/04/cdburnerxp05.jpg" %}

Clique em **Gravar disco**:

{% include image.html src="/files/2016/04/cdburnerxp06.jpg" %}

O progresso da gravação é exibido:

{% include image.html src="/files/2016/04/cdburnerxp07.jpg" %}

Ao final, o CDBurnerXP mostra uma mensagem indicando que a gravação foi concluída com sucesso:

{% include image.html src="/files/2016/04/cdburnerxp08.jpg" %}

Você pode fechar todas as janelas e utilizar o DVD, que deve ter sido ejetado.

[windows]: https://www.microsoft.com/pt-br/windows/
[cdburnerxp]: https://cdburnerxp.se/

{% endmarkdown %}
<p><a role="button" data-toggle="collapse" href="#help-windows-collapse" aria-controls="help-windows-collapse">Fechar as instruções para o Windows</a></p></div>
</div>
</div>
<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="help-suse">
        <h4 class="panel-title">
            <a role="button" data-toggle="collapse" href="#help-suse-collapse" aria-expanded="true" aria-controls="help-suse-collapse">
                <i class="fa fa-linux"></i> Linux
            </a>
        </h4>
    </div>
    <div id="help-suse-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="help-suse">
        <div class="panel-body">
{% markdown %}

Para usuários de Linux, recomendamos a utilização do programa [K3b][k3b].

Antes de começar, insira a mídia DVD vazia no seu gravador de DVD.

Inicie o programa K3b abrindo o **Menu de aplicativos**, apontando para **Multimídia** e, por fim, clicando em **K3b**:

{% include image.html src="/files/2016/04/k3b01.jpg" %}

Clique no menu **Ferramentas** e depois na opção **Gravar imagem**:

{% include image.html src="/files/2016/04/k3b02.jpg" %}

No campo **Imagem para gravar**, clique no **ícone da pasta**:

{% include image.html src="/files/2016/04/k3b03.png" %}

Abra a imagem ISO do Linux:

{% include image.html src="/files/2016/04/k3b04.png" %}

Clique em **Iniciar**:

{% include image.html src="/files/2016/04/k3b05.png" %}

O K3b exibe o progresso da gravação:

{% include image.html src="/files/2016/04/k3b06.jpg" %}

Note que o progresso é exibido não apenas na janela do K3b, mas também em outra pequena janela, no canto superior esquerdo da tela. Se quiser, você pode minimizar o K3b, utilizar outros programas e acompanhar o progresso da gravação por aquela pequena janela.

Ao final, o K3b mostra uma mensagem indicando que a gravação foi concluída com sucesso:

{% include image.html src="/files/2016/04/k3b07.jpg" %}

Você pode fechar todas as janelas e utilizar o DVD, que deve ter sido ejetado.

[k3b]: http://www.k3b.org/

{% endmarkdown %}
<p><a role="button" data-toggle="collapse" href="#help-suse-collapse" aria-controls="help-suse-collapse">Fechar as instruções para o Linux</a></p></div>
</div>
</div>
</div>

Como utilizar o LiveDVD que você acabou de gravar será o assunto de outro *post*. Não deixe de nos acompanhar para conferir!
