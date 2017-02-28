---
date: '2017-02-28 17:35:00 UTC-3'
image: '/files/2017/02/DukeNTux.jpg'
layout: post
published: true
nickname: 'how-to-oracle-jre'
title: 'Como instalar o Java da Oracle no Linux openSUSE'
---

Quando falamos em [Java][java], podemos estar falando da [linguagem de programação Java][java-programming-language] ou da [máquina virtual Java][java-virtual-machine]. A segunda é necessária para executar programas feitos com a primeira. E o que torna a tecnologia Java tão especial? Os programas que são desenvolvidos em Java rodam sobre a máquina virtual, que está disponível diversos sistemas, como [Linux][linux], [Windows][windows] e [Mac OS X][macosx]. Então, os programas desenvolvidos em Java podem, a princípio, ser usados em qualquer sistema.

Além disso, a linguagem Java inovou ao permitir que pequenos programas sejam executados em páginas da Internet, diretamente dentro do navegador, na forma de [*applets*][java-applet]. Para que isso seja possível, o *plugin* do Java deve ser instalado.

{% include image.html src="/files/2017/02/DukeNTux.jpg" caption="[Duke](http://www.oracle.com/us/technologies/java/duke-424174.html), o mascote do Java, ao lado do [Tux](https://pt.wikipedia.org/wiki/Tux), o mascote do Linux" %}

Vejamos como instalar a versão mais recente da máquina virtual Java da [Oracle][oracle] no Linux [openSUSE][opensuse]. Para referência futura, no momento da escrita deste *post*, ela está na versão **8 Update 121**, lançada em [17 de janeiro de 2017][java-release-notes].

## Java "da Oracle"? Existe outra?

A linguagem e a máquina virtual Java foram projetadas originalmente pela empresa [Sun Microsystems][sun]. Até 2006, elas eram gratuitas, mas proprietárias (ou seja, o código-fonte delas era de propriedade da Sun, não estando disponível para quem tivesse interesse em obtê-lo). Nesse ano, a Sun liberou o código-fonte de grande parte da máquina virtual Java, dando origem ao projeto [OpenJDK][openjdk], que é [*software* livre][free-software].

Em 2009, a Sun foi comprada pela Oracle, que deu continuidade ao projeto OpenJDK.

A máquina virtual Java do OpenJDK pode ser facilmente instalada em várias distribuições Linux, dentre as quais o openSUSE, no qual já vem instalada por padrão.

Tanto a máquina virtual do OpenJDK quanto a da Oracle são gratuitas, a diferença entre elas é que a implementação da Oracle adiciona alguns componentes proprietários e, por isso, não tem seu código aberto. Também por isso a máquina virtual da Oracle não pode ser distribuída, devendo ser obtida do seu *site*.

Infelizmente, alguns programas como o *netbanking* do [Banco do Brasil][bb] (e de outros bancos) e o [Imposto de Renda][irpf] exigem que o Java da Oracle esteja instalado no computador, o que obriga os usuários de Linux a instalarem em suas máquinas o Java da Oracle, mesmo que o OpenJDK já esteja instalado.

A instalação do Java da Oracle é um pouco trabalhosa. Mas nesse *post*, você será acompanhado passo a passo nessa tarefa. Uma vez concluída a instalação, você poderá utilizar o Java com tranquilidade.

## 1) Download da máquina virtual Java da Oracle

Para obter a máquina virtual Java da Oracle, acesse seu *site* em [java.com][java.com] e clique em **Download Gratuito do Java**:

{% include image.html src="/files/2017/02/oracle-jre-01-pt.jpg" %}

Depois, clique em **Linux x64 RPM** para obter o pacote para instalação no openSUSE:

{% include image.html src="/files/2017/02/oracle-jre-02-pt.jpg" %}

O *download* do pacote vai começar.

## 2) Instalação da Java da Oracle e remoção do plugin do OpenJDK

Quando o *download* terminar, abra a pasta **Downloads**, localize o pacote baixado, clique nele com o botão direito do *mouse* e vá em **Abrir com**, **Install/Remove Software** (Instalar/Remover Programas):

{% include image.html src="/files/2017/02/oracle-jre-03-pt.jpg" %}

Você deve fornecer a senha do usuário *root* para continuar.

O [Centro de Controle YaST][yast] é iniciado e mostra informações sobre o pacote que será instalado:

{% include image.html src="/files/2017/02/oracle-jre-04-pt.jpg" %}

Aproveitando a ocasião, vamos remover o *plugin* do Java do OpenJDK, para que ele não conflite com o *plugin* do Java da Oracle. Para isso, mude para a aba **Pesquisar**, pesquise por **java**, clique com o botão direito do *mouse* no pacote **java-1\_7\_0-openjdk-plugin** e clique em **Remover**:

{% include image.html src="/files/2017/02/oracle-jre-05-pt.jpg" %}

Faça o mesmo para o pacote **java-1\_8\_0-openjdk-plugin**.

Volte para a aba **Resumo da instalação**, verifique se as ações a serem executadas estão de acordo e clique em **Aceitar**:

{% include image.html src="/files/2017/02/oracle-jre-06-pt.jpg" %}

O YaST mostra o progresso da instalação.

Quando terminar, clique em **Concluir** para sair do YaST:

{% include image.html src="/files/2017/02/oracle-jre-07-pt.jpg" %}

## 3) Variáveis de ambiente JAVA_HOME e PATH

