---
date: '2019-12-14 00:50:00 GMT-3'
layout: post
published: true
title: 'Mitigando ataques de força bruta no Linux com fail2ban'
image: '/files/2019/12/fail2ban.jpg'
nickname: 'fail2ban'
---

{% include image.html src="/files/2019/12/fail2ban.jpg" %}

Tradicionalmente, sistemas cujo acesso é restrito autenticam seus usuários por uma combinação de nome de usuário (mais conhecido como _login_) e senha.

Um [**ataque de força bruta**][brute-force-attack] (do inglês _brute force attack_) é um tipo de ataque que consiste em tentar adivinhar uma combinação de _login_ e senha que libere o acesso ao sistema. Se o invasor souber pelo menos um _login_, já tem meio caminho andado, porque aí só precisa descobrir a senha. Normalmente, isso é feito na base da tentativa e erro, testando todas as combinações de senhas possíveis (por exemplo, `aaaa`, `aaab`, `aaac` ... `1234`, `1235`, etc).

É um dos tipos de ataque mais simples e antigos, mas que ainda acontece e — pasme — por vezes funciona, uma vez que muitos usuários criam senhas curtas, fracas, fáceis de adivinhar ou mesmo óbvias. Dependendo do tamanho e da complexidade da senha, um ataque de força bruta pode levar segundos ou séculos para descobri-la.

Administradores de sistemas [Linux] devem proteger os servidores contra tentativas de ataque e acessos não autorizados. Já falamos do [_firewall_ **iptables**][iptables], que atua nas camadas de rede e transporte do modelo TCP/IP. Ele é capaz de impedir ataques de força bruta, que ocorrem na camada de aplicação, com o auxílio de uma ferramenta chamada **fail2ban**.

## O que é o fail2ban?

O **[fail2ban]** é um IPS (_Intrusion Prevention System_, [sistema de prevenção de intrusos][ips]) na forma de um _[daemon]_ (processo que fica executando ao fundo) que monitora as tentativas de acesso aos serviços do sistema e age proativamente quando detecta um endereço IP que aparenta comportamento suspeito — várias tentativas de fazer _login_ malsucedidas, exploração de brechas, etc.

O **fail2ban** fica o tempo todo escaneando os registros (_logs_) do sistema (por exemplo: `/var/log/messages`, `/var/log/apache2/access_log`, `/var/log/apache2/error_log`, etc.) e "de fábrica" já é capaz de monitorar diversos serviços (por exemplo: SSH, Apache, FTP, SMTP, MySQL, etc). Geralmente, a ação adotada pelo **fail2ban** quando detecta um endereço IP suspeito é adicionar uma regra no **iptables** para rejeitar esse endereço, embora qualquer outra ação possa ser configurada (por exemplo, enviar um _e-mail_ para o administrador).

<div class="alert alert-warning" role="alert">
{% markdown %}
Note que o **fail2ban** reduz a taxa de tentativas incorretas de autenticação, mas não elimina o risco inerente a uma autenticação fraca (por exemplo, se a senha de um usuário é `123456`, e um invasor iniciar seu ataque testando essa senha, conseguirá acessar o sistema em sua primeira tentativa). Para aumentar a segurança dos serviços, configure-os para usar mecanismos de autenticação mais seguros, como autenticação de dois fatores ou autenticação usando par de chaves pública e privada.
{% endmarkdown %}
</div>

## Instalando o fail2ban

<div class="alert alert-info" role="alert">
{% markdown %}
Repetindo a recomendação do [tutorial sobre **iptables**]({% post_url pt/2019-11-18-proteja-se-com-o-firewall-iptables %}), para acompanhar este tutorial, sugiro que você use uma máquina virtual. Com isso, você não precisa modificar as configurações do seu servidor ou _desktop_ até que esteja familiarizado com o **fail2ban**.

Para mais informações, leia:

- [VirtualBox: a forma mais fácil de conhecer o Linux sem precisar instalá-lo]({% post_url pt/2019-10-08-virtualbox-a-forma-mais-facil-de-conhecer-o-linux-sem-precisar-instala-lo %})
{% endmarkdown %}
</div>

Para instalar o **fail2ban** no [openSUSE] e em distribuições derivadas (como é o caso do [Linux Kamarada][kamarada]), execute o comando:

```
# zypper in fail2ban
```

## Configurando o fail2ban

Por padrão, o **fail2ban** mantém seus arquivos de configuração na pasta `/etc/fail2ban/`:

```
# cd /etc/fail2ban
# ls -lah
total 40K
drwxr-xr-x 6 root root  220 dez 14 20:05 .
drwxr-xr-x 1 root root  760 dez 14 20:05 ..
drwxr-xr-x 2 root root 1,3K dez 14 20:05 action.d
-rw-r--r-- 1 root root 2,3K out  4  2018 fail2ban.conf
drwxr-xr-x 2 root root   40 mar 27  2019 fail2ban.d
drwxr-xr-x 3 root root 1,7K dez 14 20:05 filter.d
-rw-r--r-- 1 root root  23K mar 27  2019 jail.conf
drwxr-xr-x 2 root root   40 mar 27  2019 jail.d
-rw-r--r-- 1 root root   71 mar 27  2019 jail.local
-rw-r--r-- 1 root root 2,8K mar 27  2019 paths-common.conf
-rw-r--r-- 1 root root  975 mar 27  2019 paths-opensuse.conf
```

Os principais arquivos de configuração são o `fail2ban.conf` e o `jail.conf`. Não é recomendado editá-los diretamente, porque eles pertencem ao pacote RPM [**fail2ban**][fail2ban-rpm] e podem ser sobrescritos pelo sistema durante atualizações, ocasionando a perda de personalizações. Em vez de editá-los, crie cópias chamadas `fail2ban.local` e `jail.local`:

```
# cp fail2ban.conf fail2ban.local
# cp jail.conf jail.local
```

O **fail2ban** lê primeiro os arquivos com extensão `.conf` e depois os `.local`. As configurações nos `.local` sobrescrevem as configurações nos `.conf`. Portanto, um arquivo `.local` não precisa ter todas as configurações que já estão no seu correspondente `.conf`. Uma alternativa à cópia seria criar novos arquivos de texto chamados `fail2ban.local` e `jail.local` para adicionar a eles apenas as configurações que devem diferir dos padrões.

Se você possui conhecimento ao menos técnico de inglês, esses arquivos possuem comentários que documentam as configurações do **fail2ban** e são uma mão na roda.

A seguir, veremos as principais configurações do **fail2ban**.

### Configurações gerais (fail2ban.local)

O arquivo `fail2ban.conf` (e seu correspondente `fail2ban.local`) contém configurações gerais do **fail2ban**, como o nível de _log_ e onde o _log_ deve ser gravado.

Vejamos os trechos mais relevantes desse arquivo:

```
[Definition]

# Option: loglevel
# Notes.: Set the log level output.
#         CRITICAL
#         ERROR
#         WARNING
#         NOTICE
#         INFO
#         DEBUG
# Values: [ LEVEL ]  Default: ERROR
#
loglevel = INFO
```

A opção `loglevel` define o nível de detalhamento do _log_. Por padrão, esse nível é `INFO`, ou seja, o **fail2ban** registra simples informações, assim como erros ou mensagens mais críticas. Já fornece um bom nível de detalhamento.

```
# Option: logtarget
# Notes.: Set the log target. This could be a file, SYSLOG, STDERR or STDOUT.
#         Only one log target can be specified.
#         If you change logtarget from the default value and you are
#         using logrotate -- also adjust or disable rotation in the
#         corresponding configuration file
#         (e.g. /etc/logrotate.d/fail2ban on Debian systems)
# Values: [ STDOUT | STDERR | SYSLOG | SYSOUT | FILE ]  Default: STDERR
#
logtarget = /var/log/fail2ban.log
```

