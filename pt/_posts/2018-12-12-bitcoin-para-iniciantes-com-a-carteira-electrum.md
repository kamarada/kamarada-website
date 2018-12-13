---
date: 2018-12-12 23:30:00 GMT-2
image: '/files/2018/12/bitcoin.jpg'
layout: post
published: true
nickname: 'bitcoin-electrum'
title: 'Bitcoin para iniciantes com a carteira Electrum'
excerpt: 'O Bitcoin é uma moeda digital que circula apenas eletronicamente, pela Internet. Já existe há 10 anos e mostra que veio pra ficar. Por enquanto o Bitcoin tem sido usado mais para especulação que outra coisa, mas já há lojas e serviços que aceitam pagamento em Bitcoins e projetos que aceitam doações em Bitcoins, a exemplo da Wikipedia. Nesse tutorial, você vai aprender como transacionar Bitcoins usando a carteira Electrum.'
---

{% include image.html src="/files/2018/12/bitcoin.jpg" %}

O [Bitcoin] é uma moeda digital que circula apenas eletronicamente, pela Internet. Já existe há 10 anos e mostra que veio pra ficar. Por enquanto [o Bitcoin tem sido usado mais para especulação que outra coisa][especulacao], mas já há [lojas e serviços que aceitam pagamento em Bitcoins][lojas-servicos] e projetos que aceitam doações em Bitcoins, a exemplo da [Wikipedia][wikimedia].

Nesse tutorial, você vai aprender como transacionar Bitcoins usando a carteira [Electrum]. 

Para referência futura, aqui utilizo a distribuição Linux [openSUSE Leap][opensuse-leap] versão 15.0, [lançada em 25/05/2018][opensuse-leap-15], e a carteira Electrum versão 3.2.3, [lançada em 03/09/2018][electrum-release-notes].

Vou tentar explicar resumidamente um pouco sobre o Bitcoin. Depois, vamos ver como utilizá-lo na prática, comprando, transferindo e vendendo Bitcoins.

**Observações:**

1. Há quem ganhe dinheiro fazendo **especulação** com Bitcoin, comprando ou vendendo conforme a moeda se valoriza ou desvaloriza. Adianto que **não** é o objetivo desse tutorial ensinar a fazer isso. Se é isso que você procura, recomendo procurar outros conteúdos, como a série [Crypto Alert][empiricus], da [Empiricus][empiricus].

2. Devido à alta volatilidade da cotação do Bitcoin, se você executar todos os passos desse tutorial literalmente como aparecem, pode ser que ganhe ou **perca dinheiro**, esteja ciente disso. Recomendo que você leia todo o texto apenas para aprender como funciona e use a carteira Electrum no dia a dia conforme sua real necessidade.

## Entendendo como funciona o Bitcoin

O Bitcoin foi criado em 2008 por Satoshi Nakamoto, que escreveu um [artigo explicando o funcionamento da moeda][bitcoin-paper]. A título de curiosidade, Satoshi Nakamoto é na verdade um pseudônimo, não se sabe se é uma pessoa ou um grupo de pessoas.

{% include image.html src="/files/2018/12/bitcoin-paper.jpg" caption="O artigo que apresentou o conceito do Bitcoin, disponível para leitura [aqui](https://bitcoin.org/bitcoin.pdf)." %}

O objetivo do Projeto Bitcoin é desenvolver uma moeda **descentralizada**, que não seja suportada ou regulada por governos ou bancos, não dependa deles para ser confiável, nem sofra interferências de eventos políticos. A moeda Bitcoin depende apenas da própria rede de usuários para existir. Por isso, ela é dita uma moeda [***peer-to-peer***][p2p] (expressão que em inglês significa *par-a-par* e é mais conhecida por [P2P]).

Se você já conhece a rede [*torrent*][torrent], que também é uma rede *peer-to-peer*, mas usada para compartilhar arquivos, talvez entenda mais facilmente a rede Bitcoin.

Diferente das moedas tradicionais, que são impressas por bancos centrais, Bitcoins não podem ser impressos: existem apenas eletronicamente. Também não podem ser baixados, porque não são arquivos. Na verdade, o que circula na rede são **transações** de Bitcoins. Todas as transações são divulgadas a todos os usuários da rede ([*broadcasting*][broadcasting]).

