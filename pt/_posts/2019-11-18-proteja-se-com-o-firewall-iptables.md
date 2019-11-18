---
date: '2019-11-18 20:45:00 GMT-3'
layout: post
published: true
title: 'Proteja-se com o firewall iptables'
image: '/files/2019/11/iptables.jpg'
nickname: 'iptables'
---

Faz tempo que não falamos de servidores... Hoje vamos falar sobre **segurança** focando em servidores, mas serve também para _desktops_, seja em casa ou no trabalho. A Internet facilitou bastante acessar, enviar e compartilhar informações. Mas, como diz o ditado, "não há bônus sem ônus": junto das conveniências, a Internet trouxe também uma série de riscos e ameaças. Uma das soluções usadas para tentar prevenir ataques e invasões é o _firewall_.

O ***firewall*** ("parede de fogo", em inglês) é um _software_ que monitora os pacotes que trafegam entrando e saindo da rede e permite ou bloqueia pacotes específicos com base em regras de segurança predefinidas.

{% include image.html src="/files/2019/11/iptables.jpg" %}

Se você entende melhor usando analogias, pense no _firewall_ como o segurança de uma festa: ele confere o documento das pessoas que chegam e permite que entrem ou não com base em uma lista de convidados.

Também existem _firewalls_ na forma de _hardware_, ou soluções mistas de _hardware_ e _software_, mas comumente o _firewall_ é um _software_ instalado em um servidor ou _desktop_.

_Firewalls_ podem ser instalados em diversos lugares com diferentes finalidades, como:

- no servidor (por exemplo, um servidor _web_) ou no _desktop_ (por exemplo, uma estação de trabalho), para proteger o próprio servidor ou _desktop_;
- no servidor inserido entre a rede local e a Internet, para proteger a rede local; ou
- no servidor que faz roteamento entre diversas redes internas, para protegê-las.

{% include image.html src="/files/2019/11/firewall-places.jpg" %}

Com base na camada do [modelo TCP/IP][tcp-ip] em que atuam, _firewalls_ podem ser classificados em:

- **filtro de pacotes** (_packet filter_): atua nas camadas 2 (rede) e 3 (transporte), permite ou bloqueia pacotes com base em suas características (endereço/porta/interface de origem/destino, protocolo usado — se é TCP, UDP, ICMP, etc). É o tipo de _firewall_ mais antigo, simples e limitado, mas já oferece um nível de segurança significativo.
- **_firewall_ de aplicação**, mais conhecido como ***proxy***: atua na camada 4 (aplicação) e é capaz de bloquear pacotes com base em seu conteúdo. Por exemplo, um _proxy_ HTTP consegue bloquear o acesso a uma página se ela contiver determinada palavra no _link_, ou se ela é conhecida por apresentar pirataria, jogo, pornografia, _malware_, etc.

## Como é o firewall no Linux

No [Linux], o _firewall_ está inserido dentro do _[kernel]_ (núcleo do sistema) na forma de um módulo chamado `ip_tables`. Para configura-lo, usamos a ferramenta de linha de comando **[iptables]**.

Normalmente, as pessoas simplificam e chamam tanto o módulo do _kernel_ quanto a ferramenta de **iptables**, como se fossem a mesma coisa. Vamos fazer assim.

O **iptables** é, a princípio, um _firewall_ em nível de pacotes, mas dispõe de módulos que o permitem atuar na camada de aplicação. Ele vem instalado por padrão na maioria das distribuições Linux, incluindo o [Linux Kamarada][kamarada] e o [openSUSE]. Isso significa que podemos simplesmente começar a usar o **iptables**: não precisamos instalar nada antes.

A versão original do módulo `ip_tables` e da ferramenta **iptables** lida apenas com IPv4. Existem também os análogos `ip6_tables` e **[ip6tables]** para lidar com IPv6.

