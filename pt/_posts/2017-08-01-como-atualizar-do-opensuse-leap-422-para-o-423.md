---
date: '2017-08-01 23:00:00 GMT-3'
layout: post
published: true
title: 'Como atualizar do openSUSE Leap 42.2 para o 42.3'
image: /files/2017/08/how-to-upgrade-to-42.3-00-pt.png
nickname: 'how-to-upgrade-to-42.3'
excerpt: 'A versão atual da distribuição openSUSE Leap, a 42.3, foi lançada dia 26 de julho. Atualizar da versão 42.2 para a versão 42.3 é como atualizar da versão 42.1 para a versão 42.2, o passo a passo é bem parecido. Se você já utiliza o openSUSE há algum tempo, sabe que atualizar de uma versão para outra é fácil e tranquilo. Se você conheceu o openSUSE na versão 42.2, vai perceber isso agora. Neste post você verá como atualizar seu openSUSE Leap da versão 42.2 para a 42.3.'
---

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-00-pt.png" caption="openSUSE Leap 42.3 já está disponível" %}

A versão atual da distribuição [openSUSE Leap][opensuse-leap], a 42.3, [foi lançada dia 26 de julho][opensuse-leap-42.3]. Atualizar da versão 42.2 para a versão 42.3 é como [atualizar da versão 42.1 para a versão 42.2][how-to-upgrade-to-42.2], o passo a passo é bem parecido. Se você já utiliza o openSUSE há algum tempo, sabe que atualizar de uma versão para outra é fácil e tranquilo. Se você conheceu o openSUSE na versão 42.2, vai perceber isso agora.

Neste *post* você verá como atualizar seu openSUSE Leap da versão 42.2 para a 42.3.

## Algumas observações

O passo a passo para atualização que apresento aqui é o que utilizei no meu computador e que aprendi lendo a [*wiki* do openSUSE][system-upgrade]. Ele é praticamente o mesmo desde que comecei a utilizar o openSUSE. É um procedimento seguro, que deve funcionar para a maioria dos casos, mas que requer alguns cuidados.

**Você deve estar utilizando a versão imediatamente anterior do openSUSE.** Isso quer dizer que se você pretende atualizar para a versão 42.3, deve estar usando agora a versão 42.2. Saltos de versões não são suportados. Podem funcionar, mas não há garantia. Portanto, se você utiliza a versão 42.1, por exemplo, é melhor que primeiro atualize para a versão 42.2, para então atualizar para a versão 42.3. Se esse é o seu caso, sua leitura deve começar por [esse outro *post*][how-to-upgrade-to-42.2]. Quando terminar, retorne a este.

**Sua instalação do openSUSE deve estar atualizada** com as versões mais recentes dos pacotes lançadas até o momento.

É curioso observar que a palavra **atualização** no nosso português se refere a dois processos distintos, com nomes distintos em inglês: existe a atualização dos pacotes sem mudar a versão da distribuição (*update*) — essa deve ser feita com frequência, sempre que necessário — e a atualização com mudança da versão da distribuição (*upgrade*) — essa normalmente é feita uma vez por ano.

Aqui, veremos como fazer ambas, porque antes de avançar para a próxima versão (*upgrade*) você deve se certificar de que obteve todas as atualizações (*updates*) disponíveis para os pacotes que já possui.

**Você deve se informar sobre a versão do openSUSE que vai instalar.** Consulte as [notas de lançamento][release-notes], que descrevem o que muda na nova versão e listam alguns *bugs* conhecidos, como preveni-los e/ou solucioná-los.

