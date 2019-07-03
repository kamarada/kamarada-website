---
date: '2017-04-09 17:00:00 UTC-3'
layout: post
published: true
title: 'Usando chaves SSH com o Git'
image: '/files/2017/04/git-ssh.png'
nickname: 'git-ssh'
excerpt: 'Esse post é para os desenvolvedores. Se você utiliza o sistema de controle de versão Git em conjunto com algum servidor como o GitHub, o GitLab ou o Bitbucket para hospedar e gerenciar seus projetos, deve saber que por padrão a conexão com esses servidores é feita pelo protocolo HTTPS. Isso obriga você a digitar usuário e senha toda vez que vai executar um comando como git pull ou git push. Usando o protocolo SSH, você pode se conectar a servidores remotos e se autenticar para utilizar seus serviços. Os três servidores mencionados permitem ao Git se conectar via SSH em vez de HTTPS. A conexão feita com criptografia de chaves dispensa o fornecimento de usuário e senha para cada comando. Veremos nesse post como utilizar o GitHub, o GitLab e o Bitbucket com chaves SSH.'
---

{% include update.html date="02/07/2019" message="Inclusão do [GitLab](https://gitlab.com/) e atualização das instruções para o [Bitbucket](https://bitbucket.org/)." %}

Esse *post* é para os desenvolvedores. Se você utiliza o sistema de controle de versão [Git] em conjunto com algum servidor como o [GitHub], o [GitLab] ou o [Bitbucket] para hospedar e gerenciar seus projetos, deve saber que por padrão a conexão com esses servidores é feita pelo protocolo [HTTPS][https]. Isso obriga você a digitar usuário e senha toda vez que vai executar um comando como `git pull` ou `git push`.

Usando o protocolo [SSH][ssh], você pode se conectar a servidores remotos e se autenticar para utilizar seus serviços. Os três servidores mencionados permitem ao Git se conectar via SSH em vez de HTTPS. A conexão feita com criptografia de chaves dispensa o fornecimento de usuário e senha para cada comando.

Veremos nesse *post* como utilizar o GitHub, o GitLab e o Bitbucket com chaves SSH.

{% include image.html src="/files/2017/04/git-ssh.png" %}

## Verifique se há um cliente SSH instalado

Para utilizar o protocolo SSH, você precisa ter um cliente SSH instalado no seu computador. No [openSUSE][opensuse], ele já vem instalado por padrão.

Por desencargo de consciência, apenas para verificar, abra o terminal e execute:

```
$ ssh -V
```

Esse comando deve retornar informações sobre a versão do cliente SSH instalado:

```
OpenSSH_7.2p2, OpenSSL 1.0.2j-fips  26 Sep 2016
```

Caso o sistema informe que o comando **ssh** não foi encontrado, você pode instalar o cliente do [OpenSSH][openssh] executando:

```
# zypper in openssh
```

## Verifique se você já possui um par de chaves SSH

Para utilizar o protocolo SSH, você precisa gerar um par de chaves SSH (uma pública e uma privada). Se você nunca utilizou o SSH, pode pular esse tópico e seguir para o próximo. Se você já o utilizou alguma vez (como em um *post* anterior, em que fizemos acesso remoto a um [servidor com o openSUSE][how-to-server-config]), é possível que já tenha um par de chaves SSH. Nesse caso, pode não ser necessário gerar um novo par de chaves.

Como não custa verificar, abra o terminal e execute:

```
$ ls -lah ~/.ssh
```

Esse comando deve listar os arquivos da pasta `~/.ssh`, que é onde o SSH guarda seus arquivos de configuração:

```
total 40K
drwx------  2 viny users 4,0K Abr  9 11:42 .
drwxr-xr-x 54 viny users  12K Abr  9 12:00 ..
-rw-------  1 viny users 3,2K Abr  9 10:48 id_rsa
-rw-r--r--  1 viny users  748 Abr  9 10:48 id_rsa.pub
-rw-------  1 viny users 5,1K Abr  9 11:59 known_hosts
```

