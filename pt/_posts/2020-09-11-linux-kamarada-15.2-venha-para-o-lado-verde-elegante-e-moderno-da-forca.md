---
date: 2020-09-11 02:00:00 GMT-3
image: '/files/2020/09/kamarada-15.2.jpg'
layout: post
published: true
nickname: 'kamarada-15.2-final'
title: 'Linux Kamarada 15.2: venha para o lado verde, elegante e moderno da força!'
---

{% include image.html src='/files/2020/09/kamarada-15.2.jpg' %}

É com enorme satisfação que venho a público anunciar que o **Linux Kamarada 15.2** está pronto para ser usado por todos! O Linux Kamarada 15.2 é uma distribuição [Linux] baseada em outra distribuição maior, o [openSUSE Leap 15.2][leap-15.2]. Enquanto o openSUSE Leap tem um propósito mais geral, fornecendo um sistema operacional estável para computadores pessoais e servidores, assim como ferramentas para desenvolvedores e administradores de sistemas, o Linux Kamarada é focado em computadores pessoais e em usuários iniciantes.

Novos usuários podem encontrar a nova versão na página [Download].

Quem já usa o [Linux Kamarada 15.1][kamarada-15.1] pode atualizar para a nova versão seguindo o tutorial:

- [Linux Kamarada e openSUSE Leap: como atualizar da versão 15.1 para a 15.2][upgrade-to-15.2]

Confira a seguir o que mudou no Linux Kamarada da versão anterior (15.1) para a nova versão (15.2).

