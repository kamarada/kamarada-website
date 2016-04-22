---
date: '2016-02-21 20:20:00 GMT-3'
excerpt: 'Um LiveUSB permite que você leve o Linux consigo de forma prática para usar em qualquer computador que ofereça a possibilidade de iniciar o sistema operacional ("dar o boot", na gíria técnica) a partir de dispositivos USB, como pendrives, discos rígidos ou cartões de memória. Em tese, qualquer dispositivo de armazenamento em massa USB pode ser transformado em um LiveUSB. Como fazer isso é o que veremos nesse post.'
layout: post
published: true
title: 'Como preparar um LiveUSB'
image: /files/2016/02/liveusb.jpg
nickname: 'how-to-liveusb'
--- 

{% include image.html src="/files/2016/02/liveusb.jpg" %}

Um [LiveUSB]({% post_url 2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}) permite que você leve o Linux consigo de forma prática para usar em qualquer computador que ofereça a possibilidade de iniciar o sistema operacional ("dar o *boot*", na gíria técnica) a partir de dispositivos USB, como *pendrives*, discos rígidos ou cartões de memória.

Em tese, qualquer dispositivo de armazenamento em massa USB pode ser transformado em um LiveUSB. Como fazer isso é o que veremos nesse *post*.

Se você não sabe o que é um LiveUSB, já apresentamos ele em [outro *post*]({% post_url 2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}).

Antes de criar um LiveUSB, você deve [baixar o Linux][download]. Caso precise de ajuda com o *download*, consulte esse [outro *post*]({% post_url 2015-12-20-como-baixar-o-linux %}).

As instruções para criar um LiveUSB variam de acordo com o sistema operacional que você usa. Isso porque os programas utilizados são diferentes.

Identifique abaixo o sistema operacional que você está usando agora e clique nele para ver as instruções de como preparar um LiveUSB usando o seu sistema.

[download]: /pt/download/

<div class="alert alert-danger" role="alert">
Antes de continuar, observe que <strong>os dados presentes no dispositivo USB serão perdidos!</strong> Depois, <strong>o dispositivo USB só poderá ser utilizado para armazenar o Linux</strong>. Certifique-se de reservar o dispositivo para apenas essa finalidade.
</div>

Por precaução, antes de começar, recomendo remover todos os dispositivos de armazenamento em massa USB (*pendrives*, HDs externos, cartões de memória, etc.) conectados ao computador, se houver algum.

<div class="no-ads-here panel-group" id="help-accordion" role="tablist" aria-multiselectable="true">
    <div class="panel-default">
        <div class="panel-heading" role="tab" id="help-windows">
            <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#help-accordion" href="#help-windows-collapse" aria-expanded="true" aria-controls="help-windows-collapse">
                    <i class="fa fa-windows"></i> Windows
                </a>
            </h4>
        </div>
        <div id="help-windows-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="help-windows">
            <div class="panel-body">
{% markdown %}

No [Windows][windows], a ferramenta que usaremos para preparar o LiveUSB é o [Rufus][rufus]. Ele é pequeno, leve, gratuito, fácil de usar e dispensa instalação: ao baixar o Rufus, ele já vem pronto para uso.

Baixe o Rufus do seu [*site* oficial][rufus]:

{% include image.html src="/files/2016/02/rufus01.jpg" %}

Conecte ao computador o dispositivo USB que será utilizado e inicie o Rufus. Possivelmente, ele solicitará permissão de administrador, que você deve conceder:

{% include image.html src="/files/2016/02/rufus02.jpg" %}

O Rufus pergunta se deseja procurar atualizações na Internet. Você pode clicar em **Não** e prosseguir:

{% include image.html src="/files/2016/02/rufus03.jpg" %}

Em **Dispositivo**, selecione o dispositivo USB que receberá o Linux (confira o nome e a capacidade para se certificar de que selecionou o dispositivo correto):

{% include image.html src="/files/2016/02/rufus04.jpg" %}

É muito importante que o dispositivo USB que será utilizado seja identificado corretamente. Do contrário, danos irreparáveis podem ser causados ao sistema.

