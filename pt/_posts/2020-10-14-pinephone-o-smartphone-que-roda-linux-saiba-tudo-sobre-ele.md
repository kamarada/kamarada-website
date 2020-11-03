---
date: '2020-10-14 03:00:00 GMT-3'
image: '/files/2020/10/pinephone-manjaro-banner.jpg'
layout: post
nickname: 'pinephone'
title: 'PinePhone, o smartphone que roda Linux: saiba tudo sobre ele'
---

{% include image.html src='/files/2020/10/pinephone-manjaro-banner.jpg' %}

O **[PinePhone]** é um _smartphone_ de preço acessível que roda [Linux] fabricado pela [PINE64]. Ele é ideal para quem é fã desse sistema e busca uma alternativa aos mais comuns [Android] e [iOS]. Usuários do PinePhone têm total controle sobre o celular: além do sistema de [código aberto][opensource] Linux, ele tem 6 interruptores (_switches_) que permitem desativar componentes críticos para a segurança e privacidade (como a câmera e o GPS) e é montado com parafusos, de modo que é fácil abri-lo e substituir partes para manutenção ou atualização.

{% include image.html src='/files/2020/10/pinephone-switches.jpg' style='max-width: 400px' caption='Interruptores que permitem desativar componentes a nível de hardware: uma diferença notória do PinePhone para outros smartphones mais comuns' %}

[pinephone]:    https://www.pine64.org/pinephone/
[linux]:        https://www.vivaolinux.com.br/linux/
[pine64]:       https://www.pine64.org/
[android]:      https://www.android.com/intl/pt-BR_br/
[ios]:          https://www.apple.com/br/ios/
[opensource]:   https://pt.wikipedia.org/wiki/Software_de_código_aberto

## A fabricante: PINE64

{% include image.html src='/files/2020/10/pine64-logo.png' %}

A [PINE64] é uma empresa voltada para a comunidade com foco na criação de dispositivos ARM de alta qualidade e baixo custo que rodam, principalmente, Linux — e, a partir daí, quaisquer outros sistemas operacionais que você consiga portar para eles. A PINE64 começou em 2015, buscando apoio no _site_ de financiamento coletivo [Kickstarter] para o projeto do [PINE A64][pine-a64], computador de placa única, semelhante ao [Raspberry Pi][rpi4b]. Desde então, ela já lançou vários outros dispositivos, tanto para projetistas quanto para usuários finais.

A linha de produtos da PINE64 baseados na arquitetura ARM e sistema Linux inclui:

* os computadores de placa única [PINE A64][pine-a64] e [ROCK64];
* o _notebook_ [PineBook];
* o _smartphone_ [PinePhone];
* o _tablet_ [PineTab]; e
* o _smartwatch_ [PineTime].

Já pensou usar Linux em todos os seus dispositivos? No que depender só da PINE64, isso será possível.

[kickstarter]:  https://www.kickstarter.com/
[pine-a64]:     https://www.pine64.org/devices/single-board-computers/pine-a64/
[rpi4b]:        {% post_url pt/2020-10-10-opensuse-no-raspberry-pi-4-parte-2-configuracoes-basicas %}
[rock64]:       https://www.pine64.org/devices/single-board-computers/rock64/
[pinebook]:     https://www.pine64.org/pinebook/
[pinetab]:      https://www.pine64.org/pinetab/
[pinetime]:     https://www.pine64.org/pinetime/

## Arquitetura ARM

O PinePhone é baseado na arquitetura [ARM], da mesma forma que o Raspberry Pi e a maioria dos _smartphones_ com Android.

Isso quer dizer, então, que vou poder usar meus aplicativos baixados da [Play Store][play-store] no meu PinePhone com Linux? Calma, não é tão simples assim.

Observe que os sistemas operacionais são diferentes: é verdade que [o Android é baseado no _kernel_ Linux][tecmundo], mas isso não faz do Android uma distribuição Linux como o [openSUSE] ou o [Ubuntu]. Os aplicativos para Android são desenvolvidos para o Android, não para o Linux. Mesma lógica se aplica aos aplicativos para Linux. Portanto, se você copiar um programa de um _smartphone_ com Android para o PinePhone com Linux (ou vice-versa), não vai funcionar.