[linux]:            https://www.vivaolinux.com.br/linux/
[leap-15.2]:        {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[download]:         /pt/download
[kamarada-15.1]:    {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[upgrade-to-15.2]:  {% post_url pt/2020-08-31-linux-kamarada-e-opensuse-leap-como-atualizar-da-versao-151-para-a-152 %}

<div class="media mb-3">
    <img src="/files/2020/09/kamarada-15.2-logo.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Novo logo, tema, plano de fundo</h2>
    </div>
</div>

Eu queria dar um ar mais moderno e profissional ao Linux Kamarada, mas sem perder o ar simpático, carismático e amigável. Tendo isso em mente, fiz algumas mudanças na marca e no tema:

- o mascote teve sua versão original com _gloss_ substituída por uma nova versão _flat_, baseada no [ícone do Linux originalmente desenhado por Icons8][icons8]
- o tema, de modo geral, continuou alinhado ao [Material Design][material] do [Google] (o mesmo _design_ do [Android])
- foram adotadas cores do Material Design próximas às [cores do openSUSE][opensuse-colors] (para os curiosos, o processo [como as cores foram selecionadas][python-colors] foi explicado aqui no _blog_)
- o tema [GTK] usado na versão 15.1, o tema [Adapta], foi descontinuado e não recebe mais manutenção, por isso foi substituído por uma versão do tema [Materia] personalizada com as cores adotadas
- o tema de ícones [Papirus] foi atualizado e suas cores, personalizadas

[icons8]:           https://icons8.com/icon/17842/linux
[material]:         https://material.io/
[google]:           https://www.google.com.br/
[android]:          https://www.android.com/
[opensuse-colors]:  https://en.opensuse.org/Help:Colors
[python-colors]:    {% post_url pt/2020-07-13-resolvendo-problemas-de-forma-criativa-com-scripts-comparando-paletas-de-cores-usando-python %}
[gtk]:              https://www.gtk.org/
[adapta]:           https://github.com/adapta-project/adapta-gtk-theme
[materia]:          https://github.com/nana-4/materia-theme
[papirus]:          https://github.com/PapirusDevelopmentTeam/papirus-icon-theme

{% include image.html src="/files/2020/09/kamarada-15.2-tux-before-after.png" caption="Tux Kamarada: antes e depois" %}

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/08/upgrade-to-15.2-24.png" caption="Menu do GRUB" %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/09/kamarada-15.2-plymouth.jpg' caption='Plymouth' %}
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/04/kamarada-15.2-lock-pt.jpg' caption='Tela de bloqueio' %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-gdm-pt.jpg" caption="Tela de login" %}
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-desktop-pt.jpg" caption="Área de trabalho" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-theme-pt.jpg" caption="Tema Materia com cores personalizadas" %}
    </div>
</div>

<div class="media mb-3">
    <img src="/files/2020/02/desktop-environment-gnome.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Melhorias no GNOME</h2>
    </div>
</div>

A área de trabalho [GNOME] deu um salto da versão 3.26 no Linux Kamarada 15.1 para a versão 3.34 no Linux Kamarada 15.2. Além do perceptível ganho de desempenho, houve várias mudanças e melhorias. A seguir, menciono algumas que me chamaram a atenção.

As opções que antes ficavam no menu do aplicativo, na barra do topo da área de trabalho, agora estão no menu principal dentro da janela do próprio aplicativo:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-app-menu-pt.png" caption="Menu do aplicativo: antes e depois" %}

No aplicativo **Arquivos** agora é possível favoritar arquivos e pastas:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-files-favorites-01-pt.jpg" %}

Os itens favoritados podem ser facilmente acessados por uma seção na barra lateral:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-files-favorites-02-pt.jpg" %}

O aplicativo **Contatos** também permite favoritar contatos, que passam a aparecer no topo da lista. Ótimo para localizar facilmente pessoas que você contata com frequência.

No aplicativo **Arquivos**, a barra de localização agora expande um menu com opções quando você clica na pasta atual:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-files-menu-pt.jpg" %}

A barra de pesquisa foi integrada à barra de localização, tornando a interface mais compacta:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-files-search-pt.png" caption="Barra de pesquisa: antes e depois" %}

Outro aplicativo cuja interface está mais limpa e organizada é o **Terminal**. Vários menus foram agrupados em apenas um menu principal e a barra de menus foi removida:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-terminal-pt.png" caption="Terminal: antes e depois" %}

A seção **Plano de fundo** do aplicativo **Configurações** foi redesenhada:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-background-pt.jpg" %}

Se quiser saber mais sobre a evolução do GNOME da versão 3.26 até a versão 3.34, recomendo a leitura dessas notícias publicadas no _blog_ [Diolinux]:

- [Lançado GNOME 3.28 com vários polimentos visuais - Diolinux][diolinux-gnome-3.28]
- [Conheça os novos recursos adicionados ao GNOME 3.30 - Diolinux][diolinux-gnome-3.30]
- [GNOME 3.32 é lançado com codinome “Taipei” e conta com novidades, confira - Diolinux][diolinux-gnome-3.32]
- [GNOME 3.34 lançado, confira as novidades - Diolinux][diolinux-gnome-3.34]

[gnome]:                https://br.gnome.org/
[diolinux]:             https://diolinux.com.br/
[diolinux-gnome-3.28]:  https://diolinux.com.br/2018/03/lancado-gnome-328-com-polimentos.html
[diolinux-gnome-3.30]:  https://diolinux.com.br/2018/09/conheca-os-novos-recursos-gnome330.html
[diolinux-gnome-3.32]:  https://diolinux.com.br/2019/03/gnome-332-taipei-e-lancado.html
[diolinux-gnome-3.34]:  https://diolinux.com.br/2019/09/gnome-3-34-lancado-confira-as-novidades.html

<div class="media mb-3">
    <img src="/files/2020/02/libreoffice-main.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">LibreOffice focado no desempenho</h2>
    </div>
</div>

O [LibreOffice] 6.4 trouxe melhor compatibilidade com os arquivos do [Microsoft Office][ms-office], além de várias correções, novas funcionalidades e melhorias de desempenho.

Uma novidade que me chamou a atenção foi a possibilidade de criar e inserir [_QR codes_][qr-code] nos arquivos do LibreOffice, o que pode ser útil para quem precisa desses códigos em cartazes, revistas, panfletos e propagandas, por exemplo. Para inserir um _QR code_, em qualquer aplicativo do LibreOffice, clique no menu **Inserir**, aponte para **Objeto** e clique em **Código QR**:

{% include image.html src='/files/2020/09/kamarada-15.2-libreoffice-pt.jpg' %}

Se quiser saber mais sobre as novidades do LibreOffice 6.4, em comparação com o LibreOffice 6.3 que vinha no Linux Kamarada 15.1, leia essa excelente matéria do Diolinux:

- [LibreOffice 6.4 é lançado com várias melhorias, inclusive com formatos Microsoft - Diolinux][diolinux-libreoffice-6.4]

[libreoffice]:              https://pt-br.libreoffice.org/
[ms-office]:                https://www.office.com/
[qr-code]:                  https://pt.wikipedia.org/wiki/Código_QR
[diolinux-libreoffice-6.4]: https://diolinux.com.br/2020/01/libreoffice-64-e-lancado-com-varias-melhorias-inclusive-com-formatos-microsoft.html

<div class="media mb-3">
    <img src="/files/2020/02/preferences-desktop-remote-desktop.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Acesso remoto e VPN atualizados</h2>
    </div>
</div>

Como deve ser do conhecimento de todos, recentemente tivemos um aumento na demanda por acesso remoto, que foi tema de alguns tutoriais aqui no _blog_.

O [cliente de área de trabalho remota][rdp-client] padrão do Linux Kamarada 15.1, que era o [Vinagre], também padrão do GNOME, não recebe manutenção há algum tempo já. Para o Linux Kamarada 15.2, ele foi substituído pelo [Remmina], que é também o cliente padrão do [Ubuntu].

O Linux Kamarada 15.2 traz o cliente de VPN do [OpenConnect] instalado por padrão na versão 8.05. Uma das novidades dessa versão é o suporte à VPN [GlobalProtect]. Nesse sentido, o Linux Kamarada 15.2 apresenta uma pequena melhoria em relação ao openSUSE Leap 15.2, que ainda traz a versão 7.08 (e, portanto, sem suporte à GlobalProtect), embora não seja difícil instalar a versão mais atual no openSUSE Leap.

Note que pela interface gráfica do aplicativo **Configurações** do GNOME é possível configurar alguns tipos de VPN, mas não a GlobalProtect, que deve ser configurada usando o terminal. Se você precisa usar uma VPN GlobalProtect, veja como conectar-se a ela no _post_:

- [Como conectar a uma VPN do GlobalProtect][globalprotect]

[rdp-client]:       {% post_url pt/2020-04-11-conexao-de-area-de-trabalho-remota-do-windows-no-linux-com-clientes-rdp %}
[vinagre]:          {% post_url pt/2020-04-11-conexao-de-area-de-trabalho-remota-do-windows-no-linux-com-clientes-rdp %}#vinagre
[remmina]:          {% post_url pt/2020-04-11-conexao-de-area-de-trabalho-remota-do-windows-no-linux-com-clientes-rdp %}#remmina
[ubuntu]:           https://ubuntu.com/
[openconnect]:      https://www.infradead.org/openconnect/
[globalprotect]:    {% post_url pt/2020-03-17-como-conectar-a-uma-vpn-do-globalprotect %}

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/09/kamarada-15.2-remmina-pt.jpg' caption='Cliente de área de trabalho remota Remmina' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/09/kamarada-15.2-globalprotect-pt.jpg' caption='OpenConnect versão 8.05' %}
    </div>
