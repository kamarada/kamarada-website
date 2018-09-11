---
date: '2016-10-31 23:59:59 GMT-2'
excerpt: 'Atualizar de uma versão para outra para quem usa openSUSE é uma tranquilidade. Há mais de 3 anos utilizo o Linux openSUSE e sempre consegui atualizar de uma versão para outra. Comecei a usá-lo na versão 12.2, pouco antes do lançamento da 12.3, em maio de 2013. Desde então já foram 5 atualizações: da versão 12.2 para a 12.3, para a 13.1, para a 13.2, para a Leap 42.1 (realmente, houve um salto, como falamos em outro post) e essa semana para a 42.2, mesmo antes de ter sido lançada.'
layout: post
published: true
title: 'Como atualizar do openSUSE Leap 42.1 para o 42.2'
image: /files/2016/10/upgrade.png
nickname: 'how-to-upgrade'
---

{% include image.html src="/files/2016/10/upgrade.png" caption="Imagem obtida no site [openSUSE News](https://news.opensuse.org/2016/09/22/new-leap-beta-adds-plasma-5-8-beta/)" %}

Atualizar de uma versão para outra para quem usa [openSUSE][opensuse] é uma tranquilidade. Há mais de 3 anos utilizo o Linux openSUSE e sempre consegui atualizar de uma versão para outra. Comecei a usá-lo na versão 12.2, pouco antes do [lançamento da 12.3, em maio de 2013][opensuse-123]. Desde então já foram 5 atualizações: da versão 12.2 para a 12.3, para a 13.1, para a 13.2, para a Leap 42.1 (realmente, houve um salto, como falamos em [outro *post*]({% post_url pt/2015-11-04-opensuse-leap-42-1-se-torna-a-primeira-distribuicao-linux-hibrida %})) e essa semana para a 42.2, mesmo antes de ter sido lançada.

A próxima versão do openSUSE Leap, a 42.2, já passou pelas fases alfa e beta e teve a primeira versão candidata a lançamento (*release candidate* ou RC) liberada dia [18 de outubro][opensuse-422-rc1]. Isso quer dizer que boa parte dos testes já terminaram. Essa versão já é bem próxima da final, cujo lançamento está previsto para [16 de novembro][opensuse-roadmap]. Daqui para lá, o openSUSE Leap deve receber apenas alguns retoques finais.

Confira nesse *post* de antemão como atualizar seu openSUSE Leap da versão 42.1 para a 42.2. Se você é o tipo de pessoa mais segura e menos entusiasmada, aqui você verá o que fazer no dia 16, quando o openSUSE Leap 42.2 for lançado oficialmente. Se você é do tipo mais ansioso, como eu, verá o que pode fazer para obter a nova versão já agora. Ao menos nos computadores que eu uso em casa e no trabalho, ambos agora com openSUSE Leap 42.2 RC 1, está tudo funcionando.

Para organizar melhor, vou dividir a atualização em 6 etapas.

## Algumas observações

O roteiro para atualização que apresento aqui é o que utilizei no meu computador e que aprendi lendo a [*wiki* do openSUSE][system-upgrade]. Ele é praticamente o mesmo desde que comecei a utilizar o openSUSE. É um procedimento seguro, que deve funcionar para a maioria dos casos, mas que requer que alguns cuidados sejam observados.

**Você deve estar utilizando a versão imediatamente anterior do openSUSE.** Isso quer dizer que se você pretende atualizar para a versão 42.2, deve estar usando agora a 42.1. Saltos de versões não são suportados e é possível que não funcionem. Portanto, se você utiliza a versão 13.2, por exemplo, deve primeiro atualizar para a versão 42.1, para então atualizar para a versão 42.2 (note que o salto aqui é apenas nos números, [a versão 42.1 é de fato a versão seguinte à 13.2]({% post_url pt/2015-11-04-opensuse-leap-42-1-se-torna-a-primeira-distribuicao-linux-hibrida %})).

**Sua instalação do openSUSE deve estar atualizada** com as versões mais recentes dos pacotes lançadas até o momento. Para saber como obtê-las, leia o [*post* anterior]({% post_url pt/2016-10-21-mantenha-seu-sistema-sempre-atualizado %}).

**Você deve se informar sobre a versão do openSUSE que vai instalar.** Consulte a [lista de *bugs* mais chatos][most-annoying-bugs] para ter ciência deles, como preveni-los e/ou solucioná-los, assim como as [notas de lançamento][release-notes], que descrevem o que muda na nova versão.

