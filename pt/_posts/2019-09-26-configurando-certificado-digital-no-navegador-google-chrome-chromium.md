---
date: 2019-09-26 01:15:00 GMT-3
image: '/files/2019/09/chrome-token.png'
layout: post
published: true
nickname: 'chrome-token'
title: 'Configurando certificado digital no navegador Google Chrome / Chromium'
---

Nesse _post_, veremos como configurar o navegador [Google Chrome][google-chrome] para o uso de certificados digitais armazenados em mídias criptográficas, tais como _tokens_ e cartões inteligentes (_smart cards_). As instruções apresentadas aqui também valem para o navegador [Chromium], que nada mais é do que o [_software_ livre][free-software] no qual o Chrome se baseia. Como teste, acessaremos um sistema do governo usando o navegador recém-configurado.

{% include image.html src="/files/2019/09/chrome-token.png" %}

Para referência futura, aqui uso o [Linux Kamarada 15.1 Beta][kamarada-15.1-beta] (baseado no [openSUSE Leap 15.1][leap-15.1]).

## Pré-requisitos

Antes, para deixar todo mundo na mesma página, recomendo a leitura de *posts* anteriores falando sobre certificados digitais:

- [Como instalar certificados de segurança no Linux][how-to-install-certificates]: aqui você verá como instalar o certificado da AC no Chrome
- [Configurando certificado digital no Linux openSUSE][how-to-token]: aqui você verá como instalar os programas necessários para o _token_ funcionar (não é necessário ler a partir da parte que fala sobre a configuração do navegador, que é o que faremos aqui, só que no Chrome, em vez do [Mozilla Firefox][mozilla-firefox], que foi usado naquele _post_)

## Configurando o token no Chrome

A configuração do Chrome para o uso de certificados digitais é semelhante à do Firefox, porém o Chrome não dispõe de uma interface gráfica para realizá-la, motivo pelo qual faremos todo o procedimento usando a linha de comando.

Conecte seu _token_ antes de continuar.

Primeiro, comece abrindo o terminal e instalando as [ferramentas NSS da Mozilla][mozilla-nss-tools] (é possível que já estejam instaladas em seu sistema):

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

O programa **modutil** alerta que é necessário fechar o navegador:

```
WARNING: Performing this operation while the browser is running could cause
corruption of your security databases. If the browser is currently running,
you should exit browser before continuing this operation. Type
'q <enter>' to abort, or <enter> to continue:
```

Feche quaisquer navegadores abertos e tecle **Enter**. Quando o programa encerrar, pode reabrir o(s) navegador(es):

```
Module "eToken" added to database.
```

Você pode verificar que o _token_ foi adicionado com sucesso conferindo a lista de dispositivos e módulos de segurança:

```
$ modutil -dbdir sql:.pki/nssdb/ -list

Listing of PKCS #11 Modules
-----------------------------------------------------------
  1. NSS Internal PKCS #11 Module
	   uri: pkcs11:library-manufacturer=Mozilla%20Foundation;library-description=NSS%20Internal%20Crypto%20Services;library-version=3.45
	 slots: 2 slots attached
	status: loaded

	 slot: NSS Internal Cryptographic Services
	token: NSS Generic Crypto Services
	  uri: pkcs11:token=NSS%20Generic%20Crypto%20Services;manufacturer=Mozilla%20Foundation;serial=0000000000000000;model=NSS%203

	 slot: NSS User Private Key and Certificate Services
	token: NSS Certificate DB
	  uri: pkcs11:token=NSS%20Certificate%20DB;manufacturer=Mozilla%20Foundation;serial=0000000000000000;model=NSS%203

  2. eToken
	library name: /usr/lib64/libeToken.so
	   uri: pkcs11:library-manufacturer=SafeNet,%20Inc.;library-description=SafeNet%20eToken%20PKCS%2311;library-version=9.0
	 slots: 10 slots attached
	status: loaded

	 slot: AKS ifdh [eToken 5110 SC] 00 00
	token: Vinicius
	  uri: pkcs11:token=Vinicius;manufacturer=SafeNet,%20Inc.;serial=026a102c;model=eToken

	 slot:
	token:
	  uri: pkcs11:

	 slot:
	token:
	  uri: pkcs11:

	 slot:
	token:
	  uri: pkcs11:

	 slot: ETOKEN HID READER 0
	token:
	  uri: pkcs11:

	 slot: ETOKEN HID READER 1
	token:
	  uri: pkcs11:

	 slot: ETOKEN HID READER 2
	token:
	  uri: pkcs11:

	 slot: ETOKEN HID READER 3
	token:
	  uri: pkcs11:

	 slot:
	token:
	  uri: pkcs11:

	 slot:
	token:
	  uri: pkcs11:
-----------------------------------------------------------
```

## Acessando o sistema eCAC

