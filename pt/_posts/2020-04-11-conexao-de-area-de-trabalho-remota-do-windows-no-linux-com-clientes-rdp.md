---
date: '2020-04-11 17:20:00 GMT-3'
layout: post
title: 'Conexão de área de trabalho remota do Windows no Linux com clientes RDP'
image: '/files/2020/04/rdp-client.jpg'
nickname: 'rdp-client'
---

Você já usou a [**Conexão de Área de Trabalho Remota**][win-rdc] do [Windows]? Esse aplicativo, presente em todas as instalações do Windows, permite que você acesse remotamente outro computador com Windows ou um servidor com [Windows Server][windows-server]. Para isso, ele utiliza o protocolo [RDP] (_Remote Desktop Protocol_, "protocolo de área de trabalho remota").

Há organizações que optam por instalar programas de forma centralizada no Windows Server em vez de instalá-los em seus vários computadores. Para usar esses programas, seus colaboradores devem acessar remotamente esse servidor, que antigamente era chamado de [Terminal Server][ts] (TS). Atualmente, essa prática já não é tão comum devido aos sistemas _web_, mas em alguns cenários ela pode ser necessária.

Nesses cenários, usuários de [Linux] podem, a partir de seu sistema favorito, acessar remotamente computadores e servidores Windows. Basta, para isso, usar um cliente RDP.

{% include image.html src='/files/2020/04/rdp-client.jpg' %}

Existem alguns clientes RDP para Linux e falaremos sobre eles hoje:

1. [Remmina](#remmina)
2. [FreeRDP](#freerdp)
3. [rdesktop](#rdesktop)
4. [Vinagre](#vinagre)

Você pode escolher o que mais te agrada ou melhor se adequa às suas necessidades.

A título de curiosidade, o FreeRDP é um aplicativo, mas também uma biblioteca, que disponibiliza funcionalidades para outros aplicativos. Exceto pelo rdesktop, os demais clientes acima usam a biblioteca do FreeRDP.

## Habilitando a área de trabalho remota no Windows

Antes de mais nada, você deve configurar o computador ao qual deseja se conectar para que ele permita conexões remotas. Para isso, nesse computador, com Windows, usando uma conta de administrador, abra o **menu Iniciar** e clique em **Configurações**. Na janela que aparece, abra a categoria **Sistema** e, depois, **Área de Trabalho Remota**. Por fim, ative-a:

{% include image.html src="/files/2020/04/windows-rdp-01-pt.png" %}

Note que não é possível se conectar a computadores que executam a edição doméstica do Windows (por exemplo, o Windows 10 Home). Se esse for seu caso, essa tela informará:

{% include image.html src="/files/2020/04/windows-rdp-02-pt.jpg" %}

Se quiser mais informaçõe sobre a área de trabalho remota no Windows, consulte:

- [Como usar a Área de Trabalho Remota - Suporte do Windows][win-rdc]
- [Área de Trabalho Remota - permitir o acesso ao seu computador - Microsoft Docs][microsoft-docs]

<div class="media mb-3">
    <img src="/files/2020/04/remmina.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0" id="remmina">Remmina</h2>
    </div>
</div>

O [Remmina] é um cliente para vários protocolos de acesso remoto, como RDP, [VNC], [NX], [XDMCP] e [SSH]. É útil para administradores de redes e viajantes que precisam trabalhar remotamente em vários computadores ou servidores. O Remmina já vem instalado na distribuição [Ubuntu] e é seu cliente de área de trabalho remota padrão.

Para instalar o Remmina no [Linux Kamarada][kamarada-15.1] e no [openSUSE], execute:

```
# zypper in remmina remmina-lang remmina-plugin-rdp
```

Uma vez instalado, para iniciar o Remmina, se você usa o ambiente [GNOME], clique em **Atividades**, no canto superior esquerdo da tela, digite `remmina` e clique no ícone do aplicativo:

{% include image.html src="/files/2020/04/remmina-01-pt.jpg" %}

Para se conectar de forma prática, selecione o protocolo **RDP**, digite o endereço IP ou o nome de rede (_hostname_) do computador que deseja acessar (no meu exemplo, `10.0.0.251`) e tecle **Enter**:

{% include image.html src="/files/2020/04/remmina-02-pt.png" %}

(observe que a interface do Remmina é traduzida, mas não completamente...)

Na tela seguinte, informe seu **Nome de usuário** e **Senha** no computador acessado. Se necessário, informe também o **Domínio**. Opcionalmente, você também pode optar por **Salvar a senha**. Quando estiver pronto para iniciar a conexão, clique em **OK**:

{% include image.html src="/files/2020/04/remmina-03-pt.png" %}

Você verá a tela do computador acessado na janela do Remmina:

{% include image.html src="/files/2020/04/remmina-04-pt.jpg" %}

A partir de agora, você está usando o computador, mas à distância, remotamente, sem estar sentado na frente dele. Cada clique e digitação são processados no computador remoto. Se ele é um _desktop_ Windows, a tela fica bloqueada durante o acesso remoto.

Se você pretende acessar esse computador com frequência, considere cadastrar os dados da conexão, para que ela possa ser facilmente iniciada. Para isso, na tela inicial do Remmina, clique no botão de adicionar conexão, no canto superior esquerdo da janela:

{% include image.html src="/files/2020/04/remmina-05-pt.jpg" %}

Na tela seguinte, dê um **Nome** para identificar a conexão, selecione **RDP** no campo **Protocolo** e informe os dados da conexão: **Servidor**, **Nome de usuário**, **User password** (senha) e **Domínio** (se necessário). Quando terminar, clique em **Save** (salvar):

{% include image.html src="/files/2020/04/remmina-06-pt.png" %}

Feito isso, essa conexão passará a ser listada na tela inicial do Remmina:

{% include image.html src="/files/2020/04/remmina-07-pt.png" %}

Quando quiser acessar remotamente esse computador, basta dar um duplo-clique nele.

<div class="media mb-3">
    <img src="/files/2020/02/utilities-terminal.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0" id="freerdp">FreeRDP</h2>
    </div>
</div>

O [FreeRDP] é uma implementação [livre][free-sw] do protocolo RDP seguindo as [especificações abertas da Microsoft][freerdp-ref]. Essa implementação fornece o aplicativo cliente, o servidor e uma biblioteca, que pode ser aproveitada por outros aplicativos que necessitem usar o protocolo RDP. Hoje, estamos interessados no aplicativo cliente do FreeRDP.

Para instalar o cliente do FreeRDP no Linux Kamarada e no openSUSE, execute:

```
# zypper in freerdp
```

O cliente do FreeRDP não dispõe de uma tela para conexão tal qual a do Remmina. Para iniciar uma conexão usando o  cliente do FreeRDP, execute esse comando em um terminal:

```
$ xfreerdp /v:nome_ou_endereco_ip_do_computador /u:nome_de_usuario
```

Fazendo as devidas substituições. Por exemplo:

```
$ xfreerdp /v:10.0.0.251 /u:Kamarada
```

Se for necessário informar o domínio, use o parâmetro `/d`:

```
$ xfreerdp /v:nome_ou_ip_do_computador /d:dominio /u:nome_de_usuario
```

Na primeira conexão ao computador, o cliente do FreeRDP pergunta se deve confiar no certificado:

```
[10:27:42:649] [9439:9440] [INFO][com.freerdp.client.common.cmdline] - loading channelEx cliprdr
[10:27:42:670] [9439:9440] [INFO][com.freerdp.crypto] - creating directory /home/linux/.config/freerdp
[10:27:42:670] [9439:9440] [INFO][com.freerdp.crypto] - creating directory [/home/linux/.config/freerdp/certs]
[10:27:42:671] [9439:9440] [INFO][com.freerdp.crypto] - created directory [/home/linux/.config/freerdp/server]
[10:27:42:682] [9439:9440] [ERROR][com.freerdp.crypto] - @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
[10:27:42:683] [9439:9440] [ERROR][com.freerdp.crypto] - @           WARNING: CERTIFICATE NAME MISMATCH!           @
[10:27:42:683] [9439:9440] [ERROR][com.freerdp.crypto] - @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
[10:27:42:683] [9439:9440] [ERROR][com.freerdp.crypto] - The hostname used for this connection (10.0.0.251:3389)
[10:27:42:796] [9439:9440] [ERROR][com.freerdp.crypto] - does not match the name given in the certificate:
[10:27:42:796] [9439:9440] [ERROR][com.freerdp.crypto] - Common Name (CN):
[10:27:42:796] [9439:9440] [ERROR][com.freerdp.crypto] - 	WinDev2003Eval
[10:27:42:796] [9439:9440] [ERROR][com.freerdp.crypto] - A valid certificate for the wrong name should NOT be trusted!
Certificate details:
	Subject: CN = WinDev2003Eval
	Issuer: CN = WinDev2003Eval
	Thumbprint: 23:7e:de:bc:85:d7:13:f3:e5:ce:e2:56:58:93:7d:f7:db:d1:bd:85
The above X.509 certificate could not be verified, possibly because you do not have
the CA certificate in your certificate store, or the certificate has expired.
Please look at the OpenSSL documentation on how to add a private CA to the store.
Do you trust the above certificate? (Y/T/N)
```

Digite `Y` (de _yes_, sim) e tecle **Enter**. Em seguida, digite a senha (_password_) e tecle **Enter**:

```
Password:
[10:24:21:706] [9439:9440] [INFO][com.freerdp.gdi] - Local framebuffer format  PIXEL_FORMAT_BGRX32
[10:24:21:706] [9439:9440] [INFO][com.freerdp.gdi] - Remote framebuffer format PIXEL_FORMAT_RGB16
[10:24:21:828] [9439:9440] [INFO][com.winpr.clipboard] - initialized POSIX local file subsystem
```

Feito isso, a conexão remota é iniciada:

{% include image.html src="/files/2020/04/freerdp-pt.jpg" %}

Se você já iniciou a conexão de área de trabalho remota no Windows pelo **Prompt de Comando** (comando **[mstsc]**), deve ter reparado que o cliente do FreeRDP usa a mesma sintaxe. Ele foi propositalmente implementado dessa forma. Se quiser conferir:

- no Windows, execute:

```
> mstsc /?
```

- no Linux, execute:

```
$ xfreerdp /?
```

<div class="media mb-3">
    <img src="/files/2020/02/utilities-terminal.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0" id="rdesktop">rdesktop</h2>
    </div>
</div>

O [rdesktop] foi o primeiro cliente RDP para Linux e por muitos anos foi o mais usado. Desde [novembro de 2019][rdesktop-group], o projeto está procurando um novo responsável para mantê-lo.

Em contraste, o FreeRDP surgiu em [2009][freerdp-blog] como uma ramificação (um _fork_) do rdesktop, quando a [Microsoft] decidiu abrir as especificações do protocolo RDP, e com o tempo e o avanço do projeto, se tornou o cliente RDP padrão em outros sistemas que não o Windows.

Eu apresento o rdesktop aqui mais a título de informação. A menos que você tenha um bom motivo para usá-lo, o recomendado é usar algum dos outros clientes, baseados no FreeRDP.

Para instalar o rdesktop no Linux Kamarada e no openSUSE, execute:

```
# zypper in rdesktop
```

Depois, para iniciar uma conexão remota usando o rdesktop, invoque-o a partir de um terminal informando o nome ou endereço IP do computador a ser acessado. Por exemplo:

```
$ rdesktop 10.0.0.251
```

Normalmente, isso seria o suficiente e o rdesktop funcionaria. Mas, já de início, esbarramos em um dos problemas de o _software_ não estar recebendo a devida manutenção:

```
Autoselected keyboard map pt-br
ERROR: CredSSP: Initialize failed, do you have correct kerberos tgt initialized ?
Failed to connect, CredSSP required by server.
```

Em determinado momento, a Microsoft lançou uma atualização para o Windows que desde então tornou obrigatório por padrão o uso de Autenticação no Nível da Rede (do inglês [_Network Level Authentication_][nla] — NLA). O FreeRDP suporta NLA, ao passo em que o rdesktop, não. Ainda é possível usar o rdesktop para acesso remoto, contanto que você desabilite a NLA no computador a ser acessado. Note que isso torna a conexão menos segura.

Para desabilitar a NLA, no computador a ser acessado, com Windows, usando uma conta de administrador, abra o **Painel de Controle**, clique na categoria **Sistema e Segurança**, depois no item **Sistema**. Na tela seguinte, clique no _link_ **Configurações remotas**, à esquerda. Na caixa de diálogo que aparece, selecione a aba **Remoto**. Por fim, desative a opção **Permitir conexões somente de computadores que estejam executando a Área de Trabalho Remota com Autenticação no Nível da Rede** (no final) e clique em **OK**:

{% include image.html src="/files/2020/04/windows-rdp-03-pt.jpg" %}

Feito isso, de volta ao computador que fará o acesso remoto, com Linux, tente de novo:

```
$ rdesktop 10.0.0.251
```

Dessa vez, vai funcionar. Aparece uma janela com a tela de _logon_ do Windows. Nessa janela, informe seu nome de usuário e senha e tecle **Enter** para iniciar a área de trabalho remota:

{% include image.html src="/files/2020/04/rdesktop-pt.jpg" %}

Se quiser mais informações sobre esse _bug_ do rdesktop, consulte:

- [CredSSP does not work - Issue #71 - rdesktop/rdesktop - GitHub][rdesktop-bug-1]
- [Add support for Network Level Authentication - Issue #279 - rdesktop/rdesktop - GitHub][rdesktop-bug-2]
- [Doesn't work if there is Fortress machine between connecting to the remote  server - Issue #261 - rdesktop/rdesktop - GitHub][rdesktop-bug-3]
- [Network Level Authentication (NLA) - rdesktop/rdesktop Wiki - GitHub][nla]

<div class="media mb-3">
    <img src="/files/2020/02/preferences-desktop-remote-desktop.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0" id="vinagre">Vinagre</h2>
    </div>
</div>

O [Vinagre] é o cliente de área de trabalho remota padrão do ambiente GNOME. Por isso, é também o cliente de área de trabalho remota padrão do Linux Kamarada na versão atual, 15.1. Assim como o Remmina, ele suporta alguns protocolos de conexão: SSH, RDP, [SPICE] e VNC. No entanto, assim como o rdesktop, não recebe manutenção há algum tempo já.

Ao tentar uma conexão RDP, o Vinagre apenas exibe uma tela preta, como eu reportei na lista de discussão do openSUSE:

- [\[opensuse-factory\] Black screen when trying a RDP access to Windows 10 using Vinagre (Leap 15.1/15.2 and Tumbleweed)][opensuse-mailing-list]

Em algumas distribuições, a exemplo do [Debian], o Vinagre funciona. Creio que essas distribuições aplicaram alguma correção (_patch_) ao Vinagre.

Provavelmente, na próxima versão do Linux Kamarada, eu devo substituir o Vinagre pelo Remmina, assim como fez a distribuição Ubuntu. Por isso, eu apresento o Vinagre aqui mais a título de informação também.

O Vinagre já vem instalado por padrão no Linux Kamarada e no openSUSE, se você optou pelo ambiente GNOME, mas caso você precise ou queira instalá-lo, pode fazer isso com o comando:

```
# zypper in vinagre vinagre-lang
```

Para iniciar o Vinagre, que aparece na lista de aplicativos como **Visualizador de área de trabalho remota**, clique em **Atividades**, no canto superior esquerdo da tela, digite `remota` ou `vinagre` e clique no ícone correspondente ao aplicativo:

{% include image.html src="/files/2020/04/vinagre-01-pt.jpg" %}

Na tela inicial do **Vinagre**, clique em **Conectar**:

{% include image.html src="/files/2020/04/vinagre-02-pt.jpg" %}

Preencha a tela seguinte com as informações sobre a conexão:

{% include image.html src="/files/2020/04/vinagre-03-pt.jpg" %}

- no campo **Protocolo**, selecione **RDP**;
- no campo **Máquina**, informe o nome de rede (_hostname_) ou endereço IP do computador a ser acessado;
- informe seu **Nome de usuário** no computador a ser acessado; e
- opcionalmente, se necessário, informe o **Domínio**.

Quando terminar, clique em **Conectar**.

Na primeira conexão ao computador, o Vinagre pergunta se deve confiar no certificado:

{% include image.html src="/files/2020/04/vinagre-04-pt.jpg" %}

Responda que sim clicando em **Conectar**.

Informe sua **Senha**, opcionalmente selecione **Lembrar esta credencial** e clique em **Autenticar**:

{% include image.html src="/files/2020/04/vinagre-05-pt.jpg" %}

Nesse momento, você deveria ver a área de trabalho do computador remoto, que inclusive tem sua tela bloqueada (como normalmente ocorre nas conexões RDP). Mas, como eu disse, o Vinagre apenas exibe uma tela preta:

{% include image.html src="/files/2020/04/vinagre-06-pt.png" %}

Assim como o Remmina, o Vinagre permite que você memorize os dados dessa conexão, para conectar-se de novo de forma prática no futuro. Para isso, na tela da conexão, abra o menu **Marcadores** e clique em **Adicionar marcador**.

Criado o marcador, essa conexão passará a ser listada no menu **Marcadores**. Quando quiser acessar remotamente esse computador, basta abrir esse menu e clicar no marcador.

## Referências

- [Como usar a Área de Trabalho Remota - Suporte do Windows][win-rdc]
- [Área de Trabalho Remota - permitir o acesso ao seu computador - Microsoft Docs][microsoft-docs]
- [Remote Graphical Sessions with VNC - Reference - openSUSE Leap 15.1][opensuse-docs]
- [Acesso remoto por RDP a partir do Linux usando o FreeRDP - Umbler Blog][umbler]
- [Hi! - The history of the FreeRDP project - FreeRDP][freerdp-blog]

Como o acesso remoto a computadores com Windows 10 Home não é possível, para a produção deste artigo foi usada uma [máquina virtual do VirtualBox][virtualbox] com uma versão de avaliação do Windows 10 Enterprise obtida legalmente em:

- [Baixar uma máquina virtual do Windows 10 - desenvolvimento de aplicativos do Windows][windows-10-vm]

[win-rdc]:                  https://support.microsoft.com/pt-br/help/4028379/windows-10-how-to-use-remote-desktop
[windows]:                  https://www.microsoft.com/pt-br/windows/
[windows-server]:           https://www.microsoft.com/pt-br/cloud-platform/windows-server
[rdp]:                      https://pt.wikipedia.org/wiki/Remote_Desktop_Protocol
[ts]:                       https://pt.wikipedia.org/wiki/Remote_Desktop_Services
[linux]:                    https://www.vivaolinux.com.br/linux/
[microsoft-docs]:           https://docs.microsoft.com/pt-br/windows-server/remote/remote-desktop-services/clients/remote-desktop-allow-access
[remmina]:                  https://remmina.org/
[vnc]:                      https://pt.wikipedia.org/wiki/Virtual_Network_Computing
[nx]:                       https://pt.wikipedia.org/wiki/Tecnologia_NX
[xdmcp]:                    https://pt.wikipedia.org/wiki/X_display_manager_(tipo_de_programa)
[ssh]:                      https://pt.wikipedia.org/wiki/Secure_Shell
[ubuntu]:                   https://ubuntu.com/
[kamarada-15.1]:            {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[opensuse]:                 https://www.opensuse.org/
[gnome]:                    https://br.gnome.org/
[freerdp]:                  https://www.freerdp.com/
[free-sw]:                  https://www.gnu.org/philosophy/free-sw.pt-br.html
[freerdp-ref]:              https://github.com/FreeRDP/FreeRDP/wiki/Reference-Documentation
[mstsc]:                    https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/mstsc
[rdesktop]:                 https://www.rdesktop.org/
[rdesktop-group]:           https://groups.google.com/forum/#!topic/rdesktop-announce/AddglSNxK90
[freerdp-blog]:             http://www.freerdp.com/2019/01/16/hi-freerdp-history
[microsoft]:                https://www.microsoft.com/pt-br
[nla]:                      https://github.com/rdesktop/rdesktop/wiki/Network-Level-Authentication-(NLA)
[rdesktop-bug-1]:           https://github.com/rdesktop/rdesktop/issues/71
[rdesktop-bug-2]:           https://github.com/rdesktop/rdesktop/issues/279
[rdesktop-bug-3]:           https://github.com/rdesktop/rdesktop/issues/261#issuecomment-382608793
[vinagre]:                  https://wiki.gnome.org/Apps/Vinagre
[spice]:                    https://en.wikipedia.org/wiki/Simple_Protocol_for_Independent_Computing_Environments
[opensuse-mailing-list]:    https://lists.opensuse.org/opensuse-factory/2020-01/msg00308.html
[debian]:                   https://www.debian.org/
[opensuse-docs]:            https://doc.opensuse.org/documentation/leap/reference/html/book.opensuse.reference/cha-vnc.html
[umbler]:                   https://blog.umbler.com/br/acesso-remoto-por-rdp/
[virtualbox]:               {% post_url pt/2019-10-08-virtualbox-a-forma-mais-facil-de-conhecer-o-linux-sem-precisar-instala-lo %}
[windows-10-vm]:            https://developer.microsoft.com/pt-br/windows/downloads/virtual-machines/
