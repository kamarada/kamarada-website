---
date: '2019-05-26 13:00:00 GMT-3'
layout: post
published: true
title: 'Como atualizar do openSUSE Leap 15.0 para o 15.1'
image: /files/2019/05/howto-upgrade-to-15.1-00-pt.png
nickname: 'howto-upgrade-to-15.1'
excerpt: 'A versão atual da distribuição openSUSE Leap, a 15.1, foi lançada quarta-feira, 22 de maio. Usuários da versão anterior, a 15.0, já podem atualizar (fazer o upgrade) para a nova versão. Se você já utiliza o openSUSE há algum tempo, sabe que atualizar de uma versão para outra é fácil e tranquilo. Se você conheceu o openSUSE na versão 15.0, vai perceber isso agora. Neste post você verá como atualizar seu openSUSE Leap da versão 15.0 para a 15.1.'
---

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-00-pt.png" caption="openSUSE Leap 15.1 já está disponível" %}

A versão atual da distribuição [openSUSE Leap][opensuse-leap], a 15.1, [foi lançada quarta-feira, 22 de maio][opensuse-leap-15.1]. Usuários da versão anterior, a 15.0, já podem atualizar (fazer o *upgrade*) para a nova versão.

Se você já utiliza o openSUSE há algum tempo, sabe que atualizar de uma versão para outra é fácil e tranquilo. Se você conheceu o openSUSE na versão 15.0, vai perceber isso agora.

O passo a passo para atualização que apresento aqui é o que utilizei no meu computador e que aprendi lendo a [*wiki* do openSUSE][system-upgrade]. Ele é praticamente o mesmo desde que comecei a utilizar o openSUSE. Você mesmo pode verificar isso comparando os *posts* anteriores:

- [Como atualizar do openSUSE Leap 42.1 para o 42.2][howto-upgrade-to-42.2]
- [Como atualizar do openSUSE Leap 42.2 para o 42.3][howto-upgrade-to-42.3]
- Eu não escrevi sobre a atualização do openSUSE Leap 42.3 para o 15.0

Neste *post* você verá como atualizar seu openSUSE Leap da versão 15.0 para a 15.1.

## Algumas observações

O *upgrade* no openSUSE é um procedimento seguro, que deve funcionar para a maioria dos casos, mas que requer alguns cuidados.

**Você deve estar utilizando a versão imediatamente anterior do openSUSE.** Isso quer dizer que se você pretende atualizar para a versão 15.1, deve estar usando agora a versão 15.0. Saltos de versões não são suportados. Podem funcionar, mas não há garantia. Portanto, se você utiliza a versão 42.3, por exemplo, é melhor que primeiro atualize para a versão 15.0, para então atualizar para a versão 15.1.

**Sua instalação do openSUSE deve estar atualizada** com as versões mais recentes dos pacotes lançadas até o momento. Observe que há dois tipos de atualização: neste *post*, você vai ver como atualizar a distribuição (*upgrade*), mas antes você deve atualizar os pacotes (*update*). Para mais informações sobre os dois tipos de atualizações e como atualizar os pacotes, consulte o *post*:

- [Como obter atualizações para o Linux openSUSE][howto-update]

**Você deve se informar sobre a versão do openSUSE que vai instalar.** Consulte as [notas de lançamento][release-notes], que descrevem o que muda na nova versão e listam alguns *bugs* conhecidos, como preveni-los e/ou solucioná-los.

**Você deve fazer uma cópia de segurança (*backup*) de arquivos importantes.** apesar de a atualização do openSUSE ser segura (fazendo lembrar, para quem conhece, a atualização do [Debian][debian]), não quer dizer que seja perfeita. Ganhar na loteria é difícil, mas uma hora alguém ganha. Algo dar errado na atualização é difícil, especialmente se você toma todos os cuidados, mas pode acontecer. Eu, particularmente, já atualizei algumas vezes sem problema. Nunca é demais fazer uma cópia dos seus arquivos pessoais por precaução, especialmente se a pasta `/home` não está em uma partição reservada. Se o computador não pode ficar parado por muito tempo (um servidor, por exemplo), considere fazer uma cópia de todo o sistema, a fim de restaurá-la imediatamente caso algo não funcione como esperado.