É o mesmo que acontece se você tem um computador com [Windows] e outro com Linux: até podem ser da mesma arquitetura, mas como os sistemas são diferentes, não dá pra simplesmente copiar programas de um pro outro.

Por isso, não espere que você vai tirar o PinePhone da caixa e já instalar e usar [WhatsApp] ou [Instagram], por exemplo. Se você precisa usar aplicativos do Android no PinePhone, no momento, há duas soluções que você pode tentar:

- instalar o Android no PinePhone: existe o projeto [GloDroid], que visa portar o Android para o PinePhone, o Raspberry Pi e outros dispositivos
- usar um programa que permite usar aplicativos para Android no Linux, como o [Anbox] (faz lembrar o [Wine], que permite usar aplicativos para Windows no Linux)

Você pode tentar, mas não é garantido que vá funcionar. Eu, particularmente, ainda não testei essas soluções, apenas sei que existem. O ideal mesmo seria que os desenvolvedores desses aplicativos lançassem versões para Linux na arquitetura ARM.

[arm]:          https://pt.wikipedia.org/wiki/Arquitetura_ARM
[play-store]:   https://play.google.com/store/
[tecmundo]:     https://www.tecmundo.com.br/software/127038-android-linux-kernel.htm
[opensuse]:     https://www.opensuse.org/
[ubuntu]:       https://ubuntu.com/
[windows]:      https://www.microsoft.com/pt-br/windows/
[whatsapp]:     https://www.whatsapp.com/?lang=pt_br
[instagram]:    https://www.instagram.com/?hl=pt-br
[glodroid]:     https://github.com/GloDroid/glodroid_manifest
[anbox]:        https://anbox.io/
[wine]:         https://www.winehq.org/

## PinePhone BraveHeart Edition

A PINE64 começou a vender o PinePhone para o público em geral em [novembro de 2019][braveheart-orders] e enviou as unidades compradas em [janeiro de 2020][braveheart-shipping]. A primeira edição do PinePhone foi batizada de BraveHeart ("Coração Valente", em inglês) e era destinada a desenvolvedores e entusiastas. Ela não vinha com sistema operacional, apenas um [programa de teste de fábrica][factorytest], o usuário precisava baixar e instalar uma distribuição Linux — ou mesmo criar uma.

{% include image.html src='/files/2020/10/pinephone-factory-test.jpg' caption='O programa de teste de fábrica que vinha no PinePhone BraveHeart' style='max-width: 400px;' %}

Algumas das distribuições que já suportavam o PinePhone desde esse início incluíam: [Ubuntu Touch (UBports)][ubports], [postmarketOS], [KDE Neon (Plasma Mobile)][plasma-mobile] e [LuneOS].

A imagem abaixo resume as especificações do PinePhone. No final do texto, você pode conferir as especificações completas.

{% include image.html src='/files/2020/10/pinephone-specs.jpg' caption='Resumo das especificações do PinePhone' %}

É um celular simples, não se compara a um Android topo de linha ou a um [iPhone]. Mas já é o suficiente para garantir a diversão dos "escavadores de _bits_" de plantão.

[braveheart-orders]:    https://www.pine64.org/2019/11/05/brave-heart-edition-pinephones/
[braveheart-shipping]:  https://www.pine64.org/2020/01/15/pinephones-start-shipping-all-you-want-to-know/
[factorytest]:          https://wiki.pine64.org/index.php/PinePhone_Software_Releases#Factory_Test_OS
[ubports]:              https://ubports.com/
[postmarketos]:         https://postmarketos.org/
[plasma-mobile]:        https://www.plasma-mobile.org/get/
[luneos]:               http://www.webos-ports.org/
[iphone]:               https://www.apple.com/br/iphone/

## PinePhone Community Edition

O objetivo do PinePhone não é apenas fornecer um celular com Linux para os usuários finais, mas também incentivar a criação de todo um mercado e ecossistema para ele. A PINE64 tem apoiado distribuições Linux que desenvolvem para o PinePhone.

Assim, as edições seguintes do PinePhone passaram a trazer distribuições pré-instaladas. Para cada unidade vendida, [a PINE64 doa parte do dinheiro recebido para a distribuição][pine64-donation].

