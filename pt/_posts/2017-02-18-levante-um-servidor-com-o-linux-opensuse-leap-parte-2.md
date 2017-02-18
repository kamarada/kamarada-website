---
date: 2017-02-18 20:00:00
image: '/files/2017/02/opensuse-server-config-01.jpg'
layout: post
published: true
nickname: 'how-to-server-config'
title: 'Levante um servidor com o Linux openSUSE Leap (parte 2)'
excerpt: 'No post anterior, você viu como instalar o openSUSE Leap em um servidor. Agora, você percorrerá um checklist com as principais configurações que deve ajustar no novo servidor para que ele possa ser considerado efetivamente pronto para uso.'
---

No [*post* anterior][how-to-server], você viu como instalar o [openSUSE Leap][opensuse-leap-422] em um servidor. Agora, você percorrerá um *checklist* com as principais configurações que deve ajustar no novo servidor para que ele possa ser considerado efetivamente pronto para uso.

{% include image.html src="/files/2017/02/opensuse-server-config-01.jpg" caption="Deixe o Geeko tomar conta dos seus servidores! (imagem extraída do clipe [Uptime Funk](https://www.youtube.com/watch?v=zbABy9ul11I))" %}

Se você chegou aqui sem ter passado pelo [*post* anterior][how-to-server], recomendo que comece sua leitura por ele. A menos que o openSUSE já esteja instalado no seu servidor.

## Retomando...

Paramos na tela de *login*, que aparece logo após o servidor reiniciar:

{% include image.html src="/files/2017/01/opensuse-server-39.jpg" %}

Entre com o usuário *root*. Para isso, digite `root` e tecle **Enter**, então digite a senha que você definiu durante a instalação para o usuário *root* e tecle **Enter** mais uma vez:

{% include image.html src="/files/2017/02/opensuse-server-config-02.png" %}

Estava esperando que apareceriam asteriscos (`*`) enquanto você digitava a senha? Não se preocupe, na interface textual do Linux é assim mesmo: a senha não aparece enquanto é digitada, de forma alguma, nem mesmo camuflada com asteriscos.

## O Centro de controle YaST

Um dos motivos de eu indicar o openSUSE para quem me pergunta por uma distribuição Linux é que ele tem o [**YaST**][yast]. Sigla do inglês *Yet another Setup Tool* ("apenas mais uma ferramenta de configuração", em uma tradução livre), o YaST é a ferramenta central do openSUSE para administrar o sistema.

Muitas das configurações possíveis (e com certeza todas as principais) podem ser modificadas pelo YaST, incluindo *hardware*, rede, instalação e remoção de programas, serviços do sistema, usuários, segurança, data e hora, idiomas e outras.

O YaST fornece uma interface amigável até mesmo para quem usa a interface de texto. Para iniciá-lo, execute o comando:

```
# yast
```

Se você não está acostumado com essa notação, isso significa digitar `yast` e teclar **Enter**. O jogo da velha (`#`) não deve ser digitado, ele apenas indica que o comando deve ser executado com permissões elevadas (do usuário *root*). Ao contrário, um cifrão (`$`) indicaria que o comando poderia ser executado por qualquer usuário.

Feito isso, aparecerá a tela principal do YaST:

{% include image.html src="/files/2017/02/opensuse-server-config-03.png" %}

As configurações são listadas à direita e agrupadas em categorias à esquerda.

Se você utiliza o openSUSE no *desktop*, talvez já conheça o YaST:

{% include image.html src="/files/2016/10/upgrade-03-pt.png" caption="A tela inicial do YaST na interface gráfica" %}

Na verdade, você já conhece o YaST do [*post* anterior][how-to-server]: além de centro de controle, ele também é o próprio instalador do openSUSE (você pode voltar àquele *post* e reparar que o nome YaST aparece no canto superior esquerdo de todas as telas).

Quem está acostumado com o [Windows][windows] deve achar o YaST parecido com o [Painel de Controle][control-panel]. Ambos centralizam as configurações de seus respectivos sistemas.

## Configurações de idioma

Durante a [instalação do openSUSE][how-to-server], selecionamos como idioma o português brasileiro. Note que, apesar disso, a tela do YaST está em inglês. Isso acontece porque, por padrão, o openSUSE traduz a interface apenas para os usuários comuns, deixando a interface do usuário *root* em inglês. Vamos alterar essa configuração.