</div>

<div class="media mb-3">
    <img src="/files/2020/09/privacy.png" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Privacidade</h2>
    </div>
</div>

O que talvez nem todos tenham percebido é que recentemente também tivemos um aumento da [vigilância em massa][surveillance]. Se você não percebeu, recomendo que leia essa entrevista:

- [Governos estão a aproveitar Covid-19 para avançar na "arquitetura da opressão", alerta Edward Snowden - Observador][snowden]

(se você sabe inglês, veja também o vídeo, que tem a entrevista completa)

Estamos sendo observados o tempo todo por empresas e governos.

Você provavelmente já ouviu o ditado "[quem não deve, não teme][quem-nao-deve-nao-teme]". Ele é comumente usado como argumento para relativizar ou concordar com essa vigilância. Talvez você concorde que se não fez nada de errado, não precisa se esconder. Mas pense nessa questão por outro ângulo: se eu não fiz nada de errado, por que preciso ser vigiado, monitorado?

[Privacidade] é um direito. Não há nada de errado em não querer compartilhar certas partes da sua vida, mantê-las para si mesmo(a), da mesma forma como não há nada de errado em ter cortinas ou persianas nas janelas de casa. Isso é importante para a sua tranquilidade. Seus dados são seus e você deve poder escolher o que deseja compartilhar e com quem.