**Você deve fazer uma cópia de segurança (*backup*) de arquivos importantes.** Apesar de a atualização do openSUSE ser um procedimento seguro, fazendo lembrar, para quem conhece, a atualização do [Debian][debian], não quer dizer que seja perfeito. Ganhar na loteria é difícil, mas eventualmente alguém ganha. Algo dar errado nessa atualização é difícil, especialmente se você toma todos os cuidados, mas pode acontecer. Eu, particularmente, atualizei 5 vezes sem problemas. Nunca é demais fazer uma cópia dos seus arquivos pessoais por precaução, especialmente se a pasta `/home` não tem uma partição só para ela. Se o computador não pode ficar parado por muito tempo (um servidor, por exemplo), considere fazer uma cópia de todo o sistema, a fim de restaurá-la imediatamente caso algo não funcione como esperado.

**Você não deve utilizar repositórios não oficiais (de terceiros) durante a atualização.** Antes de começar a atualização, removeremos os repositórios de terceiros. É possível que isso ocasione a remoção também de programas de terceiros. Você pode devolvê-los depois. Isso não quer dizer que não seja possível atualizar com esses repositórios presentes, mas usar apenas os repositórios oficiais é mais garantido. A base do sistema será atualizada para uma nova base estável, sólida, confiável. Depois, sobre essa base, você poderá instalar o que quiser. Faça diferente dessa recomendação apenas se souber o que está fazendo.

Recomendo também que você leia toda essa página antes de começar de fato a atualização. Conhecendo todo o processo, você terá condição de agendá-lo melhor. Você pode até usar o computador enquanto baixa os novos pacotes, mas depois que começar a atualização, só poderá voltar a usá-lo quando ela for concluída.

Antes de começar, gostaria de fazer só mais uma observação, para quem deseja atualizar para o openSUSE Leap 42.2 antes do lançamento oficial. Se esse é o seu caso, observe que você deverá repetir as etapas "*download* dos pacotes" e "atualização da distribuição (*upgrade*)", as últimas duas etapas desse tutorial (5 e 6), para cada novo lançamento dessa versão. Então, você repetirá essas etapas nos dias [02 de novembro][opensuse-roadmap], data prevista para o lançamento da versão 42.2 RC 2, e [16 de novembro][opensuse-roadmap], data prevista para o lançamento da versão 42.2 final.

## 1) Atualização dos pacotes da distribuição (*update*)

Antes de começar, certifique-se de que a instalação do openSUSE que está no seu computador esteja atualizada.

Como vimos no [*post* anterior]({% post_url pt/2016-10-21-mantenha-seu-sistema-sempre-atualizado %}), o ícone da **Atualização de aplicativos** (*Software Updates*) deve informar que seu sistema está totalmente atualizado:

{% include image.html src="/files/2016/10/sw-updates-05-pt.jpg" %}

Ou, se você prefere utilizar a interface de linha de comando, o **zypper** deve informar que não há o que fazer, ou seja, todas as atualizações disponíveis para o sistema até o momento foram instaladas:

{% include image.html src="/files/2016/10/sw-updates-cmd-05-pt.jpg" %}

Consulte [aquele *post*]({% post_url pt/2016-10-21-mantenha-seu-sistema-sempre-atualizado %}) para saber como atualizar seu openSUSE.

É importante esclarecer algo: a atualização de que falei naquele *post* foi uma atualização dos pacotes, sem mudança de distribuição (*update*). Aqui, vamos ver como atualizar todo o sistema e passar para uma distribuição mais nova (*upgrade*).

Utilizarei sempre que possível a interface gráfica, mas a interface textual nos permite vantagens como apenas baixar as atualizações e depois apenas instalá-las. Se você não está acostumado à linha de comando, perceberá que não é difícil utilizá-la.

Note que, quase sempre, você pode utilizar a interface de linha de comando sem abandonar a interface gráfica por meio do aplicativo [**Konsole**][konsole]. Para iniciá-lo, clique no **Menu de aplicativos**, aponte para **Sistema** e em seguida clique em **Konsole**:

{% include image.html src="/files/2016/10/upgrade-01-pt.jpg" %}

Se você está habituado a utilizar [Windows][windows], talvez encontre alguma semelhança do Konsole com o **Prompt de Comando**.

## 2) *Backup* dos repositórios atuais

Essa etapa, na verdade, é opcional.

