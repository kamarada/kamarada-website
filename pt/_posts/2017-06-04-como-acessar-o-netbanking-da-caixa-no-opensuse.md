---
date: '2017-06-04 10:00:00 UTC-3'
layout: post
published: true
title: 'Como acessar o netbanking da Caixa no openSUSE'
image: '/files/2017/06/netbanking-caixa.jpg'
nickname: 'netbanking-caixa'
---

[Oficialmente][caixa-faq-netbanking], a [Caixa][caixa] suporta apenas as distribuições [Ubuntu][ubuntu] e [Mint][mint]. No entanto, não é segredo que [a Caixa e o Banco do Brasil utilizam a mesma tecnologia][diagnostico-warsaw] para garantir o acesso seguro aos seus *netbankings*: o [Warsaw][warsaw], *software* de segurança contra fraudes eletrônicas da [Diebold Nixdorf/GAS][dieboldnixdorf-gas]. Na tentativa e erro, eu, que tenho conta nos dois bancos, descobri que, uma vez instalado o módulo de segurança do [Banco do Brasil][bb], é possível acessar o *netbanking* da Caixa no [openSUSE][opensuse].

Nesse *post*, você vai ver como conseguir essa façanha.

Para referência, estou usando a distribuição [openSUSE Leap 42.2][opensuse-leap-422] e o navegador [Mozilla Firefox][firefox] versão 52.1.1, a última disponível para essa distribuição até então.

Em se tratando de acesso ao banco, toda segurança é pouco. Por isso, recomendo que você [mantenha seu sistema sempre atualizado][how-to-sw-updates].

Embora aqui eu utilize o navegador Mozilla Firefox, em outros navegadores, a exemplo do [Google Chrome][chrome], o procedimento deve ser parecido e funcionar.

## Como acessar o netbanking

Abra o navegador, acesse o *site* da Caixa ([www.caixa.gov.br][caixa]) e clique em **Acessar minha conta**:

{% include image.html src="/files/2017/06/netbanking-caixa-01.jpg" %}

Digite seu [nome de usuário][usuario-senha-caixa] e clique em **Continuar**:

{% include image.html src="/files/2017/06/netbanking-caixa-02.jpg" %}

É comum que no primeiro acesso você se depare com a mensagem "Baixe o Adicional de Segurança CAIXA":

{% include image.html src="/files/2017/06/netbanking-caixa-03.jpg" %}

Isso acontece porque os bancos necessitam de segurança adicional àquela oferecida pelos navegadores. Por isso, eles solicitam que o usuário instale em seu computador um módulo adicional de segurança.

## Como instalar o módulo de segurança

Se você clicar em **Concordo**, será redirecionado para uma página que oferece o *download* de um pacote [DEB][deb], utilizado pelas distribuições Ubuntu e Mint. O openSUSE utiliza outro formato de empacotamento, o [RPM][rpm], também utilizado pelo [Fedora][fedora]. A Caixa não fornece seu módulo de segurança nesse formato.

No entanto, sabemos que o módulo de segurança do Banco do Brasil utiliza nos bastidores a mesma tecnologia do módulo de segurança da Caixa. Sabemos também, do [*post* anterior][netbanking-bb], que o Banco do Brasil oferece seu módulo de segurança para *download* no formato RPM, próprio para instalação no openSUSE.

[Naquele *post*][netbanking-bb], vimos como instalar o módulo de segurança do Banco do Brasil no openSUSE. Siga as instruções daquele *post* até chegar na última tela, em que o *netbanking* solicita informações da sua conta para continuar. Isso é sinal de que o módulo de segurança do Banco do Brasil foi instalado com sucesso.

Você não precisa ter uma conta e de fato acessar o *netbanking* do Banco do Brasil, apenas certifique-se de que seu módulo de segurança foi instalado.

Agora, de volta ao *site* da Caixa, repita os passos anteriores: clique em **Acessar minha conta**, na tela seguinte digite seu nome de usuário e clique em **Continuar**.

Perceba que agora a mensagem exibida é diferente:

{% include image.html src="/files/2017/06/netbanking-caixa-04.jpg" caption="Adicional instalado incorretamente. Aguarde enquanto configuramos seu computador..." %}

Essa mensagem indica que o *netbanking* da Caixa percebeu que o Warsaw está instalado no computador, apenas não possui as configurações específicas da Caixa. Nesse momento, o *netbanking* da Caixa está configurando o Warsaw.

Esse procedimento demora pouco, logo o acesso ao *netbanking* é liberado:

{% include image.html src="/files/2017/06/netbanking-caixa-05.jpg" caption="Adicional de Segurança CAIXA instalado. Acesse a sua conta." %}

Siga a orientação na tela: clique em **Acessar**.

## Agora sim

Agora que o Warsaw possui as configurações do *netbanking* da Caixa, você pode acessar o *netbanking* normalmente.

Digite seu nome de usuário e clique em **Continuar**:

{% include image.html src="/files/2017/06/netbanking-caixa-02.jpg" %}

Clique nas iniciais do seu nome:

{% include image.html src="/files/2017/06/netbanking-caixa-06.jpg" %}

Digite a [senha Internet][usuario-senha-caixa] e clique em **Continuar**:

{% include image.html src="/files/2017/06/netbanking-caixa-07.jpg" %}

Faça bom proveito!

Vale observar que o procedimento que fizemos não remove do Warsaw as configurações do *netbanking* do Banco do Brasil. Ou seja, agora você pode acessar os dois bancos do seu computador com openSUSE, caso precise.

[caixa-faq-netbanking]: http://www.caixa.gov.br/atendimento/internet-banking/perguntas-frequentes/Paginas/default.aspx
[caixa]:                http://www.caixa.gov.br/
[ubuntu]:               https://www.ubuntu.com/
[mint]:                 https://linuxmint.com/
[diagnostico-warsaw]:   http://www.dieboldnixdorf.com.br/warsaw
[warsaw]:               http://www.dieboldnixdorf.com.br/gas-antifraude
[dieboldnixdorf-gas]:   http://www.dieboldnixdorf.com.br/
[bb]:                   http://www.bb.com.br/
[opensuse]:             https://www.opensuse.org/
[opensuse-leap-422]:    {%post_url 2016-11-16-opensuse-leap-42-2-versao-otima-para-profissionais-linux %}
[firefox]:              https://www.mozilla.org/pt-BR/firefox/
[how-to-sw-updates]:    {%post_url 2016-10-21-mantenha-seu-sistema-sempre-atualizado %}
[chrome]:               https://www.google.com.br/chrome/
[usuario-senha-caixa]:  http://www.caixa.gov.br/atendimento/canais-digitais/banking-caixa/primeiro-acesso/usuario-senha/Paginas/default.aspx
[deb]:                  https://pt.wikipedia.org/wiki/.deb
[rpm]:                  https://pt.wikipedia.org/wiki/RPM_(Linux)
[fedora]:               https://getfedora.org/
[netbanking-bb]:        {%post_url 2017-06-03-como-acessar-o-netbanking-do-banco-do-brasil-no-opensuse %}

