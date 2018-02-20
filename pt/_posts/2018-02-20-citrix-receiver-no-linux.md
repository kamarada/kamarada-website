---
date: 2018-02-20 02:40:00 -0300
image: '/files/2018/02/citrix-receiver.jpg'
layout: post
published: true
nickname: 'how-to-citrix-receiver'
title: 'Citrix Receiver no Linux'
excerpt: 'A Citrix é uma empresa de software focada em soluções de virtualização e nuvem. Seus produtos mais conhecidos são o XenServer, o XenApp e o XenDesktop, que permitem virtualizar servidores, aplicativos e ambientes de trabalho, respectivamente. Uma possibilidade interessante é, de um lado, a empresa instalar em um servidor o XenApp ou o XenDesktop, para disponibilizar aplicativos, e de outro lado, o funcionário instalar em seu computador o Citrix Receiver, que é o software cliente dessas soluções. Com isso, o funcionário pode executar em seu computador um aplicativo da empresa como se estivesse dentro da empresa, ainda que na verdade esteja, por exemplo, em casa. Isso porque, embora a tela do aplicativo apareça em seu computador, o processamento ocorre na verdade no servidor. A empresa pode permitir que o funcionário leve seu próprio dispositivo (bring your own device, BYOD) e/ou trabalhe em casa, flexibilizando a carga horária e reduzindo custos. Se você trabalha em um lugar que utiliza o Citrix Receiver, verá neste post como instalá-lo no openSUSE Leap.'
---

{% include image.html src="/files/2018/02/citrix-receiver.jpg" %}

A [Citrix][citrix] é uma empresa de *software* focada em soluções de virtualização e nuvem. Seus produtos mais conhecidos são o [XenServer][xenserver], o [XenApp][xenapp-e-xendesktop] e o [XenDesktop][xenapp-e-xendesktop], que permitem virtualizar servidores, aplicativos e ambientes de trabalho, respectivamente.

Uma possibilidade interessante é, de um lado, a empresa instalar em um servidor o XenApp ou o XenDesktop, para disponibilizar aplicativos, e de outro lado, o funcionário instalar em seu computador o [Citrix Receiver][citrix-receiver], que é o *software* cliente dessas soluções. Com isso, o funcionário pode executar em seu computador um aplicativo da empresa como se estivesse dentro da empresa, ainda que na verdade esteja, por exemplo, em casa. Isso porque, embora a tela do aplicativo apareça em seu computador, o processamento ocorre na verdade no servidor. A empresa pode permitir que o funcionário leve seu próprio dispositivo ([*bring your own device*, BYOD][byod]) e/ou trabalhe em casa, flexibilizando a carga horária e reduzindo custos.

Se você trabalha em um lugar que utiliza o Citrix Receiver, verá neste *post* como instalá-lo no [openSUSE Leap][opensuse-leap].

## Obtendo o Citrix Receiver para Linux

Por algum *bug* do *site* da Citrix, eu não consegui baixar o Citrix Receiver para Linux do *site* em português brasileiro, apenas do *site* em inglês. Espero que se resolvam logo.

Acesse a [página de *downloads* do Citrix Receiver][download-citrix-receiver], expanda a seção **Receiver for Linux** e clique no *link* para a versão mais recente do Citrix Receiver (no momento em que escrevo, a 13.8, lançada em dezembro de 2017).

Na página seguinte, expanda a seção **RPM Packages** e depois a seção **SuSE Full Package (Self-Service Support)**. Clique no botão **Download File** abaixo de **Receiver for Linux (x86_64)**:

{% include image.html src="/files/2018/02/citrix-receiver-01.png" %}

Leia a licença e clique em **Yes, I accept** (*sim, eu aceito*) para iniciar o *download*.

Você vai baixar um [pacote RPM][rpm], que resumidamente é um arquivo compactado contendo todos os arquivos do programa a ser instalado, assim como informações sobre o programa e rotinas para instalá-lo, atualizá-lo e removê-lo.

## Instalando o Citrix Receiver para Linux

