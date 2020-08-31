---
date: '2020-08-31 11:30:00 GMT-3'
layout: post
published: true
title: 'Linux Kamarada e openSUSE Leap: como atualizar da versão 15.1 para a 15.2'
image: /files/2020/08/upgrade-to-15.2.jpg
nickname: 'upgrade-to-15.2'
---

{% include image.html src="/files/2020/08/upgrade-to-15.2.jpg" %}

Se você acompanha esse _site_ há um tempo, sabe que eu sempre faço um tutorial mostrando como atualizar a distribuição [openSUSE Leap][opensuse-leap] de uma versão para outra. Dessa vez, temos uma novidade: é o primeiro tutorial que mostra também como atualizar o Linux Kamarada, que, caso você ainda não conheça, é uma distribuição baseada no openSUSE Leap.

O Linux Kamarada [foi lançado em fevereiro][kamarada-15.1] e sua primeira versão foi numerada 15.1, alinhada com a versão 15.1 do openSUSE Leap, que então era a versão mais atual. Hoje, o openSUSE Leap está na [versão 15.2, lançada em julho][leap-15.2]. O Linux Kamarada 15.2 será lançado nos próximos dias. Por enquanto, temos a [versão candidata a lançamento (RC)][kamarada-15.2-rc], que já apresenta uma boa estabilidade. Nos meus testes, a atualização do Linux Kamarada 15.1 Final para o 15.2 RC ocorreu sem problemas.

Como o Linux Kamarada 15.2 ainda não foi finalizado, não recomendo a atualização para todos os usuários. Mas, se você se sente "corajoso" e quer ajudar no desenvolvimento, testando a atualização e reportando quaisquer problemas, por favor, sinta-se à vontade.

O processo de atualização (_upgrade_) de uma versão para outra no openSUSE Leap é um processo fácil e tranquilo. Eu sigo a "receita de bolo" que aprendi na [_wiki_ do openSUSE][system-upgrade]. É praticamente a mesma "receita" desde 2012, quando comecei a usar o openSUSE. Como o Linux Kamarada é baseado no openSUSE Leap, sua atualização segue a mesma "receita", a única diferença é a configuração de mais um repositório, que é o do Linux Kamarada.

Caso você tenha curiosidade de conferir as edições anteriores desse tutorial:

- [Como atualizar do openSUSE Leap 42.1 para o 42.2][upgrade-to-42.2]
- [Como atualizar do openSUSE Leap 42.2 para o 42.3][upgrade-to-42.3]
- Eu não escrevi sobre a atualização do openSUSE Leap 42.3 para o 15.0
- [Como atualizar do openSUSE Leap 15.0 para o 15.1][upgrade-to-15.1]

A seguir, você verá como atualizar o openSUSE Leap e o Linux Kamarada da versão 15.1 para a 15.2.

**Observação:** para não ficar repetitivo, o que eu falo sobre o openSUSE Leap se aplica às duas distribuições, o que eu falo sobre o Linux Kamarada é específico deste.

## Algumas recomendações

A atualização da distribuição (_upgrade_) no openSUSE Leap é um procedimento seguro, que deve funcionar para a maioria dos casos, mas que requer alguns cuidados. É sempre bom relembrar as recomendações a seguir.

**Você deve estar usando a versão imediatamente anterior do openSUSE Leap.** Isso quer dizer que se você pretende atualizar para a versão 15.2, deve estar usando agora a versão 15.1. Saltos de versões não são suportados. Podem funcionar, mas não há garantia. Portanto, se agora você está usando a versão 15.0, por exemplo, é melhor que primeiro atualize para a versão 15.1, para então atualizar para a versão 15.2.

**Sua instalação do openSUSE Leap deve estar atualizada** com as versões mais recentes dos pacotes lançadas até o momento. Observe que há dois tipos de atualização: neste *post*, você vai ver como atualizar a distribuição (*upgrade*), mas antes você deve atualizar os pacotes (*update*). Para mais informações sobre os dois tipos de atualizações e como atualizar os pacotes, consulte o *post*:

- [Como obter atualizações para o Linux openSUSE][howto-update]

**Você deve se informar sobre a versão do openSUSE Leap que vai instalar.** Consulte as [notas de lançamento][release-notes], que descrevem o que muda na nova versão e listam alguns *bugs* conhecidos, como preveni-los e/ou solucioná-los.

**Você deve fazer uma cópia de segurança (*backup*) de arquivos importantes.** apesar de a atualização do openSUSE ser segura (fazendo lembrar, para quem conhece, a atualização do [Debian][debian]), não quer dizer que seja perfeita. Ganhar na loteria é difícil, mas uma hora alguém ganha. Algo dar errado na atualização é difícil, especialmente se você toma todos os cuidados, mas pode acontecer. Eu, particularmente, já atualizei algumas vezes sem problema. Nunca é demais fazer uma cópia dos seus arquivos pessoais por precaução, especialmente se a pasta `/home` não está em uma partição reservada. Se o computador não pode ficar parado por muito tempo (um servidor, por exemplo), considere fazer uma cópia de todo o sistema, a fim de restaurá-la imediatamente caso algo não funcione como esperado.

**Você não deve usar repositórios não oficiais (de terceiros) durante a atualização.** Antes de começar a atualização (*upgrade*), removeremos os [repositórios de terceiros][third-party-repos]. É possível que isso ocasione a remoção também de programas de terceiros. Você pode devolvê-los depois. Isso não quer dizer que não seja possível atualizar com esses repositórios presentes, mas usar apenas os [repositórios oficiais][official-repos] é mais garantido. A base do sistema será atualizada para uma nova base estável, sólida, confiável. Depois, sobre essa base, você poderá instalar o que quiser. Faça diferente dessa recomendação apenas se souber o que está fazendo.

Recomendo também que você leia toda essa página antes de começar de fato a agir. Para organizá-la melhor, vou dividi-la em 6 etapas. Conhecendo todo o processo, você terá condição de agendá-lo melhor. Você pode até fazer outras coisas usando o computador enquanto segue o passo a passo, mas depois que começar a atualização (*upgrade*), só poderá usar o computador quando ela for concluída.

## 1) Atualização dos pacotes (*update*)

Certifique-se de que sua instalação do openSUSE Leap está atualizada. Para isso:

- se você obtém atualizações pela interface gráfica, abra o Atualizador de pacotes, ele deve informar que o sistema está totalmente atualizado:

{% include image.html src="/files/2020/08/upgrade-to-15.2-01-pt.jpg" %}

- se você usa a interface de linha de comando, execute o comando `zypper up` como usuário _root_ (administrador), ele deve informar que não há o que fazer:

{% include image.html src="/files/2020/08/upgrade-to-15.2-02-pt.jpg" %}

Para mais informações sobre atualização dos pacotes (*update*), consulte o *post*:

- [Como obter atualizações para o Linux openSUSE][howto-update]

## 2) *Backup* dos repositórios atuais

Essa etapa, na verdade, é opcional.

Talvez você queira fazer *backup* da sua lista atual de repositórios para devolvê-la depois da atualização. O openSUSE Leap guarda as configurações de repositórios na pasta `/etc/zypp/repos.d`, sendo um arquivo de texto para cada repositório.

Vamos copiar a pasta `repos.d`, em `/etc/zypp`, para outra no mesmo lugar, chamada `repos.d.antigos`. Para isso, usaremos a interface de linha de comando.

Se não já o fez, alterne do seu usuário para o usuário *root* executando o comando:

```
$ su
```

Forneça a senha do usuário *root* para continuar.

Se você já fez alguma atualização de versão seguindo alguma edição anterior desse mesmo tutorial, talvez ainda tenha o *backup* antigo guardado. Se esse é o seu caso, execute o comando a seguir para excluir a pasta `repos.d.antigos`:

