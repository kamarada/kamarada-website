---
date: 2017-08-29 22:40:00
image: '/files/2017/08/certificados-firefox-1.png'
layout: post
published: true
nickname: 'how-to-install-certificates'
title: 'Como instalar certificados de segurança no Linux'
excerpt: 'Já foi pego de surpresa ao acessar um site e ser alertado pelo navegador de que não é seguro? O que fazer ao acessar um site do governo brasileiro e ver uma mensagem dessa? Às vezes, a conexão não é de fato insegura. Entenda o que acontece e aprenda a instalar certificados de segurança no Linux.'
---

{% include update.html date="30/10/2018" message="O *post* foi revisado e reescrito em quase sua totalidade." %}

Já foi pego de surpresa ao acessar um *site* e ser alertado pelo navegador de que não é seguro? O que fazer ao acessar um *site* do governo brasileiro e ver uma mensagem dessas?

{% include image.html src="/files/2017/08/certificados-firefox-1.png" %}

{% include image.html src="/files/2017/08/certificados-chrome-1.jpg" %}

## Entenda o que acontece

Quando você visita um *site* que usa conexão segura (endereço começando com `https`), sua comunicação é criptografada para ajudar a garantir sua privacidade. Antes de iniciar a comunicação criptografada, o *site* apresenta ao navegador um [**certificado de segurança**][certificate] para se identificar (como se fosse um documento de identidade, um RG).

Qualquer um pode criar um certificado afirmando ser quem quiser. Mas normalmente certificados de *sites* são emitidos e assinados por [**autoridades certificadoras (ACs)**][ca], que também possuem seus próprios certificados. Por sua vez, os certificados das ACs podem ser autoassinados (no caso de uma AC interna de uma empresa) ou assinados por outras ACs, e assim sucessivamente até chegar em uma **autoridade certificadora raiz (AC raiz)**. Essa cadeia de certificados é chamada de **hierarquia de certificados**.

Autoridades certificadoras raiz são organizações públicas, conhecidas e seguras. No Brasil, por exemplo, a AC raiz é a [ICP-Brasil][icp-brasil]. Normalmente os navegadores conhecem de antemão os certificados das ACs raiz (veremos a seguir que a AC raiz brasileira é uma exceção).

Quando você visita um *site* [HTTPS][https], o navegador verifica se o certificado apresentado por ele é válido e se pertence a uma hierarquia de certificados que termina em um certificado de uma AC conhecida. Se essa validação passa, o navegador mostra um ícone de cadeado verde perto da barra de endereço, indicando que o *site* que você está visitando é de fato o *site* que afirma ser. É seguro permanecer nele, digitar senhas, fornecer dados de cartões de crédito e enviar ou receber outros dados pessoais. Sempre procure pelo ícone do cadeado verde quando acessar um *netbanking* ou um *site* de compras, por exemplo.

Quando você visita um *site* HTTPS mas o navegador não consegue verificar o certificado do *site*, ele apresenta um alerta de que a conexão não é segura ou privada. Se isso acontecer, você deve agir com cautela: não forneça dados pessoais a esse *site*. Se possível, saia dele.

Às vezes, a conexão não é de fato insegura. Alertas de segurança podem aparecer, por exemplo, quando você acessa um sistema *web* da empresa ou órgão onde trabalha, assinado por uma AC interna, cujo certificado não é conhecido pelo navegador. Nesse caso, você precisa instalar manualmente o certificado da AC interna para prevenir falsos alertas.

Também é comum aparecer alertas de privacidade ao visitar *sites* do governo brasileiro. Os navegadores não vem com o certificado da ICP-Brasil porque [ele não atende aos requisitos de segurança da Fundação Mozilla, um *bug* que já se arrasta por 11 anos][bugzilla]. Por isso, é necessário instalar o certificado da ICP-Brasil manualmente. Alguns órgãos públicos tem adotado soluções de contorno: o [*site* da Polícia Federal][pf], por exemplo, tem os formulários (por exemplo, o de [emissão de passaporte][pf-passport]) assinados pela AC Let’s Encrypt, mas páginas que possuem apenas conteúdo (inclusive [a própria página inicial do *site* da PF][pf]) sequer são assinadas. A [Let’s Encrypt][letsencrypt] é uma [ONG][ong] norte-americana que emite certificados de graça para qualquer pessoa e [é conhecida pelos navegadores][letsencrypt-trusted].

## Instale o certificado da AC

Vejamos como adicionar o certificado da AC aos navegadores [Mozilla Firefox][firefox] e [Google Chrome][chrome], para que eles confiem nos certificados assinados pela AC. O passo-a-passo para o Google Chrome também valem para seu equivalente de [código-aberto][opensource], o [Chromium][chromium].

