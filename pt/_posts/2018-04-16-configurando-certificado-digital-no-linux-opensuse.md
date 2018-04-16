---
date: '2018-04-16 00:30:00 UTC-3'
image: '/files/2018/04/etoken.jpg'
layout: post
published: true
title: 'Configurando certificado digital no Linux openSUSE'
nickname: 'how-to-token'
excerpt: 'Um certificado digital permite identificar e autenticar pessoas físicas, empresas ou computadores em sites e sistemas. Ele garante princípios da segurança da informação às operações realizadas por meio dele, como autenticidade e não repúdio, atribuindo-lhes validade jurídica e dispensando o reconhecimento de firma.'
---

Um [certificado digital][certificado-digital] permite **identificar** e **autenticar** pessoas físicas, empresas ou computadores em *sites* e sistemas. Ele garante princípios da [segurança da informação][seguranca-da-informacao] às operações realizadas por meio dele, como **autenticidade** e **não repúdio**, atribuindo-lhes validade jurídica e dispensando o reconhecimento de firma.

Existem basicamente 2 tipos de certificado digital:

- o **Certificado A1**, que é armazenado no computador (ou dispositivo móvel, como *smartphone* ou *tablet*) e tem validade de 1 ano; e
- o **Certificado A3**, que é armazenado em uma mídia criptográfica ([cartão inteligente][smart-card] ou [token][token]) e tem validade de 1 a 3 anos.

{% include image.html src="/files/2018/04/etoken.jpg" caption="Um *token* parece um *pendrive*, mas é uma mídia criptográfica, serve apenas para armazenar um certificado digital" %}

Algumas utilidades do certificado digital para pessoas físicas e jurídicas são:

- Assinar e enviar documentos com validade jurídica pela Internet;
- Assinar [Nota Fiscal eletrônica (NF-e)][nfe];
- Entrar em ambientes seguros;
- Acessar sistemas seguros do governo que possibilitam atendimentos antes possíveis apenas presencialmente, como o [eCAC][ecac] da [Receita Federal][receita];
- Enviar declarações de imposto de renda, seja de pessoa física ou jurídica; e
- Realizar transações bancárias com mais segurança.

Para uma lista completa de tipos de certificados digitais e suas possíveis utilizações para pessoas físicas e jurídicas, consulte [esta página][certisign-indicacoes].

Há também os certificados digitais que identificam *sites*. Quando você acessa um *site* que apresenta um certificado digital, o navegador exibe o ícone de um cadeado verde, indicando que o *site* é autêntico e seguro. Já falamos um pouco sobre certificados de *sites* em [outro *post*][certificados-sites].

Neste *post*, você verá como utilizar um *token* para acessar um sistema do governo com certificado digital no [Linux openSUSE][opensuse].

Na demonstração, vou utilizar um *token* USB igual ao da imagem, modelo [eToken PRO][etoken], da fabricante [SafeNet][safenet] (antiga [Aladdin][aladdin]).

## Instalando os pacotes necessários

No Linux, a utilização de mídias criptográficas é gerenciada principalmente pelos *softwares* [PC/SC][pcsc] e [OpenSC][opensc].

Para instalá-los no openSUSE, execute o seguinte comando (observe a notação para executá-lo como usuário *root*):

```
# zypper in opensc pcsc-ccid pcsc-lite pcsc-tools
```

Inicie o serviço do PC/SC, que disponibiliza as mídias criptográficas para os aplicativos, e habilite-o para que seja iniciado automaticamente junto com o sistema:

```
# systemctl start pcscd
# systemctl enable pcscd
```

Você pode verificar que o serviço está funcionando com:

```
# systemctl status pcscd
● pcscd.service - PC/SC Smart Card Daemon
   Loaded: loaded (/usr/lib/systemd/system/pcscd.service; indirect; vendor preset: disabled)
   Active: active (running) since Sun 2018-04-15 17:43:24 -03; 10s ago
 Main PID: 10394 (pcscd)
    Tasks: 3 (limit: 4915)
   CGroup: /system.slice/pcscd.service
           └─10394 /usr/sbin/pcscd --foreground

Apr 15 17:43:24 localhost.localdomain systemd[1]: Started PC/SC Smart Card Daemon.
```

Conecte o *token* e verifique que ele é reconhecido como um dispositivo USB (note que você pode executar o comando a seguir como usuário *root* ou comum):