Uma transação é uma transferência de Bitcoins entre **carteiras Bitcoin** (*Bitcoin wallets*). Na ideia, essas carteiras são semelhantes às tradicionais nas quais guardamos cédulas, moedas e cartões. Mas lembre-se que Bitcoins não são armazenáveis, apenas transferidos. Tecnicamente, as carteiras Bitcoin são formadas por um **endereço** (*address*), do qual ou para o qual são transferidos Bitcoins, e uma **chave privada** (*private key*, também chamada de **semente**, *seed*), que é uma informação secreta usada para assinar transações. A **assinatura** fornece uma prova matemática de que a transação foi feita pelo dono da carteira e também previne que a transação seja alterada depois de emitida.

Chave privada e assinatura são conceitos de [criptografia], que é um dos pilares do Bitcoin. É graças a ela que as transações de Bitcoins podem ser asseguradas pelas próprias partes envolvidas, diferente das transações de moedas tradicionais, que são asseguradas sempre por terceiros (normalmente, bancos).

Da mesma forma como na rede *torrent* um arquivo existe enquanto usuários possuem e disponibilizam esse arquivo, na rede Bitcoin uma transação existe a partir do momento que os usuários **confirmam** essa transação. Após a confirmação por vários usuários (normalmente, pelo menos seis), a transação é gravada em um gigantesco banco de dados que registra todas as transações de Bitcoins que já ocorreram na história, chamado de ***blockchain***. Esse banco de dados é construído de forma síncrona e distribuída por vários usuários da rede e também utiliza criptografia, de modo que é difícil adulterá-lo.

O processo de confirmação de transações é chamado de **mineração**. Dá trabalho, porque envolve operações pesadas de criptografia, consome tempo, processamento, espaço em disco, energia elétrica e, portanto, tem custo. Quem transfere Bitcoins paga uma pequena **taxa** a quem confirma a transação. Quem precisa que a transação seja feita mais rápida, pode oferecer pagar uma taxa um pouco maior, de modo a atrair mais mineradores.

[Mineração já foi uma forma de ganhar dinheiro com Bitcoins][mineracao]. Mas com a evolução da rede, as sucessivas operações criptográficas têm tornado as confirmações cada vez mais trabalhosas. O custo-benefício de minerar Bitcoins em casa no Brasil não compensa mais.

Se você ainda não tem Bitcoins e deseja obtê-los, o primeiro passo é escolher uma carteira. Com isso, você terá um endereço que poderá usar para receber Bitcoins. Alguém que já possui Bitcoins pode te transferir (como pagamento por um serviço ou produto, ou mesmo como doação, por exemplo) ou você pode **comprar** Bitcoins. Para isso, deve se cadastrar em uma **corretora** (*exchange*) e transferir dinheiro (em reais, por exemplo) para ela. As corretoras são análogas às casas de câmbio que convertem reais para dólares e vice-versa.

Se essa explicação pareceu confusa, não se preocupe: veremos na prática a seguir.

Aqui não esgotamos o assunto Bitcoin, que é bastante interessante. Para saber mais, visite o [*site* do Projeto Bitcoin][bitcoin], que possui muita informação, [leia o artigo do Bitcoin][bitcoin-paper] e [pesquise no Google][google-bitcoin]. De forma genérica, você pode pesquisar sobre [**criptomoedas**][google-criptomoedas], que são moedas semelhantes ao Bitcoin, baseadas em criptografia. O Bitcoin foi a primeira criptomoeda e inspirou várias que surgiram depois dele propondo alguma melhoria.

## Cotação do Bitcoin

Assim como o valor do dólar oscila comparativamente ao real, o valor do Bitcoin também oscila de acordo com a demanda pela moeda no mercado ([lei da oferta e da procura][oferta-e-procura]).

A melhor forma de descobrir quanto vale 1 Bitcoin (também abreviado **BTC** ou <i class="fab fa-btc"></i>) comparado ao real (**BRL** ou **R$**) é consultar *sites* de corretoras.

Mas se você não precisa da cotação em tempo real e quer ter apenas uma noção, pode ser mais prático [pesquisar no Google][google-btc]. Experimente pesquisar "[bitcoin real][google-btc]" (sem as aspas):

{% include image.html src="/files/2018/12/bitcoin-real.jpg" caption="No momento da escrita, 1 Bitcoin é igual a R$ 13.256,93." %}

## Divisões de Bitcoins

A moeda Bitcoin pode ser dividida em até 8 casas decimais.

A menor unidade de Bitcoin é chamada de **satoshi**, em homenagem ao seu criador.

<pre>1 satoshi = 0,00000001 BTC</pre>

