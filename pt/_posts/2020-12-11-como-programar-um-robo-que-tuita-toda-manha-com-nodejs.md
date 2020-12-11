---
date: '2020-12-11 19:10:00 GMT-3'
image: '/files/2020/12/twitter-bot.jpg'
layout: post
published: true
nickname: 'twitter-bot'
title: 'Como programar um robô que tuíta toda manhã com Node.js'
---

{% include image.html src="/files/2020/12/twitter-bot.jpg" %}

Esse é mais um da série: [resolvendo problemas do dia a dia de forma criativa com _scripts_][python-colors].

Provavelmente você já conhece a rede social [Twitter]. Se acompanha as notícias, talvez já tenha ouvido falar em robôs do Twitter. Mas o que são esses robôs do Twitter?

Um [**robô (_bot_) do Twitter**][twitter-bot] é um programa de computador que controla uma conta do Twitter. Ele consegue fazer praticamente todas as ações que um usuário humano pode fazer no Twitter: tuitar, retuitar, curtir, seguir ou deixar de seguir outras contas, enviar ou responder mensagens diretas, monitorar tuítes contendo determinada palavra ou _hashtag_.

Robôs podem ser usados para as mais diversas finalidades: eu já vi robôs que compartilham a previsão do tempo de cidades, tem um robô que retuíta postagens sobre [Linux] que é o [@LlnuxBot][linuxbot] (sic) — quase sempre ele retuíta as postagens do [@LinuxKamarada][kamarada-twitter]. Há também robôs mais polêmicos, que disparam mensagens em crítica ou apoio a políticos.

Nesse tutorial, você verá como programar um robô do Twitter. Aqui, vou usar como referência o sistema operacional Linux, mais especificamente a distribuição [Linux Kamarada][kamarada-15.2]. Usuários do [openSUSE] ou derivados também podem seguir à risca esse tutorial.

As tecnologias que vou usar não são exclusivas do Linux ou do Linux Kamarada, de modo que usuários de outros sistemas, como, por exemplo, [Windows] ou [macOS], com alguma pesquisa adicional também podem reproduzir esse tutorial.

Na verdade, o objetivo desse texto não é ser uma aula completa de programação nos mínimos detalhes, mas um estudo de caso de como programação pode ser usada de forma simples para resolver problemas simples do dia a dia, e quem sabe te motivar a aprender a programar. Ao longo do texto, deixarei _links_ onde você pode ler mais sobre os componentes.

Todo estudo de caso começa com a análise do problema a ser resolvido. Então, vamos lá.

Por que eu decidi criar um robô do Twitter?

## O problema

Nessa seção, vou tirar um pouco o chapéu de "eu técnico" e ser apenas o "eu pessoa". Você pode imaginar como se o "eu pessoa" estivesse demandando um serviço para o "eu técnico."

Nesse ano de 2020, é desnecessária uma longa introdução sobre o tema [Covid-19]. A pandemia, seu avanço e medidas de prevenção são constantemente abordadas pelos jornais e discutidas pelas pessoas. Inclusive eu já fiz um texto aqui sobre como seu computador com Linux pode ajudar nas pesquisas científicas sobre a Covid-19:

- [Folding@home: veja como seu PC pode ajudar as pesquisas sobre a Covid-19][fah]

No entanto, pessoalmente, me incomoda a percepção de que alguns veículos de mídia trazem com muita ênfase os dados **total acumulado de casos confirmados** e **total acumulado de mortes**, mas não trazem o dado **total acumulado de casos recuperados**. Veja bem, não é que eles trazem esse dado com pouca ênfase: eles **simplesmente não trazem**.

{% include image.html src="/files/2020/12/g1-covid.jpg" caption="Exemplo de [notícia do G1](https://g1.globo.com/bemestar/coronavirus/noticia/2020/12/10/casos-e-mortes-por-coronavirus-no-brasil-em-10-de-dezembro-segundo-consorcio-de-veiculos-de-imprensa.ghtml) que enumera os casos confirmados e as mortes, mas não os casos recuperados." %}