Se ele informar que a pasta `~/.ssh` não existe, não se preocupe: significa que você ainda não tem um par de chaves SSH. Nesse caso, prossiga para o próximo tópico.

Por padrão, as chaves públicas SSH são nomeadas como:

- id_dsa.pub;
- id_ecdsa.pub;
- id_ed25519.pub; ou
- id_rsa.pub.

No exemplo, a pasta `~/.ssh` possui um par de chaves SSH (a privada chamada `id_rsa` e a pública, `id_rsa.pub`) criadas hoje (`Abr 9 10:48`).

Por questões de segurança, é recomendado que você gere um novo par de chaves SSH ao menos uma vez por ano. Se você já possui um par de chaves SSH que foi criado há mais de ano, é recomendado que você prossiga para o próximo tópico.

Se você já possui um par de chaves SSH e quer reutilizá-lo, pule o próximo tópico.

## Gere um novo par de chaves SSH

Para gerar um novo par de chaves SSH, abra o terminal e execute o seguinte comando (substitua `seuemail@exemplo.com.br` pelo seu endereço de *e-mail*):

```
$ ssh-keygen -t rsa -b 4096 -C "seuemail@exemplo.com.br"

Generating public/private rsa key pair.
Enter file in which to save the key (/home/seunomedeusuario/.ssh/id_rsa):
```

O programa pergunta onde salvar a chave privada (`id_rsa`).

Pressione **Enter** para aceitar a localização padrão.

Caso você já tenha uma chave privada, ele pergunta se deve sobrescrevê-la:

```
/home/seunomedeusuario/.ssh/id_rsa already exists.
Overwrite (y/n)?
```

Nesse caso, digite `y` e tecle **Enter**.

Em seguida, você deve digitar e confirmar uma [frase-senha][passphrase] (do inglês *passphrase*, entenda como "uma senha longa"):

