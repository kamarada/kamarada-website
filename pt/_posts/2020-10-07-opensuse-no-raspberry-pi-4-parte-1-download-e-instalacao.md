---
date: '2020-10-07 19:50:00 GMT-3'
image: '/files/2020/10/rpi4b-opensuse.jpg'
layout: post
published: true
nickname: 'rpi4b-opensuse'
title: 'openSUSE no Raspberry Pi 4 — parte 1: download e instalação'
---

{% include image.html src='/files/2020/10/rpi4b-opensuse.jpg' %}

Sabia que já é possível rodar o [openSUSE] no [Raspberry Pi 4][rpi4b]? Na primeira vez em que escrevi sobre o minicomputador do tamanho de um cartão de crédito, há pouco mais de um ano, o Projeto openSUSE ainda não oferecia suporte à geração mais nova do Raspberry Pi. Quem quisesse usar um Raspberry Pi 4 como um _desktop_ naquela época teria que recorrer a outra distribuição, como [Raspbian] ou [Manjaro].

Se quiser saber mais sobre o Raspberry Pi 4 e suas especificações técnicas, leia o _post_:

- [Primeiros passos no Raspberry Pi com NOOBS e Raspbian][rpi4b]

Mesmo hoje, o suporte do openSUSE ao Raspberry Pi 4 ainda não é completo. Explico.

## openSUSE versus Raspbian e Manjaro

_Softwares_ específicos do Raspberry Pi — o _firmware_, o _bootloader_ e os módulos do _kernel_ Linux — são de [propriedade][proprietary-sw] da fabricante do seu processador, a [Broadcom], que não parece disposta a torná-los [abertos][opensource]. Talvez isso não seja um problema para a maioria dos usuários do Raspberry Pi. É compreensível que foi uma concessão que os projetistas da placa tiveram que fazer para conseguir ofertá-la a preços acessíveis. Mas isso pode ser uma questão para os mais puristas do código aberto.

A [Raspberry Pi Foundation][rpi-foundation] disponibiliza no [GitHub] os códigos-fonte do seu próprio [_fork_ do _kernel_ Linux][rpi-linux] e os [binários pré-compilados][firmware] dos _softwares_ proprietários da Broadcom.

O Raspbian oferece suporte completo ao Raspberry Pi 4 porque usa o _kernel_ Linux e os binários pré-compilados obtidos da Raspberry Pi Foundation. O Manjaro seguiu o mesmo caminho e, por isso, também oferece suporte completo ao Raspberry Pi 4. Esse caminho é mais curto, fornece "para ontem" um sistema que funciona, e não há nada de errado nisso.

Mas o Projeto openSUSE optou por seguir um caminho diferente, tentando adicionar suporte ao Raspberry Pi 4 ao [_kernel_ Linux original][linux], que é usado pela distribuição. É um caminho mais longo e demorado, mas que na teoria deve fornecer melhores resultados no longo prazo, que inclusive beneficiarão outras distribuições além do próprio openSUSE. A desvantagem dessa abordagem é que, enquanto módulos de código aberto não são desenvolvidos, não é possível usar alguns recursos do Raspberry Pi 4.

## Sabia que existem "dois openSUSEs"?

Até 2014, havia apenas uma distribuição chamada openSUSE, então na versão 13.2.

A partir daí, o Projeto openSUSE passou a oferecer duas distribuições:

- **openSUSE Leap:** mais estável, sucessor do bom e velho openSUSE, mas com um novo processo de desenvolvimento, atualmente está na [versão 15.2][leap-15.2] e lança novas versões com regularidade (geralmente, uma nova versão por ano), de modo semelhante a distribuições mais tradicionais como [Ubuntu], [Debian] e [Fedora]; e
- **openSUSE Tumbleweed:** com lançamentos contínuos (_rolling release_), ou seja, não possui versões distintas, apenas a versão mais recente, que contém sempre os _softwares_ mais recentes, recebe atualizações pequenas e frequentes sempre que um _software_ é atualizado, semelhante a distribuições como [Arch] e Manjaro.

O openSUSE Leap é mais indicado para usuários iniciantes e organizações, que tendem a evitar atualizações frequentes. Já o openSUSE Tumbleweed é preferido por usuários entusiastas que desejam usar sempre o que há de mais novo em Linux.

Normalmente, eu falo aqui do openSUSE Leap. É a distribuição que eu uso e indico há anos, principalmente para usuários iniciantes, tanto que o [Linux Kamarada][kamarada-15.2] é baseado nele.

Mas hoje eu quero falar do Tumbleweed, que, nos meus testes, se saiu um pouco melhor que o Leap no Raspberry Pi 4. Isso já era esperado, uma vez que o suporte ao Raspberry Pi 4 ainda está em desenvolvimento e as novidades chegam primeiro no Tumbleweed.

