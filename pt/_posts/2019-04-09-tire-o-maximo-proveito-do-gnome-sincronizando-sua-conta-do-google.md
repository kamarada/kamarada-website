---
date: 2019-04-09 23:50:00 GMT-3
image: '/files/2019/04/gnome-online-accounts-google.jpg'
layout: post
published: true
nickname: 'gnome-online-accounts-google'
title: 'Tire o máximo proveito do GNOME sincronizando sua conta do Google'
---

{% include image.html src="/files/2019/04/gnome-online-accounts-google.jpg" %}

Integrar sua conta do [Google] ao *desktop* [GNOME] o torna mais inteligente, produtivo e interessante, uma vez que você pode acessar serviços como *e-mail*, agenda e arquivos na nuvem diretamente do *desktop* e receber notificações desses serviços enquanto usa o computador. Além disso, é algo fácil de fazer, como você verá neste *post*.

<!--more-->

No [GNOME], as [contas *online*][goa] (a exemplo da [conta do Google][google-account]) são adicionadas pelo aplicativo **Configurações** e podem então ser usadas pelos demais aplicativos.

O que vou mostrar aqui também vale se você trabalha em uma empresa ou estuda em uma escola que te fornece uma conta do [G Suite][gsuite].

Para adicionar sua conta do Google (ou do G Suite) ao GNOME, abra o aplicativo **Configurações**, clique em **Contas on-line** e depois clique em **Google**:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-01-pt.jpg" %}

Na tela seguinte, informe seu *login* e senha da conta do Google (normalmente o *login* é o endereço de *e-mail* do [Gmail]):

{% include image.html src="/files/2019/04/gnome-online-accounts-google-02-pt.jpg" %}

Revise as permissões do GNOME e autorize-o a acessar seus dados do Google:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-03-pt.jpg" %}

Pronto, sua conta foi adicionada, você pode escolher o que deseja sincronizar:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-04-pt.jpg" %}

(ou deixar tudo marcado, que é o padrão)

Agora você pode fechar o aplicativo **Configurações**.

Experimente abrir os aplicativos do GNOME e veja que seus dados do Google estão lá.

Seus *e-mails* do Gmail estão no cliente de *e-mail* [**Evolution**][evolution]:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-05-pt.jpg" caption="Evolution (*e-mail*)" %}

**Observação:** o [Mozilla Thunderbird][thunderbird] não se integra com as contas *online* do GNOME. Se você prefere utilizá-lo, deverá configurar o Gmail nele. Veja aqui como fazer isso:

- [Sincronizando o Gmail no Thunderbird][how-to-thunderbird-gmail]

Pelo Evolution também é possível gerenciar seus [Contatos do Google][google-contacts] e eventos do [Google Agenda][google-calendar], mas o GNOME também possui aplicativos específicos, que são o [**Calendário**][gnome-calendar]:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-06-pt.jpg" caption="Calendário" %}

E o [**Contatos**][gnome-contacts]:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-07-pt.jpg" caption="Contatos" %}

Você também pode consultar rapidamente seus eventos do Google Agenda clicando na **data e hora** na barra do topo do GNOME e selecionando qualquer data no calendário:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-08-pt.jpg" %}

Seus documentos do [Google Docs][google-docs] aparecem no aplicativo [**Documentos**][gnome-documents]:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-09-pt.jpg" caption="Documentos" %}

Assim como, de modo mais geral, os arquivos que estão no [Google Drive][google-drive] podem ser acessados pelo aplicativo [**Arquivos**][gnome-files]:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-10-pt.jpg" caption="Arquivos" %}

Ao abrir esse aplicativo, perceba que à esquerda há um ícone para sua conta do Google. Clique nesse ícone e o Arquivos vai se conectar ao Google Drive e listar seus arquivos (isso pode demorar um tempo). Você pode abri-los, editá-los, renomeá-los, exclui-los como se eles estivessem em seu computador. Ao clicar no ícone **Desmontar**, sua conta do Google Drive é desconectada até que você a acesse novamente.

