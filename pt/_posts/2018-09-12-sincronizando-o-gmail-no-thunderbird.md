---
date: 2018-09-12 18:55:00
image: '/files/2018/09/thunderbird-gmail.png'
layout: post
published: true
nickname: 'how-to-thunderbird-gmail'
title: 'Sincronizando o Gmail no Thunderbird'
excerpt: 'O Thunderbird é o cliente de e-mail gratuito da Fundação Mozilla, a mesma que desenvolve o conhecido navegador Firefox. E o Gmail dispensa apresentações: é o serviço de e-mail gratuito da gigante Google. Nesse post, você verá como instalar e configurar o Thunderbird para sincronizar suas mensagens do Gmail.'
---

{% include image.html src="/files/2018/09/thunderbird-gmail.png" style="max-width: 200px;" %}

O [Thunderbird][thunderbird] é o cliente de *e-mail* gratuito da [Fundação Mozilla][mozilla], a mesma que desenvolve o conhecido navegador [Firefox][firefox]. E o [Gmail][gmail] dispensa apresentações: é o serviço de *e-mail* gratuito da gigante [Google][google].

Nesse *post*, você verá como instalar e configurar o Thunderbird para sincronizar suas mensagens do Gmail.

Bem verdade que as pessoas tem preferido utilizar navegadores em vez de clientes de *e-mail* para ler e enviar mensagens, por ser mais prático. No entanto, os clientes de *e-mail* nos fornecem algumas possibilidades interessantes, como veremos nos próximos *posts*.

{% capture atualizacao %}
Como prometido, eis aqui um uso interessante para o cliente de *e-mail*:

- [Assinando e-mails enviados com certificado digital no Thunderbird]({%post_url pt/2018-09-24-assinando-emails-enviados-com-certificado-digital-no-thunderbird %})
{% endcapture %}
{% include update.html date="24/09/2018" message=atualizacao %}

## Instalando o Thunderbird

No openSUSE, o Thunderbird é distribuído pelo pacote [MozillaThunderbird][sw].

Para instalá-lo, abra o **Terminal** e execute como administrador (usuário *root*):

```
# zypper in MozillaThunderbird MozillaThunderbird-translations-common
```

## Iniciando o Thunderbird

Instalado o Thunderbird, inicie-o pelo menu **Atividades**, digitando `Thunderbird` e clicando no ícone correspondente:

{% include image.html src="/files/2018/09/thunderbird-gmail-01.jpg" %}

## Sincronizando com o Gmail

No primeiro uso, o Thunderbird deve mostrar o assistente de configuração da conta:

{% include image.html src="/files/2018/09/thunderbird-gmail-02.jpg" %}

Nessa primeira tela, clique em **Ignorar e usar meu e-mail existente**.

Se o assistente de configuração da conta não for iniciado, na tela inicial, abaixo de **Criar uma nova conta**, clique em **Mensagens**:

{% include image.html src="/files/2018/09/thunderbird-gmail-03.jpg" %}

Na segunda tela, preencha os campos com seu nome, endereço de *e-mail* e senha. Se quiser, você pode marcar a opção **Memorizar senha**. Quando terminar, clique em **Continuar**:

{% include image.html src="/files/2018/09/thunderbird-gmail-04.jpg" %}

Para saber como se conectar ao servidor de *e-mail* do Gmail, o Thunderbird consulta uma base de dados de configurações da Mozilla.

Ainda nessa tela, o assistente pergunta se você deseja utilizar IMAP ou POP3:

{% include image.html src="/files/2018/09/thunderbird-gmail-05.jpg" %}

[IMAP][imap] e [POP3][pop3] são dois protocolos usados para receber *e-mails*.

[SMTP][smtp] é um protocolo usado para enviar *e-mails*.

