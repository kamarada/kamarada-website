---
date: 2019-09-20 10:00:00 GMT-3
image: '/files/2019/09/raspbian.jpg'
layout: post
published: true
nickname: 'raspbian'
title: 'Primeiros passos no Raspberry Pi com NOOBS e Raspbian'
excerpt: 'O Raspberry Pi é um computador de baixo custo, formado por apenas uma placa do tamanho de um cartão de crédito e fabricado pela Raspberry Pi Foundation, uma ONG do Reino Unido que objetiva facilitar e promover o ensino de computação e a inclusão digital. É possível instalar o Linux no Raspberry Pi e usá-lo como um desktop para as tarefas do dia-a-dia – navegar na Internet, editar textos, etc. Como fazer isso é o assunto desse post.'
---

{% capture atualizacao1 %}
O *post* foi revisado para se aproximar da [versão em inglês]({%post_url en/2019-09-29-getting-started-on-raspberry-pi-with-noobs-and-raspbian %}), mais recente.
{% endcapture %}
{% include update.html date="29/09/2019" message=atualizacao1 %}

O [**Raspberry Pi**][raspberry-pi] é um computador de baixo custo, formado por apenas uma placa do tamanho de um cartão de crédito e fabricado pela [Raspberry Pi Foundation][raspberry-pi-foundation], uma ONG do Reino Unido que objetiva facilitar e promover o ensino de computação e a inclusão digital.

{% include image.html src="/files/2019/09/raspberry-pi-4-credit-card.jpg" caption="Raspberry Pi: o computador do tamanho de um cartão de crédito" style="max-width: 400px" %}

Há quem use o Raspberry Pi para aprender e ensinar a programar, fazer projetos com _hardware_, automações em casa, há usos até mesmo na indústria e pesquisa.

O Raspberry Pi fornece pinos que podem ser usados para fazer entrada e saída de forma genérica (GPIO, _general purpose input/output_). Com esses pinos, é possível fazer experiências com componentes eletrônicos e Internet das Coisas (IoT, _Internet of Things_).

Veja um exemplo curioso de automação: acoplado a sensores e motores apropriados, esse Raspberry Pi foi programado para abrir a porta quando o cachorro chega perto e late.

{% include youtube.html id="MWfl1Nl2WIM" %}

**Curiosidade:** o nome [Raspberry] ([framboesa], em inglês) vem de uma tradição de usar nomes de frutas na computação – veja, por exemplo, a [Apple] (maçã) – e Pi vem da linguagem de programação [Python], a ideia inicial era criar um computador que pudesse ser programado usando essa linguagem. Há quem acredite que Pi tem relação também com o [número π][pi] (3,14...) ou que Raspberry Pi seja um trocadilho com _raspberry pie_ (torta de framboesa).

{% include image.html src="/files/2019/10/raspberry-pi-4-and-raspberry-pie.jpg" caption="Uma torta de framboesa (raspberry pie) e um computador Raspberry Pi" style="max-width: 400px" %}

## Arquitetura ARM

O Raspberry Pi é diferente dos computadores tradicionais não apenas no formato, mas também na **[arquitetura]**, ou seja, _hardware_ e _software_ funcionam de forma totalmente diferente. Enquanto os _desktops_ e _notebooks_ são, na essência, iguais ao [IBM PC][ibm-pc] lançado em 1981 e se baseiam nas arquiteturas [x86] (PCs de 32 _bits_) ou [x86-64] (PCs de 64 _bits_), o Raspberry Pi se baseia na arquitetura [ARM], a mesma usada por _smartphones_ com [Android].

Na prática, isso significa que se você copiar um programa de um PC para um Raspberry Pi (ou vice-versa), não vai funcionar. O programa pode ter versões para ambos, mas são executáveis diferentes – por exemplo, [LibreOffice] para PC e LibreOffice para Raspberry Pi.

É possível instalar o [Linux] no Raspberry Pi e usá-lo como um _desktop_ para as tarefas do dia-a-dia – navegar na Internet, editar textos, etc. Como fazer isso é o assunto desse _post_.

## Raspberry Pi 4 Modelo B

