---
date: '2019-10-30 23:30:00 GMT-3'
layout: post
published: true
title: 'Dicas para usar o VirtualBox no dia a dia'
image: '/files/2019/10/virtualbox.jpg'
nickname: 'virtualbox-tips'
---

{% include image.html src="/files/2019/10/virtualbox.jpg" %}

Nessa parte 3 de uma trilogia de _posts_ sobre o [VirtualBox], você verá como criar um disco rígido virtual e instalar o [Linux] na máquina virtual, assim como dicas para usar o VirtualBox no dia a dia. Como exemplo, vou usar a distribuição [Linux Kamarada][kamarada], baseada no [openSUSE].

<!--more-->

Nos textos anteriores, vimos o que é virtualização, o que é o VirtualBox, como instalá-lo no [Windows] e no Linux, como criar uma máquina virtual e como usá-la para experimentar o Linux.

Caso você tenha caído aqui de paraquedas, recomendo que leia os textos anteriores:

- [VirtualBox: a forma mais fácil de conhecer o Linux sem precisar instalá-lo][virtualbox]
- [Instalando o VirtualBox no Linux][virtualbox-linux]

## Prevenir a ejeção do LiveCD/DVD

Alguns sistemas operacionais convidados, a exemplo do [Ubuntu], ejetam a [mídia _live_][live] ao desligar:

{% include image.html src="/files/2019/10/virtualbox-41.jpg" caption="&quot;Por favor, remova a mídia de instalação e pressione Enter&quot;, em inglês" %}

Em um computador "de verdade", o LiveDVD é ejetado nesse momento.

Em uma máquina virtual do VirtualBox, o leitor de DVD virtual fica vazio. Para iniciar a VM novamente, você teria que mais uma vez inserir a imagem ISO no leitor de DVD virtual, como vimos na [parte 1][virtualbox]. Se você está iniciando a VM várias vezes pela mídia _live_, ter que reinserir a imagem ISO toda hora é desnecessariamente trabalhoso.

Felizmente, o VirtualBox tem uma opção para prevenir a ejeção da mídia. Para ativá-la, selecione a máquina virtual na tela inicial, clique em **Configurações**, abra a seção **Armazenamento**, selecione o leitor de DVD virtual e ative a opção **LiveCD/DVD**:

{% include image.html src="/files/2019/10/virtualbox-42-pt.jpg" %}

Agora, ao desligar a VM, a mídia não será mais removida. Você poderá iniciar a VM novamente sem precisar reinserir a imagem ISO manualmente.

## Criando um novo disco rígido virtual

Se você seguiu essa trilogia de _posts_ sobre o VirtualBox, até agora só usou uma [imagem _live_][live] do Linux na máquina virtual. Dessa forma, quaisquer alterações feitas no SO convidado são perdidas ao desligar a VM. Para ter um primeiro contato com o Linux, uma imagem _live_ é excelente, mas usar o computador no dia a dia não se parece com isso.

Para ter na máquina virtual uma experiência mais próxima de usar o Linux em uma máquina real, vamos instalar o Linux na VM. Para isso, precisamos antes criar um disco rígido virtual.

Com a VM desligada, selecione-a na tela inicial do VirtualBox, clique em **Configurações**, abra a seção **Armazenamento**, selecione a **Controladora SATA** e clique no ícone **Adicionar disco rígido**:

{% include image.html src="/files/2019/10/virtualbox-43-pt.jpg" %}

O VirtualBox pergunta se você deseja criar um novo disco ou usar um disco já existente. Clique em **Criar novo disco**:

{% include image.html src="/files/2019/10/virtualbox-44-pt.jpg" %}

O VirtualBox suporta alguns tipos de discos rígidos virtuais. Provavelmente você não pretende usar esse disco com outro _software_ de virtualização, então mantenha selecionado o tipo nativo do VirtualBox, **VDI (VirtualBox Disk Image)**, e clique em **Próximo**:

{% include image.html src="/files/2019/10/virtualbox-45-pt.jpg" %}

Um disco rígido virtual, para o SO hospedeiro, é um arquivo. Você pode escolher se deseja:

- criar um arquivo do tamanho total do disco (por exemplo, um disco de 20GB seria, já de início, um arquivo de 20GB) — opção **Tamanho Fixo** — ou
- criar um arquivo do tamanho dos dados de fato armazenados (o arquivo começa pequeno e cresce conforme o disco virtual é usado, até o limite de 20GB) — opção **Dinamicamente alocado**.