A opção `logtarget` define onde o _log_ deve ser gravado. Por padrão, o **fail2ban** faz _log_ no arquivo `/var/log/fail2ban.log`. Você pode consultar esse arquivo quando precisar conferir se tudo está funcionando.

Normalmente, não é necessário alterar o `fail2ban.conf` (ou o `fail2ban.local`).

### Configurações gerais das jaulas (jail.local)

O arquivo `jail.conf` (e seu correspondente `jail.local`) provavelmente é o arquivo mais importante. Ele contém a declaração e configuração das **jaulas** (_jails_), que correspondem aos serviços monitorados pelo **fail2ban**. Por padrão, todas as jaulas vem desabilitadas. Você deve habilitar as que precisa e adaptar suas configurações à realidade do seu servidor.

O arquivo `jail.local` é dividido em seções. Cada jaula possui sua própria seção. No início do arquivo, antes das seções da jaulas, há uma seção `[DEFAULT]` (padrão). As configurações nessa seção são aplicadas a todas as jaulas. Configurações específicas podem ser sobrescritas por jaulas específicas, se necessário.

Vejamos os trechos mais relevantes da seção `[DEFAULT]`:

```
# The DEFAULT allows a global definition of the options. They can be overridden
# in each jail afterwards.

[DEFAULT]

...

# "ignoreip" can be a list of IP addresses, CIDR masks or DNS hosts. Fail2ban
# will not ban a host which matches an address in this list. Several addresses
# can be defined using space (and/or comma) separator.
#ignoreip = 127.0.0.1/8 ::1
```

A opção `ignoreip` nos permite definir exceções ao monitoramento do **fail2ban**. O valor dessa opção é uma lista que pode conter:

- endereços IP de computadores (por exemplo, `127.0.0.1`);
- endereços IP de redes/sub-redes, com máscaras em notação [CIDR] (`192.168.0.1/24`); e/ou
- nomes de computadores, inclusive com domínio ([FQDN], `kamarada.github.io`).

As exceções da lista devem estar separadas por espaço e/ou vírgula. O **fail2ban** não banirá endereços IP que se enquadrem nessa lista.

```
# "bantime" is the number of seconds that a host is banned.
bantime  = 10m

# A host is banned if it has generated "maxretry" during the last "findtime"
# seconds.
findtime  = 10m

# "maxretry" is the number of failures before a host get banned.
maxretry = 5
```

Na minha humilde opinião, essas opções fariam mais sentido listadas ao contrário. Vejamos.

A opção `maxretry` define quantas tentativas de acesso podem ser feitas antes que ocorra o bloqueio.

A opção `findtime` define durante quanto tempo as tentativas de acesso são contabilizadas.

A opção `bantime` define durante quanto tempo ficará bloqueado o _host_ que excedeu a quantidade limite de tentativas de acesso.

Podemos ler a configuração padrão assim: uma pessoa que erre a senha 5 vezes (`maxretry`) em 10 minutos (`findtime`) terá seu _host_ bloqueado por 10 minutos (`bantime`), ou seja, da última tentativa de acesso, ela terá que aguardar 10 minutos para poder tentar de novo.

Parece uma boa configuração padrão, mas você pode mudar conforme ache necessário.

```
#
# ACTIONS
#

# Some options used for actions

# Destination email address used solely for the interpolations in
# jail.{conf,local,d/*} configuration files.
destemail = root@localhost

# Sender email address used solely for some actions
sender = root@<fq-hostname>

# E-mail action. Since 0.8.1 Fail2Ban uses sendmail MTA for the
# mailing. Change mta configuration parameter to mail if you want to
# revert to conventional 'mail'.
mta = sendmail
```

A opção `destemail` define o _e-mail_ para o qual o **fail2ban** deve enviar notificações de bloqueios, para as jaulas em que as notificações por _e-mail_ estejam ativadas. De forma análoga, a opção `sender` define o _e-mail_ que deve ser informado como remetente.