Talvez você queira fazer *backup* da sua lista atual de repositórios para devolvê-la depois da atualização. O openSUSE guarda as configurações de repositórios na pasta `/etc/zypp/repos.d`, sendo um arquivo de texto para cada repositório. Vamos fazer uma cópia dessa pasta. Para isso, utilizaremos a interface de linha de comando.

Adquira privilégios de superusuário (*root*) executando o comando `su` (para isso, na linha de comando, digite `su` e tecle **Enter**). Será solicitada a senha do superusuário, que você deve fornecer para continuar (digite a senha e tecle **Enter**, observe que a senha não é exibida, nem mesmo mascarada como ******, isso é normal).

Então, ordene a cópia propriamente dita, executando o comando `cp -Rv /etc/zypp/repos.d /etc/zypp/repos.d.antigos`:

{% include image.html src="/files/2016/10/upgrade-02-pt.jpg" %}

Esse comando copiará a pasta `repos.d`, em `/etc/zypp`, para outra no mesmo lugar, chamada `repos.d.antigos`.

Se você ainda não fez *backup* dos seus arquivos pessoais e/ou do seu sistema, considere fazê-lo agora.

## 3) Faxina dos repositórios

Como expliquei antes, durante a atualização utilizaremos apenas os [repositórios oficiais][official-repos]. Mais especificamente, apenas dois deles:

- **openSUSE-Leap-42.2-OSS**: o repositório principal da distribuição, contém apenas [*softwares* de código aberto][oss] (do inglês *open source sofware*, OSS).