Eu recomendo que você mantenha selecionada a opção **Dinamicamente alocado** e clique em **Próximo**:

{% include image.html src="/files/2019/10/virtualbox-46-pt.jpg" %}

Informe uma localização e tamanho para o disco rígido virtual — 20GB são suficientes para instalar o Linux Kamarada (ou o openSUSE) e testar com conforto — e clique em **Criar**:

{% include image.html src="/files/2019/10/virtualbox-47-pt.jpg" %}

Pronto: disco rígido virtual criado e pronto para ser usado. De volta à caixa de diálogo **Configurações**, clique em **OK** para fechá-la e voltar para a tela inicial do VirtualBox.

## Instalando o Linux na máquina virtual

Certifique-se que a imagem ISO do Linux está no leitor de DVD virtual e inicie a VM.

Inicie o instalador do Linux Kamarada clicando em seu ícone na _dock_:

{% include image.html src="/files/2019/10/virtualbox-48-pt.jpg" %}

(a título de curiosidade, o instalador é um [_software_ livre][free-software] chamado [Calamares])

Na primeira tela do instalador, o idioma **português (Brasil)** já vem selecionado por padrão. Clique em **Próximo** para continuar.

Na segunda tela, **Partições**, fazemos o particionamento do disco rígido. Como você vai usar essa máquina virtual só para experimentar o Linux e somente ele será instalado no disco, não precisa se preocupar com isso, apenas selecione **Apagar disco** e clique em **Próximo**:

{% include image.html src="/files/2019/10/virtualbox-49-pt.jpg" %}

Na tela seguinte, **Resumo**, o instalador lista as configurações da instalação. Confira se está tudo certo e clique em **Instalar**:

{% include image.html src="/files/2019/10/virtualbox-50-pt.jpg" %}

Observe que, iniciada a instalação, não é possível cancelá-la. Clique em **Instalar agora**:

{% include image.html src="/files/2019/10/virtualbox-51-pt.jpg" %}

Aguarde a instalação do Linux Kamarada, que pode demorar alguns minutos, o instalador mostra o progresso:

{% include image.html src="/files/2019/10/virtualbox-52-pt.jpg" %}

Você pode ir tomar um café e voltar logo em seguida.

Quando a instalação terminar, **não** marque a opção **Reiniciar agora**, clique em **Concluído**:

{% include image.html src="/files/2019/10/virtualbox-53-pt.jpg" %}

Desligue a máquina virtual normalmente, como vimos na [parte 1][virtualbox].

Remova a imagem ISO do leitor de DVD virtual (como quem ejeta um DVD de um leitor de DVD de um computador "de verdade"). Para isso, acesse as configurações da máquina virtual, abra a seção **Armazenamento**, selecione o leitor de DVD, clique no ícone da mídia e depois, no menu que aparece, clique em **Remover Disco do Drive Virtual**:

{% include image.html src="/files/2019/10/virtualbox-54-pt.jpg" %}

Clique em **OK** para fechar a caixa de diálogo **Configurações** e voltar para a tela inicial do VirtualBox.

Agora inicie a máquina virtual. Dessa vez, o sistema será carregado do disco rígido virtual.

Na primeira vez em que é iniciado, o Linux Kamarada apresenta um assistente de configuração para auxiliar com as configurações básicas:

{% include image.html src="/files/2019/10/virtualbox-55-pt.jpg" %}

(a título de curiosidade, esse assistente é um módulo do [YaST] chamado [Firstboot][yast-firstboot])

Na primeira tela do assistente, o idioma **Português brasileiro** e o leiaute (_layout_) de teclado **Português (Brasil)** já vem selecionados por padrão. Clique em **Próximo** para continuar.

Na tela de boas vindas, clique em **Próximo**:

{% include image.html src="/files/2019/10/virtualbox-56-pt.jpg" %}

Na tela seguinte, você é apresentado à [licença de uso do openSUSE Leap][opensuse-license], que é a mesma licença de uso do Linux Kamarada. Não precisa se preocupar com essa licença: uma vez que o openSUSE é um _software_ livre, ela não limita a forma como você pode usá-lo. Você pode lê-la se quiser conhecer seus direitos. Quando terminar, clique em **Próximo**:

{% include image.html src="/files/2019/10/virtualbox-57-pt.jpg" %}

Na próxima tela, **Relógio e fuso horário**, verifique se as configurações de fuso horário, data e hora estão corretas e clique em **Próximo**:

{% include image.html src="/files/2019/10/virtualbox-58-pt.jpg" %}

Na tela seguinte, você vai criar uma conta de usuário para você. Informe seu nome completo, qual nome de usuário (*login*) e senha você deseja. Para facilitar o uso da VM, recomendo marcar as opções **Usar esta senha para o administrador do sistema** e **Login automático**. Quando terminar, clique em **Próximo**:

{% include image.html src="/files/2019/10/virtualbox-59-pt.jpg" %}

Na última tela do assistente, clique em **Concluir**:

{% include image.html src="/files/2019/10/virtualbox-60-pt.jpg" %}

Pronto! O Linux Kamarada está instalado na máquina virtual, a partir de agora é só usá-lo:

{% include image.html src="/files/2019/10/virtualbox-61-pt.jpg" %}

Agora vamos ver algumas dicas que podem facilitar esse uso, assim como torná-lo mais interessante.

## Placa de rede em modo ponte (bridge)

A depender do que você queira fazer, pode ser necessário comunicar a máquina virtual com outros dispositivos na rede, como uma impressora ou um servidor de arquivos, por exemplo.

Se você não modificou a configuração de rede padrão da máquina virtual, perceberá que a máquina virtual consegue se comunicar com a rede local, mas o contrário não é verdade (outros dispositivos na rede local não conseguem se comunicar com a máquina virtual).

Faça o teste: no SO convidado, abra o terminal e verifique o endereço IP da máquina virtual executando o comando a seguir.

```
$ ip -c a
```

{% include image.html src="/files/2019/10/virtualbox-62-pt.png" %}

Nesse exemplo, a máquina virtual recebeu o endereço IP `10.0.2.15/24`.

No SO hospedeiro, verifique o endereço IP da máquina real. Por exemplo, `10.0.0.10/24`.

De volta ao terminal do SO convidado, "pingue" a sua máquina real:

```
$ ping 10.0.0.10
PING 10.0.0.10 (10.0.0.10) 56(84) bytes of data.
64 bytes from 10.0.0.10: icmp_seq=1 ttl=63 time=0.219 ms
64 bytes from 10.0.0.10: icmp_seq=2 ttl=63 time=0.535 ms
64 bytes from 10.0.0.10: icmp_seq=3 ttl=63 time=0.697 ms
64 bytes from 10.0.0.10: icmp_seq=4 ttl=63 time=0.534 ms
^C
--- 10.0.0.10 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3052ms
rtt min/avg/max/mdev = 0.219/0.496/0.697/0.173 ms
```

(pressione **Ctrl + C** para interromper o comando **[ping]**)

Funciona. Agora tente do SO hospedeiro "pingar" a máquina virtual:

```
$ ping 10.0.2.15
PING 10.0.2.15 (10.0.2.15) 56(84) bytes of data.
^C
--- 10.0.2.15 ping statistics ---
4 packets transmitted, 0 received, 100% packet loss, time 3053ms
```

Não funciona. Isso ocorre porque, por padrão, o VirtualBox provê rede para a máquina virtual no modo **NAT** (do inglês [Network Address Translation][nat], "tradução de endereço de rede"): nesse modo, o SO convidado acessa o mundo exterior por meio do _software_ de rede do SO hospedeiro, que traduz as requisições de rede como se fossem suas. O convidado enxerga a rede, mas a rede não enxerga o convidado, apenas o hospedeiro. Isso é igual ao que o _modem_ da operadora de Internet faz com seu computador em casa: seu computador enxerga a Internet, mas a Internet não enxerga seu computador, apenas seu _modem_.

Esse é o modo de rede mais simples do VirtualBox. Normalmente não requer configuração nem do SO convidado, nem do SO hospedeiro e é suficiente para navegar em _sites_, baixar arquivos, etc. Por isso, é o modo padrão de novas VMs e é bom para a maioria dos usos.

Mas o VirtualBox é bastante flexível em como ele virtualiza a rede e oferece outros modos.