Certifique-se de que a opção **Criar disco bootável com** está marcada, e selecione **Imagem ISO**. Depois, clique no ícone do disco que aparece ao lado dessas opções:

{% include image.html src="/files/2016/02/rufus05.jpg" %}

Abra a imagem ISO do Linux:

{% include image.html src="/files/2016/02/rufus06.jpg" %}

Clique em **Iniciar**:

{% include image.html src="/files/2016/02/rufus07.jpg" %}

O Rufus exibirá um aviso. Esse aviso aparece porque a imagem ISO do Linux openSUSE é uma **imagem ISO híbrida** ([*hybrid ISO*][hybrid-iso]), que serve tanto para criar LiveDVDs como para criar LiveUSBs. Selecione a opção **Gravar no modo Imagem DD** e clique em **OK** para continuar:

{% include image.html src="/files/2016/02/rufus08.jpg" %}

O Rufus exibirá mais um aviso. Esse é o último. **Leia-o atentamente** e clique em **OK** para iniciar a preparação do LiveUSB:

{% include image.html src="/files/2016/02/rufus09.jpg" %}

O Rufus exibe o progresso na parte inferior da janela:

{% include image.html src="/files/2016/02/rufus10.jpg" %}

Gravar dados em um dispositivo USB geralmente é um processo lento, então não se preocupe se a preparação do LiveUSB demorar.

{% include image.html src="/files/2016/02/rufus11.jpg" %}

Ao final, você terá um dispositivo USB que o permitirá utilizar o Linux em qualquer computador que ofereça a possibilidade de iniciar o sistema operacional por um dispositivo USB. Então, poderá fechar o Rufus e remover o dispositivo.

Se seu dispositivo USB tem uma luz que pisca quando dados são gravados nele, aguarde essa luz parar de piscar antes de removê-lo.

[windows]: https://www.microsoft.com/pt-br/windows/
[rufus]: https://rufus.akeo.ie/
[hybrid-iso]: http://www.syslinux.org/wiki/index.php/Isohybrid

{% endmarkdown %}
            </div>
        </div>
    </div>
    
    <div class="panel-default">
        <div class="panel-heading" role="tab" id="help-suse">
            <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#help-accordion" href="#help-suse-collapse" aria-expanded="true" aria-controls="help-suse-collapse">
                    <i class="fl-opensuse"></i> Linux (distribuição openSUSE)
                </a>
            </h4>
        </div>
        <div id="help-suse-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="help-suse">
            <div class="panel-body">
{% markdown %}