Experimente abrir qualquer uma das notícias a seguir, teclar **Ctrl + F** e procurar na página por `recupera` (não precisa digitar a palavra toda, na verdade essa pesquisa poderia trazer várias palavras parecidas, como `recuperar`, `recuperados`, `recuperaram`, `recuperação`, etc.):

- 10 de dezembro: [Brasil se aproxima de 180 mil mortos por Covid-19 com alta nas médias móveis de óbitos e casos \| Coronavírus \| G1][g1-dez-10]
- 9 de dezembro: [Com 848 óbitos por coronavírus em 24 horas, Brasil tem recorde com alta de mortes em 21 estados e no DF \| Coronavírus \| G1][g1-dez-09]
- 8 de dezembro: [Brasil tem quase 800 mortes por Covid em 24 horas, e passa de 178 mil no total \| Coronavírus \| G1][g1-dez-08]
- 7 de dezembro: [Média móvel de mortes por Covid no Brasil volta a ficar acima de 600 por dia; 17 estados e DF têm alta nos óbitos \| Coronavírus \| G1][g1-dez-07]
- 6 de dezembro: [Brasil tem média de 588 mortes por Covid-19 por dia, a mais alta em quase dois meses \| Coronavírus \| G1][g1-dez-06]
- 5 de dezembro: [Brasil passa de 176 mil mortes por Covid-19; 17 estados e o DF têm tendência de alta nas mortes \| Coronavírus \| G1][g1-dez-05]
- 4 de dezembro: [Brasil passa marca de 6,5 milhões de casos de Covid; 18 estados têm tendência de alta nas mortes \| Coronavírus \| G1][g1-dez-04]

O navegador vai informar que não encontrou nada parecido com `recupera` nessas páginas.

Uma estatística mais completa — que inclui o total acumulado de casos recuperados — pode ser obtida no _site_ do Ministério da Saúde sobre a Covid-19 ([covid.saude.gov.br][covid-saude]):

{% include image.html src="/files/2020/12/covid-saude-gov.jpg" %}

Repare que os números desse _site_ não são exatamente iguais aos daquela notícia, mas são bem próximos. Isso pode ser devido aos diferentes horários em que foram atualizados.

Minha opinião é que as pessoas deveriam ser informadas das estatísticas completas. Se, por um lado, o número de mortes pode trazer medo, por outro lado, o número de recuperados (muito maior, aliás) pode trazer esperança, que nesse momento muita gente precisa. E foi pensando em balancear essa divulgação de informações que eu decidi criar um robô do Twitter para divulgar todo dia o número de recuperados até o momento.

Certo, vestindo de novo o chapéu do "eu técnico" a partir de agora...

**Resumo:** o objetivo é desenvolver um robô que todo dia vai obter do _site_ do governo o número de pessoas que se recuperaram da Covid-19 até o momento e compartilhar esse número no Twitter.

## Lista de "ingredientes"

Para desenvolver esse robô, que será em formato de um _script_, vamos precisar de:

1. Uma linguagem de programação;
2. Uma conta no Twitter (uma conta normal e uma conta de desenvolvedor);
3. Uma forma de tuitar a partir do _script_;
4. Uma forma rodar o _script_ de tempos em tempos; e
5. Uma forma de o _script_ obter os números do _site_ do governo.

## 1) Linguagem: JavaScript

Como vamos obter informações a partir de uma página da Internet, pensei que não haveria linguagem de programação melhor para implementar nosso robô que aquela já presente nos navegadores e já usada em muitos _sites_: **[JavaScript]**.

Vejamos como extrair da página o número de recuperados usando JavaScript.

Clique com o botão direito do _mouse_ em cima do número de casos recuperados e clique em **Inspecionar Elemento**:

{% include image.html src="/files/2020/12/twitter-bot-01.jpg" %}

Aqui estou usando o navegador [Mozilla Firefox][firefox], mas isso pode ser feito de forma semelhante em qualquer navegador.

