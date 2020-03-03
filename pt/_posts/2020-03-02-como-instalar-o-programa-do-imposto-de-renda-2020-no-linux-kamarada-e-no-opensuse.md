---
date: '2020-03-02 23:00:00 UTC-3'
image: '/files/2017/02/irpf-2017.jpg'
layout: post
published: true
title: 'Como instalar o programa do Imposto de Renda 2020 no Linux Kamarada (e no openSUSE)'
---

No dia [20 de fevereiro][g1], pouco antes do carnaval, a [Receita Federal][receita-federal] liberou para os contribuintes brasileiros o programa do [Imposto de Renda Pessoa Física 2020][irpf-2020] (IRPF 2020) e deve começar a receber declarações hoje, dia 02 de março. O prazo para entregar a declaração vai até o dia 30 de abril.

Veja nesse _post_ como baixar e instalar o programa do IRPF 2020 no recém-lançado [Linux Kamarada][linux-kamarada], baseado no [openSUSE] (logo, as instruções também servem para o openSUSE).

{% include image.html src="/files/2017/02/irpf-2017.jpg" %}

**Observação:** não está no escopo deste _post_ ensinar a preencher e enviar a declaração. Caso tenha dúvidas com relação a esses assuntos, consulte a ajuda do próprio programa ou o [_site_ do IRPF 2020][irpf-2020].

## Pré-requisito: Java

O programa do IRPF 2020 [requer][irpf-instalacao] que a [máquina virtual Java][java] da [Oracle] versão 8 ou superior esteja instalada no computador.

Para verificar se a máquina virtual Java está instalada, assim como qual versão está instalada, abra uma janela do terminal e execute o comando:

```
$ java -version
```

O Linux Kamarada já vem com a máquina virtual Java do [OpenJDK] versão 11 instalada. O comando acima, executado em uma instalação padrão do Linux Kamarada, deve retornar:

```
openjdk version "11.0.6" 2020-01-14
OpenJDK Runtime Environment (build 11.0.6+10-suse-lp151.3.12.1-x8664)
OpenJDK 64-Bit Server VM (build 11.0.6+10-suse-lp151.3.12.1-x8664, mixed mode)
```

Infelizmente, mesmo nesse caso, é necessário instalar a máquina virtual Java da Oracle, porque o programa do IRPF 2020 não é compatível com a máquina virtual Java do OpenJDK.

Caso você precise de ajuda para instalar a máquina virtual Java da Oracle, leia:

- [Como instalar o Java da Oracle no Linux openSUSE][java] (e também no Linux Kamarada)

A versão mais recente disponibilizada no _site_ [java.com] é a **8 Update 241**, lançada em [14 de janeiro de 2020][java-release-notes]. Com essa versão instalada, o comando `java -version` retorna:

```
java version "1.8.0_241"
Java(TM) SE Runtime Environment (build 1.8.0_241-b07)
Java HotSpot(TM) 64-Bit Server VM (build 25.241-b07, mixed mode)
```

Com a máquina virtual Java da Oracle instalada, podemos seguir em frente.

Se quiser saber um pouco mais sobre essas duas versões do Java (Oracle e OpenJDK), leia:

- [18 aplicativos que você pode usar do mesmo jeito no Linux e no Windows — parte 1][apps-linux-windows]

## Download

Acesse o _site_ da Receita Federal em:

- [receita.economia.gov.br][receita-federal]

Na página inicial, há um *banner* bem grande onde se lê **IRPF 2020**. Clique nele:

{% include image.html src="/files/2020/03/irpf-2020-01.jpg" %}

Na página do **Imposto sobre a Renda da Pessoa Física 2020**, clique no *link* **Download do Programa**:

{% include image.html src="/files/2020/03/irpf-2020-02.jpg" %}

Na seção, **Computador**, clique no *link* **Outros (Mac, Linux, Solaris)**:

{% include image.html src="/files/2020/03/irpf-2020-03.jpg" %}

Clique no *link* **LINUX (BIN 64 BITS)**:

{% include image.html src="/files/2020/03/irpf-2020-04.jpg" %}

Por fim, clique no *link* **Programa IRPF 2020** para baixar o instalador do programa:

{% include image.html src="/files/2020/03/irpf-2020-05.jpg" %}

## Permissão

Por questões de segurança, o [Linux] não deixa que arquivos binários (programas) sejam executados assim que são baixados. A menos que você, usuário, permita explicitamente que o programa seja executado.

Para permitir a execução do instalador, abra a pasta **Downloads**, onde o instalador foi baixado, clique com o botão direito do *mouse* no instalador e clique em **Propriedades**:

{% include image.html src="/files/2020/03/irpf-2020-06.jpg" %}

Mude para a aba **Permissões** e marque a opção **Permitir execução do arquivo como um programa**:

