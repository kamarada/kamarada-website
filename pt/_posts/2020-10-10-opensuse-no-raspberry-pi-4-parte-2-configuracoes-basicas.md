---
date: '2020-10-10 23:00:00 GMT-3'
image: '/files/2020/10/rpi4b-opensuse-40-pt.jpg'
layout: post
published: true
nickname: 'rpi4b-opensuse-config'
title: 'openSUSE no Raspberry Pi 4 — parte 2: configurações básicas'
---

No [_post_ anterior][rpi4b-opensuse], ligamos nosso [Raspberry Pi 4][rpi4b] com o [openSUSE]. Diferente do [Raspbian], o openSUSE não apresenta um assistente de configuração no primeiro uso. Por isso, vejamos quais são as primeiras configurações que devemos fazer para que o nosso Raspberry Pi esteja realmente pronto para as tarefas do dia a dia.

Se você chegou aqui sem ter passado pelo [_post_ anterior][rpi4b-opensuse], recomendo que comece sua leitura por ele (a menos, claro, que o openSUSE já esteja rodando no seu Raspberry Pi):

- [openSUSE no Raspberry Pi 4 — parte 1: _download_ e instalação][rpi4b-opensuse]

Lembrando que escolhi usar a área de trabalho [XFCE], mas não tem problema se você escolheu outra. Praticamente todos as configurações que faremos serão no [Centro de controle do YaST][yast], presente em toda instalação do openSUSE, nada específico do XFCE.

Se você vai usar o Raspberry Pi como servidor e, por isso, escolheu a imagem JeOS, sem área de trabalho, recomendo que leia esse texto, em vez do atual:

- [Levante um servidor com o Linux openSUSE Leap (parte 2)][how-to-server-config] (embora fale do openSUSE Leap, se você escolheu usar o openSUSE Tumbleweed, tudo é bem parecido)

## Gerenciando a rede pelo NetworkManager

O openSUSE dispõe de duas ferramentas para gerenciar a rede:

- **[Wicked]**: uma ferramenta própria do openSUSE, que visa substituir os antigos comandos da família do **[ifup]**, mais adequada para servidores; e
- **[NetworkManager]**: uma ferramenta presente em praticamente todas as distribuições [Linux], que visa facilitar o gerenciamento da rede para o usuário final, fazendo com que ela "simplesmente funcione", mais adequada para _desktops_.

Se você já usou o Linux em um _notebook_, sabe que quando chega a um lugar que tem uma rede Wi-Fi à qual já se conectou antes, o sistema se conecta a ela de novo automaticamente. Quem faz isso nos bastidores, sem que talvez você nem se dê conta, é o NetworkManager. Essa não é a única facilidade que ele traz, mas é um dos melhores exemplos.

Se você vai usar o Raspberry Pi como _desktop_, provavelmente vai querer gerenciar a rede com o NetworkManager. Mas essa não é a configuração padrão do openSUSE no Raspberry Pi. Para alterá-la, vamos ao Centro de controle do YaST.

Para iniciar o YaST, abra o **Menu** do XFCE, no canto inferior esquerdo da tela, e clique no ícone do **YaST**, convenientemente disponível nos favoritos (**Favorites**):

{% include image.html src='/files/2020/10/rpi4b-opensuse-14.jpg' %}

Se você já usa o openSUSE há um tempo, já conhece o YaST. Senão, saiba que o [YaST] (sigla do inglês _Yet another Setup Tool_, que quer dizer "apenas mais uma ferramenta de configuração", muito humilde) é a ferramenta central do openSUSE para administrar o sistema. Ele apresenta uma interface amigável e reúne em um só lugar todas as configurações administrativas (as que afetam todos os usuários), como instalação e remoção de programas, impressoras, usuários, idioma, data e hora, etc.

Quem já usou [Windows] talvez ache o YaST parecido com o [Painel de Controle][control].

À esquerda, selecione a categoria **System** (Sistema) e à direita, a opção **Network Settings** (Configurações da rede):

{% include image.html src='/files/2020/10/rpi4b-opensuse-15.jpg' %}

Selecione a aba **Global Options** (Opções globais) e em **Network Setup Method** (Método de configuração da rede), selecione **Network Manager**:

{% include image.html src='/files/2020/10/rpi4b-opensuse-16.jpg' %}

Clique em **OK** e aguarde as configurações serem aplicadas.

## Conectando à rede Wi-Fi

Também é graças ao NetworkManager que você pode convenientemente gerenciar suas conexões de rede da área de trabalho, sem precisar recorrer ao YaST ou a comandos no terminal.

Para se conectar a uma rede Wi-Fi, simplesmente clique no ícone de rede próximo do relógio, no canto inferior direito da tela, e escolha a rede Wi-Fi à qual deseja se conectar:

{% include image.html src='/files/2020/10/rpi4b-opensuse-17.jpg' %}

Informe a senha da rede Wi-Fi e tecle **Enter** ou clique em **Connect** (Conectar):

{% include image.html src='/files/2020/10/rpi4b-opensuse-18.jpg' %}

## Instalando traduções

Conectado à Internet, agora seu Raspberry Pi consegue baixar traduções para o openSUSE.

Volte para o YaST e, também na categoria **System** (Sistema), selecione a opção **Language** (Idioma):

{% include image.html src='/files/2020/10/rpi4b-opensuse-19.jpg' %}

Em **Primary Language** (Idioma primário), selecione **Portuguese (Brazilian) - Português brasileiro**:

{% include image.html src='/files/2020/10/rpi4b-opensuse-20.jpg' %}

Marque também as opções **Adapt Keyboard Layout to Portuguese (Brazil)** (Adaptar Layout de Teclado para Português Brasil) e **Adapt Time Zone to Brazil/East** (Adaptar Fuso Horário para Brasil/Leste). Por fim, clique em **OK**.

O YaST baixa e instala os pacotes de tradução:

{% include image.html src='/files/2020/10/rpi4b-opensuse-21.jpg' %}

Porém, por algum motivo, essa tela não baixa todas as traduções necessárias. Vamos instalar mais alguns pacotes que ela deixa faltando.

Para isso, de volta ao YaST, selecione a categoria **Software** e, depois, **Software Management** (Gerenciamento de software):

{% include image.html src='/files/2020/10/rpi4b-opensuse-22.jpg' %}

Abra a aba **Installation Summary** (Resumo da instalação) e perceba quantos pacotes já foram automaticamente marcados para instalação:

{% include image.html src='/files/2020/10/rpi4b-opensuse-23.jpg' %}

Podemos adicionar ainda mais um pacote a essa lista. Mude para a aba **Search** (Pesquisar), pesquise pelo pacote **desktop-translations** e marque-o para instalação também.

Quando terminar, clique em **Accept** (Aceitar).

Aguarde o _download_ e instalação dos pacotes e, ao final, clique em **Finish** (Concluir):

{% include image.html src='/files/2020/10/rpi4b-opensuse-24.jpg' %}

Também por algum motivo a tela da tradução não altera todos os arquivos de configuração que deveria alterar (depois, vou reportar isso como um _bug_ pros desenvolvedores do YaST). Precisaremos fazer ainda mais alguns ajustes manualmente, mas são só mais esses.

De volta ao YaST, selecione a categoria **System** (Sistema) e, depois, a opção **Sysconfig Editor** (Editor do Sysconfig):

{% include image.html src='/files/2020/10/rpi4b-opensuse-25.jpg' %}

Na árvore à esquerda, expanda o caminho: **System / Environment / Language** e selecione a variável **RC_LANG**. À direita, no campo **Setting** (Configurações), digite `pt_BR.UTF-8`:

{% include image.html src='/files/2020/10/rpi4b-opensuse-26.png' %}

Quem já usou Windows talvez ache essa tela parecida com o [Editor do Registro][regedit].

Na árvore à esquerda, no mesmo caminho, selecione a variável **ROOT_USES_LANG** e à direita, no campo **Setting** (Configurações), digite `yes`:

{% include image.html src='/files/2020/10/rpi4b-opensuse-27.jpg' %}

Clique em **OK**. O YaST confirma as alterações, clique em **Save** (Salvar):

{% include image.html src='/files/2020/10/rpi4b-opensuse-28.jpg' %}

Agora sim estamos prontos para usar nosso openSUSE totalmente traduzido. É só reiniciar.

## Reiniciando

