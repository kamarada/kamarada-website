---
date: '2017-06-03 18:00:00 UTC-3'
layout: post
published: true
title: 'Como acessar o netbanking do Banco do Brasil no openSUSE'
image: '/files/2017/06/netbanking-bb.jpg'
nickname: 'netbanking-bb'
---

Usuários de [Linux][linux] podem ter a impressão de que são esquecidos pelos seus bancos, ou que não recebem a mesma atenção que usuários de [Windows][windows], ou mesmo acabar concluindo que acessar o *netbanking* no Linux é impossível. Na verdade, é possível sim, o problema é que informações sobre Linux muitas vezes não são amplamente divulgadas ou não aparecem nos momentos em que seus usuários precisam. Tudo é uma questão de encontrar as informações corretas nos lugares certos.

Nesse *post*, você vai ver como acessar o *netbanking* do [Banco do Brasil][bb] no [openSUSE][opensuse] e onde encontrar informações quando tiver dúvidas.

Para referência, estou usando a distribuição [openSUSE Leap 42.2][opensuse-leap-422] e o navegador [Mozilla Firefox][firefox] versão 52.1.1, a última disponível para essa distribuição até então.

Em se tratando de acesso ao banco, toda segurança é pouco. Por isso, recomendo que você [mantenha seu sistema sempre atualizado][how-to-sw-updates].

Embora aqui eu utilize o navegador Mozilla Firefox, em outros navegadores, a exemplo do [Google Chrome][chrome], o procedimento deve ser parecido e funcionar.

## Como acessar o netbanking

Abra o navegador, acesse o *site* do Banco do Brasil ([www.bb.com.br][bb]) e clique em **Acesse sua conta**:

{% include image.html src="/files/2017/06/netbanking-bb-01.jpg" %}

É comum que no primeiro acesso você se depare com essa mensagem de erro:

{% include image.html src="/files/2017/06/netbanking-bb-02.png" %}

Isso acontece porque os bancos necessitam de segurança adicional àquela oferecida pelos navegadores. Por isso, eles solicitam que o usuário instale em seu computador um módulo de segurança.

## Como instalar o módulo de segurança

Se você clicar no primeiro *link* daquela mensagem ([seg.bb.com.br][seg-bb]), será redirecionado para uma página que sugere instalar um pacote [DEB][deb], utilizado pelas [distribuições mais populares][distrowatch-popularity] como [Mint][mint], [Debian][debian] e [Ubuntu][ubuntu]. O openSUSE utiliza outro formato de empacotamento, o [RPM][rpm], também utilizado pelo [Fedora][fedora].

Em vez de clicar no primeiro *link*, clique no segundo, onde se lê "Tire suas dúvidas..."

Na página **Dúvidas sobre o Módulo de Segurança**, clique no *link* referente às distribuições que utilizam pacotes RPM:

{% include image.html src="/files/2017/06/netbanking-bb-03.png" %}

Na página seguinte, clique no ícone referente ao pacote para o openSUSE Leap 42.2:

{% include image.html src="/files/2017/06/netbanking-bb-04.png" %}

Faça o *download* do pacote:

{% include image.html src="/files/2017/06/netbanking-bb-05.png" %}

Quando o *download* terminar, clique no pacote baixado:

{% include image.html src="/files/2017/06/netbanking-bb-06.jpg" %}

O navegador pode advertir sobre a possível existência de vírus. Não é um problema nesse caso. Clique em **OK** para continuar:

{% include image.html src="/files/2017/06/netbanking-bb-07.jpg" %}

A instalação do módulo de segurança, assim como a instalação de qualquer programa, requer privilégios de administrador. Informe a senha do superusuário (*root*) e clique em **Continuar**:

{% include image.html src="/files/2017/06/netbanking-bb-08.png" %}

O [Centro de Controle do YaST][yast] mostra informações sobre a instalação:

{% include image.html src="/files/2017/06/netbanking-bb-09.jpg" %}

Se for necessário instalar pacotes adicionais dos quais o módulo de segurança dependa, esses pacotes também serão mostrados nessa tela.

É recomendável fechar todos os navegadores abertos antes de continuar.

Quando estiver pronto para começar a instalação, volte ao YaST e clique em **Aceitar**.

Após o fim da instalação, clique em **Concluir**:

{% include image.html src="/files/2017/06/netbanking-bb-10.jpg" %}

Por último, reinicie o computador.

## Agora sim

Agora, com o módulo de segurança instalado, se você acessar o *netbanking* do Banco do Brasil, ele permitirá que você insira as informações da sua conta e continue:

{% include image.html src="/files/2017/06/netbanking-bb-11.jpg" %}

De tempos em tempos, o banco atualiza o módulo de segurança, o que faz com que aquela mensagem de erro volte a aparecer. Quando isso acontecer, você já sabe como proceder.

Faça bom proveito!

## Referência

- [Seg.BB - Distribuições baseadas em pacotes .RPM - Como instalar o Módulo de Segurança?][seg-bb-duvidas]

[linux]:                    http://www.vivaolinux.com.br/linux/
[windows]:                  https://www.microsoft.com/pt-br/windows/
[bb]:                       http://www.bb.com.br/
[opensuse]:                 https://www.opensuse.org/
[opensuse-leap-422]:        {%post_url pt/2016-11-16-opensuse-leap-42-2-versao-otima-para-profissionais-linux %}
[firefox]:                  https://www.mozilla.org/pt-BR/firefox/
[how-to-sw-updates]:        {%post_url pt/2016-10-21-mantenha-seu-sistema-sempre-atualizado %}
[chrome]:                   https://www.google.com.br/chrome/
[seg-bb]:                   https://seg.bb.com.br/
[deb]:                      https://pt.wikipedia.org/wiki/.deb
[distrowatch-popularity]:   http://distrowatch.com/dwres.php?resource=popularity
[mint]:                     https://linuxmint.com/
[debian]:                   https://www.debian.org/
[ubuntu]:                   https://www.ubuntu.com/
[rpm]:                      https://pt.wikipedia.org/wiki/RPM_(Linux)
[fedora]:                   https://getfedora.org/
[yast]:                     https://pt.opensuse.org/Portal:YaST
[seg-bb-duvidas]:           https://seg.bb.com.br/duvidas.html?question=8
