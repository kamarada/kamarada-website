---
date: 2017-09-05 23:45:00
image: '/files/2017/09/evolution.png'
layout: post
published: true
nickname: 'how-to-evolution-office-365'
title: 'Conecte o Evolution ao Office 365'
excerpt: 'Se você trabalha em uma empresa cujo e-mail é servido localmente pelo Microsoft Exchange ou na nuvem pelo Office 365, você pode gerenciar seus e-mails pelo computador utilizando os tradicionais protocolos POP, IMAP e SMTP. No entanto, alguns recursos adicionais como gerenciar agendas e contatos estão disponíveis apenas para quem utiliza o protocolo proprietário Exchange ActiveSync da Microsoft. Pois saiba que nesse cenário usuários de Linux não precisam deixar seu sistema favorito para poder se comunicar com seus colegas: veja neste post como conectar o Evolution ao Microsoft Exchange ou ao Office 365 com as contas online do GNOME.'
---

Se você trabalha em uma empresa cujo *e-mail* é servido localmente pelo [Microsoft Exchange][exchange] ou na nuvem pelo [Office 365][office-365], você pode gerenciar seus *e-mails* pelo computador utilizando os tradicionais protocolos [POP], [IMAP] e [SMTP]. No entanto, alguns recursos adicionais como gerenciar agendas e contatos estão disponíveis apenas para quem utiliza o protocolo proprietário [Exchange ActiveSync][activesync] da [Microsoft].

Pois saiba que nesse cenário usuários de [Linux] não precisam deixar seu sistema favorito para poder se comunicar com seus colegas: veja neste *post* como conectar o [Evolution] ao Microsoft Exchange ou ao Office 365 com as [contas *online* do GNOME][goa].

{% include image.html src="/files/2017/09/evolution.png" %}

O **Evolution** é um dos mais completos clientes de [*groupware*][groupware] (sistema colaborativo) de [código aberto][opensource] existentes. Ele é o cliente de *groupware* que acompanha o ambiente de trabalho [GNOME] por padrão e pode ser considerado, no sistema Linux, o equivalente ao [Outlook] para o sistema [Windows]. No GNOME, as contas *online* (a exemplo da conta do Office 365) são adicionadas pelo aplicativo **Configurações** e podem então ser usadas pelos demais aplicativos (a exemplo do Evolution).

Para que o Evolution seja capaz de gerenciar seu *e-mail* do Office 365, certifique-se de que seu sistema possua instalados os pacotes [gnome-online-accounts][sw-gnome-online-accounts] (deve vir instalado por padrão se você utiliza o [openSUSE] com GNOME) e [evolution-ews][sw-evolution-ews]:

```
# zypper in gnome-online-accounts evolution-ews
```

Para adicionar a conta, abra o aplicativo **Configurações** e clique em **Contas on-line**:

{% include image.html src="/files/2017/09/evolution-office-365-1-pt.jpg" %}

À esquerda são listadas as contas *online*. Clique no **botão de adicionar**, abaixo:

{% include image.html src="/files/2017/09/evolution-office-365-2-pt.jpg" %}

Na caixa de diálogo **Adicionar conta**, selecione **Microsoft Exchange**:

{% include image.html src="/files/2017/09/evolution-office-365-3-pt.jpg" %}

Expanda a seção **Personalizado** para exibir todos os campos e os preencha com as informações da conta:

- **E-mail:** seu endereço de *e-mail* (por exemplo, `nome.sobrenome@empresa.com.br`)
- **Senha:** a senha da sua conta de *e-mail*
- **Nome de usuário:** mais uma vez, seu endereço de *e-mail*
- **Servidor:** `outlook.office365.com`

Essas informações podem ser diferentes a depender de como está configurado o *e-mail* da sua empresa. Caso você não consiga adicionar sua conta, entre em contato com o administrador da rede.

Quando terminar, clique em **Conectar**:

{% include image.html src="/files/2017/09/evolution-office-365-4-pt.jpg" %}

Perceba que sua conta é adicionada, selecione o que deseja sincronizar (por padrão, todas as opções estão ativadas):

{% include image.html src="/files/2017/09/evolution-office-365-5-pt.jpg" %}

Agora você pode fechar a caixa de diálogo **Contas on-line** e abrir o aplicativo **Evolution**. Perceba que lá estão:

{% include image.html src="/files/2017/09/evolution-office-365-6-pt.jpg" caption="Seu correio" %}

{% include image.html src="/files/2017/09/evolution-office-365-7-pt.jpg" caption="Seus contatos" %}

{% include image.html src="/files/2017/09/evolution-office-365-8-pt.jpg" caption="Sua agenda" %}

Faça bom proveito!

## Referências

- [Use Evolution to Connect to Microsoft Exchange on Linux | Linux.com | The source for Linux information][linux.com]
- [Office 365 (Evolution) - Configure Evolution][kb.wisc.edu]

[exchange]:                 https://products.office.com/pt-BR/exchange
[office-365]:               https://portal.office.com
[POP]:                      https://pt.wikipedia.org/wiki/Post_Office_Protocol
[IMAP]:                     https://pt.wikipedia.org/wiki/Internet_Message_Access_Protocol
[SMTP]:                     https://pt.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol
[activesync]:               https://technet.microsoft.com/en-us/library/dn551174(v=exchg.150).aspx
[Microsoft]:                https://www.microsoft.com/pt-br
[linux]:                    https://www.vivaolinux.com.br/linux
[Evolution]:                https://wiki.gnome.org/Apps/Evolution
[goa]:                      https://wiki.gnome.org/Projects/GnomeOnlineAccounts
[groupware]:                https://pt.wikipedia.org/wiki/Software_colaborativo
[opensource]:               https://pt.wikipedia.org/wiki/Software_de_código_aberto
[GNOME]:                    https://www.gnome.org
[Outlook]:                  https://products.office.com/pt-br/outlook
[Windows]:                  https://www.microsoft.com/pt-br/windows
[sw-gnome-online-accounts]: https://software.opensuse.org/package/gnome-online-accounts
[openSUSE]:                 https://www.opensuse.org
[sw-evolution-ews]:         https://software.opensuse.org/package/evolution-ews
[linux.com]:                https://www.linux.com/learn/use-evolution-connect-microsoft-exchange-linux
[kb.wisc.edu]:              https://kb.wisc.edu/helpdesk/page.php?id=28462