Dessa forma, ainda que o valor de 1 BTC fosse elevado, seria possível transacionar qualquer valor. Se 1 BTC valesse 1 milhão de dólares, 1 satoshi valeria 1 centavo de dólar.

Se 1 BTC vale 13 mil reais, 1 satoshi vale 0,00013 reais (menos que 1 centavo de real).

Outra unidade comum é o **milibitcoin** (1 milésimo de Bitcoin), abreviado por **mBTC**.

<pre>1 mBTC = 1/1.000 BTC = 0,001 BTC = 100.000 satoshis</pre>

Se 1 BTC vale 13 mil reais, 1 mBTC vale 13 reais.

## Corretoras Bitcoin

No Brasil há várias corretoras por meio das quais é possível comprar e vender Bitcoins. As mais antigas em funcionamento incluem: [Mercado Bitcoin][mercadobitcoin], [Bitcoin To You][bitcointoyou], [CoinBR], [FoxBit], [FlowBTC] e [BitcoinTrade].

Na escolha da corretora, você deve levar em consideração alguns pontos como o volume de negociação (um grande número de usuários sugere um bom serviço), recursos de segurança, formas de transferir dinheiro, bancos suportados, entre outros. As corretoras não cobram taxas para manter a conta, como geralmente fazem os bancos, mas cobram pequenas taxas em cada transação. Para mais informações, leia [esse texto][corretoras].

Eu já possuía conta na [Mercado Bitcoin][mercadobitcoin] e nunca tive problemas com ela, então vou usá-la como exemplo aqui. Não vou falar muito sobre a corretora, apenas o essencial para entender como funciona o Bitcoin, porque o foco é no Bitcoin em si e na carteira Electrum.

{% include image.html src="/files/2018/12/mercado-bitcoin.jpg" caption="[Mercado Bitcoin](https://www.mercadobitcoin.com.br): a primeira corretora Bitcoin do Brasil." %}

## Carteiras Bitcoin

Existem diversos [tipos de carteiras][tipos-de-carteiras], cada uma com suas vantagens e desvantagens: aplicativos para computadores (*desktops*), celulares (*smartphones*), carteiras de *hardware*, *web* e de papel também. O [*site* do Projeto Bitcoin lista algumas carteiras disponíveis][bitcoin-wallets]. 

Dentre elas, carteiras que são aplicativos para *desktop*, funcionam no [Linux] e possuem [código aberto][opensource] incluem: [Bitcoin Core][bitcoin-core], [Bitcoin Knots][bitcoinknots], [Armory], [Bither] e [Electrum].

A carteira [Bitcoin Core][bitcoin-core] é do próprio Projeto Bitcoin, mas também faz mineração. Portanto, consome bastante processador e disco. Use apenas se deseja minerar.

A carteira [Bither] é a que está disponível para mais sistemas e dispositivos (Linux, [Windows], [Mac OS X][macosx], [Android] e [iOS]), mas o *site* é muito simples, não oferece documentação e eu não consegui baixar a versão para Linux.

Assim, escolhi usar a carteira [Electrum] por ser a segunda com mais sistemas suportados (Linux, Android, Windows e Mac OS X) e possuir boa documentação tanto em seu [*site*][electrum] quanto [em outros][bitzuma-electrum]. Além disso, o *site* da Electrum disponibiliza a assinatura dos *downloads*, de modo que é possível [verificar a autenticidade do arquivo baixado][how-to-verify-iso]. É importante sempre fazer essa verificação, especialmente no caso de programas críticos para a segurança, como essa carteira. Seu código-fonte está [disponível no GitHub][github] e recebe atualizações frequentes, outro ponto importante a se considerar.

{% include image.html src="/files/2018/12/electrum.jpg" %}

## Instalação da carteira Electrum

Antes de instalar a carteira Electrum propriamente dita, vamos instalar seus pré-requisitos:

```
# zypper install python3-setuptools python3-qt5 python3-pip
```

Um apressado, que dispensa verificação de autenticidade, poderia instalar a carteira rodando apenas o comando:

```
# python3 -m pip install https://download.electrum.org/3.2.3/Electrum-3.2.3.tar.gz#egg=electrum[fast]
```

Mas vamos fazer as coisas do jeito mais seguro, como aprendemos no *post*:

- [Verificação de integridade e autenticidade com SHA-256 e GPG][how-to-verify-iso]

Acesse o [*site* da carteira Electrum][electrum] e clique em ***Download***.

