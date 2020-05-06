---
date: '2020-05-02 18:30:00 GMT-3'
layout: post
title: 'Folding@home: veja como seu PC pode ajudar as pesquisas sobre a Covid-19'
image: '/files/2020/05/fah.jpg'
nickname: 'fah'
---

No mundo todo, muitas pessoas estão dando seu melhor para combater a atual pandemia da [Covid-19] das mais diferentes (e criativas) maneiras: seja [fabricando viseiras protetoras com impressoras 3D][face-shields], [máscaras caseiras de pano][face-masks] ou [ventiladores alternativos mais baratos][ventilator], a quantidade de ideias e colaborações tem sido impressionante e motivante. Nas universidades, os pesquisadores tentam modelar e entender o coronavírus, tarefa que envolve muitas contas e processamento, e que também tem recebido ajuda de voluntários.

Nesse sentido, o projeto mais conhecido é o [**Folding@home**][fah], também chamado abreviadamente **F@h** ou **FAH**. Ele disponibiliza um programa em seu _site_ que qualquer pessoa pode baixar e instalar em seu computador para contribuir com a pesquisa doando parte do seu poder computacional. O programa baixa uma tarefa para fazer, trabalha nessa tarefa e envia de volta o resultado, contribuindo para a tarefa maior, que é modelar o vírus.

{% include image.html src="/files/2020/05/fah.jpg" %}

## Um pouco sobre o projeto

O projeto Folding@home foi criado em 2000 pelo [Pande Lab][pandelab] da [Universidade de Stanford][stanford], comandado pelo professor [Dr. Vijay Pande][pande]. Seu objetivo era entender como as proteínas se organizam (enovelamento de proteínas, em inglês _protein folding_, daí o nome do projeto) e porque esse processo às vezes falha, causando doenças como [Alzheimer] e [câncer][cancer]. Em 2018, ele passou a liderança do projeto para um de seus ex-alunos, agora também professor, o [Dr. Gregory Bowman][bowman] da [Universidade Washington em St. Louis][wustl], que desde então tem coordenado o projeto em parceria com outras universidades e empresas.

O projeto já produziu descobertas impressionantes, relatadas em [224 artigos científicos][fah-papers], que incluem trabalhos sobre bactérias resistentes a antibióticos e proteínas do [vírus Ebola][ebola].

Em janeiro de 2020, o Folding@home contava com a colaboração de 30 mil usuários, o que já era bom, mas rapidamente saltou para 400 mil em março, com o interesse das pessoas em ajudar as pesquisas sobre o coronavírus. Muitas dessas pessoas embarcaram no projeto junto com a [NVIDIA], que o divulgou em suas redes sociais. No pico do seu [desempenho][fah-stats], o Folding@home atingiu a marca de 1,5 [exaFLOPs], tornando-o sete vezes mais rápido que [o supercomputador mais rápido do mundo atualmente, o IBM Summit][summit].

<div class="d-flex justify-content-center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">PC Gamers, let’s put those GPUs to work. <br><br>Join us and our friends at <a href="https://twitter.com/OfficialPCMR?ref_src=twsrc%5Etfw">@OfficialPCMR</a> in supporting folding@home and donating unused GPU computing power to fight against COVID-19! <br><br>Learn more → <a href="https://t.co/EQE4u7xTZT">https://t.co/EQE4u7xTZT</a> <a href="https://t.co/uO0ZCq8PEv">pic.twitter.com/uO0ZCq8PEv</a></p>&mdash; NVIDIA GeForce (@NVIDIAGeForce) <a href="https://twitter.com/NVIDIAGeForce/status/1238496311776653312?ref_src=twsrc%5Etfw">March 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

## Requisitos mínimos

Não há requisitos mínimos de _hardware_ para participar do Folding@home, qualquer computador pode contribuir para o projeto. No entanto, se o computador for muito lento, pode não conseguir entregar tarefas no prazo necessário. O projeto [estima][fah-faq] que computadores com 5 anos de idade ou menos atendem bem à demanda. Por outro lado, se seu computador é um daqueles preparado para jogos, com uma placa de vídeo da NVIDIA ou [AMD], é o candidato ideal por possuir maior capacidade de processamento paralelo.

Observe que as tarefas fazem uso intensivo do processador, o que pode esquentar seu computador.

## Esse programa é código aberto?

Talvez isso seja importante para você, por isso acho que vale a pena observar: o programa do Folding@home **não** é [código aberto][opensource], embora use componentes de código aberto, dentre os quais são [mencionados][fah-opensource] pelo _site_ do projeto: [Gromacs], [TINKER], [Amber] e [MPICH]. O projeto afirma que quaisquer modificações que faz nesses componentes são contribuídas de volta.