Quando o *download* terminar, abra o pacote RPM baixado. Você pode fazer isso clicando nele no seu navegador:

{% include image.html src="/files/2018/02/citrix-receiver-02-pt.png" %}

O sistema pede a senha do usuário administrador (usuário *root*), porque apenas ele pode fazer a instalação de programas. Você deve fornecê-la e clicar em **Continuar**:

{% include image.html src="/files/2018/02/citrix-receiver-03-pt.png" %}

É carregado o [YaST][yast], a ferramenta de configuração central do openSUSE:

{% include image.html src="/files/2018/02/citrix-receiver-04-pt.png" %}

Se o pacote a ser instalado depende de mais algum outro pacote para funcionar, o YaST já seleciona também as dependências para instalação.

Clique em **Aceitar**. O YaST é enfático quanto aos pacotes que foram selecionados automaticamente. Clique em **Continuar**.

O YaST começa a baixar os pacotes necessários e em seguida inicia a instalação. Pode ser que ele implique com o fato de o pacote do Citrix Receiver não estar assinado, você deve clicar em **Ignorar** para continuar:

{% include image.html src="/files/2018/02/citrix-receiver-05-pt.png" %}

Ao final, o YaST informa que a instalação foi concluída com sucesso:

{% include image.html src="/files/2018/02/citrix-receiver-06-pt.png" %}

 Clique em **Concluir** para sair do YaST.

Feito isso, o Citrix Receiver já está instalado no seu computador.

## Iniciando o Citrix Receiver para Linux

Para iniciar o Citrix Receiver, abra o menu **Atividades** no canto superior esquerdo da tela, comece a digitar `citrix` (ou `receiver`, ou `citrix receiver`, basta começar a digitar) até que apareça no menu o ícone do **Citrix Receiver** e clique nele:

{% include image.html src="/files/2018/02/citrix-receiver-07-pt.jpg" %}

## Primeira execução

Na primeira vez que você usa o Citrix Receiver, ele faz algumas configurações iniciais.

Você deve ler a licença do Citrix Receiver e aceitá-la clicando em **Accept**:

{% include image.html src="/files/2018/02/citrix-receiver-08.jpg" %}

Informe o endereço do *e-mail* ou do servidor que você usará para se conectar:

{% include image.html src="/files/2018/02/citrix-receiver-09.png" %}

O que informar nesse campo você deve perguntar ao departamento de TI da empresa onde você trabalha. Quando terminar, clique em **Add**.

É possível que o Citrix Receiver não consiga estabelecer uma conexão segura com o servidor por não confiar (leia-se "não conhecer") o certificado do servidor. Nesse caso, ele apresenta essa mensagem de erro:

{% include image.html src="/files/2018/02/citrix-receiver-10.png" %}

Já escrevi sobre [certificados de segurança][how-to-install-certificates] e como instalá-los nos navegadores [Mozilla Firefox][firefox] e [Google Chrome][chrome]. No caso do Citrix Receiver, instalar um certificado não é um processo gráfico, ou seja, não temos uma tela que nos auxilie a fazê-lo. Temos então que recorrer à interface de linha de comando. Vejamos como fazer isso.

Como medida de segurança, por padrão o Citrix Receiver conhece poucos certificados. O Mozilla Firefox conhece muito mais certificados. Podemos começar então copiando os certificados conhecidos pelo Mozilla Firefox para o Citrix Receiver.

Acesse a interface de linha de comando abrindo o menu **Atividades** e iniciando o aplicativo **Terminal**:

{% include image.html src="/files/2018/02/citrix-receiver-11-pt.jpg" %}

Alterne do seu usuário para o usuário administrador (*root*) executando o comando:

```
$ su
```

Digite a senha do usuário *root* e tecle **Enter** para continuar.

Como usuário *root*, efetue a cópia dos certificados:

```
# cp /etc/ssl/certs/* /opt/Citrix/ICAClient/keystore/cacerts/
```

A título de informação, `/etc/ssl/certs/` é a pasta onde o Mozilla Firefox armazena seus certificados conhecidos.

