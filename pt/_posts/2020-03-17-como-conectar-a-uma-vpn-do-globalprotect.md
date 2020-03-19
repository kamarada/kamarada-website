---
date: '2020-03-17 00:50:00 GMT-3'
image: '/files/2020/03/globalprotect.png'
layout: post
nickname: 'globalprotect'
title: 'Como conectar a uma VPN do GlobalProtect'
---

{% include image.html src='/files/2020/03/globalprotect.png' style='max-width: 200px;' %}

[GlobalProtect] é um tipo de [rede privada virtual (VPN)][vpn] que integra os _firewalls_ da [Palo Alto Networks][pan]. Você trabalha remotamente em uma empresa que requer que você use esse tipo de VPN? Veja aqui como instalar o _software_ necessário e se conectar no [openSUSE] e também no [Linux Kamarada][kamarada-15.1].

<!--more-->

VPNs são usadas por organizações (por exemplo, empresas, universidades) para permitir que pessoas (funcionários, alunos) se conectem remotamente às suas redes. Uma VPN provê uma conexão criptografada entre seu computador em casa e a rede da empresa ou universidade. Se você quiser saber mais sobre VPNs, leia o início desse _post_:

- [Como conectar a uma VPN do OpenVPN][vpn]

Naquela ocasião, falamos sobre o [OpenVPN][vpn], outro tipo de VPN.

Hoje, vamos falar sobre o GlobalProtect.

Usuários de [Linux] dispõem de duas opções para se conectar a VPNs do GlobalProtect:

1. o cliente aberto do OpenConnect, fornecido pelas próprias distribuições Linux; ou
2. o cliente oficial (proprietário) do GlobalProtect, fornecido pela Palo Alto Networks.

Adianto que não consegui fazer o cliente oficial funcionar. Portanto, menciono apenas para que você saiba que ele existe.

## Opção 1: cliente aberto do OpenConnect

O [OpenConnect] é um cliente de VPNs criado inicialmente para suportar a VPN [Cisco AnyConnect][cisco], mas que depois passou a suportar também a [Pulse Connect Secure][pulse] e a Palo Alto Networks GlobalProtect. O suporte a esta última veio com a versão 8.00, [lançada em 04/01/2019][openconnect-8.00].

### Instalação

A distribuição [openSUSE Tumbleweed][tumbleweed], versão _rolling release_ do openSUSE, disponibiliza em seus repositórios oficiais a versão 8.05 do OpenConnect. Se você usa essa distribuição, para instalar o OpenConnect, basta executar:

```
# zypper in openconnect
```

Já a distribuição [openSUSE Leap 15.1][leap-15.1], versão tradicional do openSUSE (com lançamentos regulares), disponibiliza em seus repositórios oficiais a versão 7.08 do OpenConnect.

O [Linux Kamarada 15.1][kamarada-15.1] (baseado no openSUSE Leap 15.1) traz o OpenConnect 7.08 pré-instalado.

Nesses dois casos, você deve atualizar o OpenConnect para a versão 8.05, que pode ser obtida do repositório _network_ (rede, em inglês).

Para isso, primeiro adicione o repositório _network_:

```
# zypper ar http://download.opensuse.org/repositories/network/openSUSE_Leap_15.1/ network
```

Então, instale o OpenConnect (informando que deseja baixá-lo do repositório _network_):

```
# zypper in network:openconnect
```

OpenConnect instalado e atualizado, todos na mesma página, vejamos como usá-lo.

### Uso

Para se conectar à VPN, tenha em mãos as seguintes informações:

- servidor do GlobalProtect, na forma de um endereço IP ou de um nome de domínio completo (do inglês _fully qualified domain name_ ou [FQDN]);
- nome de usuário; e
- senha.

Se não as souber, questione-as ao administrador de rede ou à equipe de TI da organização.

Abra uma janela do terminal (reserve uma janela do terminal só para isso) e execute o comando a seguir, fazendo as devidas substituições:

```
$ sudo openconnect --protocol=gp servidor.do.global.protect -u nome-de-usuario
```

Digite a senha de administrador (usuário _root_) e tecle **Enter**:

```
[sudo] senha para root:
```

Depois, quando solicitado, digite a senha para acessar a VPN:

```
POST https://vpn.XXXXXXXX.br/ssl-vpn/prelogin.esp?tmp=tmp&clientVer=4100&clientos=Linux
Conectado a 200.XXXXX.4:443
Negociação SSL com vpn.XXXXXXXX.br
Conectado a HTTPS em vpn.XXXXXXXX.br
Digite o seu usuário e senha:
Senha:
```

A conexão é estabelecida e o programa informa o endereço IP que você obteve na VPN:

```
POST https://vpn.XXXXXXXX.br/ssl-vpn/login.esp
Login GlobalProtect retornou authentication-source=auth-seq_ad-local-vpn
POST https://vpn.XXXXXXXX.br/ssl-vpn/getconfig.esp
A sessão vai expirar após 43200 minutos.
Tempo limite do túnel (intervalo de renovação de chave) é 180 minutos.
Tempo limite de ociosidade é 180 minutos.
Nenhum MTU foi recebido. Calculado 1422 para ESP tunnel
POST https://vpn.XXXXXXXX.br/ssl-vpn/hipreportcheck.esp
Conectado como 10.22.0.68, usando SSL, com ESP em progresso
Sessão ESP estabelecida com o servidor
Túnel ESP conectado; saindo do loop principal de HTTPS.
```

Nesse exemplo, `10.22.0.68`.

O comando não termina: fica em execução por tempo indefinido. A conexão será mantida enquanto o programa estiver em execução (por isso eu aconselhei reservar uma janela do terminal só para ele).

{% include image.html src='/files/2020/03/globalprotect-connected-pt.jpg' %}

Durante esse tempo, você pode acessar do seu computador os sistemas internos da organização como se nela estivesse.

Quando não precisar mais da VPN e quiser desconectar, tecle **Ctrl + C** para interromper o comando (e a conexão):

```
^CPOST https://vpn.XXXXXXXX.br/ssl-vpn/logout.esp
Negociação SSL com vpn.XXXXXXXX.br
Conectado a HTTPS em vpn.XXXXXXXX.br
Desconexão feita com sucesso
RTNETLINK answers: No such process
RTNETLINK answers: No such process
RTNETLINK answers: No such process
RTNETLINK answers: No such process
Usuário cancelado (SIGINT/SIGTERM); saindo.
```

## Opção 2: cliente oficial do GlobalProtect

A Palo Alto Networks fornece um [aplicativo do GlobalProtect para Linux][globalprotect-app] em duas versões: interface de linha de comando (CLI) e interface gráfica (GUI). Idealmente, o pacote ou instalador deve ser obtido do administrador de rede ou da equipe de TI da organização.

Infelizmente, há organizações que não oferecem suporte a Linux. [Pesquisando na Internet][google], encontrei um _link_ para baixar o aplicativo nessa página da Universidade Estadual do Kansas:

- [Virtual Private Networking - Kansas State University][k-state]

Também infelizmente, não consegui fazê-lo funcionar no Linux Kamarada 15.1, nem a versão CLI, nem a versão GUI. A [tabela de compatibilidade do GlobalProtect][globalprotect-compatibility] mostra que as distribuições Linux suportadas oficialmente são [CentOS], [Red Hat Enterprise Linux (RHEL)][rhel] e [Ubuntu]. As distribuições do openSUSE não são oficialmente suportadas.

## Referências

- [Como se conectar a uma VPN Global Protector no Linux - Blog do Edivaldo][edivaldobrito]
- [Openconnect - Conexão de VPN Paloalto no Debian - Artigo - Viva o Linux][vivaolinux]
- [GlobalProtect App for Linux - Palo Alto Networks][globalprotect-app]

[globalprotect]:                https://www.paloaltonetworks.com/products/globalprotect
[vpn]:                          {% post_url pt/2017-07-07-como-conectar-a-uma-vpn-do-openvpn %}
[pan]:                          https://www.paloaltonetworks.com/
[opensuse]:                     https://www.opensuse.org/
[kamarada-15.1]:                {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[linux]:                        http://www.vivaolinux.com.br/linux/
[openconnect]:                  https://www.infradead.org/openconnect/
[cisco]:                        http://www.cisco.com/go/asm
[pulse]:                        https://www.pulsesecure.net/products/connect-secure/
[openconnect-8.00]:             https://lists.infradead.org/pipermail/openconnect-devel/2019-January/005178.html
[tumbleweed]:                   https://en.opensuse.org/Portal:Tumbleweed
[leap-15.1]:                    {% post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[fqdn]:                         https://pt.wikipedia.org/wiki/FQDN
[globalprotect-app]:            https://docs.paloaltonetworks.com/globalprotect/5-1/globalprotect-app-user-guide/globalprotect-app-for-linux.html
[google]:                       https://www.google.com/search?q=download+Global+Protect+Linux
[k-state]:                      https://www.k-state.edu/its/security/secure-data/vpn/index.html
[globalprotect-compatibility]:  https://docs.paloaltonetworks.com/compatibility-matrix/globalprotect/where-can-i-install-the-globalprotect-app#id7a3c3401-b233-43b0-8d78-dfceab88798f_idbcd7ccf7-eceb-462c-8678-1a5fa51cbc18
[centos]:                       https://www.centos.org/
[rhel]:                         https://www.redhat.com/pt-br/technologies/linux-platforms/enterprise-linux
[ubuntu]:                       https://ubuntu.com/
[edivaldobrito]:                https://www.edivaldobrito.com.br/conectar-a-uma-vpn-global-protector-no-linux/
[vivaolinux]:                   https://www.vivaolinux.com.br/artigo/Openconnect-Conexao-de-VPN-Paloalto-no-Debian