URL: [http://download.opensuse.org/distribution/leap/42.2/repo/oss/][repo-oss]

- **openSUSE-Leap-42.2-Update**: contém atualizações (*updates*) oficiais para os pacotes do repositório OSS.

URL: [http://download.opensuse.org/update/leap/42.2/oss/][repo-update]

Vamos fazer uma faxina nos repositórios, excluindo quaisquer outros repositórios configurados (vamos excluir inclusive quaisquer [repositórios de terceiros][third-party-repos]).

Acesse o Centro de Controle do YaST. Para isso, clique no **Menu de aplicativos**, aponte para **Configurações** e em seguida clique em **YaST**:

{% include image.html src="/files/2016/10/linux-ntp-01.jpg" %}

Será solicitada a você a senha do superusuário (*root*).

Na categoria **Software**, clique em **Repositórios de software**:

{% include image.html src="/files/2016/10/upgrade-03-pt.png" %}

Você será apresentado à lista de repositórios do seu sistema:

{% include image.html src="/files/2016/10/upgrade-04-pt.jpg" %}

Para cada repositório que não seja o **openSUSE-Leap-42.1-OSS** ou o **openSUSE-Leap-42.1-Update** , selecione o repositório na lista e clique em **Apagar** (não é erro de digitação, estamos falando dos repositórios que já existem, que são os da versão 42.1, vamos mudar para os novos da versão 42.2 já já).

Aparecerá uma mensagem de confirmação. Clique em **Sim**:

{% include image.html src="/files/2016/10/upgrade-05-pt.jpg" %}

Faça isso com todos os repositórios até que só sobrem os repositórios **openSUSE-Leap-42.1-OSS** e **openSUSE-Leap-42.1-Update**:

{% include image.html src="/files/2016/10/upgrade-06-pt.jpg" %}

Esses repositórios podem estar com nomes diferentes no seu computador. Se esse for o caso, você pode se orientar pela [URL][url] em vez do nome. Se não encontrá-los, não tem problema: apague todos os repositórios e já adicione os novos.

## 4) Repositórios da nova versão

Vamos agora mudar para os repositórios da nova versão.

Selecione o repositório **openSUSE-Leap-42.1-OSS** e clique em **Editar**.

Substitua `42.1`por `42.2` onde houver e clique em **OK**:

{% include image.html src="/files/2016/10/upgrade-07-pt.jpg" %}

Você será apresentado à [licença de uso do openSUSE Leap 42.2][opensuse-license]. Você pode lê-la para conhecer seus direitos ao usar o openSUSE. Quando terminar, clique em **Avançar**:

{% include image.html src="/files/2016/10/upgrade-08-pt.jpg" %}

Faça o mesmo procedimento para o repositório **openSUSE-Leap-42.1-Update**.

Ao final, sua lista de repositórios deve estar assim:

{% include image.html src="/files/2016/10/upgrade-09-pt.jpg" %}

Clique em **OK** para gravar as alterações. Pode fechar o YaST.

## 5) *Download* dos pacotes

Já podemos começar a baixar os pacotes da nova versão do openSUSE.

De volta à interface de linha de comando, execute o comando `zypper ref` para obter a lista de pacotes dos novos repositórios.

Depois, execute o comando `zypper dup --download-only` (*distribution upgrade*, atualização da distribuição, *download only*, apenas baixar):

{% include image.html src="/files/2016/10/upgrade-10-pt.jpg" %}

Ele passa um tempo "pensando" e logo depois mostra o que precisa fazer para atualizar o openSUSE para a próxima versão e pergunta se você deseja continuar:

{% include image.html src="/files/2016/10/upgrade-11-pt.jpg" %}

Note que essa lista de ações é semelhante à produzida pelo comando `zypper up`, apresentado no [*post* anterior]({% post_url pt/2016-10-21-mantenha-seu-sistema-sempre-atualizado %}). No entanto, como agora estamos fazendo uma atualização de distribuição (*upgrade*), e não uma simples e cotidiana atualização de pacotes (*update*), a lista do que precisa ser feito é bem maior.

Confira essa lista com cuidado. Você pode ir para cima ou para baixo utilizando a barra de rolagem à direita da tela ou a roda (*scroll*) do *mouse*, se utiliza o Konsole, ou as combinações de teclas **Shift + Page Up** ou **Shift + Page Down**, se está em uma interface puramente textual (elas também funcionam no Konsole).

A opção padrão é continuar (**s**). Se você concorda, pode apenas teclar **Enter** e o *download* dos novos pacotes começará. Enquanto isso, você pode utilizar seu computador normalmente. A atualização propriamente dita ainda não começou.

Observe que o **zypper** apenas baixa os pacotes, ele não inicia a atualização:

{% include image.html src="/files/2016/10/upgrade-12-pt.jpg" %}

Isso porque solicitamos a ele por ora apenas baixar os pacotes.

Termine o que está fazendo e salve os arquivos abertos para iniciarmos a atualização da distribuição. Note que ela pode levar alguns (vários) minutos e você só poderá voltar a usar o computador quando ela for concluída.

## 6) Atualização da distribuição (*upgrade*)

Agora que já baixamos os pacotes necessários para atualizar nosso openSUSE Leap da versão 42.1 para a 42.2, vamos sair da interface gráfica e utilizar a linha de comando para realizar a instalação. Aqui, você não poderá utilizar o Konsole.

Isso é necessário porque inclusive a própria interface gráfica será atualizada. Se estivermos utilizando a interface gráfica durante a atualização, pode ser que o sistema trave no meio da processo e as consequências disso são imprevisíveis.

Considere abrir essa página em outro computador, em um *smartphone* ou *tablet*, imprimi-la ou anotar o que vai fazer.

Se o openSUSE que você vai atualizar está em um *notebook*, certifique-se de que ele esteja com a bateria completamente carregada e conectado à fonte de alimentação. Não desconecte a bateria ou a fonte durante a atualização. Vamos prevenir qualquer possibilidade de problema.

Encerre sua sessão (*logout*) abrindo o **Menu de aplicativos**, apontando para **Desligar / Sessão** e clicando em **Encerrar sessão**:

{% include image.html src="/files/2016/10/logout-kde-pt.jpg" %}

Você será apresentado à tela de *login*, onde você poderia informar seu usuário e senha para iniciar uma nova sessão na interface gráfica:

{% include image.html src="/files/2016/10/upgrade-13-pt.jpg" %}

Mas não é ela que queremos. Aperte a combinação de teclas **Ctrl + Alt + F1** para alternar para uma interface puramente textual:

{% include image.html src="/files/2016/10/upgrade-14.jpg" %}

Caso isso seja novidade para você, saiba que o Linux disponibiliza seis [consoles][terminal] além da interface gráfica. Você pode usar as teclas de **F1** a **F6** naquela mesma combinação (**Ctrl + Alt + F1**, **Ctrl + Alt + F2** e assim por diante) para alternar entre os consoles, assim como pressionar **Ctrl + Alt + F7** para retornar à interface gráfica.

Vamos permanecer no primeiro console.

Entre como superusuário (*root*). Para isso, digite `root` e tecle **Enter**. Depois, digite a senha do superusuário e tecle **Enter**.

Vamos alternar do nível de execução ([*runlevel*][runlevel]) 5, nível padrão, no qual o sistema nos provê interface gráfica, para o nível de execução 3, no qual temos apenas a interface de linha de comando e conexão de rede.

Para [alterar o nível de execução][switch-runlevel] para 3, execute o comando `init 3`.

Finalmente, vamos realizar a atualização de distribuição propriamente dita. Para isso, execute o comando `zypper --no-refresh dup`:

{% include image.html src="/files/2016/10/upgrade-15.jpg" %}

O argumento `--no-refresh` faz com que o **zypper** não atualize a lista de pacotes dos repositórios. Com isso, garantimos que ele não tente baixar mais algum pacote além dos que nós já baixamos. Isso pode ser útil especialmente em *notebooks*, que podem perder a conexão com a rede Wi-Fi ao sair da interface gráfica.

Como antes, o **zypper** vai processar a atualização e mostrar o que vai fazer:

{% include image.html src="/files/2016/10/upgrade-16.jpg" %}

Note que todos os pacotes que ele precisa já foram baixados: ao final ele mostra "*Overall download size: 0 B. Already cached: 1.62 GiB.*" (Tamanho geral do *download*: 0 B. Já em cache: 1.62 GiB).

Apenas pressione **Enter** para que a atualização comece.

Ele pula o *download* dos pacotes e já vai direto para a instalação:

{% include image.html src="/files/2016/10/upgrade-17.jpg" %}

A atualização da distribuição pode demorar alguns (vários) minutos.

Quando ela terminar, assim como aconteceu no [*post* anterior]({% post_url pt/2016-10-21-mantenha-seu-sistema-sempre-atualizado %}), o **zypper** vai sugerir para reiniciar. É o que vamos fazer executando `reboot`:

{% include image.html src="/files/2016/10/upgrade-18.jpg" %}

## Pronto

Se você conseguiu fazer tudo até aqui, agora seu computador já está com o openSUSE Leap 42.2.

Observe que o menu do [GRUB][grub], aquele que permite a você escolher o sistema operacional quando o computador liga (útil especialmente se você possui Windows e Linux instalados na mesma máquina), já está diferente:

{% include image.html src="/files/2016/10/upgrade-19.jpg" %}

E *voilà*! O openSUSE Leap 42.2 está instalado e pronto para uso!

{% include image.html src="/files/2016/10/upgrade-20-pt.jpg" %}

Verifique se está tudo no lugar. Agora você pode devolver os repositórios que excluiu, lembrando de fazer os devidos ajustes em relação à versão do openSUSE, mudando de `42.1` para `42.2` onde for necessário. Pode também tentar instalar qualquer programa que por ventura tenha sido removido durante a atualização.

Se lembre de regularmente [verificar se há atualizações]({% post_url pt/2016-10-21-mantenha-seu-sistema-sempre-atualizado %}) para sua nova distribuição.

Se você encontrou alguma dificuldade durante a atualização ou possui alguma dúvida, não deixe de comentar!

Até a próxima!

[opensuse]:             https://www.opensuse.org
[opensuse-123]:         https://news.opensuse.org/2013/03/13/opensuse-12-3-free-open-and-awesome/
[opensuse-422-rc1]:     https://news.opensuse.org/2016/10/18/release-candidate-available-for-opensuse-leap-42-2/
[opensuse-roadmap]:     https://en.opensuse.org/openSUSE:Roadmap
[system-upgrade]:       https://en.opensuse.org/SDB:System_upgrade
[debian]:               https://www.debian.org/
[most-annoying-bugs]:   https://en.opensuse.org/openSUSE:Most_annoying_bugs
[release-notes]:        https://en.opensuse.org/openSUSE:Release_Notes
[konsole]:              https://www.kde.org/applications/system/konsole/
[windows]:              https://www.microsoft.com/pt-br/windows/
[official-repos]:       https://en.opensuse.org/Package_repositories#Official_Repositories
[third-party-repos]:    https://en.opensuse.org/Additional_package_repositories
[oss]:                  https://pt.wikipedia.org/wiki/Software_de_código_aberto
[repo-oss]:             http://download.opensuse.org/distribution/leap/42.2/repo/oss/
[repo-update]:          http://download.opensuse.org/update/leap/42.2/oss/
[url]:                  https://pt.wikipedia.org/wiki/URL
[opensuse-license]:     https://en.opensuse.org/openSUSE:License
[terminal]:             http://www.hardware.com.br/livros/linux/usando-terminal.html
[runlevel]:             http://www.hardware.com.br/termos/runlevel
[switch-runlevel]:      https://en.opensuse.org/SDB:Switch_runlevel
[grub]:                 https://www.gnu.org/software/grub/