Tenho lido sobre ferramentas de privacidade em _sites_ (que eu indico) como o [Privacidade Digital][privacytools] e o [Security in a Box][securityinabox] e pretendo falar sobre elas em futuros textos aqui no _blog_. Mas já me adiantei em adicionar algumas delas ao novo Linux Kamarada 15.2:

- o navegador padrão agora é o [Mozilla Firefox][firefox], na versão com suporte estendido ([ESR], _Extended Support Release_) distribuída pelo openSUSE Leap (o [Chromium], navegador padrão na versão anterior, foi mantido como alternativa, pelo menos por enquanto)
- o gerenciador de senhas [KeePassXC] permite que você guarde suas senhas em um arquivo de banco de dados seguro que independe do navegador que você usa, se quiser pode guardar esse arquivo em um serviço de nuvem (como o [Dropbox]) ou fazer cópias dele _offline_ manualmente entre seus dispositivos, o que você achar melhor
- suporte à rede [Tor], que permite que você use a Internet de forma anônima, criptografada, privada, segura e livre de censura

{% include image.html src="/files/2020/09/kamarada-15.2-firefox-pt.jpg" caption="Navegador Mozilla Firefox" %}

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/08/keepassxc-pt.png' caption='Gerenciador de senhas KeePassXC' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/08/tor-pt.jpg' caption='Rede de anonimato Tor' %}
    </div>
</div>

Note que, embora o cliente da rede Tor já venha instalado e disponível para uso no Linux Kamarada, ele não vem habilitado por padrão: se quiser usá-lo, você deve iniciá-lo e configurar os aplicativos para trafegar dados por meio dele. Se você precisa de um sistema que use a rede Tor por padrão, talvez queira conferir o [Tails] ou o [Whonix].

[surveillance]:             https://pt.wikipedia.org/wiki/Vigilância_em_massa
[snowden]:                  https://observador.pt/2020/04/12/governos-estao-a-aproveitar-covid-19-para-avancar-na-arquitetura-da-opressao-alerta-edward-snowden/
[quem-nao-deve-nao-teme]:   https://canalcienciascriminais.jusbrasil.com.br/artigos/449543046/quem-nao-deve-nao-teme-e-a-presuncao-de-inocencia
[privacidade]:              https://tab.uol.com.br/edicao/privacidade
[privacytools]:             https://www.privacidade.digital/
[securityinabox]:           https://securityinabox.org/pt/
[firefox]:                  https://www.mozilla.org/pt-BR/firefox/new/
[esr]:                      https://www.mozilla.org/pt-BR/firefox/enterprise/
[chromium]:                 https://www.chromium.org/
[keepassxc]:                https://keepassxc.org/
[dropbox]:                  {% post_url pt/2019-07-05-18-aplicativos-que-voce-pode-usar-do-mesmo-jeito-no-linux-e-no-windows-parte-1 %}#4-dropbox
[tor]:                      https://www.torproject.org/
[tails]:                    https://tails.boum.org/index.pt.html
[whonix]:                   https://www.whonix.org/

## Onde baixo o Linux Kamarada?

A página [Download] foi atualizada com o _link_ para _download_ da versão 15.2 Final.

**Observação:** não é recomendado usar o Linux Kamarada em servidores, embora seja possível. Nesse caso, a distribuição openSUSE Leap é mais adequada, por fornecer uma opção de instalação própria para servidores, sem área de trabalho.

## O que faço em seguida?

Quando o _download_ estiver concluído, verifique a integridade da imagem ISO calculando sua soma de verificação (_checksum_), que deve coincidir com a soma que aparece na página [Download]. Se a soma não corresponder, faça o _download_ novamente.

Se não estiver com pressa, é recomendado verificar também a autenticidade da imagem ISO.

A impressão digital (_fingerprint_) da chave pública do Projeto Linux Kamarada é:

```
6b18 52e7 764f b302 b805 a4a0 a575 bcce 1737 8ecc
```

