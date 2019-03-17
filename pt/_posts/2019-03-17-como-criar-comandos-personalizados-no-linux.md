---
date: 2019-03-17 16:30:00 GMT-3
image: '/files/2019/03/custom-commands-pt.jpg'
layout: post
published: true
nickname: 'custom-commands'
title: 'Como criar &quot;comandos personalizados&quot; no Linux'
excerpt: 'Se você costuma usar o terminal e há comandos que você usa com frequência, saiba que pode economizar digitação criando scripts com nomes personalizados. Em vez de digitar um comando grande, ou digitar vários comandos, você chama o script e ele faz todo o trabalho. Veja nesse post como fazer isso.'
---

Se você costuma usar o terminal e há comandos que você usa com frequência, saiba que pode economizar digitação criando *scripts* com nomes personalizados. Em vez de digitar um comando grande, ou digitar vários comandos, você chama o *script* e ele faz todo o trabalho. Veja nesse *post* como fazer isso.

Uma tarefa que simplifiquei onde trabalho foi o envio de arquivos para um servidor usando [**rsync**][rsync]. Eu percebi que com frequência eu usava um comando parecido com esse:

```
$ rsync -Cavz /pasta/no/computador usuario@servidor:/pasta/no/servidor
```

Eu decidi criar um *script* com um nome pequeno (por exemplo, `syncsrv`) para abreviar a digitação desse comando.

Como fiz isso?

Por padrão, o [openSUSE] cria uma pasta chamada `bin` na pasta pessoal de cada usuário (por exemplo, `/home/kamarada`) e adiciona essa pasta à variável de ambiente `$PATH` de cada usuário. Com isso, *scripts* criados nessa pasta podem ser chamados de qualquer pasta.

Então eu criei o *script* chamado `syncsrv` (sem extensão mesmo) na pasta `bin`:

```
$ cd ~/bin
$ touch syncsrv
```

(`~` é um atalho para a pasta pessoal, no meu caso `/home/kamarada`)

Com meu editor favorito (no terminal, eu gosto de usar o [nano]) abri o *script*:

```
$ nano syncsrv
```

E digitei:

```bash
#!/bin/bash
rsync -Cavz /pasta/no/computador usuario@servidor:/pasta/no/servidor
```

Salvei. Por último, tornei o *script* `syncsrv` executável modificando suas permissões:

```
$ chmod u+x syncsrv
```

Pronto! Feito isso, agora eu posso chamar de qualquer pasta:

```
$ syncsrv
```

para enviar arquivos para o servidor, em vez de ter que digitar o comando original:

```
$ rsync -Cavz /pasta/no/computador usuario@servidor:/pasta/no/servidor
```

Cansa menos as mãos, não?

## Mais um exemplo

Com o tempo, também percebi que eu sempre quando chegava no trabalho iniciava o [Thunderbird], o [Pidgin] e sincronizava meus repositórios do [Git] usando o comando [**mr**][mr].

Usando o mesmo procedimento acima, criei um *script* chamado `cheguei` com o seguinte conteúdo:

```bash
#!/bin/bash
(thunderbird &)
(pidgin &)
mr update
```

Comandos como `(thunderbird &)` iniciam programas em segundo plano, de modo que não são encerrados ao fechar a janela do terminal, para mais informações consulte [essa pergunta no Unix & Linux Stack Exchange (em inglês)][stack-exchange].

Pronto! Agora sempre que chego no trabalho abro o terminal, aviso que cheguei e ele executa esses comandos para mim.

{% include image.html src="/files/2019/03/custom-commands-pt.jpg" style="max-width: 300px;" %}

## Não funciona no meu computador

Se você utiliza outra distribuição Linux, ou utiliza uma versão anterior do openSUSE, que talvez não venha com a pasta `~/bin` pré-configurada, saiba que é possível criá-la e configurá-la automaticamente. Veja a seguir como fazer.

Acesse a pasta pessoal e crie a pasta `bin` (essa é apenas uma convenção, mas na verdade você pode nomeá-la como quiser):

```
$ cd ~
$ mkdir bin
```

Abra o arquivo `.bash_profile` localizado na pasta pessoal (já estamos nela) e adicione essa linha ao final (lembre-se de substituir `kamarada` pelo seu nome de usuário):

```bash
export PATH=/home/kamarada/bin:$PATH
```

Feche a janela atual do terminal e abra uma nova, para que o arquivo `.bash_profile` seja executado novamente.

Com isso você já pode criar *scripts* na pasta `~/bin` e executá-los.

## Referências

- [How to Create and Use Bash Scripts – Tania Rascia][taniarascia]
- [exec - How to "correctly" start an application from a shell - Unix & Linux Stack Exchange][stack-exchange]

[rsync]:            https://www.vivaolinux.com.br/artigo/Transferindo-arquivos-com-o-rsync?pagina=3
[opensuse]:         https://www.opensuse.org/
[nano]:             https://www.nano-editor.org/
[thunderbird]:      https://www.thunderbird.net/pt-BR/
[pidgin]:           https://pidgin.im/
[git]:              https://git-scm.com/
[mr]:               https://myrepos.branchable.com/
[stack-exchange]:   https://unix.stackexchange.com/a/305769/106621
[taniarascia]:      https://www.taniarascia.com/how-to-create-and-use-bash-scripts
