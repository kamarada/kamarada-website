---
date: '2020-07-29 00:30:00 GMT-3'
image: '/files/2020/07/ventoy-01.jpg'
layout: post
published: true
nickname: 'ventoy'
title: 'Ventoy: crie pendrives multiboot simplesmente copiando imagens ISO para ele'
---

Sabia que você pode instalar [Windows] e [Linux] usando o mesmo _pendrive_, sem precisar formatá-lo duas vezes? Assim como usar o mesmo _pendrive_ para testar [imagens _live_][live] de várias distribuições Linux, sem formatá-lo de novo e de novo? É bem verdade que existem várias ferramentas para criar _pendrives_ inicializáveis (ou "bootáveis", na gíria técnica), dentre as quais [já falamos aqui][liveusb] sobre o [Rufus] (para Windows), o [SUSE Studio Imagewriter][imagewriter] e o **[dd]** (para Linux), mas nenhuma delas é mais fácil de usar que o recém-chegado Ventoy.

O [Ventoy] é uma ferramenta de [_software_ livre][free-sw] para criar _pendrives_ inicializáveis com [imagens ISO][iso]. O Ventoy formata o _pendrive_ uma única vez e se instala nele. A partir daí, basta você copiar imagens ISO para o _pendrive_. Reinicie o computador com o _pendrive_ conectado e o Ventoy apresentará um menu do [GRUB] listando as imagens ISO que estão no _pendrive_. Escolha uma e o sistema operacional será iniciado a partir dela. O Ventoy suporta [BIOS] tradicional e [UEFI] (com e sem [_boot_ seguro][secure-boot]), partições [MBR] e [GPT], o que o torna universal.

{% include image.html src="/files/2020/07/ventoy-01.jpg" %}

Outras ferramentas do gênero, como as citadas anteriormente, extraem o conteúdo da imagem ISO para o _pendrive_, permitindo que apenas uma imagem ISO seja usada por vez. Com isso, você precisa formatar o _pendrive_ cada vez que quiser usar outra imagem ISO. Além disso, normalmente elas impedem que ele seja usado para outras finalidades (não permitem copiar outros arquivos). Com o Ventoy, você pode copiar e excluir imagens ISO do _pendrive_, assim como quaisquer outros arquivos, sem precisar formatá-lo de novo e de novo.

O Ventoy é uma "mão na roda" para quem trabalha formatando e reparando computadores, ou quem gosta de experimentar várias distribuições Linux. Eu mesmo conheci o Ventoy por indicação de um amigo e tenho usado para testar o [Linux Kamarada 15.2 Beta][kamarada-15.2-beta]. Semana passada o Ventoy me foi muito útil para instalar o Windows e o Linux no meu novo [SSD Kingston A400][kingston], que recebi da garantia após o anterior apresentar o _bug_ [SATAFIRM S11][kingston].

A primeira versão do Ventoy (1.0.0) foi lançada em [05 de abril][ventoy-news]. A versão mais recente (1.0.17) foi lançada há 4 dias, em [25 de julho][ventoy-news], e é essa versão que vou usar aqui hoje.

## O que preciso para usar o Ventoy?

Para usar o Ventoy, você precisa de um _pendrive_ ou equivalente (por exemplo, HD externo, cartão de memória, etc.) em que caibam as imagens ISO que você vai usar. Por exemplo, a [imagem ISO do Linux Kamarada 15.1][kamarada-15.1-iso] ocupa 1,5GB. Se vai usar somente ela, você precisa de um _pendrive_ de pelo menos 2GB. Já a [ISO do Windows 10 versão 2004][windows-10-iso] ocupa 4,6GB. Para usar ambas, você precisa de um _pendrive_ de pelo menos 8GB, e assim por diante.

Além disso, você precisa de um [PC] com Windows ou Linux para preparar o _pendrive_.

