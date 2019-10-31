---
date: '2019-10-16 03:00:00 GMT-3'
layout: post
published: true
title: 'Instalando o VirtualBox no Linux'
image: '/files/2019/10/virtualbox-39-pt.jpg'
nickname: 'virtualbox-linux'
---

Nessa parte 2 de uma trilogia de _posts_ sobre o [VirtualBox], você verá como instalá-lo no [Linux]. As distribuições mais populares receberão uma atenção especial, e ao final serão mostradas instruções genéricas, que devem funcionar para instalações Linux em geral.

<!--more-->

Na [parte 1][virtualbox], vimos o que é virtualização, o que é o VirtualBox, como instalar o VirtualBox no [Windows], como criar uma máquina virtual e como usá-la para experimentar o Linux.

Caso você tenha caído aqui de paraquedas, comece sua leitura pela parte 1:

- [VirtualBox: a forma mais fácil de conhecer o Linux sem precisar instalá-lo][virtualbox]

Agora, veremos como instalar o VirtualBox no Linux.

Normalmente, eu falaria aqui da distribuição [openSUSE] (que equivale a falar da recente [Linux Kamarada][kamarada], baseada no openSUSE). Mas, como o objetivo é mostrar como você pode experimentar o Linux sem sair do sistema que você já usa, falaremos hoje do openSUSE e de outras distribuições Linux também. Faz sentido, pense: pode ser que você já use Linux, mas use outra distribuição e queira experimentar o Linux Kamarada, por exemplo.

## VirtualBox no Ubuntu e derivadas

Vejamos como instalar o VirtualBox no [Ubuntu] e em distribuições derivadas, dentre as quais temos: [Linux Mint][linuxmint], [elementary OS][elementary], [Zorin OS][zorinos] e as brasileiras [BigLinux] e [Linux Educacional][le].

A distribuição Ubuntu disponibiliza o VirtualBox no repositório oficial **multiverse**. Obtê-lo desse repositório é a forma mais fácil de instalar o VirtualBox no Ubuntu e derivados. A versão disponibilizada nesse repositório é sempre a mais recente ou próxima dela.

{% capture ubuntu %}
O Ubuntu 19.10 (Eoan Ermine) foi lançado em 17/10, justo 1 dia depois da publicação deste _post_ (16/10). Deu pena mantê-lo desatualizado por 1 dia. Assim, achei por bem atualizar as imagens. As instruções continuam as mesmas.
{% endcapture %}
{% include update.html date="19/10/2019" message=ubuntu %}

Comece habilitando o repositório multiverse. O modo mais fácil de fazer isso é abrindo o aplicativo **Programas e atualizações** e marcando a opção **Aplicativos restritos por copyright ou questões legais (multiverse)**, na aba **Aplicativos Ubuntu**:

{% include image.html src="/files/2019/10/virtualbox-22-pt.jpg" %}

Clique em **Fechar**. Como você mudou a configuração de repositórios, o sistema sugere atualizar a lista de pacotes disponíveis. No aviso que aparece, clique em **Recarregar**:

{% include image.html src="/files/2019/10/virtualbox-23-pt.jpg" %}

Se você prefere usar o terminal, essas mesmas duas ações podem ser feitas com os comandos:

```
$ sudo add-apt-repository multiverse
$ sudo apt update
```

Com o repositório multiverse habilitado e a lista de pacotes atualizada, para instalar o VirtualBox usando a interface gráfica, abra o aplicativo **Software Ubuntu**, pesquise por `virtualbox`, clique na única opção que aparece e depois clique em **Instalar**:

{% include image.html src="/files/2019/10/virtualbox-24-pt.jpg" %}

O sistema avisa quando a instalação termina e o aplicativo já pode ser usado:

{% include image.html src="/files/2019/10/virtualbox-25-pt.jpg" %}

Se você prefere instalar o VirtualBox pelo terminal, execute:

```
$ sudo apt install virtualbox virtualbox-qt
```

Com o VirtualBox instalado, para iniciá-lo, abra o menu **Atividades**, no canto superior esquerdo da tela, digite `virtualbox` e clique no ícone correspondente:

{% include image.html src="/files/2019/10/virtualbox-26-pt.jpg" %}

Aparece a tela inicial do VirtualBox, por enquanto sem nenhuma máquina virtual:

{% include image.html src="/files/2019/10/virtualbox-27-pt.jpg" %}

Agora você pode seguir o mesmo passo-a-passo que vimos na [parte 1][virtualbox] para criar uma máquina virtual e rodar o Linux nela.

## VirtualBox no Debian e derivadas

Vejamos como instalar o VirtualBox no [Debian] e em distribuições derivadas, dentre as quais podemos mencionar: [MX Linux][mxlinux], [deepin] e [KNOPPIX].

A distribuição Debian não disponibiliza o VirtualBox em seus repositórios oficiais. É necessário adicionar o repositório do VirtualBox, o que pode ser feito com o comando:

```
$ sudo add-apt-repository 'deb https://download.virtualbox.org/virtualbox/debian buster contrib'
```

(caso use outra versão do Debian, mude `buster` por seu codinome, por exemplo: `stretch`)

Além disso, importe a chave do repositório do VirtualBox para confiar nele:

```
$ wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
```

Atualize a lista de pacotes disponíveis:

```
$ sudo apt update
```

E instale o VirtualBox:

```
$ sudo apt install virtualbox-6.0
```

Feito isso, você já pode iniciar o VirtualBox e começar a usá-lo (veja instruções na [parte 1][virtualbox]).

Esse repositório sempre disponibiliza a versão mais recente do VirtualBox.

Se sua instalação não possuir o comando **[add-apt-repository]**, tente essa alternativa:

```
$ sudo bash -c "echo 'deb https://download.virtualbox.org/virtualbox/debian buster contrib' >> /etc/apt/sources.list"
```

Ou abra o arquivo `/etc/apt/sources.list` usando um editor de texto (por exemplo, o **[nano]**):

```
$ sudo nano /etc/apt/sources.list
```

Adicione a seguinte linha ao final e salve:

```
deb https://download.virtualbox.org/virtualbox/debian buster contrib
```

## VirtualBox no openSUSE e derivadas

Vejamos como instalar o VirtualBox no [Linux Kamarada][kamarada], que é baseado na distribuição [openSUSE]. Outro derivado brasileiro do openSUSE que merece menção é o [RegataOS]. As instruções a seguir também devem funcionar no [SUSE Linux Enterprise][suse].

A distribuição openSUSE disponibiliza a versão mais recente do VirtualBox em seus repositórios oficiais (ou uma versão próxima da mais recente).

Para instalar o VirtualBox usando a interface gráfica, abra o menu **Atividades**, no canto superior esquerdo da tela, digite `software` e clique em **Gerenciamento de software**:

{% include image.html src="/files/2019/10/virtualbox-28-pt.jpg" %}

Aguarde a lista de pacotes disponíveis ser atualizada:

{% include image.html src="/files/2019/10/virtualbox-29-pt.jpg" %}

No campo de texto, digite `virtualbox` e clique no botão **Pesquisar** (ou tecle **Enter**), marque o pacote **virtualbox** para instalação e clique em **Aceitar**:

{% include image.html src="/files/2019/10/virtualbox-30-pt.jpg" %}

O sistema informa que pacotes necessários serão instalados, clique em **Continuar**:

{% include image.html src="/files/2019/10/virtualbox-31-pt.jpg" %}

Aguarde o _download_ e instalação dos pacotes:

{% include image.html src="/files/2019/10/virtualbox-32-pt.jpg" %}

Quando a instalação terminar, clique em **Concluir**:

{% include image.html src="/files/2019/10/virtualbox-33-pt.jpg" %}