Para importá-la, execute os comandos a seguir:

```
$ wget https://build.opensuse.org/projects/home:kamarada:15.2/public_key
$ gpg --import public_key
```

Para mais informações sobre essas verificações, leia:

- [Verificação de integridade e autenticidade com SHA-256 e GPG][how-to-verify-iso]

Com a imagem ISO baixada e as verificações feitas e bem-sucedidas, você tem 3 opções:

<ul class="list-unstyled">
    <li class="media mb-3">
        <img src="/files/2020/02/disk-burner.svg" class="mr-3" style="max-width: 48px;">
        <div class="media-body">
            <h6 class="mt-0">1) Gravar a imagem ISO em um DVD (gerando, assim, um LiveDVD)</h6>

            <p>Use um aplicativo como o <a href="https://cdburnerxp.se/">CDBurnerXP</a> (no Windows), o <a href="http://www.k3b.org/">K3b</a> (em um Linux com KDE) ou o <a href="https://wiki.gnome.org/Apps/Brasero">Brasero</a> (em um Linux com GNOME) para gravar a imagem ISO em um DVD. Ligue o computador com o LiveDVD na unidade de DVD para iniciar o Linux Kamarada.</p>

            <p>Esse <em>post</em> pode te ajudar com a gravação do DVD:</p>

            <ul><li><a href="{% post_url pt/2016-04-22-como-gravar-um-livedvd %}">Como gravar um LiveDVD</a></li></ul>
        </div>
    </li>

    <li class="media mb-3">
        <img src="/files/2020/02/usb-creator.svg" class="mr-3" style="max-width: 48px;">
        <div class="media-body">
            <h6 class="mt-0">2) Gravar a imagem ISO em um <em>pendrive</em> (gerando, assim, um LiveUSB)</h6>

            <p>Use o <a href="https://www.ventoy.net/">Ventoy</a> (disponível para Windows e Linux) para preparar o <em>pendrive</em> e copie a imagem ISO para ele. Ligue o computador com o LiveUSB para iniciar o Linux Kamarada.</p>

            <p>Esse <em>post</em> pode te ajudar com a preparação do LiveUSB:</p>

            <ul><li><a href="{% post_url pt/2020-07-29-ventoy-crie-pendrives-multiboot-simplesmente-copiando-imagens-iso-para-ele %}">Ventoy: crie um pendrive multiboot simplesmente copiando imagens ISO para ele</a></li></ul>
        </div>
    </li>

    <li class="media mb-3">
        <img src="/files/2020/02/virtualbox.svg" class="mr-3" style="max-width: 48px;">
        <div class="media-body">
            <h6 class="mt-0">3) Criar uma máquina virtual e usar a imagem ISO para iniciá-la</h6>

            <p>Essa opção te possibilita testar o Linux Kamarada sem precisar reiniciar o computador e sair do sistema operacional que você já usa.</p>

            <p>Para mais informações, leia:</p>

            <ul><li><a href="{% post_url pt/2019-10-08-virtualbox-a-forma-mais-facil-de-conhecer-o-linux-sem-precisar-instala-lo %}">VirtualBox: a forma mais fácil de conhecer o Linux sem precisar instalá-lo</a></li></ul>
        </div>
    </li>

    <li class="media mb-3">
        <div class="media-body">
            Depois de testar o Linux Kamarada, caso queira instalá-lo no seu computador ou na máquina virtual, inicie o instalador clicando nesse ícone, situado na <em>dock</em> (à esquerda, na tela).
        </div>
        <img src="/files/2020/02/calamares.svg" class="ml-3" style="max-width: 48px;">
    </li>
</ul>

O instalador apenas fará o particionamento e a cópia do sistema para o computador. Ao final, reinicie o computador. Então, um assistente do [YaST] fará as configurações iniciais.

[how-to-verify-iso]:    {% post_url pt/2018-10-06-verificacao-de-integridade-e-autenticidade-com-sha-256-e-gpg %}
[yast]:                 http://yast.opensuse.org/

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-calamares-pt.jpg" caption="Instalador" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-yast-firstboot-pt.jpg" caption="Configurações iniciais" %}
    </div>
</div>

## E se eu já uso o Linux Kamarada?