Identifique no código-fonte onde está o número de recuperados:

{% include image.html src="/files/2020/12/twitter-bot-02.jpg" %}

Perceba que ele é um texto dentro da primeira `<div>` de classe `lb-total` da página.

Alterne para a aba **Console** e execute o seguinte comando em JavaScript:

```js
document.getElementsByClassName('lb-total')[0].lastChild.data.trim()
```

Ele retorna direitinho o número de recuperados como está na página:

{% include image.html src="/files/2020/12/twitter-bot-03.jpg" %}

Confesso que "descobrir" esse comando foi uma combinação de pesquisa e tentativa e erro.

Mas aí pode surgir a pergunta: normalmente o JavaScript é usado dentro de _sites_ e navegadores. Podemos usá-lo também para escrever programas de computador _desktop_?

Desde 2009, a resposta a essa pergunta é sim, graças ao **[Node.js]**, que é um ambiente de execução (_runtime_) do JavaScript que permite desenvolver tanto sistemas _web_ quanto programas _desktop_ usando essa linguagem de programação.

Para [instalar o Node.js no openSUSE][nodejs-opensuse], abra uma janela do **Terminal** e execute como _root_:

```
# zypper in nodejs14
```

Para referência futura, hoje esse comando instala no [openSUSE Leap 15.2][leap-15.2] (assim como no [Linux Kamarada 15.2][kamarada-15.2]) a versão 14.15.0 do Node.js, e no [openSUSE Tumbleweed][tumbleweed] a versão 14.15.1. Você pode pesquisar pelos pacotes do Node.js em [software.opensuse.org][softwareoo].

O [_site_ do Node.js][node.js] oferece as versões 14.15.1 LTS (suporte por mais tempo) ou 15.3.0 Atual.

O comando acima também instala, além do Node.js, o **[NPM]**, que é o _Node Package Manager_ (gerenciador de pacotes do Node.js). Vamos usá-lo para instalar as bibliotecas de terceiros que vamos precisar para desenvolver nosso robô.

Dando prosseguimento, execute o comando a seguir para se certificar de que o Node.js está funcionando, ele deve informar a versão do Node.js que foi instalada:

```
$ node -v
v14.15.0
```

Façamos um rápido "olá, mundo" em JavaScript com Node.js.

Para isso, crie uma pasta para o projeto. Vou chamá-la de `twitter-bot`.

Abra o aplicativo **Editor de texto**, copie o seguinte conteúdo e cole dentro do editor:

```js
console.log ('Olá, mundo!');
```

Salve esse arquivo dentro da pasta do projeto com o nome `robo.js`.

No terminal, na pasta do projeto, execute o _script_ com o comando a seguir:

```
$ node robo.js
Olá, mundo!
```

Como prometido, não entrarei em detalhes. Se quiser mais informações, consulte:

- [Node.js tutorial - w3big.com][w3big] (em português)

Linguagem escolhida, ambiente instalado e testado, vamos para o próximo passo.

## 2) Criando as contas no Twitter

Vamos precisar de uma conta (normal) no Twitter e uma conta de desenvolvedor do Twitter.

Não vou mostrar aqui como criar uma conta no Twitter porque é trivial: você acessa [twitter.com][twitter], clica no botão **Inscrever-se** e segue as instruções na tela. Se você já tem uma conta pessoal no Twitter, pode usá-la para o robô, se quiser.

Eu preferi criar uma conta só para o robô: [@RecuperaCovidBR][recuperacovidbr].

Para criar uma conta de desenvolvedor do Twitter, acesse o [Twitter Developer][twitter-developer] (Twitter para desenvolvedores) em [developer.twitter.com][twitter-developer] e clique em **Apply** (candidatar). Não vou entrar em detalhes de como criar essa conta, mas resumidamente o Twitter vai te pedir informações sobre você e o que pretende fazer com o robô. Todas as telas são em inglês.

Com a conta de desenvolvedor já criada, vamos precisar cadastrar o robô (_bot_) como um aplicativo (_app_) e obter as chaves de acesso. Vejamos como fazer isso.