Se você prefere instalar o VirtualBox pelo terminal, execute:

```
$ sudo zypper ref
$ sudo zypper in virtualbox
```

Com o VirtualBox instalado, para iniciá-lo, abra o menu **Atividades**, digite `virtualbox` e clique no ícone do aplicativo:

{% include image.html src="/files/2019/10/virtualbox-34-pt.jpg" %}

Caso sua conta de usuário não pertença ao grupo de usuários `vboxusers`, aparece essa mensagem de erro, clique em **OK** para fechá-la:

{% include image.html src="/files/2019/10/virtualbox-35.jpg" style=" max-height: 200px;" %}

Usando o menu **Atividades**, abra o **Gerenciamento de usuários e grupos**.

Selecione sua conta de usuário na lista e clique em **Editar**:

{% include image.html src="/files/2019/10/virtualbox-36-pt.jpg" %}

Mude para a guia **Detalhes**, em **Grupos Adicionais** selecione o grupo **vboxusers** e clique em **OK**:

{% include image.html src="/files/2019/10/virtualbox-37-pt.jpg" %}

Clique em **OK** novamente para sair do **Gerenciamento de usuários e grupos**.

Encerre sua sessão e faça _log in_ novamente para o sistema perceber seu novo grupo.

Inicie o VirtualBox novamente. O sistema pergunta se deseja habilitar o acesso a dispositivos USB (_USB passthrough_), essa mensagem aparece apenas no primeiro uso do VirtualBox:

{% include image.html src="/files/2019/10/virtualbox-38.jpg" style="max-height: 430px;" %}

A menos que você seja aficionado por segurança, creio que não há porque se preocupar. Clique em **Enable** para seguir.

Finalmente, chegamos à tela inicial do VirtualBox, por enquanto sem nenhuma máquina virtual:

{% include image.html src="/files/2019/10/virtualbox-39-pt.jpg" %}

Agora você pode seguir o mesmo passo-a-passo que vimos na [parte 1][virtualbox] para criar uma máquina virtual e rodar o Linux nela. Divirta-se bastante! (_have a lot of fun!_)

## VirtualBox no Fedora e relacionadas

Vejamos como instalar o VirtualBox no [Fedora]. As instruções a seguir também devem funcionar em distribuições relacionadas, como o [Red Hat Enterprise Linux][redhat] e o [CentOS].

A distribuição Fedora não disponibiliza o VirtualBox em seus repositórios oficiais. É necessário adicionar o repositório do VirtualBox, o que pode ser feito com o comando:

```
$ sudo dnf config-manager --add-repo https://download.virtualbox.org/virtualbox/rpm/fedora/virtualbox.repo
```

Atualize a lista de pacotes disponíveis:

```
$ sudo dnf update
```

Após baixar a lista de pacotes do repositório do VirtualBox, o sistema pergunta se deseja importar a chave do repositório:

```
Fedora Modular 30 - x86_64                                        4.8 kB/s | 3.0 kB     00:00    
Fedora Modular 30 - x86_64 - Updates                              5.2 kB/s | 2.8 kB     00:00    
Fedora 30 - x86_64 - Updates                                      6.5 kB/s | 3.5 kB     00:00    
Fedora 30 - x86_64                                                6.3 kB/s | 3.1 kB     00:00    
Fedora 30 - x86_64 - VirtualBox                                   468  B/s | 181  B     00:00    
Fedora 30 - x86_64 - VirtualBox                                   1.6 kB/s | 1.7 kB     00:01    
Importing GPG key 0x98AB5139:
 Userid     : "Oracle Corporation (VirtualBox archive signing key) <info@virtualbox.org>"
 Fingerprint: 7B0F AB3A 13B9 0743 5925 D9C9 5442 2A4B 98AB 5139
 From       : https://www.virtualbox.org/download/oracle_vbox.asc
Is this ok [y/N]:
```

