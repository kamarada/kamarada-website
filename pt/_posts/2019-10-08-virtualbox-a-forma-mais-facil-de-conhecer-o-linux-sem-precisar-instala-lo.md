---
date: '2019-10-08 01:30:00 GMT-3'
layout: post
published: true
title: 'VirtualBox: a forma mais fácil de conhecer o Linux sem precisar instalá-lo'
image: '/files/2019/07/virtualbox-pt.jpg'
nickname: 'virtualbox'
---

{% include image.html src="/files/2019/07/virtualbox-pt.jpg" %}

O [VirtualBox] permite que você use o [Linux] dentro de uma janela, como um programa no sistema operacional que você já usa. Com essa facilidade, você pode ter seu primeiro contato com o Linux sem precisar instalá-lo ou mesmo reiniciar o computador para usar um [LiveDVD/USB][live]: quer usar o Linux? Só iniciar o programa. Terminou de usar? Só fechar a janela.

Na verdade essa "janela", explicada assim de forma simplificada, tecnicamente falando é uma **máquina virtual** (do inglês _virtual machine_, comumente abreviada por **VM**): é um computador que, fisicamente falando, não existe, mas pode ser usado para instalar sistemas operacionais e aplicativos. O sistema operacional (SO) que está na máquina virtual "pensa" que está em um computador "de verdade".

Seu computador (que, fisicamente falando, existe, portanto é chamado de **máquina real**) pode executar várias máquinas virtuais ao mesmo tempo (contanto que haja memória RAM e espaço em disco suficientes). Na prática, isso quer dizer que você pode usar vários SOs ao mesmo tempo. Por exemplo: você pode usar [Windows] e Linux ao mesmo tempo.

O sistema operacional da máquina real é chamado de **hospedeiro** (_host_): ele hospeda as máquinas virtuais, cujos SOs são chamados de **convidados** (_guests_).

Essa tecnologia é chamada de **virtualização**. E o VirtualBox nada mais é que um programa que permite a você fazer virtualização de forma fácil em seu computador.

O VirtualBox é um [_software_ livre][free-software], gratuito e multi-plataforma de virtualização desenvolvido pela [Oracle]. Ele pode ser instalado no seu [PC][ibm-pc], quer você use Windows, [macOS], Linux ou [Solaris], e suporta diversos sistemas operacionais convidados, incluindo, mas não limitado a: Windows (3.x, 95, 98, NT, 2000, XP, Server 2003, Vista, 7, 8, 8.1, 10, Server 2008, Server 2012, Server 2016), DOS, Linux (2.4, 2.6, 3.x e 4.x), Solaris, OpenSolaris, OS/2 e OpenBSD.

Já falamos um pouco sobre o VirtualBox no _post_:

- [20 aplicativos que você pode usar do mesmo jeito no Linux e no Windows — parte 2][apps-linux-windows-2]

Hoje veremos como instalar o VirtualBox no Windows, criar uma máquina virtual e iniciar nela uma [imagem _live_][live] do Linux. Vou usar como exemplo a distribuição [Linux Kamarada][kamarada-15.1-beta], cuja imagem _live_ pode ser baixada na página [Download].

## Parte 1 de 3

Para o _post_ não ficar muito extenso, decidi dividi-lo em três partes:

1. nessa primeira parte, veremos como instalar o VirtualBox no Windows e o básico de como usá-lo para iniciar o Linux dentro de uma máquina virtual;
2. na segunda parte, veremos como instalar o VirtualBox no Linux;
3. na terceira parte, veremos algumas dicas para uso diário do VirtualBox.

Essa sequência de _posts_ é dedicada principalmente a usuários de Windows que ainda não tiveram seu primeiro contato com o Linux e desejam experimentá-lo por meio do VirtualBox.

Se você já usa Linux, também pode instalar o VirtualBox para experimentar outra distribuição ou mesmo para [outras finalidades][virt-why-useful].

## Baixando o VirtualBox no Windows

Para baixar o instalador do VirtualBox para Windows, acesse o _site_ oficial do VirtualBox em:

- [https://www.virtualbox.org/](https://www.virtualbox.org/)

E clique no _banner_ **Download VirtualBox 6.0**:

{% include image.html src="/files/2019/10/virtualbox-01.jpg" %}

Abaixo de _VirtualBox binaries_ (binários do VirtualBox), clique em _Windows hosts_ (computadores com Windows):

{% include image.html src="/files/2019/10/virtualbox-02.jpg" %}

O _download_ do instalador começa.

## Instalando o VirtualBox no Windows

Quando o _download_ terminar, inicie o instalador.

Pode conduzir a instalação do "jeito clássico" do Windows (avançar, avançar, avançar — _next_, _next_, _next_):

{% include image.html src="/files/2019/10/virtualbox-03.jpg" %}

Há um momento em que o Windows pede confirmação para instalar _drivers_ para o VirtualBox. Pode confirmar a instalação clicando em **Instalar**:

{% include image.html src="/files/2019/10/virtualbox-04-pt.jpg" %}

Ao final, clique em _Finish_ (concluir):

{% include image.html src="/files/2019/10/virtualbox-05.jpg" %}

## Criando uma nova máquina virtual

Essa é a tela inicial do VirtualBox, por enquanto sem nenhuma máquina virtual:

{% include image.html src="/files/2019/10/virtualbox-06-pt.jpg" %}

Para criar uma máquina virtual, clique no botão **Novo**.

É iniciado o assistente **Criar Máquina Virtual**:

{% include image.html src="/files/2019/10/virtualbox-07-pt.jpg" %}

Digite um **Nome** para a máquina virtual. Por exemplo, `openSUSE`.

Perceba que, ao digitar `openSUSE`, o assistente sugere as configurações dos campos **Tipo** — `Linux` — e **Versão** — `openSUSE (64-bit)`. Se quisesse, você poderia ter digitado outro nome (por exemplo, `Teste do Linux`) e preenchido esses outros campos manualmente.

Com relação ao nome, o importante é que faça sentido pra você e identifique a VM.

Quando terminar, clique em **Próximo**.

Na tela seguinte, informe a quantidade de memória RAM que deseja reservar para a VM:

{% include image.html src="/files/2019/10/virtualbox-08-pt.jpg" %}

No exemplo da imagem, minha máquina real tem um total de 16GB de RAM (16384MB) e eu decidi reservar 2GB para a VM. No futuro, enquanto eu estiver usando essa VM, o SO convidado “pensará” que está sendo executado em um computador com 2GB de RAM e restarão 14GB de RAM para o SO hospedeiro executar programas e outras máquinas virtuais.

Divida a memória RAM de modo que não falte memória nem para a máquina virtual, nem para a máquina real. Na tela, a barra verde indica o limite de memória considerado seguro. No exemplo, algo em torno de 10,5GB (fazendo as contas, 2/3 ou 66% do total de 16GB).

Observe que a quantidade de RAM é expressa em MB (2 GB x 1024 = 2048 MB).

Quando terminar, clique em **Próximo**.

Na tela seguinte, podemos criar um disco rígido virtual para a VM:

{% include image.html src="/files/2019/10/virtualbox-09-pt.jpg" %}

Um disco rígido virtual, do ponto de vista do SO hospedeiro, é um arquivo grande, como um ZIP. Do ponto de vista do SO convidado, é como um HDD ou SSD de verdade.

Como vamos usar uma imagem _live_, por enquanto não precisamos realmente criar um disco rígido virtual para experimentar o Linux. Veremos como criar um disco rígido virtual depois.

Selecione a opção **Não acrescentar um disco rígido virtual** e clique em **Criar**.

Clique em **Continuar** para ignorar a advertência do VirtualBox:

{% include image.html src="/files/2019/10/virtualbox-10-pt.jpg" %}

Agora a tela inicial do VirtualBox mostra a sua primeira máquina virtual:

{% include image.html src="/files/2019/10/virtualbox-11-pt.jpg" %}

Veja que você pode configurar várias características da máquina virtual (memória, tela, armazenamento, áudio, rede, etc.) de modo a imitar um computador de verdade.

## Inserindo a imagem ISO no leitor de DVD virtual

Vamos inserir a imagem ISO da distribuição Linux no leitor de DVD da máquina virtual, como quem insere um DVD em um leitor de DVD de um computador de verdade.

Para isso, na tela inicial, que mostra as configurações da VM, clique em **Armazenamento**.

À esquerda, em **Dispositivos de Armazenamento**, dentro da **Controladora IDE**, selecione o leitor de DVD que aparece como **Vazio**:

{% include image.html src="/files/2019/10/virtualbox-12-pt.jpg" %}

À direita, clique no ícone da mídia e depois, no menu que aparece, clique em **Selecionar Arquivo de Disco Óptico Virtual**.

Selecione a imagem ISO da distribuição Linux que você baixou e clique em **Abrir**:

{% include image.html src="/files/2019/10/virtualbox-13-pt.jpg" %}

Clique em **OK** para fechar a caixa de diálogo **Configurações** e voltar para a tela inicial do VirtualBox.

## Iniciando e usando a máquina virtual

Para iniciar a máquina virtual, clique no botão **Iniciar**:

{% include image.html src="/files/2019/10/virtualbox-14-pt.jpg" %}

Isso equivale, em um computador de verdade, a apertar o botão de ligar.

O VirtualBox abre uma nova janela para a máquina virtual, que vai iniciar o sistema operacional ("dar _boot_", na gíria técnica), assim como faria um computador de verdade:

{% include image.html src="/files/2019/10/virtualbox-15-pt.jpg" %}

O que apareceria no monitor de um computador de verdade aparece na janela da VM.

Quando o sistema terminar de iniciar, você verá sua área de trabalho e já poderá usá-lo:

{% include image.html src="/files/2019/10/virtualbox-16-pt.jpg" %}

Além de exibir a imagem, a janela da VM também permite que você interaja com a VM: para controlá-la, clique na janela, o _mouse_ e o teclado passam a ser capturados pelo VirtualBox e podem ser usados apenas dentro da VM.

Para devolver o controle à máquina real, o VirtualBox reserva uma tecla especial no teclado, que ele chama de **tecla Hospedeiro** (tecla _Host_). Por padrão, ela é a tecla **Ctrl direita**. Pressione a tecla Hospedeiro e o _mouse_ e teclado voltam a controlar a máquina real.

A tecla Hospedeiro é exibida no canto inferior direito da janela da VM:

{% include image.html src="/files/2019/10/virtualbox-17.png" %}

Caso o SO convidado informe que suporta **integração do ponteiro de _mouse_**, isso significa que você pode deslizar o ponteiro do _mouse_ livremente entre a janela da máquina virtual e demais janelas abertas na máquina real, sem necessidade de clicar na janela da VM para capturar o _mouse_ ou apertar a tecla Hospedeiro para liberá-lo.

Quando usado dentro de uma VM do VirtualBox como SO convidado, o Linux Kamarada ativa essa integração por padrão, tornando mais natural e fácil o uso da VM.

Caso deseje, você pode alterar a tecla Hospedeiro nas configurações do VirtualBox.

## Desligando a máquina virtual

Quando terminar de usar a máquina virtual, desligue-a normalmente, da mesma forma como você faria em uma máquina real. Se seu SO convidado é o Linux Kamarada, que vem por padrão com a área de trabalho [GNOME], para desligar a VM, clique no **menu do sistema**, no canto superior direito da tela da VM, e depois, no menu que aparece, clique no ícone **Desligar**:

{% include image.html src="/files/2019/10/virtualbox-18-pt.jpg" %}

Caso a máquina virtual trave e você precise forçar seu desligamento, clique no botão de fechar da janela da VM (como se fosse fechar a janela) e o VirtualBox perguntará o que deseja fazer, selecione **Desligar a máquina** em clique em **OK**:

{% include image.html src="/files/2019/10/virtualbox-19-pt.png" %}

Isso equivale, em um computador de verdade, a apertar e segurar o botão de ligar/desligar por alguns segundos, até que o computador desligue (de modo forçado).

## Iniciando o VirtualBox no Windows

Se você seguiu à risca esse tutorial, teve o VirtualBox iniciado pelo próprio instalador.

Quando quiser iniciá-lo manualmente, dê dois cliques no atalho na Área de Trabalho:

{% include image.html src="/files/2019/10/virtualbox-20.jpg" %}

Ou abra o **menu Iniciar**, digite `virtualbox` e clique em seu ícone:

{% include image.html src="/files/2019/10/virtualbox-21-pt.jpg" %}

## Continua...

Na segunda parte, veremos como instalar o VirtualBox no Linux. Até lá!

## Referências

Para referência futura, aqui utilizei as seguintes versões de _softwares_:

- Microsoft Windows 10, versão 1903
- Oracle VM VirtualBox 6.0.12
- Linux Kamarada 15.1 Beta Build 16.1

Todas são as versões mais recentes no momento da escrita.

Para escrever esse _post_, consultei o manual do VirtualBox:

- [Oracle VM VirtualBox - User Manual - Chapter 1 - First Steps][virtualbox-manual]

[virtualbox]:           https://www.virtualbox.org/
[linux]:                https://www.vivaolinux.com.br/linux/
[live]:                 {% post_url pt/2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}
[windows]:              https://www.microsoft.com/pt-br/windows/
[apps-linux-windows-2]: {% post_url pt/2019-07-12-20-aplicativos-que-voce-pode-usar-do-mesmo-jeito-no-linux-e-no-windows-parte-2 %}
[free-software]:        https://www.gnu.org/philosophy/free-sw.pt-br.html
[oracle]:               https://www.oracle.com/br/
[ibm-pc]:               https://pt.wikipedia.org/wiki/IBM_PC
[macos]:                https://www.apple.com/br/macos/
[solaris]:              https://www.oracle.com/solaris/
[kamarada-15.1-beta]:   {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[download]:             /pt/download
[virt-why-useful]:      https://www.virtualbox.org/manual/ch01.html#virt-why-useful
[gnome]:                https://br.gnome.org/
[virtualbox-manual]:    https://www.virtualbox.org/manual/ch01.html