Algumas distribuições trazem uma ferramenta alternativa para configurar o _firewall_ que é o **[firewalld]**, que pode ser usada tanto pela linha de comando quanto pela interface gráfica (que algumas pessoas podem achar mais fácil de usar). Por padrão, o openSUSE vem com o **iptables** e o **firewalld** quando instalado em _desktops_, mas apenas com o **iptables** (sem o **firewalld**) quando instalado em servidores. O Linux Kamarada, que é focado em _desktops_ e usuários iniciantes de Linux, também traz o **iptables** e o **firewalld** instalados por padrão.

Hoje, vamos falar apenas do **iptables**. Oportunamente, podemos falar do **firewalld**, mas já mencionamos ele em um _post_, se você quiser ter uma ideia de como é a tela dele, veja:

- [Transmitindo do Linux para a TV com Chromecast][chromecast]

## Conceitos básicos

Para entender o funcionamento do **iptables**, você precisa saber o que são regras, _chains_, tabelas, _targets_ e política padrão.

As **regras** descrevem tipos de pacotes (endereço/porta/interface de origem/destino, protocolo usado, etc.) e o que fazer com esses pacotes (como bloquear ou deixar passar).

Uma ***chain*** é uma lista de regras (traduções possíveis seriam cadeia, corrente, sequência, algo nesse sentido, mas comumente se usa o termo em inglês mesmo). O **iptables** possui _chains_ predefinidas e o usuário também pode criar as suas próprias _chains_.

Já as **tabelas** são conjuntos de _chains_. O **iptables** tem 4 tabelas que são usadas em diferentes momentos, apresentadas a seguir: `filter`, `nat`, `mangle` e `raw`. Cada tabela contém _chains_ predefinidas do **iptables** e pode conter também _chains_ criadas pelo usuário. Hoje, vamos focar na tabela `filter`. Oportunamente, podemos falar mais sobre as outras tabelas.

- `filter`: essa é a tabela usada por padrão, contém 3 _chains_ predefinidas do **iptables**:
  - `INPUT`: consultada quando pacotes chegam à máquina
  - `OUTPUT`: consultada quando pacotes devem sair da máquina
  - `FORWARD`: consultada quando pacotes devem ser roteados através da máquina (encaminhados de uma interface de rede para outra ou de uma máquina para outra, passando pela máquina atual)
- `nat`: essa tabela é usada para fazer [NAT] (_Network Address Translation_), contém 3 _chains_ predefinidas do **iptables**: `PREROUTING`, `OUTPUT` e `POSTROUTING`
- `mangle`: essa tabela é usada para fazer alterações específicas em pacotes, como, por exemplo, modificar o tipo de serviço ([ToS]), contém 5 _chains_ predefinidas do **iptables**: `PREROUTING`, `OUTPUT`, `INPUT`, `FORWARD` e `POSTROUTING`
- `raw`: essa tabela é consultada pelo **iptables** antes das demais e é usada principalmente para dispensar pacotes do rastreamento de conexão, contém 2 _chains_ predefinidas do **iptables**: `PREROUTING` e `OUTPUT`.

Note que os nomes das _chains_ são sensíveis à capitalização (_case sensitive_). Portanto, `INPUT`, `input` e `Input`, por exemplo, seriam 3 _chains_ diferentes. As _chains_ predefinidas do **iptables** são sempre escritas em caixa alta (por exemplo, `INPUT`).

Quando recebe um pacote, o _firewall_ analisa as regras buscando uma regra que descreva aquele pacote. As regras são analisadas na ordem em que foram inseridas na _chain_. Quando o _firewall_ analisa uma regra, se o pacote não corresponde à descrição, ele passa para a próxima regra. Se o pacote corresponde, então o _firewall_ verifica na regra para onde enviar o pacote, que é o ***target*** (alvo).

O _target_ pode ser o nome de uma _chain_ do usuário — nesse caso, o _firewall_ vai continuar analisando as regras dessa _chain_ — ou pode ser um desses valores especiais, que informam ao **iptables** o que fazer com o pacote imediatamente:

- `ACCEPT`: aceitar o pacote, deixá-lo (permiti-lo) passar
- `DROP`: descartar (excluir, ignorar) o pacote — na prática, significa impedi-lo de passar
- `QUEUE`: passar o pacote para um programa do espaço de usuário (fora do _kernel_), que irá processar o pacote
- `RETURN`: interrompe o processamento das regras da _chain_ atual e retorna o processamento das regras para a regra seguinte na _chain_ anterior (a que chamou a _chain_ atual)

Por fim, se o _firewall_ já analisou todas as regras da _chain_ e não encontrou uma regra que descreve o pacote, ele vai adotar a **política padrão** predefinida para aquela _chain_, que pode ser somente um dos quatro _targets_ especiais acima.

Há ainda o _target_ `REJECT`, que é semelhante ao `DROP`, mas só pode ser usado em regras das _chains_ da tabela `filter`. Falaremos mais sobre o _target_ `REJECT` adiante.

Parece confuso? Não se preocupe: vamos meter a mão na massa e tudo vai ficar mais claro.

## Listando as regras em uso

Será que nosso _firewall_ já possui regras antes mesmo de adicionarmos nossa primeira regra? Vejamos!

Para listar as regras atualmente em uso pelo **iptables**, execute o comando a seguir:

```
# iptables -L
```

Adianto que hoje só usaremos a interface de linha de comando e praticamente todos os comandos serão executados como administrador (usuário _root_). Suponho que você já possua certa familiaridade com o Linux e com o [terminal].

A saída do comando acima deve ser algo parecido com:

```
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```

Essa é a configuração padrão do **iptables**: a política padrão (_policy_) de todas as _chains_ é aceitar (`ACCEPT`) e elas não possuem regras de antemão. Ou seja, qualquer pacote que deseja entrar no sistema ou sair dele, o **iptables** deixa passar.

Se a saída para você é diferente, é possível que o administrador já tenha adicionado regras, que a distribuição que você usa tenha outra configuração padrão, ou que você esteja usando o **firewalld**, que cria suas próprias _chains_ no **iptables**. Veremos como excluir essas regras.

Por padrão, são listadas as regras da tabela `filter`. Para listar as regras de outra tabela, adicione o parâmetro `-t` (ou `--table`) seguido do nome da tabela. Por exemplo:

```
# iptables -t nat -L
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination         

Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination
```

Caso você queira limitar a exibição a uma _chain_, informe o seu nome no final. Exemplo:

```
# iptables -t mangle -L FORWARD
Chain FORWARD (policy ACCEPT)
target     prot opt source               destination
```

## Excluindo todas as regras em uso

Como a ordem das regras importa para o **iptables**, é comum iniciar sua configuração excluindo quaisquer regras que estejam em uso.

<div class="alert alert-danger" role="alert">
Não teste os comandos desse tutorial em um servidor que você acessa remotamente via SSH: você corre o risco de perder o acesso ao servidor.
</div>

<div class="alert alert-info" role="alert">
{% markdown %}
Para acompanhar este tutorial, recomendo que você use uma máquina virtual. Com isso, você não modifica as configurações do seu servidor ou _desktop_.

Para mais informações, leia:

- [VirtualBox: a forma mais fácil de conhecer o Linux sem precisar instalá-lo](https://kamarada.github.io/pt/2019/10/08/virtualbox-a-forma-mais-facil-de-conhecer-o-linux-sem-precisar-instala-lo/)
{% endmarkdown %}
</div>

Para excluir todas as regras, use o comando:

```
# iptables -F
```

Na verdade, por padrão, são excluídas as regras de todas as _chains_ da tabela `filter`.

Nesse sentido, o comando `iptables -F` é semelhante ao comando `iptables -L`:

- para excluir as regras de outra tabela, adicione o parâmetro `-t` seguido do nome da tabela, e
- para excluir as regras apenas de uma _chain_ específica, adicione seu nome ao final.

Exemplos:

```
# iptables -t nat -F
# iptables -t mangle -F POSTROUTING

```

## Excluindo todas as chains do usuário

Além de excluir as regras, também é comum iniciar excluindo as _chains_ do usuário.

Para excluir todas as _chains_ do usuário presentes na tabela `filter`, use o comando:

```
# iptables -X
```

Ainda que você mesmo não tenha criado nenhuma _chain_, se sua distribuição usa o **firewalld**, com esse comando você exclui as _chains_ criadas pelo **firewalld**.

Da mesma forma, para especificar uma tabela, use o parâmetro `-t`, e para excluir apenas uma _chain_ específica, adicione seu nome ao final.

Note que não é possível excluir as _chains_ do **iptables**, apenas as do usuário.

Resumindo, para fazer uma limpeza completa no **iptables**, execute os comandos:

```
# iptables -F
# iptables -X
# iptables -t nat -F
# iptables -t nat -X
# iptables -t mangle -F
# iptables -t mangle -X
# iptables -t raw -F
# iptables -t raw -X
```

Depois dessa limpeza, se você listar as regras (`iptables -L`), certamente verá a configuração padrão do **iptables**.

## Adicionando regras

Agora sim vamos à parte mais interessante: vamos adicionar nossa primeira regra ao **iptables**. Como exemplo, vamos adicionar uma regra que bloqueia o acesso à própria máquina (`127.0.0.1` ou `localhost`).

Antes, execute um **[ping]** e certifique-se de que funciona (use **Ctrl + C** para interrompê-lo):

```
$ ping 127.0.0.1
PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.036 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.106 ms
^C
--- 127.0.0.1 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1010ms
rtt min/avg/max/mdev = 0.036/0.071/0.106/0.035 ms
```

Agora, adicione a regra:

```
# iptables -A INPUT -d 127.0.0.1 -j DROP
```

Leiamos esse comando por partes:

- como nos comandos anteriores, poderíamos usar o parâmetro `-t` para especificar uma tabela, como não fizemos isso, usamos a tabela `filter` por padrão
- o parâmetro `-A` inicia a adição de uma nova regra
- `INPUT` é a _chain_ onde a regra está sendo adicionada — nesse caso, estamos interessados nos pacotes que chegam à máquina
- o parâmetro `-d` (poderia ser também `--dst` ou `--destination`) indica o destino — nesse caso, filtramos pacotes com destino a `127.0.0.1` (a própria máquina)
- o parâmetro `-j` (poderia ser também `--jump`) indica o que fazer com o pacote (o _target_) — nesse caso, descartar (`DROP`).

Agora, depois de adicionada a regra, tente novamente usar o **ping**:

```
$ ping 127.0.0.1
PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
^C
--- 127.0.0.1 ping statistics ---
2 packets transmitted, 0 received, 100% packet loss, time 1006ms
```

Viu só? Não funcionou. O **iptables** está bloqueando esse pacote com base na regra que acabamos de adicionar.

<div class="alert alert-warning" role="alert">
{% markdown %}
**Observação:** a regra acima foi usada apenas para fins didáticos. Nunca bloqueie o acesso à própria máquina, a menos que saiba o que está fazendo, pois muitos aplicativos utilizam soquetes TCP para realizar conexões.
{% endmarkdown %}
</div>

Dito isso, vamos desfazer a adição da regra acima antes de continuar:

```
# iptables -F
```

## Definindo a política padrão de uma chain

Entre a limpeza das tabelas e a adição das regras propriamente ditas, eu costumo definir a política padrão das _chains_. Usando o comando `iptables -L`, vimos que a configuração padrão do **iptables** é permitir todo o tráfego em todas as _chains_ (política padrão de `ACCEPT`).

Normalmente, quando adotamos uma política padrão permissiva (`ACCEPT`) para uma _chain_, adicionamos regras restritivas (`DROP` ou `REJECT`) a essa _chain_, ou seja, as regras determinam o que bloquear, e por padrão, o que não é bloqueado, é permitido.

Já quando adotamos uma política padrão restritiva (`DROP`) para uma _chain_, adicionamos regras permissivas (`ACCEPT`) a essa _chain_, ou seja, as regras determinam o que permitir, e por padrão, o que não é permitido, é bloqueado.

Para a maioria das _chains_, uma política padrão permissiva (`ACCEPT`) é considerada insegura. Ao menos para a _chain_ `INPUT`, considere usar uma política padrão restritiva (`DROP`). Desse modo, você só precisa permitir os serviços considerados seguros e não corre o risco de esquecer de bloquear algum acesso não desejado.

Para mudar a política padrão de uma _chain_, use o comando `iptables -P` seguido do nome da _chain_ e do _target_ que deve ser a política padrão. Exemplos:

```
# iptables -P FORWARD DROP
# iptables -P INPUT DROP
# iptables -P OUTPUT ACCEPT
```

Se você executar os três comandos acima, talvez algo pare de funcionar. Por exemplo: o navegador não consegue acessar _sites_. Isso acontece porque, embora a requisição seja enviada (a política padrão de `OUTPUT` é `ACCEPT`), a resposta é descartada (a política padrão de `INPUT` é `DROP`). Para prevenir casos assim, eu costumo usar a seguinte regra:

```
# iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```

Trata-se de uma "receita pronta" que eu encontrei na Internet para aceitar conexões que já foram estabelecidas previamente. Com essa regra, ao notar que o pacote que chega é uma resposta a uma requisição feita anteriormente pela própria máquina (o pacote que chega não é uma tentativa de conexão iniciada por outra máquina), o **iptables** aceita o pacote.

Note que políticas padrão são configuradas apenas para _chains_ predefinidas do **iptables** (_chains_ definidas pelo usuário não possuem política padrão).

## Descrevendo pacotes

Vejamos alguns parâmetros que podemos usar para descrever pacotes na hora de criar regras para o **iptables**, assim como exemplos de regras válidas.

<div class="alert alert-warning" role="alert">
{% markdown %}
**Observação:** as regras a seguir são apenas exemplos, você não deve copiar e colar no seu servidor ou _desktop_, mas adaptar os comandos conforme a sua necessidade.
{% endmarkdown %}
</div>

- **destino:** já vimos o parâmetro `-d` (ou `--dst`, ou `--destination`), que permite filtrar um pacote pelo seu destino, que pode ser expresso na forma de:
  - o endereço IP de um _host_ (por exemplo, `157.240.12.35`);
  - o endereço IP de uma rede/sub-rede acompanhado da máscara de rede, em notação tradicional (por exemplo, `157.240.12.0/255.255.255.0`) ou [CIDR]  (`157.240.12.0/24`);
  - nome de rede (_hostname_, por exemplo, `www`); ou
  - nome de domínio completo (do inglês _fully qualified domain name_ ou [FQDN], por exemplo, `www.facebook.com`).

```
# iptables -A OUTPUT -d 157.240.12.35 -j REJECT
```

(leia-se: todos os pacotes saindo desta máquina com destino a `157.240.12.35` devem ser rejeitados — é um dos endereços IP de [www.facebook.com][facebook], note que na verdade bloquear o acesso ao [Facebook] não é tão simples assim, essa regra é apenas um exemplo)

<div class="alert alert-warning" role="alert">
{% markdown %}
**Observação:** embora você possa usar nomes, prefira usar endereços IP (imagine o que pode acontecer se seu servidor DNS sair do ar — ou pior, se for invadido).
{% endmarkdown %}
</div>

- **origem:** de forma análoga, o parâmetro `-s` (ou `--src`, ou `--source`) permite filtrar um pacote pela sua origem, aceita os mesmos formatos do parâmetro `-d`.

```
# iptables -A INPUT -s 222.187.224.200 -j DROP
```

(todos os pacotes tentando entrar nesta máquina vindo de `222.187.224.200` devem ser descartados — uma vez, esse endereço IP estava tentando atacar um servidor que eu administrava, não sei se esse endereço ainda é usado para ataques)

- **interface de origem:** o parâmetro `-i` (ou `--in-interface`) permite filtrar um pacote pela interface de rede na qual ele é recebido (por exemplo, `eth0`).

```
# iptables -A INPUT -i lo -j ACCEPT
```

(todos os pacotes recebidos na [interface de _loopback_][loopback] — `lo` — devem ser aceitos)

- **interface de destino:** de forma análoga, o parâmetro `-o` (ou `--out-interface`) permite filtrar um pacote pela interface de rede pela qual ele deve ser enviado.

```
# iptables -A FORWARD -i eth0 -o eth1 -j DROP
```

(descartar todos os pacotes que tentam passar da interface `eth0` para a interface `eth1`)

- **protocolo:** o parâmetro `-p` (ou `--protocol`) permite filtrar um pacote pelo protocolo (TCP, UDP ou ICMP, pode ser escrito em maiúsculas ou minúsculas).

```
# iptables -A INPUT -p icmp -j ACCEPT
```

(aceitar todos os pacotes do protocolo ICMP — por exemplo, **ping**)

- **porta de origem:** o parâmetro `--sport` (ou `--source-port`) permite filtrar um pacote pela porta de origem, só pode ser usado após `-p tcp` ou `-p udp`.

- **porta de destino:** o parâmetro `--dport` (ou `--destination-port`) permite filtrar um pacote pela porta de destino, só pode ser usado após `-p tcp` ou `-p udp`.

```
# iptables -A INPUT -p tcp --dport 22 -i eth0 -j ACCEPT
# iptables -A INPUT -p udp --dport 22 -i eth0 -j ACCEPT
```

(aceitar todas as requisições TCP e UDP para a porta 22 recebidas na interface `eth0` — a porta 22 é a porta usada por padrão pelo serviço SSH)

**Observação:** todos os parâmetros acima aceitam negação usando exclamação (`!`) antes.

```
# iptables -A INPUT -p tcp --dport 22 ! -i eth0 -j DROP
# iptables -A INPUT -p udp --dport 22 ! -i eth0 -j DROP
```

(descartar todas as requisições TCP e UDP para a porta 22, **exceto** as recebidas na interface `eth0`)

Conhecendo esses parâmetros, você já consegue escrever várias regras, mas o **iptables** fornece ainda mais opções. Para a lista completa, leia a página de manual (_man page_) do **iptables**:

```
$ man iptables
```

Ou, se preferir ler no navegador:

- [iptables(8) - Linux man page][man]

A seguinte lista também pode ser útil enquanto estiver criando regras:

- [Lista de portas dos protocolos TCP e UDP - Wikipédia][port-numbers]

## Qual é a diferença entre DROP e REJECT?

A essa altura, você pode estar se perguntando: qual é a diferença entre `DROP` e `REJECT`?

A semelhança é que em ambos os _targets_ o pacote é bloqueado (o **iptables** não deixa o pacote passar). A diferença vai além da tradução (aqui, estou usando "descartar" para `DROP` e "rejeitar" para `REJECT`). A diferença entre `DROP` e `REJECT` é que no caso do `DROP`, o pacote é silenciosamente descartado pelo **iptables**, que não envia uma resposta ao remetente (que "se sente" ignorado), já no caso do `REJECT`, o **iptables** descarta o pacote, mas também envia uma resposta ao remetente (que pode compreender que aquela requisição não é permitida).

Você pode ver a diferença entre `DROP` e `REJECT` esquematizada na figura do início do _post_.

Façamos um teste prático. Adicione a seguinte regra, usando `DROP`:

```
# iptables -A OUTPUT -d kamarada.github.io -j DROP
```

Agora tente acessar o _site_ [kamarada.github.io](https://kamarada.github.io/) usando o navegador (abra esse _link_ em uma nova aba). Após muito tempo tentando conectar, o navegador informa que não foi possível acessar o _site_ porque ele demorou muito para responder:

{% include image.html src="/files/2019/11/iptables-drop-pt.jpg" %}

Exclua essa regra (para excluir apenas uma regra específica, você pode repeti-la trocando `-A` por `-D`) e adicione outra, usando `REJECT`:

```
# iptables -D OUTPUT -d kamarada.github.io -j DROP
# iptables -A OUTPUT -d kamarada.github.io -j REJECT
```

Agora atualize aquela aba. O navegador responde de imediato, informando que a conexão foi **recusada**:

{% include image.html src="/files/2019/11/iptables-reject-pt.jpg" %}

A depender da sua intenção, pode ser mais interessante usar um ou outro. Por exemplo, eu usaria o `REJECT` para bloquear o acesso a um _site_ pela rede interna, porque para o usuário apareceria uma mensagem mais enfática, mas para bloquear um acesso indevido pelo mundo exterior eu usaria o `DROP`, porque um eventual atacante não receberia resposta e se sentiria "dando tiros no escuro".

## Salvando e restaurando regras

As regras do **iptables** são armazenadas no _kernel_ e começam a ser aplicadas assim que os comandos são executados, mas são perdidas se o sistema é reiniciado.

Dois comandos que você pode usar para salvar e restaurar as regras são o **[iptables-save]** e o **[iptables-restore]**, respectivamente.

Para salvar as regras atualmente em uso, execute:

```
# iptables-save > /caminho/nome_do_arquivo
```

Para restaurar as regras de um arquivo criado anteriormente, execute:

```
# iptables-restore < /caminho/nome_do_arquivo
```

## Levantando o firewall com shell script

Embora os comandos **iptables-save** e **iptables-restore** sejam práticos, a forma mais comum de configurar o **iptables** (limpar as regras, definir a política padrão, adicionar regras) é criar um _shell script_. Fica mais legível e fácil de documentar e dar manutenção.

Por exemplo, crie um _script_ `meu-firewall.sh` na pasta `/usr/local/sbin/` usando seu editor de texto preferido (vou usar o **[nano]**):

```
# nano /usr/local/sbin/meu-firewall.sh
```

Copie e cole o seguinte conteúdo (**dica:** para colar no terminal, use **Ctrl + Shift + V**):

```
#!/bin/bash
set -ex

# Limpar as regras
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -t raw -F
iptables -t raw -X

# Politica padrao: bloquear todas as conexoes de entrada
iptables -P FORWARD DROP
iptables -P INPUT DROP
iptables -P OUTPUT ACCEPT

# Aceitar conexoes estabelecidas previamente
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Aceitar tudo vindo da interface de loopback
iptables -A INPUT -i lo -j ACCEPT

# SSH (porta 22/TCP,UDP)
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p udp --dport 22 -j ACCEPT

# HTTP (porta 80/TCP)
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

<div class="alert alert-warning" role="alert">
{% markdown %}
Esse _script_ é um modelo bem simples, pensado para um servidor _web_. Lembre-se de adaptar os comandos conforme a sua necessidade.
{% endmarkdown %}
</div>

Conceda permissão para executar o _script_ apenas para o usuário _root_:

```
# chmod 744 /usr/local/sbin/meu-firewall.sh
```

Pronto! Agora, quando quiser levantar o _firewall_, é só chamar o _script_:

```
# /usr/local/sbin/meu-firewall.sh
```

Quando precisar mudar as regras do _firewall_, edite o _script_ e execute-o de novo.

## Levantando o firewall no boot

Pro nosso _firewall_ ficar perfeito, só falta um detalhe: as regras devem ser aplicadas já durante o _boot_, quando o sistema operacional, a rede e os serviços são iniciados.

Em distribuições com **[systemd]**, como é o caso do openSUSE e do Linux Kamarada, a melhor forma de executar um _script_ como o `meu-firewall.sh` durante o _boot_ é criar um serviço.

Crie um serviço do **systemd** chamado `meu-firewall.service` na pasta `/etc/systemd/system/` usando seu editor de texto preferido:

```
# nano /etc/systemd/system/meu-firewall.service
```

Copie e cole o seguinte conteúdo:

```
[Unit]
After=network.target

[Service]
ExecStart=/usr/local/sbin/meu-firewall.sh

[Install]
WantedBy=default.target
```

Ajuste as permissões do arquivo:

```
# chmod 664 /etc/systemd/system/meu-firewall.service
```

Instale e habilite o serviço, para que ele seja iniciado no próximo _boot_:

```
# systemctl daemon-reload
# systemctl enable meu-firewall
```

Se quiser testar seu serviço antes de reiniciar, execute:

```
# systemctl start meu-firewall
# iptables -L
```

Pronto! Da próxima vez em que você reiniciar o sistema, o **systemd** se encarregará de iniciar o serviço que executa o _script_ que configura o **iptables**.

## Referências

Espero que esse texto tenha sido útil. Se você o leu todo até aqui, já dispõe de conhecimento suficiente para implantar o **iptables** em seus servidores. Se quiser saber mais, leia:

- [Guia Foca GNU/Linux - Firewall iptables][guiafoca]
- [O que é firewall? - Conceito, tipos e arquiteturas - InfoWester][infowester]
- [IPTables - Desvendando o mistério - Viva o Linux][vivaolinux]
- [Basic iptables Tutorial - SUSE Communities][suse]
- [iptables(8) - Linux man page][man]
- [Linux Iptables block incoming access to selected or specific ip address - nixCraft][cyberciti]
- [DROP ou REJECT no iptables? - Viva o Linux][drop-vs-reject]
- [How to automatically execute shell script at startup boot on systemd Linux - LinuxConfig.org][linuxconfig]

[tcp-ip]:           https://pt.wikipedia.org/wiki/TCP/IP
[linux]:            https://www.vivaolinux.com.br/linux/
[kernel]:           https://www.kernel.org/
[iptables]:         https://netfilter.org/projects/iptables/
[kamarada]:         {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[openSUSE]:         https://www.opensuse.org/
[ip6tables]:        https://linux.die.net/man/8/ip6tables
[firewalld]:        https://firewalld.org/
[chromecast]:       {% post_url pt/2019-03-26-transmitindo-do-linux-para-a-tv-com-chromecast %}
[nat]:              https://pt.wikipedia.org/wiki/Network_address_translation
[tos]:              https://pt.wikipedia.org/wiki/ToS
[terminal]:         https://kamarada.github.io/guiadoopensuse/terminal
[ping]:             https://linux.die.net/man/8/ping
[cidr]:             https://doc.m0n0.ch/quickstartpc/intro-CIDR.html
[fqdn]:             https://pt.wikipedia.org/wiki/FQDN
[facebook]:         https://www.facebook.com/
[loopback]:         https://pt.wikipedia.org/wiki/Loopback
[man]:              https://linux.die.net/man/8/iptables
[port-numbers]:     https://pt.wikipedia.org/wiki/Lista_de_portas_dos_protocolos_TCP_e_UDP
[iptables-save]:    https://linux.die.net/man/8/iptables-save
[iptables-restore]: https://linux.die.net/man/8/iptables-restore
[nano]:             https://www.nano-editor.org/
[systemd]:          https://freedesktop.org/wiki/Software/systemd/
[guiafoca]:         https://guiafoca.org/cgs/guia/avancado/ch-fw-iptables.html
[infowester]:       https://www.infowester.com/firewall.php
[vivaolinux]:       https://www.vivaolinux.com.br/artigo/IPTables-Desvendando-o-misterio
[suse]:             https://www.suse.com/c/basic-iptables-tutorial/
[cyberciti]:        https://www.cyberciti.biz/tips/howto-block-ipaddress-with-iptables-firewall.html
[drop-vs-reject]:   https://www.vivaolinux.com.br/dica/DROP-ou-REJECT-no-iptables
[linuxconfig]:      https://linuxconfig.org/how-to-automatically-execute-shell-script-at-startup-boot-on-systemd-linux