Acesse sua **Pasta Pessoal** (geralmente, `/home/seunomedeusuario`) e ative a exibição de **Arquivos ocultos**:

{% include image.html src="/files/2017/02/oracle-jre-08-pt.jpg" %}

Abra o arquivo `.bashrc`:

{% include image.html src="/files/2017/02/oracle-jre-09-pt.jpg" %}

Acrescente ao final as linhas:

```sh
export JAVA_HOME="/usr/java/latest"
export PATH="$JAVA_HOME/bin:$PATH"
```

E clique em **Salvar**:

{% include image.html src="/files/2017/02/oracle-jre-10-pt.jpg" %}

## 4) Teste do Java na linha de comando

Abra uma nova janela do terminal (caso já esteja com o terminal aberto, feche-o e abra outro, para que o arquivo `.bashrc` seja lido novamente) e execute o comando:

```
$ java -version
```

Ele deve retornar algo como:

```
java version "1.8.0_121"
Java(TM) SE Runtime Environment (build 1.8.0_121-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.121-b13, mixed mode)
```

Isso indica que a versão mais recente do Java da Oracle está instalada.

## 5) Plugin do Java

Diferente do que ocorre com o OpenJDK, em que o *plugin* do Java é instalado em um pacote à parte, o pacote do Java da Oracle inclui o *plugin* do Java.

O [Mozilla Firefox][mozilla-firefox], navegador padrão do openSUSE, reconhece os *plugins* que estão na pasta `/usr/lib64/browser-plugins/`. Para que o Firefox reconheça o *plugin* do Java da Oracle, que está na pasta em que o Java foi instalado, vamos criar um *link* simbólico para o *plugin*. Para isso, execute o comando:

```
# ln -s /usr/java/latest/lib/amd64/libnpjp2.so /usr/lib64/browser-plugins/
```

Se não quiser entrar com o usuário *root* só para isso, utilize o comando **sudo**:

```
$ sudo ln -s /usr/java/latest/lib/amd64/libnpjp2.so /usr/lib64/browser-plugins/
```

Você deve fornecer a senha do usuário *root* para que o comando seja executado:

{% include image.html src="/files/2017/02/oracle-jre-11-pt.jpg" %}

## 6) Teste do plugin do Java no navegador

Abra o Firefox (caso já esteja com o Firefox aberto, é importante que você feche-o e abra-o de novo, para que ele reconheça o *plugin* do Java) e acesse a página `about:plugins`:

{% include image.html src="/files/2017/02/oracle-jre-12-pt.png" %}

Perceba que o *plugin* do Java aparece na lista de *plugins* instalados.

Agora vamos testar o *plugin* do Java com o *applet* oficial que verifica se você possui a versão mais recente do Java instalada.

Acesse a [página de teste do Java][java-test] (se preferir, pesquise por `java test` no [Google][google] e clique no primeiro resultado) e clique no botão **Verify Java version** (verificar versão do Java):

{% include image.html src="/files/2017/02/oracle-jre-13.jpg" %}

Por padrão, o Firefox bloqueia a execução do *plugin* do Java. Clique em **Ativar o Java**:

{% include image.html src="/files/2017/02/oracle-jre-14-pt.jpg" %}

O Firefox pergunta se você deseja permitir que o *plugin* do Java seja executado no *site* do Java. Você pode clicar em **Permitir e memorizar** para que ele não faça mais essa pergunta para esse *site*:

{% include image.html src="/files/2017/02/oracle-jre-15-pt.jpg" %}

O *plugin* do Java, por sua vez, pede permissão para executar o *applet* (nossa, é muita burocracia, né?). Clique em **Executar**:

{% include image.html src="/files/2017/02/oracle-jre-16-pt.jpg" %}

Após um tempo carregando o *applet* e verificando a instalação do Java no computador, a página deve parabenizá-lo por estar usando a versão mais recente:

{% include image.html src="/files/2017/02/oracle-jre-17.jpg" %}

Pronto! Instalamos, configuramos e testamos o Java da Oracle, agora é só utilizá-lo.

[java]:                         https://java.com/pt_BR/about/whatis_java.jsp
[java-programming-language]:    https://pt.wikipedia.org/wiki/Java_(linguagem_de_programa%C3%A7%C3%A3o)
[java-virtual-machine]:         https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual_Java
[linux]:                        https://www.vivaolinux.com.br/linux/
[windows]:                      https://www.microsoft.com/pt-br/windows/
[macosx]:                       http://www.apple.com/br/macosx/
[java-applet]:                  https://pt.wikipedia.org/wiki/Applet_Java
[oracle]:                       https://www.oracle.com/br/
[opensuse]:                     https://www.opensuse.org
[java-release-notes]:           http://www.oracle.com/technetwork/java/javase/8u121-relnotes-3315208.html
[sun]:                          https://pt.wikipedia.org/wiki/Sun_Microsystems
[openjdk]:                      http://openjdk.java.net/
[free-software]:                https://www.gnu.org/philosophy/free-sw.pt-br.html
[bb]:                           http://www.bb.com.br/
[irpf]:                         http://idg.receita.fazenda.gov.br/interface/cidadao/irpf/2017
[java.com]:                     https://www.java.com/pt_BR/
[yast]:                         https://pt.opensuse.org/Portal:YaST
[mozilla-firefox]:              https://www.mozilla.org/pt-BR/firefox/
[java-test]:                    https://www.java.com/verify/
[google]:                       https://www.google.com.br/
