---
date: '2020-07-08 01:20:00 GMT-3'
image: '/files/2020/07/evolution-token.jpg'
layout: post
published: true
nickname: 'evolution-token'
title: 'Assinando e-mails enviados com certificado digital no Evolution'
---

Se você tem um [certificado digital][how-to-token], pode assinar os _e-mails_ que envia, conferindo-lhes mais segurança quanto a autenticidade e integridade. Já mostramos aqui, em outro texto, [como assinar digitalmente _e-mails_ enviados pelo Thunderbird][how-to-thunderbird-token], o cliente de _e-mail_ da [Fundação Mozilla][mozilla]. Se você é usuário do [Evolution], o cliente de _e-mail_ padrão do [GNOME] e também do [Linux Kamarada][kamarada-15.1], verá hoje como pode assinar os _e-mails_ que envia por esse programa.

{% include image.html src='/files/2020/07/evolution-token.jpg' %}

Para referência futura, aqui utilizo o [Linux Kamarada 15.1][kamarada-15.1], baseado no [openSUSE Leap 15.1][leap-15.1].

## Sincronizando seus e-mails

Se seu certificado digital está associado a uma conta de _e-mail_ do [Gmail] (ou do [G Suite][gsuite]), comece configurando o Evolution para sincronizar seus _e-mails_:

- [Tire o máximo proveito do GNOME sincronizando sua conta do Google][gnome-online-accounts-google]

Já se você usa uma conta de _e-mail_ do [Microsoft Exchange][exchange], veja:

- [Conecte o Evolution ao Office 365][how-to-evolution-office-365]

## Instalando a mídia criptográfica

Antes de continuar, certifique-se de que seu _token_ ou cartão inteligente (_smart card_) é devidamente reconhecido pelo sistema operacional. Se precisar de ajuda com isso, veja:

- [Configurando certificado digital no Linux openSUSE][how-to-token]

## Instalando o certificado da AC no Evolution

Devemos importar o certificado da nossa Autoridade Certificadora para o Evolution, para que ele possa verificar a hierarquia de certificados e validar o nosso certificado digital.

Se você usa o navegador [Chromium] (ou outro baseado nele, como o [Google Chrome][chrome], [Opera], [Vivaldi] ou [Brave]), saiba que o Evolution usa a mesma configuração de certificados desse navegador, armazenada na pasta `~/.pki/nssdb/`. Portanto, se você instalou o certificado da AC nesse navegador, não precisa repetir essa configuração e pode pular esse passo.

Se você usa o Linux Kamarada 15.1, também pode pular esse passo, porque o navegador padrão é o Chromium e a AC raiz brasileira já vem pré-instalada.

Se quiser saber como instalar o certificado da AC no Chromium (e semelhantes), veja:

- [Como instalar certificados de segurança no Linux][how-to-install-certificates]

Se você está fazendo essa configuração pela primeira vez e vai importar o certificado da AC diretamente pelo Evolution, continue lendo.

[Clique aqui][icp-brasil-crt] para baixar o certificado de segurança da [ICP-Brasil], a AC raiz brasileira.

Na tela principal do Evolution, abra o menu **Editar** e clique na opção **Preferências**:

{% include image.html src='/files/2020/07/evolution-token-01-pt.jpg' %}

No painel da esquerda, selecione **Certificados** e na direita, a aba **Seus certificados**. Clique no botão **Importar**:

{% include image.html src='/files/2020/07/evolution-token-02-pt.jpg' %}

Informe o caminho para o certificado que você baixou.

Na caixa de diálogo seguinte, marque as três opções e clique em **OK**:

{% include image.html src='/files/2020/07/evolution-token-03-pt.jpg' %}

O Evolution solicita a senha para o banco de dados de certificados, que, por padrão, é vazia. Nesse caso, você pode simplesmente clicar em **OK** sem digitar nada:

{% include image.html src='/files/2020/07/evolution-token-04-pt.png' %}

Verifique que a ICP-Brasil aparece na lista de autoridades certificadoras:

{% include image.html src='/files/2020/07/evolution-token-05-pt.jpg' %}

## Configurando o token no Evolution

Assim como o navegador Chromium, e diferentemente do [Firefox] e do [Thunderbird], o cliente de _e-mail_ Evolution não dispõe de uma interface gráfica para a configuração de _tokens_, motivo pelo qual faremos esse procedimento usando o terminal.

Esse passo também pode ser pulado se você usa o navegador Chromium e já configurou seu _token_ nele. Falamos sobre isso em outro tutorial:

- [Configurando certificado digital no navegador Google Chrome / Chromium][chrome-token]