À esquerda selecione a categoria **System** (Sistema) e à direita selecione a configuração **Language** (Idioma):

{% include image.html src="/files/2017/02/opensuse-server-config-04.png" %}

Observe que essa tela é traduzida e que o português brasileiro de fato está configurado como idioma primário do sistema:

{% include image.html src="/files/2017/02/opensuse-server-config-05-pt.png" %}

Selecione **Detalhes**.

Na tela **Detalhes do idioma**, em **Configurações locais para usuário root**, mude de **Somente ctype** (configuração padrão) para **Sim**:

{% include image.html src="/files/2017/02/opensuse-server-config-06-pt.png" %}

Com isso, o usuário *root* será tratado como os demais usuários em relação à tradução. Note que essa configuração só surtirá efeito da próxima vez em que você fizer *login* com o usuário *root*.

Selecione **OK** e depois **OK** novamente. Você volta para a tela principal do YaST.

Vamos sair do YaST, fazer *logout* do usuário *root*, fazer *login* com o usuário *root* e iniciar o YaST novamente, para vermos sua interface em português.

Selecione **Quit** (Sair). Você volta para a linha de comando.

Para fazer *logout* do usuário *root*, execute:

```
$ exit
```

(*exit*, do inglês "sair")

Então, faça *login* com o usuário *root* e inicie novamente o YaST:

```
# yast
```

Perceba que agora o YaST aparece traduzido:

{% include image.html src="/files/2017/02/opensuse-server-config-07-pt.png" %}

## Configurações básicas de rede

No [*post* anterior][how-to-server], optamos por realizar a configuração da rede de forma automática via [DHCP][dhcp]. Em servidores, é mais comum que a rede seja configurada manualmente.

Vamos definir manualmente as configurações de rede do nosso servidor.

**Observação:** não está no escopo deste *post* explicar noções básicas de redes de computadores. Como você está configurando um servidor, suponho que possua esse conhecimento. Caso surja alguma dúvida, consulte a [documentação oficial do openSUSE][opensuse-doc-network], que é rica em informação tanto para iniciantes quanto mais experientes.

À esquerda selecione a categoria **Sistema** e à direita selecione **Configurações da rede**. Após verificar as configurações de rede do servidor, o YaST listará as interfaces de rede configuradas:

{% include image.html src="/files/2017/02/opensuse-server-config-08-pt.png" %}

Na lista, selecione a interface de rede e depois, **Editar**.

Na tela **Configuração da placa de rede**, selecione **Endereço IP atribuído estaticamente** e então forneça:

- o **Endereço IP** (vou usar como exemplo `192.168.25.100`, note que esse é um [endereço IP de rede privada][rfc-1918] em conformidade com a [RFC 1918][rfc-1918]),
- a **Máscara de subrede** (`255.255.255.0` ou `/24` ou simplesmente `24`, o YaST é inteligente e entende tanto o formato mais tradicional de máscara de rede quanto o mais recente [CIDR][cidr]) e
- o **Nome de máquina** completo, ou seja, acompanhado do domínio (como `novoservidor.minhacasa.net`).

Quando estiver pronto, selecione **Próximo**:

{% include image.html src="/files/2017/02/opensuse-server-config-09-pt.png" %}

De volta à tela **Configurações da rede**, passe para a aba **Nome de máquina/DNS**, forneça novamente o **Nome de máquina** (`novoservidor`), o **Nome de domínio** (`minhacasa.net`) e os endereços IP dos servidores de nomes:

{% include image.html src="/files/2017/02/opensuse-server-config-10-pt.png" %}

Se sua rede possui servidores de nomes locais, dê preferência a utilizá-los. Senão, utilize os informados pelo seu provedor. Você também pode utilizar uma ferramenta como o [DNS Benchmark][dns-benchmark] para comparar o desempenho de diversos servidores de nomes e escolher o melhor. Nesse exemplo, usei os servidores brasileiros do [GigaDNS][gigadns]: `189.38.95.95` e `189.38.95.96`. [Muitas pessoas][google-public-dns-statistics] utilizam os [servidores DNS públicos do Google][google-public-dns]: `8.8.8.8` e `8.8.4.4`.

