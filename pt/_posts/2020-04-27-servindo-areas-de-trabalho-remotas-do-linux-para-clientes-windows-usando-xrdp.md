---
layout: post
title: 'Servindo áreas de trabalho remotas do Linux para clientes Windows usando XRDP'
date: 2020-04-27 19:40:00
image: '/files/2020/04/rdp-server.jpg'
nickname: 'rdp-server'
---

No [_post_ anterior][rdp-client], vimos como usar clientes RDP no [Linux] para acessar áreas de trabalho remotas do [Windows] ou [Terminal Services][ts] do [Windows Server][windows-server]. Mas se você precisa disponibilizar áreas de trabalho remotas do Linux para clientes com Windows (uma espécie de "Terminal Service às avessas"), é possível fazer isso?

{% include image.html src="/files/2020/04/rdp-server.jpg" %}

É possível sim! Hoje você verá como fazer no [Linux Kamarada][kamarada-15.1] e no [openSUSE] usando o XRDP.

O [XRDP] é um servidor de áreas de trabalho remotas para Linux baseado no protocolo [RDP] (_Remote Desktop Protocol_, “protocolo de área de trabalho remota”). Esse é o mesmo protocolo usado pelo aplicativo **Conexão de Área de Trabalho Remota** do Windows e pelos clientes RDP que vimos no [_post_ anterior][rdp-client].

## Instalando o XRDP

No computador ou servidor Linux que disponibilizará a(s) área(s) de trabalho (vamos chamá-lo apenas de "servidor" de agora em diante), instale o XRDP executando os comandos a seguir como administrador (usuário _root_):

```
# zypper ref
# zypper in xrdp
```

Habilite o serviço do XRDP para que ele seja iniciado automaticamente durante o _boot_:

```
# systemctl enable xrdp
```

Você também pode iniciar o XRDP imediatamente, não precisa reiniciar o servidor:

```
# systemctl start xrdp
```

## Instalando o VNC

Para prover conexão via RDP, um protocolo nativo do Windows, o XRDP utiliza nos bastidores o [VNC], um protocolo de acesso remoto mais comum no Linux. Por isso, antes de usar o XRDP propriamente dito, devemos instalar o VNC, o que é fácil fazer no Linux Kamarada e no openSUSE por meio do [Centro de controle do YaST][yast].

Abra o Centro de controle do YaST. Para fazer isso no Linux Kamarada, abra o menu **Atividades**, no canto superior esquerdo da tela, digite `yast` e clique no ícone correspondente:

{% include image.html src="/files/2020/04/rdp-server-01-pt.jpg" %}

Dentro da categoria **Serviços de rede**, clique no item **Administração remota (VNC)**:

{% include image.html src="/files/2020/04/rdp-server-02-pt.jpg" %}

Na tela seguinte, selecione a opção **Permitir Administração Remota com Gerenciamento de Sessões** e clique em **Próximo**:

{% include image.html src="/files/2020/04/rdp-server-03-pt.jpg" %}

(na verdade, eu testei as duas primeiras opções e não vi diferença no final)

O YaST informa que é necessário instalar o pacote **vncmanager**. Clique em **Instalar**:

{% include image.html src="/files/2020/04/rdp-server-04-pt.jpg" %}

Aguarde a conclusão do processo de instalação e configuração. Ao final, clique em **OK**:

{% include image.html src="/files/2020/04/rdp-server-05-pt.jpg" %}

## Configurando o firewall no servidor

Para terminar a instalação e configuração do XRDP, falta apenas mais um detalhe, que é liberar no _firewall_ a porta usada pelo protocolo RDP, que é, por padrão, a porta 3389 TCP.

Se você usa o [firewalld], que é o _firewall_ padrão do Linux Kamarada, o protocolo RDP está pré-cadastrado com o nome de `ms-wbt` (sigla para _Microsoft Windows-Based Terminal_). Você só precisa habilitá-lo na zona da sua interface de rede. Supondo que seja a zona pública (`public`), você pode habilitá-lo com o comando (modifique conforme necessário):

