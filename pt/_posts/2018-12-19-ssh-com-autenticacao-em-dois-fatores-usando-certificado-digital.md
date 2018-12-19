---
date: 2018-12-19 00:50:00 GMT-2
image: '/files/2018/12/ssh-token.png'
layout: post
published: true
nickname: 'ssh-token'
title: 'SSH com autenticação em dois fatores usando certificado digital'
excerpt: 'Se você possui um certificado digital armazenado em uma mídia criptográfica, como um cartão inteligente ou um token, pode adicionar uma camada de segurança às conexões SSH com seu servidor configurando autenticação baseada em dois fatores (two-factor authentication ou 2FA). Com isso, para se conectar ao servidor, é necessário possuir a mídia criptográfica e conhecer sua senha PIN. Neste post, você verá como configurar autenticação com token no acesso remoto via SSH.'
---

{% include image.html src="/files/2018/12/ssh-token.png" %}

Se você possui um [certificado digital][how-to-token] armazenado em uma mídia criptográfica, como um [cartão inteligente][smart-card] ou um [*token*][token], pode adicionar uma camada de segurança às conexões [SSH] com seu servidor configurando [autenticação baseada em dois fatores][2fa] (*two-factor authentication* ou 2FA). Com isso, para se conectar ao servidor, é necessário possuir a mídia criptográfica e conhecer sua senha PIN.

Neste *post*, você verá como configurar autenticação com *token* no acesso remoto via SSH.

## Pré-requisitos

Aqui, parto do princípio que:

- o servidor está com o acesso remoto via SSH habilitado e funcionando,
- o computador cliente consegue acessar remotamente o servidor via SSH, e
- o computador cliente como consegue utilizar o *token*.

Recomendo a leitura de alguns *posts* anteriores:

- [Levante um servidor com o Linux openSUSE Leap - parte 1][how-to-server] (instalação),
- [Levante um servidor com o Linux openSUSE Leap - parte 2][how-to-server-config] (configuração), e
- [Configurando certificado digital no Linux openSUSE][how-to-token].

## Obtendo a chave pública do *token* e copiando para o servidor

O *token* armazena seu certificado [X.509][x509]. Sua chave pública deve ser conhecida pelo servidor para que ele aceite a conexão SSH encriptada com ela.

Para extrair a chave pública do *token* no formato [RSA], utilizado por padrão no SSH, use o comando [**ssh-keygen**][ssh-keygen] com o argumento `-D` e o caminho para a biblioteca do *token* (no meu caso, `/usr/lib64/libeToken.so`). Salve a saída em um arquivo (por exemplo, `chaves_token`):

```
$ ssh-keygen -D /usr/lib64/libeToken.so > chaves_token
```

Copie sua chave pública para o servidor usando o protocolo e comando [SCP] (semelhante ao SSH, mas usado para copiar arquivos):

```
$ scp chaves_token kamarada@meuservidor:/home/kamarada/
```

São informados, na sequência: o caminho no computador local do arquivo a ser copiado, o nome do usuário do servidor, o nome de rede (ou endereço IP) do servidor e o destino do arquivo no servidor.

## Configurando a autenticação no servidor

Acesse remotamente o servidor usando SSH:

```
$ ssh kamarada@meuservidor
```

No servidor, crie a pasta de configuração do SSH:

```
$ mkdir -p .ssh
```

Copie a chave pública RSA para o arquivo `.ssh/authorized_keys`:

```
$ cat chaves_token >> .ssh/authorized_keys
```

`authorized_keys` é um arquivo de configuração do SSH que especifica quais chaves podem ser aceitas no acesso remoto com a conta do usuário.

Você pode excluir o arquivo `chaves_token` e encerrar o acesso remoto:

```
$ rm chaves_token
$ exit
```

## Acesso remoto usando o token

Acesse remotamente o servidor via SSH, dessa vez adicionando o argumento `-I` e o caminho para a biblioteca do *token*:

```
$ ssh -I /usr/lib64/libeToken.so kamarada@meuservidor
```

Forneça a senha PIN do *token*:

```
Enter PIN for 'ANTONIO VINICIUS MENEZES MEDEIR': 
```

E pronto: você está na linha de comando do servidor!

Encerre o acesso remoto, por enquanto:

```
$ exit
```

## Autenticando com o token por padrão

No momento, é possível acessar remotamente o servidor de duas formas:

- informando a senha do usuário do servidor, como de costume, com:

```
$ ssh kamarada@meuservidor
```

- ou usando o *token* e informando sua senha PIN com:

```
$ ssh -I /usr/lib64/libeToken.so kamarada@meuservidor
```

Para usar o *token* por padrão, edite o arquivo `~/.ssh/config`:

```
$ nano ~/.ssh/config
```

E adicione a linha:

```
PKCS11Provider /usr/lib64/libeToken.so
```

(lembre de mudar o caminho para a biblioteca do *token* conforme sua necessidade)

Feito isso, não é mais necessário adicionar o argumento `-I` para usar o *token*:

```
$ ssh kamarada@meuservidor
Enter PIN for 'ANTONIO VINICIUS MENEZES MEDEIR': 
Last login: Mon Dec 17 00:47:15 2018 from 172.17.0.10
Have a lot of fun...
kamarada@meuservidor:~>
```

Se o *token* estiver plugado no computador cliente, será solicitada sua senha PIN. Senão, será solicitada a senha do usuário do servidor.

## Referências

Quero agradecer ao sabe-tudo [Leandro Peracchi][leandro] por ter compartilhado essa dica comigo.

Para escrever a explicação, consultei algumas páginas:

- [Linux smart card authentication - OpenSSH - Firas Kraïem][fkraiem]
- [OpenSSH and smart cards PKCS#11 - OpenSC/OpenSC Wiki - GitHub][github]
- [About SSH and Smart Card support (RHEL 7)][redhat]
- [Authorized_keys file in SSH - SSH.COM][ssh.com]

[how-to-token]:         {%post_url pt/2018-04-16-configurando-certificado-digital-no-linux-opensuse %}
[smart-card]:           https://pt.wikipedia.org/wiki/Cart%C3%A3o_inteligente
[token]:                https://pt.wikipedia.org/wiki/Token_(chave_eletr%C3%B4nica)
[ssh]:                  https://pt.wikipedia.org/wiki/Secure_Shell
[2fa]:                  https://en.wikipedia.org/wiki/Multi-factor_authentication
[how-to-server]:        {%post_url pt/2017-01-15-levante-um-servidor-com-o-linux-opensuse-leap %}
[how-to-server-config]: {%post_url pt/2017-02-18-levante-um-servidor-com-o-linux-opensuse-leap-parte-2 %}
[x509]:                 https://pt.wikipedia.org/wiki/X.509
[rsa]:                  https://pt.wikipedia.org/wiki/RSA_(sistema_criptogr%C3%A1fico)
[ssh-keygen]:           https://linux.die.net/man/1/ssh-keygen
[scp]:                  https://pt.wikipedia.org/wiki/Secure_copy
[opensuse-leap]:        {% post_url pt/2018-05-25-baseado-no-codigo-do-enterprise-testado-milhoes-de-vezes-opensuse-leap-15-lancado %}
[leandro]:              https://br.linkedin.com/in/leandro-peracchi-425463159
[fkraiem]:              http://blog.fkraiem.org/2013/03/13/linux-smart-card-authentication-openssh/
[github]:               https://github.com/OpenSC/OpenSC/wiki/OpenSSH-and-smart-cards-PKCS%2311
[redhat]:               https://access.redhat.com/articles/1523343
[ssh.com]:              https://www.ssh.com/ssh/authorized_keys/