No campo **Pesquisa de domínio**, informe nomes de domínio que devem ser utilizados para resolver nomes de máquina quando um domínio não for especificado. Aqui você deve informar pelo menos o nome de domínio do seu servidor (`minhacasa.net`).

Pergunta: em que isso é útil? Suponha que sua rede possui um servidor chamado `www.minhacasa.net`. Se no servidor `novoservidor` você executar o comando:

```
$ ping www
```

Ele produzirá o mesmo efeito que o comando:

```
$ ping www.minhacasa.net
```

O comando **ping** é utilizado para testar se uma máquina consegue se comunicar com outra na rede. Ele envia um pequeno pacote à máquina de destino, que responde imediatamente. Se tudo funciona conforme o esperado, uma mensagem é exibida na tela, indicando que há comunicação.

Nos exemplos acima, o comando **ping** alcançaria o mesmo servidor.

Voltemos à tela **Configurações da rede**. Mude para a aba **Roteamento**.

Em **Gateway padrão IPv4**, informe o endereço IP do seu roteador:

{% include image.html src="/files/2017/02/opensuse-server-config-11-pt.png" %}

Se seu novo servidor atuará como *firewall* e/ou roteador, marque também a opção **Habilitar o encaminhamento IPv4**. Se esse é o caso, você também deve trabalhar (agora ou mais tarde) na **Tabela de roteamento**.

Quando terminar, selecione **OK**.

O YaST aplicará as configurações de rede e retornará para o menu inicial.

Selecione **Sair**. Vamos testar a rede usando o comando **ping**. Execute os comandos:

- `ping 192.168.25.10` (uma máquina na mesma rede que o servidor),
- `ping 8.8.8.8` (uma máquina em outra rede que não a do servidor, pode ser um servidor na Internet, nesse caso usei um servidor DNS do Google) e
- `ping www.google.com` (um nome qualquer para testar o DNS).

```
$ ping 192.168.25.10

PING 192.168.25.10 (192.168.25.10) 56(84) bytes of data.
64 bytes from 192.168.25.10: icmp_seq=1 ttl=64 time=0.259 ms
64 bytes from 192.168.25.10: icmp_seq=2 ttl=64 time=0.189 ms
64 bytes from 192.168.25.10: icmp_seq=3 ttl=64 time=0.189 ms
64 bytes from 192.168.25.10: icmp_seq=4 ttl=64 time=0.186 ms
^C
--- 192.168.25.10 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 2999ms
rtt min/avg/max/mdev = 0.186/0.205/0.259/0.035 ms

$ ping 8.8.8.8

PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=48 time=137 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=48 time=77.0 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=48 time=77.5 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=48 time=76.6 ms
^C
--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3001ms
rtt min/avg/max/mdev = 76.684/92.244/137.753/26.278 ms

$ ping www.google.com

PING www.google.com (172.217.29.228) 56(84) bytes of data.
64 bytes from gru06s28-in-f228.1e100.net (172.217.29.228): icmp_seq=1 ttl=56 time=28.1 ms
64 bytes from gru06s28-in-f228.1e100.net (172.217.29.228): icmp_seq=2 ttl=56 time=32.1 ms
64 bytes from gru06s28-in-f228.1e100.net (172.217.29.228): icmp_seq=3 ttl=56 time=28.4 ms
64 bytes from gru06s28-in-f228.1e100.net (172.217.29.228): icmp_seq=4 ttl=56 time=30.3 ms
^C
--- www.google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 28.123/29.784/32.183/1.630 ms
```

Se você está acostumado a utilizar o **ping** em outros sistemas operacionais, observe que no Linux, por padrão, ele é executado indefinidamente. Para interrompê-lo (assim como para interromper a execução de qualquer comando no Linux), tecle **Ctrl + C**.

Se algum dos comandos acima não funcionou conforme o esperado, volte e verifique as configurações de rede.

## Acesso remoto via SSH

Se você seguiu o tutorial do [*post* anterior][how-to-server] à risca, durante a instalação, você habilitou o acesso remoto via [SSH][ssh]. Sendo assim, ele já está funcionando no seu servidor.

Vejamos como acessar a linha de comando do nosso servidor remotamente.

De um computador na mesma rede que o servidor (pode ser um *desktop* ou mesmo outro servidor Linux), abra o terminal e invoque o comando **ssh**, passando como argumentos um nome de usuário (por exemplo, `kamarada`) e o endereço IP ou o nome do servidor (`192.168.25.100`):