Desça até ***Installation from Python sources*** (instalação a partir do código-fonte em Python). Clique em **Electrum-3.2.3.tar.gz** e depois no *link* ***signature*** (assinatura) ao lado:

{% include image.html src="/files/2018/12/electrum-download-01.jpg" %}

Com isso, você deve ter dois novos arquivos na pasta `Downloads`:

1. `Electrum-3.2.3.tar.gz` (o código-fonte) e
2. `Electrum-3.2.3.tar.gz.asc` (a assinatura GPG do código-fonte).

Para obter a chave pública do desenvolvedor, clique no *link* **ThomasV**, no início da página, onde se lê *Sources and executables are signed by ThomasV* (códigos-fonte e executáveis são assinados por ThomasV):

{% include image.html src="/files/2018/12/electrum-download-02.jpg" %}

Na página que abre, veja o grande número em hexadecimal:

{% include image.html src="/files/2018/12/electrum-download-03.jpg" %}

Esse número é a identificação da chave pública do desenvolvedor. Para importá-la, copie o número após `0x` e execute o comando a seguir, colando o número:

```
$ gpg --recv-keys 2bd5824b7f9470e6
```

Opcionalmente, se você possui uma chave GPG, assine a chave pública importada:

```
$ gpg --edit-key 2bd5824b7f9470e6
> trust
> sign
> quit
```

Verifique a assinatura GPG do código-fonte com o comando:

```
$ gpg --verify Electrum-3.2.3.tar.gz.asc
```

Certifique-se de que aparece o aviso de boa assinatura (*good signature*):

```
gpg: assuming signed data in 'Electrum-3.2.3.tar.gz'
gpg: Signature made seg 17 set 2018 08:59:04 -03
gpg:                using RSA key 2BD5824B7F9470E6
gpg: a verificar a base de dados de confiança
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   3  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 3u
gpg: proxima verificação da base de dados de confiança a 2020-10-05
gpg: Good signature from "Thomas Voegtlin (https://electrum.org) <thomasv@electrum.org>" [ultimate]
gpg:                 aka "ThomasV <thomasv1@gmx.de>" [ultimate]
gpg:                 aka "Thomas Voegtlin <thomasv1@gmx.de>" [ultimate]
```

Nesse ponto, se a verificação de autenticidade sucedeu, podemos confiar tranquilamente no código-fonte baixado e seguir à instalação.

A página da Electrum não disponibiliza soma de verificação, mas se a integridade do arquivo estivesse prejudicada, a verificação de autenticidade falharia.

Tentei explicar a verificação de autenticidade de forma resumida. Se algo aqui não fez sentido pra você, leia [o *post* completo sobre verificação de integridade e autenticidade][how-to-verify-iso].

Por fim, vamos à instalação da carteira propriamente dita usando o código-fonte baixado:

```
# python3 -m pip install Electrum-3.2.3.tar.gz
```

## Primeiro uso da carteira Electrum

Para iniciar a carteira Electrum, abra o **panorama de Atividades**, digite `electrum` e clique no ícone correspondente:

{% include image.html src="/files/2018/12/electrum-atividades.jpg" %}

No primeiro uso, a Electrum apresenta um assistente de configuração:

{% include image.html src="/files/2018/12/electrum-config-01.jpg" %}

Para um iniciante, é seguro aceitar todas as configurações padrão clicando em **Próximo**...

{% include image.html src="/files/2018/12/electrum-config-02.jpg" %}
{% include image.html src="/files/2018/12/electrum-config-03.jpg" %}
{% include image.html src="/files/2018/12/electrum-config-04.jpg" %}
{% include image.html src="/files/2018/12/electrum-config-05.jpg" %}

...até chegar nesta tela (**não** clique em **Próximo** ainda):

{% include image.html src="/files/2018/12/electrum-config-06.jpg" %}

Essa tela mostra a **chave privada** (*private key*) ou **semente** (*seed*) da sua **carteira Bitcoin** (*Bitcoin wallet*). Anote-a em um lugar seguro (se você é paranoico com segurança, anote-a em um papel). Ela permitirá recuperar a carteira, caso algo dê errado.

**Somente após anotar** sua chave privada, clique em **Próximo**.

{% include image.html src="/files/2018/12/electrum-config-07.jpg" %}

Essa tela pede que você digite sua chave privada. Digite-a no campo de texto e, caso esteja correta, o botão **Próximo** se tornará disponível. Feito isso, clique nele.

