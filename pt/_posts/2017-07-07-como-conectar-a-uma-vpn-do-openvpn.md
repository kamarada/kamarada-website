---
date: '2017-07-07 01:15:00 UTC-3'
layout: post
published: true
title: 'Como conectar a uma VPN do OpenVPN'
image: '/files/2017/07/openvpn-client.png'
nickname: 'openvpn-client'
---

Nos acostumamos a ter acesso a tudo de qualquer lugar. Havendo conexão de Internet, hoje é possível trabalhar de casa acessando os sistemas da empresa, ou abrir no celular um documento que está no computador de casa. Como a Internet é, a princípio, um espaço público, inseguro, acessível, visível a todos, para garantir que os acessos remotos a essas redes privadas sejam feitos com privacidade e segurança foram criadas as redes privadas virtuais ou VPNs.

{% include image.html src="/files/2017/07/openvpn-client.png" caption="Uma VPN permite enviar de casa um documento para imprimir no trabalho" %}

## O que é uma VPN?

Uma **rede privada virtual** (do inglês [*Virtual Private Network*][vpn], ou VPN) estabelece uma conexão entre dois computadores distantes, que passam a se comunicar pela Internet como se estivessem fisicamente conectados à mesma [rede local][lan].

A VPN funciona assim: os dois computadores pertencem, a princípio, a redes diferentes (eles podem estar em prédios, cidades ou até mesmo países diferentes, por exemplo). Mas eles precisam se comunicar e possuem conexão com a Internet. Então, eles estabelecem na rede mundial um circuito por onde trocam informações de forma privada. É como uma ligação telefônica que não pode ser grampeada.

{% include image.html src="/files/2017/07/openvpn-client-01.jpg" caption="Apesar de estarem conectados à Internet, dois computadores em uma VPN se comunicam de forma privada" %}

A VPN é dita **privada** porque os computadores utilizam criptografia para se comunicar, impedindo que outros computadores leiam sua comunicação. Por isso, a VPN também é conhecida como **túnel** (uma analogia perfeita, se você parar pra pensar). O termo **virtual** vem do fato de a VPN simular uma rede local, quando na verdade há duas redes distintas separadas pela grande rede mundial que é a Internet.

{% include image.html src="/files/2017/07/openvpn-client-02.png" caption="Um túnel é bem assim: o que entra em uma ponta sai em outra, sendo ocultado no caminho" %}

Com VPNs, podemos fazer algumas coisas interessantes. Empresas vem usando VPNs para permitir que seus empregados trabalhem remotamente, assim como para interligar matrizes e filiais aproveitando suas conexões com a Internet. Sem VPNs, essas conexões seriam feitas usando antenas ou cabos de fibra ótica, e seriam muito mais caras ou até mesmo inviáveis. Pessoas tem usado VPNs para acessar conteúdos bloqueados ou censurados em determinados países.

## Como é feita uma VPN?

Se conectar a uma VPN é um procedimento surpreendentemente simples, apesar de complexo nos bastidores (conexão, criptografia, etc.). Por exemplo, você está em casa e precisa se conectar à rede do trabalho. Sua casa e a empresa dispõem de conexão com a Internet. Você instala e configura em seu computador um cliente VPN e se conecta ao servidor VPN do seu trabalho. Cliente e servidor estabelecem a conexão segura e lhe concedem acesso à rede do trabalho. Pronto!

Para que consigam se comunicar, cliente e servidor utilizam um protocolo. Existem alguns protocolos de VPNs, cada um servindo a um tipo de VPN e mais adequado para uma ou outra finalidade. Exemplos incluem [PPTP, L2TP, SSTP][vpn-protocols] e [OpenVPN][openvpn].

O OpenVPN é um protocolo popular por ser [livre][free-software], versátil, [multiplataforma][cross-platform] e fácil de configurar e usar. Ele é apropriado para o exemplo da conexão à rede do trabalho.

Vejamos nesse *post* como você pode conectar seu computador com Linux [openSUSE][opensuse] à rede do trabalho usando o cliente OpenVPN.

É necessário que a empresa possua um servidor OpenVPN, como o configurado [nesse *post*][vinyanalista-vpn] no [pfSense][pfsense], um *firewall* igualmente livre, versátil e popular. Como configurar um servidor OpenVPN no openSUSE será assunto para outro *post*.

Para acessar conteúdos bloqueados ou censurados, ou simplesmente garantir o anonimato e a privacidade da navegação, outro tipo de VPN se faz mais apropriado, falarei dele em outro *post*. Adianto, para os curiosos, que falarei do [projeto Tor][tor].

## Como se conectar