```
$ lsusb
Bus 001 Device 002: ID 8087:8001 Intel Corp. 
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 002 Device 005: ID 0bda:0129 Realtek Semiconductor Corp. RTS5129 Card Reader Controller
Bus 002 Device 004: ID 1bcf:2c81 Sunplus Innovation Technology Inc. 
Bus 002 Device 002: ID 13fe:4200 Kingston Technology Company Inc. 
Bus 002 Device 006: ID 045e:0745 Microsoft Corp. Nano Transceiver v1.0 for Bluetooth
Bus 002 Device 007: ID 0529:0620 Aladdin Knowledge Systems Token JC
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Observe o *token* listado na penúltima linha.

Verifique que o PC/SC reconhece o *token* com o comando:

```
$ pcsc_scan
PC/SC device scanner
V 1.5.2 (c) 2001-2017, Ludovic Rousseau <ludovic.rousseau@free.fr>
Using reader plug'n play mechanism
Scanning present readers...
0: SafeNet eToken 5100 [Main Interface] 00 00
 
Sun Apr 15 17:45:37 2018
 Reader 0: SafeNet eToken 5100 [Main Interface] 00 00
  Card state: Card inserted, 
  ATR: 3B D5 18 00 81 31 FE 7D 80 73 C8 21 10 F4

ATR: 3B D5 18 00 81 31 FE 7D 80 73 C8 21 10 F4
+ TS = 3B --> Direct Convention
+ T0 = D5, Y(1): 1101, K: 5 (historical bytes)
  TA(1) = 18 --> Fi=372, Di=12, 31 cycles/ETU
    129032 bits/s at 4 MHz, fMax for Fi = 5 MHz => 161290 bits/s
  TC(1) = 00 --> Extra guard time: 0
  TD(1) = 81 --> Y(i+1) = 1000, Protocol T = 1 
-----
  TD(2) = 31 --> Y(i+1) = 0011, Protocol T = 1 
-----
  TA(3) = FE --> IFSC: 254
  TB(3) = 7D --> Block Waiting Integer: 7 - Character Waiting Integer: 13
+ Historical bytes: 80 73 C8 21 10
  Category indicator byte: 80 (compact TLV data object)
    Tag: 7, len: 3 (card capabilities)
      Selection methods: C8
        - DF selection by full DF name
        - DF selection by partial DF name
        - Implicit DF selection
      Data coding byte: 21
        - Behaviour of write functions: proprietary
        - Value 'FF' for the first byte of BER-TLV tag fields: invalid
        - Data unit in quartets: 2
      Command chaining, length fields and logical channels: 10
        - Logical channel number assignment: by the card
        - Maximum number of logical channels: 1
+ TCK = F4 (correct checksum)

Possibly identified card (using /usr/share/pcsc/smartcard_list.txt):
3B D5 18 00 81 31 FE 7D 80 73 C8 21 10 F4
	Bank of Lithuania Identification card
	Gemalto SafeNet eToken Java Based Cards
	https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/
```

Observe que esse comando não para, você deve teclar **Ctrl + C** para interrompê-lo.

O OpenSC pode ser testado com o comando:

```
$ opensc-tool -l
# Detected readers (pcsc)
Nr.  Card  Features  Name
0    Yes             SafeNet eToken 5100 [Main Interface] 00 00
```

### Especificidades do token Aladdin/SafeNet

Observe que ambos os *softwares* reconhecem o *token*, mas o atribuem um modelo errado: `SafeNet eToken 5100`, que é [outro *token*][safenet-etoken-5100] da mesma fabricante.

A consequência disso é que não é possível, a priori, utilizar o *token*. Os comandos a seguir que deveriam retornar mais informações sobre o *token* resultam em erro:

```
$ opensc-tool -r 0 -f
SELECT FILE failed: Incorrect parameters in APDU