A opção `mta` define o programa que deve ser usado para enviar as notificações por _e-mail_, por padrão o [Sendmail]. Observe que as notificações só são enviadas de fato se esse programa estiver instalado e configurado no servidor.

```
# Choose default action.  To change, just override value of 'action' with the
# interpolation to the chosen action shortcut (e.g.  action_mw, action_mwl, etc) in jail.local
# globally (section [DEFAULT]) or per specific section
action = %(action_)s
```

A opção `action` define a ação que o **fail2ban** deve tomar ao perceber um comportamento suspeito de um _host_. Na seção `[DEFAULT]`, essa opção define a ação padrão para todas as jaulas. No arquivo `jail.local`, acima da opção `action`, são definidas algumas opções de ações (`action_`, `action_mw`, `action_mwl`, etc). O valor padrão é `action_`, que corresponde à ação mais básica (apenas bloquear). Se você configurou o envio de _e-mail_, talvez queira mudar esse valor para `action_mw`, que corresponde a bloquear e notificar por _e-mail_.

### Configuração da jaula SSH

O **fail2ban** é capaz de monitorar vários serviços. Como exemplo, vejamos como configurá-lo para monitorar tentativas de acesso via SSH. Para isso, vamos à seção `[sshd]` do arquivo `jail.local`.

```
[sshd]

# To use more aggressive sshd modes set filter parameter "mode" in jail.local:
# normal (default), ddos, extra or aggressive (combines all).
# See "tests/files/logs/sshd" or "filter.d/sshd.conf" for usage example and details.
#mode   = normal
port    = ssh
logpath = %(sshd_log)s
backend = %(sshd_backend)s
```

Comece adicionando `enabled = true` para habilitar essa jaula.

A opção `port` define a porta na qual o serviço escuta. Se o serviço escuta na porta padrão (no caso do SSH, a porta 22), deixe o valor padrão, que é o nome do serviço (`ssh`). Se o serviço escuta em uma porta diferente da padrão, informe aqui o número da porta.

A opção `logpath` define o caminho para o arquivo de _log_ do serviço. De forma análoga, só mude o valor dessa opção se o serviço registra seu _log_ em um arquivo diferente do padrão.

## Iniciando o fail2ban

Feita a configuração inicial, é hora de iniciar o **fail2ban**. Para isso, execute:

```
# systemctl start fail2ban
```

Para se certificar de que o **fail2ban** está em execução, verifique o estado (_status_) do serviço:

```
# systemctl status fail2ban
● fail2ban.service - Fail2Ban Service
   Loaded: loaded (/usr/lib/systemd/system/fail2ban.service; disabled; vendor preset: disabled)
   Active: active (running) since Fri 2019-12-13 23:07:09 -03; 1s ago
     Docs: man:fail2ban(1)
  Process: 5931 ExecStartPre=/bin/mkdir -p /var/run/fail2ban (code=exited, status=0/SUCCESS)
 Main PID: 5932 (fail2ban-server)
    Tasks: 3 (limit: 4915)
   CGroup: /system.slice/fail2ban.service
           └─5932 /usr/bin/python /usr/bin/fail2ban-server -xf start

dez 13 23:07:09 kamarada-pc systemd[1]: Starting Fail2Ban Service...
dez 13 23:07:09 kamarada-pc systemd[1]: Started Fail2Ban Service.
dez 13 23:07:09 kamarada-pc fail2ban-server[5932]: Server ready
```

Habilite o serviço do **fail2ban** para que ele seja iniciado automaticamente durante o _boot_:

```
# systemctl enable fail2ban
```

## Testando o fail2ban

Vejamos o **fail2ban** agindo na prática.

<div class="alert alert-danger" role="alert">
{% markdown %}
**Não** teste os comandos desse tutorial em um servidor que você acessa remotamente via SSH: você corre o risco de perder o acesso ao servidor.
{% endmarkdown %}
</div>

