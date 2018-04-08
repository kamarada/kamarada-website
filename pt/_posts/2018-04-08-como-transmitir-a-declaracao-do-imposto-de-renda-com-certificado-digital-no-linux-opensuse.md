---
date: '2018-04-08 02:00:00 UTC-3'
image: '/files/2017/02/irpf-2017.jpg'
layout: post
published: false
title: 'Como transmitir a declaração do Imposto de Renda com certificado digital no Linux openSUSE'
---

## Obrigatoriedade

Em alguns casos, é obrigatório transmitir a declaração com certificado digital. Com informações [da Receita][obrigatoriedade]:

> Deve transmitir a Declaração de Ajuste Anual, com a utilização de certificado digital, o contribuinte que se enquadrou, no ano-calendário de 2017, em pelo menos uma das seguintes situações:
>
> I - recebeu rendimentos:
>
> a) tributáveis sujeitos ao ajuste anual, cuja soma foi superior a R$ 10.000.000,00 (dez milhões de reais);
>
> b) isentos e não tributáveis, cuja soma foi superior a R$ 10.000.000,00 (dez milhões de reais);
>
> c) tributados exclusivamente na fonte, cuja soma foi superior a R$ 10.000.000,00 (dez milhões de reais); ou
>
> II - realizou pagamentos de rendimentos a pessoas jurídicas, quando constituam dedução na declaração, ou a pessoas físicas, quando constituam, ou não, dedução na declaração, cuja soma foi superior a R$ 10.000.000,00 (dez milhões de reais), em cada caso ou no total.

## Pré-requisitos

O programa do IRPF 2018 [requer][irpf-instalacao] que a máquina virtual do [Java][java] da [Oracle][oracle] versão 7 ou superior esteja instalada no computador. Você pode acessar a [página de teste do Java][java-test] para ver se o Java está instalado no seu computador, qual versão está instalada e se há necessidade de atualizar. No momento da escrita, a versão mais atual do Java é a **8 Update 161**, lançada em [16 de janeiro de 2018][java-release-notes]. Caso precise, dediquei um *post* a explicar [como instalar o Java da Oracle][how-to-oracle-jre].

Também já expliquei aqui [como instalar o programa do Imposto de Renda][irpf-2017]. O *post* trata do IRPF 2017, mas a instalação do IRPF 2018 é bastante semelhante. Você pode obter o programa do IRPF 2018 do [*site* da Receita Federal][receita-federal].

A mídia do certificado digital ([cartão inteligente][cartao-inteligente], [*token*][token] ou arquivo) deve estar funcionando. Um bom teste é acessar o sistema [eCAC][ecac], da Receita Federal, utilizando o certificado. Se sua mídia possui algum *software* específico, abra-o. Aqui, por exemplo, vou utilizar um *token* USB modelo [eToken PRO][etoken], da [SafeNet][safenet] (antiga [Aladdin][aladdin]), seu *software* é o [SafeNet Authentication Client][sac].

{% include image.html src="/files/2018/04/etoken.jpg" %}

{% include image.html src="/files/2018/04/sac.jpg" %}

Oportunamente, explicarei como fazer o eToken PRO e o SafeNet Authentication Client funcionarem no openSUSE, mas adianto que as seguintes páginas aparecerão nas referências:

- [Instalar eToken Alladin, usar sites do governo com certificado Digital e assinar documentos PDF - Dicas do cotidiano com linux][etoken-aladdin-ubuntu]
- [Configuring Smart Card authentication on SUSE Linux Enterprise - SUSE Communities][smart-cards-sle]

Por fim, observo que utilizo a distribuição [openSUSE Leap 15.0 Beta][opensuse-leap-15].

Sem mais delongas, vamos meter a mão na massa!

## Entregando a declaração

Para que o programa do IRPF 2018 reconheça a mídia do certificado, é necessário criar um arquivo de configuração na pasta do Receitanet.

Abra o aplicativo **Editor de texto** e copie e cole o seguinte conteúdo:

```
name=eToken
library=/usr/lib64/libeToken.so
```

Explicando essas duas variáveis:

- `name`: um identificador (não pode conter espaços) para a mídia do certificado; e
- `library`: caminho para a biblioteca (extensão `.so`) que implementa o padrão [PKCS#11][pkcs-11] para a mídia do certificado.

Salve esse arquivo com o nome de `receitanet.cfg` na pasta `~/.receitanet`:

{% include image.html src="/files/2018/04/irpf-2018-certificado-01.png" %}

Abra o programa do IRPF 2018 e inicie o procedimento para transmitir a declaração: vá no menu **Declaração** e clique em **Entregar Declaração**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-02.jpg" %}

Selecione a sua declaração, marque a opção **Transmitir com certificação digital** e clique em **OK**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-03.png" %}

Revise a forma de pagamento ou restituição do imposto:

{% include image.html src="/files/2018/04/irpf-2018-certificado-04.png" %}

O programa verifica o(s) certificado(s) digital(is) armazenado(s) na mídia. Informe a senha PIN da mídia:

{% include image.html src="/files/2018/04/irpf-2018-certificado-05.jpg" %}

Selecione seu certificado na lista e clique em **Assinar**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-06.png" %}

Nesse momento, para mim, a luz do *token* acendeu (que nem tem *pendrives* que acendem uma luz quando estão sendo utilizados) e o programa fechou, sem dar qualquer aviso. No entanto, ao iniciar novamente o programa do IRPF 2018, percebi que havia recibo de entrega. Concluí que, embora o programa tivesse travado, a declaração havia sido transmitida.

Para salvar o recibo de entrega da declaração como PDF, abra o programa do IRPF 2018, vá no menu **Imprimir** e clique em **Recibo**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-07.jpg" %}

Selecione a sua declaração (observe o ícone **Transmitida** no início da linha), selecione a opção **Visualizar** e clique em **OK**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-08.png" %}

Observe a informação ao final da primeira página:

> Esta declaração foi assinada com o certificado digital do NI 123.456.789-01

{% include image.html src="/files/2018/04/irpf-2018-certificado-09.png" %}

Para salvar o recibo como PDF, clique no ícone de **Salvar** no canto superior esquerdo da janela.

## Referências

- [Configuração para uso de Tokens e SmartCards no Linux —  Receita Federal][tokens-receita]
- [Declaração do Imposto de Renda com Certificado Digital][serasa]

[obrigatoriedade]: http://idg.receita.fazenda.gov.br/interface/cidadao/irpf/2018/declaracao/transmissao
[irpf-instalacao]: https://idg.receita.fazenda.gov.br/interface/cidadao/irpf/2018/download/instrucoes-de-instalacao
[java]: https://www.java.com/pt_BR/
[oracle]: https://www.oracle.com/br/
[how-to-oracle-jre]:    {%post_url 2017-02-28-como-instalar-o-java-da-oracle-no-linux-opensuse %}
[irpf-2017]: {%post_url 2017-02-28-como-instalar-o-programa-do-imposto-de-renda-2017-no-linux-opensuse %}
[receita-federal]:      http://idg.receita.fazenda.gov.br/
[java-test]:            https://www.java.com/verify/
[java-release-notes]: http://www.oracle.com/technetwork/java/javase/8u161-relnotes-4021379.html
[cartao-inteligente]: https://pt.wikipedia.org/wiki/Cart%C3%A3o_inteligente
[token]: https://pt.wikipedia.org/wiki/Token_(chave_eletr%C3%B4nica)
[ecac]: https://cav.receita.fazenda.gov.br/
[etoken]: https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/
[safenet]: https://safenet.gemalto.com/
[aladdin]: https://pt.wikipedia.org/wiki/Aladdin_Knowledge_Systems
[sac]: https://www.soluti.com.br/suporte/
[etoken-aladdin-ubuntu]: https://diadialinux.wordpress.com/2017/03/02/instalar-etoken-alladin-usar-sites-do-governo-com-certificado-digital-e-assinar-documentos-pdf/
[smart-cards-sle]: https://www.suse.com/c/configuring-smart-card-authentication-suse-linux-enterprise/
[opensuse-leap-15]: https://news.opensuse.org/2018/01/31/opensuse-leap-15-reaches-beta-phase-snapshots/
[pkcs-11]: https://en.wikipedia.org/wiki/PKCS_11

[tokens-receita]: http://idg.receita.fazenda.gov.br/programas-para-download/receitanet/ajuda-do-receitanet/configuracao-para-uso-de-tokens-e-smartcards-no-linux
[serasa]: https://serasa.certificadodigital.com.br/ajuda/imposto-de-renda/