O [eCAC] é um sistema da [Receita Federal][receita-federal] que disponibiliza pela Internet [vários serviços][ecac-servicos] para pessoas físicas e jurídicas, antes disponíveis apenas presencialmente. É possível acessá-lo por meio de um código de acesso gerado na hora, mas menos serviços estão disponíveis por esse meio, que é menos seguro. A totalidade dos serviços está disponível apenas para quem o acessa com certificado digital.

Alguns dos serviços mais úteis para pessoas físicas incluem consultar declarações e recibos já enviados do imposto de renda e [verificar se a declaração caiu na malha fina][malha-fina], assim como [tomar ações para regularizar a situação][malha-fina-regularizar].

**Observação:** o eCAC é um sistema do governo assinado com um certificado de segurança próprio. Para acessá-lo, você deve instalar o certificado da Autoridade Certificadora Raiz Brasileira. Se ainda não fez isso, veja como fazer neste *post*:

- [Como instalar certificados de segurança no Linux][how-to-install-certificates]

Para acessar o eCAC, certifique-se de que o *token* está conectado ao computador.

Depois, clique no *link*:

[https://cav.receita.fazenda.gov.br/](https://cav.receita.fazenda.gov.br/)

Na tela de *login*, clique em **Certificado Digital**:

{% include image.html src="/files/2019/09/chrome-token-01.jpg" %}

Digite a senha PIN do *token* e clique em **Desbloquear**:

{% include image.html src="/files/2019/09/chrome-token-02-pt.jpg" %}

Confirme o certificado a ser utilizado e clique em **OK**:

{% include image.html src="/files/2019/09/chrome-token-03-pt.jpg" %}

Já dentro do sistema, verifique suas informações na parte superior da tela:

{% include image.html src="/files/2019/09/chrome-token-04-pt.jpg" %}

Pronto! Agora você está no ambiente seguro da Receita Federal e sabe que configurou corretamente seu certificado digital no Google Chrome!

Divirta-se bastante... (*have a lot of fun...*)

## Posts relacionados

Agora que configurou seu certificado digital, veja como pode usá-lo:

- [Como transmitir a declaração do Imposto de Renda com certificado digital no Linux openSUSE]({% post_url pt/2018-04-16-como-transmitir-a-declaracao-do-imposto-de-renda-com-certificado-digital-no-linux-opensuse %})
- [Assinando e-mails enviados com certificado digital no Thunderbird]({%post_url pt/2018-09-24-assinando-emails-enviados-com-certificado-digital-no-thunderbird %})
- [Assinando documentos ODF e PDF com o LibreOffice]({%post_url pt/2018-12-16-assinando-documentos-odf-e-pdf-com-o-libreoffice %})
- [SSH com autenticação em dois fatores usando certificado digital]({%post_url pt/2018-12-19-ssh-com-autenticacao-em-dois-fatores-usando-certificado-digital %})

## Referências

- [CommonAccessCard - Community Help Wiki - Ubuntu][ubuntu]
- [Smartcard authentification in Chromium - Jan Holthuis][jan.holthuis]

[google-chrome]:                https://www.google.com/chrome/
[chromium]:                     https://www.chromium.org/
[free-software]:                https://www.gnu.org/philosophy/free-sw.pt-br.html
[kamarada-15.1-beta]:           {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[leap-15.1]:                    {% post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[how-to-install-certificates]:  {% post_url pt/2017-08-29-como-instalar-certificados-de-seguranca-no-linux %}
[how-to-token]:                 {% post_url pt/2018-04-16-configurando-certificado-digital-no-linux-opensuse %}
[mozilla-firefox]:              https://www.mozilla.org/pt-BR/firefox/
[mozilla-nss-tools]:            https://developer.mozilla.org/pt-BR/docs/Mozilla/Projects/NSS/Tools
[etoken]:                       https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/etoken-5110-usb-token/
[ecac]:                         https://cav.receita.fazenda.gov.br/
[receita-federal]:              http://idg.receita.fazenda.gov.br/
[ecac-servicos]:                http://www.receita.fazenda.gov.br/aplicacoes/ATBHE/servicos-ecac/default.aspx
[malha-fina]:                   http://g1.globo.com/economia/imposto-de-renda/2016/noticia/2016/05/contribuinte-ja-pode-saber-se-caiu-na-malha-fina-do-imposto-de-renda-2016.html
[malha-fina-regularizar]:       http://economia.estadao.com.br/blogs/regina-pitoscia/sua-declaracao-ficou-em-malha-fina-acerte-logo-a-situacao/
[ubuntu]:                       https://help.ubuntu.com/community/CommonAccessCard#Google_Chrome.2FChromium_Setup
[jan.holthuis]:                 https://homepage.ruhr-uni-bochum.de/jan.holthuis/posts/smartcard-authentification-in-chrome
