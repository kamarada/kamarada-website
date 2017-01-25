---
date: 2017-01-15 21:15:00
image: '/files/2017/01/opensuse-server-01.jpg'
layout: post
published: true
nickname: 'how-to-server'
title: 'Levante um servidor com o Linux openSUSE Leap'
---

Quando eu digo que o [openSUSE Leap][opensuse-leap-422] é uma distribuição Linux madura e estável, não me refiro ao conceito de estabilidade de algumas distribuições: *softwares* antigos congelados exaustivamente testados e corrigidos. Cada nova versão do openSUSE Leap traz *softwares* bem recentes (lançados dentro do mesmo mês ou ano) e que funcionam bem em conjunto. Isso é fruto da tecnologia e do esforço empregados no processo de desenvolvimento da distribuição, que funciona bem em computadores domésticos e estações de trabalho, e não poderia ser diferente em servidores.

{% include image.html src="/files/2017/01/opensuse-server-01.jpg" %}

Nesse *post*, você verá a instalação e as configurações básicas de um servidor com o openSUSE Leap. O passo a passo faz lembrar [aquele][how-to-install] da instalação em um *desktop*, só difere um pouco em função das diferenças entre esses dois tipos de computadores e do modo texto, que é preferível para a instalação em servidores.

## Antes da instalação

Antes de começar, aqui vão algumas coisas às quais você deve se atentar.

O openSUSE Leap pode ser instalado nos mais diversos tipos de *hardware* existentes. Processadores de 32 *bits* são uma exceção à regra: [eles não são mais suportados][opensuse-leap-32bit], mas servidores com processadores de 64 *bits* já são bastante comuns.

Eu poderia falar dos [requisitos mínimos][system-requirements] para utilização do openSUSE. Porém, se ele já roda com tranquilidade em *desktops*, o que dirá em servidores, cujos números (frequência ou *clock* do processador, quantidade de núcleos ou *cores*, memória RAM e disco rigido, etc.) são geralmente bem maiores. Linux, em geral, é um sistema leve.

Arrisco aqui recomendar uma configuração para o que considero "um bom começo":

- 2GB de memória RAM;
- 10GB de disco rígido; e
- se possível, processador com 2 núcleos (processador *dual core*).

Como as redes existentes em todo o mundo diferem bastante em termos de tamanho e necessidades, é difícil recomendar com precisão como você deve dimensionar o *hardware* do seu servidor. Note que a configuração que eu sugeri acima pode ser conseguida até mesmo com um computador comum e pode ser mais que suficiente para alguns serviços, mas insuficiente para outros.

Se o novo servidor vai apenas servir DHCP na rede, a configuração acima chega a ser um exagero. Se o novo servidor será *firewall* de uma rede doméstica ou de uma pequena empresa, a configuração acima também é suficiente. No entanto, se ele atuará como servidor de arquivos ou servidor *web*, levando em consideração a quantidade de acessos simultâneos e o tamanho dos arquivos, páginas ou *downloads* que se deseja servir, a configuração acima pode ser insuficiente.

Como recomendação geral, sempre tente dimensionar seu servidor além do necessário para hoje. Por exemplo, se você estima que 9GB são necessários para armazenar os arquivos que você tem hoje, é errado pensar que a configuração acima (10GB) é satisfatória. Seu novo servidor de arquivos deverá possuir 20GB de disco rígido ou mais para que possa atender à demanda por alguns anos.

Se você vai instalar o openSUSE Leap em uma máquina virtual, é fácil redimensionar o *hardware* conforme a necessidade. O openSUSE pode ser instalado em cima de vários [virtualizadores][virtualization], dentre os quais o [XenServer][xenserver] e o [VMware vSphere][vmware-vsphere].

Deixo o [*link* para os requisitos mínimos do openSUSE][system-requirements] para quem tiver a curiosidade de conferi-los (já falei [aqui][how-to-install] dos requisitos para utilzação em *desktops*).

Certifique-se de que seu servidor esteja conectado à Internet e protegido contra quedas de energia por um *nobreak*. Vamos começar.

## Começando

Como vamos instalar o openSUSE Leap em um servidor, recomendo que você utilize a mídia para instalação pela rede em vez do LiveDVD do Projeto Linux Kamarada (não que ele não sirva para essa finalidade, só não é a mídia mais apropriada).

Para obter a mídia para instalação pela rede, acesse o *site* do openSUSE em [www.opensuse.org][opensuse], passe o *mouse* em **Leap** e clique em **Instale o Leap**:

{% include image.html src="/files/2017/01/opensuse-server-02-pt.jpg" %}

Onde há **Rede**, clique em **Link direto**:

{% include image.html src="/files/2017/01/opensuse-server-03-pt.jpg" %}

Selecione **Download** e clique em **OK**:

{% include image.html src="/files/2017/01/opensuse-server-04-pt.jpg" %}

O *download* da mídia para instalação pela rede vai começar:

{% include image.html src="/files/2017/01/opensuse-server-05-pt.jpg" %}

Não deve demorar muito, visto que essa mídia contém apenas um sistema mínimo, que serve somente para ligar o servidor, baixar e iniciar o instalador.

Quando o *download* terminar, vamos verificar a integridade da mídia: ainda na [página de *downloads* do openSUSE Leap 42.2][opensuse-leap-422-download], onde há **Rede**, clique em **Soma de verificação SHA256**. O arquivo contendo a soma de verificação deve ser baixado na mesma pasta onde foi baixada a mídia.

Então, usando o terminal, acesse essa pasta e execute o comando:

```
$ sha256sum -c openSUSE-Leap-42.2-NET-x86_64.iso.sha256
```

Esse comando deve retornar algo como:

```
openSUSE-Leap-42.2-NET-x86_64.iso: SUCESSO
```

Indicando que a mídia baixada corresponde à original disponibilizada, ou seja, o *download* não foi corrompido.

Usando a imagem ISO baixada, grave um CD ou DVD (você pode utilizar as instruções disponíveis [aqui][how-to-livedvd]) e insira-o na unidade de DVD do seu servidor. Se seu servidor é uma máquina virtual, "insira" a imagem ISO baixada na unidade de DVD virtual do virtualizador. Após isso, em ambos os casos, reinicie o servidor.

Em instantes, você verá o menu do gerenciador de inicialização (*bootloader*):

{% include image.html src="/files/2017/01/opensuse-server-06.jpg" %}

Tecle **F2** para mudar o Idioma (*Language*). No menu que aparece, use as teclas de **setas** para selecionar **Português (Brasil)** e tecle **Enter**:

{% include image.html src="/files/2017/01/opensuse-server-07-pt.jpg" %}

Perceba que agora o menu está em português.

De forma semelhante, tecle **F3** para mudar o **Modo de Vídeo** para **Modo de Texto**:

{% include image.html src="/files/2017/01/opensuse-server-08-pt.jpg" %}

Tecle **F4**, entre em **Configuração da Rede** e selecione **DHCP**:

{% include image.html src="/files/2017/01/opensuse-server-09-pt.png" %}