A primeira edição comunitária (_Community Edition_) do PinePhone trazia o Ubuntu Touch com a interface de usuário [Lomiri] (novo nome para a [Unity8]), começou a ser vendida em [abril][ubports-orders] e foi enviada para quem a comprou em maio.

{% include image.html src='/files/2020/10/pinephone-ubports.png' style='max-height: 400px;' %}

A segunda edição comunitária foi anunciada em [junho][postmarketos-orders], trazia o postmarketOS com a interface [Phosh] (baseada no [GNOME]) e foi enviada no final de agosto.

{% include image.html src='/files/2020/10/pinephone-postmarketos.png' style='max-height: 400px;' %}

Essa edição trouxe uma nova versão opcional chamada de _Convergence Package_ ("Pacote de Convergência") com mais memória RAM (3GB em vez de 2GB), o dobro de memória interna (32GB versus 16GB) e uma _dock_ USB-C que permite a conexão de monitor, _mouse_ e teclado ao celular, que então pode ser usado como se fosse um computador _desktop_.

{% include youtube.html id="yBeza4UNOm8" %}

A terceira edição comunitária, à venda desde [setembro][manjaro-orders], traz a distribuição [Manjaro] com a interface Phosh e também permite a aquisição do celular apenas (versão regular) ou do celular melhorado junto da _dock_ (_Convergence Package_). O envio das unidades compradas [já começou][manjaro-shipping], mas ele ainda está disponível para compra.

{% include image.html src='/files/2020/10/pinephone-manjaro.png' style='max-height: 400px;' %}

É interessante observar que o PinePhone recebeu algumas [revisões de _hardware_][pinephone-revisions] a cada edição:

- PinePhone BraveHeart Edition foi considerado a versão 1.1
- PinePhone UBports Community Edition: versão 1.2
- PinePhone postmarketOS Community Edition: versão 1.2a
- PinePhone Manjaro Community Edition: versão 1.2b

Essas revisões não mudaram as especificações, mas trouxeram pequenas correções e melhorias.

[pine64-donation]:      https://www.pine64.org/2019/08/19/its-time-to-start-giving-back/
[lomiri]:               https://diolinux.com.br/2020/03/lomiri-e-o-novo-nome-para-o-projeto-unity8.html
[unity8]:               https://unity8.io/
[ubports-orders]:       https://www.pine64.org/2020/04/02/pinephone-ubports-community-edition-pre-orders-now-open/
[postmarketos-orders]:  https://www.pine64.org/2020/06/15/june-update-postmarketos-ce-pinephone-shipping-pine64-cluster/
[phosh]:                https://wiki.postmarketos.org/wiki/Phosh
[gnome]:                https://br.gnome.org/
[manjaro-orders]:       https://www.pine64.org/2020/08/31/pinephone-manjaro-community-edition/
[manjaro]:              https://manjaro.org/
[manjaro-shipping]:     https://forum.pine64.org/showthread.php?tid=11959
[pinephone-revisions]:  https://wiki.pine64.org/index.php?title=PinePhone#Hardware_revisions

## Distribuições Linux suportadas

Você não precisa ficar preso à distribuição que vem no PinePhone. Diferente da maioria dos _smartphones_ que vêm com trava de vendedor (_vendor lock-in_) que dificulta a instalação de outros sistemas, o PinePhone permite que você dê o _boot_ a partir do cartão de memória (tão fácil quanto usar um [LiveUSB] pra dar o _boot_ em um computador). Também é possível gravar um sistema na memória interna do PinePhone usando o utilitário [Jumpdrive].

Além disso, os componentes selecionados pela PINE64 para compor o PinePhone possuem módulos no [_kernel_ Linux principal (_mainline kernel_)][kernel], o que facilita a criação de distribuições para ele. Diferente, por exemplo, da Raspberry Pi Foundation que tem seu próprio _fork_ do _kernel_ Linux e usa componentes da Broadcom, que tem módulos proprietários. Falei [em outro _post_][rpi4b-opensuse] da dificuldade que o openSUSE tem para oferecer suporte ao Raspberry Pi.