```
# firewall-cmd --permanent --zone=public --add-service=ms-wbt
```

Depois, recarregue as regras do firewalld:

```
# firewall-cmd --reload
```

Caso você use o [_firewall_ **iptables**][iptables], para liberar a porta 3389 TCP, adicione essas linhas ao seu _script_ de configuração:

```
# RDP (porta 3389/TCP)
iptables -A INPUT -p tcp --dport 3389 -j ACCEPT
```

Note que você só precisa fazer essa configuração no servidor. Se ela fosse necessária também no cliente, teríamos feito também no [_post_ anterior][rdp-client].

## Encerrando a sessão no servidor

Enquanto usa a área de trabalho remota do Windows, você não pode usar o servidor e acessa-lo remotamente ao mesmo tempo: se você inicia um acesso remoto, a tela no servidor é bloqueada. Bem assim, se você faz _logon_ no servidor, o acesso remoto é interrompido.

O XRDP funciona de forma semelhante, com a diferença que o encerramento da sessão não é feito de forma automática, mas manual. Antes de iniciar um acesso remoto a um servidor XRDP, você deve encerrar sua sessão nesse servidor.

Para encerrar sua sessão no Linux Kamarada, abra o **menu do sistema**, no canto superior direito da tela, expanda seu nome de usuário e clique em **Encerrar sessão**:

{% include image.html src="/files/2020/04/rdp-server-06-pt.jpg" %}

## Acesso remoto a partir do Windows

No computador com Windows a partir do qual você fará o acesso remoto, abra o **menu Iniciar**, no canto inferior esquerdo da tela, digite `conexao` e clique no ícone do aplicativo **Conexão de Área de Trabalho Remota**:

{% include image.html src="/files/2020/04/rdp-server-07-pt.jpg" %}

Digite o endereço IP ou o nome de rede (_hostname_) do **Computador** que deseja acessar (no meu exemplo, `10.0.0.253`) e clique em **Conectar**:

{% include image.html src="/files/2020/04/rdp-server-08-pt.png" %}

O aplicativo pergunta se pode confiar na conexão com o computador remoto. Marque a opção **Não perguntar novamente sobre conexões com este computador** e clique em **Sim**:

{% include image.html src="/files/2020/04/rdp-server-09-pt.png" %}

O cliente de área de trabalho remota do Windows mostra a tela de _login_ do XRDP:

{% include image.html src="/files/2020/04/rdp-server-10-pt.png" %}

Digite seu nome de usuário (_username_) e senha (_password_) no servidor Linux acessado e clique em **OK**.

Feito isso, você terá acesso à sua área de trabalho no servidor Linux acessado:

{% include image.html src="/files/2020/04/rdp-server-11-pt.jpg" %}

(note que, inicialmente, o acesso é feito em tela cheia, mas você pode mudar para uma janela)

Quando não precisar mais do acesso remoto, lembre-se de encerrar sua sessão no Linux.

## Dica: criando um atalho para a conexão

Se pretende acessar esse servidor Linux com frequência, você pode, para a sua conveniência, salvar os dados da conexão em algum local de fácil acesso, como a Área de Trabalho.

Para isso, na tela inicial do aplicativo Conexão de Área de Trabalho Remota, clique em **Mostrar Opções**. Digite o endereço IP ou nome de rede do **Computador** remoto com Linux. Digite também seu **Nome de usuário** nesse computador. Opcionalmente, marque a opção **Permitir salvar minhas credenciais** se você também deseja salvar a senha. Por fim, clique em **Salvar como**:

{% include image.html src="/files/2020/04/rdp-server-12-pt.png" %}

O aplicativo pergunta se pode confiar na conexão com o computador remoto. Marque a opção **Não perguntar novamente sobre conexões com este computador** e clique em **Conectar**:

{% include image.html src="/files/2020/04/rdp-server-13-pt.png" %}

Se você optou por salvar a senha, digite-a na caixa de diálogo seguinte, marque a opção **Lembrar-me** e clique em **OK**:

{% include image.html src="/files/2020/04/rdp-server-14-pt.png" %}

Escolha um local e um nome para o arquivo e salve-o.

Pronto! Feito isso, para se conectar novamente a esse servidor, é só dar duplo-clique no arquivo:

{% include image.html src="/files/2020/04/rdp-server-15-pt.jpg" %}

## Acesso remoto a partir do Linux

Se seu computador com Linux possui um cliente RDP instalado, pode acessar remotamente outro computador ou servidor com Linux que serve áreas de trabalho pelo XRDP:

{% include image.html src="/files/2020/04/rdp-server-16-pt.jpg" %}

Para mais informações sobre os clientes RDP existentes para Linux, consulte o _post_ anterior:

- [Conexão de área de trabalho remota do Windows no Linux com clientes RDP][rdp-client]

## Conclusão

Como vimos, o XRDP é uma forma prática de prover acesso remoto ao Linux a partir do Windows, uma vez que não é necessário instalar _software_ adicional no computador com Windows, que já está pronto para atuar como cliente.

De certa forma, é também uma forma prática de prover acesso remoto entre computadores com Linux. Basta instalar no servidor o XRDP e nos clientes, um dos programas listados no [_post_ anterior][rdp-client].

## Referências

- [OpenSUSE Leap 15: Connect to KDE desktop environment via XRDP - Narrow Escape][hiroom2]
- [Remote Graphical Sessions with VNC - Reference - openSUSE Leap 15.1][opensuse-doc]
- [Connecting via RDP - Guide - SUSE Linux Enterprise Server for SAP Applications 15 SP1][suse-doc]
- [opensuse - Enabling XRDP for remote on SUSE Linux Enterprise Server 12 SP3 (HVM) - Unix & Linux Stack Exchange][stackexchange]
- [How To Save Password in A Remote Desktop Connection in Windows 8 - Next of Windows][nextofwindows]
- [Virtual Desktop Infrastructure by xrdp - openSUSE - YouTube][youtube]

[rdp-client]:       {% post_url pt/2020-04-27-servindo-areas-de-trabalho-remotas-do-linux-para-clientes-windows-usando-xrdp %}
[linux]:            https://www.vivaolinux.com.br/linux/
[windows]:          https://www.microsoft.com/pt-br/windows/
[ts]:               https://pt.wikipedia.org/wiki/Remote_Desktop_Services
[windows-server]:   https://www.microsoft.com/pt-br/cloud-platform/windows-server
[kamarada-15.1]:    {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[opensuse]:         https://www.opensuse.org/
[xrdp]:             http://xrdp.org/
[rdp]:              https://pt.wikipedia.org/wiki/Remote_Desktop_Protocol
[vnc]:              https://pt.wikipedia.org/wiki/Virtual_Network_Computing
[yast]:             http://yast.opensuse.org/
[firewalld]:        https://firewalld.org/
[iptables]:         {% post_url pt/2019-11-18-proteja-se-com-o-firewall-iptables %}
[hiroom2]:          https://www.hiroom2.com/2018/06/14/opensuse-15-xrdp-kde-en/
[opensuse-doc]:     https://doc.opensuse.org/documentation/leap/reference/html/book.opensuse.reference/cha-vnc.html
[suse-doc]:         https://documentation.suse.com/sles-sap/15-SP1/html/SLES4SAP-guide/cha-s4s-configure-rdp.html
[stackexchange]:    https://unix.stackexchange.com/a/480858/106621
[nextofwindows]:    https://www.nextofwindows.com/how-to-save-password-in-a-remote-desktop-connection-in-windows-8
[youtube]:          https://www.youtube.com/watch?v=b3wTEelo7zo
