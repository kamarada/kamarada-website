---
date: '2020-11-17 23:30:00 GMT-3'
image: '/files/2020/10/rpi4b-opensuse-08.jpg'
layout: post
published: true
nickname: 'balena-etcher'
title: 'Gravando imagem no cartão de memória de forma fácil com o balenaEtcher'
---

{% include image.html src='/files/2020/11/balena-etcher.svg' %}

O [Etcher] é uma ferramenta versátil, mas fácil de usar, para criar cartões de memória e _pendrives_ inicializáveis ("bootáveis") a partir de imagens de sistemas operacionais. Ele possui uma interface limpa que ajuda a selecionar corretamente o dispositivo que receberá a imagem, protegendo você de apagar acidentalmente seu disco rígido, o que poderia causar perda de dados irreversível. Após a gravação, o Etcher também verifica se cada _byte_ foi gravado corretamente, evitando que a mídia acabe com arquivos corrompidos.

Se você não é exatamente um _expert_ em tecnologia, saiba que essas imagens não são como as que você produz com uma câmera, geralmente arquivos com extensão **.jpeg** ou **.jpg**. Uma imagem de sistema operacional é um arquivo só que contém todo o sistema (como [Linux] ou [Windows]), todos os seus arquivos. Normalmente essas imagens são compactadas e nomeadas com extensões como **.iso**, **.img**, **.xz**, **.gz** ou **.zip**.

O Etcher é um _software_ livre, gratuito e multi-plataforma desenvolvido pela [Balena], por isso também é chamado de [balenaEtcher][etcher]. Seu código-fonte está disponível no [GitHub].

## Quem ou o que é a Balena?

{% include image.html src='/files/2020/11/balena.svg' style='max-width: 250px;' %}

Balena é tanto o nome de [um conjunto de ferramentas de código aberto][balena-tools] para gerenciar dispositivos conectados à Internet das Coisas, como é também o nome da [empresa][balena-company] que desenvolve essas ferramentas e oferece [infraestrutura na nuvem][balena-cloud] para conectar esses dispositivos. A Balena é conhecida não só pelo Etcher, mas também por seus vários outros produtos, como [openBalena], [balenaOS], [balenaEngine] e mais.

A Balena criou o Etcher para facilitar a gravação de imagens de SOs em mídias removíveis, como cartões de memória e _pendrives_. Para ensinar seus clientes a gravarem suas imagens, eles forneciam um tutorial para cada sistema (Linux, Windows e [macOS]). Cada tutorial tinha várias etapas manuais e era propenso a erros. Antes, não havia uma ferramenta que atendesse todas as necessidades da Balena, então criaram o Etcher, que é simples para os usuários finais e tem a mesma aparência e funcionamento no Linux, Windows e macOS.

## O que posso fazer com o Etcher?

O balenaEtcher pode ser usado em diversos cenários, como por exemplo:

- Lembra do [Raspbian][rpi4b]? ([Debian] para [Raspberry Pi][rpi4b]) Agora ele se chama [Raspberry Pi OS][raspberry-pi-os] e disponibiliza imagens do sistema na sua [página de _downloads_][rpi-os-downloads]. Agora elas podem ser instaladas no cartão de memória usando o Etcher, dispensando o uso do [NOOBS][rpi4b].

- Também já falamos como usar o [openSUSE no Raspberry Pi][rpi4b-opensuse], naquele tutorial usamos o balenaEtcher para gravar a imagem do [openSUSE] no cartão de memória.

- No texto sobre o [PinePhone], vimos que já existem pelo menos [18 sistemas operacionais][pinephone-oses] que o suportam. Se você quiser testar um desses sistemas sem instala-lo direto no celular, pode usar o Etcher para grava-lo no cartão de memória.

O que vem a seguir estava originalmente no tutorial sobre o [openSUSE no Raspberry Pi][rpi4b-opensuse]. Como o balenaEtcher pode aparecer em vários tutoriais, decidi mover as instruções de como usá-lo para esse tutorial dedicado a ele e criar _links_ dos outros tutoriais para esse.

## Um pequeno problema...

Antes de começar, só quero observar que há uma questão de **privacidade** no balenaEtcher, mas creio ser um problema pequeno e fácil de contornar: durante o uso, o programa faz conexões de rede com servidores do [Google], [Facebook] e outros serviços (mais informações [aqui][etcher-privacy-1] e [aqui][etcher-privacy-2]), o que é intrigante, porque isso é totalmente desnecessário à sua função.

Se isso for uma questão pra você, creio ser suficiente desconectar o computador da Internet durante o uso do aplicativo.

Se não quiser usar o Etcher, uma alternativa para usuários de Linux é o comando **[dd]**.

## O que preciso para usar o Etcher?

O balenaEtcher requer um computador _desktop_ com Linux, Windows ou macOS.

Aqui, como de costume, vou usar o [Linux Kamarada 15.2][kamarada-15.2].

Mas o passo a passo a seguir deve ser mais ou menos parecido em todos esses sistemas.

Você também vai precisar de um cartão de memória que comporte a imagem de sistema que você quer gravar nele. Você deve baixar essa imagem previamente.

## Inserindo o cartão de memória

Conecte ao computador o cartão de memória no qual será gravada a imagem.

Note que gravar a imagem no cartão de memória apagará quaisquer dados que porventura estejam nesse cartão. Se ele contém arquivos, talvez você queira fazer um _backup_ deles antes de continuar para não perdê-los.

Recomendo que você remova quaisquer outros dispositivos de armazenamento (_pendrives_, HDs externos, etc) conectados e deixe apenas o cartão de memória, pra não correr o risco de formatar o dispositivo errado (e perder arquivos, provavelmente de forma irreversível).

## Baixando o Etcher