A diferença entre o IMAP e o POP3 é que o POP3 baixa as mensagens para o computador e não as sincroniza mais com o servidor (então, por exemplo, uma mensagem excluída no computador não é excluída no servidor, e vice-versa), enquanto o IMAP baixa as mensagens mas mantém a sincronia (se uma mensagem é excluída no computador, é excluída também no servidor, e vice-versa). O protoloco IMAP é uma evolução do protocolo POP3.

Eu, particularmente, prefiro e recomendo o IMAP. Também o próprio Thunderbird já o traz marcado por padrão.

Caso o Thunderbird não encontre as configurações automaticamente e você precise informá-las manualmente, aqui estão:

* Recebimento: IMAP (ou POP3)
    - Nome do servidor: imap.gmail.com (ou pop.gmail.com)
    - Porta: 993 (ou 995)
    - SSL: SSL/TLS
* Envio: SMTP
    - Nome do servidor: smtp.gmail.com
    - Porta: 465
    - SSL: SSL/TLS

Quando terminar, clique em **Concluir**.

Por fim, o Thunderbird abre uma janela do Gmail, na qual você deve entrar com seu *login* e senha e autorizar o Thunderbird a acessar seu *e-mail*:

{% include image.html src="/files/2018/09/thunderbird-gmail-06.jpg" %}

De volta à tela inicial do Thunderbird, perceba que agora é exibida sua conta e as mensagens de *e-mail* estão sendo obtidas:

{% include image.html src="/files/2018/09/thunderbird-gmail-07.jpg" %}

## Alguns ajustes

Por padrão, o Thunderbird mostra o painel de mensagens. Caso você deseje ocultá-lo, clique no botão **Menu**, no canto superior direito da janela, aponte para **Preferências**, depois para **Layout** e desmarque **Painel de mensagens**:

{% include image.html src="/files/2018/09/thunderbird-gmail-08.jpg" %}

Feito isso, para abrir um *e-mail*, dê dois cliques nele e ele será aberto em uma nova aba.

Por padrão, o Thunderbird ordena as mensagens por data de forma crescente (mensagens mais recentes embaixo). Para ordená-las de forma decrescente, igual ao Gmail (mais recentes em cima), clique na coluna **Data**:

{% include image.html src="/files/2018/09/thunderbird-gmail-09.jpg" %}

Um problema que eu percebi usando o Thunderbird: ele não adiciona a assinatura aos e-mails encaminhados. Vejamos como corrigir.

Clique no botão **Menu**, no canto superior direito da janela, aponte para **Preferências** e clique em **Configurações de conta**:

{% include image.html src="/files/2018/09/thunderbird-gmail-10.jpg" %}

No painel da esquerda, dentro das opções da conta, selecione **Editar e endereçar**, à direita, e marque a opção **Ao encaminhar, incluir assinatura**. Por fim, clique em **OK**:

{% include image.html src="/files/2018/09/thunderbird-gmail-11.jpg" %}

Espero que tenha sido útil. Até a próxima!

## Referências

- [Ler mensagens do Gmail em outros clientes de e-mail usando IMAP - Ajuda do Gmail][gmail-help-imap]
- [Ler mensagens do Gmail em outros clientes de e-mail usando POP - Ajuda do Gmail][gmail-help-pop]

[thunderbird]:      https://www.thunderbird.net
[mozilla]:          https://www.mozilla.org/pt-BR/foundation/
[firefox]:          https://www.mozilla.org/pt-BR/firefox/
[gmail]:            https://gmail.com
[google]:           https://www.google.com.br
[sw]:               https://software.opensuse.org/package/MozillaThunderbird
[imap]:             https://pt.wikipedia.org/wiki/Internet_Message_Access_Protocol
[pop3]:             https://pt.wikipedia.org/wiki/Post_Office_Protocol
[smtp]:             https://pt.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol
[gmail-help-imap]:  https://support.google.com/mail/answer/7126229?hl=pt-BR
[gmail-help-pop]:   https://support.google.com/mail/answer/7104828?hl=pt-BR