```
$ ssh kamarada@192.168.25.100
```

Como essa é a primeira conexão com o servidor, o computador pergunta se deve confiar na chave de criptografia enviada pelo servidor:

```
The authenticity of host '192.168.25.100 (192.168.25.100)' can't be established.
ECDSA key fingerprint is SHA256:GFiBtsouaZSU4HuTOuzYyDJrxq+AD4coYZBESbl6tzE.
Are you sure you want to continue connecting (yes/no)? 
```

Digite `yes` ("sim", em inglês) e tecle **Enter**. Das próximas vezes em que você acessar esse servidor via SSH, essa verificação não será mais feita.

Na sequência, você deve informar a senha do usuário e teclar **Enter**:

```
Warning: Permanently added '192.168.25.100' (ECDSA) to the list of known hosts.
Password: 
Have a lot of fun...
kamarada@novoservidor:~>
```

Pronto! Você ganhou acesso à linha de comando do servidor. Qualquer comando invocado nesse terminal será executado, na verdade, no servidor:

```
kamarada@novoservidor:~> hostname
novoservidor
kamarada@novoservidor:~> whoami
kamarada
kamarada@novoservidor:~> pwd
/home/kamarada
kamarada@novoservidor:~>
```

Vamos seguir utilizando essa sessão SSH para configurar nosso servidor.

Para alternar do usuário `kamarada` para o usuário `root`, invoque o comando **su** (de *superuser*, ou superusuário). Digite a senha do usuário *root* e tecle **Enter**:

```
kamarada@novoservidor:~> su
Senha:
novoservidor:/home/kamarada #
```

{% include image.html src="/files/2017/02/opensuse-server-config-12-pt.png" caption="Com o acesso remoto via SSH, você pode gerenciar seu servidor usando seu *desktop*" %}

## Usuários

Se além de você outras pessoas vão acessar o servidor, você deve criar uma conta de usuário para cada uma delas, para que cada uma acesse o servidor com sua própria conta de usuário.

O gerenciamento de usuários no openSUSE pode ser feito de maneira fácil pelo YaST.

Na sessão de SSH, inicie o YaST:

```
# yast
```

À esquerda selecione a categoria **Segurança e usuários** e à direita selecione **Gerenciamento de usuários e grupos**:

{% include image.html src="/files/2017/02/opensuse-server-config-13-pt.png" %}

Após verificar as configurações do sistema, o YaST lista os usuários existentes (por enquanto, temos apenas o usuário `kamarada`, criado [durante a instalação][how-to-server]):

{% include image.html src="/files/2017/02/opensuse-server-config-14-pt.png" %}

Selecione **Adicionar**.

A seguir, informe os dados do novo usuário e quando terminar selecione **OK**:

{% include image.html src="/files/2017/02/opensuse-server-config-15-pt.png" %}

De volta à tela anterior, o novo usuário agora aparece na lista de usuários.

Cadastre quantos usuários precisar. Quando terminar, selecione **OK** para aplicar as configurações. As novas contas de usuário serão criadas e você voltará à tela principal do YaST.

## Sincronização de data e hora via NTP

Durante a [instalação do openSUSE][how-to-server], selecionamos o fuso horário do servidor. Já dediquei um *post* inteiro a explicar como podemos [manter a hora do computador sempre certa com o NTP][how-to-ntp-client]. Recomendo a leitura daquele *post*, já que o procedimento nele descrito também pode ser feito em servidores. Mas como já configuramos o fuso horário, não precisamos rever todas as configurações de data e hora. Aqui, vou sucintamente explicar como configurar apenas o cliente NTP.

Na tela principal do YaST, à esquerda selecione a categoria **Serviços de rede** e à direita selecione **Configuração do NTP**.

O openSUSE já vem pré-configurado para sincronizar com alguns servidores de hora:

{% include image.html src="/files/2017/02/opensuse-server-config-16-pt.png" %}

Recomendo que você remova todos esses servidores e adicione o servidor de hora interno da sua rede (por exemplo, `192.168.25.1`) ou do seu provedor, se houver. Senão, adicione o servidor de hora oficial brasileiro do [NTP.br][ntpbr]: `pool.ntp.br`.