**Você deve fazer uma cópia de segurança (*backup*) de arquivos importantes.** Apesar de a atualização (*upgrade*) do openSUSE ser segura (fazendo lembrar, para quem conhece, a atualização do [Debian][debian]), não quer dizer que seja perfeita. Ganhar na loteria é difícil, mas uma hora alguém ganha. Algo dar errado na atualização é difícil, especialmente se você toma todos os cuidados, mas pode acontecer. Eu, particularmente, já atualizei algumas vezes sem problema. Nunca é demais fazer uma cópia dos seus arquivos pessoais por precaução, especialmente se a pasta `/home` não está em uma partição reservada. Se o computador não pode ficar parado por muito tempo (um servidor, por exemplo), considere fazer uma cópia de todo o sistema, a fim de restaurá-la imediatamente caso algo não funcione como esperado.

**Você não deve utilizar repositórios não oficiais (de terceiros) durante a atualização.** Antes de começar a atualização (*upgrade*), removeremos os [repositórios de terceiros][third-party-repos]. É possível que isso ocasione a remoção também de programas de terceiros. Você pode devolvê-los depois. Isso não quer dizer que não seja possível atualizar com esses repositórios presentes, mas usar apenas os [repositórios oficiais][official-repos] é mais garantido. A base do sistema será atualizada para uma nova base estável, sólida, confiável. Depois, sobre essa base, você poderá instalar o que quiser. Faça diferente dessa recomendação apenas se souber o que está fazendo.

Recomendo também que você leia toda essa página antes de começar de fato a agir. Para organizá-la melhor, vou dividi-la em 6 etapas. Conhecendo todo o processo, você terá condição de agendá-lo melhor. Você pode até fazer outras coisas usando o computador enquanto segue o passo a passo, mas depois que começar a atualização (*upgrade*), só poderá usar o computador quando ela for concluída.

## 1) Atualização dos pacotes da distribuição (*update*)

Certifique-se de que a instalação do openSUSE que está no seu computador esteja atualizada. Você pode obter atualizações pela interface gráfica ou pela interface de linha de comando, como veremos.

Utilizo sempre que possível a interface gráfica, mas a interface textual nos permite vantagens como apenas baixar as atualizações e depois apenas instalá-las. Se você não está acostumado à linha de comando, perceberá que não é difícil utilizá-la.

Quase sempre, você pode utilizar a interface de linha de comando sem abandonar a interface gráfica por meio do aplicativo [**Terminal**][gnome-terminal]. Como iniciá-lo? Mova o ponteiro do *mouse* para o canto superior esquerdo da tela onde se lê "Atividades" para mostrar o **panorama de Atividades**. Você também pode abrir o panorama pressionando a tecla **Super** (em alguns teclados, ela possui a bandeira do [Windows][windows]). Digite `terminal` e clique no ícone do aplicativo:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-01-pt.jpg" %}

O Terminal é iniciado:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-02-pt.png" %}

Se você utiliza Windows, talvez ache o Terminal parecido com o **Prompt de Comando**.

### Pela interface gráfica

Para obter atualizações pela interface gráfica, você pode usar o aplicativo **Atualizador de pacotes**. Para iniciá-lo, acesse o **panorama de Atividades**, comece a digitar `atualizador` e clique no ícone do **Atualizador de pacotes**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-03-pt.jpg" %}

O Atualizador de pacotes verifica se há atualizações disponíveis para o sistema e, se houver, as lista:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-04-pt.jpg" %}

Clique em **Instalar atualizações**. O Atualizador de pacotes começará a baixar as atualizações. Quando terminar de instalar atualizações, pode ser que o Atualizador de pacotes peça a você para fazer algo:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-05-pt.jpg" %}

Nesse caso, siga as instruções na tela.

Para se certificar de que instalou realmente todas as atualizações disponíveis até o momento, repita esse processo de buscar e instalar atualizações até que o Atualizador de pacotes informe que o sistema está totalmente atualizado:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-06-pt.png" %}

### Pela interface de linha de comando

Na linha de comando, você pode utilizar o gerenciador de pacotes [**zypper**][zypper].

Mas não é qualquer usuário que tem permissão para invocar o **zypper**. Somente o [superusuário][superuser] ou administrador (*root*) pode fazê-lo.