Na página inicial do [Twitter Developer][twitter-developer], clique em **Developer Portal** (portal do desenvolvedor):

{% include image.html src="/files/2020/12/twitter-bot-04.jpg" %}

À esquerda, expanda **Projects & Apps** (projetos e aplicativos), clique em **Overview** (visão geral). À direita, em **Standalone Apps** (aplicativos "soltos", que não pertencem a um projeto), clique em **Create App** (criar aplicativo):

{% include image.html src="/files/2020/12/twitter-bot-05.jpg" %}

Dê um nome para o seu aplicativo e clique em **Complete** (completar):

{% include image.html src="/files/2020/12/twitter-bot-06.jpg" %}

Na tela seguinte, copie as informações desses campos e salve-as em algum lugar seguro:

{% include image.html src="/files/2020/12/twitter-bot-07.jpg" %}

À esquerda, clique no aplicativo recém-criado. À direita, em **App permissions** (permissões do aplicativo), clique em **Edit** (editar):

{% include image.html src="/files/2020/12/twitter-bot-08.jpg" %}

Mude do padrão **Read Only** (somente leitura) para **Read and Write** (leitura e escrita), para que o robô possa tuitar usando a conta.

De volta à tela anterior, mude da aba **Settings** (configurações) para a aba **Keys and tokens** (chaves e _tokens_). Em **Access token & secret** (_token_ de acesso e segredo), clique em **Generate** (gerar):

{% include image.html src="/files/2020/12/twitter-bot-09.jpg" %}

Também nessa tela, copie as informações desses campos para algum lugar seguro:

{% include image.html src="/files/2020/12/twitter-bot-10.jpg" %}

## 3) Twit: cliente do Twitter para Node.js

Agora a brincadeira vai começar a ficar realmente interessante. Vamos fazer nosso _script_ tuitar "Olá, Twitter!" Para isso, vamos usar a biblioteca **[twit]** do Node.js. Vamos usar também a biblioteca **[dotenv]** para armazenar aquelas chaves do aplicativo separadas do código.

Como vamos começar a usar bibliotecas de terceiros, vamos inicializar um projeto do NPM para gerenciar as dependências. Na pasta do robô, execute o comando:

```
$ npm init -y
```

Então, instale as bibliotecas necessárias:

```
$ npm install dotenv twit
```

Crie um arquivo com o nome `.env` com o seguinte conteúdo:

```
CONSUMER_KEY=........................................
CONSUMER_SECRET=.....................................
ACCESS_TOKEN_KEY=....................................
ACCESS_TOKEN_SECRET=.................................
```

E cole as chaves obtidas na etapa anterior, na mesma sequência, pulando o **Bearer token**.

Agora substitua o conteúdo do _script_ `robo.js` pelo seguinte:

```js
const Twit = require('twit');

require('dotenv').config();

function tuitar(mensagem) {
    var twitter = new Twit({
        consumer_key:         process.env.CONSUMER_KEY,
        consumer_secret:      process.env.CONSUMER_SECRET,
        access_token:         process.env.ACCESS_TOKEN,
        access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
        timeout_ms:           60*1000,
        strictSSL:            true
    });
    twitter.post('statuses/update',
    {
        status: mensagem
    },
    function(err, data, response) {
        console.log(data)
    });
}

async function main() {
    tuitar('Olá, Twitter!');
}

main();
```

Salve o _script_ e execute-o:

```
$ node robo.js
```

Parabéns, seu robô acabou de dizer "olá" para o Twitter:

{% include image.html src="/files/2020/12/twitter-bot-11.jpg" %}

Se quiser mais informações sobre o que acabamos de fazer nessa etapa, consulte:

- [Twitter Bot: Aprenda a criar um bot para a rede social \| MaisTecnologia][maistecnologia] (em português)
- [Build A Twitter Bot Using NodeJS - LoginRadius Engineering][loginradius] (em inglẽs)

## 4) Agendando tarefas com o node-cron