A imagem ISO não se destina a atualizações, apenas para testes e instalações novas. Se você já usa o Linux Kamarada 15.1 e quer atualizar sua instalação existente para o 15.2, leia:

- [Linux Kamarada e openSUSE Leap: como atualizar da versão 15.1 para a 15.2][upgrade-to-15.2]

## E se eu já uso o openSUSE Leap?

Você já usa o openSUSE Leap e quer transformá-lo no Linux Kamarada? Simples!

Basta adicionar o repositório do Linux Kamarada e instalar o pacote **[patterns-kamarada-gnome]**.

Você pode fazer isso de duas formas: pela interface gráfica, usando a instalação com 1 clique (*1-Click Install*), ou pelo terminal, usando o gerenciador de pacotes **zypper**. Escolha a que prefere.

Para instalar usando a instalação com 1 clique, clique no botão abaixo:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/patterns-kamarada-gnome-pt.ymp'><i class='fas fa-bolt'></i> Instalação com 1 clique</a></p>

Para instalar usando o terminal, primeiro adicione o repositório do Linux Kamarada:

```
# zypper addrepo -f -K -n "Linux Kamarada" -p 95 "http://c3sl.dl.osdn.jp/storage/g/k/ka/kamarada/\$releasever/openSUSE_Leap_\$releasever/" kamarada
```

O repositório do Linux Kamarada é gentilmente hospedado pela [OSDN], que replica seu conteúdo em alguns servidores de espelho (_mirrors_) espalhados pelo mundo. A instalação com 1 clique e o comando acima instruem seu sistema a usar o espelho brasileiro do repositório, gentilmente hospedado pela [C3SL (UFPR)][c3sl].

Se você está em outro país, consulte a [lista de espelhos na _wiki_ do Linux Kamarada no GitHub][mirrors].

Depois, instale o pacote **patterns-kamarada-gnome**:

```
# zypper in patterns-kamarada-gnome
```

Se você já usa a área de trabalho GNOME, provavelmente será necessário baixar poucos pacotes. Se você usa outra área de trabalho, o tamanho do _download_ será maior.

Quando a instalação terminar, se você criar um novo usuário, perceberá que ele receberá as configurações padrão do Linux Kamarada (como tema, papel de parede, etc.). Usuários já existentes podem seguir usando suas personalizações ou ajustar a aparência do sistema (por exemplo, usando os aplicativos **Ajustes** e **Configurações**).

[patterns-kamarada-gnome]:  https://software.opensuse.org/package/patterns-kamarada-gnome
[osdn]:                     https://osdn.net/projects/kamarada/
[c3sl]:                     https://www.c3sl.ufpr.br/
[mirrors]:                  https://github.com/kamarada/Linux-Kamarada-GNOME/wiki/Mirrors

## Onde obtenho ajuda?

A página [Ajuda] indica alguns lugares onde é possível obter auxílio com o Linux Kamarada, o openSUSE ou distribuições Linux em geral (incluindo essas duas).