**Você não deve utilizar repositórios não oficiais (de terceiros) durante a atualização.** Antes de começar a atualização (*upgrade*), removeremos os [repositórios de terceiros][third-party-repos]. É possível que isso ocasione a remoção também de programas de terceiros. Você pode devolvê-los depois. Isso não quer dizer que não seja possível atualizar com esses repositórios presentes, mas usar apenas os [repositórios oficiais][official-repos] é mais garantido. A base do sistema será atualizada para uma nova base estável, sólida, confiável. Depois, sobre essa base, você poderá instalar o que quiser. Faça diferente dessa recomendação apenas se souber o que está fazendo.

Recomendo também que você leia toda essa página antes de começar de fato a agir. Para organizá-la melhor, vou dividi-la em 6 etapas. Conhecendo todo o processo, você terá condição de agendá-lo melhor. Você pode até fazer outras coisas usando o computador enquanto segue o passo a passo, mas depois que começar a atualização (*upgrade*), só poderá usar o computador quando ela for concluída.

## 1) Atualização dos pacotes (*update*)

Certifique-se de que sua instalação do openSUSE está atualizada. Para isso:

- se você obtém atualizações pela interface gráfica, abra o Atualizador de pacotes, ele deve informar que o sistema está totalmente atualizado:

{% include image.html src="/files/2019/05/howto-update-05-pt.jpg" %}

- se você utiliza a interface de linha de comando, execute o comando `zypper up` como *root*, ele deve informar que não há o que fazer:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-01-pt.png" %}

Para mais informações sobre atualização dos pacotes (*update*), consulte o *post*:

- [Como obter atualizações para o Linux openSUSE][howto-update]

## 2) *Backup* dos repositórios atuais

Essa etapa, na verdade, é opcional.

Talvez você queira fazer *backup* da sua lista atual de repositórios para devolvê-la depois da atualização. O openSUSE guarda as configurações de repositórios na pasta `/etc/zypp/repos.d`, sendo um arquivo de texto para cada repositório.

Vamos copiar a pasta `repos.d`, em `/etc/zypp`, para outra no mesmo lugar, chamada `repos.d.antigos`. Para isso, utilizaremos a interface de linha de comando.

Se não já o fez, alterne do seu usuário para o usuário *root* executando o comando:

```
$ su
```

Forneça a senha do usuário *root* para continuar.

Se você já fez alguma atualização de versão seguindo algum de nossos tutoriais, talvez ainda tenha o *backup* antigo guardado. Se esse é o seu caso, execute o comando a seguir para excluir a pasta `repos.d.antigos`:

```
# rm -rf /etc/zypp/repos.d.antigos
```

Então, ordene a cópia:

```
# cp -Rv /etc/zypp/repos.d /etc/zypp/repos.d.antigos
```

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-02-pt.jpg" %}

Se você ainda não fez *backup* dos seus arquivos pessoais e/ou do seu sistema, considere fazê-lo agora.

## 3) Faxina dos repositórios

Como expliquei antes, durante a atualização utilizaremos apenas os repositórios oficiais. Mais especificamente, apenas dois deles:

- **openSUSE-Leap-15.1-OSS**: o repositório principal da distribuição, contém apenas [*softwares* de código aberto][oss] (do inglês *open source sofware*, OSS).