Para alternar do seu usuário para o *root*, execute o comando:

```
$ su
```

Se você não está acostumado com essa notação, isso significa digitar `su` e teclar **Enter**. O cifrão (`$`) não deve ser digitado, ele apenas indica que o comando pode ser executado por qualquer usuário do computador. A seguir, você verá exemplos de comandos que só podem ser executados com permissões elevadas (do usuário *root*). Estes são precedidos por cerquilha (`#`).

O comando **su** pedirá a senha do usuário *root*, que você deve fornecer para continuar. Digite a senha e tecle **Enter**.

Estava esperando que apareceriam asteriscos (`*`) enquanto você digitava a senha? Não se preocupe, na interface textual do Linux é assim mesmo: a senha não aparece enquanto é digitada, de forma alguma, nem mesmo camuflada com asteriscos.

Agora sim, como usuário *root*, invoque o **zypper** com o comando:

```
# zypper ref
```

(esse *ref* vem do inglês *refresh*, que significa atualizar — olha só, encontramos uma terceira tradução no inglês para o nosso "atualizar" em português!)

Esse comando fará o **zypper** obter da Internet a lista de pacotes disponíveis:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-07-pt.jpg" %}

Note que o **zypper** indica o progresso. Quando estiver concluído, execute o comando:

```
# zypper up
```

(esse *up* vem do inglês *update*)

Esse comando fará com que o **zypper** baixe e instale atualizações disponíveis, se houver:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-08-pt.png" %}

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-09-pt.png" %}

O **zypper** indica o que precisa fazer para deixar o sistema atualizado e pergunta se você deseja continuar. A opção padrão é continuar (**s**). Se é isso o que deseja, você pode apenas teclar **Enter** e a atualização começará.

O **zypper** mostra o andamento do processo:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-10-pt.jpg" %}

Normalmente, quando a atualização acaba, não é necessário fazer mais nada, nem reiniciar o computador. Mas note que ao final dessa atualização o **zypper** cogitou reiniciar programas, porque arquivos que estavam sendo usados foram apagados:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-11-pt.jpg" %}

Nesse caso, mesmo que o **zypper** não tenha dito para reiniciar o computador, como ele falou em "reiniciar", recomendo que você reinicie o computador. Para isso, use o comando:

```
# reboot
```

(reiniciar, em inglês)

Quando voltar, seu sistema estará novo e limpo, sem risco de mau funcionamento.

Para se certificar de que instalou realmente todas as atualizações disponíveis até o momento, repita o comando `zypper up` até que ele diga que não há o que fazer:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-12-pt.jpg" %}

Quando ele diz isso, significa que não há mais atualizações disponíveis: todas as que havia já foram instaladas.

## 2) *Backup* dos repositórios atuais

Essa etapa, na verdade, é opcional.

Talvez você queira fazer *backup* da sua lista atual de repositórios para devolvê-la depois da atualização. O openSUSE guarda as configurações de repositórios na pasta `/etc/zypp/repos.d`, sendo um arquivo de texto para cada repositório.

Vamos copiar a pasta `repos.d`, em `/etc/zypp`, para outra no mesmo lugar, chamada `repos.d.antigos`. Para isso, utilizaremos a interface de linha de comando.

Se não já o fez, alterne do seu usuário para o usuário *root* executando o comando:

```
$ su
```

Forneça a senha do usuário *root* para continuar.

Se você já atualizou da versão 42.1 para a versão 42.2 usando [o nosso tutorial][how-to-upgrade-to-42.2], talvez ainda tenha o *backup* antigo guardado. Se esse é o seu caso, execute o comando a seguir para excluir a pasta `repos.d.antigos`:

```
# rm -rf /etc/zypp/repos.d.antigos
```

Então, ordene a cópia:

```
# cp -Rv /etc/zypp/repos.d /etc/zypp/repos.d.antigos
```

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-13-pt.png" %}