O modo que eu costumo usar é o modo **ponte** (_[bridge]_): nesse modo, o VirtualBox envia requisições de rede do SO convidado usando a placa de rede da máquina real diretamente, sem passar pelo _software_ de rede do SO hospedeiro. Na prática, é como se a máquina real e a máquina virtual estivessem conectadas diretamente ao _modem_ de casa. O hospedeiro deixa de estar "entre" o convidado e a rede e passa a estar "do lado" do convidado.

{% include image.html src="/files/2019/10/virtualbox-63-pt.jpg" %}

Para configurar a rede da VM como modo ponte, com a VM desligada, acesse suas configurações, abra a seção **Rede** e mude a opção **Conectado a** para **Placa em modo Bridge**:

{% include image.html src="/files/2019/10/virtualbox-64-pt.png" %}

Caso seu computador tenha mais de uma placa de rede, no campo **Nome**, logo abaixo, é possível escolher qual placa será usada na ponte para a máquina virtual:

{% include image.html src="/files/2019/10/virtualbox-65-pt.png" %}

Quando terminar, clique em **OK**. Inicie a máquina virtual e repita os testes anteriores. Perceba que agora a máquina virtual recebe um endereço IP da mesma rede da máquina real. Essa, por sua vez, agora consegue "pingar" a máquina virtual.

Além dos modos NAT e ponte, o VirtualBox oferece outros modos de rede, que podem ser úteis para outros casos de uso. Se quiser saber mais sobre os modos de virtualização de rede do VirtualBox, consulte o [manual do VirtualBox][virtualbox-manual-networking].

## Pacote de extensões (Extension Pack)

O _software_ VirtualBox é dividido em duas partes: um pacote principal, com todos os componentes de [código aberto][opensource] licenciados sob a [GPLv2], e um **pacote de extensões** (_Extension Pack_), com alguns componentes adicionais proprietários da [Oracle].

Para mim, a principal vantagem de instalar as extensões é poder virtualizar portas USB 2.0 e USB 3.0 (o pacote principal suporta apenas USB 1.1). O pacote de extensões adiciona mais algumas funcionalidades, que você pode conferir no [manual do VirtualBox][virtualbox-manual-extpack], se desejar.

O pacote principal foi o que baixamos e instalamos nos _posts_ anteriores.

Para baixar o pacote de extensões, acesse o _site_ oficial do VirtualBox em:

- [https://www.virtualbox.org/](https://www.virtualbox.org/)

E clique no _banner_ **Download VirtualBox 6.0**.

Na página seguinte, abaixo de **Oracle VM VirtualBox Extension Pack**, clique em _All supported platforms_ (todas as plataformas suportadas):

{% include image.html src="/files/2019/10/virtualbox-66.jpg" %}

Você vai baixar um arquivo com a extensão `.vbox-extpack`.

Se seu SO hospedeiro é Windows, você precisará iniciar o VirtualBox como administrador:

{% include image.html src="/files/2019/10/virtualbox-67-pt.jpg" %}

Se você usa Linux, isso não é necessário: pode iniciar o VirtualBox como de costume.

Continuando, abra o menu **Arquivo** e clique em **Preferências**:

{% include image.html src="/files/2019/10/virtualbox-68-pt.jpg" %}

À esquerda, selecione **Extensões**. À direita, clique no botão **Adicionar**:

{% include image.html src="/files/2019/10/virtualbox-69-pt.jpg" %}

Selecione o arquivo do pacote de extensões que você baixou e clique em **Abrir**:

{% include image.html src="/files/2019/10/virtualbox-70-pt.jpg" %}

Na caixa de diálogo de confirmação, clique em **Instalar**:

{% include image.html src="/files/2019/10/virtualbox-71-pt.jpg" %}

Leia a licença do pacote de extensões (ou, pelo menos, role o texto até o final) e clique em **Eu concordo**:

{% include image.html src="/files/2019/10/virtualbox-72-pt.jpg" %}

Nesse momento, no Linux, é solicitada a senha do administrador (usuário _root_), que você deve fornecer para continuar.

O VirtualBox informa que o pacote de extensões foi instalado com sucesso, clique em **OK**:

{% include image.html src="/files/2019/10/virtualbox-73-pt.jpg" %}

Perceba que o pacote de extensões agora aparece na lista de extensões instaladas:

{% include image.html src="/files/2019/10/virtualbox-74-pt.jpg" %}

Clique em **OK** para fechar a caixa de diálogo **Preferências** e voltar para a tela inicial do VirtualBox.

**Observação:** você deve usar sempre as mesmas versões do VirtualBox e do pacote de extensões. Quando você atualizar o VirtualBox para uma nova versão, volte ao _site_ do VirtualBox, baixe e instale a versão equivalente do pacote de extensões.

## Adicionais para convidado (Guest Additions)

O VirtualBox oferece _drivers_ que podem ser instalados na máquina virtual para melhorar a performance do SO convidado e aumentar a integração com o SO hospedeiro com funcionalidades extras. Esses _drivers_ são chamados de **adicionais para convidado** (_Guest Additions_). É recomendado instalá-los para tornar mais rápido e prático o uso da VM.

Se o SO convidado é o Linux Kamarada, saiba que os adicionais para convidado já vem instalados por padrão.

Se o SO convidado é o openSUSE, a forma mais fácil de instalar os adicionais para convidado é obtê-los dos repositórios oficiais da distribuição, o que pode ser feito executando o comando a seguir (no SO convidado, como _root_):

```
# zypper in virtualbox-guest-{tools,x11}
```

De modo geral, o VirtualBox disponibiliza uma imagem ISO com os adicionais para convidado prontos para instalação no Windows ou em distribuições Linux. Na janela da VM, abra o menu **Dispositivos** e clique em **Inserir imagem de CD dos Adicionais para Convidado**:

{% include image.html src="/files/2019/10/virtualbox-75-pt.jpg" %}

Se o SO convidado é o Windows, o instalador dos adicionais para convidado deve ser iniciado automaticamente quando a imagem ISO é inserida, ou você pode iniciá-lo manualmente a partir do leitor de DVD virtual:

{% include image.html src="/files/2019/10/virtualbox-76-pt.jpg" %}

Se o SO convidado é o Ubuntu, o sistema pergunta se deseja executar o instalador dos adicionais para convidado quando a imagem ISO é inserida:

{% include image.html src="/files/2019/10/virtualbox-77-pt.jpg" %}

Se precisar de mais informações sobre como instalar os adicionais para convidado, consulte a documentação do SO convidado ou o [manual do VirtualBox][virtualbox-manual-guestadd-1].

**Observação:** se o SO hospedeiro é o Linux Kamarada ou o openSUSE, o VirtualBox não vem com a imagem ISO dos adicionais para convidado e pergunta se você deseja baixá-la.

{% include image.html src="/files/2019/10/virtualbox-78-pt.jpg" %}

Clicando em **Baixar**, o _download_ é iniciado, mas sempre termina com erro:

{% include image.html src="/files/2019/10/virtualbox-79-pt.jpg" caption="A operação de rede falhou com o seguinte erro: Durante um pedido de rede Razão desconhecida." %}

Esse é um _bug_ conhecido do openSUSE e já há pessoas trabalhando nele:

- [Bug 1132102 - VirtualBox 6.0.x guest addition ISO download failed][bugzilla-1]

Por enquanto, a solução de contorno é baixar manualmente a imagem ISO dos adicionais para convidado e depois inseri-la manualmente no leitor de DVD virtual.

Você pode baixar a imagem ISO dos adicionais para convidado em:

- [http://download.virtualbox.org/virtualbox/](http://download.virtualbox.org/virtualbox/)

### Redimensionando a janela da VM

Com os adicionais para convidado instalados, se você redimensiona a janela da máquina virtual, a resolução de tela do SO convidado é ajustada automaticamente, como se você tivesse mudado a resolução nas configurações de vídeo do SO convidado. Com isso, você pode usar praticamente qualquer resolução de vídeo na máquina virtual, mesmo que não seja uma das resoluções mais comuns (como 1024x768, 1366x768, 1920x1080, etc).

Por exemplo, se a máquina virtual roda o Linux Kamarada com uma resolução de 1024x768 e você redimensiona a janela da máquina virtual tornando-a 100 _pixels_ mais larga, os adicionais para convidado ajustam a resolução da tela automaticamente para 1124x768.

**Observação:** se o SO convidado é o Linux Kamarada ou o openSUSE, pode ser que você redimensione a janela da VM e a resolução não seja ajustada de imediato.

Esse é outro _bug_ conhecido do openSUSE:

- [Bug 1151896 - Leap 15.1 guest cant change screen resolution][bugzilla-2]

Uma solução de contorno é desligar a máquina virtual, abrir as configurações da máquina virtual, ir na seção **Monitor** e, no campo **Controladora Gráfica**, mudar da configuração padrão (**VMSVGA**) para uma das outras configurações (**VBoxVGA** ou **VBoxSVGA**):

{% include image.html src="/files/2019/10/virtualbox-80-pt.png" %}

Outra opção, se você não quiser reiniciar a VM, é executar (no SO convidado, como _root_):

```
# VBoxClient --vmsvga
```

Feito isso, redimensionar a janela da VM deve voltar a provocar o ajuste da resolução.

### Área de transferência compartilhada

Com os adicionais para convidado instalados, você pode optar por compartilhar a área de transferência dos SOs convidado e hospedeiro. Fazendo isso, passa a ser possível copiar e colar textos da máquina virtual para a máquina real e vice-versa.

Para compartilhar a área de transferência, na janela da VM, abra o menu **Dispositivos**, abra o submenu **Área de Transferência Compartilhada** e selecione **Bi-direcional**:

{% include image.html src="/files/2019/10/virtualbox-81-pt.jpg" %}

Sabe um exemplo de como você pode usar essa facilidade? Você pode abrir um tutorial sobre Linux no seu navegador preferido no SO hospedeiro e copiar comandos para o terminal do Linux no SO convidado:

{% include image.html src="/files/2019/10/virtualbox-82-pt.jpg" %}

Essas duas funcionalidades são apenas as que eu mais uso dos adicionais para convidado. Se quiser conhecer outras facilidades que eles propiciam, consulte o [manual do VirtualBox][virtualbox-manual-guestadd-2].

## Isso é tudo, pessoal!

Nessa trilogia de _posts_ sobre o VirtualBox, compartilhei o que acredito ser o básico e as principais dicas para que você possa usar esse _software_ de virtualização no dia a dia. Talvez o conceito de máquina virtual seja novo pra você, mas você deve ter percebido que a interface do VirtualBox é intuitiva: à medida em que você vai usando, percebe como funciona e dúvidas que vão surgindo acabam desaparecendo sozinhas com a prática.

Espero que esse texto tenha sido útil. Se restar qualquer dúvida, não hesite em comentar!

## Referências

Para escrever esse _post_, consultei o manual do VirtualBox:

- [Oracle VM VirtualBox - User Manual][virtualbox-manual]

[virtualbox]:                   {% post_url pt/2019-10-08-virtualbox-a-forma-mais-facil-de-conhecer-o-linux-sem-precisar-instala-lo %}
[linux]:                        https://www.vivaolinux.com.br/linux/
[kamarada]:                     {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[opensuse]:                     https://www.opensuse.org/
[windows]:                      https://www.microsoft.com/pt-br/windows/
[virtualbox-linux]:             {% post_url pt/2019-10-16-instalando-o-virtualbox-no-linux %}
[ubuntu]:                       https://ubuntu.com/
[live]:                         {% post_url pt/2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}
[free-software]:                https://www.gnu.org/philosophy/free-sw.pt-br.html
[calamares]:                    https://calamares.io/
[yast]:                         https://yast.opensuse.org/
[yast-firstboot]:               https://en.opensuse.org/YaST_Firstboot
[opensuse-license]:             https://en.opensuse.org/openSUSE:License
[ping]:                         https://linux.die.net/man/8/ping
[nat]:                          https://pt.wikipedia.org/wiki/Network_address_translation
[bridge]:                       https://pt.wikipedia.org/wiki/Bridge_(redes_de_computadores)
[virtualbox-manual-networking]: https://www.virtualbox.org/manual/ch06.html
[opensource]:                   https://pt.wikipedia.org/wiki/Software_de_código_aberto
[gplv2]:                        https://www.gnu.org/licenses/old-licenses/gpl-2.0.pt-br.html
[oracle]:                       https://www.oracle.com/br/
[virtualbox-manual-extpack]:    https://www.virtualbox.org/manual/ch01.html#intro-installing
[virtualbox-manual-guestadd-1]: https://www.virtualbox.org/manual/ch04.html#guestadd-install
[bugzilla-1]:                   https://bugzilla.opensuse.org/show_bug.cgi?id=1132102
[bugzilla-2]:                   https://bugzilla.opensuse.org/show_bug.cgi?id=1151896
[virtualbox-manual-guestadd-2]: https://www.virtualbox.org/manual/ch04.html
[virtualbox-manual]:            https://www.virtualbox.org/manual/
