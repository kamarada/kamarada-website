---
date: '2020-03-23 18:40:00 GMT-3'
image: '/files/2020/03/nomachine.jpg'
layout: post
nickname: 'nomachine'
title: 'Acesso remoto com NoMachine'
---

**Acessar remotamente** um computador significa usá-lo, controlá-lo à distância usando outro computador. Em algumas situações, o **acesso remoto** pode ser útil: para usar o computador do trabalho, estando em casa; para oferecer suporte a um colega ou cliente; ou mesmo para não ter que atravessar a casa para mexer em um computador que está na outra sala.

Existem alguns programas que podem ser usados para fazer acesso remoto. Hoje, veremos como usar o NoMachine.

{% include image.html src='/files/2020/03/nomachine.jpg' %}

O **[NoMachine]** é uma solução de acesso remoto desenvolvida pela empresa de mesmo nome, que tem sede em Luxemburgo e existe desde 2003. É [**multiplataforma**][cross-platform] (pode ser usada em vários sistemas operacionais, incluindo Linux, Windows, macOS, Android, e iOS), **gratuita** para uso pessoal e dispõe de opções pagas com mais recursos para empresas.

## Licença

Observe que o NoMachine não é um [_software_ livre][free-sw], e sim [proprietário][non-free-sw]. Se eu entendi certo a [licença de uso do NoMachine][licensing], os **usos individuais** do NoMachine podem ser feitos de forma **gratuita** (sem precisar comprar uma licença de _software_), como, por exemplo:

- de casa, acessar remotamente o computador que você usa no trabalho;
- do trabalho, acessar remotamente seu computador de casa; ou
- acessar outro computador na mesma rede local (seja em casa, ou no trabalho).

Nos exemplos acima, você também pode substituir "trabalho" por "universidade" ou outra instituição de ensino.

O que você **não** pode fazer com a versão gratuita do NoMachine são **usos comerciais**, como, por exemplo, acessar remotamente o computador de um cliente, realizar manutenção e cobrar por esse serviço. Para usos comerciais, você deve visitar o [_site_ do NoMachine][nomachine] e comprar uma versão comercial do programa.

## Cliente e servidor

Nesse tutorial, vamos chamar o computador que é acessado de **servidor** (ele é que disponibiliza, serve a área de trabalho) e o computador que faz o acesso, de **cliente**.

Por exemplo, se você está usando o computador de casa para acessar remotamente o computador do trabalho, o primeiro é o cliente e o segundo é o servidor.

Essas funções (cliente e servidor) não são fixas: com o NoMachine instalado, qualquer um dos computadores pode assumir qualquer uma dessas funções.

Assim, você poderia acessar remotamente o computador de casa a partir do computador do trabalho. Nesse caso, o primeiro seria o servidor e o segundo seria o cliente.

## Rede local

Observe que, a princípio, o NoMachine só é capaz de acessar remotamente computadores na mesma rede local.

Nos exemplos anteriores, para acessar remotamente o computador do trabalho, você precisaria se conectar à rede do trabalho usando uma [VPN] como uma das seguintes (consulte a disponibilidade junto ao administrador de rede ou equipe de TI da empresa):

- [Como conectar a uma VPN do OpenVPN][vpn]
- [Como conectar a uma VPN do GlobalProtect][globalprotect]

Já para acessar remotamente o computador de casa, você precisaria configurar redirecionamento de portas no seu roteador. Para verificar se isso é possível, assim como obter instruções sobre como fazer, consulte seu provedor de Internet.

Sem mais delongas, vamos por a mão na massa!

Como sempre, me refiro às distribuições [Linux Kamarada][kamarada-15.1] e [openSUSE], mas o uso do NoMachine em outras distribuições é possível e não deve ser muito diferente.

## Download

Baixe o pacote RPM do NoMachine em ambos os computadores: cliente e servidor. Uma alternativa é baixar o pacote em um e copiar para o outro (com um _pendrive_, por exemplo).

Para baixar o NoMachine, acesse seu _site_ em [nomachine.com][nomachine] e clique em **Transferir agora**:

{% include image.html src='/files/2020/03/nomachine-01-pt.jpg' %}

Dentre as opções de _download_, escolha o pacote RPM para Linux de 64 _bits_:

{% include image.html src='/files/2020/03/nomachine-02.jpg' %}

Na página seguinte, clique em **Download**:

{% include image.html src='/files/2020/03/nomachine-03.jpg' %}