Se você está fazendo essa configuração pela primeira vez, continue lendo.

Conecte seu _token_ antes de continuar.

Primeiro, comece abrindo o terminal e instalando as [ferramentas NSS da Mozilla][mozilla-nss-tools] (é possível que já estejam instaladas em seu sistema, como já vem no Linux Kamarada):

```
# zypper in mozilla-nss-tools
```

Depois, certifique-se que está em sua pasta pessoal (_home_) e execute o comando a seguir (fazendo as devidas substituições) para adicionar o _token_ à lista de dispositivos e módulos de segurança:

```
$ cd
$ modutil -dbdir sql:.pki/nssdb/ -add "nome_do_token" -libfile /caminho/para/biblioteca
```

No lugar de `nome_do_token`, digite um nome para identificar o *token* (por exemplo, `eToken`).

No lugar de `/caminho/para/biblioteca`, informe o caminho para a biblioteca do *token*:

- se seu _token_ foi reconhecido pelo [OpenSC][how-to-token], informe `/usr/lib64/opensc-pkcs11.so`;
- se você instalou o [SafeNet Authentication Client][how-to-token] (meu caso), informe `/usr/lib64/libeToken.so`;
- para outros _tokens_, siga as instruções fornecidas pela fabricante ou certificadora.

Para mim, que uso atualmente um _token_ [SafeNet eToken 5110][etoken], o comando ficou assim:

```
$ modutil -dbdir sql:.pki/nssdb/ -add "eToken" -libfile /usr/lib64/libeToken.so
```

O programa **modutil** alerta que é necessário fechar o navegador (no nosso caso, o cliente de _e-mail_):

```
WARNING: Performing this operation while the browser is running could cause
corruption of your security databases. If the browser is currently running,
you should exit browser before continuing this operation. Type
'q <enter>' to abort, or <enter> to continue:
```

Feche o Evolution e, de volta ao terminal, tecle **Enter**.

Quando o programa encerrar, pode reabrir o Evolution:

```
Module "eToken" added to database.
```

Certifique-se de que o Evolution reconhece o seu _token_. Para isso, abra o menu **Editar** e clique na opção **Preferências**.

Se o Evolution pedir a senha PIN do seu _token_ (o que já é um bom sinal), digite-a e clique em **OK**:

{% include image.html src='/files/2020/07/evolution-token-06-pt.jpg' %}

No painel da esquerda, selecione **Certificados** e à direita, na aba **Seus certificados**, note que seu certificado digital aparece na lista:

{% include image.html src='/files/2020/07/evolution-token-07-pt.jpg' %}

## Configurando a assinatura digital no Evolution

A partir de agora, estamos todos na mesma página: usuários de Chromium ou de outros navegadores, assim como usuários de Linux Kamarada ou de outras distribuições.

O próximo passo é configurar o Evolution para assinar os _e-mails_ que enviamos a partir da nossa conta com o nosso certificado.

Na caixa de diálogo **Preferências do Evolution**, no painel da esquerda, selecione **Contas de correio** (a primeira opção). À direita, selecione sua conta de _e-mail_ e clique no botão **Editar**:

{% include image.html src='/files/2020/07/evolution-token-08-pt.jpg' %}

Dentro de **MIME seguro (S/MIME)**, em **Certificado de assinatura**, clique em **Selecionar**:

{% include image.html src='/files/2020/07/evolution-token-09-pt.jpg' %}

Selecione o **Certificado** a ser usado para assinatura e clique em **OK**:

{% include image.html src='/files/2020/07/evolution-token-10-pt.jpg' %}

De volta à caixa de diálogo **Editor de contas**, caso deseje sempre assinar digitalmente os _e-mails_ que envia, marque a opção **Sempre assinar mensagens enviadas ao usar esta conta**, abaixo de **MIME seguro (S/MIME)**.

Clique em **OK** para fechar a caixa de diálogo **Editor de contas**.

Depois, clique em **OK** para fechar a caixa de diálogo **Preferências do Evolution** e voltar à tela principal.

A assinatura digital está configurada e pronta para ser usada.

## Enviando e-mails com assinatura digital

Na tela principal do Evolution, clique no botão **Novo**:

{% include image.html src='/files/2020/07/evolution-token-11-pt.jpg' %}

Como de costume, preencha os campos **De**, **Para** e **Assunto** e redija a mensagem.

Antes de enviar, certifique-se de que a opção **Assinar S/MIME**, dentro do menu **Opções**, está marcada (se você marcou aquela opção nas configurações da conta, essa opção já deve vir marcada por padrão):

{% include image.html src='/files/2020/07/evolution-token-12-pt.jpg' %}