```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Digite a frase-senha e tecle **Enter**. Depois, faça isso de novo para confirmá-la.

O programa cria o par de chaves SSH em `~/.ssh`.

Toda a interação deve gerar algo parecido com:

```
seunomedeusuario@seucomputador:~> ssh-keygen -t rsa -b 4096 -C "seuemail@exemplo.com.br"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/seunomedeusuario/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/seunomedeusuario/.ssh/id_rsa.
Your public key has been saved in /home/seunomedeusuario/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:aUAiURCvurcsQx98Ber8OzMLqwYlWup1aFD5JAU6X9U seuemail@exemplo.com.br
The key's randomart image is:
+---[RSA 4096]----+
|  =**....        |
|  .* =.  E       |
| o. *.o          |
|..=o.. o .       |
|.=*.. . S        |
|+o O o .         |
|= +.=            |
|o=..o=           |
|o=+o o*          |
+----[SHA256]-----+org/product
seunomedeusuario@seucomputador:~>
```

## Adicione a chave privada ao agente SSH

Se você não quiser digitar sua frase-senha toda vez em que for se conectar via SSH, você pode adicionar sua chave privada ao [agente SSH][ssh-agent], responsável por gerenciar as chaves SSH e armazenar suas frases-senha de forma segura.

Para isso, inicie o agente SSH em *background*:

```
$ eval "$(ssh-agent -s)"
```

A saída desse comando é o [identificador do processo][pid] (*process identifier* ou **PID**) do agente SSH:

```
Agent pid 21201
```

Finalmente, adicione sua chave privada SSH ao agente:

```
$ ssh-add ~/.ssh/id_rsa
```

Digite a frase-senha e tecle **Enter**:

```
Enter passphrase for /home/seunomedeusuario/.ssh/id_rsa:
```

O comando confirma que a chave foi adicionada ao agente:

```
Identity added: /home/seunomedeusuario/.ssh/id_rsa (/home/seunomedeusuario/.ssh/id_rsa)
```

## Adicione sua chave SSH à sua conta

Com a chave SSH criada e adicionada ao agente, você já pode configurar a conexão via SSH. Vejamos como fazer isso para cada um dos três servidores: GitHub, GitLab e Bitbucket.

Nos três casos, o processo é semelhante. Comece copiando sua chave pública, que está no arquivo `~/.ssh/id_rsa.pub`, usando o comando **xclip**:

```
$ xclip -sel clip < ~/.ssh/id_rsa.pub
```

O [**xclip**][xclip] é um utilitário que permite, via interface textual, acessar a [área de transferência (*clipboard*)][clipboard] da interface gráfica.

Caso ele não esteja instalado no seu sistema, você pode instalá-lo executando:

```
# zypper install xclip
```

### GitHub

Usando o navegador, acesse a página inicial do GitHub em [github.com][github] e entre na sua conta clicando em **Sign in**. No canto superior direito da página, clique na sua foto de perfil e depois em **Settings** (configurações):

{% include image.html src="/files/2017/04/git-ssh-01.jpg" %}

Na barra lateral, clique em **SSH and GPG keys** (chaves SSH e [GPG][gpg]). Depois, clique em **New SSH key** (nova chave SSH).

Preencha o campo **Title** (título) com um nome descritivo para a nova chave (pode ser, por exemplo, o nome do seu computador) e cole sua chave pública no campo **Key** (chave). Finalmente, clique em **Add SSH key** (adicionar chave SSH):

{% include image.html src="/files/2017/04/git-ssh-02.jpg" %}

Agora a chave aparece na lista de chaves SSH associadas à conta:

{% include image.html src="/files/2017/04/git-ssh-03.jpg" %}

### GitLab

Usando o navegador, acesse a página inicial do GitLab em [gitlab.com][gitlab] e entre na sua conta clicando em **Sign in**. No canto superior direito da página, clique na sua foto de perfil e depois em **Settings** (configurações):

{% include image.html src="/files/2019/07/gitlab-ssh-01.jpg" %}

Na barra lateral, clique em **SSH Keys** (chaves SSH). Depois, cole sua chave pública no campo **Key** (chave). Preencha o campo **Title** (título) com um nome descritivo para a nova chave (pode ser, por exemplo, o nome do seu computador). Finalmente, clique em **Add key** (adicionar chave):

{% include image.html src="/files/2019/07/gitlab-ssh-02.jpg" %}

Agora a chave aparece na lista de chaves SSH associadas à conta:

{% include image.html src="/files/2019/07/gitlab-ssh-03.jpg" %}

### Bitbucket

Usando o navegador, acesse a página inicial do Bitbucket em [bitbucket.org][bitbucket] e entre na sua conta clicando em **Log in**. No canto inferior esquerdo da página, clique na sua foto de perfil e depois em **Bitbucket settings** (configurações do Bitbucket):

{% include image.html src="/files/2019/07/bitbucket-ssh-01-pt.jpg" %}

Você deve ter percebido que a interface do Bitbucket não é totalmente traduzida.

Na barra lateral, na seção **Segurança**, clique em **Chaves SSH**. Depois, clique em **Adicionar chave**.

Preencha o campo **Label** (rótulo) com um nome descritivo para a nova chave (pode ser, por exemplo, o nome do seu computador) e cole sua chave pública no campo **Key** (chave). Finalmente, clique em **Adicionar chave**:

{% include image.html src="/files/2019/07/bitbucket-ssh-02-pt.jpg" %}

Agora a chave aparece na lista de chaves SSH associadas à conta:

{% include image.html src="/files/2019/07/bitbucket-ssh-03-pt.jpg" %}

## Teste a conexão via SSH

GitHub, GitLab e Bitbucket permitem que você teste a conexão antes de usá-la com o Git.

### GitHub

Se você adicionou sua chave SSH à sua conta do GitHub, abra o terminal e execute:

```
$ ssh -T git@github.com
```

Com esse comando, você vai tentar acessar remotamente o servidor do GitHub.

Se você ainda não se conectou ao GitHub via SSH, o cliente SSH pergunta se pode confiar na chave fornecida pelo servidor do GitHub:

```
The authenticity of host 'github.com (192.30.253.112)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)?
```

Nesse caso, digite `yes` e tecle **Enter**. Essa pergunta só é feita na primeira vez. O cliente SSH adiciona o servidor do GitHub à lista de computadores conhecidos:

```
Warning: Permanently added 'github.com,192.30.253.112' (RSA) to the list of known hosts.
```

Como essa conexão é apenas para teste (o GitHub fornece controle de versão com Git, não acesso remoto via SSH), o servidor informa que você conseguiu se autenticar, mas encerra o acesso remoto via SSH:

```
Hi seunomedeusuario! You've successfully authenticated, but GitHub does not provide shell access.
```

Teste concluído com sucesso, você já pode utilizar o SSH com o GitHub.

### GitLab

Se você adicionou sua chave SSH à sua conta do GitLab, o teste é semelhante:

```
$ ssh -T git@gitlab.com
The authenticity of host 'gitlab.com (35.231.145.151)' can't be established.
ECDSA key fingerprint is SHA256:HbW3g8zUjNSksFbqTiUWPWg2Bq1x8xdGUrliXFzSnUw.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'gitlab.com,35.231.145.151' (ECDSA) to the list of known hosts.
Welcome to GitLab, @vinyanalista!
```

Teste efetuado com sucesso, você já pode utilizar o SSH com o GitLab.

### Bitbucket

Se você adicionou sua chave SSH à sua conta do Bitbucket, o teste é semelhante:

```
$ ssh -T git@bitbucket.org
The authenticity of host 'bitbucket.org (104.192.143.1)' can't be established.
RSA key fingerprint is SHA256:zzXQOXSRBEiUtuE8AikJYKwbHaxvSc0ojez9YXaGp1A.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'bitbucket.org,104.192.143.1' (RSA) to the list of known hosts.
logged in as seunomedeusuario.