No Linux, podemos agendar que o sistema execute programas ou _scripts_ em determinada data e hora ou de tempos em tempos. Para isso, configuramos o serviço **[cron]** usando o comando **[crontab]**. Existe um equivalente no Node.js que é a biblioteca **[node-cron]**.

Lembremos que o _script_ deve ser executado uma vez ao dia, de manhã. Eu poderia deixar o _script_ como está e fazer esse agendamento a nível de sistema usando o cron. Mas vou preferir usar a biblioteca node-cron e modificar o _script_ para ele mesmo se repetir.

Comece instalando a biblioteca node-cron:

```
$ npm install node-cron
```

Adicione ao início do _script_ a importação dessa biblioteca:

```js
const Cron = require('node-cron');
```

No final do _script_, comente a chamada à função `main()` e adicione o agendamento:

```js
// main();

Cron.schedule('*/2 * * * * *', () => {
    console.log('Esse agendamento roda segundo sim, segundo não');
});
```

A expressão `*/2 * * * * *` é um jargão próprio do cron e quer dizer que o agendamento deve ser executado em metade de todos os segundos, ou seja, segundo sim, segundo não. Existem ferramentas _online_ que podem te ajudar a escrever essas expressões, como [crontab.guru](https://crontab.guru/) ou [cronjob.xyz](https://cronjob.xyz/). Note que o cron do Linux permite agendar só até minutos, enquanto a biblioteca node-cron permite agendar até segundos, mas a sintaxe é semelhante.

Salve e execute o _script_ e veja que ele escreve no terminal segundo sim, segundo não:

```
$ node robo.js
Esse agendamento roda segundo sim, segundo não
Esse agendamento roda segundo sim, segundo não
Esse agendamento roda segundo sim, segundo não
```

O _script_ não vai parar sozinho. Para interrompê-lo, tecle **Ctrl + C**.

Você pode modificar o trecho do agendamento para:

```js
Cron.schedule('30 6 * * *', () => {
    console.log('Bom dia!');
});
```

Nesse caso, se você iniciar o _script_ e deixar o computador ligado, verá que todo dia às 6:30 da manhã ele te dará bom dia. Simpático ele, não?

Se quiser mais informações sobre o que acabamos de fazer nessa etapa, consulte:

- [Criando e configurando CronJobs com NodeJS \| by Manacés Pereira \| Manacés Pereira \| Medium][manacespereira] (em português)
- [Scheduling tasks in Node.js using node-cron - LogRocket Blog][logrocket] (em inglẽs)

## 5) Obtendo números do site do governo

Para obter o número de pessoas recuperadas do _site_ do governo, vamos usar uma técnica conhecida como _**[web scraping][web-scraping]**_ (coleta de dados _web_), que consiste em baixar automaticamente uma página da Internet e depois extrair informações específicas dela.

Para isso, vamos usar a biblioteca **[Puppeteer]** do Node.js, que inicia uma instância do navegador [Chromium] nos bastidores e permite controlá-la via programação. A maioria das coisas que você pode fazer manualmente no navegador podem ser feitas via programação com o Puppeteer, inclusive usar as ferramentas do desenvolvedor, como fizemos antes.

Comece instalando a biblioteca Puppeteer:

```
$ npm install puppeteer
```

Adicione ao início do _script_ a importação dessa biblioteca:

```js
const puppeteer = require('puppeteer');
```

Adicione ao _script_ também a função `obterNumeroDeRecuperados()`:

```js
async function obterNumeroDeRecuperados() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1024,
        height: 768,
    });
    await page.goto('https://covid.saude.gov.br/', {
        timeout: 60*1000,
        waitUntil: 'networkidle2'
    });
    var recuperados = await page.evaluate(() => {
        var numeroNaPagina = document.getElementsByClassName('lb-total')[0].lastChild.data.trim();
        return numeroNaPagina
    });
    await browser.close();
    return recuperados;
}
```

No final do _script_, remova o agendamento, descomente a chamada à função `main()` e também mude a implementação dessa função:

```js
async function main() {
    var recuperados = await obterNumeroDeRecuperados();
    console.log(recuperados);
}

main();
```

Salve e execute o _script_. Aguarde alguns segundos e você terá o número obtido do _site_:

```
$ node robo.js
5.931.777
```

Se quiser mais informações sobre o que acabamos de fazer nessa etapa, consulte:

- [Node.js: web scraping com Puppeteer \| Fábio Jânio \| Medium][fabiojanio] (em português)
- [How to scrape the web with JavaScript - Peter Beshai][beshaimakes] (em inglês)

## Unindo tudo

Pois bem, já temos tudo de que precisamos, chegou a hora de unir todos os "ingredientes" e fazer o robô funcionar. Ao final, o _script_ deve apresentar: as importações das bibliotecas e as funções `obterNumeroDeRecuperados()` e `tuitar()`. Remova a implementação da função `main()` e sua chamada e adicione o código a seguir:

```js
async function main() {
    var recuperados = await obterNumeroDeRecuperados();
    var tuite = 'Bom dia!\n';
    tuite += '\n';
    tuite += recuperados + ' brasileiros se recuperaram da #Covid19 até o momento\n';
    tuite += '\n';
    tuite += 'Fonte: https://covid.saude.gov.br';
    tuitar(tuite);
}

Cron.schedule('30 6 * * *', () => {
    main();
});
```

Agora é só iniciar o _script_ e deixá-lo rodando com o computador ligado:

```
$ node robo.js
```

No dia seguinte, passada 6:30 da manhã, o robô terá tuitado o número de recuperados:

{% include image.html src="/files/2020/12/twitter-bot-12.jpg" %}

Se não quiser esperar o dia seguinte para testar o robô, mude a expressão do agendamento. Por exemplo, se agora são 19:28, você pode agenda-lo para as 19:30 com: `30 19 * * *`.

Você deve interromper o robô sempre antes de fazer qualquer alteração no seu código-fonte, ou quando não precisar mais dele. Para interromper o robô, tecle **Ctrl + C**.

## Conclusão

Publiquei o código-fonte do robô como está agora e demais arquivos que usei no GitHub:

- [kamarada/twitter-bot - GitHub][github] (a versão desse tutorial está no _commit_ [`e1509be`][e1509be])

Se quiser saber diariamente quantas pessoas já se recuperaram da Covid-19, siga meu robô [@RecuperaCovidBR][recuperacovidbr] no Twitter. Siga também o [@LinuxKamarada][kamarada-twitter] se quiser saber de novos textos como esse. Se tiver dúvidas, escreva nos comentários. Até mais!

[python-colors]:        {% post_url pt/2020-07-13-resolvendo-problemas-de-forma-criativa-com-scripts-comparando-paletas-de-cores-usando-python %}
[twitter]:              https://twitter.com/
[twitter-bot]:          https://en.wikipedia.org/wiki/Twitter_bot
[linux]:                https://www.vivaolinux.com.br/linux/
[linuxbot]:             https://twitter.com/LlnuxBot
[kamarada-twitter]:     https://twitter.com/LinuxKamarada
[kamarada-15.2]:        {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[opensuse]:             https://www.opensuse.org/
[windows]:              https://www.microsoft.com/pt-br/windows/
[macos]:                https://www.apple.com/br/macos/
[covid-19]:             https://pt.wikipedia.org/wiki/COVID-19
[fah]:                  {% post_url pt/2020-05-02-folding-at-home-veja-como-seu-pc-pode-ajudar-as-pesquisas-sobre-a-covid-19 %}
[g1-dez-10]:            https://g1.globo.com/bemestar/coronavirus/noticia/2020/12/10/casos-e-mortes-por-coronavirus-no-brasil-em-10-de-dezembro-segundo-consorcio-de-veiculos-de-imprensa.ghtml
[g1-dez-09]: https://g1.globo.com/bemestar/coronavirus/noticia/2020/12/09/casos-e-mortes-por-coronavirus-no-brasil-em-9-de-dezembro-segundo-consorcio-de-veiculos-de-imprensa.ghtml
[g1-dez-08]:            https://g1.globo.com/bemestar/coronavirus/noticia/2020/12/08/casos-e-mortes-por-coronavirus-no-brasil-em-8-de-dezembro-segundo-consorcio-de-veiculos-de-imprensa.ghtml
[g1-dez-07]:            https://g1.globo.com/bemestar/coronavirus/noticia/2020/12/07/casos-e-mortes-por-coronavirus-no-brasil-em-7-de-dezembro-segundo-consorcio-de-veiculos-de-imprensa.ghtml
[g1-dez-06]:            https://g1.globo.com/bemestar/coronavirus/noticia/2020/12/06/casos-e-mortes-por-coronavirus-no-brasil-em-6-de-dezembro-segundo-consorcio-de-veiculos-de-imprensa.ghtml
[g1-dez-05]:            https://g1.globo.com/bemestar/coronavirus/noticia/2020/12/05/casos-e-mortes-por-coronavirus-no-brasil-em-5-de-dezembro-segundo-consorcio-de-veiculos-de-imprensa-atualizacao-das-13h.ghtml
[g1-dez-04]:            https://g1.globo.com/bemestar/coronavirus/noticia/2020/12/04/casos-e-mortes-por-coronavirus-no-brasil-em-4-de-dezembro-segundo-consorcio-de-veiculos-de-imprensa.ghtml?utm_source=twitter&utm_medium=social&utm_campaign=g1
[covid-saude]:          https://covid.saude.gov.br/
[javascript]:           https://pt.wikipedia.org/wiki/JavaScript
[firefox]:              https://www.mozilla.org/pt-BR/firefox/
[node.js]:              https://nodejs.org/pt-br/
[nodejs-opensuse]:      https://nodejs.org/pt-br/download/package-manager/#opensuse-e-sle
[leap-15.2]:            {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[tumbleweed]:           {% post_url pt/2020-12-06-opensuse-leap-e-opensuse-tumbleweed-qual-e-a-diferenca %}
[softwareoo]:           https://software.opensuse.org/search?q=nodejs
[npm]:                  https://www.npmjs.com/
[w3big]:                http://www.w3big.com/pt/nodejs/default.html
[recuperacovidbr]:      https://twitter.com/RecuperaCovidBR
[twitter-developer]:    https://developer.twitter.com/en
[twit]:                 https://www.npmjs.com/package/twit
[dotenv]:               https://www.npmjs.com/package/dotenv
[maistecnologia]:       https://www.maistecnologia.com/twitter-bot-aprenda-a-criar-um-bot-para-a-rede-social/
[loginradius]:          https://www.loginradius.com/blog/async/build-a-twitter-bot-using-nodejs/
[cron]:                 https://medium.com/totvsdevelopers/entendendo-o-crontab-607bc9f00ed3
[crontab]:              http://crontab.org/
[node-cron]:            https://www.npmjs.com/package/node-cron
[manacespereira]:       https://medium.com/manacespereira/criando-e-configurando-cronjobs-com-nodejs-883c83a94b1a
[logrocket]:            https://blog.logrocket.com/task-scheduling-or-cron-jobs-in-node-using-node-cron/
[web-scraping]:         https://pt.wikipedia.org/wiki/Coleta_de_dados_web
[puppeteer]:            https://www.npmjs.com/package/puppeteer
[chromium]:             https://www.chromium.org/Home
[fabiojanio]:           https://medium.com/@fabiojanio/node-js-web-scraping-com-puppeteer-29dd974eb042
[beshaimakes]:          https://beshaimakes.com/js-scrape-data#write-a-nodejs-script-to-scrape-the-page-after-running-javascript
[github]:               https://github.com/kamarada/twitter-bot/
[e1509be]:              https://github.com/kamarada/twitter-bot/tree/e1509be02aa87c24e955bca92c9b7b0331b7c4e6
