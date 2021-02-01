---
date: '2021-01-31 22:00:00 GMT-3'
image: '/files/2021/01/kamarada-15.1-eol.jpg'
layout: post
nickname: 'kamarada-15.1-eol'
title: 'Suporte do openSUSE Leap 15.1 e do Linux Kamarada 15.1 se encerram hoje'
---

{% include image.html src='/files/2021/01/kamarada-15.1-eol.jpg' %}

O suporte do [openSUSE Leap 15.1][leap-15.1], lançado em 22 de maio de 2019, se encerra hoje, 31 de janeiro de 2021, conforme [anúncio feito na lista de discussão][opensuse-security-announce]. Isso quer dizer que o openSUSE Leap 15.1 não receberá mais atualizações, seja para corrigir _bugs_ de funcionalidades ou mesmo falhas de segurança.

O [Projeto openSUSE][opensuse] recomenda que usuários do openSUSE Leap 15.1 atualizem para o [openSUSE Leap 15.2][leap-15.2], lançado em 01 de julho de 2020 e que deve receber atualizações até dezembro de 2021, de acordo com a [_wiki_ do openSUSE][opensuse-lifetime].

Até lá, provavelmente já teremos o [openSUSE Leap 15.3][leap-15.3], cujo lançamento é previsto para 07 de julho de 2021. Portanto, quando o Leap 15.3 for lançado, os usuários do Leap 15.2 terão aproximadamente 6 meses para fazer a atualização da distribuição.

Como o Linux Kamarada é baseado no openSUSE Leap, usuários do Linux Kamarada são, por tabela, usuários do openSUSE Leap também e recebem essas mesmas atualizações.

Portanto, o suporte do [Linux Kamarada 15.1][kamarada-15.1], lançado em 24 de fevereiro de 2020, também se encerra hoje, 31 de janeiro de 2021. Se você usa o Linux Kamarada 15.1, eu recomendo que atualize para o [Linux Kamarada 15.2][kamarada-15.2], lançado em 11 de setembro de 2020 e que deve receber atualizações pelo mesmo período que o openSUSE Leap 15.2, ou seja, até dezembro de 2021.

Se você usa o openSUSE Leap (ou o Linux Kamarada) 15.1, veja como atualizar para o 15.2 em:

- [Linux Kamarada e openSUSE Leap: como atualizar da versão 15.1 para a 15.2][upgrade]

As instruções no tutorial acima se aplicam a ambas as distribuições.

Peço desculpas por ter avisado sobre o fim do suporte em cima da hora, mas sou mantenedor de distribuição "de primeira viagem". Confesso que não estava atento ao fim do suporte do openSUSE Leap 15.1 e fiquei sabendo também em cima, enquanto redigia sobre [o _bug_ do comando **sudo**][sudo] (aliás, mais um bom motivo para você atualizar seu sistema). Para a versão 15.2, vou tentar lembrar com um pouco mais de antecedência, mas já aproveito para avisar que o fim do suporte será junto com o do openSUSE Leap, em dezembro.

Aliás, já deixo de antemão definido que o fim do suporte de todas as próximas versões do Linux Kamarada se dará junto do fim do suporte da versão do openSUSE Leap equivalente.

Se tiverem alguma dúvida, escrevam nos comentários deste texto ou do tutorial acima. Vocês também podem conferir outras opções na página [Ajuda].

[leap-15.1]:                    {% post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[opensuse-security-announce]:   https://lists.opensuse.org/opensuse-security-announce/2020-11/msg00040.html
[opensuse]:                     https://www.opensuse.org/
[leap-15.2]:                    {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[opensuse-lifetime]:            https://en.opensuse.org/Lifetime
[leap-15.3]:                    https://en.opensuse.org/Portal:15.3
[kamarada-15.1]:                {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[upgrade]:                      {% post_url pt/2020-08-31-linux-kamarada-e-opensuse-leap-como-atualizar-da-versao-151-para-a-152 %}
[kamarada-15.2]:                {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[sudo]:                         {% post_url pt/2021-01-29-falha-de-seguranca-no-comando-sudo-atualize-seu-sistema %}
[ajuda]:                        /pt/ajuda