O canal de suporte preferido pelos usuários tem sido o grupo [@LinuxKamarada](https://t.me/LinuxKamarada) no [Telegram], que é um aplicativo de mensagens que pode ser instalado ou usado a partir do navegador.

[ajuda]:        /pt/ajuda
[telegram]:     {% post_url pt/2019-07-12-20-aplicativos-que-voce-pode-usar-do-mesmo-jeito-no-linux-e-no-windows-parte-2 %}#12-telegram

## Onde obtenho os códigos-fonte?

Como todo projeto de _software_ livre, o Linux Kamarada disponibiliza seus códigos-fonte para quem quiser estudá-los, adaptá-los ou contribuir com o projeto.

O desenvolvimento do Linux Kamarada ocorre no [GitHub] e no [Open Build Service][obs]. Lá podem ser obtidos os códigos-fonte dos pacotes desenvolvidos especificamente para esse projeto (até mesmo [o código-fonte deste _site_][kamarada-website] que você lê está disponível).

Os códigos-fonte de pacotes herdados do openSUSE Leap podem ser obtidos diretamente dessa distribuição. Se precisar de ajuda para fazer isso, entre em contato, posso ajudar.

[github]:           https://github.com/kamarada
[obs]:              https://build.opensuse.org/project/subprojects/home:kamarada
[kamarada-website]: https://github.com/kamarada/kamarada-website

## Sobre o Linux Kamarada

O Projeto Linux Kamarada visa divulgar e promover o Linux como um sistema operacional robusto, seguro, versátil e fácil de usar, adequado para o uso diário seja em casa, no trabalho ou no servidor. O projeto começou como um _blog_ sobre o [openSUSE], que é a distribuição Linux que eu uso há 8 anos (desde [abril de 2012][vinyanalista], na época eu instalei o openSUSE 11.4 e depois atualizei para o 12.1). Agora o projeto disponibiliza sua própria distribuição Linux, que traz vários programas apresentados no _blog_ já instalados e prontos para uso.

A distribuição Linux Kamarada é baseada no openSUSE Leap e se destina ao uso em _desktops_ em casa e no trabalho, seja em empresas privadas ou em órgãos públicos. Contém os programas essenciais a qualquer instalação do Linux e uma área de trabalho com visual moderno e agradável.

[opensuse]:         https://www.opensuse.org/
[vinyanalista]:     https://vinyanalista.github.io/blog/2012/04/21/problemas-envolvendo-bootloaders-mbr-e-tabela-de-particoes/

## Ficha técnica

Para que seja possível comparar esta versão com a anterior e as futuras, segue um resumo do _software_ contido no Linux Kamarada 15.2 Final 1 Build 52.3:

- _kernel_ Linux 5.3.18
- servidor gráfico X.Org 1.20.3 (sem Wayland)
- área de trabalho GNOME 3.34.4 acompanhada de seus principais aplicativos (_core apps_), como Arquivos (antigo Nautilus), Calculadora, Terminal, Editor de texto (gedit), Captura de tela e outros
- suíte de aplicativos de escritório LibreOffice 6.4.4
- navegador Mozilla Firefox ESR 68.9.0 (navegador padrão)
- navegador Chromium 83 (navegador alternativo disponível)
- reprodutor multimídia VLC 3.0.10
- cliente de _e-mail_ Evolution
- centro de controle do YaST
- Brasero
- CUPS 2.2.7
- Firewalld 0.5.5
- GParted 0.31.0
- HPLIP 3.19.12
- Java (OpenJDK) 11.0.7
- KeePassXC 2.5.4
- KolourPaint 20.04.2
- Linphone 4.1.1
- PDFsam Basic 4.1.4
- Pidgin 2.13.0
- Samba 4.11.11
- Tor 0.4.2
- Transmission 2.94
- Vim 8.0
- Wine 5.0
- jogos: Aisleriot (Paciência), Copas, Iagno (Reversi), Mahjongg, Minas (Campo minado), Nibbles (Cobras), Quadrapassel (Tetris), Sudoku, Xadrez

Essa lista não é exaustiva, mas já dá uma noção do que se encontra na distribuição.

**Observação:** se você comparar essa lista com a da versão [15.2 RC][kamarada-15.2-rc], perceberá que houve um _downgrade_ do Mozilla Firefox e de outros programas. Foi intencional. Isso ocorreu porque eu não usei o repositório de atualizações na criação da imagem do Linux Kamarada 15.2 Final. O objetivo disso foi evitar que a imagem apresentasse os _bugs_ [boo#1173991][boo-1173991] e [boo#1176304][boo-1176304] do openSUSE Leap, introduzidos por atualizações. Quando esses _bugs_ forem corrigidos, pretendo criar outra imagem atualizada. Mas você não precisa se preocupar com isso: pode instalar o Linux Kamarada e [obter atualizações para o sistema][howto-update] normalmente.

[kamarada-15.2-rc]: {% post_url pt/2020-08-08-linux-kamarada-libera-versao-candidata-a-lancamento-15.2-rc %}
[boo-1173991]:      https://bugzilla.opensuse.org/show_bug.cgi?id=1173991
[boo-1176304]:      https://bugzilla.opensuse.org/show_bug.cgi?id=1176304
[howto-update]:     {% post_url pt/2019-05-14-como-obter-atualizacoes-para-o-linux-opensuse %}