Quando terminar, clique em **Enviar**.

O Evolution solicita o PIN do _token_ para assinar a mensagem no momento do envio:

{% include image.html src='/files/2020/07/evolution-token-13-pt.jpg' %}

## Verificando a assinatura digital de e-mails recebidos

Se o destinatário usa o Evolution, ele pode verificar a assinatura digital da mensagem:

{% include image.html src='/files/2020/07/evolution-token-14-pt.jpg' %}
{% include image.html src='/files/2020/07/evolution-token-15-pt.jpg' %}

Pode ser que o Evolution não reconheça a assinatura, exibindo **Assinatura inválida**:

{% include image.html src='/files/2020/07/evolution-token-16-pt.jpg' %}
{% include image.html src='/files/2020/07/evolution-token-17-pt.jpg' %}

Se isso acontecer, é sinal que o destinatário não conhece o certificado da sua Autoridade Certificadora. Oriente-o instalar esse certificado, seguindo as instruções presentes nesta página. Feito isso, ao voltar ao Evolution, perceberá que a assinatura é reconhecida.

Se o destinatário utiliza o *webmail*, pode ser que o *webmail* possibilite verificar a assinatura da mensagem, como o Gmail, por exemplo, possibilita:

{% include image.html src="/files/2018/09/thunderbird-token-19.jpg" %}

Note que o Gmail também não reconhece a assinatura, muito provavelmente pelo mesmo motivo: não conhece o certificado da ICP-Brasil. Infelizmente, a solução definitiva para isso demandaria ao [Google] instalar esse certificado em seus servidores.

Ainda assim, o Gmail te possibilita, clicando em **Informações do remetente**, baixar o certificado do remetente:

{% include image.html src="/files/2018/09/thunderbird-token-20.jpg" %}

Com isso, você pode verificar o certificado você mesmo:

{% include image.html src="/files/2020/07/evolution-token-18-pt.jpg" %}

## Referências

- [Red Hat Bugzilla – Bug 624851 – Evolution mail client: Unable to load encryption cert from the smart card to send/receive encrypted messages.][redhat]
- [Using OpenSC in Evolution - OpenSC wiki][opensc]
- [Mail encryption and certificates - GNOME Help][gnome-help]

[how-to-token]:                 {% post_url pt/2018-04-16-configurando-certificado-digital-no-linux-opensuse %}
[how-to-thunderbird-token]:     {% post_url pt/2018-09-24-assinando-emails-enviados-com-certificado-digital-no-thunderbird %}
[mozilla]:                      https://www.mozilla.org/pt-BR/
[evolution]:                    https://wiki.gnome.org/Apps/Evolution
[gnome]:                        https://br.gnome.org/
[kamarada-15.1]:                {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[leap-15.1]:                    {% post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[gmail]:                        https://mail.google.com/
[gsuite]:                       https://gsuite.google.com/
[gnome-online-accounts-google]: {% post_url pt/2019-04-09-tire-o-maximo-proveito-do-gnome-sincronizando-sua-conta-do-google %}
[exchange]:                     https://www.microsoft.com/pt-br/microsoft-365/exchange/email
[how-to-evolution-office-365]:  {% post_url pt/2017-09-05-conecte-o-evolution-ao-office-365 %}
[chromium]:                     https://www.chromium.org
[chrome]:                       https://www.google.com/chrome/
[opera]:                        https://www.opera.com/pt-br
[vivaldi]:                      https://vivaldi.com/pt-br/
[brave]:                        https://brave.com/
[how-to-install-certificates]:  {% post_url pt/2017-08-29-como-instalar-certificados-de-seguranca-no-linux %}
[icp-brasil-crt]:               http://acraiz.icpbrasil.gov.br/credenciadas/RAIZ/ICP-Brasilv5.crt
[icp-brasil]:                   http://www.iti.gov.br/icp-brasil
[firefox]:                      https://www.mozilla.org/pt-BR/firefox/
[thunderbird]:                  https://www.thunderbird.net/
[chrome-token]:                 {% post_url pt/2019-09-26-configurando-certificado-digital-no-navegador-google-chrome-chromium %}
[mozilla-nss-tools]:            https://developer.mozilla.org/pt-BR/docs/Mozilla/Projects/NSS/Tools
[etoken]:                       https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/etoken-5110-usb-token/
[google]:                       https://www.google.com.br
[redhat]:                       https://bugzilla.redhat.com/show_bug.cgi?id=624851#c38
[opensc]:                       https://github.com/OpenSC/OpenSC/wiki/Using-OpenSC-in-Evolution
[gnome-help]:                   https://help.gnome.org/users/evolution/stable/mail-encryption.html.en