Em se tratando de um servidor, é mais comum que a rede seja configurada manualmente. Porém, experiência própria, eu não conseguir configurar a rede manualmente nessa tela, porque no campo **Endereço IP com prefixo de rede** eu não consegui digitar a barra (**/**) para informar a máscara de rede (por exemplo: `192.168.25.100/24`). Provavelmente isso aconteceu porque o gerenciador de inicialização não reconheceu corretamente o leiaute do teclado. Sendo assim, optei por simplificar e usar o DHCP agora, deixando a configuração da rede para depois.

Por fim, no menu do gerenciador de inicialização, selecione **Instalação** e tecle **Enter** para iniciar a instalação.

## 1) Idioma, leiaute de teclado e licença

Na primeira tela da instalação, você será apresentado às configurações de idioma e leiaute (*layout*) de teclado, assim como à [licença de uso do openSUSE Leap][opensuse-license]:

{% include image.html src="/files/2017/01/opensuse-server-10-pt.jpg" %}

Verifique se as configurações de idioma e teclado estão corretas.

No modo texto, você não dispõe do *mouse* para interagir com o instalador, apenas do teclado. Para passar de um campo para o seguinte, você pode utilizar a tecla **Tab**.

Observe que cada campo possui em seu nome uma letra destacada (**I**dioma, **L**ayout de teclado, **T**este de teclado, Pró**x**imo, etc.). Você também pode selecionar um campo pressionando a tecla **Alt** junto da letra destacada em seu nome. Por exemplo, você pode pressionar **Alt + I** para acessar o campo **I**dioma.

Para ver as opções de um menu *dropdown* (como **Idioma** e **Layout de Teclado**), passe para esse menu e use a tecla **seta para baixo**. Utilize as teclas de **setas para cima e para baixo** para selecionar uma opção e a tecla **Enter** para confirmar.

Há um campo de texto em que você pode digitar qualquer coisa para testar a configuração do teclado. Eu recomendo digitar uma palavra como **acentuação**, com caracteres especiais (note a presença do til e da cê-cedilha). Para utilizar esse campo, é só acessá-lo e começar a digitar.

Você não precisa se preocupar com a licença de uso: uma vez que o openSUSE é um [*software* livre][free-software], ela não limita a forma como você pode utilizá-lo. Você pode lê-la para conhecer seus direitos ao usar o openSUSE. Para isso, tecle **Tab** até selecionar **Contrato de Licença** e use as teclas de **setas para cima e para baixo** ou as teclas **Page Down** ou **Page Up** para mover o texto para cima ou para baixo, respectivamente.

Quando terminar, selecione **Próximo** e tecle **Enter**.

## 2) Opções de instalação

{% include image.html src="/files/2017/01/opensuse-server-11-pt.jpg" %}

Nessa tela, o instalador oferece duas opções:

- **Adicionar repositórios online antes da instalação**: por padrão, o instalador utiliza apenas o repositório principal da distribuição para instalar e depois configura o sistema instalado com os demais [repositórios oficiais][official-repos]. Ativando essa opção, todos os repositórios são utilizados já durante a instalação, incluindo o repositório de atualizações, o que garante que o sistema seja instalado já com todas as atualizações disponíveis, dispensando uma atualização manual logo após a instalação; e
- **Incluir produtos complementares de outra mídia**: habilitando essa opção, você pode adicionar à instalação repositórios além dos oficiais, como, por exemplo, [repositórios semi oficiais][semi-official-repos] ou [repositórios de terceiros][third-party-repos]. Útil apenas se você precisa que algum *driver* seja instalado de antemão, já que posteriormente no sistema instalado é possível instalar quaisquer *softwares* desejados.

Selecione a primeira opção (**Alt + D**) e depois selecione **Próximo** (**Alt + X**).

## 3) Particionamento

{% include image.html src="/files/2017/01/opensuse-server-12-pt.jpg" %}

Por padrão, o openSUSE deve sugerir a divisão do disco rígido em três partições:

- `/` (raiz ou *root*), para os arquivos do sistema;
- `/home`, para os arquivos pessoais do(s) usuário(s); e
- [*swap*][swap], que é um espaço do disco rígido utilizado em complemento à memória RAM, semelhante ao [arquivo de paginação][page-file] do [Windows][windows].

Não falarei muito sobre particionamento aqui, pois isso seria assunto para um *post* inteiro (e extenso). Se precisar de mais informações, sugiro que consulte a [documentação oficial do openSUSE][opensuse-doc-partitioning].

Como alternativa à sugestão do instalador do openSUSE, considerando que nem sempre a partição `/home` é muito utilizada em servidores (no caso do servidor de DHCP, por exemplo, provavelmente só terá pasta pessoal o próprio administrador da rede), vou dar uma sugestão para "um bom começo" (seguindo o exemplo):

- Uma partição *swap* de 1GB; e
- uma partição `/` com o espaço restante do disco rígido (9GB).

**Observações quanto à partição *swap*:** antigamente, havia uma recomendação para criar uma partição *swap* com o dobro do tamanho da memória RAM. Isso [já não se aplica][swap-opensuse-1] desde o *kernel* Linux 2.4.10. Hoje, é consenso que a partição *swap* é indispensável tanto para servidores quanto para *desktops*, mas não há um consenso quanto a uma recomendação para o seu tamanho. A documentação oficial do openSUSE ([aqui][swap-opensuse-1] e [aqui][swap-opensuse-2]) recomenda a criação de uma partição *swap* de pelo menos 256MB. Se necessário, é preferível aumentar a memória RAM do que a partição *swap*. Para hibernação, a partição *swap* deve ser de um tamanho igual ou maior ao da memória RAM, mas hibernação é mais comum em *notebooks* e *desktops* do que em servidores. Deixo *links* para documentações de outras distribuições que podem ajudar na decisão do tamanho da partição *swap*: [Ubuntu][swap-ubuntu] e [Red Hat][swap-redhat].

Vejamos como criar um novo particionamento seguindo a minha sugestão.

Na tela **Particionamento sugerido** (imagem acima), selecione **Criar a configuração da partição** (**Alt + R**).

Na tela seguinte, selecione **Particionamento personalizado** (**Alt + P**) e depois **Próximo** (**Alt + X**):

{% include image.html src="/files/2017/01/opensuse-server-13-pt.jpg" %}

A tela seguinte (**Particionador avançado**) lista os discos rígidos. Selecione o único disco rígido e tecle **Enter**:

{% include image.html src="/files/2017/01/opensuse-server-14-pt.jpg" %}

A tela seguinte lista as partições do disco rígido selecionado (por enquanto, nenhuma). Vamos criar uma tabela de partições para esse disco rígido. Para isso, selecione **Avançado**, selecione **Criar nova tabela de partição** e tecle **Enter**:

{% include image.html src="/files/2017/01/opensuse-server-15-pt.jpg" %}

Em relação ao tipo de tabela de partições, selecione **MSDOS** e depois **OK**:

{% include image.html src="/files/2017/01/opensuse-server-16-pt.jpg" %}

A mensagem a seguir alerta que os dados no disco rígido serão destruídos:

{% include image.html src="/files/2017/01/opensuse-server-17-pt.jpg" %}

Como o servidor é novo e o disco ainda não foi usado, não há problema, **Sim**, vamos criar a nova tabela de partições.

Agora, de volta à lista de partições do disco rígido, vamos selecionar **Adicionar** para criar nossa primeira partição, a partição *swap* de 1GB.

Em relação ao tipo de partição, selecione **Partição Primária** e depois **Próximo**:

{% include image.html src="/files/2017/01/opensuse-server-18-pt.jpg" %}

Em **Tamanho**, informe **1GB**. Depois, selecione **Próximo**:

{% include image.html src="/files/2017/01/opensuse-server-19-pt.jpg" %}

Em **Função**, selecione **Swap**. Depois, selecione **Próximo**:

{% include image.html src="/files/2017/01/opensuse-server-20-pt.jpg" %}

Na tela seguinte, podemos configurar diversas opções da nova partição. No caso da partição *swap*, não há o que alterar: as opções padrão sugeridas pelo instalador são suficientes. Podemos selecionar **Concluir**:

{% include image.html src="/files/2017/01/opensuse-server-21-pt.jpg" %}

De volta à lista de partições do disco rígido, percebemos que a partição *swap* foi criada. Agora, vamos selecionar **Adicionar** mais uma vez para criar nossa segunda partição, a partição `/` com o espaço restante do disco rígido (9GB).

Em relação ao tipo de partição, selecione **Partição Primária** e depois **Próximo**.

Na tela seguinte, selecione **Tamanho Máximo** e depois **Próximo**:

{% include image.html src="/files/2017/01/opensuse-server-22-pt.jpg" %}

Em **Função**, selecione **Sistema operacional**. Depois, selecione **Próximo**:

{% include image.html src="/files/2017/01/opensuse-server-23-pt.jpg" %}

Em **Opções de formatação**, vamos apenas alterar o **Sistema de arquivos** para o mais tradicional **Ext4** e finalmente **Concluir**:

{% include image.html src="/files/2017/01/opensuse-server-24-pt.jpg" %}

De volta à lista de partições do disco rígido, temos agora as duas partições criadas:

{% include image.html src="/files/2017/01/opensuse-server-25-pt.jpg" %}

Selecione **Aceitar**.

A tela **Particionamento sugerido** agora mostra nosso particionamento personalizado:

{% include image.html src="/files/2017/01/opensuse-server-26-pt.jpg" %}

Selecione **Próximo**.

## 4) Relógio e fuso horário

{% include image.html src="/files/2017/01/opensuse-server-27-pt.jpg" %}

Verifique se as configurações de fuso horário, data e hora estão corretas.

Se o fuso horário sugerido não estiver correto, você pode mudá-lo. Para isso, selecione primeiro uma **Região** (nesse caso, **Brasil**) e depois um **Fuso horário**:

- para servidores na região Sul, Sudeste ou Centro-Oeste, regiões que adotam o horário de verão, você pode selecionar o fuso horário de **São Paulo**; ou
- para servidores no Nordeste ou no Norte, você pode selecionar o fuso horário de **Maceió**.

{% include image.html src="/files/2016/10/mapa-horario-de-verao-2016-2017.jpg" caption="Estados que adotam horário de verão no Brasil (referências: [G1](http://g1.globo.com/economia/noticia/2016/10/horario-de-verao-comeca-em-16-de-outubro-e-vai-ate-19-de-fevereiro.html) e [Decreto nº 8.112](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/Decreto/D8112.htm), mapa derivado do [mapa do Brasil em branco disponível na WikiMedia](https://commons.wikimedia.org/wiki/File:Brazil_Blank_Map_light.svg))" %}

Como seu servidor executará apenas Linux, mantenha marcada a opção **Relógio do hardware definido para UTC**. Note que ela já vem habilitada por padrão. Para mais informações sobre essa opção, leia o *post* [Mantenha a hora do seu computador sempre certa com o NTP][how-to-ntp-client].

Quando terminar, selecione **Próximo** (**Alt + X**).

## 5) Repositórios online

Se você marcou a opção **Adicionar repositórios online antes da instalação** na tela **Opções de instalação**, deve aparecer agora a **Lista de repositórios online**, que permite a você selecionar quais repositórios oficiais serão utilizados durante a instalação:

{% include image.html src="/files/2017/01/opensuse-server-28-pt.jpg" %}

Deixe habilitados apenas os repositórios:

- **Repositório principal (OSS)**: o repositório principal da distribuição, contém apenas [*softwares* de código aberto][oss] (do inglês *open source sofware*, OSS); e

- **Repositório principal de atualização**: contém atualizações (*updates*) oficiais para os pacotes do repositório principal.

Para desabilitar um repositório nessa lista, selecione-o usando as teclas de **setas para cima e para baixo** e aperte a **barra de espaço**.

Quando terminar, selecione **Próximo**.

## 6) Seleção da área de trabalho

{% include image.html src="/files/2017/01/opensuse-server-29-pt.jpg" %}

Nessa tela, o instalador oferece alguns dos ambientes de trabalho disponíveis para o openSUSE. Como normalmente não se utiliza interface gráfica em servidores (aplicativos como [LibreOffice][libreoffice], [Mozilla Firefox][firefox] ou [KMines][kmines] fazem mais sentido em *desktops*), nessa tela vamos nos limitar a selecionar a opção **Servidor (Modo de Texto)** com **Alt + S** e então **Próximo** com **Alt + X**.

## 7) Usuário e senha

{% include image.html src="/files/2017/01/opensuse-server-30-pt.jpg" %}

Nessa tela, você vai criar uma conta de usuário para que você possa acessar o servidor. Informe seu nome completo e qual nome de usuário (*login*) e senha você deseja utilizar.

Observe que o instalador sugere que:

- a senha do administrador (superusuário, *root*) seja igual à sua; e que
- o *login* na sua conta de usuário seja automático.

São opções que visam a comodidade, mas acabam por tornar o sistema menos seguro. Como em se tratando de um servidor segurança é uma preocupação, desmarque as opções **Usar esta senha para o administrador do sistema** e **Login automático**. Dessa forma, será obrigatório o fornecimento de um *login* e senha para acessar o servidor.

Quando terminar, selecione **Próximo** (**Alt + X**).

Pode ser que o instalador considere a sua senha simples e chame a atenção:

{% include image.html src="/files/2017/01/opensuse-server-31-pt.jpg" %}

Nesse caso, é recomendado selecionar **Não** e definir uma nova senha, mais segura.

Se quiser dicas de como elaborar senhas seguras, consulte essa [cartilha de segurança do CERT.br][passwords] a respeito de senhas.

Na próxima tela, como você desmarcou a opção **Usar esta senha para o administrador do sistema**, você deve definir uma senha para o usuário *root*:

{% include image.html src="/files/2017/01/opensuse-server-32-pt.jpg" %}

Quando terminar, selecione **Próximo**.

## 8) Resumo da instalação

{% include image.html src="/files/2017/01/opensuse-server-33-pt.jpg" %}

Essa tela exibe um resumo das configurações que serão utilizadas na instalação. Verifique se tudo está conforme o desejado. Utilize as **teclas de setas para cima e para baixo** para ler o resumo. Uma vez passada essa tela, não haverá volta.

Se precisar alterar alguma configuração, selecione o *link* da configuração desejada usando as teclas de **setas para cima e para baixo** e tecle **Enter** para ir para a tela correspondente.

Observe que por padrão o *firewall* e o acesso remoto via SSH são desabilitados:

{% include image.html src="/files/2017/01/opensuse-server-34-pt.jpg" %}

Selecione **habilitar** e tecle **Enter** para habilitar. Faça isso para ambos:

{% include image.html src="/files/2017/01/opensuse-server-35-pt.jpg" %}

Se não houver mais nada a modificar, selecione **Instalar** (**Alt + I**).

Uma mensagem de confirmação será exibida:

{% include image.html src="/files/2017/01/opensuse-server-36-pt.jpg" %}

Selecione **Instalar** (**Alt + I**) para começar a instalação propriamente dita.

## 9) Progresso da instalação

{% include image.html src="/files/2017/01/opensuse-server-37-pt.jpg" %}

Agora o instalador do openSUSE exibe em detalhes o progresso da instalação.

Observe que como os pacotes são baixados da Internet, a instalação pode demorar mais ou ser mais rápida conforme a velocidade da sua conexão.

Quando tudo estiver pronto, o instalador solicitará que o servidor seja reiniciado:

{% include image.html src="/files/2017/01/opensuse-server-38-pt.jpg" %}

Basta teclar **Enter** ou esperar que o servidor se reinicie.

Enquanto o servidor reinicia, aproveite para remover a mídia de instalação do openSUSE, ela não é mais necessária.

## Servidor instalado

{% include image.html src="/files/2017/01/opensuse-server-39.jpg" %}

A instalação foi concluída. O sistema operacional já se encontra no disco rígido. Mas ainda faltam algumas configurações básicas antes de começar a usar o servidor.

Como percebi que o *post* já está muito grande, decidi dividi-lo em duas partes. Deixei alguns detalhes para o próximo *post*.

Siga o Projeto Linux Kamarada para ler a segunda parte assim que ela for publicada!

[opensuse-leap-422]:            {%post_url 2016-11-16-opensuse-leap-42-2-versao-otima-para-profissionais-linux %}
[how-to-install]:               {%post_url 2016-11-15-como-instalar-o-linux-opensuse-leap %}
[opensuse-leap-32bit]:          https://www.reddit.com/r/openSUSE/comments/3d711c/will_leap_42_support_32bit_machines_given_that/
[system-requirements]:          https://doc.opensuse.org/documentation/leap/startup/html/book.opensuse.startup/art.opensuse.installquick.html#sec.osuse.installquick.sysreqs
[virtualization]:               https://doc.opensuse.org/documentation/leap/virtualization/html/book.virt/cha.virt.support.html#virt.support.hosts
[xenserver]:                    http://xenserver.org/
[vmware-vsphere]:               https://www.vmware.com/br/products/vsphere-hypervisor.html
[opensuse]:                     https://www.opensuse.org
[opensuse-leap-422-download]:   https://software.opensuse.org/422/pt_BR
[how-to-livedvd]:               {%post_url 2016-04-22-como-gravar-um-livedvd %}
[opensuse-license]:             https://en.opensuse.org/openSUSE:License
[free-software]:                https://www.gnu.org/philosophy/free-sw.pt-br.html
[official-repos]:               https://en.opensuse.org/Package_repositories#Official_Repositories
[semi-official-repos]:          https://en.opensuse.org/Package_repositories#Semi_official_repositories
[third-party-repos]:            https://en.opensuse.org/Additional_package_repositories
[swap]:                         https://www.vivaolinux.com.br/artigo/Funcionamento-da-memoria-virtual
[page-file]:                    https://support.microsoft.com/kb/2160852
[windows]:                      https://www.microsoft.com/pt-br/windows/
[opensuse-doc-partitioning]:    https://doc.opensuse.org/documentation/leap/startup/html/book.opensuse.startup/cha.inst.html#sec.i.yast2.inst_mode.partitioning
[swap-opensuse-1]:              https://doc.opensuse.org/documentation/leap/reference/html/book.opensuse.reference/cha.advdisk.html
[swap-opensuse-2]:              https://doc.opensuse.org/documentation/leap/reference/html/book.opensuse.reference/cha.pmanage.html
[swap-ubuntu]:                  https://help.ubuntu.com/community/SwapFaq
[swap-redhat]:                  https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Storage_Administration_Guide/ch-swapspace.html
[how-to-ntp-client]:            {%post_url 2016-10-15-mantenha-a-hora-do-seu-computador-sempre-certa-com-o-ntp %}
[oss]:                          https://pt.wikipedia.org/wiki/Software_de_código_aberto
[libreoffice]:                  https://pt-br.libreoffice.org/
[firefox]:                      https://www.mozilla.org/pt-BR/firefox/
[kmines]:                       https://www.kde.org/applications/games/kmines/
[passwords]:                    http://cartilha.cert.br/senhas/

