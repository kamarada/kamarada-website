---
date: '2017-02-28 21:40:00 UTC-3'
image: '/files/2017/02/irpf-2017.jpg'
layout: post
published: true
title: 'Como instalar o programa do Imposto de Renda 2017 no Linux openSUSE'
---

Na [semana passada][g1], a [Receita Federal][receita-federal] já liberou para os contribuintes brasileiros o programa do [Imposto de Renda Pessoa Física 2017][irpf-2017] (IRPF 2017) e deve começar a receber declarações agora depois do carnaval, no dia 02 de março. O prazo para entregar a declaração vai até o dia 28 de abril.

Veja nesse *post* como baixar e instalar o programa do IRPF 2017 no [openSUSE][opensuse].

{% include image.html src="/files/2017/02/irpf-2017.jpg" %}

**Observação:** não está no escopo deste *post* ensinar a preencher e enviar a declaração. Caso tenha dúvidas com relação a esses assuntos, consulte a ajuda do próprio programa ou o [*site* do IRPF 2017][irpf-2017].

## Pré-requisito: Java

O programa do IRPF 2017 [requer][irpf-instalacao] que a máquina virtual do Java da Oracle versão 7 ou superior esteja instalada no computador. Falamos sobre ela no [*post* anterior][how-to-oracle-jre].

Você pode acessar a [página de teste do Java][java-test] para ver se o Java está instalado no seu computador, qual versão está instalada e se há necessidade de atualizar. Para ver como instalar o Java da Oracle no openSUSE, leia [aquele *post*][how-to-oracle-jre].

## Download

Acesse o [*site* da Receita Federal (clique nesse *link*)][receita-federal].

Na página inicial, há um *banner* bem grande onde se lê **IRPF 2017**. Clique nele:

{% include image.html src="/files/2017/02/irpf-2017-01.jpg" %}

Na página do **Imposto de Renda Pessoa Física 2017**, clique no *link* **Download do Programa**:

{% include image.html src="/files/2017/02/irpf-2017-02.jpg" %}

Na seção, **Computador**, clique no *link* **Outros (Mac, Linux, Solaris)**:

{% include image.html src="/files/2017/02/irpf-2017-03.jpg" %}

Clique no *link* **LINUX (BIN 64 BITS)**:

{% include image.html src="/files/2017/02/irpf-2017-04.jpg" %}

Por fim, clique no *link* **Programa IRPF 2017** para baixar o instalador do programa:

{% include image.html src="/files/2017/02/irpf-2017-05.jpg" %}

## Instalação

Abra a pasta **Downloads**, onde foi baixado o instalador, clique com o botão direito do *mouse* no instalador e clique em **Propriedades**:

{% include image.html src="/files/2017/02/irpf-2017-06.jpg" %}

Mude para a aba **Permissões**, marque a opção **É executável** e clique em **OK**:

{% include image.html src="/files/2017/02/irpf-2017-07.jpg" %}

De volta à pasta **Downloads**, clique no instalador para iniciá-lo.

Ele informa que será instalado o programa do Imposto de Renda Pessoa Física 2017 (IRPF 2017) no computador e pergunta se deseja continuar, clique em **Sim**:

{% include image.html src="/files/2017/02/irpf-2017-08.png" %}

Nas demais telas da instalação, você pode clicar em **Avançar** e, na última, em **Concluir**:

{% include image.html src="/files/2017/02/irpf-2017-09.png" %}
{% include image.html src="/files/2017/02/irpf-2017-10.png" %}
{% include image.html src="/files/2017/02/irpf-2017-11.png" %}

Feito! O programa do Imposto de Renda 2017 já está instalado. Agora é só usar!

## Abrindo o programa

Se você seguiu a instalação até o final sem modificar nenhuma configuração, o instalador deve ter criado um atalho para o IRPF 2017 na Área de Trabalho:

{% include image.html src="/files/2017/02/irpf-2017-12.jpg" %}

Clique nesse atalho para iniciar o programa:

{% include image.html src="/files/2017/02/irpf-2017-13.jpg" %}

Agora é só fazer a declaração e enviar.

## Desinstalando o programa

No futuro, depois que você transmitir sua declaração, provavelmente o programa do IRPF 2017 não será mais necessário. Você poderá, então, desinstalá-lo do seu computador. Para isso, acesse a pasta onde ele foi instalado (por padrão, `/home/seunomedeusuario/ProgramasRFB/IRPF2017`) e clique em **uninstall**:

{% include image.html src="/files/2017/02/irpf-2017-14.jpg" %}

Espero que essa dica possa ter sido útil. Se ficou alguma dúvida em relação à instalação, não deixe de comentar! Até a próxima!

## Referências

- [Instruções de Instalação — Secretaria da Receita Federal do Brasil][irpf-instalacao]
- [IRPF 2017 no Linux - veja como instalar o programa][edivaldobrito.com.br]
- [Receita libera programa do IR nesta quinta; entrega começa em 2 de março | Economia / Imposto de Renda / Imposto de Renda 2017 | G1][g1]

[g1]:                   http://g1.globo.com/economia/imposto-de-renda/2017/noticia/receita-libera-programa-do-ir-nesta-quinta-entrega-comeca-em-2-de-marco.ghtml
[receita-federal]:      http://idg.receita.fazenda.gov.br/
[irpf-2017]:            http://idg.receita.fazenda.gov.br/interface/cidadao/irpf/2017
[opensuse]:             https://www.opensuse.org
[irpf-instalacao]:      https://idg.receita.fazenda.gov.br/interface/cidadao/irpf/2017/download/instrucoes-de-instalacao
[how-to-oracle-jre]:    {%post_url 2017-02-28-como-instalar-o-java-da-oracle-no-linux-opensuse %}
[java-test]:            https://www.java.com/verify/
[edivaldobrito.com.br]: http://www.edivaldobrito.com.br/como-instalar-o-irpf-2017-no-linux/