Para reiniciar o openSUSE, abra o **Menu** do XFCE e clique no botão **Log Out** (Sair):

{% include image.html src='/files/2020/10/rpi4b-opensuse-29.jpg' %}

Dentre as várias opções, escolha **Restart** (Reiniciar):

{% include image.html src='/files/2020/10/rpi4b-opensuse-30.jpg' %}

Aguarde alguns segundos e o openSUSE estará de volta.

## Renomeando as pastas pessoais

No primeiro uso após a mudança de idioma, o sistema pergunta se você quer traduzir também os nomes das pastas pessoais (por exemplo, de `Documents` para `Documentos`):

{% include image.html src='/files/2020/10/rpi4b-opensuse-31-pt.jpg' %}

Eu acho interessante fazer isso. Se concordar, clique em **Atualizar nomes**.

## Sincronizando a data e a hora

O Raspberry Pi 4 não tem um circuito de relógio embutido com pilha, como nos computadores tradicionais. Isso permite que ao ligar esses computadores, mesmo que tenham passado muito tempo desligados e não estejam conectados à Internet, a data e hora ainda estejam certas. Em um Raspberry Pi, sempre ao ligar, a data e hora estão erradas, por isso precisamos configurar o sistema para obter a data e hora certas da Internet.

{% include image.html src='/files/2020/10/cmos-battery.jpg' caption="Se você abrir seu desktop ou notebook (não faça isso se não souber como fazer), encontrará uma pilha de relógio dentro dele. O Raspberry Pi não tem isso." %}

Nós já definimos o fuso horário quando mudamos o idioma, então não precisamos rever todas as configurações de data e hora. Aqui, vou resumidamente explicar como configurar a sincronização. Se precisar de mais informações sobre essas configurações, consulte:

- [Mantenha a hora do seu computador sempre certa com o NTP][ntp-client]

Inicie o YaST. Selecione a categoria **Sistema** e, depois, a opção **Data e hora**:

{% include image.html src='/files/2020/10/rpi4b-opensuse-32-pt.jpg' %}

Na tela seguinte, clique em **Outras Configurações**:

{% include image.html src='/files/2020/10/rpi4b-opensuse-33-pt.jpg' %}

Selecione a opção **Sincronizar com o servidor NTP**:

{% include image.html src='/files/2020/10/rpi4b-opensuse-34-pt.jpg' %}

No campo **Endereço do servidor NTP**, informe `pool.ntp.br`.

Clique em **Aceitar** e, de volta à tela anterior, em **OK** para aplicar as configurações.

## Adicionando usuários

Por padrão, a imagem do openSUSE para o Raspberry Pi vem apenas com o usuário _root_. Por questão de segurança, vamos criar outra conta para usar o sistema no dia a dia.

Na tela principal do YaST, selecione a categoria **Segurança e usuários** e a opção **Gerenciamento de usuários e grupos**:

{% include image.html src='/files/2020/10/rpi4b-opensuse-35-pt.jpg' %}

No momento, o sistema não tem outro usuário além do _root_, por isso nenhum é listado:

{% include image.html src='/files/2020/10/rpi4b-opensuse-36-pt.jpg' %}

Clique em **Adicionar**.

A seguir, informe os dados do novo usuário e quando terminar clique em **OK**:

{% include image.html src='/files/2020/10/rpi4b-opensuse-37-pt.jpg' %}

De volta à tela anterior, o novo usuário agora aparece na lista de usuários:

{% include image.html src='/files/2020/10/rpi4b-opensuse-38-pt.jpg' %}

Se precisar, você pode criar mais usuários repetindo esses passos.

Quando terminar, clique em **OK** para aplicar as configurações. As novas contas de usuário serão criadas e você voltará à tela principal do YaST.

Pode fechar o YaST, não vamos mais usá-lo para ajustar mais configurações.

## Mudando a senha do usuário root

Também por questão de segurança, vamos mudar a senha do usuário _root_, que é a mesma para todas as instalações do openSUSE no Raspberry Pi e, portanto, amplamente conhecida.

Até poderíamos fazer isso pelo YaST, mas eu acho mais prático pelo terminal.

Para iniciar o terminal, abra o **Menu** do XFCE e clique no ícone do **Emulador de Terminal**, convenientemente disponível nos **Favoritos**.