You can use git or hg to connect to Bitbucket. Shell access is disabled.
```

Teste efetuado com sucesso, você já pode utilizar o SSH com o Bitbucket.

## Clone um repositório via SSH

Agora que sabemos que podemos conectar ao servidor via SSH, vejamos como clonar um repositório usando o SSH em vez do HTTPS.

### GitHub

No [GitHub], acesse o repositório de um projeto, clique em **Clone or download** e copie o [URL][url] para clonar o repositório usando SSH:

{% include image.html src="/files/2017/04/git-ssh-07-pt.jpg" %}

O URL de um repositório do GitHub se parece com:

```
git@github.com:seunomedeusuario/nomedoseuprojeto.git
```

Abra o terminal e execute o comando `git clone` passando o URL copiado (dica: para colar no terminal, utilize a combinação de teclas **Ctrl + Shift + V**).

Observe que o Git clona o repositório via SSH sem pedir senha:

{% include image.html src="/files/2017/04/git-ssh-08-pt.png" %}

### GitLab

No [GitLab], acesse o repositório de um projeto, clique em **Clone** e copie o URL para clonar o repositório usando SSH:

{% include image.html src="/files/2019/07/gitlab-ssh-04.jpg" %}

O URL de um repositório do GitLab se parece com:

```
git@gitlab.com:seunomedeusuario/nomedoseuprojeto.git
```

Abra o terminal e execute o comando `git clone` passando o URL copiado:

{% include image.html src="/files/2019/07/gitlab-ssh-05.png" %}

Com o GitLab, o Git também clona o repositório via SSH sem pedir senha.

### Bitbucket

No [Bitbucket], acesse o repositório de um projeto, clique em **Clonar** e copie o comando para clonar o repositório usando SSH:

{% include image.html src="/files/2019/07/bitbucket-ssh-04-pt.jpg" %}

Note que, diferente do GitHub e do GitLab que informam o URL, o Bitbucket informa o comando `git clone` inteiro, contendo o URL.

O URL de um repositório do Bitbucket se parece com:

```
git@bitbucket.org:seunomedeusuario/nomedoseuprojeto.git
```

Abra o terminal, cole e execute o comando `git clone` copiado:

{% include image.html src="/files/2019/07/bitbucket-ssh-05-pt.png" %}

Com o Bitbucket, o Git também clona o repositório via SSH sem pedir senha.

## Mude um repositório para SSH

Os repositórios que acabamos de clonar via SSH seguirão utilizando o protocolo SSH para futuros comandos do Git como `git pull` e `git push`. Mas repositórios clonados anteriormente com HTTPS seguirão utilizando o protocolo HTTPS.

Também podemos configurar esses repositórios para utilizar SSH.

Para fazer isso, abra o terminal e mude para a pasta do seu repositório local.

Liste os repositórios remotos existentes e seus URLs com o comando:

```
$ git remote -v
```

Sua saída deve ser parecida com:

```
origin  https://seuservidor/seunomedeusuario/nomedoseuprojeto.git (fetch)
origin  https://seuservidor/seunomedeusuario/nomedoseuprojeto.git (push)
```

Mude o URL do seu repositório remoto com o comando:

```
$ git remote set-url origin git@seuservidor:seunomedeusuario/nomedoseuprojeto.git
```

Execute o comando `git remote -v` mais uma vez para verificar que o URL do repositório remoto foi alterado:

```
origin  git@seuservidor:seunomedeusuario/nomedoseuprojeto.git (fetch)
origin  git@seuservidor:seunomedeusuario/nomedoseuprojeto.git (push)
```

Pronto. Feito isso, o Git passará a utilizar o SSH em vez do HTTPS para sincronizar esse repositório local com o seu equivalente remoto.

Espero que essas dicas possam ser úteis para você como têm sido para mim desde que comecei a usar o Git. Se ficou com dúvida ou algo deu errado, não deixe de comentar! Até a próxima!

## Referências

- [Connecting to GitHub with SSH - GitHub Help][github-ssh]
- [Set up an SSH key - Atlassian Documentation][bitbucket-ssh]
- [Changing a remote's URL - GitHub Help][changing-a-remotes-url]
- [GitLab and SSH keys - GitLab][gitlab-help]

[git]:                      https://git-scm.com/
[github]:                   https://github.com/
[bitbucket]:                https://bitbucket.org/
[gitlab]:                   https://gitlab.com/
[https]:                    https://pt.wikipedia.org/wiki/Hyper_Text_Transfer_Protocol_Secure
[ssh]:                      https://pt.wikipedia.org/wiki/Secure_Shell
[opensuse]:                 https://www.opensuse.org/
[openssh]:                  https://www.openssh.com/
[how-to-server-config]:     {%post_url pt/2017-02-18-levante-um-servidor-com-o-linux-opensuse-leap-parte-2 %}
[passphrase]:               https://pt.wikipedia.org/wiki/Frase-passe
[ssh-agent]:                https://pt.wikipedia.org/wiki/Ssh-agent
[pid]:                      https://pt.wikipedia.org/wiki/Identificador_de_processo
[xclip]:                    https://github.com/astrand/xclip
[clipboard]:                https://pt.wikipedia.org/wiki/%C3%81rea_de_transfer%C3%AAncia
[gpg]:                      https://pt.wikipedia.org/wiki/GNU_Privacy_Guard
[url]:                      https://pt.wikipedia.org/wiki/URL
[github-ssh]:               https://help.github.com/en/articles/connecting-to-github-with-ssh
[bitbucket-ssh]:            https://confluence.atlassian.com/bitbucket/set-up-ssh-for-git-728138079.html
[changing-a-remotes-url]:   https://help.github.com/en/articles/changing-a-remotes-url
[gitlab-help]:              https://docs.gitlab.com/ee/ssh/