Responda que "sim" digitando `y` (de _yes_, sim em inglês) e teclando **Enter**:

```
Is this ok [y/N]: y
Fedora 30 - x86_64 - VirtualBox                                   255 kB/s |  84 kB     00:00    
```

Instale alguns pacotes que o VirtualBox usa para compilar módulos para o _kernel_ no Fedora:

```
$ sudo dnf install @development-tools
$ sudo dnf install kernel-devel kernel-headers dkms elfutils-libelf-devel qt5-qtx11extras
```

E, por fim, instale o VirtualBox propriamente dito:

```
$ sudo dnf install VirtualBox-6.0
```

Feito isso, você já pode iniciar o VirtualBox e começar a usá-lo (veja instruções na [parte 1][virtualbox]).

Esse repositório sempre disponibiliza a versão mais recente do VirtualBox.

## VirtualBox no Arch Linux e no Manjaro

Vejamos como instalar o VirtualBox no [Arch Linux][arch] e no seu derivado [Manjaro].

A distribuição Arch Linux disponibiliza o VirtualBox em seu repositório oficial. Devido à sua natureza [_rolling release_][rolling-release] (lançamento contínuo, em inglês, significa que novas versões de programas são disponibilizadas assim que lançadas), esse repositório sempre contém a versão mais recente do VirtualBox.

Para instalar o VirtualBox no Arch Linux ou no Manjaro, execute o comando:

```
$ sudo pacman -Sy virtualbox $(pacman -Qsq "^linux" | grep "^linux[0-9]*[-rt]*$" | awk '{print $1"-virtualbox-host-modules"}' ORS=' ')
```

Feito isso, você já pode iniciar o VirtualBox e começar a usá-lo (veja instruções na [parte 1][virtualbox]).

## VirtualBox em outras distribuições

Assim como o _site_ do VirtualBox disponibiliza um instalador para Windows, ele também disponibiliza pacotes para as distribuições Linux mais populares e um instalador genérico, que possibilita para instalar o VirtualBox em qualquer sistema Linux.

Acesse o _site_ oficial do VirtualBox em:

- [https://www.virtualbox.org/](https://www.virtualbox.org/)

E clique no _banner_ **Download VirtualBox 6.0**.

Na página seguinte, abaixo de _VirtualBox binaries_ (binários do VirtualBox), clique em _Linux distributions_ (distribuições Linux).

Nessa página, clique no _link_ correspondente à distribuição que você usa (note que ela pode não estar na lista, mas ser baseada em uma das que estão):

{% include image.html src="/files/2019/10/virtualbox-40.jpg" %}

Uma vez baixado o pacote, use a ferramenta apropriada da sua distribuição para instalá-lo.

Alternativamente, você pode baixar o instalador genérico clicando com o botão direito em _All distributions_ (todas as distribuições, o último _link_) e usando **Salvar link como**.

Uma vez baixado o instalador genérico, execute-o a partir do terminal:

```
$ chmod +x Downloads/VirtualBox-6.0.12-133076-Linux_amd64.run
$ sudo Downloads/VirtualBox-6.0.12-133076-Linux_amd64.run
```

Na dúvida, verifique se a distribuição que você usa fornece instruções sobre como instalar o VirtualBox.

## Ainda tem mais...

Agora usuários de Windows e de Linux todos estamos na mesma página, ou seja, já sabemos instalar o VirtualBox nos sistemas que usamos e conseguimos criar máquinas virtuais.

Na [terceira parte][virtualbox-tips], veremos como criar um disco rígido virtual e instalar o Linux na máquina virtual, assim como dicas para usar o VirtualBox no dia a dia.

{% capture atualizacao %}
A [terceira parte]({% post_url pt/2019-10-30-dicas-para-usar-o-virtualbox-no-dia-a-dia %}) já está disponível!
{% endcapture %}
{% include update.html date="30/10/2019" message=atualizacao %}

## Referências

Para referência futura, aqui utilizei as seguintes versões de _softwares_:

- Ubuntu 19.10 (Eoan Ermine) com VirtualBox 6.0.14
- Debian 10.1.0 (Buster) com VirtualBox 6.0.14
- Linux Kamarada 15.1 Beta Build 16.1 com VirtualBox 6.0.12
- Fedora Workstation 30 com VirtualBox 6.0.14
- Manjaro GNOME 18.1.1 com VirtualBox 6.0.12

Todas as distribuições são as versões mais recentes no momento da escrita.

Para escrever esse _post_, consultei os seguintes textos:

- [Linux Downloads - Oracle VM VirtualBox][virtualbox-linux-downloads]
- [Oracle VM VirtualBox - User Manual - Chapter 2 - Installation Details][virtualbox-manual]
- [package management - How do I enable the "multiverse" repository? - Ask Ubuntu][askubuntu]
- [How to Enable Universe and Multiverse Repositories in Ubuntu - It's FOSS][itsfoss]
- [How to install VirtualBox 6 on Fedora Linux 29 - nixCraft][nixcraft]
- [Adding or removing software repositories in Fedora - Fedora Docs Site][fedora-docs]
- [VirtualBox - Manjaro Linux][manjaro-wiki]
- [VirtualBox - ArchWiki][arch-wiki]

[virtualbox]:                   {% post_url pt/2019-10-08-virtualbox-a-forma-mais-facil-de-conhecer-o-linux-sem-precisar-instala-lo %}
[linux]:                        https://www.vivaolinux.com.br/linux/
[windows]:                      https://www.microsoft.com/pt-br/windows/
[opensuse]:                     https://www.opensuse.org/
[kamarada]:                     {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}

[ubuntu]:                       https://ubuntu.com/
[linuxmint]:                    https://linuxmint.com/
[elementary]:                   https://elementary.io/
[zorinos]:                      https://zorinos.com/
[biglinux]:                     https://www.biglinux.com.br/
[le]:                           http://linuxeducacional.c3sl.ufpr.br/

[debian]:                       https://www.debian.org/
[mxlinux]:                      https://mxlinux.org/
[deepin]:                       https://www.deepin.org/pb/
[knoppix]:                      http://www.knopper.net/knoppix/index-en.html
[add-apt-repository]:           https://manpages.debian.org/buster/software-properties-common/add-apt-repository.1.en.html
[nano]:                         https://www.nano-editor.org/

[suse]:                         https://www.suse.com/pt-br/
[regataos]:                     https://www.regataos.com.br/

[fedora]:                       https://getfedora.org/pt_BR/
[redhat]:                       https://www.redhat.com/pt-br
[centos]:                       https://centos.org/

[arch]:                         https://www.archlinux.org/
[manjaro]:                      https://manjaro.org/
[rolling-release]:              https://pt.wikipedia.org/wiki/Rolling_release

[virtualbox-tips]:              {% post_url pt/2019-10-30-dicas-para-usar-o-virtualbox-no-dia-a-dia %}

[virtualbox-linux-downloads]:   https://www.virtualbox.org/wiki/Linux_Downloads
[virtualbox-manual]:            https://www.virtualbox.org/manual/ch02.html#install-linux-host
[askubuntu]:                    https://askubuntu.com/a/89100/560233
[itsfoss]:                      https://itsfoss.com/ubuntu-repositories/
[nixcraft]:                     https://www.cyberciti.biz/faq/how-to-install-virtualbox-on-fedora-linux/
[fedora-docs]:                  https://docs.fedoraproject.org/en-US/quick-docs/adding-or-removing-software-repositories-in-fedora/
[manjaro-wiki]:                 https://wiki.manjaro.org/index.php?title=VirtualBox#Installing_Virtualbox_on_Manjaro
[arch-wiki]:                    https://wiki.archlinux.org/index.php/VirtualBox