A [justificativa][fah-faq] do projeto para não divulgar o código-fonte do programa é a preocupação com a integridade científica, uma vez que pessoas mal intencionadas poderiam modificar o código para produzir resultados científicos errados, o que tornaria todo o projeto inútil.

Não vou discutir se concordo ou não, apenas repassei a informação como encontrei no _site_ do projeto.

Se mesmo assim você deseja usar seu computador para contribuir com as pesquisas sobre a Covid-19, vamos pôr a mão na massa! Como de costume, aqui eu falo das distribuições [Linux Kamarada][kamarada-15.1] e [openSUSE]. Em outras distribuições, o passo-a-passo pode ser um pouco diferente.

## Download

Acesse a página de _download_ do Folding@home:

- [https://foldingathome.org/start-folding/](https://foldingathome.org/start-folding/)

Observe que o Folding@home não suporta oficialmente o openSUSE, mas nada que não possamos contornar. Veja que há 3 pacotes RPM para distribuições próximas ([RedHat], [CentOS] e [Fedora]):

{% include image.html src="/files/2020/05/fah-download.jpg" %}

Não é necessário instalar os 3 pacotes. Veja o que são cada um deles:

- **cliente do FAH** (_FAH client_): esse é o pacote mais importante, pois contém:
  - o programa cliente que baixa tarefas para serem executadas, as executa e devolve o resultado, normalmente é executado ao fundo (em _background_), como um serviço do sistema, sem interação com o usuário (_back end_)
  - uma interface _web_ simples que pode ser usada pelo navegador para monitorar o cliente e fazer algumas poucas configurações (_front end_)
- **controle do FAH** (_FAH control_): é um aplicativo com interface gráfica (GUI) que permite monitorar o cliente e fazer configurações mais avançadas, esse pacote é opcional
- **visualizador do FAH** (_FAH viewer_): é um aplicativo com interface gráfica (GUI) que permite visualizar o modelo em que o cliente está trabalhando, esse pacote é opcional

Para fins de demonstração, vou baixar e instalar cada um dos três. Fique a vontade para instalar o(s) que julgar necessário(s) no seu computador.

## Cliente do Folding@home (FAHClient)

Depois de baixar o pacote RPM do **fahclient**, abra uma janela do terminal na pasta onde ele foi baixado e instale-o executando o comando a seguir como administrador (usuário _root_):

```
# zypper in fahclient-7.6.9-1.x86_64.rpm
```

O gerenciador de pacotes **zypper** informa que não encontra uma dependência do pacote:

```
Carregando dados do repositório...
Lendo os pacotes instalados...
Resolvendo dependências de pacote...

Problema: nada fornece bzip2-libs que é necessário a fahclient-7.6.9-1.x86_64
 Solução 1: não instalar fahclient-7.6.9-1.x86_64
 Solução 2: quebrar fahclient-7.6.9-1.x86_64 ao ignorar algumas das dependências

Escolha uma das opções acima pelo número ou cancele [1/2/c/d/?] (c):
```

Lembre-se que esse pacote RPM não foi feito para o openSUSE, que fornece as bibliotecas do **[bzip2]** em um pacote chamado **libbz2-1**, que já vem instalado por padrão. Portanto, digite `2` (que aqui equivale a ignorar a dependência não satisfeita) e pressione **Enter**:

```
Escolha uma das opções acima pelo número ou cancele [1/2/c/d/?] (c): 2
Resolvendo dependências...
Resolvendo dependências de pacote...

O seguinte pacote NOVO será instalado:
  fahclient

1 novo pacote a ser instalado.
Tamanho total do download: 3,5 MiB. Já em cache: 0 B. Após a operação, 8,9 MiB
adicionais serão utilizados.
Continuar? [s/n/v/...? exibe todas as opções] (s):
```

Tecle **Enter** para aceitar a opção padrão (`s`, que aqui significa "sim, continuar").

Na sequência, o **zypper** se depara com outro problema. O pacote não está assinado e, por isso, não é possível fazer a [verificação de autenticidade][gpg]:

```
Baixando pacote fahclient-7.6.9-1.x86_64
                                       (1/1),   3,5 MiB (  8,9 MiB descompactado)
fahclient-7.6.9-1.x86_64.rpm:
    O pacote não está assinado!

fahclient-7.6.9-1.x86_64 (Cache de arquivos RPM simples): Falha na verificação da assinatura [6-O arquivo não está assinado]
Cancelar, repetir ou ignorar? [c/r/i] (c):
```

Essa mensagem de erro é comum ao instalar um pacote RPM baixado manualmente (sem ser de um repositório configurado). Você pode seguramente digitar `i` (ignorar) e pressionar **Enter**:

```
Cancelar, repetir ou ignorar? [c/r/i] (c): i

Verificando por conflito de arquivos: ................................[concluído]
(1/1) Instalando: fahclient-7.6.9-1.x86_64 ...........................[concluído]
Saída adicional do rpm:
Unknown option: levels
usage:
        chkconfig -A|--allservices              (together with -l: show all services)
        chkconfig -t|--terse [names]            (shows the links)
        chkconfig -e|--edit  [names]            (configure services)
        chkconfig -s|--set   [name state]...    (configure services)
        chkconfig -l|--list [--deps] [names]    (shows the links)
	chkconfig -L|--liston [--deps] [names]  (as -l, enabled in at least 1 level)
        chkconfig -c|--check name [state]       (check state)
        chkconfig -a|--add   [names]            (runs insserv)
        chkconfig -d|--del   [names]            (runs insserv -r)
        chkconfig -h|--help                     (print usage)
        chkconfig -f|--force ...                (call insserv with -f)

        chkconfig [name]             same as chkconfig -t
        chkconfig name state...      same as chkconfig -s name state
        chkconfig --root=<root> ...  use <root> as the root file system
Starting fahclient ... FAIL
```

O **zypper** conclui a instalação, mas mostra mais algumas mensagens de erro. Mais uma vez, lembremos que esse pacote RPM não foi feito para o openSUSE. Embora uma dessas mensagens de erro indique que não conseguiu iniciar o cliente, isso não procede.

Se você usar o comando **[htop]**, perceberá que não só o cliente está em execução, como em pouco tempo põe seu processador pra trabalhar, atingindo 100% de uso:

```
$ htop
```

{% include image.html src="/files/2020/05/fahclient-01-pt.jpg" %}

Para sair do **htop**, tecle **F10** ou clique em **Quit** (sair) no canto inferior direito da tela.

Recarregue os serviços do sistema (necessário porque o FAHClient ainda é baseado no `/etc/init.d`):

```
# systemctl daemon-reload
```

E habilite o serviço do FAHClient para que ele seja iniciado automaticamente durante o _boot_:

```
# systemctl enable FAHClient
```

Para finalizar a configuração, abra o navegador e acesse [client.foldingathome.org](http://client.foldingathome.org/):

{% include image.html src="/files/2020/05/fahclient-02.jpg" %}

A página redireciona para a interface _web_ do seu cliente do FAH. Se preferir, você pode acessá-la diretamente em [localhost:7396](http://localhost:7396/).

Note que em **I support research fighting** (Eu suporto a pesquisa contra), há um menu _dropdown_ que você pode abrir e selecionar uma doença para direcionar sua contribuição:

{% include image.html src="/files/2020/05/fahclient-03.jpg" %}

Você pode selecionar uma linha de pesquisa de sua preferência (por exemplo, **COVID-19**) ou deixar o padrão, que é contribuir com a pesquisa contra qualquer doença (**Any disease**).

Em **Power** (poder), você pode configurar quanto do seu poder de processamento será doado: pouco (**Light**, padrão), médio (**Medium**) ou todo (**Full**).

Em **When** (quando), você pode definir quando o computador trabalhará na pesquisa: a qualquer momento, inclusive enquanto você estiver usando o computador (**While I'm working**, padrão) ou apenas quando o computador estiver sem uso (**Only when idle**).

Se precisar, você pode interromper o trabalho do cliente do FAH a qualquer momento usando o botão **Stop Folding**.

Note que fechar essa aba do navegador não interrompe o trabalho do cliente do FAH.

Você já está contribuindo com o trabalho dos pesquisadores, parabéns! Se quiser, pode parar por aqui, os passos seguintes são opcionais. Sigam-me os curiosos!

## Controle do Folding@home (FAHControl)

A instalação do pacote **fahcontrol** é semelhante:

```
# zypper in fahcontrol-7.6.9-1.noarch.rpm
```

Uma vez instalado, para iniciar o FAHControl, se você usa o ambiente [GNOME], clique em **Atividades**, no canto superior esquerdo da tela, digite `fah` e clique no ícone do **FAHControl**:

{% include image.html src="/files/2020/05/fahcontrol-01-pt.jpg" %}

Note que esse aplicativo apresenta as mesmas opções da interface _web_ e mais:

{% include image.html src="/files/2020/05/fahcontrol-02-pt.jpg" %}

Se precisar, você pode pausar o trabalho do cliente do FAH a qualquer momento usando o botão **Pause**, ou para-lo completamente usando o botão **Finish**. Em ambos os casos, para retomar o trabalho, clique em **Fold**.

Note que fechar esse programa também não interrompe o trabalho do cliente do FAH.

## Visualizador do Folding@home (FAHViewer)

A instalação do pacote **fahviewer** é semelhante:

```
# zypper in fahviewer-7.6.9-1.noarch.rpm
```

Uma vez instalado, para iniciar o FAHViewer, se você usa o ambiente GNOME, clique em **Atividades**, digite `fah` e clique no ícone do **FAHViewer**:

{% include image.html src="/files/2020/05/fahviewer-01-pt.jpg" %}

Nessa janela, é possível visualizar a modelagem em que seu computador está trabalhando:

{% include image.html src="/files/2020/05/fahviewer-02.jpg" %}

Se quiser, você pode rotacionar a imagem 3D usando o _mouse_.

## Referências

- [Coronavírus: saiba como usar seu PC para combater a pandemia - TechTudo][techtudo]
- [Folding@home - Fighting disease with a world wide distributed super computer][fah]
- [Folding@home - Wikipedia][wikipedia]
- [So What Is Protein Folding, Anyway? - Hackaday][hackaday]
- [The coronavirus pandemic turned Folding@Home into an exaFLOP supercomputer - Ars Technica][arstechnica]
- [init.d - What's the easiest way to make my old init script work in systemd? - Server Fault][serverfault]

[covid-19]:         https://pt.wikipedia.org/wiki/COVID-19
[face-shields]:     https://g1.globo.com/sp/piracicaba-regiao/noticia/2020/03/31/multinacional-e-universidade-da-regiao-de-piracicaba-criam-mascaras-com-impressoras-3d.ghtml
[face-masks]:       https://g1.globo.com/rj/rio-de-janeiro/noticia/2020/04/10/artesaos-de-comunidades-do-rio-fabricam-mascaras-caseiras-para-intensificar-combate-a-covid-19.ghtml
[ventilator]:       https://www.tecmundo.com.br/mercado/152167-respirador-brasileiro-37-barato-liberado-empresas.htm
[fah]:              https://foldingathome.org/
[pandelab]:         https://www.pandelab.org/
[stanford]:         https://www.stanford.edu/
[pande]:            https://profiles.stanford.edu/vijay-pande
[alzheimer]:        https://pt.wikipedia.org/wiki/Doença_de_Alzheimer
[cancer]:           https://pt.wikipedia.org/wiki/Câncer
[bowman]:           https://bowmanlab.biochem.wustl.edu/
[wustl]:            https://wustl.edu/
[fah-papers]:       https://foldingathome.org/papers-results/
[ebola]:            https://pt.wikipedia.org/wiki/Vírus_Ebola
[nvidia]:           https://www.nvidia.com/
[fah-stats]:        https://stats.foldingathome.org/os
[exaflops]:         https://pt.wikipedia.org/wiki/FLOPS
[summit]:           https://www.techtudo.com.br/noticias/2018/06/ibm-cria-summit-supercomputador-mais-rapido-do-mundo-de-200-petaflops.ghtml
[fah-faq]:          https://foldingathome.org/support/faq/project-details/
[amd]:              https://www.amd.com/
[opensource]:       https://pt.wikipedia.org/wiki/Software_de_código_aberto
[fah-opensource]:   https://foldingathome.org/support/faq/opensource/
[gromacs]:          http://www.gromacs.org
[tinker]:           http://dasher.wustl.edu
[amber]:            http://ambermd.org/
[mpich]:            http://www-unix.mcs.anl.gov/mpi/mpich/
[kamarada-15.1]:    {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[opensuse]:         https://www.opensuse.org/
[redhat]:           https://www.redhat.com/pt-br/technologies/linux-platforms/enterprise-linux
[centos]:           https://www.centos.org/
[fedora]:           https://getfedora.org/pt_BR/
[bzip2]:            http://www.bzip.org/
[gpg]:              {% post_url pt/2018-10-06-verificacao-de-integridade-e-autenticidade-com-sha-256-e-gpg %}
[htop]:             http://hisham.hm/htop/
[gnome]:            https://br.gnome.org/
[techtudo]:         https://www.techtudo.com.br/dicas-e-tutoriais/2020/03/coronavirus-saiba-como-usar-seu-pc-para-combater-a-pandemia.ghtml
[wikipedia]:        https://en.wikipedia.org/wiki/Folding@home
[hackaday]:         https://hackaday.com/2020/04/14/so-what-is-protein-folding-anyway/
[arstechnica]:      https://arstechnica.com/science/2020/04/how-the-pandemic-revived-a-distributed-computing-project-and-made-history/
[serverfault]:      https://serverfault.com/a/713857/357679