No Linux openSUSE, a ferramenta que usaremos para preparar o LiveUSB é o Gravador de imagens do SUSE Studio ([SUSE Studio Imagewriter](http://github.com/mbarringer/imagewriter)).

Você pode obter o Gravador de imagens do SUSE Studio do repositório oficial do openSUSE utilizando a facilidade da Instalação Em Um Clique ([One Click Install](https://en.opensuse.org/openSUSE:One_Click_Install)), que é o que recomendamos: [clique aqui](/downloads/imagewriter.ymp) para iniciar o processo de instalação.

{% include image.html src="/files/2016/02/imagewriter01.png" %}

Alternativamente, se preferir, você pode instalar o pacote **imagewriter** usando a ferramenta de sua preferência. Para instalar o Gravador de imagens do SUSE Studio pelo terminal usando o aplicativo de linha de comando **zypper**, por exemplo, o comando a ser executado é:

{% highlight text %}
$ sudo zypper in imagewriter
{% endhighlight %}

Uma vez instalado o Gravador de imagens do SUSE Studio, conecte ao computador o dispositivo USB que será utilizado e inicie o programa clicando no **ícone do Kicker**, apontando para **Sistema** e, por fim, clicando em **Gravador de imagens do SUSE Studio**:

{% include image.html src="/files/2016/02/imagewriter02.jpg" %}

Clique onde se lê **Drag disk image here or click to select** (traduzindo, arraste a imagem do disco até aqui ou clique para selecionar):

{% include image.html src="/files/2016/02/imagewriter03.png" %}

Abra a imagem ISO do Linux:

{% include image.html src="/files/2016/02/imagewriter04.jpg" %}

Na parte inferior da janela, selecione o dispositivo USB que receberá o Linux (confira o nome e a capacidade para se certificar de que selecionou o dispositivo correto):

{% include image.html src="/files/2016/02/imagewriter05.jpg" %}

É muito importante que o dispositivo USB que será utilizado seja identificado corretamente. Do contrário, danos irreparáveis podem ser causados ao sistema.

Clique em **Write** (gravar):

{% include image.html src="/files/2016/02/imagewriter06.png" %}

O Gravador de imagens do SUSE Studio alerta que ao continuar todos os dados presentes no dispositivo USB serão perdidos, clique em **OK**:

{% include image.html src="/files/2016/02/imagewriter07.jpg" %}

Possivelmente, o Gravador de imagens do SUSE Studio solicitará permissão de administrador. Se isso acontecer, digite a senha do superusuário (*root*) e clique em **OK** para começar:

{% include image.html src="/files/2016/02/imagewriter08.jpg" %}

O progresso da preparação do LiveUSB é exibido:

{% include image.html src="/files/2016/02/imagewriter09.jpg" %}

Gravar dados em um dispositivo USB geralmente é um processo lento, então não se preocupe se a preparação do LiveUSB demorar.

Ao final, quando essa janela de progresso desaparecer, você terá um dispositivo USB que o permitirá utilizar o Linux em qualquer computador que ofereça a possibilidade de iniciar o sistema operacional por um dispositivo USB. Então, você poderá fechar o Gravador de imagens do SUSE Studio e remover o dispositivo.

Se seu dispositivo USB tem uma luz que pisca quando dados são gravados nele, aguarde essa luz parar de piscar antes de removê-lo.

{% endmarkdown %}
            </div>
        </div>
    </div>
    
    <div class="panel-default">
        <div class="panel-heading" role="tab" id="help-linux">
            <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#help-accordion" href="#help-linux-collapse" aria-expanded="true" aria-controls="help-linux-collapse">
                    <i class="fa fa-linux"></i> Linux (qualquer distribuição)
                </a>
            </h4>
        </div>
        <div id="help-linux-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="help-linux">
            <div class="panel-body">
{% markdown %}


As instruções a seguir devem funcionar para qualquer distribuição Linux (inclusive para o openSUSE). Vamos utilizar o terminal para preparar o LiveUSB. Certifique-se de que os aplicativos de linha de comando **df**, **dd** e **fdisk** encontram-se instalados.

No openSUSE, eles já devem vir instalados por padrão, pois são fornecidos pelos pacotes **coreutils** e **util-linux**, que são básicos. Caso queira se assegurar de que estejam instalados, o seguinte comando deve instalá-los, caso ainda não estejam:

{% highlight text %}
$ sudo zypper in coreutils util-linux
{% endhighlight %}

Primeiro, vamos verificar o caminho para o dispositivo USB que receberá o Linux. Conecte ao computador o dispositivo USB e execute o seguinte comando no terminal:

{% highlight text %}
$ df
{% endhighlight %}

Ele deve produzir uma saída parecida com essa:

{% highlight text %}
Sist. Arq.     1K-blocos     Usado Disponível Uso% Montado em
devtmpfs         1013820         0    1013820   0% /dev
tmpfs            1019636     21448     998188   3% /dev/shm
tmpfs            1019636      2076    1017560   1% /run
tmpfs            1019636         0    1019636   0% /sys/fs/cgroup
/dev/sda1       30832636  11853476   17924688  40% /
/dev/sda2       73502716  35866924   37635792  49% /run/media/vinicius/SISTEMA
/dev/sda5      104857596 101940936    2916660  98% /run/media/vinicius/PESSOAL
/dev/sda3       97920668  50306056   47100156  52% /home
/dev/sdb1        7816192        12    7816180   1% /run/media/vinicius/VINICIUS
{% endhighlight %}

A última linha deve mostrar o dispositivo USB que você acabou de conectar. Se estiver em dúvida, remova-o, execute o comando `df` e verifique que a linha referente a ele desaparece. Então, conecte-o novamente e execute o comando `df` mais uma vez. Perceba que a linha referente a ele reaparece:

{% highlight text %}
/dev/sdb1        7816192        12    7816180   1% /run/media/vinicius/VINICIUS
{% endhighlight %}

A coluna mais à esquerda na saída produzida pelo comando `df` mostra uma partição (nesse exemplo, **/dev/sdb1**, no seu computador pode ser diferente). O caminho antes do número é o caminho do dispositivo (**/dev/sdb**).

Você pode comparar a saída do comando `df` com a saída do comando `fdisk -l`:

{% highlight text %}
# fdisk -l

Disk /dev/sda: 298.1 GiB, 320072933376 bytes, 625142448 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x9b5a4cc6

Device     Boot     Start       End   Sectors  Size Id Type
/dev/sda1  *         2048  62916607  62914560   30G 83 Linux
/dev/sda2        62916608 209922047 147005440 70.1G  7 HPFS/NTFS/exFAT
/dev/sda3       209922048 409151487 199229440   95G 83 Linux
/dev/sda4       409151488 625141759 215990272  103G  5 Extended
/dev/sda5       409153536 618868735 209715200  100G  7 HPFS/NTFS/exFAT
/dev/sda6       618870784 625141759   6270976    3G 82 Linux swap / Solaris

Disk /dev/sdb: 7.5 GiB, 8022654976 bytes, 15669248 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xc54fbc17

Device     Boot Start      End  Sectors  Size Id Type
/dev/sdb1        2048 15667199 15665152  7.5G  b W95 FAT32
{% endhighlight %}

O aplicativo **fdisk** informa que existe um dispositivo **/dev/sdb** de 7,5GB com apenas uma partição **/dev/sdb1** que ocupa todo o seu espaço e apresenta sistema de arquivos FAT32. Esse dispositivo eu reconheço corretamente como o meu *pendrive*.

É muito importante que o dispositivo USB que será utilizado seja identificado corretamente. Do contrário, danos irreparáveis podem ser causados ao sistema.

Após identificar e ter certeza do caminho do dispositivo, use o comando `dd` para preparar o LiveUSB. Esse comando precisa de dois argumentos: o caminho da imagem ISO (nesse exemplo, **/home/vinicius/Downloads/openSUSE-Leap-42.1-KDE-Live.x86_64-20160214.iso**) e o caminho do dispositivo (nesse exemplo, **/dev/sdb**). Execute-o no terminal:

{% highlight text %}
$ sudo dd if=/home/vinicius/Downloads/openSUSE-Leap-42.1-KDE-Live.x86_64-20160214.iso of=/dev/sdb bs=4k
{% endhighlight %}

O último argumento passado (`bs=4k`) é opcional, mas a adição dele deve acelerar o processo de gravação no dispositivo USB. Esse processo geralmente é um processo lento, então não se preocupe se demorar.

Quando o programa **dd** termina, ele informa algumas estatísticas sobre a quantidade de dados que ele gravou no dispositivo USB:

{% highlight text %}
425216+0 registros de entrada
425216+0 registros de saída
1741684736 bytes (1,7 GB) copiados, 366,236 s, 4,8 MB/s
{% endhighlight %}

Nesse momento, seu dispositivo USB já é capaz de iniciar o Linux em qualquer computador que ofereça a possibilidade de iniciar o sistema operacional por um dispositivo USB.

Pode remover seu dispositivo USB. Se ele tem uma luz que pisca quando dados são gravados nele, aguarde essa luz parar de piscar antes de removê-lo.

{% endmarkdown %}
            </div>
        </div>
    </div>
</div>

Como utilizar o LiveUSB que você acabou de preparar será o assunto de outro *post*. Não deixe de nos acompanhar para conferir!

## Referências

- [Rufus: o canivete suíço do boot pelo pendrive (ou cartão de memória) - Antônio Vinícius](https://vinyanalista.github.io/blog/2015/10/08/rufus/)
- [SDB:Live USB stick - openSUSE wiki](https://en.opensuse.org/SDB:Live_USB_stick)
- [Disk images - SUSE Studio Help](https://susestudio.com/help/use/disk-image.html)

<link href="//cdn.rawgit.com/Lukas-W/font-linux/v0.2/assets/font-linux.css" rel="stylesheet">