Para remover um servidor de hora, selecione o servidor na lista e então use **Remover** (**Alt + E**).

Para adicionar um servidor de hora, selecione **Adicionar** (**Alt + D**).

Na tela seguinte, selecione **Servidor** (na verdade, essa opção já vem selecionada por padrão) e então, **Próximo** (**Alt + X**):

{% include image.html src="/files/2017/02/opensuse-server-config-17-pt.png" %}

Em **Endereço** informe o endereço do servidor de hora (aqui, usei `pool.ntp.br`) e depois selecione **OK**:

{% include image.html src="/files/2017/02/opensuse-server-config-18-pt.png" %}

Quando terminar de configurar o cliente NTP, selecione **OK**:

{% include image.html src="/files/2017/02/opensuse-server-config-19-pt.png" %}

O YaST salva as configurações, reinicia o cliente NTP (o que deve fazer com que a hora seja sincronizada) e retorna à tela principal.

Selecione **Sair**. De volta à linha de comando, execute o comando **date** para verificar se a data e a hora do servidor estão corretas:

```
# date -R
Sat, 18 Feb 2017 18:22:28 -0200
```

## Repositórios

[Durante a instalação][how-to-server], nós já selecionamos os repositórios de *software*. Porém, para agilizar a instalação, utilizamos apenas os que já vinham pré-configurados. Agora, podemos optar por utilizar os espelhos brasileiros, dos quais podemos baixar programas e atualizações mais rapidamente, por estarem mais próximos.

Volte para o YaST:

```
# yast
```

Na tela principal, à esquerda selecione a categoria **Software** e à direita selecione **Repositórios de software**. O YaST lista os repositórios configurados:

{% include image.html src="/files/2017/02/opensuse-server-config-20-pt.png" %}

Pelo visto, aquela configuração que fizemos durante a instalação se aplicou apenas à instalação. Vou reportar isso à equipe do openSUSE, acredito que o sistema deveria manter aquelas configurações.

Por ora, repita aquela configuração, deixando habilitados apenas os repositórios:

- **Repositório principal (OSS)**
- **Repositório principal de atualização**

Para desabilitar um repositório nessa lista, selecione-o usando as teclas de **setas para cima e para baixo** e selecione **Habilitado** com **Alt + D**. Caso a atualização automática também esteja habilitada para o repositório, desabilite-a com **Alt + U**. Volte para a lista usando **Shift + Tab**. Repita o processo até desabilitar todos os repositórios que não são do interesse.

Sua lista de repositórios deve ficar assim:

{% include image.html src="/files/2017/02/opensuse-server-config-21-pt.png" %}

Para configurar a cópia brasileira do repositório principal, selecione-o na lista e depois selecione **Editar** (**Alt + I**).

No campo **URL do repositório**, substitua o servidor `download.opensuse.org` por `opensuse.c3sl.ufpr.br`, de modo que a URL completa do repositório mude de:

```
http://download.opensuse.org/distribution/leap/42.2/repo/oss/
```

para:

```
http://opensuse.c3sl.ufpr.br/distribution/leap/42.2/repo/oss/
```

Quando terminar, selecione **OK**:

{% include image.html src="/files/2017/02/opensuse-server-config-22-pt.png" %}

Após baixar os metadados do repositório, o YaST apresentará a licença para uso do repositório, que é a [licença de uso do openSUSE Leap][opensuse-license] traduzida para o português brasileiro. Selecione **Próximo**. Você voltará para a lista de repositórios configurados.

Faça o mesmo para o repositório principal de atualização, de modo que a URL completa do repositório mude de:

```
http://download.opensuse.org/update/leap/42.2/oss/
```

para:

```
http://opensuse.c3sl.ufpr.br/update/leap/42.2/oss/
```

Caso queira utilizar os repositórios que contêm *softwares* não [livres][free-software] (a exemplo do [unrar][unrar], do [Opera][opera] e da [Steam][steam]), saiba que também há espelhos brasileiros deles:

- **Repositório principal (Non-OSS)**: contém *softwares* que, apesar de serem gratuitos para baixar, instalar e usar, não são [*softwares* de código aberto][oss] (a sigla Non-OSS vem do inglês *non open source sofware*).

```
http://opensuse.c3sl.ufpr.br/distribution/leap/42.2/repo/non-oss/
```