Se você ainda não fez *backup* dos seus arquivos pessoais e/ou do seu sistema, considere fazê-lo agora.

## 3) Faxina dos repositórios

Como expliquei antes, durante a atualização utilizaremos apenas os [repositórios oficiais][official-repos]. Mais especificamente, apenas dois deles:

- **openSUSE-Leap-42.3-OSS**: o repositório principal da distribuição, contém apenas [*softwares* de código aberto][oss] (do inglês *open source sofware*, OSS).

URL: [http://download.opensuse.org/distribution/leap/42.3/repo/oss/][repo-oss]

- **openSUSE-Leap-42.3-Update**: contém atualizações (*updates*) oficiais para os pacotes do repositório OSS.

URL: [http://download.opensuse.org/update/leap/42.3/oss/][repo-update]

Vamos fazer uma faxina nos repositórios, excluindo quaisquer outros repositórios configurados (vamos excluir inclusive quaisquer [repositórios de terceiros][third-party-repos]).

Acesse o Centro de Controle do YaST. Para isso, acesse o **panorama de Atividades**, digite `yast` e clique no ícone do YaST:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-14-pt.jpg" %}

Será solicitada a você a senha do usuário *root*.

Na categoria **Software**, clique em **Repositórios de software**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-15-pt.jpg" %}

Você será apresentado à lista de repositórios do seu sistema:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-16-pt.jpg" %}

Para cada repositório que não seja o **openSUSE-Leap-42.2-OSS** ou o **openSUSE-Leap-42.2-Update** , selecione o repositório na lista e clique em **Remover** (não é erro de digitação, estamos falando dos repositórios que já existem, que são os da versão 42.2, vamos mudar para os novos da versão 42.3 já já).

Aparecerá uma mensagem de confirmação. Clique em **Sim**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-17-pt.jpg" %}

Faça isso com todos os repositórios até que só sobrem os repositórios **openSUSE-Leap-42.2-OSS** e **openSUSE-Leap-42.2-Update**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-18-pt.jpg" %}

Esses repositórios podem estar com nomes diferentes no seu computador. Se esse for o caso, você pode se orientar pela [URL][url] em vez do nome. Se não encontrá-los, não tem problema: apague todos os repositórios e já adicione os novos a seguir.

## 4) Repositórios da nova versão

Vamos agora mudar para os repositórios da nova versão.

Selecione o repositório **openSUSE-Leap-42.2-OSS** e clique em **Editar**.

Substitua `42.2`por `42.3` onde houver e clique em **OK**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-19-pt.jpg" %}

Você será apresentado à [licença de uso do openSUSE Leap 42.3][opensuse-license]. Você pode lê-la para conhecer seus direitos ao usar o openSUSE. Quando terminar, clique em **Avançar**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-20-pt.png" %}

Faça o mesmo procedimento para o repositório **openSUSE-Leap-42.2-Update**.

Ao final, sua lista de repositórios deve estar assim:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-21-pt.jpg" %}

Clique em **OK** para gravar as alterações. Pode fechar o YaST.

## 5) *Download* dos pacotes

Já podemos começar a baixar os pacotes da nova versão do openSUSE.

De volta à interface de linha de comando, obtenha da Internet a lista de pacotes dos novos repositórios:

```
# zypper ref
```

Depois, execute o comando:

```
# zypper dup --download-only
```

(*distribution upgrade*, atualização da distribuição, *download only*, apenas baixar)

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-22-pt.jpg" %}

Ele passa um tempo "pensando" e logo depois mostra o que precisa fazer para atualizar o openSUSE para a próxima versão e pergunta se você deseja continuar:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-23-pt.jpg" %}

Note que essa lista de ações é semelhante à produzida pelo comando `zypper up`, apresentado na primeira etapa. No entanto, como agora estamos fazendo uma atualização de distribuição (*upgrade*), e não uma atualização de pacotes (*update*), a lista do que precisa ser feito é bem maior.

Confira essa lista com cuidado. Você pode ir para cima ou para baixo utilizando a barra de rolagem à direita da tela ou a roda (*scroll*) do *mouse*, se utiliza o Terminal, ou as combinações de teclas **Shift + Page Up** ou **Shift + Page Down**, se está em uma interface puramente textual (elas também funcionam no Terminal).

A opção padrão é continuar (**s**). Se você concorda, pode apenas teclar **Enter** e o *download* dos novos pacotes começará. Enquanto isso, você pode utilizar seu computador normalmente. A atualização propriamente dita ainda não começou.

Observe que o **zypper** apenas baixa os pacotes, ele não inicia a atualização:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-24-pt.jpg" %}

Isso porque ordenamos a ele por ora apenas baixar os pacotes.

Termine o que está fazendo e salve os arquivos abertos para iniciarmos a atualização da distribuição. Note que ela pode levar alguns (vários) minutos e você só poderá voltar a usar o computador quando ela for concluída.

## 6) Atualização da distribuição (*upgrade*)

Agora que já baixamos os pacotes necessários para atualizar nosso openSUSE Leap da versão 42.2 para a 42.3, vamos sair da interface gráfica e utilizar a linha de comando para realizar a instalação. Aqui, você não poderá utilizar o Terminal.

Isso é necessário porque inclusive a própria interface gráfica será atualizada. Se estivermos utilizando a interface gráfica durante a atualização, pode ser que o sistema trave no meio da processo e as consequências disso são imprevisíveis.

Considere abrir essa página em outro computador, em um *smartphone* ou *tablet*, imprimi-la ou anotar o que vai fazer.

Se o openSUSE que você vai atualizar está em um *notebook*, certifique-se de que ele esteja com a bateria completamente carregada e conectado à fonte de alimentação. Não desconecte a bateria ou a fonte durante a atualização. Vamos prevenir qualquer possibilidade de problema.

Encerre sua sessão (*logout*). Para isso, clique no **menu do sistema**, no canto superior direito da tela, clique no seu nome de usuário e escolha a opção **Encerrar sessão**:

{% include image.html src="/files/2017/08/logout-gnome-pt.jpg" %}

Você será apresentado à tela de *login*, onde você poderia informar seu nome de usuário e senha para iniciar uma nova sessão na interface gráfica:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-25-pt.jpg" %}

Mas não é ela que queremos. Aperte a combinação de teclas **Ctrl + Alt + F1** para alternar para uma interface puramente textual:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-26.png" %}

Caso isso seja novidade para você, saiba que o Linux disponibiliza seis [consoles][terminal] (terminais) além da interface gráfica. Você pode usar as teclas de **F1** a **F6** na mesma combinação (**Ctrl + Alt + F1**, **Ctrl + Alt + F2** e assim por diante) para alternar entre os consoles, assim como pressionar **Ctrl + Alt + F7** para retornar à interface gráfica.

Vamos permanecer no primeiro console.

Entre com o usuário *root*. Para isso, digite `root` e tecle **Enter**. Depois, digite a senha do usuário *root* e tecle **Enter**.

Vamos alternar do nível de execução ([*runlevel*][runlevel]) 5, nível padrão, no qual o sistema nos provê interface gráfica, para o nível de execução 3, no qual temos apenas a interface de linha de comando e conexão de rede.

Para [alterar o nível de execução][switch-runlevel] para 3, execute o comando:

```
# init 3
```

Finalmente, vamos realizar a atualização de distribuição propriamente dita. Para isso, execute o comando:

```
# zypper --no-refresh dup
```

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-27.png" %}

O argumento `--no-refresh` faz com que o **zypper** não atualize a lista de pacotes dos repositórios. Com isso, garantimos que ele não tente baixar mais algum pacote além dos que nós já baixamos. Isso pode ser útil especialmente em *notebooks*, que podem perder a conexão com a rede Wi-Fi ao sair da interface gráfica.

Como antes, o **zypper** vai processar a atualização e mostrar o que vai fazer:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-28.png" %}

Note que todos os pacotes que ele precisa já foram baixados: ao final ele mostra "*Overall download size: 0 B. Already cached: 1.21 GiB.*" (Tamanho geral do *download*: 0 B. Já em cache: 1.21 GiB).

Apenas pressione **Enter** para que a atualização comece.

Ele pula o *download* dos pacotes e já vai direto para a instalação:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-29.png" %}

A atualização da distribuição pode demorar alguns (vários) minutos.

Quando ela terminar, assim como aconteceu na primeira etapa, o **zypper** vai sugerir reiniciar. É o que vamos fazer executando:

```
# reboot
```

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-30.png" %}

## Pronto

Se você conseguiu fazer tudo até aqui, agora seu computador já está com o openSUSE Leap 42.3.

Observe que o menu do [GRUB][grub], aquele que permite a você escolher o sistema operacional quando o computador liga (útil especialmente se você possui Windows e Linux instalados na mesma máquina), já está diferente:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-31-pt.jpg" %}

E *voilà*! O openSUSE Leap 42.3 está instalado e pronto para uso!

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-32-pt.jpg" %}

Verifique se está tudo no lugar.

Agora você pode devolver os repositórios que excluiu, lembrando de fazer os devidos ajustes em relação à versão do openSUSE, mudando de `42.2` para `42.3` onde for necessário. Pela interface de linha de comando é fácil:

```
# sed -i 's,42\.2,42.3,g' /etc/zypp/repos.d.antigos/*
# mv /etc/zypp/repos.d.antigos/* /etc/zypp/repos.d/
```

Feito isso, você pode excluir o *backup* da sua antiga lista de repositórios:

```
# rm -rf /etc/zypp/repos.d.antigos/
```

Você também pode tentar instalar qualquer programa que por ventura tenha sido removido durante a atualização.

Se lembre de regularmente verificar se há atualizações (*updates*) para sua nova distribuição.

Se você encontrou alguma dificuldade durante a atualização ou possui alguma dúvida, não deixe de comentar!

Até a próxima!

[opensuse-leap]:            https://en.opensuse.org/Portal:Leap
[opensuse-leap-42.3]:       https://news.opensuse.org/2017/07/26/refresh-of-linux-distribution-continues-leveraging-community-enterprise-benefits/
[how-to-upgrade-to-42.2]:   {% post_url 2016-10-31-como-atualizar-do-opensuse-leap-421-para-o-422 %}
[system-upgrade]:           https://en.opensuse.org/SDB:System_upgrade
[release-notes]:            https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/42.3/RELEASE-NOTES.pt_BR.html
[debian]:                   https://www.debian.org/
[third-party-repos]:        https://en.opensuse.org/Additional_package_repositories
[official-repos]:           https://en.opensuse.org/Package_repositories#Official_Repositories
[gnome-terminal]:           https://help.gnome.org/users/gnome-terminal/stable/index.html.pt_BR
[windows]:                  https://www.microsoft.com/pt-br/windows/
[zypper]:                   https://pt.opensuse.org/Portal:Zypper
[superuser]:                https://pt.wikipedia.org/wiki/Superusu%C3%A1rio
[oss]:                      https://pt.wikipedia.org/wiki/Software_de_código_aberto
[repo-oss]:                 http://download.opensuse.org/distribution/leap/42.3/repo/oss/
[repo-update]:              http://download.opensuse.org/update/leap/42.3/oss/
[url]:                      https://pt.wikipedia.org/wiki/URL
[opensuse-license]:         https://en.opensuse.org/openSUSE:License
[terminal]:                 http://www.hardware.com.br/livros/linux/usando-terminal.html
[runlevel]:                 http://www.hardware.com.br/termos/runlevel
[switch-runlevel]:          https://en.opensuse.org/SDB:Switch_runlevel
[grub]:                     https://www.gnu.org/software/grub/