Usando um computador diferente daquele no qual você instalou o  **fail2ban**, tente estabelecer um acesso remoto via SSH, mas erre a senha propositalmente algumas vezes:

```
$ ssh kamarada@10.0.0.250
Password:
Password:
Password:
kamarada@10.0.0.250's password:
Permission denied, please try again.
kamarada@10.0.0.250's password:
Received disconnect from 10.0.0.250 port 22:2: Too many authentication failures
Disconnected from 10.0.0.250 port 22
```

Se você esgotar o limite de tentativas configurado, será desconectado do servidor.

Perceba que novas tentativas de acesso são recusadas de imediato:

```
$ ssh kamarada@10.0.0.250
ssh: connect to host 10.0.0.250 port 22: Connection refused
```

## Consultando o log do fail2ban

Como vimos, por padrão, o **fail2ban** guarda seu _log_ no arquivo `/var/log/fail2ban.log`.

Para abrir esse arquivo, você pode usar comandos como **[cat]**, **[less]** ou **[tail]**:

```
# less /var/log/fail2ban.log
```

O _log_ do **fail2ban** mostra nossas tentativas frustradas de acesso e o efetivo bloqueio:

```
2019-12-13 23:24:01,169 fail2ban.filter         [6803]: INFO    [sshd] Found 10.0.0.10 - 2019-12-13 23:24:00
2019-12-13 23:24:04,638 fail2ban.filter         [6803]: INFO    [sshd] Found 10.0.0.10 - 2019-12-13 23:24:04
2019-12-13 23:24:07,919 fail2ban.filter         [6803]: INFO    [sshd] Found 10.0.0.10 - 2019-12-13 23:24:07
2019-12-13 23:24:12,335 fail2ban.filter         [6803]: INFO    [sshd] Found 10.0.0.10 - 2019-12-13 23:24:12
2019-12-13 23:24:12,361 fail2ban.filter         [6803]: INFO    [sshd] Found 10.0.0.10 - 2019-12-13 23:24:12
2019-12-13 23:24:12,896 fail2ban.actions        [6803]: NOTICE  [sshd] Ban 10.0.0.10
```

## Verificando as regras do iptables

Para bloquear _hosts_ com comportamento suspeito, o **fail2ban** adiciona regras ao **iptables**.

Se você listar as regras em uso pelo **iptables**, verá a regra adicionada pelo **fail2ban**:

```
# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         
f2b-sshd   tcp  --  anywhere             anywhere             multiport dports ssh

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

Chain f2b-sshd (1 references)
target     prot opt source               destination         
RETURN     all  --  anywhere             anywhere
```

Perceba que o **fail2ban** cria suas próprias _chains_ para gerenciar suas regras.

## Desfazendo um bloqueio do fail2ban

Pode acontecer de um usuário legítimo do servidor ter esquecido sua senha e ter sido bloqueado pelo **fail2ban** após sucessivas tentativas de acesso. Nesse caso, você precisa desfazer o bloqueio feito pelo **fail2ban** para que o usuário possa voltar a acessar o servidor.

Para desfazer um bloqueio a um _host_ feito anteriormente pelo **fail2ban**, execute:

```
# fail2ban-client set JAULA unbanip ENDERECO_IP
```

Por exemplo:

```
# fail2ban-client set sshd unbanip 10.0.0.10
```

Se você tentar novo acesso remoto via SSH, dessa vez informando a senha certa, conseguirá conectar ao servidor.

## Interrompendo o fail2ban

Se por qualquer motivo você precisar interromper o monitoramento do **fail2ban**, execute:

```
$ systemctl stop fail2ban
```

Note que isso também exclui as regras adicionadas ao **iptables** pelo **fail2ban**, permitindo que _hosts_ que antes estavam bloqueados façam novas tentativas de acesso ao servidor.

## Incrementando o script do iptables

