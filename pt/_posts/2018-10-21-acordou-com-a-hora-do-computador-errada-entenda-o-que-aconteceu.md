---
date: 2018-10-21 12:50:00 GMT-3
image: '/files/2018/10/tux-wrong-clock.png'
layout: post
published: true
nickname: 'how-to-veracrypt'
title: 'Acordou com a hora do computador errada? Entenda o que aconteceu'
excerpt: ''
---

{% include image.html src="/files/2018/10/tux-wrong-clock.png" style="max-width: 200px;" %}

Muita gente que virou acordado a madrugada de ontem para hoje (21/10/2018) percebeu que [o relógio do computador se adiantou em 1 hora sozinho][cb], com o suposto início do horário de verão. Ocorre que desde o ano passado já [é a terceira vez que o governo brasileiro altera a data de início do horário de verão em 2018][g1] e o computador talvez não tenha recebido atualizações. Quem estava com seu computador devidamente configurado e atualizado não teve problemas. Nesse *post* você vai entender o que aconteceu e como se prevenir.

## 1) O que aconteceu

O [**horário de verão**][horario-de-verao] é a prática de adiantar os relógios em 1 hora durante o verão. Quando foi criado, a ideia era aproveitar a maior duração do dia no verão e economizar energia.

No entanto, com o passar dos anos, a mudança na rotina dos brasileiros e o aquecimento do planeta fizeram com que a economia com o horário de verão se tornasse cada vez menor: as pessoas mudaram seus horários de trabalho e passaram a chegar em casa já à noite, além disso o uso de equipamentos que mais consomem energia como ares-condicionados e ventiladores se intensificou justamente durante o dia.

[Há proposta do Senado para extinguir o horário de verão][r7] e [o governo estuda fazer isso][oglobo]. Quem é contra o horário de verão, também alega que o horário de verão pode implicar problemas de saúde. Quem é a favor, alega que o horário de verão incentiva o comércio, o turismo e a prática de esportes nas cidades.

Por ora, o governo decidiu reduzir a duração do horário de verão.

Em dezembro de 2017, o presidente Michel Temer assinou decreto que alterou o início do horário de verão em 2018 para 04 de novembro, um fim de semana após o segundo turno das eleições, que está marcado para 28 de outubro.

Essa alteração foi feita a pedido do Tribunal Superior Eleitoral (TSE). O horário de verão em ano de eleição dificulta a apuração dos votos. Em 2014, por exemplo, a Justiça Eleitoral teve que adiar a divulgação do resultado para esperar a votação acabar no Acre.

O final do horário de verão foi mantido no terceiro domingo de fevereiro de 2019 (dia 17).

Acontece que o Ministério da Educação (MEC) pediu que o início do horário de verão fosse adiado para 18 de novembro, a fim de evitar prejuízos aos estudantes que farão o Exame Nacional do Ensino Médio (Enem), cuja primeira prova está marcada para 04 de novembro. A necessidade de adiantar os relógios em uma 1 poderia confundir os candidatos.

O governo chegou a preparar o decreto e anunciar que faria essa nova alteração, porém depois não a oficializou por meio do Diário Oficial da União (DOU), decidindo finalmente por manter o horário de verão iniciando no dia 04 de novembro.

A razão para essa última decisão foi um protesto da Associação Brasileira das Empresas Aéreas (Abear), que alertou que a mudança poderia levar passageiros que compraram passagens com antecedência a perderem seus voos. Cerca de 42 mil voos poderiam ser afetados e pelo menos 3 milhões de passageiros poderiam ser prejudicados.

Portanto, desde dezembro do ano passado, o início do horário de verão no Brasil já teve 3 mudanças: passou de 28/10 para 04/11, depois para 18/11, e por fim foi mantido em 04/11.

## 2) Como saber se seu computador foi afetado

Você pode verificar se a data e a hora do seu computador estão corretas acessando o *site* do projeto [NTP.br][ntpbr], que mantém servidores de hora que os computadores podem consultar para sincronizar seus relógios:

{% include image.html src="/files/2018/10/ntpbr-hora-certa.jpg" %}

## 3) Como se prevenir dessas mudanças

Como eu disse no início do *post*, quem estava com seu computador devidamente configurado e atualizado não teve problemas.

Eu já expliquei em um *post* anterior como configurar o computador para sincronizar a data e a hora com a Internet usando o protocolo NTP:

- [Mantenha a hora do seu computador sempre certa com o NTP][ntpbr]

Se você ainda não fez essa configuração, recomendo que a faça. Com isso, nunca mais você terá que se preocupar em ajustar manualmente a data e a hora do seu computador no início e no fim do horário de verão.

Porém, essa configuração sozinha não é suficiente. Como vimos, as datas de início e fim do horário de verão podem mudar. Embora a data e hora possam ser obtidas da Internet, o início e o fim do horário de verão são programados no sistema operacional.

