---
date: '2016-11-15 23:59:59 GMT-2'
excerpt: 'É fácil instalar o openSUSE Leap no seu computador. Aqui você verá um breve passo a passo de como pode fazer isso.'
layout: post
published: true
title: 'Como instalar o Linux openSUSE Leap'
image: /files/2016/11/installation.jpg
nickname: 'how-to-install'
---

É fácil instalar o Linux [openSUSE Leap][opensuse-leap] no seu computador. Aqui você verá um breve passo a passo de como pode fazer isso. Se precisar de mais informações, consulte a [documentação oficial do openSUSE Leap][opensuse-doc].

{% include image.html src="/files/2016/11/installation.jpg" %}

## Antes da instalação

Antes de começar, aqui vão algumas coisas às quais você deve se atentar.

O openSUSE Leap oferece suporte à grande maioria dos componentes de *hardware* existentes para [PC][pc] e pode ser instalado junto com seu sistema operacional atual (talvez seu computador já tenha o [Windows][windows] instalado, por exemplo). Você não precisa removê-lo para instalar o openSUSE.

No entanto, para que o sistema funcione bem, seu computador deve satisfazer aos seguintes [requisitos][system-requirements]:

- Processador de 64 *bits* [Intel][intel], [AMD][amd] ou compatível (processadores de 32 *bits* não são suportados, mas se seu computador é ao menos relativamente novo é bem provável que seu processador seja de 32 *bits*);
- Memória RAM de pelo menos 1GB (são recomendados 2GB ou mais); e
- Disco rígido com 5GB de espaço livre (recomenda-se mais para arquivos pessoais e eventuais programas que você virá a ser instalar no futuro).

Se você vai instalar o openSUSE Leap em um *notebook*, certifique-se de que ele esteja com a bateria completamente carregada e conectado à fonte de alimentação. Não desconecte a bateria ou a fonte durante a instalação.

## Começando

Qual mídia você vai usar para instalar o openSUSE Leap? Se for o [LiveDVD produzido pelo Projeto Linux Kamarada][how-to-livedvd], insira-o na unidade de DVD do seu computador. Se você vai utilizar um [LiveUSB][how-to-liveusb], conecte-o a uma porta USB do seu computador. Após isso, em ambos os casos, reinicie o computador.

Em instantes, você verá a [área de trabalho do KDE][kde]:

{% include image.html src="/files/2016/11/installation-01-pt.jpg" %}

Clique no ícone **Instalar** na área de trabalho para iniciar a instalação.

## 1) Idioma, leiaute de teclado e licença

Na primeira tela da instalação, você será apresentado às configurações de idioma e leiaute (*layout*) de teclado, assim como à [licença de uso do openSUSE Leap][opensuse-license]:

{% include image.html src="/files/2016/11/installation-02-pt.jpg" %}

Verifique se as configurações de idioma e teclado estão corretas. Há um campo de texto em que você pode digitar qualquer coisa para testar a configuração do teclado. Eu recomendo digitar uma palavra como **acentuação**, com caracteres especiais (note a presença do til e da cê-cedilha).

Você não precisa se preocupar com a licença de uso: uma vez que o openSUSE é um [*software* livre][free-software], ela não limita a forma como você pode utilizá-lo. Você pode lê-la para conhecer seus direitos ao usar o openSUSE.

Quando terminar, clique em **Avançar**.

## 2) Relógio e fuso horário

{% include image.html src="/files/2016/11/installation-03-pt.jpg" %}

Verifique se as configurações de fuso horário, data e hora estão corretas.

Se o fuso horário sugerido não estiver correto, você pode mudá-lo. Para isso, clique no mapa mais ou menos perto de onde mora ou selecione primeiro uma **Região** (nesse caso, **Brasil**) e depois um **Fuso horário**:

- se você mora na região Sul, Sudeste ou Centro-Oeste, regiões que adotam o horário de verão, pode selecionar o fuso horário de **São Paulo**; ou
- se você mora no Nordeste ou no Norte, pode selecionar o fuso horário de **Maceió**.

{% include image.html src="/files/2016/10/mapa-horario-de-verao-2016-2017.jpg" caption="Estados que adotam horário de verão no Brasil (referências: [G1](http://g1.globo.com/economia/noticia/2016/10/horario-de-verao-comeca-em-16-de-outubro-e-vai-ate-19-de-fevereiro.html) e [Decreto nº 8.112](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/Decreto/D8112.htm), mapa derivado do [mapa do Brasil em branco disponível na WikiMedia](https://commons.wikimedia.org/wiki/File:Brazil_Blank_Map_light.svg))" %}

Se você vai utilizar apenas o Linux no seu computador, a opção **Relógio do Hardware Definido como UTC** deve estar marcada. Se além do Linux você também vai utilizar Windows ou outro sistema operacional, desmarque essa opção.

Para mais informações sobre as opções dessa tela, leia o *post* [Mantenha a hora do seu computador sempre certa com o NTP][how-to-ntp-client].

Quando terminar, clique em **Avançar**.

## 3) Particionamento

{% include image.html src="/files/2016/11/installation-04-pt.jpg" %}

Por padrão, o openSUSE deve sugerir a divisão do seu disco rígido em três partições:

- `/` (raiz ou *root*), para os arquivos do sistema;
- `/home`, para os arquivos pessoais do(s) usuário(s); e
- [*swap*][swap], que é um espaço do disco rígido utilizado em complemento à memória RAM, semelhante ao [arquivo de paginação][page-file] do Windows.

Se seu computador possui a tecnologia [UEFI][uefi] (como é o caso na figura), possivelmente o instalador sugerirá a criação de uma quarta partição, que é a [ESP][esp]. Se seu computador já possui o Windows instalado, é provável que essa partição já exista, de modo que sua criação não é sugerida.

Não falarei muito sobre particionamento aqui, pois isso seria assunto para um *post* inteiro (e extenso). Se precisar de mais informações, sugiro que consulte a [documentação oficial do openSUSE][opensuse-doc-partitioning].

Normalmente o instalador do openSUSE é bastante inteligente para sugerir a melhor configuração de particionamento possível para o seu computador. Modifique-a apenas se souber o que está fazendo, uma vez que um particionamento feito de maneira incorreta pode acarretar a exclusão acidental de arquivos.

Quando terminar, clique em **Avançar**.

## 4) Usuário e senha

{% include image.html src="/files/2016/11/installation-05-pt.jpg" %}

Nessa tela, você vai criar uma conta de usuário para você. Informe seu nome completo e qual nome de usuário (*login*) e senha você deseja utilizar.

Se segurança é uma preocupação, observe que o instalador sugere que:

- a senha do administrador (superusuário, *root*) seja igual à sua; e que
- o *login* na sua conta de usuário seja automático.

São opções que visam a comodidade, mas acabam por tornar o sistema um pouco menos seguro. Considere a possibilidade de desmarcar a opção **Usar esta senha para o administrador do sistema** e definir uma senha diferente para o usuário *root*. Além disso, desmarcando a opção **Login Automático** você tornará obrigatório o fornecimento de um *login* e senha para utilizar o computador.

Quando terminar, clique em **Avançar**.

Pode ser que o instalador considere a sua senha simples e chame a atenção:

{% include image.html src="/files/2016/11/installation-06-pt.jpg" %}

Nesse caso, é recomendado clicar em **Não** e definir uma nova senha, mais segura.

Se quiser dicas de como elaborar uma senha segura, consulte essa [cartilha de segurança do CERT.br][passwords] a respeito de senhas.

## 5) Resumo da instalação

{% include image.html src="/files/2016/11/installation-07-pt.jpg" %}

Verifique se tudo está conforme o desejado. Uma vez passada essa tela, não há volta.

Se precisar alterar alguma configuração, clique no *link* da configuração desejada para ir para a tela correspondente.

Senão, clique em **Instalar**. Uma mensagem de confirmação será exibida:

{% include image.html src="/files/2016/11/installation-08-pt.jpg" %}

Clique em **Instalar** para começar a instalação de fato.

## 6) Progresso da instalação

{% include image.html src="/files/2016/11/installation-09-pt.jpg" %}

Agora o instalador do openSUSE exibe em detalhes o progresso da instalação.

Apesar de ser possível, evite usar o computador durante a instalação, para evitar que ele trave e o sistema que está sendo instalado seja corrompido, o que pode tornar o computador inutilizável.

Quando tudo estiver pronto, o instalador solicitará que o computador seja reiniciado:

{% include image.html src="/files/2016/11/installation-10-pt.jpg" %}

Isso é tudo.

Agora é só reiniciar seu computador e começar a usar o openSUSE Leap. Divirta-se!

[opensuse-leap]:                {%post_url 2015-11-04-opensuse-leap-42-1-se-torna-a-primeira-distribuicao-linux-hibrida %}
[opensuse-doc]:                 https://doc.opensuse.org/documentation/leap/startup/html/book.opensuse.startup/part.basics.html
[pc]:                           https://pt.wikipedia.org/wiki/IBM_PC
[windows]:                      https://www.microsoft.com/pt-br/windows/
[system-requirements]:          https://doc.opensuse.org/documentation/leap/startup/html/book.opensuse.startup/art.opensuse.installquick.html#sec.osuse.installquick.sysreqs
[intel]:                        http://www.intel.com.br/
[amd]:                          http://www.amd.com/pt-br
[how-to-livedvd]:               {%post_url 2016-04-22-como-gravar-um-livedvd %}
[how-to-liveusb]:               {%post_url 2016-02-21-como-preparar-um-liveusb %}
[kde]:                          https://www.kde.org/
[opensuse-license]:             https://en.opensuse.org/openSUSE:License
[free-software]:                https://www.gnu.org/philosophy/free-sw.pt-br.html
[how-to-ntp-client]:            {%post_url 2016-10-15-mantenha-a-hora-do-seu-computador-sempre-certa-com-o-ntp %}
[swap]:                         https://www.vivaolinux.com.br/artigo/Funcionamento-da-memoria-virtual
[page-file]:                    https://support.microsoft.com/kb/2160852
[uefi]:                         https://pt.wikipedia.org/wiki/UEFI
[esp]:                          https://en.wikipedia.org/wiki/EFI_system_partition
[opensuse-doc-partitioning]:    https://doc.opensuse.org/documentation/leap/startup/html/book.opensuse.startup/cha.inst.html#sec.i.yast2.inst_mode.partitioning
[passwords]:                    http://cartilha.cert.br/senhas/