## O que funciona e o que não funciona?

**Resumo:** no que se refere ao suporte ao _hardware_ do Raspberry Pi 4, praticamente não há diferença entre o Leap e o Tumbleweed. Se você pretende usar o Raspberry Pi como um servidor doméstico, o openSUSE vai te atender muito bem. Se pretende usar como um _desktop_, pode ser que sinta falta de alguns recursos, como o Bluetooth e o som.

Eu testei os seguintes recursos do Raspberry Pi 4 nas duas distribuições:

- **Rede sem fio Wi-Fi:** em ambas, consegui me conectar a redes de 2,4GHz e 5GHz;
- **Rede cabeada Ethernet:** em ambas, consegui me conectar a uma rede cabeada;
- **Bluetooth:** em ambas, **não** consegui fazer o Bluetooth funcionar;
- **Portas USB:** em ambas, todas as 4 portas USB funcionaram, apenas faço algumas observações quanto a teclado e _mouse_:
  * o teclado não funciona no menu do GRUB;
  * em ambas as distribuições, dependendo do modelo do teclado e/ou _mouse_, ao reiniciar o Raspberry Pi pode ser que parem de funcionar, sendo necessário removê-los e plugá-los de novo para que voltem;
- **Portas micro-HDMI**:
  * no Tumbleweed, ambas funcionaram, mas ao mudar o cabo HDMI de uma porta para outra, não era exibida imagem nessa outra porta — então, se precisar mudar o cabo HDMI de porta, é necessário reiniciar o Raspberry Pi;
  * no Leap, somente a porta HDMI 1 funcionou (a próxima da saída de som), a porta HDMI 0 **não** funcionou (a próxima da porta USB-C);
- **Saída de som:** em ambas as distribuições, **não** consegui produzir som usando o Raspberry Pi de forma alguma — seja pela saída de som (conectando um fone de ouvido tradicional, por exemplo), pela HDMI (conectando uma TV) ou por Bluetooth.

O que eu não testei (não sei se funciona ou não):

- Usar dois monitores ao mesmo tempo, conectando cada um a uma porta HDMI;
- Pinos GPIO;
- Qualquer coisa que eu não tenha listado acima.

Sabendo o que hoje funciona ou não no Raspberry Pi 4 com openSUSE, você pode decidir se usa o openSUSE (e qual variação usar: Leap ou Tumbleweed) ou se aguarda o suporte do openSUSE ao _hardware_ do Raspberry Pi 4 melhorar e usa outra distribuição enquanto isso.

## Baixando a imagem do openSUSE

Para baixar a imagem do openSUSE e gravá-la no cartão de memória, você vai precisar de um PC com Linux ou [Windows] e um cartão de memória micro-SD de pelo menos 8GB. Provavelmente o passo-a-passo a seguir também funciona no [macOS].

Eu vou usar o [Linux Kamarada 15.2][kamarada-15.2].

Acesse a página do Raspberry Pi 4 na _wiki_ do openSUSE:

- [https://en.opensuse.org/HCL:Raspberry_Pi4][opensuse-wiki]

{% include image.html src='/files/2020/10/rpi4b-opensuse-01.jpg' %}

Note que há várias opções de imagens tanto do Tumbleweed quanto do Leap 15.2. Se você pretende usar o Raspberry Pi como um servidor, a imagem JeOS (_Just enough Operating System_ — traduzindo: tão somente o sistema operacional) é a mais adequada. Se pretende usá-lo como um _desktop_, pode escolher outra imagem com alguma área de trabalho.

Aqui, vou usar a imagem do Tumbleweed com a área de trabalho [XFCE], que é bem leve e, por isso, adequada para o Raspberry Pi. Se você prefere o Leap, o passo-a-passo é o mesmo.

Clique no _link_ para a imagem que deseja baixar. O _download_ pode demorar um pouco, considerando que o arquivo é grande (no meu caso, 1 GB).

Conecte ao computador o cartão de memória que receberá a imagem.

Note que gravar a imagem do openSUSE no cartão de memória apagará quaisquer dados que porventura estejam nesse cartão. Se ele contém arquivos, talvez você queira fazer um _backup_ deles antes de continuar para não perdê-los.

Recomendo que você remova quaisquer outros dispositivos de armazenamento (_pendrives_, HDs externos, etc) conectados e deixe apenas o cartão de memória, pra não correr o risco de formatar o dispositivo errado (e perder arquivos, provavelmente de forma irreversível).

## Baixando o Balena Etcher

Para gravar a imagem do openSUSE no cartão de memória, eu recomendo a ferramenta [Balena Etcher][etcher], por ser simples e fácil de usar. Ela é gratuita e de [código aberto][etcher-source].

Apenas observo que há uma questão de **privacidade** nessa ferramenta, mas creio ser um problema pequeno e fácil de contornar: durante o uso, o programa faz conexões de rede com servidores do [Google], [Facebook] e outros serviços (mais informações [aqui][etcher-privacy-1] e [aqui][etcher-privacy-2]), o que é intrigante, porque isso é totalmente desnecessário à sua função.

Se isso for uma questão pra você, creio ser suficiente desconectar o computador da Internet durante o uso do aplicativo. Outra alternativa, se você usa Linux, é usar o comando **dd**, falo sobre ele mais adiante (se quiser, você pode pular toda essa parte sobre o Balena Etcher).

Seguindo com o Balena Etcher... acesse seu _site_ e clique no botão para _download_:

- [https://www.balena.io/etcher/][etcher]

{% include image.html src='/files/2020/10/rpi4b-opensuse-02.jpg' %}

Quando o _download_ terminar, abra a pasta **Downloads** e extraia o conteúdo do arquivo compactado baixado:

{% include image.html src='/files/2020/10/rpi4b-opensuse-03-pt.jpg' %}

Se você vai desconectar seu computador da Internet, a hora de fazer isso é agora.

Abra a pasta criada e faça um clique-duplo no arquivo com extensão [AppImage] (que é, na verdade, o programa Balena Etcher em si, isso vai iniciá-lo):

{% include image.html src='/files/2020/10/rpi4b-opensuse-04-pt.jpg' %}

## Gravando a imagem no cartão de memória

No Balena Etcher, clique no botão **Flash from file** (gravar a partir do arquivo) e informe a localização da imagem do openSUSE que você baixou:

{% include image.html src='/files/2020/10/rpi4b-opensuse-05.jpg' %}

Depois, clique no botão **Select target** (selecionar destino):

{% include image.html src='/files/2020/10/rpi4b-opensuse-06.jpg' %}

Marque o cartão de memória e clique em **Select** (selecionar):

{% include image.html src='/files/2020/10/rpi4b-opensuse-07.jpg' %}

**Cuidado:** certifique-se de selecionar corretamente o cartão de memória, do contrário a imagem será gravada no dispositivo de armazenamento errado e você poderá perder dados de forma irreversível. Eu costumo me orientar pela capacidade (**Size**) do dispositivo.

Finalmente, clique no último botão, **Flash** (gravar):

{% include image.html src='/files/2020/10/rpi4b-opensuse-08.jpg' %}

Informe a senha do administrador (no Linux, chamado de usuário _root_) para prosseguir.

Aguarde a imagem ser gravada no cartão de memória, o Balena Etcher até informa uma estimativa de quanto tempo isso vai demorar (você pode sair e ir tomar um café):

{% include image.html src='/files/2020/10/rpi4b-opensuse-09.jpg' %}

Depois de gravar, o Balena Etcher verifica os arquivos no cartão de memória (você pode demorar mais um pouco no seu café):

{% include image.html src='/files/2020/10/rpi4b-opensuse-10.jpg' %}

No final, o Balena Etcher informa que a gravação está completa (**Flash Complete**):

{% include image.html src='/files/2020/10/rpi4b-opensuse-11.jpg' %}

Você pode simplesmente fechar o Balena Etcher.

Se você desconectou seu computador da Internet, já pode conectá-lo de volta.

## Alternativa ao Etcher: comando dd

Se você preferiu usar o Balena Etcher, pode pular essa seção.

Se você não quiser usar o Balena Etcher, uma alternativa é usar o comando **[dd]**, que provavelmente está presente em todas as distribuições Linux.

Antes, identifique o cartão de memória que receberá a imagem. Você pode fazer isso com o auxílio do comando **[fdisk]**, que provavelmente também é outro comando universal:

```
# fdisk -l
Disco /dev/sda: 447,1 GiB, 480103981056 bytes, 937703088 setores
Modelo de disco: KINGSTON SA400S3
[...]

Disco /dev/mmcblk0: 29,7 GiB, 31914983424 bytes, 62333952 setores
Unidades: setor de 1 * 512 = 512 bytes
Tamanho de setor (lógico/físico): 512 bytes / 512 bytes
Tamanho E/S (mínimo/ótimo): 512 bytes / 512 bytes
Tipo de rótulo do disco: dos
Identificador do disco: 0xf77ae276

Dispositivo    Inicializar Início      Fim  Setores Tamanho Id Tipo
/dev/mmcblk0p1               2048 62332927 62330880   29,7G  b FAT32 W95
```

No meu caso, o cartão de memória é o dispositivo `/dev/mmcblk0`. Eu costumo me orientar pela capacidade do dispositivo (nesse caso, um cartão de memória de 32 GB, é normal o tamanho informado pelo sistema operacional diferir um pouco).

Então, execute o comando a seguir para gravar a imagem no cartão de memória, fazendo as substituições necessárias.

**Cuidado:** certifique-se de identificar e informar corretamente o cartão de memória, do contrário a imagem será gravada no dispositivo de armazenamento errado e você poderá perder dados de forma irreversível.

```
# xzcat [nome-do-arquivo].raw.xz | dd bs=4M of=[caminho-do-dispositivo] iflag=fullblock oflag=direct status=progress; sync
```

O comando **[sync]** ao final garante que dados que ainda estejam no cache na memória RAM sejam gravados. Com isso, é seguro remover o cartão de memória.

## Removendo o cartão de memória

O Balena Etcher, assim como o comando **dd**, não monta o cartão de memória após a gravação.

Se você abrir o aplicativo **Arquivos**, verá que não aparece o ícone de **Desmontar** ao lado do cartão de memória:

{% include image.html src='/files/2020/10/rpi4b-opensuse-12-pt.jpg' %}

Sendo assim, você pode simplesmente remover o cartão de memória do computador.

## Iniciando o openSUSE

Insira o cartão de memória no Raspberry Pi e faça as devidas conexões, como vimos no [outro _post_][rpi4b]. Ligue o Raspberry Pi e o openSUSE será iniciado.

Na tela de _login_, use as credenciais `root` como nome de usuário e `linux` como senha.

{% include image.html src='/files/2020/10/rpi4b-opensuse-13.jpg' %}

Como percebi que o _post_ já estava grande, decidi dividi-lo em duas partes. Deixei as configurações básicas para o próximo _post_.

Siga o Projeto Linux Kamarada para ler a segunda parte assim que ela for publicada!

## Referências

Alguns dos textos que consultei para escrever o presente texto incluem:

- [Blob-less Raspberry Pi Linux Is A Step Closer \| Hackaday][hackaday]
- [Re: \[opensuse-arm\] Raspberry Pi 4 Model B - opensuse-arm Mailinglist Archive][opensuse-arm]
- [HCL:Raspberry Pi4 - openSUSE Wiki][opensuse-wiki]
- [Installing operating system images on Linux - Raspberry Pi Documentation][rpi-docs]

[opensuse]:         https://www.opensuse.org/
[rpi4b]:            {% post_url pt/2019-09-20-primeiros-passos-no-raspberry-pi-com-noobs-e-raspbian %}
[raspbian]:         http://www.raspbian.org/
[manjaro]:          https://manjaro.org/
[proprietary-sw]:   https://pt.wikipedia.org/wiki/Software_proprietário
[broadcom]:         https://www.broadcom.com/
[opensource]:       https://pt.wikipedia.org/wiki/Software_de_código_aberto
[rpi-foundation]:   https://www.raspberrypi.org/about/
[github]:           https://github.com/raspberrypi/
[rpi-linux]:        https://github.com/raspberrypi/linux
[firmware]:         https://github.com/raspberrypi/firmware
[linux]:            https://www.kernel.org/
[leap-15.2]:        {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[ubuntu]:           https://ubuntu.com/
[debian]:           https://www.debian.org/
[fedora]:           https://getfedora.org/pt_BR/
[arch]:             https://www.archlinux.org/
[kamarada-15.2]:    {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[windows]:          https://www.microsoft.com/pt-br/windows/
[macos]:            https://www.apple.com/br/macos/
[opensuse-wiki]:    https://en.opensuse.org/HCL:Raspberry_Pi4
[xfce]:             https://www.xfce.org/
[etcher]:           https://www.balena.io/etcher/
[etcher-source]:    https://github.com/balena-io/etcher
[google]:           https://www.google.com.br/
[facebook]:         https://pt-br.facebook.com/
[etcher-privacy-1]: https://forums.balena.io/t/serious-privacy-concerns-with-etcher-1-4-4/4103
[etcher-privacy-2]: https://github.com/balena-io/etcher/issues/2977
[appimage]:         https://appimage.org/
[dd]:               https://man7.org/linux/man-pages/man1/dd.1.html
[fdisk]:            https://linux.die.net/man/8/fdisk
[sync]:             https://man7.org/linux/man-pages/man1/sync.1.html
[hackaday]:         https://hackaday.com/2017/01/14/blob-less-raspberry-pi-linux-is-a-step-closer/
[opensuse-arm]:     https://lists.opensuse.org/opensuse-arm/2019-10/msg00003.html
[rpi-docs]:         https://www.raspberrypi.org/documentation/installation/installing-images/linux.md
