---
date: '2018-04-16 02:30:00 UTC-3'
image: '/files/2017/02/irpf-2017.jpg'
layout: post
published: true
title: 'Como transmitir a declaração do Imposto de Renda com certificado digital no Linux openSUSE'
---

Quem possui [certificado digital][how-to-token] pode ter benefícios na hora de preencher a declaração do [Imposto de Renda Pessoa Física 2018][irpf-2018] (IRPF 2018). Embora seja opcional para a maioria dos contribuintes, em alguns casos a transmissão com certificado digital é obrigatória. Confira aqui quais são esses casos e como realizar a transmissão da declaração com certificado digital.

{% include image.html src="/files/2017/02/irpf-2017.jpg" %}

## Declaração pré-preenchida

Para quem possui certificado digital, a [Receita Federal][receita-federal] disponibiliza a [declaração pré-preenchida][declaracao-pre-preenchida], que já vem com alguns dados preenchidos, como rendimentos, deduções, bens e dívidas. A declaração pré-preenchida ajuda a economizar tempo e evitar erros, o que reduz o risco de cair na malha fina.

Para que esses dados venham preenchidos automaticamente na declaração, é necessário que antes as pessoas jurídicas responsáveis (fontes pagadoras, imobiliárias e médicos, por exemplo) já tenham enviado suas declarações, cujos prazos são anteriores ao prazo da pessoa física.

A declaração pré-preenchida está disponível para *download* no sistema [eCAC][ecac]. Após baixá-la, o contribuinte pode importá-la no programa do IRPF 2018 e continuar a preencher a declaração tomando como ponto de partida os dados pré-preenchidos.

Para mais informações sobre como importar a declaração pré-preenchida, consulte o [*site* da Receita Federal][declaracao-pre-preenchida].

## Obrigatoriedade do uso do certificado

Em resumo, é obrigatório transmitir a declaração com certificado digital quando na declaração os rendimentos e/ou pagamentos passam de R$ 10 milhões.

Mais informações, obtidas [nesta página da Receita Federal][obrigatoriedade]:

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

Para ainda mais informações, consulte [a referida página][obrigatoriedade].

## Pré-requisitos

O programa do IRPF 2018 [requer][irpf-instalacao] que a máquina virtual do [Java][java] da [Oracle][oracle] versão 7 ou superior esteja instalada no computador. Você pode acessar a [página de teste do Java][java-test] para ver se o Java está instalado no seu computador, qual versão está instalada e se há necessidade de atualizar.

No momento da escrita, a versão mais atual do Java é a **8 Update 161**, lançada em [16 de janeiro de 2018][java-release-notes]. Caso precise, dediquei um *post* a explicar [como instalar o Java][how-to-oracle-jre].

Também já expliquei aqui [como instalar o programa do Imposto de Renda][irpf-2017]. O *post* trata do IRPF 2017, mas a instalação do IRPF 2018 é bastante semelhante. Você pode obter o programa do IRPF 2018 do [*site* da Receita Federal][receita-federal].

A mídia do certificado digital ([cartão inteligente][cartao-inteligente], [*token*][token] ou arquivo) deve estar funcionando. Um bom teste é acessar o sistema [eCAC][ecac], da Receita Federal. [Como configurar o certificado digital e acessar o eCAC][how-to-token] foi o assunto do *post* anterior.

Por fim, observo que utilizo a distribuição [openSUSE Leap 15.0 Beta][opensuse-leap-15].

Sem mais delongas, vamos meter a mão na massa!

## Configurando o Receitanet

Para que o programa do IRPF 2018 reconheça a mídia do certificado digital, é necessário criar um arquivo de configuração na pasta do Receitanet.

Abra o aplicativo **Editor de texto** e copie e cole o seguinte conteúdo:

```
name=eToken
library=/usr/lib64/libeToken.so
```

Explicando essas duas variáveis:

- `name`: um [identificador][identificador] (não pode ter espaços) para a mídia do certificado; e
- `library`: caminho para a biblioteca (extensão `.so`) que implementa o padrão [PKCS#11][pkcs-11] para a mídia do certificado.

Salve esse arquivo com o nome de `receitanet.cfg` na pasta `~/.receitanet`:

{% include image.html src="/files/2018/04/irpf-2018-certificado-01.png" %}

## Entregando a declaração

Abra o programa do IRPF 2018 e inicie o procedimento para transmitir a declaração. Para isso, vá no menu **Declaração** e clique em **Entregar Declaração**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-02.jpg" %}

Selecione a sua declaração, marque a opção **Transmitir com certificação digital** e clique em **OK**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-03.png" %}

Revise a forma de pagamento ou restituição do imposto:

{% include image.html src="/files/2018/04/irpf-2018-certificado-04.png" %}

O programa verifica o certificado digital armazenado na mídia. Informe a senha PIN:

{% include image.html src="/files/2018/04/irpf-2018-certificado-05.jpg" %}

Selecione seu certificado na lista e clique em **Assinar**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-06.jpg" %}

Nesse momento, para mim, a luz do *token* acendeu (que nem tem *pendrives* que acendem uma luz quando estão sendo utilizados) e o programa fechou, sem dar qualquer aviso. No entanto, ao iniciar novamente o programa do IRPF 2018, percebi que havia recibo de entrega. Concluí que, embora o programa tivesse travado, a declaração havia sido transmitida.

Para salvar o recibo de entrega da declaração como PDF, vá no menu **Imprimir** e clique em **Recibo**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-07.jpg" %}

Selecione a sua declaração (observe o ícone **Transmitida** no início da linha), selecione a opção **Visualizar** e clique em **OK**:

{% include image.html src="/files/2018/04/irpf-2018-certificado-08.png" %}

Observe a informação ao final da primeira página:

> Esta declaração foi assinada com o certificado digital do NI 123.456.789-01

{% include image.html src="/files/2018/04/irpf-2018-certificado-09.png" %}

Para salvar o recibo como PDF, clique no ícone de **Salvar** no canto superior esquerdo da janela.

## Restituição antecipada

Há quem diga que [transmitir a declaração com certificado digital antecipa a restituição][certificado-restituicao], mas eu **não consegui confirmar essa informação** em uma página oficial da Receita Federal. Fica a dúvida no ar se é verdade ou não...

## Referências

- [IR: Certificados digitais ajudam a economizar tempo e evitar erros - Jornal O Globo][ir-oglobo]
- [Configuração para uso de Tokens e SmartCards no Linux —  Receita Federal][tokens-receita]
- [Declaração do Imposto de Renda com Certificado Digital][serasa]

[how-to-token]:                 {%post_url 2018-04-16-configurando-certificado-digital-no-linux-opensuse %}
[irpf-2018]:                    http://idg.receita.fazenda.gov.br/interface/cidadao/irpf/2018
[receita-federal]:              http://idg.receita.fazenda.gov.br/
[declaracao-pre-preenchida]:    http://idg.receita.fazenda.gov.br/orientacao/tributaria/declaracoes-e-demonstrativos/dirpf/declaracao-pre-preenchida
[ecac]:                         https://cav.receita.fazenda.gov.br/
[obrigatoriedade]:              http://idg.receita.fazenda.gov.br/interface/cidadao/irpf/2018/declaracao/transmissao
[irpf-instalacao]:              https://idg.receita.fazenda.gov.br/interface/cidadao/irpf/2018/download/instrucoes-de-instalacao
[java]:                         https://www.java.com/pt_BR/
[oracle]:                       https://www.oracle.com/br/
[java-test]:                    https://www.java.com/verify/
[java-release-notes]:           http://www.oracle.com/technetwork/java/javase/8u161-relnotes-4021379.html
[how-to-oracle-jre]:            {%post_url 2017-02-28-como-instalar-o-java-da-oracle-no-linux-opensuse %}
[irpf-2017]:                    {%post_url 2017-02-28-como-instalar-o-programa-do-imposto-de-renda-2017-no-linux-opensuse %}
[cartao-inteligente]:           https://pt.wikipedia.org/wiki/Cart%C3%A3o_inteligente
[token]:                        https://pt.wikipedia.org/wiki/Token_(chave_eletr%C3%B4nica)
[opensuse-leap-15]:             https://news.opensuse.org/2018/01/31/opensuse-leap-15-reaches-beta-phase-snapshots/
[identificador]:                https://pt.wikipedia.org/wiki/Identificador
[pkcs-11]:                      https://en.wikipedia.org/wiki/PKCS_11
[certificado-restituicao]:      https://exame.abril.com.br/tecnologia/certificado-digital-facilita-a-declaracao-do-imposto-de-renda/
[ir-oglobo]:                    https://oglobo.globo.com/economia/ir-certificados-digitais-ajudam-economizar-tempo-evitar-erros-18939459
[tokens-receita]:               http://idg.receita.fazenda.gov.br/programas-para-download/receitanet/ajuda-do-receitanet/configuracao-para-uso-de-tokens-e-smartcards-no-linux
[serasa]:                       https://serasa.certificadodigital.com.br/ajuda/imposto-de-renda/