---
date: 2020-08-18 01:00:00 GMT-3
image: '/files/2020/08/firefox-video-01-pt.jpg'
layout: post
published: true
nickname: 'firefox-chromium-videos'
title: 'Firefox e Chromium não conseguem reproduzir vídeos: veja como resolver'
---

Se você usa o [Mozilla Firefox][firefox] ou o [Chromium], navegadores que vem no [Linux Kamarada 15.2 RC][kamarada-15.2-rc], talvez já tenha se deparado com algum vídeo que eles não conseguem reproduzir. As mensagens de erro variam de _site_ para _site_. Veja alguns exemplos:

{% include image.html src='/files/2020/08/firefox-video-01-pt.jpg' caption='[Twitter](https://twitter.com/openSUSE/status/1290345568452202498): Não foi possível reproduzir a mídia.' %}

{% include image.html src='/files/2020/08/chromium-video-01-pt.jpg' caption='[Facebook](https://www.facebook.com/167950666638006/videos/1043355016062250/): Ocorreu um erro. Estamos tendo problemas ao reproduzir este vídeo.' %}

De forma resumida, isso acontece porque estão faltando _codecs_ proprietários no seu computador. A dica a seguir pode te ajudar a resolver esse problema.

Caso você ainda não conheça, o Linux Kamarada é uma distribuição [Linux] baseada no [openSUSE Leap][leap-15.2], portanto a dica a seguir também serve para usuários do [openSUSE]. Outras distribuições podem enfrentar problema semelhante e ter também solução análoga.

## Como resolver esse problema

A solução, no caso do Linux Kamarada e do openSUSE Leap, se resume a:

1. Adicionar o repositório do projeto [Packman], caso você ainda não tenha esse repositório adicionado no seu sistema;
2. Obter a lista atualizada de pacotes disponíveis nos repositórios; e
3. Atualizar os pacotes do sistema permitindo a mudança de fornecedor, o que deve fazer com que alguns pacotes fornecidos pelo openSUSE sejam substituídos por pacotes do Packman, que contém os  _codecs_ proprietários faltantes.

Há pelo menos duas formas de fazer isso: pela interface gráfica, que pode ser mais amigável especialmente para os iniciantes, ou pela interface de linha de comando.

### Pela interface de linha de comando

A solução pela linha de comando usa o gerenciador de pacotes **[zypper]**. Como ela é mais resumida, vou começar mostrando ela.

Execute os 3 comandos a seguir, que correspondem aos 3 passos acima respectivamente, como usuário administrador (_root_):

```
# zypper ar -cfp 90 http://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_15.2/ packman
# zypper ref
# zypper up --allow-vendor-change
```

### Pela interface gráfica

Embora seja mais amigável, a solução pela interface gráfica requer alguns cliques e passa por mais telas. Mas a facilidade mais que compensa esse caminho mais longo.

#### Adicionando o repositório do projeto Packman

Abra o [Centro de controle do YaST][yast]. Para isso, abra o menu **Atividades**, no canto superior esquerdo da tela, digite `yast` e clique no ícone correspondente:

{% include image.html src='/files/2020/08/yast-packman-01-pt.jpg' %}

Dentro da categoria **Software**, a primeira, clique no item **Repositórios de software**:

{% include image.html src='/files/2020/08/yast-packman-02-pt.jpg' %}

Na tela **Repositórios de software configurados**, clique no botão **Adicionar**:

{% include image.html src='/files/2020/08/yast-packman-03-pt.jpg' %}

Na tela seguinte, selecione a opção **Repositórios da comunidade** e clique no botão **Próximo**:

{% include image.html src='/files/2020/08/yast-packman-04-pt.jpg' %}

Na **Lista de repositórios online**, ative o **Packman Repository** e clique em **OK**:

{% include image.html src='/files/2020/08/yast-packman-05-pt.jpg' %}

O próprio YaST se encarrega de obter a lista atualizada de pacotes disponíveis nos repositórios. Ele pergunta se pode confiar no novo repositório, clique em **Confiar**:

{% include image.html src='/files/2020/08/yast-packman-06-pt.jpg' %}

De volta à tela **Repositórios de software configurados**, clique em **OK** para sair dela.

#### Obtendo os pacotes do repositório do Packman

De volta à tela principal do YaST, clique no item **Gerenciamento de software**.

Na janela que se abre, abra o menu **Ver** e clique em **Repositórios**:

{% include image.html src='/files/2020/08/yast-packman-07-pt.jpg' %}

À esquerda, selecione o **Packman Repository**, e à direita, clique em **Comutar pacotes do sistema**:

{% include image.html src='/files/2020/08/yast-packman-08-pt.jpg' %}

Note que vários pacotes que já estavam instalados no sistema, mas eram fornecidos pelo openSUSE, foram marcados para serem atualizados, para versões fornecidas pelo Packman:

{% include image.html src='/files/2020/08/yast-packman-09-pt.jpg' %}

Clique no botão **Aceitar**.

O YaST alerta que vai instalar mais alguns pacotes, clique em **Continuar**:

{% include image.html src='/files/2020/08/yast-packman-10-pt.jpg' %}

O YaST baixa e instala os pacotes, o que pode demorar mais ou menos dependendo da sua conexão de Internet:

{% include image.html src='/files/2020/08/yast-packman-11-pt.jpg' %}

Ao final, o YaST avisa que a instalação dos pacotes foi concluída com sucesso:

{% include image.html src='/files/2020/08/yast-packman-12-pt.jpg' %}

Clique em **Concluir** para fechar essa janela e depois feche o YaST.

## Prontinho!

Quando terminar os procedimentos acima, feche o navegador e abra-o de novo.

Feito isso, os vídeos que antes não eram reproduzidos passam a aparecer:

{% include image.html src='/files/2020/08/firefox-video-02-pt.jpg' %}

{% include image.html src='/files/2020/08/chromium-video-02-pt.jpg' %}

## Caso você queira mais informações

O MP4 e o H.264 se tornaram formatos de vídeo comuns na Internet. A rigor, o [MP4] é um formato de _[container]_, que pode armazenar em um único arquivo trilha de vídeo, trilhas de áudio, legendas embutidas e outras informações. Já o [H.264] é um formato de vídeo de alta definição comprimido, ou seja, ele codifica apenas a informação visual (o vídeo em si) e vem dentro de um _container_ (como o MP4). Geralmente, "arquivo de vídeo H.264" refere-se a um arquivo com extensão `.mp4` que contém uma trilha de vídeo codificada com o H.264.

Ocorre que o _[codec]_ do H.264 não é um [_software_ livre][free-sw], mas um [_software_ proprietário][proprietary-sw] da Moving Picture Experts Group Licensing Administration ([MPEG LA][mpeg-la]) e, portanto, não pode ser fornecido em distribuições Linux como o Linux Kamarada e o openSUSE.

Se você abre uma página no navegador que tem um vídeo H.264, mas o _codec_ do H.264 não está instalado no sistema — e ele não vem instalado por padrão nem no openSUSE, nem no Linux Kamarada — então o vídeo não é reproduzido, como mostrei no início do texto.

Felizmente, no caso dessas duas distribuições, existe o projeto Packman que fornece esse e outros _codecs_ proprietários na forma de pacotes que podem ser instalados com facilidade.

Note que esse problema não ocorre no navegador [Google Chrome][google-chrome]. Provavelmente a [Google] fez um acordo comercial com a MPEG LA para distribuir o _codec_ do H.264 embutido no Chrome.

### Mas e o plugin OpenH264 do Firefox?

Se você usa o Firefox, talvez tenha reparado que ele tem um _plugin_ chamado "Codec de vídeo OpenH264", que é instalado automaticamente:

{% include image.html src='/files/2020/08/firefox-openh264-pt.jpg' %}

[OpenH264] é o nome da implementação do _codec_ do H.264 feita pela [Cisco]. Essa implementação tem seu [código aberto][opensource], porém também não é um _software_ livre, visto que seus binários são lançados sob uma licença da Cisco, que cobre os custos de licenciamento junto à MPEG LA para fornecer esse _codec_ de graça. Por isso, ele deve ser baixado da Cisco.