O primeiro Raspberry Pi foi lançado em 2012 e desde então já foram fabricados [vários modelos e variações][raspberry-pi-products]. Atualmente, ele se encontra na quarta geração, com o [Raspberry Pi 4][raspberry-pi-4], lançado em julho. Geralmente, as gerações apresentam um Modelo A e um Modelo B. O Modelo A é uma variação mais barata, com menos memória RAM e menos portas (como USB e Ethernet). Por enquanto, a quarta geração possui apenas o Modelo B.

O **Raspberry Pi 4 Modelo B** possui as seguintes [especificações][raspberry-pi-4-specs]:

- processador Broadcom BCM2711, do tipo [_system-on-a-chip_][soc] (SoC)
    - quatro núcleos (_quad core_) Cortex-A72
    - frequência de 1,5GHz
    - arquitetura ARMv8 de 64 _bits_
- variações com 1GB, 2GB ou 4GB de memória RAM DDR4
- rede Wi-Fi IEEE 802.11ac (conecta a redes de 2,4GHz e 5GHz)
- Bluetooth 5.0
- rede Ethernet Gigabit
- 2 portas USB 3.0 e 2 portas USB 2.0
- 2 portas micro-HDMI para conectar até 2 monitores ou TVs de resolução até 4K cada
- saída de som para conectar caixa de som ou fone de ouvido estéreo usando _plug_ P2
- compartimento para cartão de memória micro-SD (usado para armazenar o sistema operacional, programas e arquivos pessoais)
- 40 pinos GPIO (entrada e saída de propósito geral)
- e mais!