{% include image.html src="/files/2018/12/electrum-config-08.jpg" %}

Na última tela do assistente, você tem a oportunidade de criar uma senha para proteger a carteira, o que é **altamente recomendável**. Caso seu computador seja comprometido (roubado, por exemplo), a carteira estará protegida por senha e não será possível fazer transações com seus Bitcoins nem visualizar seu histórico.

Digite uma senha no campo de cima, digite-a novamente no campo de baixo, certifique-se de que a opção **Criptografar o arquivo da carteira** esteja marcada e clique em **Próximo**.

Encerrado o assistente de configuração, você verá a tela principal da carteira Electrum:

{% include image.html src="/files/2018/12/electrum-tela-inicial.jpg" %}

Sua carteira foi criada em `/home/nomedeusuario/.electrum/wallets/default_wallet`. Esse arquivo é criptografado e armazena o endereço Bitcoin e a chave privada da carteira.

## Depósito: transferir reais do banco para a corretora

Antes de comprar Bitcoins (converter reais em Bitcoins), você precisa transferir reais da sua conta no banco para a conta indicada pela corretora usando TED ou DOC. É importante que a conta bancária seja **sua (em seu nome)**, não no nome de um parente, amigo ou conhecido.

Para fim de demonstração, nesse tutorial vou transferir R$ 100,00 (cem reais). Uma quantia menor talvez não fosse interessante, porque são descontadas taxas nas operações. Lembro mais uma vez da observação do início: a cotação do Bitcoin é volátil, recomendo que você não reproduza esse tutorial se não há necessidade, pois corre o **risco de perder dinheiro**.

O Mercado Bitcoin não cobra taxa dos depósitos, que são reconhecidos no mesmo dia se feitos em dias úteis das 10:00 às 17:00. Para depositar, faça *login* e clique em **Depósitos** no menu à esquerda. Informe o **Valor do depósito** e opcionalmente uma **Descrição**. Por fim, clique em **Confirmar**:

{% include image.html src="/files/2018/12/mercado-bitcoin-deposito-01.jpg" %}

Tome nota dos dados da conta da corretora e clique em **Fechar**:

{% include image.html src="/files/2018/12/mercado-bitcoin-deposito-02.jpg" %}

Enquanto aguarda o depósito, a corretora mostra **Aguardando aprovação**:

{% include image.html src="/files/2018/12/mercado-bitcoin-deposito-03.jpg" %}

Faça a transferência usando o aplicativo ou o *netbanking* do seu banco.

Quando o Mercado Bitcoin identificar o depósito, você receberá um *e-mail*:

{% include image.html src="/files/2018/12/mercado-bitcoin-deposito-04.jpg" %}

Aí poderá proceder à compra de Bitcoins.

## Comprar: converter reais em Bitcoins

No Mercado Bitcoin, contanto que haja **Saldo disponível** em reais, você pode comprar Bitcoins a qualquer hora, mesmo nos finais de semana. Para comprar Bitcoins, clique em **Comprar** no menu à esquerda. Informe o **Valor em Reais** e clique em **Comprar**:

{% include image.html src="/files/2018/12/mercado-bitcoin-compra-01.jpg" %}

Note que é feita a conversão de reais em Bitcoins conforme o **Preço Médio** e depois descontada uma **Comissão**, que no caso do Mercado Bitcoin é de 0,7% (em Bitcoins). A compra é executada de imediato. O **Saldo disponível** em reais diminui e o **Saldo disponível** em **Bitcoin** aumenta de acordo:

{% include image.html src="/files/2018/12/mercado-bitcoin-compra-02.jpg" %}

Assim como no depósito, o Mercado Bitcoin envia um *e-mail* avisando da compra. Também é possível ver o depósito e a compra no **Extrato de operações**. Para acessá-lo, clique em **Ver extrato** no menu à esquerda.

Na corretora, você possui uma carteira e um endereço, mas [não é recomendado deixar seus Bitcoins na corretora][moneytimes]. Carteiras *web* estão sujeitas a ataques *hackers*, então vejamos como transferir nossos recém comprados Bitcoins para a Electrum, nossa carteira *desktop*.

## Transferir Bitcoins para a carteira

Transferências de Bitcoins podem ser feitas a qualquer hora, mesmo nos finais de semana.

Para transferir Bitcoins para a carteira Electrum, abra o aplicativo e selecione a guia **Receber**. Selecione e copie o **Endereço de recebimento**:

{% include image.html src="/files/2018/12/electrum-receber-01.jpg" %}

No Mercado Bitcoin, clique em **Transferir** no menu à esquerda. Cole o endereço copiado em **Endereço bitcoin de destino** e informe a **Quantidade** de Bitcoins a transferir:

{% include image.html src="/files/2018/12/electrum-receber-02.jpg" %}

Note que a **Quantidade** não pode ser exatamente igual ao **Saldo disponível** em **Bitcoin**, porque há a **Taxa dos mineradores** a ser paga. Essa taxa é somada à **Quantidade** e informada em **Total**, que deve ser menor ou igual ao saldo. Opcionalmente, você pode informar uma **Descrição** para a transferência. Se configurou a autenticação em dois passos, preencha o campo **Token**. Quando terminar, clique em **Transferir Bitcoins**.

O Mercado Bitcoin envia um *e-mail* avisando que fez a transferência.

Volte à carteira Electrum, selecione a guia **Histórico** e perceba que a transação já aparece:

{% include image.html src="/files/2018/12/electrum-receber-03.jpg" %}

A transação já foi divulgada a todos os usuários da rede (*broadcasting*), mas ainda não foi confirmada (*unconfirmed*). Na sequência, os mineradores devem confirmar a transação. Enquanto a transação é confirmada, os Bitcoins ainda não podem ser usados - perceba que a barra de estado mostra **Balanço: 0**, como se ainda não houvesse Bitcoins na carteira.

Você pode ver mais informações sobre a transferência clicando com o botão direito nela e clicando em seguida em **Detalhes**. Aparece uma caixa de diálogo que mostra, entre outras coisas, a **Taxa** que foi paga aos mineradores:

{% include image.html src="/files/2018/12/electrum-receber-04.jpg" %}

O processo de confirmação é automático, não requer intervenção humana, apenas o trabalho dos computadores conectados à rede Bitcoin. Após algumas confirmações (normalmente, pelo menos seis), a transação é confirmada:

{% include image.html src="/files/2018/12/electrum-receber-05.jpg" %}

Com isso, a transação é registrada no *blockchain* e os Bitcoins já podem ser usados. Note o balanço (saldo) atualizado na barra de estado. No meu caso, o processo de confirmação demorou 1 hora. Poderia ter demorado menos, se eu tivesse pago uma taxa maior.

## Transferir Bitcoins da carteira

Para exemplificar a transferência de Bitcoins a partir da carteira Electrum, vejamos como devolvê-los para a corretora.

No Mercado Bitcoin, clique em **Receber** no menu à esquerda e copie o endereço informado:

{% include image.html src="/files/2018/12/electrum-enviar-01.jpg" %}

Abra a carteira Electrum, selecione a guia **Enviar**, cole o endereço no campo **Pagar para** e informe a **Quantidade** de Bitcoins a ser transferida. Caso deseje transferir todos os Bitcoins, clique no botão **Máximo**. Opcionalmente, forneça uma **Descrição** para a transferência:

{% include image.html src="/files/2018/12/electrum-enviar-02.jpg" %}

Aqui também você deve se atentar à taxa: o valor total da transação é a soma da **Quantidade** com a **Taxa**. O campo **Quantidade** é destacado em vermelho caso não haja saldo disponível. Você pode personalizar a taxa a ser paga aos mineradores deslizando o controle **Taxa** para a esquerda ou direita conforme deseje reduzir ou aumentar a taxa, respectivamente.

Clique em **Visualização** antes de fazer a transferência. Aparece uma caixa de diálogo que mostra, entre outras coisas, a **Taxa** que será paga aos mineradores:

{% include image.html src="/files/2018/12/electrum-enviar-03.jpg" %}

A transação pode ser efetivada na própria caixa de diálogo **Transação**, clicando em **Assinar** e depois em **Transmitir**, ou você pode **Fechar** essa caixa de diálogo e, de volta à tela principal da Electrum, clicar em **Enviar**.

A Electrum pede a senha da carteira, informe-a e clique em **Concluído**:

{% include image.html src="/files/2018/12/electrum-enviar-04.jpg" %}

Em seguida, é informado que houve a divulgação (*broadcasting*) da transação, clique em **OK**:

{% include image.html src="/files/2018/12/electrum-enviar-05.jpg" %}

Selecione a guia **Histórico** e acompanhe o processo de confirmação:

{% include image.html src="/files/2018/12/electrum-enviar-06.jpg" %}