URL: [http://download.opensuse.org/distribution/leap/15.1/repo/oss/](http://download.opensuse.org/distribution/leap/15.1/repo/oss/)

- **openSUSE-Leap-15.1-Update**: contém atualizações (*updates*) oficiais para os pacotes do repositório OSS.

URL: [http://download.opensuse.org/update/leap/15.1/oss/](http://download.opensuse.org/update/leap/15.1/oss/)

Vamos fazer uma faxina nos repositórios, excluindo quaisquer outros repositórios configurados (vamos excluir inclusive quaisquer repositórios de terceiros).

Acesse o Centro de Controle do YaST. Para isso, acesse o **panorama de Atividades**, digite `yast` e clique no ícone do YaST:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-03-pt.jpg" %}

Será solicitada a você a senha do usuário *root*. Digite-a e clique em **Continuar**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-04-pt.jpg" %}

Na categoria **Software**, clique em **Repositórios de software**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-05-pt.png" %}

Você será apresentado à lista de repositórios do seu sistema:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-06-pt.jpg" %}

Para cada repositório que não seja o **openSUSE-Leap-15.0-OSS** ou o **openSUSE-Leap-15.0-Update** , selecione o repositório na lista e clique em **Remover** (não é erro de digitação, estamos falando dos repositórios que você usa, que ainda são os da versão 15.0).

Aparecerá uma mensagem de confirmação. Clique em **Sim**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-07-pt.jpg" %}

Faça isso com todos os repositórios até que só sobrem os repositórios **openSUSE-Leap-15.0-OSS** e **openSUSE-Leap-15.0-Update**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-08-pt.jpg" %}

Esses repositórios podem estar com nomes diferentes no seu computador. Se esse for o caso, você pode se orientar pela [URL][url] em vez do nome. Se não encontrá-los, não tem problema: apague todos os repositórios e já adicione os novos a seguir.

## 4) Repositórios da nova versão

Vamos agora mudar para os repositórios da nova versão.

Selecione o repositório **openSUSE-Leap-15.0-OSS** e clique em **Editar**.

Substitua `15.0` por `15.1` onde houver e clique em **OK**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-09-pt.jpg" %}

Faça o mesmo procedimento para o repositório **openSUSE-Leap-15.0-Update**.

Ao final, sua lista de repositórios deve estar assim:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-10-pt.jpg" %}

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

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-11-pt.jpg" %}

Ele passa um tempo "pensando" e logo depois mostra o que precisa fazer para atualizar o openSUSE para a próxima versão e pergunta se você deseja continuar:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-12-pt.jpg" %}

Note que essa lista de ações é semelhante à produzida pelo comando `zypper up`, apresentado no [*post* sobre atualização de pacotes][howto-update]. No entanto, como agora estamos fazendo uma atualização de distribuição, a lista do que precisa ser feito é bem maior.

Confira essa lista com cuidado. Você pode ir para cima ou para baixo utilizando a barra de rolagem à direita da tela ou a roda (*scroll*) do *mouse*, se utiliza o Terminal, ou as combinações de teclas **Shift + Page Up** ou **Shift + Page Down**, se está em uma interface puramente textual (elas também funcionam no Terminal).

A opção padrão é continuar (**s**). Se você concorda, pode apenas teclar **Enter** e o *download* dos novos pacotes começará. Enquanto isso, você pode utilizar seu computador normalmente. A atualização propriamente dita ainda não começou.

Observe que o **zypper** apenas baixa os pacotes, ele não inicia a atualização:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-13-pt.jpg" %}

Isso porque ordenamos a ele por ora apenas baixar os pacotes.

Termine o que está fazendo e salve os arquivos abertos para iniciarmos a atualização da distribuição. Note que ela pode levar alguns (vários) minutos e você só poderá voltar a usar o computador quando ela for concluída.

## 6) Atualização da distribuição (*upgrade*)

Agora que já baixamos os pacotes necessários para atualizar nosso openSUSE Leap da versão 15.0 para a 15.1, vamos sair da interface gráfica e utilizar a linha de comando para realizar a instalação. Aqui, você não poderá utilizar o Terminal.

Isso é necessário porque inclusive a própria interface gráfica será atualizada. Se estivermos utilizando a interface gráfica durante a atualização, pode ser que o sistema trave no meio da processo e as consequências disso são imprevisíveis.

Considere abrir essa página em outro computador, em um *smartphone* ou *tablet*, imprimi-la ou anotar o que vai fazer.

Se o openSUSE que você vai atualizar está em um *notebook*, certifique-se de que ele esteja com a bateria completamente carregada e conectado à fonte de alimentação. Não desconecte a bateria ou a fonte durante a atualização. Vamos prevenir qualquer possibilidade de problema.

Encerre sua sessão (*logout*). Para isso, clique no **menu do sistema**, no canto superior direito da tela, clique no seu nome de usuário e escolha a opção **Encerrar sessão**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-14-pt.jpg" %}

Você será apresentado à tela de *login*, onde você poderia informar seu nome de usuário e senha caso quisesse iniciar uma nova sessão na interface gráfica:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-15-pt.jpg" %}

Mas não é isso que queremos. Aperte a combinação de teclas **Ctrl + Alt + F1** para alternar para uma interface puramente textual:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-16.png" %}

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

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-17.png" %}

O argumento `--no-refresh` faz com que o **zypper** não atualize a lista de pacotes dos repositórios. Com isso, garantimos que ele não tente baixar mais algum pacote além dos que nós já baixamos. Isso pode ser útil especialmente em *notebooks*, que podem perder a conexão com a rede Wi-Fi ao sair da interface gráfica.

Como antes, o **zypper** vai processar a atualização e mostrar o que vai fazer:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-18.png" %}

Note que todos os pacotes que ele precisa já foram baixados: ao final ele mostra "*Overall download size: 0 B. Already cached: 2.12 GiB.*" (Tamanho geral do *download*: 0 B. Já em cache: 2,12 GiB).

Apenas pressione **Enter** para que a atualização comece.

Ele pula o *download* dos pacotes e já vai direto para a instalação:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-19.png" %}

A atualização da distribuição pode demorar alguns (vários) minutos.

Quando ela terminar, o **zypper** vai sugerir reiniciar. É o que vamos fazer executando:

```
# reboot
```

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-20.png" %}

## Pronto

Se você conseguiu fazer tudo até aqui, seu computador já está com o openSUSE Leap 15.1.

Observe que o menu do [GRUB][grub], aquele que permite a você escolher o sistema operacional quando o computador liga (útil especialmente se você possui Windows e Linux instalados na mesma máquina), já está diferente:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-21.png" %}

E *voilà*! O openSUSE Leap 15.1 está instalado e pronto para uso!

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-22-pt.jpg" %}

Verifique se está tudo no lugar.

Agora você pode devolver os repositórios que excluiu, lembrando de fazer os devidos ajustes em relação à versão do openSUSE, mudando de `15.0` para `15.1` onde for necessário. Pela interface de linha de comando é fácil:

```
# sed -i 's/15.0/15.1/g' /etc/zypp/repos.d.antigos/*
# mv /etc/zypp/repos.d.antigos/* /etc/zypp/repos.d/
```

Feito isso, você pode excluir o *backup* da sua antiga lista de repositórios:

```
# rm -rf /etc/zypp/repos.d.antigos/
```

Você também pode tentar instalar qualquer programa que por ventura tenha sido removido durante a atualização.

Se lembre de regularmente [verificar se há atualizações (*updates*)][howto-update] para sua nova distribuição.

Se você encontrou alguma dificuldade durante a atualização ou possui alguma dúvida, não deixe de comentar!

Até a próxima!

[opensuse-leap]:            https://en.opensuse.org/Portal:Leap
[opensuse-leap-15.1]:       {% post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[system-upgrade]:           https://en.opensuse.org/SDB:System_upgrade
[howto-upgrade-to-42.2]:    {% post_url pt/2016-10-31-como-atualizar-do-opensuse-leap-421-para-o-422 %}
[howto-upgrade-to-42.3]:    {% post_url pt/2017-08-01-como-atualizar-do-opensuse-leap-422-para-o-423 %}
[howto-update]:             {% post_url pt/2019-05-14-como-obter-atualizacoes-para-o-linux-opensuse %}
[release-notes]:            https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/15.1/RELEASE-NOTES.pt_BR.html
[debian]:                   https://www.debian.org/
[third-party-repos]:        https://en.opensuse.org/Additional_package_repositories
[official-repos]:           https://en.opensuse.org/Package_repositories#Official_Repositories
[oss]:                      https://pt.wikipedia.org/wiki/Software_de_código_aberto
[url]:                      https://pt.wikipedia.org/wiki/URL
[terminal]:                 http://www.hardware.com.br/livros/linux/usando-terminal.html
[runlevel]:                 http://www.hardware.com.br/termos/runlevel
[switch-runlevel]:          https://en.opensuse.org/SDB:Switch_runlevel
[grub]:                     https://www.gnu.org/software/grub/