No terminal, execute o comando **[passwd]**:

```
# passwd
```

Digite a nova senha, tecle **Enter**, depois digite a nova senha mais uma vez e tecle **Enter** de novo.

```
Nova senha:
Redigite a nova senha:
passwd: senha atualizada com sucesso
```

## Verificando atualizações

Aproveitando o terminal aberto como _root_, vamos verificar se há atualizações para o sistema e obtê-las, se houver. Para isso, execute o comando:

```
# zypper up
```

Não vou entrar em detalhes aqui porque isso já foi assunto de outro texto.

Se precisar de mais informações sobre como atualizar pacotes (_update_), consulte:

- [Como obter atualizações para o Linux openSUSE][howto-update]

Ao terminar, pode fechar a janela do terminal.

## Encerrando a sessão

Agora você pode encerrar sua sessão como usuário _root_ e começar a usar o Raspberry Pi com a conta de usuário que você criou.

Para encerrar a sessão, abra o **Menu** do XFCE e clique no botão **Sair**.

Dentre as várias opções, escolha **Encerrar sessão**:

{% include image.html src='/files/2020/10/rpi4b-opensuse-39-pt.jpg' %}

## Desligando o Raspberry Pi

O Raspberry Pi não tem um botão de liga/desliga. Mas, assim como o Raspbian, o openSUSE também tem um comando para desligar. Usá-lo é necessário para que o sistema operacional desmonte corretamente os sistemas de arquivos e evite perda de dados. Para ligar um Raspberry Pi, basta plugar a fonte de alimentação na energia, mas para desligá-lo, não é só desplugar a fonte. Antes, devemos usar o comando de desligar do sistema.

Quando terminar de usar o openSUSE no Raspberry Pi, para desligá-lo com segurança, abra o **Menu** do XFCE, clique no botão **Sair** e escolha a opção **Desligar**.

Aguarde até que o Raspberry Pi desligue completamente. Repare nas luzes LED: chega um momento em que a luz PWR apaga e a ACT pisca algumas vezes, depois a ACT apaga e apenas a PWR fica acesa, indicando que o Raspberry Pi tem energia, mas não faz nada. Aí sim você pode desconectar a fonte de alimentação.

## Conclusão

{% include image.html src='/files/2020/10/rpi4b-opensuse-40-pt.jpg' %}

Espero que você faça bom proveito do openSUSE no Raspberry Pi e que esses tutoriais tenham te ajudado a deixá-lo redondinho!

Espero também que o openSUSE melhore seu suporte ao Raspberry Pi para que possamos tirar o máximo proveito desses incríveis computador e sistema operacional.

[rpi4b-opensuse]:       {% post_url pt/2020-10-10-opensuse-no-raspberry-pi-4-parte-2-configuracoes-basicas %}
[rpi4b]:                {% post_url pt/2019-09-20-primeiros-passos-no-raspberry-pi-com-noobs-e-raspbian %}
[opensuse]:             https://www.opensuse.org/
[raspbian]:             http://www.raspbian.org/
[xfce]:                 https://www.xfce.org/
[yast]:                 http://yast.opensuse.org/
[how-to-server-config]: {% post_url pt/2017-02-18-levante-um-servidor-com-o-linux-opensuse-leap-parte-2 %}
[wicked]:               https://en.opensuse.org/Portal:Wicked
[ifup]:                 https://linux.die.net/man/8/ifup
[networkmanager]:       https://www.gnome.org/projects/NetworkManager/
[linux]:                https://www.vivaolinux.com.br/linux/
[windows]:              https://www.microsoft.com/pt-br/windows/
[control]:              http://www.techtudo.com.br/dicas-e-tutoriais/noticia/2015/06/como-acessar-o-painel-de-controle-antigo-no-windows-10.html
[regedit]:              https://canaltech.com.br/windows/o-que-e-e-como-funciona-o-registro-do-windows/
[ntp-client]:           {% post_url pt/2016-10-15-mantenha-a-hora-do-seu-computador-sempre-certa-com-o-ntp %}
[passwd]:               https://man7.org/linux/man-pages/man1/passwd.1.html
[howto-update]:         {% post_url pt/2019-05-14-como-obter-atualizacoes-para-o-linux-opensuse %}