Assim que foi divulgada, a transação ainda aparece como não confirmada (*unconfirmed*). Conforme vai recebendo confirmações, a Electrum vai atualizando o ícone da transação:

{% include image.html src="/files/2018/12/electrum-enviar-07.jpg" %}

Após algumas confirmações (normalmente, pelo menos seis), a transação é confirmada. O processo para essa transação também demorou 1 hora.

Quando a transação é confirmada, o Mercado Bitcoin envia *e-mail* informando que a recebeu e já é possível ver o **Saldo disponível** em **Bitcoin** e o **Extrato de operações** atualizados.

Horas depois, é possível ver que a transação segue recebendo confirmações:

{% include image.html src="/files/2018/12/electrum-enviar-08.jpg" %}

**Observação:** em transações de Bitcoins, não memorize endereços, pois eles podem mudar. Sempre confira para qual endereço deve enviar Bitcoins. Não vou explicar aqui, mas caso queira saber mais, pesquise sobre [endereços de troco (*change addresses*)][change-addresses].

## Vender: converter Bitcoins em reais

No Mercado Bitcoin, contanto que haja **Saldo disponível** em **Bitcoin**, você pode vender Bitcoins a qualquer hora, mesmo nos finais de semana. Para vender Bitcoins, clique em **Vender** no menu à esquerda. Informe a **Quantidade de Bitcoins** e clique em **Vender**:

{% include image.html src="/files/2018/12/mercado-bitcoin-venda.jpg" %}

Note que é feita a conversão de Bitcoins em reais conforme o **Preço Médio** e depois descontada uma **Comissão**, que no caso do Mercado Bitcoin é de 0,7% (em reais). A venda é executada de imediato. O **Saldo disponível** em **Bitcoin** diminui e o **Saldo disponível** em reais aumenta de acordo. Assim como na compra, o Mercado Bitcoin envia um *e-mail* avisando da venda e também é possível ver a operação no **Extrato de operações**.

## Saque: transferir reais da corretora para o banco

No Mercado Bitcoin, contanto que haja **Saldo disponível** em reais, você pode solicitar saque de reais para sua conta bancária a qualquer hora. Se solicitado até às 18 horas, o saque será efetuado em um prazo máximo de 3 dias úteis.

Para sacar, clique em **Saque** no menu à esquerda:

{% include image.html src="/files/2018/12/mercado-bitcoin-saque.jpg" %}

Selecione a **Conta bancária** (assim como no depósito, deve ser em seu nome), informe o **Valor da retirada** (se deseja sacar todo o saldo disponível, clique no botão **Saldo**), verifique a **Comissão** cobrada (1,99% + R$ 2,90) e o valor que **Será despositado**. Informe o **PIN de segurança** e opcionalmente uma **Descrição** para o saque. Por fim, clique em **Solicitar saque**.

Feito isso, é só aguardar o valor do saque entrar na sua conta bancária até o prazo estimado. Confira seu extrato bancário!

## Conclusão

Nesse tutorial, entendemos como funciona o Bitcoin, instalamos a carteira Electrum e vimos como manusear o Bitcoin na prática, comprando, transferindo e vendendo Bitcoins.

Se um dia você precisar transacionar Bitcoins, já dispõe do mínimo necessário para começar. Espero que tenha gostado e que possa ser útil.

Siga o Linux Kamarada para ser notificado da publicação de outros textos como esse.

## Referências