$ pkcs15-tool --reader 0 --list-pins
Failed to connect to card: Card is invalid or cannot be handled
```

Vários *tokens* já são reconhecidos e funcionam bem com a dupla PC/SC e OpenSC, mas no caso específico do Aladdin/SafeNet eToken PRO é necessário instalar também um *software* proprietário da SafeNet, que é o [SafeNet Authentication Client][sac].

O ideal é que você obtenha esse *software* da certificadora onde você adquiriu o *token*, mas você pode obtê-lo do *site* da [Soluti][soluti], que é uma das certificadoras que suportam a utilização de Linux.

Acesse o [*site* da Soluti][soluti] e clique, na sequência, em:

- **Dúvidas e suporte**
- **Token**
- **SafeNet**
- **Linux**

Por fim, clique no *link* **SafeNet Authentication Client 9.1 para distribuições Red Hat/Fedora de 32 ou 64 bits** (o primeiro da lista):

{% include image.html src="/files/2018/04/token-01-pt.jpg" %}

Salve o arquivo.

Ele é criado com o nome `safenet_rpm_9.1.7-0.tar.gz` na pasta `Downloads`.

Abra essa pasta, clique com o botão direito do *mouse* no arquivo baixado e clique em **Extrair aqui**:

{% include image.html src="/files/2018/04/token-02-pt.jpg" %}

É criada a pasta `safenet_rpm_9.1.7-0` com o conteúdo extraído do arquivo.

Clique com o botão direito nessa pasta e depois clique em **Abrir no terminal**:

{% include image.html src="/files/2018/04/token-03-pt.jpg" %}

Alterne para o usuário *root*, para realizar a instalação:

```
$ su
```

Instale os requisitos do SafeNet Authentication Client:

```
# zypper in libcrypto43 openssl
# ln -s /usr/lib64/libcrypto.so.1.1 /usr/lib64/libcrypto.so.6
```

E, por fim, instale o SafeNet Authentication Client em si:

```
# ./install.sh 
################################# [100%]
Updating / installing...
################################# [100%]
could not find mozilla directory
Enable pcscd service
Enable SACSrv service
SafeNet Authentication Client installation completed.
Installing Language code pt-BR.
logout and login to apply changes
```

Reinicie o computador (fazer *logout* e *login* como sugere o *script* de instalação não funcionou ao menos para mim).

Quando voltar, inicie o **SafeNet Authentication Client Tools** (o primeiro ícone):

{% include image.html src="/files/2018/04/token-04-pt.jpg" %}

Observe que ele reconhece o *token* devidamente:

{% include image.html src="/files/2018/04/token-05-pt.jpg" %}

## Configurando o token no Firefox

Para poder utilizar o *token* no navegador [Mozilla Firefox][firefox], vamos cadastrá-lo como um dispositivo de segurança.

Para isso, com o Firefox aberto, abra o **menu do Firefox** e clique em **Preferências**.

Depois, clique em **Privacidade e Segurança** e, por último, no botão **Dispositivos de Segurança**, no final:

{% include image.html src="/files/2018/04/token-06-pt.png" %}

Em **Nome do módulo**, digite um nome que identifique o *token* (por exemplo, `eToken`).

Em **Nome do arquivo do módulo**, informe o caminho para a biblioteca do *token*:

- se seu *token* foi reconhecido pelo OpenSC, informe `/usr/lib64/opensc-pkcs11.so`;
- se você instalou o SafeNet Authentication Client (meu caso), informe `/usr/lib64/libeToken.so`;
- para outros *tokens*, siga as instruções fornecidas pela fabricante ou certificadora.

Quando terminar, clique em **OK**:

{% include image.html src="/files/2018/04/token-07-pt.png" %}

Observe que o *token* é adicionado à lista de **Dispositivos e módulos de segurança**, clique em **OK**:

{% include image.html src="/files/2018/04/token-08-pt.png" %}

## Acessando o sistema eCAC

O [eCAC][ecac] é um sistema da [Receita Federal][receita] que disponibiliza pela Internet [vários serviços][ecac-servicos] para pessoas físicas e jurídicas, antes disponíveis apenas presencialmente. É possível acessá-lo por meio de um código de acesso gerado na hora, mas menos serviços estão disponíveis por esse meio, que é menos seguro. A totalidade dos serviços está disponível apenas para quem o acessa com certificado digital.

Alguns dos serviços mais úteis para pessoas físicas incluem consultar declarações e recibos já enviados do imposto de renda e [verificar se a declaração caiu na malha fina][malha-fina], assim como [tomar ações para regularizar a situação][malha-fina-regularizar].

**Observação:** o eCAC é um sistema do governo assinado com um certificado de segurança próprio. Para acessá-lo, você deve instalar o certificado da Autoridade Certificadora Raiz Brasileira. Se ainda não fez isso, veja como fazer [nesse *post*][certificados-sites].

Para acessar o eCAC, certifique-se de que o *token* está conectado ao computador.

Depois, clique no *link*:

[https://cav.receita.fazenda.gov.br/](https://cav.receita.fazenda.gov.br/)

Na tela de *login*, clique em **Certificado Digital**:

{% include image.html src="/files/2018/04/token-09-pt.png" %}

Digite a senha PIN do *token* e clique em **OK**:

{% include image.html src="/files/2018/04/token-10-pt.png" %}

Confirme as informações do certificado a ser utilizado e clique em **OK**:

{% include image.html src="/files/2018/04/token-11-pt.jpg" %}

Verifique suas informações na parte superior da tela:

{% include image.html src="/files/2018/04/token-12-pt.png" %}

Pronto! Agora você está no ambiente seguro da Receita Federal e sabe que configurou corretamente seu certificado digital no Linux openSUSE!

Divirta-se bastante... (*have a lot of fun...*)

## Referências

- [Certificado Digital | Certisign][certisign-certificado-digital]
- [O que é Certificado Digital? | Serasa Experian][serasa-certificado-digital]
- [Certificados Digitais — Receita Federal][receita-certificados-digitais]
- [Instalar eToken Alladin, usar sites do governo com certificado Digital e assinar documentos PDF — Dicas do cotidiano com linux][aladdin-etoken-ubuntu]
- [Howto use Aladdin eToken under Linux | Rene Mayrhofer's virtual home][aladdin-etoken-linux]
- [Configuring Smart Card authentication on SUSE Linux Enterprise - SUSE Communities][smart-cards-sle]
- [Aladdin eToken PRO · OpenSC/OpenSC Wiki · GitHub][aladdin-etoken-opensc]
- [Unsuported Aladdin eToken PRO USB 72k Java · Issue #461 · OpenSC/OpenSC · GitHub][aladdin-etoken-opensc-issue]
- [Installing OpenSC PKCS#11 Module in Firefox, Step by Step · OpenSC/OpenSC Wiki · GitHub][opensc-firefox]

[certificado-digital]:              https://pt.wikipedia.org/wiki/Certificado_digital
[seguranca-da-informacao]:          https://pt.wikipedia.org/wiki/Seguran%C3%A7a_da_informa%C3%A7%C3%A3o
[smart-card]:                       https://pt.wikipedia.org/wiki/Cart%C3%A3o_inteligente
[token]:                            https://pt.wikipedia.org/wiki/Token_(chave_eletr%C3%B4nica)
[nfe]:                              http://www.nfe.fazenda.gov.br/
[ecac]:                             https://cav.receita.fazenda.gov.br/
[receita]:                          http://idg.receita.fazenda.gov.br/
[certisign-indicacoes]:             https://www.certisign.com.br/certificado-digital/indicacao-uso
[certificados-sites]:               {%post_url 2017-08-29-como-instalar-certificados-de-seguranca-no-linux %}
[opensuse]:                         https://www.opensuse.org/
[etoken]:                           https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/
[safenet]:                          https://safenet.gemalto.com/
[aladdin]:                          https://pt.wikipedia.org/wiki/Aladdin_Knowledge_Systems
[pcsc]:                             https://pcsclite.apdu.fr/
[opensc]:                           https://github.com/OpenSC/OpenSC/wiki
[safenet-etoken-5100]:              https://safenet.gemalto.com/multi-factor-authentication/authenticators/pki-usb-authentication/etoken-5110-usb-token/
[sac]:                              https://safenet.gemalto.com/etoken-pki-client/
[soluti]:                           https://www.soluti.com.br/
[firefox]:                          https://www.mozilla.org/pt-BR/firefox/
[ecac-servicos]:                    http://www.receita.fazenda.gov.br/aplicacoes/ATBHE/servicos-ecac/default.aspx
[malha-fina]:                       http://g1.globo.com/economia/imposto-de-renda/2016/noticia/2016/05/contribuinte-ja-pode-saber-se-caiu-na-malha-fina-do-imposto-de-renda-2016.html
[malha-fina-regularizar]:           http://economia.estadao.com.br/blogs/regina-pitoscia/sua-declaracao-ficou-em-malha-fina-acerte-logo-a-situacao/
[certisign-certificado-digital]:    https://www.certisign.com.br/certificado-digital
[serasa-certificado-digital]:       https://serasa.certificadodigital.com.br/o-que-e/
[receita-certificados-digitais]:    http://idg.receita.fazenda.gov.br/orientacao/tributaria/senhas-e-procuracoes/senhas/certificados-digitais
[aladdin-etoken-ubuntu]:            https://diadialinux.wordpress.com/2017/03/02/instalar-etoken-alladin-usar-sites-do-governo-com-certificado-digital-e-assinar-documentos-pdf/
[aladdin-etoken-linux]:             https://www.mayrhofer.eu.org/aladdin-etoken-under-linux
[smart-cards-sle]:                  https://www.suse.com/c/configuring-smart-card-authentication-suse-linux-enterprise/
[aladdin-etoken-opensc]:            https://github.com/OpenSC/OpenSC/wiki/Aladdin-eToken-PRO
[aladdin-etoken-opensc-issue]:      https://github.com/OpenSC/OpenSC/issues/461
[opensc-firefox]:                   https://github.com/OpenSC/OpenSC/wiki/Installing-OpenSC-PKCS%2311-Module-in-Firefox,-Step-by-Step