{% include image.html src="/files/2020/03/irpf-2020-07.jpg" %}

Em seguida, pode fechar a caixa de diálogo **Propriedades**.

## Instalação

Agora, nos esbarramos em outra questão de segurança: [desde 2018][omgubuntu], o gerenciador de arquivos da área de trabalho [GNOME] não inicia programas diretamente com um duplo clique. Até que ponto isso de fato aumenta a segurança do sistema ou é apenas uma burocracia, é discutível... mas não é nada que não possa ser facilmente contornado.

Nesse caso, para abrir executáveis na área de trabalho GNOME, teremos que recorrer ao terminal.

De volta à pasta **Downloads**, clique em qualquer área livre da janela e em seguida clique em **Abrir no terminal**:

{% include image.html src="/files/2020/03/irpf-2020-08.jpg" %}

Perceba que o terminal já abre na pasta **Downloads**. Comece digitando `./IRPF2020` e tecle **Tab**. O terminal vai completar o nome do executável:

{% include image.html src="/files/2020/03/irpf-2020-09.jpg" %}

Tecle **Enter** para iniciar o instalador, que será aberto em uma janela própria dele:

{% include image.html src="/files/2020/03/irpf-2020-10.jpg" %}

O instalador informa que será instalado o programa do IRPF 2020 no computador e pergunta se deseja continuar. Clique em **Sim**.

Nas demais telas da instalação, você pode clicar em **Avançar** e, na última, em **Concluir**:

{% include image.html src="/files/2020/03/irpf-2020-11.png" %}
{% include image.html src="/files/2020/03/irpf-2020-12.png" %}
{% include image.html src="/files/2020/03/irpf-2020-13.png" %}
{% include image.html src="/files/2020/03/irpf-2020-14.jpg" %}

De volta ao terminal, você pode fechá-lo.

Pronto! O programa do Imposto de Renda 2020 já está instalado. Agora é só usar!

## Abrindo o programa do IRPF 2020

Para iniciar o programa do IRPF 2020, abra o menu **Atividades**, no canto superior esquerdo da tela, digite `irpf` e clique no ícone **IRPF 2020 - Declaração de Ajuste Anual**:

{% include image.html src="/files/2020/03/irpf-2020-15.jpg" %}

{% include image.html src="/files/2020/03/irpf-2020-16.jpg" %}

Agora é só fazer a declaração e enviar.

## Iniciando o programa do IRPF 2020

No futuro, depois que você transmitir sua declaração, provavelmente o programa do IRPF 2020 não será mais necessário. Você poderá, então, desinstalá-lo do seu computador.

Para isso, abra o menu **Atividades**, digite `irpf` e clique no ícone **Desinstalar IRPF 2020**:

{% include image.html src="/files/2020/03/irpf-2020-17.jpg" %}

{% include image.html src="/files/2020/03/irpf-2020-18.png" %}

Siga as instruções na tela para desinstalar o programa do IRPF 2020.

Espero que essa dica tenha sido útil. Se ficou alguma dúvida em relação à instalação, não deixe de comentar! Até a próxima!

## Referências

- [Receita libera programa do Imposto de Renda 2020 - G1][g1]
- [Instruções de Instalação — Receita Federal][irpf-instalacao]
- [GNOME Is Removing the Ability to Launch Binary Apps from Nautilus - OMG! Ubuntu!][omgubuntu]

[g1]:                   https://g1.globo.com/economia/imposto-de-renda/2020/noticia/2020/02/20/receita-libera-programa-do-imposto-de-renda-2020.ghtml
[receita-federal]:      https://receita.economia.gov.br
[irpf-2020]:            https://receita.economia.gov.br/interface/cidadao/irpf/2020
[linux-kamarada]:       {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[opensuse]:             https://www.opensuse.org
[irpf-instalacao]:      https://receita.economia.gov.br/interface/cidadao/irpf/2020/download/instrucoes-de-instalacao
[java]:                 {% post_url pt/2017-02-28-como-instalar-o-java-da-oracle-no-linux-opensuse %}
[oracle]:               https://www.oracle.com/br/
[openjdk]:              https://openjdk.java.net/
[java.com]:             https://www.java.com/pt_BR/
[java-release-notes]:   https://www.oracle.com/technetwork/java/javase/8u241-relnotes-5813177.html
[apps-linux-windows]:   {% post_url pt/2019-07-05-18-aplicativos-que-voce-pode-usar-do-mesmo-jeito-no-linux-e-no-windows-parte-1 %}
[linux]:                http://www.vivaolinux.com.br/linux/
[omgubuntu]:            https://www.omgubuntu.co.uk/2018/05/nautilus-remove-ability-launch-binaries-apps
[gnome]:                https://br.gnome.org/