{: #components }
{% include image.html src="/files/2019/09/raspberry-pi-4-components.jpg" caption="Imagem extraída do site [Electronics-Lab](http://www.electronics-lab.com/project/raspberry-pi-4-look-hood-make/)" %}

Se quiser conferir as especificações técnicas desse modelo em mais detalhes, acesse o [_site_ do Raspberry Pi][raspberry-pi-4-specs].

## Qual variação escolher?

O Raspberry Pi 4 B vem com 1GB, 2GB, ou 4GB of RAM.

Para a maioria dos fins educacionais e uso em projetos como _hobby_, 1GB é suficiente.

Para usar como um _desktop_, pelo menos 2GB é recomendado.

É importante que você escolha a quantidade certa de RAM antes de comprar um Raspberry Pi, porque não é possível expandi-la depois, uma vez que a memória RAM é soldada na placa e não pode ser substituída.

## Quanto custa?

O preço de entrada do Raspberry Pi sempre foi 35 dólares (o equivalente a 145 reais, no momento da escrita). Esse é o preço do Raspberry Pi 4 B com 1GB de RAM.

Observe que esse é o preço apenas da placa do Raspberry Pi. Além dela, é necessário comprar a fonte de alimentação, um cartão de memória micro-SD com capacidade de pelo menos 8GB e um cabo micro-HDMI. Além disso, é opcional, mas recomendado, comprar uma capa (_case_) para proteger a placa.

Você pode comprar a placa e os acessórios separadamente ou comprar um _kit_ que já vem com tudo que é preciso, que foi o que eu fiz (mais detalhes adiante).

Se você já tem um computador, então provavelmente tem _mouse_, teclado e monitor. Você pode usá-los com o Raspberry Pi, que tem portas USB e HDMI. Senão, é necessário comprá-los também. Se você tem uma TV com entrada HDMI, pode usá-la no lugar do monitor.

**Curiosidade:** já houve modelos do Raspberry Pi ainda mais baratos que 35 dólares. O mais barato lançado até então foi o [Raspberry Pi Zero][raspberry-pi-zero], que custa apenas 5 dólares (20 reais). Ele é uma derivação do primeiro Raspberry Pi, mas ainda menor e mais barato.

## Onde comprar?

Diversas lojas vendem o Raspberry Pi e acessórios e _kits_ dele. Mas há algumas lojas reconhecidas pela Raspberry Pi Foundation como revendedores aprovados (_approved resellers_).

No Brasil, o revendedor aprovado do Raspberry Pi é o [FilipeFlop][filipeflop]. Infelizmente, ele ainda não vende o Raspberry Pi 4 B. O modelo mais recente que ele oferece no momento é o [Raspberry Pi 3 A+][raspberry-pi-3-a]. Simulei uma compra: a placa, a capa, a fonte de alimentação e o cartão de memória custariam no total R$ 362,60. Para o meu CEP, a entrega sairia de graça e levaria 4 dias úteis.

Eu comprei meu Raspberry Pi 4 B de um revendedor aprovado na China, a [JunRoc Store][aliexpress], por meio do _site_ de compras [AliExpress][aliexpress] (uma espécie de Mercado Livre chinês). Eu comprei um _kit_ que contém a variação do Raspberry Pi 4 B com mais memória RAM (4GB) e mais:

- cartão de memória micro-SD de 16GB
- capa de acrílico com ventoinha (_fan_)
- leitor de cartão de memória USB
- dissipadores de calor (_heat sinks_)
- fonte de alimentação
- cabo de vídeo micro-HDMI para HDMI

{% include image.html src="/files/2019/09/raspberry-pi-4-kit.jpg" style="max-height: 400px" caption="Um [kit do Raspberry Pi 4](http://bit.ly/kamarada-rpi-4b) é a melhor opção para quem está começando."  %}

Me custou ao todo R$ 370,29 (valor total, já somando inclusive o IOF do cartão de crédito referente a compra internacional). Fiz a compra em 26 de agosto. Chegou na minha casa em 17 de setembro, tudo em perfeito estado e funcionando bem. Recomendo!

Se for comprar [no mesmo lugar que eu comprei][aliexpress], observe que pelo mesmo anúncio é possível comprar 6 variações: apenas a placa do Raspberry Pi 4 B com 1GB, 2GB ou 4GB de RAM ou os 3 _kits_ correspondentes. Atente-se na hora de selecionar a variação que deseja.

## Raspbian: Debian para Raspberry Pi

No momento da escrita, a distribuição [openSUSE] suporta a família de computadores Raspberry Pi até a terceira geração:

- [Raspberry Pi 1][raspberry-pi-1]
- [Raspberry Pi 2][raspberry-pi-2]
- [Raspberry Pi 3][raspberry-pi-3]

A quarta geração (Raspberry Pi 4) ainda não é suportada, como você pode ver nesses _links_:

- [LEAP 15.1 Can Raspberry Pi 4 run openSUSE LEAP 15.1? - openSUSE Forums][forums-opensuse]
- [Raspberry Pi 4? - openSUSE reddit][reddit]
- [Raspberry Pi 4 and openSUSE LEAP 15.1? - Raspberry Pi Forums][raspberry-pi-forums]

{% capture atualizacao2 %}
Os trabalhos para que o openSUSE suporte o Raspberry Pi 4 já começaram:

- [\[opensuse-arm\] Raspberry Pi 4 Model B - openSUSE Mailinglist Archives](https://lists.opensuse.org/opensuse-arm/2019-09/msg00037.html)
{% endcapture %}
{% include update.html date="29/09/2019" message=atualizacao2 %}

Por isso, embora normalmente os _posts_ que faço aqui sejam verdes da cor do openSUSE, o _post_ de hoje será vermelho, porque vamos falar de outra distribuição Linux: Raspbian!

O nome **[Raspbian]** é a combinação de Raspberry Pi e Debian: resumidamente, o Raspbian é uma versão da distribuição Debian portada e otimizada para o Raspberry Pi.

{% include image.html src="/files/2019/09/raspbian.jpg" %}

O **[Debian]** é uma das maiores e mais antigas distribuições Linux, existe desde 1993. Introduziu o formato de empacotamento DEB (análogo ao RPM usado pelo openSUSE). É focada em estabilidade: fornece apenas versões bem testadas (geralmente antigas) de programas e a atualização da distribuição normalmente ocorre sem erros. Se você fizer uma árvore genealógica das distribuições Linux, o Debian será uma das que estarão no topo: deu origem ao [Ubuntu] e ao [Knoppix], que por sua vez deram origem a várias distribuições, dentre elas as brasileiras [Kurumin] (descontinuada) e [BigLinux], e o Raspbian.

## NOOBS: o instalador do Raspbian

Como estamos começando a mexer no Raspberry Pi, vamos instalar o sistema operacional usando o método recomendado pelo _site_ oficial do Raspberry Pi, que é o NOOBS.

**[NOOBS]** – _New Out Of the Box Software_ ("novo _software_ de fábrica", em uma tradução livre), mas também parece um trocadilho com a gíria _noob_, que quer dizer "novato" – é o instalador que instala o Raspbian no cartão de memória. É a forma mais fácil de instalar o sistema operacional no Raspberry Pi. Além do Raspbian, o NOOBS também pode ser usado para instalar a distribuição [LibreELEC], focada em multimídia.

Há lojas que vendem cartões de memória que já vem com o NOOBS. Como no _kit_ que eu comprei veio um cartão de memória lacrado, tive que baixar o NOOBS manualmente para o cartão de memória. Vou mostrar como fazer isso.

Se o Raspberry Pi é seu primeiro computador e você não dispõe de outro computador para preparar o cartão de memória, você deve comprar um cartão que já vem com o NOOBS.

Chega de conversa, vamos por a mão na massa!

## Baixando o NOOBS

Visite a página [Downloads] do _site_ do Raspberry Pi. Clique no _link_ para o **NOOBS**:

{% include image.html src="/files/2019/09/noobs-download-01.jpg" %}

Clique em **Download ZIP**, abaixo de **NOOBS**:

{% include image.html src="/files/2019/09/noobs-download-02.jpg" %}

Com isso, você vai baixar um arquivo que já contém o NOOBS e o Raspbian para instalação _offline_. O arquivo é grande (2,3GB), você pode tomar um café enquanto espera o _download_.

Há também o **NOOBS Lite**, que contém apenas o NOOBS. Se você optasse por esse arquivo, o Raspbian seria baixado durante a instalação. Aqui, optamos por baixar tudo de uma vez.

Atente-se ao nome do arquivo – `NOOBS_v3_2_0.zip` – e onde ele foi baixado – normalmente, por padrão, na pasta `Downloads` dentro da pasta pessoal.

## Verificando a integridade do download

Normalmente, terminamos de baixar um arquivo da Internet e já o usamos. Em alguns casos, antes de usar o arquivo, é importante verificar se ele foi baixado corretamente. Especialmente nesse caso, em que estamos baixando um sistema operacional. Podemos evitar problemas fazendo uma breve [verificação de integridade][how-to-verify-iso].

Abra o aplicativo **Terminal** e execute o comando **sha256sum**, passando como argumento o caminho para o arquivo baixado:

```
$ sha256sum Downloads/NOOBS_v3_2_0.zip
```

O programa demora um tempo calculando a soma de verificação do arquivo e a exibe (é um número extenso em hexadecimal):

```
d05bd794368ccfb516a9e7116d1c659c3d139f4393ee1f4450900080e877434e  Downloads/NOOBS_v3_2_0.zip
```

Compare essa soma SHA-256 com a exibida na página onde você baixou o NOOBS:

{% include image.html src="/files/2019/09/noobs-sha256-pt.jpg" %}

Se as somas conferem, o arquivo foi baixado corretamente: é seguro continuar e usá-lo.

Se as somas diferem, algo deu errado (por exemplo, sua conexão com a Internet pode ter caído no meio do _download_). Nesse caso, exclua o arquivo e tente baixá-lo de novo.

Aqui, escrevi resumidamente o que precisamos saber hoje sobre verificação de integridade para instalar o Raspbian. Caso queira saber mais sobre o assunto, leia o _post_:

- [Verificação de integridade e autenticidade com SHA-256 e GPG][how-to-verify-iso]

## Formatando o cartão de memória

O cartão de memória deve ser formatado com o sistema de arquivos FAT32. A maioria dos cartões de memória já vem de fábrica formatados com esse sistema – inclusive o que veio no _kit_ que eu comprei. Mas não custa formatar, especialmente se você vai reaproveitar um cartão que já possui. Nesse caso, observe que a formatação apagará tudo que estiver no cartão, talvez você queira fazer um _backup_ antes de continuar para não perder dados.

Conecte ao computador o cartão de memória que será formatado. Para isso, pode ser necessário usar um leitor de cartão – o _kit_ indicado vem com um.

Recomendo que você remova quaisquer outros dispositivos de armazenamento (_pendrives_, HDs externos, etc) conectados e deixe apenas o cartão de memória, pra não correr o risco de formatar o dispositivo errado (e perder arquivos).

Abra o aplicativo **GParted**. Ele solicita a senha do administrador (usuário _root_), que você deve fornecer para continuar. O GParted demora um pouco verificando os dispositivos. Quando ele terminar, selecione o cartão de memória no canto superior direito:

{% include image.html src="/files/2019/09/format-sd-card-01-pt.jpg" %}

Clique com o botão direito na única partição do cartão de memória (pode ser no gráfico ou na lista) e clique em **Desmontar**:

{% include image.html src="/files/2019/09/format-sd-card-02-pt.jpg" %}

Clique mais uma vez com o botão direito na partição, aponte para **Formatar para** e clique em **fat32**:

{% include image.html src="/files/2019/09/format-sd-card-03-pt.jpg" %}

Clique no botão **Aplicar todas as operações**:

{% include image.html src="/files/2019/09/format-sd-card-04-pt.jpg" %}

Leia atentamente a mensagem de alerta. Depois, clique em **Aplicar**:

{% include image.html src="/files/2019/09/format-sd-card-05-pt.jpg" %}

Ao final da formatação, clique em **Fechar**:

{% include image.html src="/files/2019/09/format-sd-card-06-pt.jpg" %}

Feche também o GParted.

## Extraindo o NOOBS para o cartão de memória

Abra o arquivo compactado do NOOBS que você baixou. Ele deve ser aberto com o aplicativo **Gerenciador de compactação**. Clique em **Extrair**, no canto superior esquerdo da janela:

{% include image.html src="/files/2019/09/noobs-extract-01-pt.jpg" %}

Certifique-se de que a opção **Todos os arquivos** esteja selecionada (padrão). Selecione o cartão de memória (para mim, ele aparece como **Volume 16GB**) e clique no botão **Extrair**:

{% include image.html src="/files/2019/09/noobs-extract-02-pt.jpg" %}

Aguarde a extração do NOOBS para o cartão de memória:

{% include image.html src="/files/2019/09/noobs-extract-03-pt.jpg" %}

Isso pode demorar. É outra oportunidade de tomar um café!

Ao final da extração, clique em **Fechar**:

{% include image.html src="/files/2019/09/noobs-extract-04-pt.jpg" %}

Feche também o Gerenciador de compactação.

## Removendo o cartão de memória

O cartão de memória está pronto para ser usado no Raspberry Pi. É hora de removê-lo do computador.

Para isso, abra o aplicativo **Arquivos** e, ao lado do cartão, clique no botão **Desmontar**:

{% include image.html src="/files/2019/09/eject-sdcard-01-pt.jpg" %}

Aguarde aparecer a notificação informando que o dispositivo pode ser removido:

{% include image.html src="/files/2019/09/eject-sdcard-02-pt.jpg" %}

Depois que ela aparecer, remova o cartão de memória do computador e insira-o no Raspberry Pi. Observe que o compartimento para cartão fica do lado de baixo da placa.

## Conectando tudo ao Raspberry Pi

Agora conecte tudo ao Raspberry Pi: insira o cartão de memória, conecte o monitor (ou a TV) usando o cabo HDMI, o teclado e _mouse_ às portas USB e o cabo de rede Ethernet se for usar a rede cabeada. Deixe por último a fonte de alimentação:

{% include image.html src="/files/2019/09/raspberry-pi-4-connections-pt.jpg" caption="Imagem adaptada da página [Setting up your Raspberry Pi](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up/4)" %}

## Ligando o Raspberry Pi

O Raspberry Pi não tem um botão ou um interruptor de liga/desliga: conecte a fonte de alimentação ao Raspberry Pi e depois a uma tomada na parede e ele ligará.

Duas luzes LED acendem na placa do Raspberry Pi: uma indicando que ele está ligado à energia (PWR) e outra pisca, indicando que ele está acessando o cartão de memória (ACT).

## Instalando o Raspbian

Após um tempo carregando, o Raspberry Pi apresentará a tela inicial do NOOBS.

Na tela inicial do NOOBS, embaixo, no campo **Language** (idioma), selecione **português europeu** (não há tradução do instalador para o português brasileiro):

{% include image.html src="/files/2019/09/noobs-setup-01.jpg" %}

Depois, selecione na lista a distribuição **Raspbian** e clique em **Instalar**:

{% include image.html src="/files/2019/09/noobs-setup-02-pt.jpg" %}

Na caixa de diálogo **Confirmar**, clique em **Sim**:

{% include image.html src="/files/2019/09/noobs-setup-03-pt.jpg" %}

Aguarde a instalação do Raspbian:

{% include image.html src="/files/2019/09/noobs-setup-04-pt.jpg" %}

O instalador passa vários _slides_ apresentando o Raspbian. Você pode ver esses _slides_ enquanto... toma um café!

Ao final da instalação, clique em **OK**:

{% include image.html src="/files/2019/09/noobs-setup-05-pt.jpg" %}

O Raspberry Pi será reiniciado e carregará dessa vez o Raspbian, não mais o NOOBS.

## Configurando o Raspbian

Ao ser iniciado pela primeira vez, o Raspbian apresenta um assistente de configuração:

{% include image.html src="/files/2019/09/raspbian-wizard-01-pt.jpg" %}

As telas são autoexplicativas. É uma pena que não possuam tradução para o português...

Clique em **Next** (avançar) para começar a configuração.

Selecione seu país (**Country**), idioma (**Language**) e fuso horário (**Timezone**) e clique em **Next** (avançar) de novo:

{% include image.html src="/files/2019/09/raspbian-wizard-02.jpg" %}

Crie uma nova senha para seu Raspberry Pi. Digite-a nos dois campos e clique em **Next** (avançar):

{% include image.html src="/files/2019/09/raspbian-wizard-03.jpg" %}

Se pretende se conectar a uma rede Wi-Fi, selecione-a na lista e clique em **Next** (avançar). Senão, clique em **Skip** (pular):

{% include image.html src="/files/2019/09/raspbian-wizard-04.jpg" %}

Caso você tenha selecionado uma rede Wi-Fi, digite a senha dela e clique em **Next** (avançar):

{% include image.html src="/files/2019/09/raspbian-wizard-05.jpg" %}

O assistente oferece verificar, baixar e instalar atualizações para o sistema. Nesse momento também são obtidas as traduções para os programas, embora isso não esteja escrito na tela. Clique em **Skip** (pular) se preferir fazer você mesmo manualmente em outro momento ou em **Next** (avançar, o que eu recomendo) para deixar o assistente fazer agora:

{% include image.html src="/files/2019/09/raspbian-wizard-06.jpg" %}

Se você optou por baixar as atualizações agora, aguarde o processo:

{% include image.html src="/files/2019/09/raspbian-wizard-07.jpg" %}

(haja café! hehehe)

Quando a atualização terminar, clique em **OK**:

{% include image.html src="/files/2019/09/raspbian-wizard-08.jpg" %}

Por fim, clique em **Restart** (reiniciar):

{% include image.html src="/files/2019/09/raspbian-wizard-09.jpg" %}

Quando o Raspberry Pi terminar de reiniciar, o sistema operacional estará novinho em folha, com todas as atualizações e traduções instaladas.

## Desligando o Raspberry Pi

Embora o Raspberry Pi não tenha um botão de liga/desliga, o Raspbian tem um comando para desligar. Usá-lo é necessário para que o sistema operacional desmonte corretamente os sistemas de arquivos e evite perda de dados. Portanto, desligar um Raspberry Pi não é análogo a ligar (se fosse, seria só puxar a fonte de alimentação).

Para desligar o Raspberry Pi com segurança, abra o **menu de aplicativos**, clicando no ícone do Raspberry Pi, no canto superior esquerdo da tela, e clique em **Shutdown** (desligar):

{% include image.html src="/files/2019/09/raspbian-shutdown-01-pt.jpg" style="max-height: 400px" %}

Na caixa de diálogo **Shutdown options** (opções de desligamento), clique em **Shutdown**:

{% include image.html src="/files/2019/09/raspbian-shutdown-02.jpg" %}

**Aguarde** até que o Raspberry Pi desligue completamente. Repare nas luzes LED: primeiro a PWR apaga e a ACT pisca, depois a ACT paga e apenas a PWR fica acesa, indicando que o Raspberry Pi tem energia, mas não faz nada. Aí sim você pode desconectar a fonte de alimentação.

**Observação:** portas micro-USB tendem a ser frágeis. Por isso, dê preferência a remover a fonte de alimentação da tomada em vez de removê-la do Raspberry Pi.

## Terminando a montagem

Como eu disse, eu comprei no AliExpress um _kit_ que inclui dissipadores de calor, ventoinha e capa de acrílico. No AliExpress, caso tenha algum problema com a compra, o comprador tem até 15 dias após o recebimento do produto para abrir uma disputa com o vendedor. Por isso, eu preferi instalar o sistema e testar a placa (solta na mesa mesmo) antes de completar a montagem. Felizmente, tudo funcionou bem.

Instalei cada dissipador de calor no _chip_ de mesmo tamanho. Assim, colei os dissipadores no processador, na memória RAM e no controlador USB. Caso você tenha dificuldade em localizar esses _chips_, compare esta foto com o [diagrama de componentes](#components) do início:

{% include image.html src="/files/2019/09/raspberry-pi-4-heat-sinks.jpg" %}

{% include update.html date="17/10/2019" message="Somente depois, por acaso, eu descobri que a capa de acrílico vinha com adesivos protetores. De fato, ela é transparente, mas é necessário remover os adesivos." %}

Cada peça da capa de acrílico vem com dois adesivos protetores, um de cada lado, remova-os:

{% include image.html src="/files/2019/10/raspberry-pi-4-acrylic-shell-case.jpg" %}

A ventoinha deve ser ligada nos pinos de propósito geral. O fio da fase (vermelho) deve ser conectado ao pino 4 e o fio terra (preto) deve ser conectado ao pino 6. A fase também é indicada por uma seta no encaixe de plástico:

{% include image.html src="/files/2019/10/raspberry-pi-4-fan.jpg" %}

Caso não tenha dado para identificar os pinos pelas fotos, esse diagrama pode ajudar:

{% include image.html src="/files/2019/09/raspberry-pi-4-pinout.jpg" caption="Imagem extraída do site [Raspberry Pi GPIO Pinout](https://pinout.xyz/)" %}

Foi super fácil instalar a capa de acrílico: exceto pela ventoinha, que foi aparafusada (enrosquei com a mão mesmo), o resto foi tudo encaixado. Não foi preciso sequer aparafusar a placa: ela ficou justa na capa, que foi feita sob medida. Não precisa usar força para encaixar as peças. Se algo não está encaixando naturalmente, pare, olhe e pense: provavelmente você está tentando encaixar algo errado.

## Isso é tudo, pessoal!

Agora que o Raspberry Pi e o Raspbian estão prontos, é só usar!

{% include image.html src="/files/2019/10/raspberry-pi-4-final.jpg" style="max-height: 440px" %}

{% include image.html src="/files/2019/09/raspbian-final-pt.jpg" %}

O Raspbian usa por padrão a área de trabalho [PIXEL], baseada no [LXDE], com o gerenciador de janelas [Openbox].

Na sequência, recomendo a leitura do guia [Utilizando o Raspberry Pi][raspberry-pi-using]. Esse, felizmente, tem tradução para o português brasileiro.

## Referências

- [What is a Raspberry Pi? - Opensource.com][opensource.com]
- [Interview with Raspberry's Founder Eben Upton - TechSpot][techspot]
- [Setting up your Raspberry Pi][raspberry-getting-started]
- [NOOBS For Raspberry Pi – Rants & Raves – The Blog!][qdosmsq]
- [How To Turn On And Shutdown The Raspberry Pi - It's FOSS][itsfoss]
- [Raspberry Pi 4 - A Look Under the Hood and How to Make most of it - Electronics-Lab][electronics-lab]
- [How to Install Heatsinks on the Raspberry Pi 4 (CanaKit) + Temperature Performance Comparison - Edje Electronics][edje-electronics]
- [Raspberry Pi 4 Cooling - ExplainingComputers][cooling]
- [Raspberry Pi GPIO Pinout][pinout]
- [Raspberry Pi Status LEDs Explained - Raspberry Pi Spy][raspberrypi-spy]

[raspberry-pi]:                 https://www.raspberrypi.org/
[raspberry-pi-foundation]:      https://www.raspberrypi.org/about/
[raspberry]:                    https://en.wikipedia.org/wiki/Raspberry
[framboesa]:                    https://pt.wikipedia.org/wiki/Framboesa
[apple]:                        https://www.apple.com/br/
[python]:                       https://www.python.org/
[pi]:                           https://pt.wikipedia.org/wiki/Pi
[arquitetura]:                  https://pt.wikipedia.org/wiki/Arquitetura_de_computadores
[ibm-pc]:                       https://pt.wikipedia.org/wiki/IBM_PC
[x86]:                          https://pt.wikipedia.org/wiki/X86
[x86-64]:                       https://pt.wikipedia.org/wiki/AMD64
[arm]:                          https://pt.wikipedia.org/wiki/Arquitetura_ARM
[android]:                      https://www.android.com/intl/pt-BR_br/
[libreoffice]:                  https://pt-br.libreoffice.org/
[linux]:                        https://www.vivaolinux.com.br/linux/
[raspberry-pi-products]:        https://www.raspberrypi.org/products/
[raspberry-pi-4]:               https://www.raspberrypi.org/products/raspberry-pi-4-model-b/
[raspberry-pi-4-specs]:         https://www.raspberrypi.org/products/raspberry-pi-4-model-b/specifications/
[soc]:                          https://pt.wikipedia.org/wiki/System-on-a-chip
[raspberry-pi-zero]:            https://www.raspberrypi.org/products/raspberry-pi-zero/
[filipeflop]:                   https://www.filipeflop.com/
[raspberry-pi-3-a]:             https://www.filipeflop.com/produto/raspberry-pi-3-a/
[aliexpress]:                   http://bit.ly/kamarada-rpi-4b
[opensuse]:                     https://www.opensuse.org/
[raspberry-pi-1]:               https://en.opensuse.org/HCL:Raspberry_Pi
[raspberry-pi-2]:               https://en.opensuse.org/HCL:Raspberry_Pi2
[raspberry-pi-3]:               https://en.opensuse.org/HCL:Raspberry_Pi3
[forums-opensuse]:              https://forums.opensuse.org/showthread.php/536541-Can-Raspberry-Pi-4-run-openSUSE-LEAP-15-1/page2
[reddit]:                       https://www.reddit.com/r/openSUSE/comments/c6xvnr/raspberry_pi_4/
[raspberry-pi-forums]:          https://www.raspberrypi.org/forums/viewtopic.php?t=244248
[raspbian]:                     http://www.raspbian.org/
[debian]:                       https://www.debian.org/index.pt.html
[ubuntu]:                       https://ubuntu.com/
[knoppix]:                      http://www.knopper.net/knoppix/index-en.html
[kurumin]:                      https://www.hardware.com.br/kurumin/
[biglinux]:                     https://www.biglinux.com.br/
[noobs]:                        https://www.raspberrypi.org/documentation/installation/noobs.md
[libreelec]:                    https://libreelec.tv/
[downloads]:                    https://www.raspberrypi.org/downloads
[how-to-verify-iso]:            {% post_url pt/2018-10-06-verificacao-de-integridade-e-autenticidade-com-sha-256-e-gpg %}
[pixel]:                        https://www.raspberrypi.org/blog/introducing-pixel/
[lxde]:                         https://lxde.org/
[openbox]:                      http://openbox.org/
[raspberry-pi-using]:           https://projects.raspberrypi.org/pt-BR/projects/raspberry-pi-using
[opensource.com]:               https://opensource.com/resources/raspberry-pi
[techspot]:                     https://www.techspot.com/article/531-eben-upton-interview/
[raspberry-getting-started]:    https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up
[qdosmsq]:                      http://qdosmsq.dunbar-it.co.uk/blog/2013/06/noobs-for-raspberry-pi/
[itsfoss]:                      https://itsfoss.com/turn-on-raspberry-pi/
[electronics-lab]:              http://www.electronics-lab.com/project/raspberry-pi-4-look-hood-make/
[edje-electronics]:             https://youtu.be/E-4GaAz7XNM
[cooling]:                      https://youtu.be/AVfvhEJ9XD0?t=770
[pinout]:                       https://pinout.xyz/
[raspberrypi-spy]:              https://www.raspberrypi-spy.co.uk/2013/02/raspberry-pi-status-leds-explained/