No momento, há pelo menos [18 sistemas operacionais que podem ser usados no PinePhone][pinephone-oses], alguns desenvolvidos desde o início com foco em dispositivos móveis, como o Ubuntu Touch, outros baseados em distribuições que já existiam para os _desktops_, como o [Mobian] (Debian). A lista de sistemas que você já pode testar hoje no PinePhone inclui:

- [Ubuntu Touch (UBports)][ubports]
- [KDE Neon (Plasma Mobile)][plasma-mobile]
- [Mobian] (Debian for mobile)
- [PureOS]
- [Fedora]
- [Arch Linux][arch]
- [Manjaro]
- [openSUSE] (sim, há uma [imagem do openSUSE][pinephone-opensuse] em desenvolvimento, vamos falar dela oportunamente)
- [postmarketOS]
- [Gentoo]
- [GloDroid]

Note que nem todas essas imagens são oficiais das distribuições (muitas são contribuídas por usuários) e a maioria está em desenvolvimento. Portanto, hoje, nem todos os recursos do PinePhone funcionam em todas as distribuições.

Há uma [imagem _multiboot_][multiboot] que permite o teste de 13 distribuições do cartão de memória.

{% include image.html src='/files/2020/10/pinephone-multiboot-image.jpg' style='max-height: 400px;' %}

[liveusb]:              {% post_url pt/2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}
[jumpdrive]:            https://wiki.pine64.org/PinePhone#Flashing_eMMC_using_Jumpdrive
[kernel]:               https://www.kernel.org/
[rpi4b-opensuse]:       {% post_url pt/2020-10-07-opensuse-no-raspberry-pi-4-parte-1-download-e-instalacao %}
[pinephone-oses]:       https://wiki.pine64.org/index.php?title=PinePhone_Software_Releases
[mobian]:               https://mobian-project.org/
[pureos]:               https://pureos.net/
[fedora]:               https://getfedora.org/pt_BR/
[arch]:                 https://archlinuxarm.org
[pinephone-opensuse]:   https://wiki.pine64.org/index.php?title=PinePhone_Software_Releases#openSUSE
[gentoo]:               https://www.gentoo.org/
[multiboot]:            https://xnux.eu/p-boot-demo/

## Onde comprar? Como funciona o envio?

O PinePhone não está à venda em diversas lojas, como a maioria dos celulares mais comuns, ao menos por enquanto. Se quiser comprar um PinePhone, você deve acessar o _site_ da loja da PINE64, a [Pine Store][pine-store]. Lá você encontra não só o PinePhone, como também acessórios (_accessories_) para ele (como capa e película) e peças avulsas (_spare parts_, como a placa, a bateria o vidro da tela e outras), caso você precise substituir no futuro.

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/10/pinephone-pine-store.jpg' caption='PinePhone à venda na Pine Store' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/10/pinephone-parts.jpg' caption='Peças do PinePhone na Pine Store' %}
    </div>
</div>

Como o PinePhone contém uma bateria de íon-lítio, ele deve ser enviado sozinho, não pode ser combinado com outras peças, acessórios ou dispositivos — pra mim, não ficou claro o motivo disso, mas creio ser as restrições impostas aos transportes internacionais. Se você quiser comprar outras coisas além do PinePhone, terá que fazer mais de um pedido.

O pagamento é feito usando cartão de crédito, seja por meio do [PayPal], seja fornecendo os dados do cartão diretamente no _site_, nesse caso o pagamento é processado pela [Stripe].

Falando em PayPal, no anúncio do PinePhone, há uma informação que precisa ser observada: um aviso sobre possíveis defeitos de _hardware_. Traduzindo:

> Pequenos números (1 a 3) de _pixels_ presos ou mortos são uma característica das telas LCD. Isso é muito raro, mas normal e não deve ser considerado um defeito. Ao realizar a compra, lembre-se de que estamos oferecendo o PinePhone a esse preço como um serviço comunitário às comunidades da PINE64 e do Manjaro. Se você acha que uma pequena insatisfação, como um _pixel_ morto, te levará a abrir uma contestação do PayPal, não compre o PinePhone. Obrigado!

Outra diferença das compras mais comuns é que o PinePhone não é enviado assim que você o compra: ele fica disponível à venda por um tempo, geralmente algo entre um mês ou dois, a Pine Store reúne todos os pedidos, e os envia de uma vez só no mês seguinte. É possível conferir as previsões de envios no _site_ da PINE64, na página [_Shipping Information_][pine64-shipping] (informações de envio). O celular é enviado por transportadora (_courier shipping_).