- [Bitcoin: A Peer-to-Peer Electronic Cash System][bitcoin-paper] (artigo do Bitcoin)
- [O que é Bitcoin e como investir? - Empiricus][empiricus]
- [Como o Bitcoin funciona? - Bitcoin][bitcoin-como-funciona]
- [Bitcoin: o que é e como usar? - Politize!][politize]
- [O que é bitcoin? Perguntas e respostas sobre a moeda virtual - TechTudo][techtudo]
- [Bitcoin - O que é e como ganhar dinheiro com ele? - Você MAIS Rico][voce-mais-rico]
- [As melhores corretoras de Bitcoin no Brasil - Feras do Bitcoin][corretoras]
- [5 of the Best Bitcoin Clients for Linux - Make Tech Easier][maketecheasier]
- [A Beginner's Guide to the Electrum Bitcoin Wallet - Bitzuma][bitzuma-electrum]

[bitcoin]:                  https://bitcoin.org
[especulacao]:              https://www.repositorio.blog/pt/2018/o-mundo-em-bitcoin-valor-e-preco/
[lojas-servicos]:           http://blog.negociecoins.com.br/lojas-aceitam-bitcoins
[wikimedia]:                https://donate.wikimedia.org/wiki/Ways_to_Give#Bitcoin
[electrum]:                 https://electrum.org
[opensuse-leap]:            https://www.opensuse.org
[opensuse-leap-15]:         {% post_url pt/2018-05-25-baseado-no-codigo-do-enterprise-testado-milhoes-de-vezes-opensuse-leap-15-lancado %}
[electrum-release-notes]:   https://github.com/spesmilo/electrum/blob/3.2.3/RELEASE-NOTES
[empiricus]:                https://www.empiricus.com.br/artigos/bitcoin/

[bitcoin-paper]:            https://bitcoin.org/bitcoin.pdf
[p2p]:                      https://pt.wikipedia.org/wiki/Peer-to-peer
[torrent]:                  https://www.techtudo.com.br/noticias/noticia/2015/06/o-que-e-torrent-e-como-funciona.html
[broadcasting]:             https://pt.wikipedia.org/wiki/Broadcasting_(rede_de_computadores)
[criptografia]:             https://noticias.r7.com/tecnologia-e-ciencia/tudo-que-voce-sempre-quis-saber-sobre-criptografia-e-nao-perguntou-24012018
[mineracao]:                https://guiadobitcoin.com.br/o-que-considerar-antes-de-iniciar-uma-operacao-de-mineracao-de-bitcoin/
[google-bitcoin]:           https://www.google.com.br/search?q=Bitcoin
[google-criptomoedas]:      https://www.google.com.br/search?q=criptomoedas

[oferta-e-procura]:         https://pt.wikipedia.org/wiki/Lei_da_oferta_e_da_procura
[google-btc]:               https://www.google.com/search?q=bitcoin+real

[mercadobitcoin]:           https://www.mercadobitcoin.com.br/
[bitcointoyou]:             https://pt.bitcointoyou.com/
[coinbr]:                   https://coinbr.net/
[foxbit]:                   https://foxbit.com.br/
[flowbtc]:                  https://www.flowbtc.com.br/
[bitcointrade]:             https://www.bitcointrade.com.br/
[corretoras]:               https://ferasdobitcoin.com/corretoras-de-bitcoin-no-brasil/
[bitcoin-cash]:             https://www.bitcoincash.org
[litecoin]:                 https://litecoin.com
[xrp]:                      https://ripple.com

[tipos-de-carteiras]:       https://guiadobitcoin.com.br/tipos-de-carteira-bitcoin-escolha-a-sua/
[bitcoin-wallets]:          https://bitcoin.org/pt_BR/escolha-sua-carteira
[linux]:                    https://www.vivaolinux.com.br/linux/
[opensource]:               https://pt.wikipedia.org/wiki/Software_de_código_aberto
[bitcoin-core]:             https://bitcoin.org/en/bitcoin-core/
[bitcoinknots]:             https://bitcoinknots.org
[armory]:                   https://www.bitcoinarmory.com
[bither]:                   https://bither.net
[windows]:                  https://www.microsoft.com/pt-br/windows/
[macosx]:                   http://www.apple.com/br/macosx/
[android]:                  https://www.android.com/
[ios]:                      https://www.apple.com/br/ios/
[bitzuma-electrum]:         https://bitzuma.com/posts/a-beginners-guide-to-the-electrum-bitcoin-wallet/
[how-to-verify-iso]:        {% post_url pt/2018-10-06-verificacao-de-integridade-e-autenticidade-com-sha-256-e-gpg %}
[github]:                   https://github.com/spesmilo/electrum

[moneytimes]:               https://moneytimes.com.br/por-que-voce-nao-deveria-comprar-ou-deixar-bitcoin-em-nenhuma-corretora/

[change-addresses]:         https://bitzuma.com/posts/who-needs-bitcoin-change-addresses-anyway/

[bitcoin-como-funciona]:    https://bitcoin.org/pt_BR/como-funciona
[politize]:                 https://www.politize.com.br/bitcoin-o-que-e-como-usar/
[techtudo]:                 https://www.techtudo.com.br/artigos/noticia/2012/05/o-que-e-bitcoin.html
[voce-mais-rico]:           https://vocemaisrico.com/bitcoin-o-que-e-e-como-ganhar/
[maketecheasier]:           https://www.maketecheasier.com/bitcoin-clients-for-linux/

