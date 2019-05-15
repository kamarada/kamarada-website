---
date: '2019-05-14 21:00:00 GMT-3'
layout: post
published: true
title: 'Como obter atualizações para o Linux openSUSE'
image: /files/2019/05/howto-update.png
nickname: 'howto-update'
excerpt: 'Neste post você verá como atualizar os pacotes instalados, de modo a obter novas funcionalidades e correções de falhas para o seu sistema.'
---

{% include image.html src="/files/2019/05/howto-update.png" %}

Programas de computador não são perfeitos: são feitos por nós, seres humanos. Com o tempo, vão sendo aperfeiçoados, seja por otimizações, adição de funcionalidades ou correções de falhas (*bugs*). Existem falhas dos mais diversos tipos: erros de digitação, lentidões, travamentos, até brechas de segurança, que podem ser usadas por pessoas mal intencionadas para acessar seus arquivos pessoais. Por isso, é importante manter o computador sempre atualizado, utilizando as versões mais novas dos programas.

Felizmente, manter o [openSUSE][opensuse] sempre atualizado é fácil. É possível obter atualizações tanto pela interface gráfica quanto, para quem prefere, pela interface de linha de comando, como veremos.

Se você está usando um *desktop* ou *notebook*, pode optar pela interface gráfica ou textual. Se está administrando um servidor, provavelmente a interface textual é sua única opção.

## Tipos de atualizações

É curioso observar que a palavra **atualização** no nosso português se refere a dois processos distintos, com nomes distintos em inglês:

- atualização de pacotes (*update*): essa deve ser feita com frequência, sempre que houver atualizações e for possível instalá-las, não muda a versão da distribuição, normalmente atualiza poucos pacotes instalados; e
- atualização da distribuição (*upgrade*): essa normalmente é feita uma vez por ano, muda a versão da distribuição e atualiza todos os pacotes instalados.

Exemplos de ambos os casos:

- fazendo um *update*, você mantém a distribuição openSUSE Leap na mesma versão, 42.3, e atualiza o aplicativo [Firefox] da versão 52.2 para a versão 52.8, junto com mais outros 10 pacotes;
- fazendo um *upgrade*, você atualiza a distribuição openSUSE Leap da versão 42.3 para a versão 15.0, e atualiza o Firefox da versão 52.8 para a 60.0, o [LibreOffice] da versão 5.4 para a 6.0, o [GNOME] da versão 3.20 para a 3.26, além de outros 3 mil pacotes;

Neste *post*, veremos como atualizar os pacotes (*update*).

No próximo *post*, veremos como atualizar a distribuição (*upgrade*).

Atualmente, a distribuição openSUSE Leap está na versão 15.0. A próxima versão será a 15.1, com [lançamento previsto para 22 de maio][roadmap]. Por agora, você pode se preparar para a atualização da distribuição se certificando que possui as versões mais recentes dos pacotes para a distribuição atual. Esse é um dos pré-requisitos para atualizar a distribuição.

## Pela interface gráfica

Para obter atualizações para os pacotes instalados pela interface gráfica, você pode usar o aplicativo **Atualizador de pacotes**.

De tempos em tempos, ele já busca atualizações automaticamente e notifica caso haja atualizações para instalar:

{% include image.html src="/files/2019/05/howto-update-01-pt.jpg" %}

Clique em **Ver** na notificação para iniciar o aplicativo Atualizador de pacotes.

Caso não seja um momento oportuno para instalar atualizações, você pode clicar em **Agora não**. Mas lembre-se de instalar as atualizações depois.

Para iniciar o Atualizador de pacotes manualmente, clique em **Atividades**, no canto superior esquerdo da tela, comece a digitar `atualizador` e clique no ícone do **Atualizador de pacotes**:

{% include image.html src="/files/2019/05/howto-update-02-pt.jpg" %}

**Dica:** você também pode acessar o **panorama de Atividades** simplesmente movendo o ponteiro do *mouse* para o canto superior esquerdo da tela (como se fosse sair da tela). Outra forma de acessar o panorama de Atividades é pressionar a tecla **Super** (em alguns teclados, ela possui a bandeira do [Windows][windows]).

O Atualizador de pacotes verifica se há atualizações disponíveis e, se houver, as lista:

{% include image.html src="/files/2019/05/howto-update-03-pt.jpg" %}

Certifique-se de que todas estão selecionadas e clique em **Instalar atualizações**.

O Atualizador de pacotes começará a baixar as atualizações.

Se quiser, você pode acompanhar o andamento do processo de atualização:

{% include image.html src="/files/2019/05/howto-update-04-pt.jpg" %}

Em vez disso, se preferir, você pode continuar usando o computador normalmente enquanto as atualizações são baixadas e instaladas.

Ao final do processo, o Atualizador de pacotes informa que o sistema está atualizado:

{% include image.html src="/files/2019/05/howto-update-05-pt.jpg" %}

Clique em **OK** para sair do Atualizador de pacotes.