Seu navegador provavelmente baixará o pacote RPM para a pasta **Downloads** (essa é a configuração padrão da maioria dos navegadores) ou perguntará onde deseja salvá-lo.

## Instalação

Quando o _download_ terminar, instale o NoMachine em ambos os computadores: cliente e servidor.

Para instalar o NoMachine, abra a pasta onde o pacote RPM foi baixado, clique com o botão direito do _mouse_ nele e clique em **Abrir com Instalar/Remover software**:

{% include image.html src='/files/2020/03/nomachine-04-pt.jpg' %}

O [Centro de Controle do YaST][yast] é iniciado e mostra informações sobre o pacote que será instalado:

{% include image.html src='/files/2020/03/nomachine-05-pt.jpg' %}

Clique em **Aceitar**.

O YaST informa que o pacote está corrompido, mas na verdade ele não conseguiu fazer a [verificação de autenticidade][gpg], já que o pacote não é assinado:

{% include image.html src='/files/2020/03/nomachine-06-pt.jpg' %}

Essa mensagem de erro é comum ao instalar um pacote RPM baixado manualmente (sem ser de um repositório configurado). Você pode seguramente clicar em **Ignorar**.

O pacote é instalado. Ao final, clique em **Concluir** para fechar o YaST:

{% include image.html src='/files/2020/03/nomachine-07-pt.jpg' %}

Perceba que o NoMachine adicionou um ícone na barra do topo do [GNOME]. Ele já está rodando e pronto para ser usado!

Note também que o pacote RPM do NoMachine instala os aplicativos cliente e servidor, assim como habilita o serviço do NoMachine em ambos os computadores — cliente e servidor — capacitando-os para exercer qualquer uma dessas funções.

O _download_ e a instalação no cliente e no servidor são iguais, mas a configuração e o uso são diferentes. Comecemos pelo computador que atuará como servidor.

## Verificando o endereço IP do servidor

Para conectar ao computador servidor, você precisa saber o endereço IP dele. O NoMachine fornece essa informação. Para obtê-la, clique no **ícone do NoMachine**, na barra do topo. Aparecerá um menu com algumas opções. Clique em **Mostrar o estado do serviço** (ou _Show the service status_, se estiver aparecendo em inglês para você, já mostrarei como traduzir):

{% include image.html src='/files/2020/03/nomachine-08-pt.jpg' %}

Anote o endereço IP do servidor (nesse exemplo, `10.0.3.7`):

{% include image.html src='/files/2020/03/nomachine-09-pt.jpg' %}

Alternativamente, se o ícone do NoMachine não estiver aparecendo para você na barra do topo do GNOME, abra o menu **Atividades**, no canto superior esquerdo da tela, digite `nomachine` e clique no ícone do **NoMachine Service** (serviço do NoMachine):

{% include image.html src='/files/2020/03/nomachine-10-pt.jpg' %}

Com isso, você chegará àquela mesma tela, onde obterá o endereço IP do servidor.

## Traduzindo a interface do servidor

Normalmente, o NoMachine detecta o idioma do sistema e já traduz sua interface. Quando isso não acontece, ele adota por padrão o idioma inglês.

Para traduzir a interface do NoMachine no computador servidor, na janela que você abriu, clique em **Preferências do servidor** (_Server preferences_), no canto superior direito da janela.

Na tela seguinte, clique em **Preferências do Player** (_Player preferences_):

{% include image.html src='/files/2020/03/nomachine-11.png' %}

Em seguida, selecione a aba **Aparência** (_Appearance_) e em **Texto** (_Text_) selecione **Português**:

{% include image.html src='/files/2020/03/nomachine-12.jpg' %}

É preciso reiniciar o NoMachine para que a tradução seja aplicada. Clique no _link_ que aparece na parte inferior da tela (**Reinicie NoMachine Monitor para que as alterações tenham efeito**, _Restart the NoMachine Monitor for changes to take effect_):

{% include image.html src='/files/2020/03/nomachine-13.jpg' %}

Feito isso, o NoMachine reiniciará traduzido e já iniciará traduzido das próximas vezes.

## Iniciando o acesso remoto no cliente

Para iniciar o NoMachine no computador cliente, abra o menu **Atividades**, digite `nomachine` e clique no ícone do **NoMachine**.