Já `/opt/Citrix/ICAClient/keystore/cacerts/` é a pasta onde o Citrix Receiver armazena seus certificados conhecidos.

Por fim, é necessário recalcular os *hashs* dos certificados do Citrix Receiver:

```
# c_rehash /opt/Citrix/ICAClient/keystore/cacerts/
```

Inicie o Citrix Receiver e tente se conectar novamente.

Se você se esbarrar na mesma mensagem de erro, peça o certificado do servidor ao departamento de TI e adicione-o ao Citrix Receiver. Supondo que o arquivo se chama `certificado.crt` e foi baixado em `/home/kamarada/Downloads`:

```
# cp /home/kamarada/Downloads/certificado.crt /opt/Citrix/ICAClient/keystore/cacerts/
# c_rehash /opt/Citrix/ICAClient/keystore/cacerts/
```

{% include image.html src="/files/2018/02/citrix-receiver-12-pt.png" %}

Agora sim você deve conseguir passar daquela tela em que você informou o endereço de *e-mail* ou do servidor.

O próximo passo é informar o nome de usuário e senha para se conectar (essas informações também devem ser obtidas do departamento de TI) e clicar em **Log On**:

{% include image.html src="/files/2018/02/citrix-receiver-13.png" %}

## Usando o Citrix Receiver para Linux

A tela principal do Citrix Receiver mostra os aplicativos que você pode utilizar:

{% include image.html src="/files/2018/02/citrix-receiver-14.jpg" %}

Pode ser que nem todos os aplicativos estejam listados. Você pode adicionar mais aplicativos, se houver disponíveis, clicando no ícone de adicionar à esquerda.

Clique em um aplicativo para iniciá-lo:

{% include image.html src="/files/2018/02/citrix-receiver-15.png" %}

Durante o uso, lembre-se que embora as telas dos aplicativos iniciados pelo Citrix Receiver apareçam em seu computador, o processamento ocorre na verdade no servidor. Na prática, é como se você estivesse dentro da empresa utilizando esses aplicativos em um computador da empresa.

## Integração com o Mozilla Firefox

O departamento de TI do seu trabalho pode te orientar a iniciar aplicativos por meio de algum *site* ou *link*, em vez do programa Citrix Receiver. Para possibilitar isso, o Citrix Receiver acrescenta um *plugin* ao navegador Mozilla Firefox.

Para verificar se o Mozilla Firefox está devidamente integrado ao Citrix Receiver, acesse `about:plugins` e veja se o *plugin* foi carregado:

{% include image.html src="/files/2018/02/citrix-receiver-16-pt.png" %}

## Referências

- [CitrixICAClientHowTo - Community Help Wiki][help-ubuntu]
- [Citrix - ArchWiki][wiki-archlinux]

[citrix]:                       https://www.citrix.com.br
[xenserver]:                    https://www.citrix.com.br/products/xenserver/
[xenapp-e-xendesktop]:          https://www.citrix.com.br/products/xenapp-xendesktop/
[citrix-receiver]:              https://www.citrix.com.br/products/receiver/
[byod]:                         https://pt.wikipedia.org/wiki/Bring_your_own_device
[opensuse-leap]:                {%post_url 2017-08-07-atualizacao-de-distribuicao-linux-continua-empoderando-a-comunidade-e-as-empresas-se-beneficiam %}
[download-citrix-receiver]:     https://www.citrix.com/downloads/citrix-receiver/
[rpm]:                          https://pt.wikipedia.org/wiki/RPM_(Linux)
[yast]:                         https://pt.opensuse.org/Portal:YaST
[how-to-install-certificates]:  {%post_url 2017-08-29-como-instalar-certificados-de-seguranca-no-linux %}
[firefox]:                      https://www.mozilla.org/pt-BR/firefox/
[chrome]:                       https://www.google.com/chrome/
[windows]:                      https://www.microsoft.com/pt-br/windows
[help-ubuntu]:                  https://help.ubuntu.com/community/CitrixICAClientHowTo
[wiki-archlinux]:               https://wiki.archlinux.org/index.php/citrix