Os acessórios, diferente do celular, são enviados de imediato e você pode escolher o envio por correio comum (_standard shipping_) ou por transportadora.

Quando você compra o PinePhone, você recebe um _e-mail_ confirmando o pedido. Depois, quando o PinePhone é enviado, você recebe outro _e-mail_ com o código de rastreio do envio.

A edição que está à venda agora tem previsão de envio no início de novembro. Portanto, as vendas devem se encerrar antes disso.

[pine-store]:       https://pine64.com/
[paypal]:           https://www.paypal.com/br
[stripe]:           https://stripe.com/br
[pine64-shipping]:  https://www.pine64.org/shipping/

## Garantia

É importante testar todos os recursos do PinePhone assim que receber, pois a página do anúncio informa que o celular tem **garantia de 30 dias**. Pode ser que você precise gravar outras distribuições no cartão de memória para conseguir testar todos os recursos.

## Quanto custa?

O PinePhone custa 150 dólares (na loja diz 149,99, mas eu sempre penso arredondando já). O _Convergence Package_, que adiciona a _dock_ (e a memória RAM e a memória interna maiores) custa 200 dólares (199,99), portanto, 50 dólares a mais. Simulei o envio para o Brasil e, para a minha residência, pelo menos, o frete deu 65 dólares. Para cada PinePhone vendido, 10 dólares serão doados para a distribuição — na edição atual, o Manjaro.

Pensando em dólares, não é um preço fora da realidade, é próximo de alguns dos [_smartphones_ Android mais baratos][androidcentral], como o [Motorola Moto E][moto-e], que hoje custa os mesmos 150 dólares na [Amazon]. É bem verdade que o Moto E ganha nas especificações, mas quem compra um PinePhone provavelmente o prefere por ser um _smartphone_ com Linux.

Pesquisando no [Google], hoje, 13 de outubro, 1 dólar está valendo 5,58 reais.

Fazendo as contas, hoje o celular PinePhone custa 837 reais e o _Convergence Package_ custa 1.116 reais. O frete, para mim, pelo menos, custaria R$ 362,70.

Portanto, considerando apenas o preço original em dólares e o câmbio, hoje o _Convergence Package_ mais o frete me custariam R$ 1.478,70.

Por esse preço (ou até menos), há _smartphones_ Android superiores no mercado brasileiro...

Mas lembre-se que se trata de uma compra internacional e o pagamento é feito usando cartão de crédito: o banco pode usar um câmbio um pouco diferente, assim como há cobrança de IOF — Imposto sobre Operações Financeiras. Na dúvida, entre em contato com seu banco para verificar como ele processa compras internacionais.

Porém, o câmbio e o IOF ainda não são nem o maior problema para nós, brasileiros...

[androidcentral]:   https://www.androidcentral.com/best-cheap-android-phones
[moto-e]:           https://www.tudocelular.com/Motorola/fichas-tecnicas/n6324/Motorola-Moto-E.html
[amazon]:           https://www.amazon.com/dp/B086H3HH5V
[google]:           https://www.google.com/search?q=cotação+dólar+real

## Minha experiência e os impostos...

{% include image.html src='/files/2020/10/my-pinephone.jpg' caption='Meu PinePhone' style='max-width: 400px' %}

Eu comprei a edição comunitária do PinePhone com postmarketOS e a _dock_, assim como uma [capa rígida][pinestore-hard-case] (10 dólares) e uma [película de vidro][pinestore-glass-protector] (5 dólares). Como expliquei, devido à questão da bateria de íon-lítio, fiz 2 pedidos: um com o celular e o outro com os acessórios. Comprei ambos em 03 de agosto.

Os acessórios foram enviados no dia seguinte. Saíram de Hong Kong por China Post (o correio chinês) e chegando em Curitiba passaram para os Correios brasileiros. A fiscalização aduaneira não me cobrou imposto de importação nem despacho postal (aquela taxa de 15 reais) e liberou a encomenda, que me foi entregue no dia 31 de agosto.

