---
date: 2018-09-24 16:30:00
image: '/files/2018/09/thunderbird-token.png'
layout: post
published: true
nickname: 'how-to-thunderbird-token'
title: 'Assinando e-mails enviados com certificado digital no Thunderbird'
excerpt: 'Embora hoje o webmail seja mais popular que o cliente de e-mail, algumas funcionalidades interessantes só são possíveis por meio desse aplicativo. Por exemplo, se você possui um certificado digital, pode assinar os e-mails que envia, conferindo-lhes mais segurança quanto a autenticidade e integridade. Nesse post, você verá como fazer isso com o cliente de e-mail Mozilla Thunderbird.'
---

{% include image.html src="/files/2018/09/thunderbird-token.png" style="max-width: 340px;" %}

Embora hoje o *webmail* seja mais popular que o cliente de *e-mail*, algumas funcionalidades interessantes só são possíveis por meio desse aplicativo. Por exemplo, se você possui um [certificado digital][how-to-token], pode assinar os *e-mails* que envia, conferindo-lhes mais segurança quanto a autenticidade e integridade.

Nesse *post*, você verá como fazer isso com o cliente de *e-mail* [Mozilla Thunderbird][thunderbird].

Antes, para deixar todo mundo na mesma página, recomendo a leitura de *posts* anteriores falando sobre certificados digitais e também sobre o Thunderbird:

- [Como instalar certificados de segurança no Linux][how-to-install-certificates]
- [Configurando certificado digital no Linux openSUSE][how-to-token]
- [Sincronizando o Gmail no Thunderbird][how-to-thunderbird-gmail]

{% capture atualizacao %}
O *post* foi revisado para se aproximar da [versão em inglês]({%post_url en/2019-07-02-sending-digitally-signed-emails-with-thunderbird %}), mais recente.
{% endcapture %}
{% include update.html date="03/07/2019" message=atualizacao %}

## Instalando o certificado da AC no Thunderbird

Da mesma forma como [fizemos][how-to-token] com o navegador [Firefox][firefox], primeiro temos que adicionar o certificado da nossa Autoridade Certificadora ao cliente de *e-mail* Thunderbird. Do contrário, ele não conseguirá verificar a hierarquia e validar nosso certificado.

[Clique aqui][icp-brasil-crt] para baixar o certificado de segurança da [ICP-Brasil], a AC Raiz brasileira.

Na tela principal do Thunderbird, clique no botão **Menu**, no canto superior direito da janela, e depois clique em **Preferências**:

{% include image.html src="/files/2018/09/thunderbird-token-01.jpg" %}

Na caixa de diálogo **Preferências do Thunderbird**, clique na aba **Avançado**, depois na aba **Certificados** e, por fim, no botão **Gerenciar certificados**:

{% include image.html src="/files/2019/07/thunderbird-token-02-pt.jpg" %}

Na caixa de diálogo **Gerenciador de certificados**, selecione a aba **Autoridades** e clique no botão **Importar**:

{% include image.html src="/files/2018/09/thunderbird-token-15.jpg" %}

Informe o caminho para o certificado que você baixou.

Na caixa de diálogo seguinte, marque as três opções e clique em **OK**:

{% include image.html src="/files/2017/08/certificados-firefox-2.jpg" %}

Verifique que a ICP-Brasil aparece na lista de autoridades certificadoras:

{% include image.html src="/files/2018/09/thunderbird-token-16.png" %}

Clique em **OK**.

De volta à caixa de diálogo **Preferências do Thunderbird**, clique em **Fechar**.

## Configurando o token no Thunderbird

Da mesma forma como [fizemos][how-to-token] com o Firefox, vamos agora cadastrar nosso *token* como um dispositivo de segurança no Thunderbird.

Para isso, na tela principal, clique no botão **Menu** e depois no item **Preferências**.

Na caixa de diálogo **Preferências do Thunderbird**, clique na aba **Avançado**, depois na aba **Certificados** e, por fim, no botão **Dispositivos de segurança**:

{% include image.html src="/files/2018/09/thunderbird-token-02.jpg" %}

Na caixa de diálogo **Gerenciador de dispositivos**, clique em **Carregar**:

{% include image.html src="/files/2018/09/thunderbird-token-03.jpg" %}

Na caixa de diálogo seguinte, em **Nome do módulo**, digite um nome que identifique o *token* (por exemplo, `eToken`).

No campo **Nome do arquivo do módulo**, informe o caminho para a biblioteca do *token*:

- se seu *token* foi reconhecido pelo [OpenSC][how-to-token], informe `/usr/lib64/opensc-pkcs11.so`;
- se você instalou o [SafeNet Authentication Client][how-to-token] (meu caso), informe `/usr/lib64/libeToken.so`;
- para outros *tokens*, siga as instruções fornecidas pela fabricante ou certificadora.

Quando terminar, clique em **OK**:

{% include image.html src="/files/2018/09/thunderbird-token-04.jpg" %}

Observe que o *token* é adicionado à lista de **Dispositivos e módulos de segurança**:

{% include image.html src="/files/2018/09/thunderbird-token-05.jpg" %}

Clique em **OK**.

De volta à caixa de diálogo **Preferências do Thunderbird**, clique em **Fechar**.

## Configurando a assinatura digital no Thunderbird

O próximo passo é configurar o Thunderbird para assinar os *e-mails* que enviamos a partir da nossa conta com o nosso certificado.

Na tela principal do Thunderbird, clique no botão **Menu**, aponte para **Preferências** e clique em **Configurações de conta**:

{% include image.html src="/files/2018/09/thunderbird-gmail-10.jpg" %}

No painel da esquerda, dentro das opções da conta, selecione **Segurança** e à direita, dentro de **Assinatura digital**, clique em **Selecionar**:

{% include image.html src="/files/2018/09/thunderbird-token-06.jpg" %}

Informe a senha PIN do *token* e clique em **OK**:

{% include image.html src="/files/2018/09/thunderbird-token-07.jpg" %}

Selecione o **Certificado** a ser usado para assinatura e clique em **OK**:

{% include image.html src="/files/2018/09/thunderbird-token-08.jpg" %}

Como o objetivo é configurar a criptografia apenas para o envio, e não para a resposta, clique em **Não**:

{% include image.html src="/files/2018/09/thunderbird-token-09.png" %}

De volta à caixa de diálogo **Configurar contas**, caso deseje sempre assinar digitalmente os *e-mails* que envia, marque a opção **Assinar mensagens digitalmente (por padrão)**.

Por fim, clique em **OK** para voltar à tela principal do Thunderbird.

A assinatura digital está configurada e pronta para ser usada.

## Enviando e-mails com assinatura digital

Na tela principal do Thunderbird, clique no botão **Nova msg**:

{% include image.html src="/files/2018/09/thunderbird-token-10.jpg" %}

Como de costume, preencha os campos **De**, **Para** e **Assunto** e redija a mensagem.

Antes de enviar, certifique-se de que a opção **Assinar digitalmente**, dentro do menu **Segurança**, está marcada (se você marcou aquela opção nas configurações da conta, essa opção já deve vir marcada por padrão):

{% include image.html src="/files/2018/09/thunderbird-token-11.jpg" %}

Quando terminar, clique em **Enviar agora**.

O Thunderbird solicita o PIN do *token* para assinar a mensagem no momento do envio:

{% include image.html src="/files/2018/09/thunderbird-token-12.jpg" %}

## Verificando a assinatura digital de e-mails recebidos

Se o destinatário usa o Thunderbird, ele pode verificar a assinatura digital da mensagem:

{% include image.html src="/files/2018/09/thunderbird-token-17.jpg" %}

{% include image.html src="/files/2018/09/thunderbird-token-18.jpg" %}

Pode ser que o Thunderbird não reconheça a assinatura, exibindo **A assinatura digital não é válida**:

{% include image.html src="/files/2018/09/thunderbird-token-13.jpg" %}

{% include image.html src="/files/2018/09/thunderbird-token-14.jpg" %}

Se isso acontecer, é sinal que o destinatário não conhece o certificado da sua Autoridade Certificadora. Oriente-o instalar esse certificado, seguindo as instruções presentes nesta página. Feito isso, ao voltar à aba da mensagem, perceberá que a assinatura é reconhecida.

Se o destinatário utiliza o *webmail*, pode ser que o *webmail* possibilite verificar a assinatura da mensagem, como o [Gmail][gmail], por exemplo, possibilita:

{% include image.html src="/files/2018/09/thunderbird-token-19.jpg" %}

Note que o Gmail também não reconhece a assinatura, muito provavelmente pelo mesmo motivo: não conhece o certificado da ICP-Brasil. Infelizmente, a solução definitiva para isso demandaria ao [Google][google] instalar esse certificado em seus servidores.

Ainda assim, o Gmail te possibilita, clicando em **Informações do remetente**, baixar o certificado do remetente:

{% include image.html src="/files/2018/09/thunderbird-token-20.jpg" %}

Com isso, você pode verificar o certificado você mesmo:

{% include image.html src="/files/2018/09/thunderbird-token-21.jpg" %}

## Um bug do Thunderbird

Ao tentar enviar um *e-mail* com assinatura digital, você pode se deparar com um *bug* do Thunderbird:

- [531073 - S/MIME certificate could not be found although it is available][bugzilla]

Em vez de assinar e enviar o *e-mail*, o Thunderbird mostra a seguinte mensagem de erro:

{% include image.html src="/files/2019/07/thunderbird-token-bug-pt.jpg" caption="Erro de envio de mensagem. Falha ao enviar a mensagem. Você especificou que esta mensagem deve ser assinada digitalmente. Entretanto ou o certificado está com a validade vencida ou o aplicativo não encontrou o certificado de assinatura especificado em suas configurações de contas." %}

Esse *bug* foi corrigido no Thunderbird 69.0 (versão regular) e 60.7.1 (versão com suporte estendido, [ESR]). Esse último foi disponibilizado para os usuários do [openSUSE Leap 15.1][leap-15.1] por meio de uma atualização de segurança.

Se você foi afetado por esse *bug*, verifique se há atualizações disponíveis para o seu sistema. Para mais informações, leia:

- [Como obter atualizações para o Linux openSUSE][howto-update]

## Referência

- [Manual de assinatura de e-mail utilizando o Thunderbird][referencia]

[how-to-token]:                 {%post_url pt/2018-04-16-configurando-certificado-digital-no-linux-opensuse %}
[thunderbird]:                  https://www.thunderbird.net
[how-to-install-certificates]:  {%post_url pt/2017-08-29-como-instalar-certificados-de-seguranca-no-linux %}
[how-to-thunderbird-gmail]:     {%post_url pt/2018-09-12-sincronizando-o-gmail-no-thunderbird %}
[firefox]:                      https://www.mozilla.org/pt-BR/firefox/
[icp-brasil-crt]:               http://acraiz.icpbrasil.gov.br/credenciadas/RAIZ/ICP-Brasilv5.crt
[icp-brasil]:                   http://www.iti.gov.br/icp-brasil
[gmail]:                        https://gmail.com
[google]:                       https://www.google.com.br
[bugzilla]:                     https://bugzilla.mozilla.org/show_bug.cgi?id=531073
[esr]:                          https://www.thunderbird.net/pt-BR/organizations/
[leap-15.1]:                    {%post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[howto-update]:                 {%post_url pt/2019-05-14-como-obter-atualizacoes-para-o-linux-opensuse %}
[referencia]:                   https://wwws.prodemge.gov.br/component/phocadownload/category/23-assinatura-digital-e-mail?download=63:manual-de-assinatura-digital-thunderbird
