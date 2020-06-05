---
date: '2020-06-05 11:00:00 GMT-3'
image: '/files/2020/06/git_logo.png'
layout: post
nickname: 'dotfiles-git'
published: true
title: 'Gerencie seus arquivos de configuração no Linux com o Git'
excerpt: 'Os arquivos comumente chamados de dotfiles ("arquivos ponto", em uma tradução literal) são todos aqueles pequenos arquivos de texto puro que contém as configurações dos seus programas. A maioria deles está em sua pasta pessoal ($HOME), mas são arquivos ocultos, uma vez que seus nomes começam com um ponto (daí serem chamados de dotfiles). Alguns aplicativos os armazenam na pasta $HOME/.config.'
---

{% capture nota1 %}
Esta é uma tradução não oficial da notícia originalmente publicada por Sébastien 'sogal' Poher no _site_ [news.opensuse.org](https://news.opensuse.org/2020/03/27/Manage-dotfiles-with-Git/).
{% endcapture %}

{% include note.html text=nota1 %}

{% include image.html src='/files/2020/06/git_logo.png' %}

Os arquivos comumente chamados de _dotfiles_ ("arquivos ponto", em uma tradução literal) são todos aqueles pequenos arquivos de texto puro que contém as configurações dos seus programas. A maioria deles está em sua pasta pessoal (`$HOME`), mas são arquivos ocultos, uma vez que seus nomes começam com um ponto (daí serem chamados de _dotfiles_). Alguns aplicativos os armazenam na pasta `$HOME/.config`.

Para gerenciá-los (acompanhar suas alterações, movê-los entre diferentes computadores, fazer _backup_ deles), existem algumas soluções:

- o bom e velho _pendrive_
- **[rsync]**
- sincronizá-los na "nuvem"
- movê-los para uma pasta central e criar _links_ simbólicos para onde eles deveriam estar

Neste artigo, vamos focar em como gerenciá-los de forma simples e eficiente com o [Git].

## Git ao resgate!

Neste exemplo, vamos usar a pasta `$HOME/dotfiles` como repositório do Git, mas fique a vontade para usar outra pasta, de acordo com a sua necessidade.

Primeiramente, vamos inicializar este repositório:

```
$ git init --bare $HOME/dotfiles
```

Depois, como todos os comandos **git** que usaremos se referirão a este repositório, é recomendável criar um **[alias]**, como:

```
alias dotfiles='/usr/bin/git --git-dir=$HOME/dotfiles --work-tree=$HOME'
```

Você pode adicionar essa linha ao arquivo de configuração do seu `$SHELL` (`$HOME/.bashrc`, se você usa [Bash], ou `$HOME/.zshrc`, se você usa [Zsh]).

Em seguida, vamos configurar o Git para que ele não mostre todos os arquivos não rastreados (_untracked files_). Precisamos fazer isso porque vamos usar toda a pasta pessoal como pasta de trabalho (_work tree_).

```
$ dotfiles config --local status.showUntrackedFiles no
```

A essa altura, você já deve ser capaz de verificar o estado do repositório:

```
$ dotfiles status
```

Você pode adicionar seus arquivos de configuração e comitar como desejar. Por exemplo, vamos adicionar nosso `.bashrc`:

```
$ dotfiles add .bashrc
$ dotfiles commit -m ".bashrc adicionado"
```

Agora basta adicionar um repositório remoto — um servidor Git hospedado por você mesmo (_self-hosted_) ou um _online_ — e enviar suas mudanças para ele:

```
$ dotfiles remote add origin git@seugit.exemplo.com/dotfiles.git
$ dotfiles push
```

{% capture nota2 %}
Serviços _online_ como [GitHub](https://github.com/), [Bitbucket](https://bitbucket.org/) e [GitLab](https://gitlab.com/) permitem que você crie repositórios privados. A menos que sua intenção seja realmente compartilhar esses arquivos de configuração com alguém, recomendo que você se atente a esse detalhe e crie um repositório privado, para que só você tenha acesso aos seus arquivos pessoais.
{% endcapture %}

{% include note.html text=nota2 %}

## Configurando um novo computador

Agora que você já configurou tudo no primeiro computador, vamos configurar um novo computador com os _dotfiles_ que você tem no seu repositório.

Primeiro, faça um clone local do seu repositório _online_:

```
$ git clone --bare git@seugit.exemplo.com/dotfiles.git $HOME/dotfiles
```

Novamente, você deve definir o mesmo **alias** de antes:

```
alias dotfiles='/usr/bin/git --git-dir=$HOME/dotfiles --work-tree=$HOME'
```

Lembre-se de adicioná-lo ao arquivo de configuração do seu `$SHELL`.

Agora basta aplicar as alterações do repositório que você acabou de clonar ao seu sistema:

```
$ dotfiles checkout
```

Se alguns dos arquivos já existirem, você receberá uma mensagem de erro. Provavelmente isso ocorrerá com os arquivos criados por padrão durante a instalação do openSUSE e a criação da sua conta do usuário, como o arquivo `$HOME/.bashrc`. Não se preocupe, apenas renomeie ou exclua os arquivos que já existiam.

Agora, sempre que você alterar seus arquivos de configuração rastreados pelo Git, lembre-se de comitar e enviar suas alterações.

## Referências

Os artigos a seguir foram usados como referências deste artigo. Muito obrigado aos seus autores!

- [Easily manage your dotfiles with git][lord]
- [How to make your Dotfile management a painless affair][freecodecamp]
- [How to manage your dotfiles with git][toutsbrasil]

{% capture nota3 %}
As referências acima foram citadas pelo autor do texto original:

- [Manage your dotfiles with Git - openSUSE News](https://news.opensuse.org/2020/03/27/Manage-dotfiles-with-Git/)

Obrigado, Sébastien 'sogal' Poher, por essa excelente dica!
{% endcapture %}

{% include note.html text=nota3 %}

[rsync]:        https://rsync.samba.org/
[git]:          https://git-scm.com/
[alias]:        https://www.man7.org/linux/man-pages/man1/alias.1p.html
[bash]:         https://www.gnu.org/software/bash/
[zsh]:          https://www.zsh.org/
[lord]:         https://lord.re/en/posts/62-dotfiles-home-git/
[freecodecamp]: https://www.freecodecamp.org/news/dive-into-dotfiles-part-2-6321b4a73608/
[toutsbrasil]:  https://medium.com/toutsbrasil/how-to-manage-your-dotfiles-with-git-f7aeed8adf8b