Meus problemas foram com o celular. A transportadora que a PINE64 usou para o envio dos PinePhones com postmarketOS no final de agosto foi a [DHL]. O serviço dessa empresa de fato é muito bom. A informação passada no [fórum da PINE64][forum-pine64] foi que os celulares chegariam a seus destinos dentro de 5 a 10 dias, independentemente da localização geográfica (dependendo também dos procedimentos de importação de cada país, claro).

Ocorre que para conseguir essa rápida entrega, [a DHL adianta o pagamento ao governo dos impostos e taxas alfandegárias][dhl-support], que você deve ressarcir à DHL para que seja feita a entrega.

Ou seja, quando a entrega é feita pelo correio comum, pode ser que a encomenda seja taxada ou liberada, mas quando é feita pela transportadora, é certo que será taxada.

Até então, eu tinha dado "sorte" que nenhuma das minhas poucas importações foi taxada, mas depois me dei conta que todas foram entregues por correio comum. Essa foi minha primeira compra por transportadora e foi taxada. Eu tive que pagar:

- Imposto de Importação (II, federal) = 60% sobre o valor total da compra (incluindo frete e seguro, se houver) = R$ 773,79
- Imposto sobre Circulação de Mercadorias e Serviços (ICMS, estadual) = 17% no caso do estado onde eu moro, Santa Catarina (varia de estado para estado) = R$ 422,63
- taxa de serviços administrativos da DHL, que ela cobra para fazer o pagamento adiantado desses impostos = R$ 77,75

Total = R$ 1.274,17

Resumo: os impostos e a taxa da transportadora custaram mais caro que o próprio celular.

Se você mora no Brasil e pensa em comprar um PinePhone, deve levar o câmbio e os impostos em consideração, e possivelmente isso fará você desistir da compra.

Aqui vai uma dica que você pode fazer para **tentar** não pagar esses impostos, mas **não é garantido** que sua compra será de fato liberada deles. Já ouviu falar na empresa Shipito?

[Shipito] é um serviço de redirecionamento de pacotes dos EUA. Há lojas _online_ que não enviam compras para todos os países — por exemplo, a loja inglesa [The Pi Hut][thepihut] não envia para o Brasil — mas enviam para os Estados Unidos. Nesses casos, o que você pode fazer é enviar suas compras para o armazém da Shipito que, em seguida, ela os enviará para você. Ela oferece envio por diversos serviços tanto de correios comuns como de transportadoras. Outro ponto interessante da Shipito é que ela aceita pagamento em [Bitcoin].

A dica seria enviar o PinePhone para a Shipito (note que aí você tem um frete) e de lá enviar para o Brasil usando correio comum (outro frete). Fazendo isso, **pode ser** que sua compra seja liberada de impostos, pode ser que não. Portanto, mesmo fazendo isso, você precisa reservar um dinheiro para pagar os impostos de importação, caso sejam cobrados.

A Shipito dispõe de uma [calculadora de envio][shipito-calculator] que te permite calcular o custo do frete dos EUA para o Brasil. As informações que você precisa para usar essa calculadora (tamanho e peso da embalagem) estão nas especificações no final dessa página.

Há também o _site_ [Tributado.net], que oferece uma calculadora de câmbio e impostos de importação. No meu caso, ele estimou um valor próximo do que me foi cobrado de fato.

{% include image.html src='/files/2020/10/pinephone-tributos.jpg' caption='Estimativa dos impostos de importação pelo site [Tributado.net](https://tributado.net/)' style='max-height: 400px;' %}

Compras internacionais não são minha especialidade, por isso também sugiro que você pesquise mais sobre o assunto em outros _sites_.

[pinestore-hard-case]:          https://pine64.com/product/pinephone-hard-protective-case/
[pinestore-glass-protector]:    https://pine64.com/product/pinephone-tempered-glass-screen-protector/
[dhl]:                          https://www.dhl.com/br-pt/home.html
[forum-pine64]:                 https://forum.pine64.org/showthread.php?tid=11134
[dhl-support]:                  https://www.dhl.com.br/exp-pt/express/suporte_alfandegario/servicos_e_impostos/impostos_taxas_destinatarios.html
[shipito]:                      https://www.shipito.com/?id_affiliate=16894
[thepihut]:                     https://thepihut.com/
[bitcoin]:                      {% post_url pt/2018-12-12-bitcoin-para-iniciantes-com-a-carteira-electrum %}
[shipito-calculator]:           https://www.shipito.com/pt/shipping-calculator?id_affiliate=16894
[tributado.net]:                https://tributado.net/

