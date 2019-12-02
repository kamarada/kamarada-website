---
date: '2019-11-27 22:50:00 GMT-3'
layout: post
published: true
title: 'Dica de Git: merge e diff facilitados pela interface gráfica com Meld e Atom'
image: '/files/2019/11/git-mergetool-meld-pt.png'
nickname: 'git-meld'
---

Dica para desenvolvedores que usam [Git]: já sentiu dificuldade ao fazer um _[merge]_? Sabia que é possível resolver conflitos com o auxílio de interfaces gráficas que facilitam bastante o trabalho? Hoje veremos dois aplicativos que podem nos ajudar a resolver conflitos: o editor de texto [Atom] e a ferramenta de _diff_ e _merge_ [Meld].

<!--more-->

## Fazendo merge e resolvendo conflitos

Antes da dica propriamente dita, para garantir que estamos todos na mesma página, vejamos como normalmente se faz [**git merge**][git-merge] e se resolve conflitos.

Imagine que você e um colega trabalham em um projeto de desenvolvimento e usam um repositório do Git para armazenar o código-fonte. Além do _branch_ principal (`master`), cada um possui seu próprio _branch_ (por exemplo, `antonio` e `jose`). Ao terminar o desenvolvimento de uma funcionalidade, cada um deve fazer _merge_ do seu _branch_ para o _branch_ principal.

Imagine também que vocês trabalharam em paralelo no mesmo arquivo, editando linhas próximas (ou as mesmas linhas), mas seu colega fez _merge_ com o _branch_ `master` primeiro. Quando você fizer _merge_ do seu _branch_ com o `master`, o Git acusará um conflito de arquivo:

{% include image.html src="/files/2019/11/git-merge-conflict-pt.png" %}

Um exemplo que aconteceu comigo na vida real, ao trazer atualizações do _upstream_ para um _fork_:

```
$ git checkout master1
$ git merge upstream1
Auto-merging publish.sh
Auto-merging libs/popper.js/1.16.0/umd/popper.js
...
Auto-merging _layouts/post.html
Auto-merging _layouts/default.html
Auto-merging _includes/sidebar.html
Auto-merging _includes/head.html
CONFLICT (content): Merge conflict in _includes/head.html
Auto-merging _includes/footer.html
CONFLICT (content): Merge conflict in _includes/footer.html
Automatic merge failed; fix conflicts and then commit the result.
```

```
$ git status
On branch master1
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:

	modified:   _includes/adsense.html
	modified:   _includes/sidebar.html
...
	new file:   libs/popper.js/1.16.0/umd/popper.min.js.map
	modified:   publish.sh

Unmerged paths:
  (use "git add/rm <file>..." as appropriate to mark resolution)

	both modified:   _includes/footer.html
	both modified:   _includes/head.html
	deleted by us:   _posts/2015-08-25-welcome-to-jekyll.markdown
	both modified:   assets/css/main.css
```

Em caso de conflito durante o _merge_, você deve editar manualmente os arquivos conflituosos, comparando as alterações que você e o seu colega fizeram, elaborar a versão final do arquivo e, por fim, executar [**git commit**][git-commit] para concluir o _merge_.

## Resolvendo conflitos com o Atom

Se você ainda não conhece, o [Atom] é um editor de texto feito pelo [GitHub], por desenvolvedores e para desenvolvedores. Possui muitas funcionalidades, é bastante inteligente já em sua configuração padrão, mas pode receber extensões. O Atom faz lembrar o [Sublime Text][sublimetext], mas é [_software_ livre][free-sw] e gratuito.

Para instalar o Atom no [Linux Kamarada][kamarada] ou no [openSUSE], baixe e instale o pacote RPM do seu _site_:

- [https://atom.io/](https://atom.io/)

Ao abrir um arquivo conflituoso com o Atom, ele permite facilmente escolher entre uma versão ou outra das linhas, basta clicar no botão **Use me** referente à versão desejada:

{% include image.html src="/files/2019/11/atom.png" %}

Note que a decisão não precisa ser binária: você pode escolher uma das versões e editá-la para obter um meio termo. O que importa é o conteúdo final do arquivo na hora de salvar.

## Resolvendo conflitos com o Meld

O [Meld] é uma ferramenta gráfica de _diff_ e _merge_ feita para desenvolvedores. Permite comparar arquivos e pastas em duas ou três vias e suporta vários sistemas de controle de versão, dentre eles o Git. Para instalar o Meld no Linux Kamarada ou no openSUSE, execute:

```
# zypper in meld meld-lang
```

Você pode usar o Meld sozinho, abrindo o aplicativo e selecionando os arquivos ou pastas que deseja comparar, mas não vou entrar em detalhes nesse sentido, porque nosso objetivo aqui é ver como usar o Meld integrado ao Git.

Para resolver conflitos com o Meld, execute o comando [**git mergetool**][git-mergetool]:

```
$ git mergetool

This message is displayed because 'merge.tool' is not configured.
See 'git mergetool --tool-help' or 'git help config' for more details.
'git mergetool' will now attempt to use one of the following tools:
meld opendiff kdiff3 tkdiff xxdiff tortoisemerge gvimdiff diffuse diffmerge ecmerge p4merge araxis bc codecompare emerge vimdiff
Merging:
_includes/footer.html
_includes/head.html
_posts/2015-08-25-welcome-to-jekyll.markdown
assets/css/main.css

Normal merge conflict for '_includes/footer.html':
  {local}: modified file
  {remote}: modified file
Hit return to start merge resolution tool (meld):
```

A função do comando **git mergetool** é iniciar uma ferramenta apropriada para a resolução de conflitos. Ele exibe essa mensagem comprida na primeira utilização porque ainda não configuramos uma ferramenta. Note que ele suporta várias ferramentas, dentre elas o Meld, que é a primeira da lista e é também a que ele sugere usar. Tecle **Enter** para iniciar o Meld.

O Meld abre o arquivo conflituoso em três vias: à esquerda, a versão anterior do _branch_ atual (nesse exemplo, o _branch_ `master1`); no meio, a versão mesclada (esse é o resultado que irá no _commit_ do _merge_); e à direita, a versão do _branch_ que está sendo mesclado (`upstream1`):

{% include image.html src="/files/2019/11/git-mergetool-meld-pt.png" %}

Você pode usar as setas ao lado das linhas para copiar trechos de código de um lado para o outro.

Note que também no Meld as decisões não precisam ser binárias: você pode simplesmente posicionar o cursor na via do meio e começar a digitar. A versão final do arquivo mesclado será tudo que estiver na via do meio, não importando se o conteúdo veio da via da esquerda, da via da direita ou se foi digitado à mão.

Quando terminar de resolver o conflito, clique em **Salvar**.

Para que o Git sempre use o Meld para resolver conflitos sem perguntar qual ferramenta usar, execute os comandos a seguir:

```
$ git config --global merge.tool meld
$ git config --global mergetool.prompt false
```

Feito isso, aquela mensagem comprida não aparecerá mais ao executar **git mergetool**: o Git indicará qual arquivo está mesclando e já abrirá o Meld (você não precisará teclar **Enter**).

Além de resolver conflitos, o Meld pode ser usado para comparar versões de arquivos controladas pelo Git.

## Comparando versões de arquivos

Para comparar versões de um mesmo arquivo (por exemplo, qual a diferença entre um arquivo em um _branch_ e esse mesmo arquivo em outro _branch_, ou o que mudou em um arquivo entre dois _commits_), você pode usar o comando [**git diff**][git-diff]:

```
$ git checkout master1
$ git diff upstream1 -- _includes/footer.html
```

Nesse exemplo, queremos saber o que mudou no arquivo `_includes/footer.html` do _branch_ `upstream1` (especificado como referência inicial) para o _branch_ atual (`master1`):

{% include image.html src="/files/2019/11/git-diff-pt.png" %}

Talvez usando o Meld essa comparação fique mais interessante. Vejamos.

## Comparando versões de arquivos com o Meld

Como se fosse uma mistura do **git diff** com o **git mergetool** é o comando [**git difftool**][git-difftool]:

```
$ git difftool upstream1 -- _includes/footer.html
```

De forma semelhante, no primeiro uso ele alerta que não foi configurado e pergunta se deseja iniciar o Meld:

```
This message is displayed because 'diff.tool' is not configured.
See 'git difftool --tool-help' or 'git help config' for more details.
'git difftool' will now attempt to use one of the following tools:
meld opendiff kdiff3 tkdiff xxdiff kompare gvimdiff diffuse diffmerge ecmerge p4merge araxis bc codecompare emerge vimdiff

Viewing (1/1): '_includes/footer.html'
Launch 'meld' [Y/n]?
```

Tecle **Enter** para iniciar o Meld. Dessa vez, ele faz uma comparação em duas vias: à esquerda, é exibida a versão especificada como referência (nesse caso, a versão do _branch_ `upstream1`), e à direita, é exibida a versão do _branch_ atual (nesse caso, o _branch_ `master1`):

{% include image.html src="/files/2019/11/git-difftool-meld-pt.png" %}

Configurar o **git difftool** para sempre usar o Meld sem perguntar também é parecido:

```
$ git config --global diff.tool meld
$ git config --global difftool.prompt false
```

## Referências

- [Git - Basic Branching and Merging][merge]
- [Git diffs e merges mais práticos com o Meld - iMasters][imasters]
- [Compare files with these graphical diff tools in Fedora - Fedora Magazine][fedoramagazine]
- [Setting up and using Meld as your git difftool and mergetool - Stack Overflow][stackoverflow]

[git]:              https://git-scm.com/
[merge]:            https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
[atom]:             https://atom.io/
[meld]:             https://meldmerge.org/
[git-merge]:        https://git-scm.com/docs/git-merge
[git-commit]:       https://git-scm.com/docs/git-commit
[github]:           https://github.com/
[sublimetext]:      https://www.sublimetext.com/
[free-sw]:          https://www.gnu.org/philosophy/free-sw.pt-br.html
[kamarada]:         {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[opensuse]:         https://www.opensuse.org/
[git-mergetool]:    https://git-scm.com/docs/git-mergetool
[git-diff]:         https://git-scm.com/docs/git-diff
[git-difftool]:     https://git-scm.com/docs/git-difftool
[imasters]:         https://imasters.com.br/desenvolvimento/git-diffs-e-merges-mais-praticos-com-o-meld
[fedoramagazine]:   https://fedoramagazine.org/compare-files-with-these-graphical-diff-tools-in-fedora/
[stackoverflow]:    https://stackoverflow.com/a/39925108/1657502
