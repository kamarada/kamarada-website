---
date: '2020-10-25 18:15:00 GMT-3'
image: '/files/2020/10/youtube-dl-takedown-pt.jpg'
layout: post
published: true
nickname: 'youtube-dl-takedown'
title: 'Microsoft tira do ar repositório GitHub do projeto de código-aberto youtube-dl'
excerpt: 'O programa de código aberto youtube-dl é uma das melhores ferramentas para baixar vídeos do YouTube e de muitos outros serviços de hospedagem de vídeos. Mas a existência desse projeto está sob ameaça agora. A Recording Industry Association of America (RIAA) — traduzindo: Associação Americana da Indústria de Gravação — enviou uma queixa ao GitHub contra o youtube-dl e seus clones (forks) no dia 23 de outubro.'
---

{% capture nota1 %}
Esta é uma tradução não oficial da notícia originalmente publicada por Abhishek Prakash no _site_ [It's FOSS](https://itsfoss.com/youtube-dl-github-takedown/). A notícia original, em inglês, foi disponibilizada sob a licença [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
{% endcapture %}

{% include note.html text=nota1 %}

{% include image.html src='/files/2020/10/youtube-dl-takedown-pt.jpg' %}

O programa de código aberto **[youtube-dl]** é uma das melhores ferramentas para [baixar vídeos do YouTube][youtube-dl-itsfoss] e de muitos outros serviços de hospedagem de vídeos.

Mas a existência desse projeto está sob ameaça agora. A [_Recording Industry Association of America_ (RIAA)][riaa] — traduzindo: Associação Americana da Indústria de Gravação — enviou uma queixa ao GitHub contra o youtube-dl e seus clones (_forks_) no dia 23 de outubro.

O [GitHub], de propriedade da [Microsoft], obedeceu imediatamente e, em 24 horas, o repositório oficial do youtube-dl, assim como os repositórios dos seus clones, foram desativados. A remoção foi justificada com base na DMCA.

{% include image.html src='/files/2020/10/youtube-dl-dmca.jpg' caption='A mensagem que aparece se você tenta acessar [github.com/ytdl-org/youtube-dl](https://github.com/ytdl-org/youtube-dl/)' %}

## O que é uma remoção DMCA?

[DMCA (_Digital Millennium Copyright Act_)][dmca] — Lei dos Direitos Autorais do Milênio Digital — é uma lei dos Estados Unidos que regula direitos autorais na Internet.

Se o proprietário dos direitos autorais sobre um conteúdo (vídeo, áudio, texto) acredita que determinada página da _web_ está usando (ou permitindo que outros usem) o conteúdo sem autorização (infringindo os direitos do autor do conteúdo), o proprietário pode enviar um aviso de remoção DMCA (_DMCA takedown notice_) para o serviço de hospedagem.

Ao receber o aviso de remoção DMCA, o serviço de hospedagem pode desativar ou excluir a página da _web_ (ou o _site_ inteiro).

A lei também prevê a possibilidade de contranotificação (_DMCA counter notice_), que a outra parte pode usar para contestar a remoção.

## A queixa da RIAA contra o youtube-dl

A [queixa enviada pela RIAA][queixa] acusa o youtube-dl de infringir os direitos de seus membros.

> O objetivo claro deste código-fonte é: (i) contornar as medidas de proteção tecnológica usadas por serviços de _streaming_ autorizados, como o YouTube, e (ii) reproduzir e distribuir vídeos musicais e gravações de som de propriedade de nossas empresas membros sem autorização para tal uso. Observamos que o código-fonte é descrito no GitHub como "um programa de linha de comando para baixar vídeos do YouTube.com e de alguns outros _sites_".

A queixa diz que o repositório GitHub do youtube-dl mencionava que ele era um programa para baixar vídeos do YouTube.

O README — arquivo [LEIAME] — do youtube-dl mencionava a possibilidade de baixar vídeos do Justin Timberlake, da Taylor Swift, etc nos exemplos de uso do comando. Isso também foi usado na queixa para criar caso contra o youtube-dl.

O GitHub da Microsoft recebeu o aviso de remoção DMCA e desativou o youtube-dl e dezessete outros repositórios mencionados no aviso.

John Bergmayer, diretor jurídico da [Public Knowledge][publicknowledge], diz não ver na alegação uma afirmação de que o youtube-dl é um trabalho infrator, mas a alegação em si que é ilegal.

<blockquote class="twitter-tweet" data-lang="pt"><p lang="en" dir="ltr">This isn’t really a DMCA request. I don’t see an assertion that youtube-dl is an infringing work. Rather the claim is that it’s illegal per se <a href="https://t.co/vQ16nVleCf">https://t.co/vQ16nVleCf</a></p>&mdash; John Bergmayer (@bergmayer) <a href="https://twitter.com/bergmayer/status/1319729582329790465?ref_src=twsrc%5Etfw">23 de outubro de 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## O que vem pela frente para o youtube-dl?

A equipe do youtube-dl certamente deve entrar com uma contra-apelação, porque eles não estão servindo diretamente conteúdo protegido por direitos autorais aos usuários.

Pensando em uma postura defensiva, é aconselhável que eles garantam algumas coisas:

- Considerar mudar o nome, removendo do nome a menção ao YouTube, para evitar possíveis avisos de direitos autorais do Google (proprietário do YouTube) no futuro
- Eles não devem mencionar em seu repositório quaisquer exemplos que demonstrem o _download_ de vídeos do YouTube protegidos por direitos autorais
- Exibir um aviso de que o ônus de baixar vídeos recai sobre o usuário e desencorajá-lo a baixar vídeos protegidos por direitos autorais, isso é algo que os [clientes de torrent para Linux][torrent], como o [Transmission], já fazem

{% include image.html src='/files/2020/10/youtube-dl-transmission.jpg' caption='Aviso que o cliente de torrent Transmission apresenta em seu primeiro uso' %}

## Projetos como o youtube-dl precisam viver

O youtube-dl é usado por muitas outras ferramentas e _sites_ para oferecer a possibilidade de baixar vídeos do YouTube e de outros serviços de hospedagem de vídeos.

Isso pode soar como pirataria, mas nem sempre é o caso. Alguns criadores de vídeo disponibilizam seus vídeos sob a licença [Creative Commons][cc] para que outros possam reusar seu trabalho. Baixar tais vídeos usando o youtube-dl não deveria ser um problema.

Muitas pessoas no mundo todo têm conexão limitada com a Internet. Baixar vídeos educacionais para que possam ser consultados mais tarde, de modo a economizar franquia de dados e/ou largura de banda, é um uso legítimo dessa ferramenta.

## Foi justo derrubar o youtbe-dl?

Estou surpreso com a ação rápida tomada pelo Microsoft GitHub nesse caso. Eles se acovardaram muito facilmente.

Imagina o que pode acontecer se um bando de _[trolls]_ começar a enviar pedidos de remoção para outros projetos usando o pretexto de direitos autorais. Sim, isso é possível. Lembre-se de como um [_troll_ de patentes tentou extorquir dinheiro do Shotwell][shotwell], programa de visualização de imagens do [GNOME].

Eu realmente espero que a equipe do youtube-dl conteste a remoção e não ceda à pressão.

Eu sei que é um projeto de código-aberto que pode hospedar seu código em um dos [serviços alternativos ao GitHub][github-alternatives], como o [GitLab]. No entanto, a RIAA é uma organização poderosa e pode pressionar outros serviços de hospedagem de código a remover os repositórios do youtube-dl de novo. Repetidas remoções também podem desmoralizar os desenvolvedores, levando-os a abandonar o projeto.

Sempre me perguntei por que o YouTube não permite que criadores de vídeos ofereçam seus vídeos para _download_ seja gratuitamente, seja mediante o pagamento de uma taxa.

E você, o que acha de todo o episódio? Você acha que a remoção foi correta? Compartilhe sua visão nos comentários.

[youtube-dl]: https://youtube-dl.org/
[youtube-dl-itsfoss]: https://itsfoss.com/download-youtube-linux/
[riaa]: https://www.riaa.com/
[github]: https://github.com/
[microsoft]: https://www.microsoft.com/pt-br
[dmca]: https://www.dmca.com/FAQ/What-is-DMCA
[queixa]: https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md
[leiame]: https://pt.wikipedia.org/wiki/Readme
[publicknowledge]: https://www.publicknowledge.org/
[torrent]: https://itsfoss.com/best-torrent-ubuntu/
[transmission]: https://transmissionbt.com/
[cc]: https://support.google.com/youtube/answer/2797468?hl=pt-BR
[trolls]: https://pt.wikipedia.org/wiki/Trol_(internet)
[shotwell]: https://diolinux.com.br/2019/10/gnome-escolhe-lutar-legalmente-contra-alegacao-suposta-quebra-patente-shotwell.html
[gnome]: https://br.gnome.org/
[github-alternatives]: https://itsfoss.com/github-alternatives/
[gitlab]: https://about.gitlab.com/