A Mozilla fez uma parceria com a Cisco para que o Firefox possa usar o OpenH264. Quando você usa o Firefox pela primeira vez, ele baixa o _plugin_ do OpenH264 do _site_ da Cisco.

O OpenH264 implementa apenas a parte mais básica (_baseline profile_) do formato H.264, de modo que só é usado pelo Firefox para dar suporte a chamadas de vídeo, como as feitas usando a tecnologia [WebRTC]. Exemplos de serviços de chamadas de vídeo que usam essa tecnologia incluem o [Google Meet][google-meet], o [Google Hangouts][google-hangouts], o [Facebook Messenger][messenger] e o [Discord].

Portanto, o _plugin_ OpenH264 do Firefox nada tem a ver com os vídeos que não são reproduzidos. Falei dele aqui apenas para esclarecer isso.

## Referências

- [Twitter says "The media could not be played". \| Firefox Support Forum \| Mozilla Support][mozilla-questions]
- [SDB:Firefox MP4/H.264 Video Support - openSUSE Wiki][opensuse-wiki]
- [Information about the H.264 patent license - Free Software Foundation][h264-fsf]
- [Por que existe um plugin OpenH264 no Firefox? \| Ajuda do Firefox][mozilla-kb]
- [\[opensuse-factory\] Status of x264 libraries in the standard distribution][opensuse-factory]
- [OpenH264 - Fedora Project Wiki][fedora]
- [10 Massive Applications Using WebRTC - BlogGeek.me][bloggeek]

[firefox]:              https://www.mozilla.org/pt-BR/firefox/
[chromium]:             https://www.chromium.org/
[kamarada-15.2-rc]:     https://kamarada.github.io/pt/2020/08/08/linux-kamarada-libera-versao-candidata-a-lancamento-15.2-rc/
[linux]:                https://www.vivaolinux.com.br/linux/
[leap-15.2]:            https://kamarada.github.io/pt/2020/07/01/versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers/
[opensuse]:             https://www.opensuse.org/
[packman]:              http://packman.links2linux.com/
[zypper]:               https://pt.opensuse.org/Portal:Zypper
[yast]:                 http://yast.opensuse.org/
[mp4]:                  https://pt.wikipedia.org/wiki/MP4
[container]:            https://pt.wikipedia.org/wiki/Arquivo_recipiente
[h.264]:                https://pt.wikipedia.org/wiki/H.264
[codec]:                https://pt.wikipedia.org/wiki/Codec
[free-sw]:              https://www.gnu.org/philosophy/free-sw.pt-br.html
[proprietary-sw]:       https://pt.wikipedia.org/wiki/Software_proprietário
[mpeg-la]:              https://www.mpegla.com/
[google-chrome]:        https://www.google.com/chrome/
[google]:               https://www.google.com/
[openh264]:             http://www.openh264.org/
[cisco]:                https://www.cisco.com/c/pt_br/index.html
[opensource]:           https://pt.wikipedia.org/wiki/Software_de_código_aberto
[webrtc]:               https://webrtc.org/
[google-meet]:          https://meet.google.com/
[google-hangouts]:      https://hangouts.google.com/
[messenger]:            https://www.messenger.com/
[discord]:              https://discord.com/
[mozilla-questions]:    https://support.mozilla.org/en-US/questions/1188176
[opensuse-wiki]:        https://en.opensuse.org/SDB:Firefox_MP4/H.264_Video_Support
[h264-fsf]:             https://www.fsf.org/licensing/h264-patent-license
[mozilla-kb]:           https://support.mozilla.org/pt-BR/kb/por-que-existe-um-plugin-openh264-no-firefox
[opensuse-factory]:     https://lists.opensuse.org/opensuse-factory/2018-02/msg00846.html
[fedora]:               https://fedoraproject.org/wiki/OpenH264
[bloggeek]:             https://bloggeek.me/massive-applications-using-webrtc/