No [_post_ anterior sobre o **iptables**][iptables], fizemos um _script_ para iniciá-lo e configurá-lo durante o _boot_. Agora podemos incrementar aquele _script_ interrompendo o **fail2ban** antes da limpeza das regras e iniciando-o novamente ao final:

```
#!/bin/bash
set -ex

# Interromper o fail2ban
systemctl stop fail2ban

# Limpar as regras
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -t raw -F
iptables -t raw -X

# Politica padrao: bloquear todas as conexoes de entrada
iptables -P FORWARD DROP
iptables -P INPUT DROP
iptables -P OUTPUT ACCEPT

# Aceitar conexoes estabelecidas previamente
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Aceitar tudo vindo da interface de loopback
iptables -A INPUT -i lo -j ACCEPT

# SSH (porta 22/TCP,UDP)
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p udp --dport 22 -j ACCEPT

# HTTP (porta 80/TCP)
iptables -A INPUT -p tcp --dport 80 -j ACCEPT

# Iniciar o fail2ban
systemctl start fail2ban
```

## Referências

Espero que esse texto tenha sido útil. Oportunamente, conforme estudemos diversos servidores (servidor _web_, banco de dados, servidor de FTP, servidor de _e-mail_, etc), veremos como podemos protegê-los usando a dupla **iptables** e **fail2ban**.

Se tiver alguma dúvida ou informação útil a acrescentar, por favor, deixe um comentário.

Até mais!

- [O que é e como funciona um ataque de força bruta - Artigo - Viva o Linux][brute-force-attack]
- [What's a Brute Force Attack? - Kaspersky][kaspersky]
- [How To Protect Server Against Brute Force Attacks With Fail2ban On Linux - 2daygeek.com][2daygeek]
- [Manual - Fail2ban][fail2ban-manual]
- [Proteção utilizando fail2ban contra ataques do tipo - Artigo - Viva o Linux][vivaolinux1]
- [Fail2ban - Aprendendo a instalar e configurar - Dica - Viva o Linux][vivaolinux2]
- [firewall - How to Unban an IP properly with Fail2Ban - Server Fault][serverfault]

[brute-force-attack]:   https://www.vivaolinux.com.br/artigo/O-que-e-e-como-funciona-um-ataque-de-forca-bruta
[linux]:                https://www.vivaolinux.com.br/linux/
[iptables]:             {% post_url pt/2019-11-18-proteja-se-com-o-firewall-iptables %}
[fail2ban]:             https://www.fail2ban.org/
[ips]:                  https://www.portalgsti.com.br/sistema-prevencao-intrusos/sobre/
[daemon]:               https://pt.wikipedia.org/wiki/Daemon_(computa%C3%A7%C3%A3o)
[opensuse]:             https://www.opensuse.org/
[kamarada]:             {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[fail2ban-rpm]:         https://software.opensuse.org/package/fail2ban
[cidr]:                 https://doc.m0n0.ch/quickstartpc/intro-CIDR.html
[fqdn]:                 https://pt.wikipedia.org/wiki/FQDN
[sendmail]:             http://www.sendmail.org/
[cat]:                  http://man7.org/linux/man-pages/man1/cat.1.html
[less]:                 http://man7.org/linux/man-pages/man1/less.1.html
[tail]:                 http://man7.org/linux/man-pages/man1/tail.1.html
[kaspersky]:            https://www.kaspersky.com/resource-center/definitions/brute-force-attack
[2daygeek]:             https://www.2daygeek.com/how-to-install-setup-configure-fail2ban-on-linux/
[fail2ban-manual]:      https://www.fail2ban.org/wiki/index.php/MANUAL_0_8
[vivaolinux1]:          https://www.vivaolinux.com.br/artigo/Protecao-utilizando-fail2ban-contra-ataques-do-tipo
[vivaolinux2]:          https://www.vivaolinux.com.br/dica/Fail2ban-Aprendendo-a-instalar-e-configurar
[serverfault]:          https://serverfault.com/a/336001/357679
