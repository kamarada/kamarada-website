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

Mas o Projeto openSUSE optou por seguir um caminho diferente, tentando adicionar suporte ao Raspberry Pi 4 ao [_kernel_ Linux original][linux-kernel], que é usado pela distribuição. É um caminho mais longo e demorado, mas que na teoria deve fornecer melhores resultados no longo prazo, que inclusive beneficiarão outras distribuições além do próprio openSUSE. A desvantagem dessa abordagem é que, enquanto módulos de código aberto não são desenvolvidos, não é possível usar alguns recursos do Raspberry Pi 4.

## Sabia que existem "dois openSUSEs"?

Até 2014, havia apenas uma distribuição chamada openSUSE, então na versão 13.2.

A partir daí, o Projeto openSUSE passou a oferecer duas distribuições: openSUSE Leap e openSUSE Tumbleweed.

{% include update.html date="27/12/2020" message="Na versão original desse tutorial, eu explicava a diferença entre essas distribuições. Como percebi que essa informação estava se repetindo também em outros textos, decidi movê-la para um texto próprio e adicionar mais algumas informações." %}

Se você ainda não conhecia essas distribuições, confira as diferenças entre elas no texto:

- [openSUSE Leap e openSUSE Tumbleweed: qual é a diferença?][leap-tumbleweed]

Normalmente, eu falo aqui do openSUSE Leap. Mas hoje quero falar do Tumbleweed.

{% include update.html date="27/12/2020" message="Na versão original desse texto, o openSUSE Tumbleweed se saía um pouco melhor que o Leap no Raspberry Pi 4, mas hoje não há diferença entre eles no que se refere a suporte de _hardware_, então atualizei o texto de acordo." %}

Como o suporte ao Raspberry Pi 4 ainda está em desenvolvimento e as novidades chegam primeiro no Tumbleweed, acho interessante ficar de olho no Tumbleweed. Por isso, vamos experimentar o Tumbleweed hoje.

Se você prefere usar o Leap, pode seguir esse passo-a-passo da mesma forma. As instruções são as mesmas.

## O que funciona e o que não funciona?

**Resumo:** no que se refere ao suporte ao _hardware_ do Raspberry Pi 4, não há diferença entre o Leap e o Tumbleweed. Se você pretende usar o Raspberry Pi como um servidor doméstico, ambas as distribuições do openSUSE vão te atender muito bem. Se pretende usar como um _desktop_, pode ser que sinta falta de alguns recursos, como o Bluetooth e o som.

Eu testei os seguintes recursos do Raspberry Pi 4 nas duas distribuições:

- **Rede sem fio Wi-Fi:** em ambas, consegui me conectar a redes de 2,4GHz e 5GHz;
- **Rede cabeada Ethernet:** em ambas, consegui me conectar a uma rede cabeada;
- **Bluetooth:** em ambas, **não** consegui fazer o Bluetooth funcionar;
- **Portas USB:** em ambas, todas as 4 portas USB funcionaram, apenas faço algumas observações quanto a teclado e _mouse_:
  * o teclado não funciona no menu do GRUB;
  * em ambas as distribuições, dependendo do modelo do teclado e/ou _mouse_, ao reiniciar o Raspberry Pi pode ser que parem de funcionar, sendo necessário removê-los e plugá-los de novo para que voltem;
- **Portas HDMI**: em ambas as distribuições, ambas as portas HDMI funcionaram, mas ao mudar o cabo HDMI de uma porta para outra, não foi exibida imagem nessa outra porta de imediato — então, se precisar mudar o cabo HDMI de porta, é necessário reiniciar o Raspberry Pi;

{% include update.html date="27/12/2020" message="Quando eu escrevi esse texto pela primeira vez, ambas as portas HDMI funcionavam no Tumbleweed, mas apenas uma funcionava no Leap. Hoje, ambas as portas HDMI funcionam em ambas as distribuições, então atualizei o texto de acordo." %}

- **Saída de som:** em ambas as distribuições, **não** consegui produzir som usando o Raspberry Pi de forma alguma — seja pela saída de som (conectando um fone de ouvido tradicional, por exemplo), pela HDMI (conectando uma TV) ou por Bluetooth.

O que eu não testei (não sei se funciona ou não):

- Usar dois monitores ao mesmo tempo, conectando cada um a uma porta HDMI;
- Pinos GPIO;
- Qualquer coisa que eu não tenha listado acima.

Sabendo o que hoje funciona ou não no Raspberry Pi 4 com openSUSE, você pode decidir se usa o openSUSE (e qual variação usar: Leap ou Tumbleweed) ou se aguarda o suporte do openSUSE ao _hardware_ do Raspberry Pi 4 melhorar e usa outra distribuição enquanto isso.

## Baixando a imagem do openSUSE

Para baixar a imagem do openSUSE e gravá-la no cartão de memória, você precisará de um PC com [Linux], [Windows] ou [macOS] e um cartão de memória micro-SD de pelo menos 8GB.

Eu vou usar o [Linux Kamarada 15.2][kamarada-15.2], baseado no [openSUSE Leap 15.2][leap-15.2].

Acesse a página do Raspberry Pi 4 na _wiki_ do openSUSE:

- [https://en.opensuse.org/HCL:Raspberry_Pi4][opensuse-wiki]

{% include image.html src='/files/2020/10/rpi4b-opensuse-01.jpg' %}

Note que há várias opções de imagens tanto do Tumbleweed quanto do Leap 15.2. Se você pretende usar o Raspberry Pi como um servidor, a imagem JeOS (_Just enough Operating System_ — traduzindo: tão somente o sistema operacional) é a mais adequada. Se pretende usá-lo como um _desktop_, pode escolher outra imagem com alguma área de trabalho.

Aqui, vou usar a imagem do Tumbleweed com a área de trabalho [XFCE], que é bem leve e, por isso, adequada para o Raspberry Pi.

Clique no _link_ para a imagem que deseja baixar. O _download_ pode demorar um pouco, considerando que o arquivo é grande (no meu caso, 1 GB).

## Gravando a imagem no cartão de memória com o balenaEtcher

Para gravar a imagem do openSUSE no cartão de memória, eu recomendo o programa [balenaEtcher][etcher], por ser simples e fácil de usar. Ele é gratuito e de código aberto.

{% include update.html date="27/12/2020" message="Na versão original deste tutorial, eu falava sobre o balenaEtcher. Como pretendo usar o balenaEtcher também em outros tutoriais, decidi mover as instruções de como usá-lo para um tutorial próprio dele e adicionar mais algumas informações." %}

Veja como usar o balenaEtcher em:

- [Gravando imagem no cartão de memória de forma fácil com o balenaEtcher][etcher]

Só observo que há um pequeno problema quanto a privacidade, que explico no tutorial e apresento uma solução de contorno, mas isso não me impede de usar o balenaEtcher.

Se isso for uma questão pra você, uma alternativa é usar o comando **dd**, se você usa Linux.

## Alternativa ao Etcher: comando dd

Se você preferiu seguir minha recomendação e usar o balenaEtcher, pode pular essa seção.

O comando **[dd]** provavelmente está presente em todas as distribuições Linux.

Conecte ao computador o cartão de memória no qual será gravada a imagem.

Note que gravar a imagem do openSUSE no cartão de memória apagará quaisquer dados que porventura estejam nesse cartão. Se ele contém arquivos, talvez você queira fazer um _backup_ deles antes de continuar para não perdê-los.

Recomendo que você remova quaisquer outros dispositivos de armazenamento (_pendrives_, HDs externos, etc) conectados e deixe apenas o cartão de memória, pra não correr o risco de formatar o dispositivo errado (e perder arquivos, provavelmente de forma irreversível).

Identifique o cartão de memória que receberá a imagem. Você pode fazer isso com o auxílio do comando **[fdisk]**, que provavelmente também é outro comando universal:

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

Os comandos **dd** e **sync** não montam o cartão de memória após a gravação.

Se você abrir o aplicativo **Arquivos**, verá que o cartão de memória até aparece listado, mas não aparece o ícone de **Desmontar** ao lado dele:

{% include image.html src='/files/2020/10/rpi4b-opensuse-12-pt.jpg' %}

Sendo assim, você pode simplesmente remover o cartão de memória do computador.

## Iniciando o openSUSE

Insira o cartão de memória no Raspberry Pi e faça as devidas conexões, como vimos no [outro _post_][rpi4b]. Ligue o Raspberry Pi e o openSUSE será iniciado.

Na tela de _login_, use as credenciais `root` como nome de usuário e `linux` como senha.

{% include image.html src='/files/2020/10/rpi4b-opensuse-13.jpg' %}

## Tumbleweed não inicia, e agora?

{% include update.html date="27/12/2020" message="Essa seção não existia na versão original desse texto, foi incluída para falar desse _bug_ que começou a acontecer recentemente." %}

Se em vez da tela de _login_, o Tumbleweed no seu Raspberry Pi 4 mostra isso:

{% include image.html src='/files/2020/12/rpi4b-tumbleweed-waiting-for-phy-auto-negotiation.jpg' caption="O sistema repete várias vezes a mensagem: Waiting for PHY auto negotiation to complete..." %}

Esse é um _bug_ conhecido do Tumbleweed e você pode encontrar mais informações a respeito dele, assim como uma forma de resolvê-lo, no texto:

- [Tumbleweed não inicia no Raspberry Pi 4: veja como resolver][rpi4b-tumbleweed]

Esse _bug_ não afeta o Leap.

## Continua...

Como percebi que o _post_ já estava grande, decidi dividi-lo em duas partes. Deixei as configurações básicas para o próximo _post_.

{% capture atualizacao %}[A segunda parte desse tutorial já está aqui! (clique para acessá-la)]({%post_url pt/2020-10-10-opensuse-no-raspberry-pi-4-parte-2-configuracoes-basicas %}){% endcapture %}
{% include update.html date="10/10/2020" message=atualizacao %}

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
[linux-kernel]:     https://www.kernel.org/
[leap-tumbleweed]:  {% post_url pt/2020-12-06-opensuse-leap-e-opensuse-tumbleweed-qual-e-a-diferenca %}
[linux]:            https://www.vivaolinux.com.br/linux/
[windows]:          https://www.microsoft.com/pt-br/windows/
[macos]:            https://www.apple.com/br/macos/
[kamarada-15.2]:    {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[leap-15.2]:        {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[opensuse-wiki]:    https://en.opensuse.org/HCL:Raspberry_Pi4
[xfce]:             https://www.xfce.org/
[etcher]:           {% post_url pt/2020-11-17-gravando-imagem-no-cartao-de-memoria-de-forma-facil-com-o-balenaetcher %}
[dd]:               https://man7.org/linux/man-pages/man1/dd.1.html
[fdisk]:            https://linux.die.net/man/8/fdisk
[sync]:             https://man7.org/linux/man-pages/man1/sync.1.html
[rpi4b-tumbleweed]: {% post_url pt/2020-12-27-tumbleweed-nao-inicia-no-raspberry-pi-4-veja-como-resolver %}
[hackaday]:         https://hackaday.com/2017/01/14/blob-less-raspberry-pi-linux-is-a-step-closer/
[opensuse-arm]:     https://lists.opensuse.org/opensuse-arm/2019-10/msg00003.html
[rpi-docs]:         https://www.raspberrypi.org/documentation/installation/installing-images/linux.md