Depois de todas essas explicações, vamos ao objetivo do *post*.

Peça ao administrador da rede do seu trabalho o arquivo que contém as configurações do cliente OpenVPN. Ele deve possuir a extensão **.ovpn**. Pode se chamar, por exemplo, **vpn-do-trabalho.ovpn**. Pergunte o que você precisa para se conectar, como, por exemplo, nome de usuário (*login*) e senha.

No computador que deseja conectar à VPN, abra o aplicativo **Configurações** e clique em **Rede**:

{% include image.html src="/files/2017/07/openvpn-client-03-pt.jpg" %}

À esquerda são listadas as conexões de rede. Clique no botão de adicionar, abaixo:

{% include image.html src="/files/2017/07/openvpn-client-04-pt.jpg" %}

Selecione **VPN**:

{% include image.html src="/files/2017/07/openvpn-client-05-pt.jpg" %}

Selecione **Importar de arquivo**:

{% include image.html src="/files/2017/07/openvpn-client-06-pt.jpg" %}

Procure pelo arquivo de configuração fornecido pelo administrador de rede e selecione-o.

Na tela **Adicionar conexão de rede**, boa parte dos campos já está preenchida com as informações presentes naquele arquivo:

{% include image.html src="/files/2017/07/openvpn-client-07-pt.jpg" %}

Você deve preencher os demais campos, a exemplo de **Nome de usuário**, **Senha** e **Senha da chave privada**, conforme as orientações do administrador de rede. Opcionalmente, você pode mudar o **Nome** da conexão para algo que ajude a identificá-la (no meu exemplo, eu a nomeei como `trabalho`).

Por fim, clique em **Adicionar**.

De volta às configurações de **Rede**, ative a conexão:

{% include image.html src="/files/2017/07/openvpn-client-08-pt.jpg" %}

Se o estado da conexão não mudou para **Conectado**, clique no botão de configurações (ícone de engrenagem no canto inferior direito) e verifique as configurações da VPN.

Quando não precisar mais usar a VPN, desconecte clicando no menu do sistema, no canto superior direito da tela, depois na VPN e por último em **Desligar**:

{% include image.html src="/files/2017/07/openvpn-client-09-pt.jpg" %}

Espero que as informações possam ter sido úteis!

Para referência futura, nesse *post* foi utilizada a distribuição Linux [openSUSE Leap 42.2][opensuse-leap-42.2] com ambiente de trabalho [GNOME 3.20][gnome-3.20] e cliente [OpenVPN 2.3.8][openvpn-2.3.8].

## Referências

- [Como criar uma VPN utilizando pfSense e OpenVPN - Antônio Vinícius][vinyanalista-vpn]
- [Why You Should Be Using a VPN (and How to Choose One)][lifehacker-vpn]
- [VPNs: What They Do, How They Work, and Why You're Dumb for Not Using One][gizmodo-vpn]
- [Connecting to pfSense-based OpenVPN Server From Linux Mint 17 - YouTube][youtube-openvpn-linux]

[vpn]:                      https://pt.wikipedia.org/wiki/Virtual_private_network
[lan]:                      https://pt.wikipedia.org/wiki/Rede_de_%C3%A1rea_local
[vpn-protocols]:            https://technet.microsoft.com/en-us/library/cc771298(v=ws.10).aspx
[openvpn]:                  https://openvpn.net/
[free-software]:            https://www.gnu.org/philosophy/free-sw.pt-br.html
[cross-platform]:           https://pt.wikipedia.org/wiki/Multiplataforma
[opensuse]:                 https://www.opensuse.org/
[vinyanalista-vpn]:         https://vinyanalista.github.io/blog/2016/06/26/como-criar-uma-vpn-pfsense-openvpn/
[pfsense]:                  https://www.pfsense.org/
[tor]:                      https://www.torproject.org/
[opensuse-leap-42.2]:       {%post_url pt/2016-11-16-opensuse-leap-42-2-versao-otima-para-profissionais-linux %}
[gnome-3.20]:               https://www.gnome.org/news/2016/03/gnome-3-20-released/
[openvpn-2.3.8]:            https://github.com/OpenVPN/openvpn/releases/tag/v2.3.8
[lifehacker-vpn]:           http://lifehacker.com/5940565/why-you-should-start-using-a-vpn-and-how-to-choose-the-best-one-for-your-needs
[gizmodo-vpn]:              http://gizmodo.com/5990192/vpns-what-they-do-how-they-work-and-why-youre-dumb-for-not-using-one
[youtube-openvpn-linux]:    https://youtu.be/LaKdl2Dv920?t=61