Observe que essa solução funciona diferente, por exemplo, do cliente para [Dropbox], que baixa todos os seus arquivos para o computador e permite que você trabalhe neles mesmo *offline*. O Arquivos do GNOME baixa apenas os arquivos que você abre e envia quaisquer alterações que você fizer imediatamente.

Não há um cliente oficial do Google Drive para Linux semelhante ao cliente para Dropbox.

Por fim, se você tem alguma impressora configurada no [Google Cloud Print][google-cloud-print], ela aparece na lista de impressoras disponíveis quando você manda imprimir algum arquivo:

{% include image.html src="/files/2019/04/gnome-online-accounts-google-11-pt.jpg" caption="Impressoras" %}

Também há a opção de gerar um [PDF] e salvá-lo no Google Drive.

O único aplicativo que não consegui utilizar em conjunto com a conta do Google foi o [**Fotos**][gnome-photos], que talvez devesse exibir as fotos do [Google Fotos][google-photos], mas esse é [um problema conhecido][photos-dont-sync].

Se você trabalha em uma empresa cujo *e-mail* é servido pelo [Microsoft Exchange][exchange] ou pelo [Office 365][office-365], saiba que também pode configurá-lo como uma conta *online* do GNOME. Para mais informações, consulte este *post*:

- [Conecte o Evolution ao Office 365][how-to-evolution-office-365]

## Referências

- [GNOME Online Accounts - GNOME Wiki][goa]
- [How to connect Ubuntu 18.04 to your Google account - TechRepublic][techrepublic-1]
- [How to make the most out of Google Drive on GNOME - TechRepublic][techrepublic-2]
- [Online accounts - GNOME Help][goa-help]

[google]:                       https://www.google.com/
[gnome]:                        https://www.gnome.org/
[goa]:                          https://wiki.gnome.org/Projects/GnomeOnlineAccounts
[google-account]:               https://myaccount.google.com/
[gsuite]:                       https://gsuite.google.com
[gmail]:                        https://gmail.com/
[evolution]:                    https://wiki.gnome.org/Apps/Evolution
[thunderbird]:                  https://www.thunderbird.net
[how-to-thunderbird-gmail]:     {%post_url pt/2018-09-12-sincronizando-o-gmail-no-thunderbird %}
[google-contacts]:              https://contacts.google.com/
[google-calendar]:              https://calendar.google.com/
[gnome-calendar]:               https://wiki.gnome.org/Apps/Calendar
[gnome-contacts]:               https://wiki.gnome.org/Apps/Contacts
[google-docs]:                  https://docs.google.com/
[gnome-documents]:              https://wiki.gnome.org/Apps/Documents
[google-drive]:                 https://drive.google.com/
[gnome-files]:                  https://wiki.gnome.org/Apps/Files
[dropbox]:                      https://www.dropbox.com/
[google-cloud-print]:           https://www.google.com/cloudprint
[pdf]:                          https://pt.wikipedia.org/wiki/Portable_Document_Format
[gnome-photos]:                 https://wiki.gnome.org/Apps/Photos
[google-photos]:                https://photos.google.com/
[photos-dont-sync]:             https://www.reddit.com/r/gnome/comments/60o9uv/online_accounts_google_photos/
[exchange]:                     https://products.office.com/pt-BR/exchange/email
[office-365]:                   https://portal.office.com
[how-to-evolution-office-365]:  {%post_url pt/2017-09-05-conecte-o-evolution-ao-office-365 %}
[techrepublic-1]:               https://www.techrepublic.com/article/how-to-connect-ubuntu-18-04-to-your-google-account/
[techrepublic-2]:               https://www.techrepublic.com/article/how-to-make-the-most-out-of-google-drive-on-gnome/
[goa-help]:                     https://help.gnome.org/users/gnome-help/stable/accounts.html.en