Normalmente, quando o processo de atualização acaba, não é necessário fazer mais nada, nem mesmo reiniciar o computador. As atualizações já passam a valer e você já as perceberá se abrir algum programa que foi atualizado.

Em alguns casos, é possível que o Atualizador de pacotes solicite a você reiniciar a sessão ou o computador. Se isso acontecer, siga as instruções na tela.

<!--
{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-05-pt.jpg" %}
-->

## Pela interface de linha de comando

Para obter atualizações atualizações para os pacotes instalados pela interface textual (linha de comando), você pode usar o gerenciador de pacotes [**zypper**][zypper].

Se você não está acostumado à linha de comando, perceberá que não é difícil utilizá-la. Quase sempre, você pode usar a linha de comando sem abandonar a interface gráfica por meio do aplicativo [**Terminal**][gnome-terminal]. Para iniciá-lo, acesse o **panorama de Atividades**, digite `terminal` e clique em seu ícone:

{% include image.html src="/files/2019/05/howto-update-cmd-01-pt.jpg" %}

O Terminal é iniciado:

{% include image.html src="/files/2019/05/howto-update-cmd-02-pt.png" %}

Se você usa Windows, talvez ache o Terminal parecido com o **Prompt de Comando**.

Pela linha de comando, usuários comuns não são autorizados a instalar atualizações usando o **zypper**. Somente o [superusuário][superuser] (também conhecido por administrador ou usuário *root*) pode usar o **zypper**.

Para alternar da sua conta de usuário comum para o usuário *root*, execute o comando:

```
$ su
```

Se você não está acostumado com essa notação, isso significa digitar `su` e teclar **Enter**. O cifrão (`$`) não deve ser digitado, ele apenas indica que o comando pode ser executado por qualquer usuário. A seguir, você verá exemplos de comandos que só podem ser executados pelo usuário *root*. Esses são indicados por uma cerquilha (`#`) antes.

O comando **su** pedirá a senha do usuário *root*, que você deve fornecer para continuar. Digite a senha do usuário *root* e tecle **Enter**.

Estava esperando que apareceriam asteriscos (`*`) enquanto você digitava a senha? Não se preocupe, na interface textual do Linux é assim mesmo: a senha não aparece enquanto é digitada, de forma alguma, nem mesmo camuflada com asteriscos.

Agora sim, como usuário *root*, invoque o **zypper** com o comando:

```
# zypper ref
```

Esse comando fará o **zypper** obter da Internet a lista de pacotes disponíveis:

{% include image.html src="/files/2019/05/howto-update-cmd-03-pt.png" %}

Esse *ref* vem do inglês *refresh*, que significa atualizar — olha só, encontramos uma terceira tradução no inglês para o nosso "atualizar" em português!

Note que o **zypper** indica o progresso do que faz. Quando terminar, execute o comando:

```
# zypper up
```

(esse *up* vem do inglês *update*)

Esse comando fará com que o **zypper** baixe e instale atualizações disponíveis, se houver:

{% include image.html src="/files/2019/05/howto-update-cmd-04-pt.png" %}

{% include image.html src="/files/2019/05/howto-update-cmd-05-pt.png" %}

O **zypper** indica o que precisa fazer para deixar o sistema atualizado e pergunta se você deseja continuar. A opção padrão é continuar (**s**). Se é isso o que deseja, você pode apenas teclar **Enter** e a atualização começará.

O **zypper** mostra o andamento do processo:

{% include image.html src="/files/2019/05/howto-update-cmd-06-pt.png" %}

Normalmente, quando a atualização acaba, não é necessário fazer mais nada, nem reiniciar o computador. Mas note que ao final dessa atualização o **zypper** cogitou reiniciar programas, porque arquivos que estavam sendo usados foram apagados:

{% include image.html src="/files/2019/05/howto-update-cmd-07-pt.png" %}

Nesse caso, mesmo que o **zypper** não tenha dito para reiniciar o computador, como ele falou em "reiniciar", recomendo que você reinicie o computador. Para isso, use o comando:

```
# reboot
```

(reiniciar, em inglês)

Quando voltar, seu sistema estará novo e limpo, sem risco de mau funcionamento.

Se lembre de verificar de tempos em tempos se há atualizações, já que usando a linha de comando o sistema não avisa a você quando há atualizações.

Resumindo, os comandos necessários para atualizar o sistema pela interface de linha de comando usando o **zypper** são:

```
$ su
# zypper ref
# zypper up
# reboot
```

[linux]:            http://www.vivaolinux.com.br/linux/
[opensuse]:         https://www.opensuse.org/
[firefox]:          https://www.mozilla.org/
[libreoffice]:      https://pt-br.libreoffice.org/
[gnome]:            https://www.gnome.org/
[roadmap]:          https://progress.opensuse.org/projects/leap_151/roadmap
[windows]:          https://www.microsoft.com/pt-br/windows/
[zypper]:           https://pt.opensuse.org/Portal:Zypper
[gnome-terminal]:   https://help.gnome.org/users/gnome-terminal/stable/index.html.pt_BR
[superuser]:        https://pt.wikipedia.org/wiki/Superusu%C3%A1rio