{% capture atualizacao1 %}
Caso precise instalar o certificado da AC no cliente de *e-mail* [Mozilla Thunderbird](https://www.thunderbird.net), leia [esse *post*]({%post_url pt/2018-09-24-assinando-emails-enviados-com-certificado-digital-no-thunderbird %}).
{% endcapture %}
{% include update.html date="24/09/2018" message=atualizacao1 %}

Vou usar como exemplo o [SIGEPE][sigepe], um sistema do governo brasileiro que servidores públicos federais acessam para consultar seu contracheque e fazer solicitações de RH. Vamos adicionar o certificado da AC raiz brasileira, a ICP-Brasil, de modo que os navegadores parem de exibir alertas de segurança para os *sites* do governo.

Primeiro, [clique aqui][icp-brasil-crt] para baixar o certificado de segurança da AC raiz brasileira.

Você pode usar as mesmas instruções a seguir para instalar o certificado da AC interna da sua organização. Nesse caso, consulte o administrador da rede para obtê-lo.

### Mozilla Firefox

Abra o **menu do Firefox** (canto superior direito da janela) e selecione **Preferências**:

{% include image.html src="/files/2018/10/certificados-firefox-2.jpg" %}

Selecione **Privacidade e Segurança** à esquerda e clique no botão **Ver Certificados** à direita, ao final da página:

{% include image.html src="/files/2018/10/certificados-firefox-3.jpg" %}

Na caixa de diálogo **Gerenciador de certificados**, selecione a aba **Autoridades** e clique no botão **Importar**:

{% include image.html src="/files/2018/10/certificados-firefox-4.png" %}

Procure pelo certificado da AC que você quer importar.

Marque todas as opções para confiar completamente no certificado e clique em **OK**:

{% include image.html src="/files/2018/10/certificados-firefox-5.jpg" %}

Clique em **OK** na caixa de diálogo **Gerenciador de certificados** e feche a aba **Preferências**.

Atualize a página que estava tentando visitar (no nosso exemplo, o [SIGEPE][sigepe]) e você perceberá na barra de endereço o cadeado verde, indicando que a conexão é segura:

{% include image.html src="/files/2018/10/certificados-firefox-6.jpg" %}

### Google Chrome

Abra o **menu do Chrome** (canto superior direito da janela) e selecione **Configurações**:

{% include image.html src="/files/2017/08/certificados-chrome-2.jpg" %}

No campo **Pesquisar nas configurações**, digite `certificados`. O Google Chrome filtra as opções relacionadas. Clique em **Gerenciar certificados**:

{% include image.html src="/files/2017/08/certificados-chrome-3.jpg" %}

Selecione a aba **Autoridades** e clique no botão **Importar**:

{% include image.html src="/files/2017/08/certificados-chrome-4.jpg" %}

Procure pelo certificado da AC que você quer importar.

Marque todas as opções para confiar completamente no certificado e clique em **OK**:

{% include image.html src="/files/2017/08/certificados-chrome-5.jpg" %}

Feche a aba **Configurações**.

Atualize a página que estava tentando visitar (no nosso exemplo, o [SIGEPE][sigepe]) e você perceberá na barra de endereço o cadeado verde, indicando que a conexão é segura:

{% include image.html src="/files/2017/08/certificados-chrome-6.jpg" %}

## Referências

- [Why Does Google Chrome Say Websites Are "Not Secure"?][howtogeek]
- [Certificado de segurança - Ajuda do Firefox][certificate]
- [Verificar se a conexão de um site é segura - Ajuda do Google Chrome][chrome-help]
- [MOZILLA FIREFOX - ITI][iti-firefox]
- [GOOGLE CHROMIUM - LINUX - ITI][iti-chromium]

[certificate]:          https://support.mozilla.org/en-US/kb/secure-website-certificate
[ca]:                   https://pt.wikipedia.org/wiki/Autoridade_de_certifica%C3%A7%C3%A3o
[icp-brasil]:           http://www.iti.gov.br/icp-brasil
[https]:                https://pt.wikipedia.org/wiki/Hyper_Text_Transfer_Protocol_Secure
[bugzilla]:             https://bugzilla.mozilla.org/show_bug.cgi?id=438825
[pf]:                   http://www.pf.gov.br
[pf-passport]:          https://servicos.dpf.gov.br/sinpa/inicializacaoSolicitacao.do?dispatch=inicializarSolicitacaoPassaporte
[letsencrypt]:          https://letsencrypt.org/
[ong]:                  https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_n%C3%A3o_governamental
[letsencrypt-trusted]:  https://letsencrypt.org/2018/08/06/trusted-by-all-major-root-programs.html
[firefox]:              https://www.mozilla.org/pt-BR/firefox/
[chrome]:               https://www.google.com/chrome/
[opensource]:           https://pt.wikipedia.org/wiki/Software_de_código_aberto
[chromium]:             https://www.chromium.org/
[sigepe]:               https://servidor.sigepe.planejamento.gov.br
[icp-brasil-crt]:       http://acraiz.icpbrasil.gov.br/credenciadas/RAIZ/ICP-Brasilv2.crt
[howtogeek]:            https://www.howtogeek.com/359298/why-does-google-chrome-say-websites-are-%E2%80%9Cnot-secure%E2%80%9D/
[chrome-help]:          https://support.google.com/chrome/answer/95617?hl=pt-BR
[iti-firefox]:          http://antigo.iti.gov.br/noticias/ascom/188-atualizacao/4526-mozilla
[iti-chromium]:         http://antigo.iti.gov.br/noticias/ascom/188-atualizacao/4532-chrome-linux