- **Repositório de atualização (Non-OSS)**: contém atualizações (*updates*) para os pacotes do repositório Non-OSS.

```
http://opensuse.c3sl.ufpr.br/update/leap/42.2/non-oss/
```

Aproveite para adicionar quaisquer [repositórios semi oficiais][semi-official-repos] ou [repositórios de terceiros][third-party-repos] que você queira utilizar.

Quando terminar, selecione **OK** para aplicar as configurações e voltar para a tela principal do YaST.

## Atualizações

Durante a [instalação do openSUSE][how-to-server], habilitamos o repositório de atualizações, de modo que o sistema já foi instalado com todas as atualizações disponíveis até aquele momento. Também já expliquei em outro *post* [como podemos atualizar o openSUSE][how-to-sw-updates]. Como no servidor não dispomos da interface gráfica, apenas da linha de comando, vamos usar o comando **zypper** para buscar atualizações.

Aqui, vou apenas relembrar os comandos que apresentei [naquele *post*][how-to-sw-updates].

Para atualizar a lista de pacotes disponíveis nos repositórios *online*:

```
# zypper ref
```

Para baixar e instalar atualizações disponíveis, se houver:

```
# zypper up
```

{% include image.html src="/files/2017/02/opensuse-server-config-23-pt.png" %}

Observe que pode ser necessário reiniciar o servidor após o fim da atualização.

## Pronto

Agora sim, feitas as configurações básicas, nosso servidor está pronto para uso.

Se não for mais utilizar o servidor, você pode encerrar a sessão SSH com o comando **exit**. Fazendo isso, você voltará à linha de comando do seu computador:

```
kamarada@novoservidor:~> exit
logout
Connection to 192.168.25.100 closed.
kamarada@desktop:~>
```

Se lembre de verificar de tempos em tempos se há atualizações para o seu servidor.

Siga o Projeto Linux Kamarada para descobrir coisas interessantes que você pode fazer com o openSUSE em servidores.

E... *have a lot a fun*! (divirta-se bastante)

[how-to-server]:                {%post_url 2017-01-15-levante-um-servidor-com-o-linux-opensuse-leap %}
[opensuse-leap-422]:            {%post_url 2016-11-16-opensuse-leap-42-2-versao-otima-para-profissionais-linux %}
[yast]:                         https://pt.opensuse.org/Portal:YaST
[windows]:                      https://www.microsoft.com/pt-br/windows/
[control-panel]:                http://www.techtudo.com.br/dicas-e-tutoriais/noticia/2015/06/como-acessar-o-painel-de-controle-antigo-no-windows-10.html
[dhcp]:                         https://pt.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol
[opensuse-doc-network]:         https://doc.opensuse.org/documentation/leap/reference/html/book.opensuse.reference/cha.basicnet.html
[rfc-1918]:                     https://pt.wikipedia.org/wiki/Rede_privada
[cidr]:                         http://www.hardware.com.br/livros/redes/cidr-mascaras-tamanho-variavel.html
[dns-benchmark]:                https://www.grc.com/dns/benchmark.htm
[gigadns]:                      https://www.gigadns.com.br
[google-public-dns-statistics]: https://tecnoblog.net/91521/google-dns/
[google-public-dns]:            https://developers.google.com/speed/public-dns/
[ssh]:                          https://pt.wikipedia.org/wiki/Secure_Shell
[how-to-ntp-client]:            {%post_url 2016-10-15-mantenha-a-hora-do-seu-computador-sempre-certa-com-o-ntp %}
[ntpbr]:                        http://ntp.br/
[opensuse-license]:             https://en.opensuse.org/openSUSE:License
[free-software]:                https://www.gnu.org/philosophy/free-sw.pt-br.html
[unrar]:                        http://www.rarlab.com
[opera]:                        http://www.opera.com/pt-br
[steam]:                        http://store.steampowered.com/
[oss]:                          https://pt.wikipedia.org/wiki/Software_de_código_aberto
[semi-official-repos]:          https://en.opensuse.org/Package_repositories#Semi_official_repositories
[third-party-repos]:            https://en.opensuse.org/Additional_package_repositories
[how-to-sw-updates]:            {%post_url 2016-10-21-mantenha-seu-sistema-sempre-atualizado %}