No caso da distribuição Linux [openSUSE Leap][opensuse-leap], o pacote que contém essa programação é o [**timezone**][timezone], que já deve vir instalado por padrão. Esse pacote recebe atualizações conforme as datas de início e fim do horário de verão mudam. Essas atualizações devem ser baixadas e instaladas para que as mudanças passem a valer.

Também já expliquei em um *post* anterior como manter o sistema sempre atualizado, recomendo a leitura:

- [Mantenha seu sistema sempre atualizado][how-to-sw-updates]

Você pode verificar se as mudanças de horário estão corretamente configuradas executando o comando:

```
# zdump -v /etc/localtime | grep '201[8,9]'
```

A saída dele mostra todas as mudanças de horário programadas para ocorrer em 2018 e 2019:

```
/etc/localtime  Sun Feb 18 01:59:59 2018 UT = Sat Feb 17 23:59:59 2018 -02 isdst=1 gmtoff=-7200
/etc/localtime  Sun Feb 18 02:00:00 2018 UT = Sat Feb 17 23:00:00 2018 -03 isdst=0 gmtoff=-10800
/etc/localtime  Sun Nov  4 02:59:59 2018 UT = Sat Nov  3 23:59:59 2018 -03 isdst=0 gmtoff=-10800
/etc/localtime  Sun Nov  4 03:00:00 2018 UT = Sun Nov  4 01:00:00 2018 -02 isdst=1 gmtoff=-7200
/etc/localtime  Sun Feb 17 01:59:59 2019 UT = Sat Feb 16 23:59:59 2019 -02 isdst=1 gmtoff=-7200
/etc/localtime  Sun Feb 17 02:00:00 2019 UT = Sat Feb 16 23:00:00 2019 -03 isdst=0 gmtoff=-10800
/etc/localtime  Sun Nov  3 02:59:59 2019 UT = Sat Nov  2 23:59:59 2019 -03 isdst=0 gmtoff=-10800
/etc/localtime  Sun Nov  3 03:00:00 2019 UT = Sun Nov  3 01:00:00 2019 -02 isdst=1 gmtoff=-7200
```

Interpretando a saída desse comando, temos:

- fim do horário de verão em 18/02/2018,
- início do horário de verão em 04/11/2018,
- fim do horário de verão em 17/02/2019 e, de quebra,
- início do horário de verão em 03/11/2019.

No caso do [Windows][windows], provavelmente a [Microsoft][microsoft] deve lançar atualizações conforme as datas de início e fim do horário de verão mudam.

## Referências

Além das referências de jornais a seguir, que usei para me informar sobre o que aconteceu, gostaria de agradecer à troca de ideias com os demais usuários brasileiros do openSUSE no grupo do [Telegram][telegram] em [https://t.me/opensusebr][opensusebr].

- [Relógios de computador e celulares se adiantam antes do horário de verão - Correio Braziliense][cb]
- [Planalto informa que não haverá adiamento e que horário de verão começará no próximo dia 4 - Política - G1][g1]
- [Governo voltará a discutir se acaba com horário de verão - Jornal O Globo][oglobo]
- [Senado propõe acabar com o horário de verão no Brasil - Notícias - R7 São Paulo][r7]

[cb]:                   https://www.correiobraziliense.com.br/app/noticia/brasil/2018/10/21/interna-brasil,714001/relogio-de-celulares-adianta-uma-hora-de-novo-e-a-segunda-vez-na-sema.shtml
[g1]:                   https://g1.globo.com/politica/noticia/2018/10/15/planalto-informa-que-nao-havera-adiamento-e-que-horario-de-verao-comecara-no-proximo-dia-4.ghtml
[horario-de-verao]:     https://pt.wikipedia.org/wiki/Hor%C3%A1rio_de_ver%C3%A3o
[oglobo]:               https://oglobo.globo.com/economia/governo-voltara-discutir-se-acaba-com-horario-de-verao-22397585
[r7]:                   https://noticias.r7.com/sao-paulo/senado-propoe-acabar-com-o-horario-de-verao-no-brasil-20092018
[ntpbr]:                http://ntp.br/
[how-to-ntp-client]:    {% post_url pt/2016-10-15-mantenha-a-hora-do-seu-computador-sempre-certa-com-o-ntp %}
[opensuse-leap]:        {% post_url pt/2018-05-25-baseado-no-codigo-do-enterprise-testado-milhoes-de-vezes-opensuse-leap-15-lancado %}
[timezone]:             https://software.opensuse.org/package/timezone
[how-to-sw-updates]:    {% post_url pt/2016-10-21-mantenha-seu-sistema-sempre-atualizado %}
[telegram]:             https://telegram.org/
[opensusebr]:           https://t.me/opensusebr
[windows]:              https://www.microsoft.com/pt-br/windows/
[microsoft]:            https://www.microsoft.com/pt-br/