```
# rm -rf /etc/zypp/repos.d.antigos
```

Então, ordene a cópia:

```
# cp -Rv /etc/zypp/repos.d /etc/zypp/repos.d.antigos
```

{% include image.html src="/files/2020/08/upgrade-to-15.2-03-pt.png" %}

Se você ainda não fez *backup* dos seus arquivos pessoais e/ou do seu sistema, considere fazê-lo agora.

## 3) Faxina dos repositórios

Como expliquei antes, durante a atualização usaremos apenas os repositórios oficiais. Mais especificamente, apenas dois deles, no caso do openSUSE Leap:

- **Main Repository** (repositório principal): contém apenas [*softwares* de código aberto][oss] (do inglês *open source sofware*, OSS).

URL (para o 15.1): [http://download.opensuse.org/distribution/leap/15.1/repo/oss/](http://download.opensuse.org/distribution/leap/15.1/repo/oss/)

- **Main Update Repository** (repositório de atualização principal): contém atualizações (*updates*) oficiais para os pacotes do repositório principal.

URL (para o 15.1): [http://download.opensuse.org/update/leap/15.1/oss/](http://download.opensuse.org/update/leap/15.1/oss/)

No caso do Linux Kamarada, além dos repositórios acima, usaremos também o repositório oficial do Linux Kamarada, que é gentilmente hospedado pela [OSDN] em espelhos (_mirrors_) em diversos países. Se você está no Brasil, use o espelho da [C3SL (UFPR)][c3sl].

URL (para o 15.1): [http://c3sl.dl.osdn.jp/storage/g/k/ka/kamarada/15.1/openSUSE_Leap_15.1/](http://c3sl.dl.osdn.jp/storage/g/k/ka/kamarada/15.1/openSUSE_Leap_15.1/)

Se você está em outro país, consulte a [lista de espelhos na _wiki_ do Linux Kamarada no GitHub][mirrors].

Vamos fazer uma faxina nos repositórios, excluindo quaisquer outros repositórios configurados (vamos excluir inclusive quaisquer repositórios de terceiros).

Abra o [Centro de Controle do YaST][yast]. Para isso, abra o menu **Atividades**, no canto superior esquerdo da tela, digite `yast` e clique no ícone correspondente:

{% include image.html src="/files/2020/08/upgrade-to-15.2-04-pt.jpg" %}

Será solicitada a você a senha do usuário *root*. Digite-a e clique em **Continuar**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-05-pt.jpg" %}

Dentro da categoria **Software**, a primeira, clique no item **Repositórios de software**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-06-pt.png" %}

Você será apresentado à lista de repositórios do seu sistema:

{% include image.html src="/files/2020/08/upgrade-to-15.2-07-pt.jpg" %}

Para cada repositório que não seja um dos listados acima, selecione o repositório na lista e clique em **Remover**.

Aparecerá uma mensagem de confirmação. Clique em **Sim**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-08-pt.jpg" %}

Faça isso com todos os repositórios até que só sobrem os repositórios listados acima:

{% include image.html src="/files/2020/08/upgrade-to-15.2-09-pt.jpg" %}

Esses repositórios podem estar com nomes diferentes no seu computador. Se esse for o caso, você pode se orientar pela [URL] em vez do nome. Se não encontrá-los, não tem problema: apague todos os repositórios e já adicione os novos a seguir.

## 4) Repositórios da nova versão

Vamos agora mudar para os repositórios da nova versão.

Nessa versão do tutorial temos mais uma novidade: a variável `$releasever`, que é substituída pela versão da distribuição atualmente em uso. Ela já está disponível no openSUSE [há um tempo][opensuse-list], infelizmente eu só a descobri recentemente, senão já teria incluído no Linux Kamarada 15.1... mas tudo bem, como eu escrevi no [lançamento da primeira versão beta há quase 1 ano][kamarada-15.1-beta], o Linux Kamarada é um projeto de constante aprendizado e aperfeiçoamento. Agora que conheço essa facilidade, ela já virá por padrão na versão 15.2.

Selecione o repositório **Main Repository** e clique em **Editar**.

Caso a **URL do repositório** já contenha a variável `$releasever`, não precisa alterar nada, só clique em **OK**. Caso a versão da distribuição (no momento, `15.1`) apareça em algum trecho da URL, substitua essa versão por `$releasever` e clique em **OK**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-10-pt.jpg" %}

Faça o mesmo procedimento para os outros repositórios.

No caso do **Linux Kamarada**, faça 2 substituições de `15.1` por `$releasever` na URL:

{% include image.html src="/files/2020/08/upgrade-to-15.2-11-pt.jpg" %}

Ao final, sua lista de repositórios deve estar assim:

{% include image.html src="/files/2020/08/upgrade-to-15.2-12-pt.jpg" %}

Clique em **OK** para gravar as alterações. Pode fechar o YaST.

## 5) *Download* dos pacotes

Já podemos começar a baixar os pacotes da nova versão do openSUSE Leap.

De volta à interface de linha de comando, baixe a lista de pacotes dos novos repositórios (note que vamos usar a opção `--releasever=15.2` para indicar o uso da versão nova):

```
# zypper --releasever=15.2 ref
```

Depois, execute o comando:

```
# zypper --releasever=15.2 dup --download-only
```

(*distribution upgrade*, atualização da distribuição, *download only*, apenas baixar)

{% include image.html src="/files/2020/08/upgrade-to-15.2-13-pt.jpg" %}

O gerenciador de pacotes **[zypper]** passa um tempo "pensando" e logo depois mostra o que precisa fazer para atualizar o openSUSE Leap para a próxima versão.

É possível que ele precise [mudar o fornecedor][vendor-change] de alguns pacotes, como na imagem abaixo:

{% include image.html src="/files/2020/08/upgrade-to-15.2-14-pt.jpg" %}

Se isso acontecer, leia atentamente as opções apresentadas e escolha aquela que indica a **alteração do fornecedor**. No exemplo acima, seria a **Solução 1**. Portanto, você digitaria `1` e teclaria **Enter**.

O **zypper** lista as alterações que fará no sistema (quais pacotes serão atualizados, quais serão removidos, quais mudarão de fornecedor, etc) e pergunta se você deseja continuar:

{% include image.html src="/files/2020/08/upgrade-to-15.2-15-pt.jpg" %}

Note que essa lista de ações é semelhante à produzida pelo comando `zypper up`, apresentado no [*post* sobre atualização de pacotes][howto-update]. No entanto, como agora estamos fazendo uma atualização de distribuição, a lista do que precisa ser feito é bem maior.

Confira essa lista com cuidado. Você pode ir para cima ou para baixo usando a barra de rolagem à direita da tela ou a roda (*scroll*) do *mouse*, se utiliza o Terminal, ou as combinações de teclas **Shift + Page Up** ou **Shift + Page Down**, se está em uma interface puramente textual (elas também funcionam no Terminal).

A opção padrão é continuar (**s**). Se você concorda, pode apenas teclar **Enter** e o *download* dos novos pacotes começará. Enquanto isso, você pode usar seu computador normalmente. A atualização propriamente dita ainda não começou.

Observe que o **zypper** apenas baixa os pacotes, ele não inicia a atualização:

{% include image.html src="/files/2020/08/upgrade-to-15.2-16-pt.jpg" %}

Isso porque ordenamos a ele por ora apenas baixar os pacotes (opção `--download-only`).

Termine o que está fazendo e salve os arquivos abertos para iniciarmos a atualização da distribuição. Note que ela pode levar alguns (vários) minutos e você só poderá voltar a usar o computador quando ela for concluída.

## 6) Atualização da distribuição (*upgrade*)

Agora que já baixamos os pacotes necessários para atualizar o openSUSE Leap da versão 15.1 para a 15.2, vamos sair da interface gráfica e usar a linha de comando para realizar a instalação. Aqui, você não poderá usar o Terminal.

Isso é necessário porque inclusive a própria interface gráfica será atualizada. Se estivermos usando a interface gráfica durante a atualização, pode ser que o sistema trave no meio da processo e as consequências disso são imprevisíveis.

Considere abrir essa página em outro computador, em um *smartphone* ou *tablet*, imprimi-la ou anotar o que vai fazer.

Se o sistema que você vai atualizar está em um *notebook*, certifique-se de que ele esteja com a bateria completamente carregada e conectado à fonte de alimentação. Não desconecte a bateria ou a fonte durante a atualização. Vamos prevenir qualquer possibilidade de problema.

Encerre sua sessão (*logout*). Para isso, clique no **menu do sistema**, no canto superior direito da tela, clique no seu nome de usuário e escolha a opção **Encerrar sessão**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-17-pt.jpg" %}

Você será apresentado à tela de *login*, onde você poderia informar seu nome de usuário e senha caso quisesse iniciar uma nova sessão na interface gráfica:

{% include image.html src="/files/2020/08/upgrade-to-15.2-18-pt.jpg" %}

Mas não é isso que queremos. Aperte a combinação de teclas **Ctrl + Alt + F1** para alternar para uma interface puramente textual:

{% include image.html src="/files/2020/08/upgrade-to-15.2-19.png" %}

Caso isso seja novidade para você, saiba que o Linux disponibiliza seis [consoles][terminal] (terminais) além da interface gráfica. Você pode usar as teclas de **F1** a **F6** na mesma combinação (**Ctrl + Alt + F1**, **Ctrl + Alt + F2** e assim por diante) para alternar entre os consoles, assim como pressionar **Ctrl + Alt + F7** para retornar à interface gráfica.

Vamos permanecer no primeiro console.

Entre com o usuário *root*. Para isso, digite `root` e tecle **Enter**. Depois, digite a senha do usuário *root* e tecle **Enter**.

Vamos alternar do nível de execução (_[runlevel]_) 5, nível padrão, no qual o sistema nos provê interface gráfica, para o nível de execução 3, no qual temos apenas a interface de linha de comando e conexão de rede.

Para [alterar o nível de execução][switch-runlevel] para 3, execute o comando:

```
# init 3
```

Finalmente, vamos realizar a atualização de distribuição propriamente dita. Para isso, execute o comando (se atente, também aqui, à opção `--releasever=15.2`):

```
# zypper --no-refresh --releasever=15.2 dup
```

{% include image.html src="/files/2020/08/upgrade-to-15.2-20.png" %}

A opção `--no-refresh` faz com que o **zypper** não atualize a lista de pacotes dos repositórios. Com isso, garantimos que ele não tente baixar mais algum pacote além dos que nós já baixamos. Isso pode ser útil especialmente em *notebooks*, que podem perder a conexão com a rede Wi-Fi ao sair da interface gráfica.

Como antes, o **zypper** vai processar a atualização e mostrar o que vai fazer (se ele fizer as mesmas perguntas sobre mudança de fornecedor, responda da mesma forma):

{% include image.html src="/files/2020/08/upgrade-to-15.2-21-pt.png" %}

Note que todos os pacotes que ele precisa já foram baixados: ao final ele mostra "Tamanho total do download: 0 B. Já em cache: 1,93 GiB."

Apenas tecle **Enter** para que a atualização comece.

O **zypper** pula o _download_ dos pacotes e já vai direto para a instalação:

{% include image.html src="/files/2020/08/upgrade-to-15.2-22-pt.png" %}

A atualização da distribuição pode demorar alguns (vários) minutos.

Quando ela terminar, o **zypper** vai sugerir reiniciar. É o que vamos fazer executando:

```
# reboot
```

{% include image.html src="/files/2020/08/upgrade-to-15.2-23-pt.png" %}

## Pronto

Se você conseguiu fazer tudo até aqui, seu computador já está com o Linux Kamarada 15.2 (ou com o openSUSE Leap 15.2).

Observe que o menu do [GRUB], aquele que permite a você escolher o sistema operacional quando o computador liga (útil especialmente se você possui Windows e Linux instalados na mesma máquina), já está diferente:

{% include image.html src="/files/2020/08/upgrade-to-15.2-24.png" %}

E *voilà*! O Linux Kamarada 15.2 (ou o openSUSE Leap 15.2) está instalado e pronto para uso!

{% include image.html src="/files/2020/08/upgrade-to-15.2-25-pt.jpg" %}

Verifique se está tudo no lugar.

Agora você pode devolver os repositórios que excluiu, lembrando de substituir a versão do openSUSE Leap, onde aparecer, pela variável `$releasever`. Pela interface de linha de comando, fazer isso é fácil:

```
# sed -i 's/15.1/$releasever/g' /etc/zypp/repos.d.antigos/*
# mv /etc/zypp/repos.d.antigos/* /etc/zypp/repos.d/
```

Feito isso, você pode excluir o *backup* da sua antiga lista de repositórios:

```
# rm -rf /etc/zypp/repos.d.antigos/
```

Você também pode tentar instalar qualquer programa que por ventura tenha sido removido durante a atualização.

Se lembre de regularmente [verificar se há atualizações (*updates*)][howto-update] para sua nova distribuição. Note que no uso cotidiano do **zypper** você não precisa usar a opção `--releasever`.

Se você encontrou alguma dificuldade durante a atualização ou possui alguma dúvida, não deixe de comentar!

Até a próxima!

[opensuse-leap]:        https://en.opensuse.org/Portal:Leap
[kamarada-15.1]:        {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[leap-15.2]:            {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[kamarada-15.2-rc]:     {% post_url pt/2020-08-08-linux-kamarada-libera-versao-candidata-a-lancamento-15.2-rc %}
[system-upgrade]:       https://en.opensuse.org/SDB:System_upgrade
[upgrade-to-42.2]:      {% post_url pt/2016-10-31-como-atualizar-do-opensuse-leap-421-para-o-422 %}
[upgrade-to-42.3]:      {% post_url pt/2017-08-01-como-atualizar-do-opensuse-leap-422-para-o-423 %}
[upgrade-to-15.1]:      {% post_url pt/2019-05-26-como-atualizar-do-opensuse-leap-150-para-o-151 %}
[howto-update]:         {% post_url pt/2019-05-14-como-obter-atualizacoes-para-o-linux-opensuse %}
[release-notes]:        https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/15.2/RELEASE-NOTES.pt_BR.html
[debian]:               https://www.debian.org/
[third-party-repos]:    https://en.opensuse.org/Additional_package_repositories
[official-repos]:       https://en.opensuse.org/Package_repositories#Official_Repositories
[oss]:                  https://pt.wikipedia.org/wiki/Software_de_código_aberto
[osdn]:                 https://pt.osdn.net/
[c3sl]:                 https://www.c3sl.ufpr.br/
[mirrors]:              https://github.com/kamarada/Linux-Kamarada-GNOME/wiki/Mirrors
[yast]:                 http://yast.opensuse.org/
[url]:                  https://pt.wikipedia.org/wiki/URL
[opensuse-list]:        https://lists.opensuse.org/opensuse/2015-01/msg00413.html
[kamarada-15.1-beta]:   {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[zypper]:               https://pt.opensuse.org/Portal:Zypper
[vendor-change]:        https://en.opensuse.org/SDB:Vendor_change_update
[terminal]:             http://www.hardware.com.br/livros/linux/usando-terminal.html
[runlevel]:             http://www.hardware.com.br/termos/runlevel
[switch-runlevel]:      https://en.opensuse.org/SDB:Switch_runlevel
[grub]:                 https://www.gnu.org/software/grub/
