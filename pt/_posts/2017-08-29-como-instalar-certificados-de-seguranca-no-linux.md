---
date: 2017-08-29 22:40:00
image: '/files/2017/08/certificados-firefox-1.png'
layout: post
published: true
nickname: 'how-to-install-certificates'
title: 'Como instalar certificados de segurança no Linux'
excerpt: 'Já foi pego de surpresa ao acessar um site e ser alertado pelo navegador de que não é seguro? O que fazer se você é servidor público federal, acessa o SIGEPE, sistema do governo que o próprio departamento de pessoal te orientou acessar para consultar seu contracheque, e se depara com uma mensagem dessas? Será que seu departamento de pessoal cadastrou seus dados em um sistema inseguro e agora você corre perigo?'
---

Já foi pego de surpresa ao acessar um *site* e ser alertado pelo navegador de que não é seguro? O que fazer se você é servidor público federal, acessa o [SIGEPE][sigepe], sistema do governo que o próprio departamento de pessoal te orientou acessar para consultar seu contracheque, e se depara com uma mensagem dessas?

{% include image.html src="/files/2017/08/certificados-firefox-1.png" %}

{% include image.html src="/files/2017/08/certificados-chrome-1.jpg" %}

Será que seu departamento de pessoal cadastrou seus dados em um sistema inseguro e agora você corre perigo?

Ao menos nesse caso em particular, felizmente, a resposta é **não** (calma, seus dados estão seguros). Nesse caso, o que ocorre é que o certificado de segurança desse sistema do governo foi emitido pela [Autoridade Certificadora Raiz brasileira][icp-brasil], que não é conhecida por muitos navegadores.

## Entenda o que se passa

O [**certificado de segurança**][certificado] do *site* ajuda seu navegador a verificar a autenticidade do *site* que você visita, ou seja, se ele é realmente o *site* que afirma ser. Certificados de segurança são emitidos por [**autoridades certificadoras**][autoridade]. Elas também possuem seus próprios certificados, muitos deles já conhecidos pelos navegadores.

Quando um *site* apresenta um certificado que o navegador consegue verificar, o cadeado verde é exibido, indicando que o *site* é autêntico e é seguro permanecer nele. Sempre se atente a isso quando acessar um *netbanking* ou um *site* de compras.

Quando o navegador não consegue verificar o certificado do *site*, ele apresenta um alerta informando que a conexão não é segura. Pode ser que um *site* malicioso esteja tentando se passar pelo *site* que você pediu para acessar. Se isso acontecer, a menos que saiba o que está fazendo, o mais seguro é não continuar.

Como eu disse, no exemplo, o alerta foi mostrado apenas porque o navegador não conhece o certificado da Autoridade Certificadora Raiz brasileira. Por tabela, ele não confia no certificado do SIGEPE, que foi emitido por essa autoridade certificadora. Finalmente, o navegador entende que a conexão é insegura e alerta o usuário.

## Instale o certificado de segurança

Vejamos como instalar o certificado de segurança da Autoridade Certificadora Raiz brasileira nos navegadores [Mozilla Firefox][firefox] e [Google Chrome][chrome] para que eles parem de exibir esse alerta para *sites* brasileiros, principalmente os do governo. Os passos para o Google Chrome também valem para seu equivalente [aberto][codigo-aberto], o [Chromium][chromium].

Primeiro, [clique aqui][icp-brasil-crt] para baixar o certificado de segurança da Autoridade Certificadora Raiz brasileira.

### Mozilla Firefox

O Mozilla Firefox é inteligente e percebe que baixou um certificado de segurança. Assim que conclui o *download*, já oferece para instalar o certificado:

{% include image.html src="/files/2017/08/certificados-firefox-2.jpg" %}

Marque as três opções e clique em **OK**.

Pronto! Agora, se você voltar ao [SIGEPE][sigepe], perceberá na barra de endereço o cadeado verde, que indica que o navegador considera a conexão segura:

{% include image.html src="/files/2017/08/certificados-firefox-3.jpg" %}

### Google Chrome

Quando terminar de baixar o certificado de segurança (o arquivo não é grande, o *download* não deve demorar), clique no **botão de opções do Google Chrome**, na parte superior direita da janela, e clique em **Configurações**:

{% include image.html src="/files/2017/08/certificados-chrome-2.jpg" %}

No campo **Pesquisar nas configurações**, digite `certificados`. O Google Chrome filtra as opções relacionadas. Clique em **Gerenciar certificados**:

{% include image.html src="/files/2017/08/certificados-chrome-3.jpg" %}

Clique na guia **Autoridades** e depois no botão **Importar**:

{% include image.html src="/files/2017/08/certificados-chrome-4.jpg" %}

Procure pelo certificado de segurança que você baixou. Marque as três opções e clique em **OK**:

{% include image.html src="/files/2017/08/certificados-chrome-5.jpg" %}

Pronto! Agora, se você voltar ao [SIGEPE][sigepe], perceberá na barra de endereço o cadeado verde, que indica que o navegador considera a conexão segura:

{% include image.html src="/files/2017/08/certificados-chrome-6.jpg" %}

## Referências

- [Certificado de segurança | Ajuda do Firefox][firefox]
- [MOZILLA FIREFOX - ITI][iti-firefox]
- [GOOGLE CHROMIUM - LINUX - ITI][iti-chromium]

[sigepe]: https://servidor.sigepe.planejamento.gov.br
[icp-brasil]: http://www.iti.gov.br/icp-brasil
[certificado]: https://support.mozilla.org/pt-BR/kb/certificado-de-seguranca
[autoridade]: https://pt.wikipedia.org/wiki/Autoridade_de_certifica%C3%A7%C3%A3o
[firefox]: https://www.mozilla.org/pt-BR/firefox/
[chrome]: https://www.google.com/chrome/
[codigo-aberto]: https://pt.wikipedia.org/wiki/Software_de_código_aberto
[chromium]: https://www.chromium.org/
[icp-brasil-crt]: http://acraiz.icpbrasil.gov.br/credenciadas/RAIZ/ICP-Brasilv2.crt
[iti-firefox]: http://antigo.iti.gov.br/noticias/ascom/188-atualizacao/4526-mozilla
[iti-chromium]: http://antigo.iti.gov.br/noticias/ascom/188-atualizacao/4532-chrome-linux