<div class="alert alert-danger" role="alert">
    <p>Antes de continuar, observe que o <em>pendrive</em> será formatado pelo Ventoy, portanto <strong>os dados presentes no <em>pendrive</em> serão perdidos</strong>! Se deseja manter esses dados no <em>pendrive</em>, o que você pode fazer é copiá-los para outro local (para o computador, por exemplo), instalar o Ventoy no <em>pendrive</em> e então devolver os dados para o <em>pendrive</em>.</p>
    <p>Também é recomendado que você remova quaisquer outros dispositivos de armazenamento conectados ao computador (como outros <em>pendrives</em>, HDs externos, cartões de memória, etc.) para prevenir que sejam formatados por engano.</p>
</div>

Sem mais delongas, vejamos como instalar e usar essa poderosa ferramenta!

## Como instalar o Ventoy no pendrive

Comece baixando o Ventoy para o seu sistema operacional a partir da página de versões lançadas (_releases_) do Ventoy no GitHub:

- [https://github.com/ventoy/Ventoy/releases](https://github.com/ventoy/Ventoy/releases)

{% include image.html src="/files/2020/07/ventoy-02.png" %}

A seguir, veja instruções de como instalar o Ventoy no _pendrive_ conforme o sistema operacional que você usa.

### Como instalar o Ventoy usando o Windows

Baixe o arquivo `.zip` referente ao Ventoy para Windows.

Quando o _download_ terminar, extraia os conteúdos do arquivo. Para isso, você pode usar o assistente do próprio Windows ou um programa como o [7-Zip]:

{% include image.html src="/files/2020/07/ventoy-windows-01-pt.jpg" %}

Entre na pasta extraída e inicie o executável **Ventoy2Disk** dando um duplo-clique nele:

{% include image.html src="/files/2020/07/ventoy-windows-02-pt.jpg" %}

Você pode traduzir a interface do Ventoy abrindo o menu **Language** (idioma) e selecionando o **Portuguese Brazilian (Português do Brasil)**:

{% include image.html src="/files/2020/07/ventoy-windows-03.jpg" %}

Selecione o **Dispositivo** que receberá o Ventoy (nesse caso, o _pendrive_) e clique em **Instalar**:

{% include image.html src="/files/2020/07/ventoy-windows-04-pt.jpg" %}

O Ventoy faz o alerta que eu antecipei. Clique em **Sim**:

{% include image.html src="/files/2020/07/ventoy-windows-05-pt.jpg" %}

O Ventoy alerta mais uma vez (pense duas vezes), clique em **Sim**:

{% include image.html src="/files/2020/07/ventoy-windows-06-pt.jpg" %}

Após alguns segundos ou minutos, a instalação do Ventoy no _pendrive_ é concluída:

{% include image.html src="/files/2020/07/ventoy-windows-07-pt.jpg" %}

Clique em **OK**.

Note que agora o Ventoy informa qual versão está instalada no dispositivo:

{% include image.html src="/files/2020/07/ventoy-windows-08-pt.jpg" %}

Você pode fechar o programa agora.

Com o _pendrive_ preparado, copie para ele as imagens ISO que vai usar:

{% include image.html src="/files/2020/07/ventoy-windows-09-pt.jpg" %}

Note que você pode organizá-las dentro de uma pasta, para separá-las dos demais arquivos do _pendrive_. Para montar o menu durante o _boot_, o Ventoy procura recursivamente por imagens ISO em pastas e subpastas dentro do _pendrive_.

### Como instalar o Ventoy usando o Linux

Para demonstrar como instalar o Ventoy usando o Linux, vou usar o [Linux Kamarada 15.1][kamarada-15.1].

Baixe o arquivo `.tar.gz` referente ao Ventoy para Linux.

Quando o _download_ terminar, extraia os conteúdos do arquivo:

{% include image.html src="/files/2020/07/ventoy-linux-01-pt.jpg" %}

Entre na pasta criada e verifique a existência do arquivo `Ventoy2Disk.sh`:

{% include image.html src="/files/2020/07/ventoy-linux-02-pt.jpg" %}

Abra uma janela do terminal nessa pasta.

Antes de continuar, identifique o _pendrive_ no qual o Ventoy será instalado. Você pode fazer isso usando o aplicativo **Discos**:

{% include image.html src="/files/2020/07/ventoy-linux-03-pt.jpg" %}

Ou o comando **[fdisk]**:

```
# fdisk -l

[...]

Disco /dev/sdb: 7,5 GiB, 8022654976 bytes, 15669248 setores
Modelo de disco: USB Flash Disk  
Unidades: setor de 1 * 512 = 512 bytes
Tamanho de setor (lógico/físico): 512 bytes / 512 bytes
Tamanho E/S (mínimo/ótimo): 512 bytes / 512 bytes
Tipo de rótulo do disco: dos
Identificador do disco: 0x7b65b335

Dispositivo Inicializar Início      Fim  Setores Tamanho Id Tipo
/dev/sdb1   *             2048 15669247 15667200    7,5G  c FAT32 W95 (LBA)
```

No meu caso, o _pendrive_ é o dispositivo `/dev/sdb`.

<div class="alert alert-danger" role="alert">
    <p>Certifique-se de identificar corretamente o <em>pendrive</em>, assim como informá-lo corretamente a seguir, para não formatar outro dispositivo por engano.</p>
</div>

Estamos prontos para instalar o Ventoy no _pendrive_. Execute o _script_ `Ventoy2Disk.sh` como usuário administrador (_root_), passando como argumento a identificação do dispositivo:

```
# sh Ventoy2Disk.sh -i /dev/sdb

***********************************************************
*                Ventoy2Disk Script                       *
*             longpanda  admin@ventoy.net                 *
***********************************************************

Disk : /dev/sdb
Modelo:  USB DISK 2.0 (scsi)
Size : 7 GB
Style: MBR


Attention:
You will install Ventoy to /dev/sdb.
All the data on the disk /dev/sdb will be lost!!!

Continue? (y/n)
```

O Ventoy alerta que os dados no _pendrive_ serão destruídos e pergunta se deseja continuar.

Tecle `y` (de _yes_, que quer dizer "sim" em inglês) e depois **Enter**:

```
Continue? (y/n)y

All the data on the disk /dev/sdb will be lost!!!
Double-check. Continue? (y/n)
```

O Ventoy alerta mais uma vez (pense duas vezes). De novo, tecle `y` e **Enter**:

```
Double-check. Continue? (y/n)y

Create partitions on /dev/sdb by parted in MBR style ...
Done
mkfs on disk partitions ...
create efi fat fs /dev/sdb2 ...
mkfs.fat 4.1 (2017-01-24)
success
mkexfatfs 1.3.0
Creating... done.
Flushing... done.
File system created successfully.
writing data to disk ...
sync data ...
esp partition processing ...
umount: /home/linux/Downloads/ventoy-1.0.17-linux/ventoy-1.0.17/tmp_mnt: o alvo está ocupado.
rm: não foi possível remover './tmp_mnt': Dispositivo ou recurso está ocupado

Install Ventoy to /dev/sdb successfully finished.
```

Após alguns segundos ou minutos, a instalação do Ventoy no _pendrive_ é concluída.

No Linux Kamarada 15.1, uma mensagem de erro foi exibida, como você pode ver acima. Isso ocorreu porque o Ventoy formata o _pendrive_ com o sistema de arquivos [exFAT] e o suporte a esse sistema de arquivos não vem instalado por padrão no Linux Kamarada 15.1.

Caso você se depare com essa mensagem no Linux Kamarada 15.1, no [openSUSE Leap 15.1][leap-15.1], ou em outra distribuição baseada no [openSUSE], instale o suporte ao exFAT com:

```
# zypper in fuse-exfat
```

O Linux Kamarada 15.2 virá com suporte nativo ao sistema de arquivos exFAT.

Com o _pendrive_ preparado, copie para ele as imagens ISO que vai usar:

{% include image.html src="/files/2020/07/ventoy-linux-04-pt.jpg" %}

Note que você pode organizá-las dentro de uma pasta, para separá-las dos demais arquivos do _pendrive_. Para montar o menu durante o _boot_, o Ventoy procura recursivamente por imagens ISO em pastas e subpastas dentro do _pendrive_.

## Usando o pendrive com o Ventoy

Depois de instalar o Ventoy no _pendrive_ e copiar imagens ISO para ele, é hora de usá-lo: reinicie o computador com o _pendrive_ conectado para "dar o _boot_" por ele. O Ventoy listará as imagens ISO presentes no _pendrive_ em um menu, semelhante ao da primeira foto desse texto. Escolha a imagem ISO desejada e tecle **Enter** para iniciar o sistema contido nela.

## Referências

- [Instale Linux & Windows com O MESMO Pen Drive - Ventoy - Diolinux][diolinux]
- [Ventoy: crie pendrives multiboot para quantas e quais ISOs quiser - Viva o Linux][vivaolinux]
- [Ventoy - Documentation - Get Started][ventoy-doc]

[windows]:              https://www.microsoft.com/pt-br/windows/
[linux]:                https://www.vivaolinux.com.br/linux/
[live]:                 https://kamarada.github.io/pt/2015/11/25/o-que-e-um-livecd-um-livedvd-um-liveusb/
[liveusb]:              https://kamarada.github.io/pt/2016/02/21/como-preparar-um-liveusb/
[rufus]:                https://rufus.ie/
[imagewriter]:          https://github.com/openSUSE/imagewriter
[dd]:                   https://man7.org/linux/man-pages/man1/dd.1.html
[ventoy]:               https://www.ventoy.net/
[free-sw]:              https://www.gnu.org/philosophy/free-sw.pt-br.html
[iso]:                  https://pt.wikipedia.org/wiki/Imagem_ISO
[grub]:                 https://www.gnu.org/software/grub/
[bios]:                 https://www.vivaolinux.com.br/artigo/UEFI-e-Boot-Seguro-Conceitos-basicos
[uefi]:                 https://www.vivaolinux.com.br/artigo/UEFI-e-Boot-Seguro-Conceitos-basicos
[secure-boot]:          https://www.vivaolinux.com.br/artigo/UEFI-e-Boot-Seguro-Conceitos-basicos
[mbr]:                  https://www.vivaolinux.com.br/artigo/UEFI-e-Boot-Seguro-Conceitos-basicos
[gpt]:                  https://www.vivaolinux.com.br/artigo/UEFI-e-Boot-Seguro-Conceitos-basicos
[kamarada-15.2-beta]:   https://kamarada.github.io/pt/2020/04/14/linux-kamarada-15.2-beta-deixa-o-seu-desktop-ainda-mais-verde/
[kingston]:             https://vinyanalista.github.io/blog/2020/07/24/como-resolver-o-problema-do-satafirm-s11-do-ssd-kingston-a400-e-outros-modelos/
[ventoy-news]:          https://www.ventoy.net/en/doc_news.html
[kamarada-15.1-iso]:    https://kamarada.github.io/pt/download/15.1/
[windows-10-iso]:       https://www.microsoft.com/pt-br/software-download/windows10
[pc]:                   https://pt.wikipedia.org/wiki/Computador_pessoal
[7-zip]:                https://www.7-zip.org/
[kamarada-15.1]:        https://kamarada.github.io/pt/2020/02/24/kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia/
[fdisk]:                https://man7.org/linux/man-pages/man8/fdisk.8.html
[exfat]:                https://pt.wikipedia.org/wiki/ExFAT
[leap-15.1]:            https://kamarada.github.io/pt/2019/05/22/comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap/
[opensuse]:             https://www.opensuse.org/
[diolinux]:             https://www.youtube.com/watch?v=YxW_L2Us0Is
[vivaolinux]:           https://www.vivaolinux.com.br/artigo/Ventoy-crie-pendrives-multiboot-para-quantas-e-quais-ISOs-quiser/
[ventoy-doc]:           https://www.ventoy.net/en/doc_start.html