## Conclusão

Talvez você já tenha inferido pela leitura do texto, mas caso não, é importante deixar bem claro: o PinePhone, hoje, ainda não tem condições de substituir o _smartphone_ que você usa no dia a dia. Ele ainda está mais próximo de um protótipo de _hardware_ e _software_ do que de um produto completo. A experiência do usuário ainda é difícil, as interfaces ainda não são tão bonitas, ainda faltam aplicativos, mas em parte é isso que torna o PinePhone tão empolgante: é uma tecnologia que está começando agora!

No momento, a ideia é que ele seja adquirido por usuários entusiastas e desenvolvedores de _software_, que vão auxiliar o desenvolvimento do produto.

Também vale lembrar que o PinePhone é um celular barato (150 dólares), produzido sob demanda, por uma empresa sem experiência anterior na indústria de _smartphones_. Alto desempenho não é o que se busca nesse celular, que não pretende competir com os últimos modelos da Samsung ou da Apple. Suas ambições são mais "humildes": ser um _smartphone_ aberto, confiável, "hackeável" (e possivelmente atualizável) baseado no _kernel_ Linux padrão.

Para brasileiros, o PinePhone não é tão barato. Antes de comprá-lo, é preciso avaliar o risco de pagar impostos e taxas que podem acabar custando mais que o próprio celular.

Vejamos o que a comunidade do PinePhone é capaz de fazer. Provavelmente não o veremos nas prateleiras das grandes lojas ou operadoras tão cedo. Mas para as pessoas que apreciam a combinação, perfeita para privacidade, de _software_ livre e interruptores de _hardware_, que permitem total controle do usuário sobre o celular, o PinePhone certamente já é uma opção muito promissora.

{% capture video %}
Quer ver o PinePhone em ação? Confira esse vídeo do canal do Linux Kamarada no YouTube:
{% include youtube.html id="Jo9nL-p2J6I" %}
{% endcapture %}
{% include update.html date="20/10/2020" message=video %}

## Referências

Além dos vários _links_ espalhados pela página, pra escrever este texto eu também consultei os seguintes:

- [PinePhone - PINE64 wiki][pinephone-pine64-wiki]
- [PinePhone - Wikipedia][pinephone-wikipedia]
- [PINEPHONE – "Community Edition: Manjaro with Convergence Package" Limited Edition Linux SmartPhone – Pine Store][pine-store-manjaro]
- [postmarketOS // PinePhone: postmarketOS community edition][postmarketos-blog]
- [The Linux-based PinePhone is the most interesting smartphone I've tried in years - Android Police][androidpolice]
- [PinePhone: What You Need to Know About This Linux Phone - OMG! Ubuntu!][omgubuntu-1]
- [New PinePhone with 3GB RAM and USB Dock Goes on Sale - OMG! Ubuntu!][omgubuntu-2]
- [PinePhone User Manual - Quick Start Guide (EN)][pinephone-manual]
- [Qual o valor que a alfândega cobra de produtos importados? - UOL Economia][uol]

[pinephone-pine64-wiki]:    https://wiki.pine64.org/index.php?title=PinePhone
[pinephone-wikipedia]:      https://en.wikipedia.org/wiki/PinePhone
[pine-store-manjaro]:       https://pine64.com/product/pinephone-community-edition-manjaro-with-convergence-package-limited-edition-linux-smartphone/
[postmarketos-blog]:        https://postmarketos.org/blog/2020/06/15/pinephone-postmarketos-community-edition/
[androidpolice]:            https://www.androidpolice.com/2020/08/13/the-linux-based-pinephone-is-the-most-interesting-smartphone-ive-tried-in-years/
[omgubuntu-1]:              https://www.omgubuntu.co.uk/2019/11/pinephone-specs-price-release-date
[omgubuntu-2]:              https://www.omgubuntu.co.uk/2020/07/buy-pinephone-postmarketos
[pinephone-manual]:         https://wiki.pine64.org/images/f/f7/USER_MANUAL_-_QUICK_START_GUIDE_EN_GER_FR_ESP_V1.3.pdf
[uol]:                      https://economia.uol.com.br/noticias/redacao/2019/11/16/compras-online-internacional-imposto-alfandega-multa-correios.htm

## Especificações técnicas

- **Redes celulares:**
  - 2G (GSM/GPRS/EDGE)
  - 3G (UMTS/HSPA)
  - 4G (LTE)
  - todas as bandas mundiais
  - _chip_ micro-SIM
- **Conexões sem fio:**
  - Wi-Fi 802.11 b/g/n, banda única (2,4GHz), ponto de acesso (_hotspot_)
  - Bluetooth 4.0, perfil A2DP
- **Localização:**
  - GPS/GLONASS/BeiDou/Galileo/QZSS, com A-GPS
- **Tela:**
  - HD IPS LCD
  - 5,95 polegadas
  - resolução de 1440 × 720 _pixels_, proporção 18:9
  - 16 milhões de cores
  - vidro temperado (_hardened glass_)
  - sensível ao toque (_touchscreen_), capacitiva
- **Chip:**
  - _system-on-a-chip_ (SoC) Allwinner A64
  - processador (CPU): ARM Cortex-A53
  - quatro núcleos (_quad core_)
  - frequência de 1,2GHz
  - arquitetura ARMv8 de 64 bits
  - _chip_ gráfico (GPU): ARM Mali-400 MP2
- **Memória:**
  - memória do sistema: 2GB ou 3GB de memória LPDDR3 SDRAM
  - memória interna: 16GB ou 32GB de memória eMMC
  - entrada para cartão microSD de até 2TB (SDHC/SDXC, bootável)
- **Câmeras:**
  - câmera traseira (principal): 5 _megapixels_, 1/4", com _flash_ de LED
  - câmera frontal (de _selfie_): 2 _megapixels_, 1/5", abertura f/2.8
- **Som:**
  - alto-falante mono integrado
  - microfone integrado
  - conexão para fone de ouvido estéreo com microfone do tipo P2 3,5mm
- **Sensores:**
  - acelerômetro
  - giroscópio
  - proximidade
  - luminosidade
  - bússola
  - barômetro
- **Bateria:**
  - íon-lítio, removível, 3.000 mAh
  - mesmo formato da bateria do Samsung J7
  - requer um carregador de 15W (5V 3A)
- **Botões e conectores externos:**
  - botões de aumentar e diminuir volume e ligar/desligar
  - porta USB-C (energia, dados e conexão da _dock_)
- **Revestimento:** plástico, preto fosco
- **Outros:**
  - interruptores de _hardware_:
    - LTE e GPS
    - Wi-Fi e Bluetooth
    - microfone
    - câmera traseira
    - câmera frontal
    - fones de ouvido
  - pinos de expansão para conexão serial usando protocolo I2C
  - luz LED de notificação multicor
  - vibração

{% include image.html src='/files/2020/10/pinephone-pins.jpg' caption='Breakout board para os pinos de expansão do PinePhone. Fonte das imagens: [https://github.com/SMR404/PinephonePogoBreakout](https://github.com/SMR404/PinephonePogoBreakout)' %}

- **Tamanho e peso do celular:**
  - altura: 160,5mm
  - largura: 76,6mm
  - espessura: 9,2mm
  - peso: entre 180 e 200 gramas
- **Conteúdo da embalagem:**
  - PinePhone
  - cabo USB-A para USB-C
  - pequeno manual do usuário (veja uma cópia em PDF [aqui][pinephone-manual])
  - adaptador de _chip_ nano-SIM para micro-SIM
  - _dock_ USB-C (opcional): contém saída de vídeo HDMI, 2 portas USB-A, porta de rede Ethernet 10/100Mbps e porta USB-C (energia)

{% include image.html src='/files/2020/10/pinephone-sim-adapter.jpg' caption='Só depois me dei conta que há na embalagem um adaptador de _chip_ nano-SIM para micro-SIM, provavelmente desnecessário no Brasil, porque que as operadoras já o fornecem.' %}

- **Tamanho e peso da embalagem:**
  - comprimento: 18cm
  - largura: 10cm
  - altura: 4cm
  - peso: 0,5kg