Para baixar o balenaEtcher, acesse seu _site_ e clique no botão para _download_:

- [https://www.balena.io/etcher/][etcher]

{% include image.html src='/files/2020/10/rpi4b-opensuse-02.jpg' %}

Quando o _download_ terminar, abra a pasta **Downloads** e extraia o conteúdo do arquivo compactado baixado:

{% include image.html src='/files/2020/10/rpi4b-opensuse-03-pt.jpg' %}

Se você vai desconectar seu computador da Internet, a hora de fazer isso é agora.

Abra a pasta criada e faça um clique-duplo no arquivo com extensão [AppImage] (que é, na verdade, o programa balenaEtcher em si, isso vai iniciá-lo):

{% include image.html src='/files/2020/10/rpi4b-opensuse-04-pt.jpg' %}

## Gravando a imagem no cartão de memória

No balenaEtcher, clique no botão **Flash from file** (gravar a partir do arquivo) e informe a localização da imagem que você baixou:

{% include image.html src='/files/2020/10/rpi4b-opensuse-05.jpg' %}

Depois, clique no botão **Select target** (selecionar destino):

{% include image.html src='/files/2020/10/rpi4b-opensuse-06.jpg' %}

Marque o cartão de memória e clique em **Select** (selecionar):

{% include image.html src='/files/2020/10/rpi4b-opensuse-07.jpg' %}

**Cuidado:** certifique-se de selecionar corretamente o cartão de memória, do contrário a imagem será gravada no dispositivo de armazenamento errado e você poderá perder dados de forma irreversível. Eu costumo me orientar pela capacidade (**Size**) do dispositivo.

Finalmente, clique no último botão, **Flash** (gravar):

{% include image.html src='/files/2020/10/rpi4b-opensuse-08.jpg' %}

Informe a senha do administrador (no Linux, chamado de usuário _root_) para prosseguir.

Aguarde a imagem ser gravada no cartão de memória, o balenaEtcher até informa uma estimativa de quanto tempo isso vai demorar (você pode sair e ir tomar um café):

{% include image.html src='/files/2020/10/rpi4b-opensuse-09.jpg' %}

Depois de gravar, o balenaEtcher verifica os arquivos no cartão de memória (você pode demorar mais um pouco no seu café):

{% include image.html src='/files/2020/10/rpi4b-opensuse-10.jpg' %}

No final, o Etcher informa que a gravação está completa (**Flash Complete**):

{% include image.html src='/files/2020/10/rpi4b-opensuse-11.jpg' %}

Você pode simplesmente fechar o programa.

Se você desconectou seu computador da Internet, já pode conectá-lo de volta.

## Removendo o cartão de memória

O balenaEtcher não monta o cartão de memória após a gravação da imagem.

Se você abrir o aplicativo **Arquivos**, verá que o cartão de memória até aparece listado, mas não aparece o ícone de **Desmontar** ao lado dele:

{% include image.html src='/files/2020/10/rpi4b-opensuse-12-pt.jpg' %}

Sendo assim, você pode simplesmente remover o cartão de memória do computador.

## Removendo o Etcher

Note que o Etcher não foi instalado no computador. O programa inteiro é formado só por aquele arquivo com extensão AppImage que você abriu. Se não vai mais usá-lo, você pode exclui-lo, se quiser.

## Conclusão

Espero que esse texto tenha sido útil. Como eu disse, e você deve ter percebido, o Etcher é um programa bem simples e fácil de usar. Mas se tem dúvidas, escreve nos comentários.

Faça bom proveito gravando imagens e divirta-se brincando com seus _gadgets_!

## Referências

Além dos _links_ que aparecem ao longo do texto, eu consultei também essa página:

- [A Step-by-Step Guide to Downloading and Using Etcher][etcher-download]

[etcher]:           https://www.balena.io/etcher/
[linux]:            https://www.vivaolinux.com.br/linux/
[windows]:          https://www.microsoft.com/pt-br/windows/
[balena]:           https://www.balena.io/
[github]:           https://github.com/balena-io/etcher
[balena-tools]:     https://www.balena.io/what-is-balena
[balena-company]:   https://www.balena.io/blog/resin-io-changes-name-to-balena-releases-open-source-edition/
[balena-cloud]:     https://www.balena.io/cloud/
[openbalena]:       https://www.balena.io/open/
[balenaos]:         https://www.balena.io/os/
[balenaengine]:     https://www.balena.io/engine/
[macos]:            https://www.apple.com/br/macos/
[rpi4b]:            {% post_url pt/2019-09-20-primeiros-passos-no-raspberry-pi-com-noobs-e-raspbian %}
[debian]:           https://www.debian.org/index.pt.html
[raspberry-pi-os]:  https://www.raspberrypi.org/software/
[rpi-os-downloads]: https://www.raspberrypi.org/software/operating-systems/
[rpi4b-opensuse]:   {% post_url pt/2020-10-07-opensuse-no-raspberry-pi-4-parte-1-download-e-instalacao %}
[opensuse]:         https://www.opensuse.org/
[pinephone]:        {% post_url pt/2020-10-14-pinephone-o-smartphone-que-roda-linux-saiba-tudo-sobre-ele %}
[pinephone-oses]:   https://wiki.pine64.org/index.php?title=PinePhone_Software_Releases
[google]:           https://www.google.com.br/
[facebook]:         https://pt-br.facebook.com/
[etcher-privacy-1]: https://forums.balena.io/t/serious-privacy-concerns-with-etcher-1-4-4/4103
[etcher-privacy-2]: https://github.com/balena-io/etcher/issues/2977
[dd]:               https://man7.org/linux/man-pages/man1/dd.1.html
[kamarada-15.2]:    {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[appimage]:         https://appimage.org/
[etcher-download]:  https://etcher.download/