Na tela de boas vindas, marque a opção **Não mostrar novamente esta mensagem** (_Don't show this message again_) e clique em **Continuar** (_Continue_):

{% include image.html src='/files/2020/03/nomachine-14-pt.png' %}

O cliente do NoMachine automaticamente busca computadores na rede que estão rodando o serviço do NoMachine. Sua tela inicial mostra os servidores encontrados na rede, assim como quaisquer computadores que você já tenha acessado anteriormente:

{% include image.html src='/files/2020/03/nomachine-15-pt.png' %}

### Traduzindo a interface do cliente

Caso a interface do cliente esteja em inglês, você pode configurar a tradução de forma semelhante à do servidor: na tela inicial do cliente do NoMachine, clique em **Definições** (_Preferences_), no canto superior direito da janela.

Em seguida, selecione a aba **Aparência** (_Appearance_) e em **Texto** (_Text_) selecione **Português**.

Reinicie o NoMachine para que a tradução seja aplicada.

### Acessando um computador listado

Se o computador servidor que você deseja acessar aparece na lista, antes do primeiro acesso, selecione-o na lista e clique em **Editar**.

Digite um nome para esse computador (exemplo: `Computador do Trabalho`) e clique em **OK**:

{% include image.html src='/files/2020/03/nomachine-16-pt.jpg' %}

Agora sim: para acessar um servidor que está na lista, faça um duplo-clique nele.

Se é o seu primeiro acesso remoto a esse computador, o NoMachine apresenta algumas configurações. Na tela **Verificar a autenticidade do anfitrião**, clique em **Sim**:

{% include image.html src='/files/2020/03/nomachine-17-pt.png' %}

Informe o **Nome de Utilizador** (nome de usuário, _login_) e a **Palavra-Passe** (senha) da sua conta de usuário no computador servidor:

{% include image.html src='/files/2020/03/nomachine-18-pt.jpg' %}

Opcionalmente, marque a opção para lembrar a senha. Clique em **OK**.

Estabelecida a conexão, o NoMachine apresenta algumas telas com dicas para seu uso:

{% include image.html src='/files/2020/03/nomachine-19-pt.jpg' %}

Em cada tela, leia atentamente seu conteúdo, marque a opção **Não mostrar novamente esta mensagem** e clique em **OK**.

Finalmente, você verá a área de trabalho do computador servidor:

{% include image.html src='/files/2020/03/nomachine-20-pt.jpg' %}

Cada clique dentro dessa janela é feito no computador servidor, bem assim o que é digitado aparece lá. Você está literalmente usando o computador servidor, mas à distância, remotamente, sem estar sentado na frente dele.

Note que no computador servidor uma notificação indica que um acesso foi iniciado. Além disso, se alguém estiver de frente para ele e a tela dele estiver ligada, verá o que você faz.

### Acessando um computador manualmente

Na tela inicial do cliente do NoMachine, caso o computador servidor que você deseja acessar não apareça na lista, clique no botão **Novo**.

O NoMachine inicia um assistente para adicionar o computador à lista:

{% include image.html src='/files/2020/03/nomachine-21-pt.png' %}

Na primeira tela, deixe o **Protocolo** como está, em seu valor padrão (**NX**), e clique em **Continuar**.

Na segunda tela, no campo **Anfitrião**, informe o endereço IP ou nome de rede (_hostname_) do servidor e clique em **Continuar**:

{% include image.html src='/files/2020/03/nomachine-22-pt.png' %}

Na terceira tela, **Autenticação**, deixe selecionada a opção padrão **Palavra-Passe** e clique em **Continuar**:

{% include image.html src='/files/2020/03/nomachine-23-pt.jpg' %}

Na penúltima tela, caso você esteja usando um _proxy_ para se conectar à Internet, selecione a segunda opção e informe as configurações do _proxy_. Caso não esteja (caso da maioria das pessoas), deixe selecionada a opção padrão **Não usar um proxy** e clique em **Continuar**:

{% include image.html src='/files/2020/03/nomachine-24-pt.png' %}

Por fim, digite um nome para esse computador (por exemplo, `Computador do Trabalho`) e clique em **Concluído**:

{% include image.html src='/files/2020/03/nomachine-25-pt.png' %}

Concluído o assistente, a partir de agora esse computador aparece na tela inicial do cliente do NoMachine e você pode acessá-lo fazendo um duplo-clique nele.

## Configurando o firewall no servidor

Nos testes que eu fiz com o Linux Kamarada, que traz como _firewall_ padrão o [firewalld], mais adequado para _desktops_, tanto no cliente quanto no servidor não foi necessário fazer qualquer configuração adicional no _firewall_ para que o NoMachine funcionasse.

Se você estiver com problemas em se conectar ao servidor, deve ser suficiente permitir as portas 4000 TCP e 4011 a 4999 UDP no computador servidor.

Caso você use o [_firewall_ **iptables**][iptables] no computador servidor, para liberar essas portas, adicione essas linhas ao seu _script_ de configuração:

```
# NoMachine (portas 4000/TCP e 4011-4999/UDP)
iptables -A INPUT -p tcp --dport 4000 -j ACCEPT
iptables -A INPUT -p udp --match multiport --dports 4011:4999 -j ACCEPT
```

Caso precise de mais informações sobre as portas usadas pelo NoMachine, consulte:

- [NoMachine - Default ports used by NoMachine 4 or later][nomachine-firewall] (em inglês)

## Interrompendo e/ou desabilitando o serviço do NoMachine

Se você vai usar um computador apenas como cliente, pode interromper e/ou desabilitar o serviço do NoMachine nesse computador (não é obrigatório, mas você pode fazer).

Por exemplo, se você está usando o NoMachine para trabalho remoto, e imagina que a conexão será sempre do computador de casa (cliente) para o computador do trabalho (servidor), você pode desativar o serviço do NoMachine no computador de casa.

Se quiser interromper o serviço do NoMachine, clique no **ícone do NoMachine**, na barra do topo, e depois clique em **Fechar a aplicação NoMachine**:

{% include image.html src='/files/2020/03/nomachine-26-pt.jpg' %}

O NoMachine pergunta se deve iniciar o serviço da próxima vez em que o computador for ligado. Se quiser desabilitar o serviço, responda que **Não**:

{% include image.html src='/files/2020/03/nomachine-27-pt.jpg' %}

O NoMachine solicita a senha do administrador (usuário _root_), que você deve fornecer para que o serviço seja interrompido e/ou desabilitado.

## Iniciando manualmente o serviço do NoMachine

Se você interrompeu e/ou desabilitou o serviço do NoMachine, pode iniciá-lo manualmente a qualquer momento. Para isso, abra o aplicativo **NoMachine Service** e clique em **Iniciar o servidor**:

{% include image.html src='/files/2020/03/nomachine-28-pt.jpg' %}

Na mensagem de confirmação, clique em **Avançar**:

{% include image.html src='/files/2020/03/nomachine-29-pt.jpg' %}

Forneça a senha de administrador para iniciar o serviço.

## Referências

- [NoMachine - Introdução ao NoMachine][getting-started]
- [Setup NoMachine NX On Ubuntu - Vultr.com][vultr]
- [NoMachine - Default ports used by NoMachine 4 or later][nomachine-firewall]
- [NoMachine - How to shutdown NoMachine and disable the automatic startup at boot time][nomachine-shutdown]

É isso, pessoal! Espero que esse texto possa ajudá-los em seus acessos remotos. O aplicativo é bastante fácil de usar e intuitivo. Mas se surgir dúvidas, podem deixar comentários.

Até a próxima!

[nomachine]:            https://www.nomachine.com/pt-pt/
[cross-platform]:       https://pt.wikipedia.org/wiki/Multiplataforma
[free-sw]:              https://www.gnu.org/philosophy/free-sw.pt-br.html
[non-free-sw]:          https://pt.wikipedia.org/wiki/Software_proprietário
[licensing]:            https://www.nomachine.com/pt-pt/licensing-6
[vpn]:                  {% post_url pt/2017-07-07-como-conectar-a-uma-vpn-do-openvpn %}
[globalprotect]:        {% post_url pt/2020-03-17-como-conectar-a-uma-vpn-do-globalprotect %}
[kamarada-15.1]:        {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[opensuse]:             https://www.opensuse.org/
[yast]:                 http://yast.opensuse.org/
[gpg]:                  {% post_url pt/2018-10-06-verificacao-de-integridade-e-autenticidade-com-sha-256-e-gpg %}
[gnome]:                https://br.gnome.org/
[firewalld]:            https://firewalld.org/
[iptables]:             {% post_url pt/2019-11-18-proteja-se-com-o-firewall-iptables %}
[nomachine-firewall]:   https://www.nomachine.com/AR01L00770
[getting-started]:      https://www.nomachine.com/pt-pt/introdu%C3%A7%C3%A3o-ao-nomachine
[vultr]:                https://www.vultr.com/docs/setup-nomachine-nx-on-ubuntu
[nomachine-shutdown]:   https://www.nomachine.com/AR11P01005
