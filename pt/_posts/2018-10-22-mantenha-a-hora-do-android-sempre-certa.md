---
date: 2018-10-22 01:20:00 GMT-3
image: '/files/2018/10/howto-android-clock.png'
layout: post
published: true
nickname: 'howto-android-clock'
title: 'Mantenha a hora do Android sempre certa'
excerpt: 'Diante da indefinição quanto ao início do horário de verão em 2018, muitas pessoas sofreram nas últimas 2 semanas com seus celulares se adiantando em 1 hora sozinhos. Ontem eu fiz um post explicando como configurar seu computador pessoal (PC) com Linux para se prevenir de situações como essas. Entendendo que Android também é Linux, resolvi escrever outro post explicando como configurar a data e a hora de dispositivos móveis (smartphones e tablets) com Android.'
---

{% include image.html src="/files/2018/10/howto-android-clock.png" style="max-width: 200px;" %}

Diante da [indefinição quanto ao início do horário de verão em 2018][horario-de-verao-2018], muitas pessoas sofreram nas últimas 2 semanas com seus celulares se adiantando em 1 hora sozinhos. Ontem eu fiz um [*post*][horario-de-verao-2018] explicando como configurar seu [computador pessoal (PC)][pc] com [Linux][linux] para se prevenir de situações como essas. Entendendo que [Android também é Linux][android-linux], resolvi escrever outro *post* explicando como configurar a data e a hora de dispositivos móveis (*smartphones* e *tablets*) com [Android][android].

## 1) O que aconteceu

Não vou explicar de novo nesse *post* o que aconteceu, para detalhes leia o *post* anterior:

- [Acordou com a hora do computador errada? Entenda o que aconteceu][horario-de-verao-2018]

Mas resumindo, desde o ano passado, o início do horário de verão no Brasil em 2018 já teve 3 mudanças: passou de 21/10 para 04/11, depois para 18/11, e por fim foi mantido em 04/11. Diante dessas mudanças, os celulares de muitas pessoas meio que enlouqueceram:

- [Celulares da TIM ‘se apressam’ e adiantam o relógio para o horário de verão][tecmundo1]
- [Celulares erram de novo e entram em horário de verão antes da hora][tecmundo2]

## 2) Como saber se seu dispositivo foi afetado

Você pode verificar se a data e a hora do seu dispositivo Android estão corretas acessando o *site* do projeto [NTP.br][ntpbr], que mantém servidores de hora que informam a data e hora corretas no Brasil:

{% include image.html src="/files/2018/10/ntpbr-hora-certa-android.jpg" %}

## 3) Como se prevenir dessas mudanças

Geralmente é uma boa opção configurar o dispositivo Android para sincronizar a data e a hora com a rede (essa rede pode ser tanto a rede da operadora quanto a Internet). Com isso, você não precisa se preocupar com o início e o fim do horário de verão: seu dispositivo Android muda a data e hora automaticamente quando necessário.

Para fazer toda a configuração de data, hora e fuso horário do seu dispositivo Android de forma automática, toque em **Configurar** > **Sistema** > **Data e hora** e certifique-se de que as opções **Data e hora automáticas** e **Fuso horário automático** estejam habilitadas:

{% include image.html src="/files/2018/10/howto-android-clock-1-pt.jpg" %}

Verifique se o dispositivo mostra o fuso horário correto na opção **Selecionar fuso Horário**. No meu caso, ele mostra **GMT-03:00 Horário Padrão de Brasília** porque estou no sul do Brasil, uma região que adota o horário de verão, assim como Brasília.

Verifique também se agora sua data e hora estão corretas.

Caso esteja tudo certo, pronto, não há mais o que fazer.

Caso contrário, perceba que o Android permite configurar manualmente a data e hora, ou o fuso horário, ou os dois. Você pode alterar manualmente apenas o que não estiver correto.

O mais comum é precisar mudar apenas o fuso horário: se você mora em uma região que não adota o horário de verão (Nordeste ou Norte), deve alterar o fuso horário para outro que também não adote o horário de verão.

Consulte o mapa abaixo para saber se seu estado adota ou não o horário de verão:

{% include image.html src="/files/2016/10/mapa-horario-de-verao-2016-2017.jpg" caption="Estados que adotam horário de verão no Brasil (referências: [G1](http://g1.globo.com/economia/noticia/2016/10/horario-de-verao-comeca-em-16-de-outubro-e-vai-ate-19-de-fevereiro.html) e [Decreto nº 8.112](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/Decreto/D8112.htm), mapa derivado do [mapa do Brasil em branco disponível na WikiMedia](https://commons.wikimedia.org/wiki/File:Brazil_Blank_Map_light.svg))" %}

Para configurar o fuso horário manualmente, desative a opção **Fuso horário automático** e toque em **Selecionar fuso horário**. Na tela seguinte, toque em **Fuso horário**:

{% include image.html src="/files/2018/10/howto-android-clock-2-pt.jpg" %}

Selecione um fuso horário que não adote o horário de verão, por exemplo, **Bahia**:

{% include image.html src="/files/2018/10/howto-android-clock-3-pt.jpg" %}

Observe que o Android confirma que esse fuso horário não adota o horário de verão (leia **Sem horário de verão**):

{% include image.html src="/files/2018/10/howto-android-clock-4-pt.jpg" %}

Toque no ícone de **Voltar** no canto superior esquerdo da tela.

Não se espante se na tela **Data e hora** o Android ainda mostra o fuso horário **GMT-03:00 Horário Padrão de Brasília**:

{% include image.html src="/files/2018/10/howto-android-clock-5-pt.jpg" %}

Se você tocar em **Selecionar fuso horário** de novo verá que está selecionado o fuso horário da Bahia. Provavelmente ele guarda nas configurações que deve usar a mesma hora que Brasília, porém sem o horário de verão.

Agora que você mudou o fuso horário, verifique se sua data e hora estão corretas.

Se mesmo selecionando o fuso horário manualmente a data e hora estiverem incorretas, você terá que configurá-las manualmente.

Para configurar a data e hora manualmente, desative a opção **Data e hora automáticas** e use as opções **Definir data** e **Definir hora** conforme necessário:

{% include image.html src="/files/2018/10/howto-android-clock-6-pt.jpg" %}

{% include image.html src="/files/2018/10/howto-android-clock-7-pt.jpg" %}

{% include image.html src="/files/2018/10/howto-android-clock-8-pt.jpg" %}

Nesse caso, como sua configuração agora é totalmente manual, lembre-se de sempre ajustar a data e hora quando o horário de verão começar e terminar.

[horario-de-verao-2018]:    {% post_url pt/2018-10-21-acordou-com-a-hora-do-computador-errada-entenda-o-que-aconteceu %}
[pc]:                       https://pt.wikipedia.org/wiki/IBM_PC
[linux]:                    https://www.vivaolinux.com.br/linux/
[android-linux]:            https://www.tecmundo.com.br/software/127038-android-linux-kernel.htm
[android]:                  https://www.android.com/
[tecmundo1]:                https://www.tecmundo.com.br/dispositivos-moveis/135170-iphone-adianta-relogio-para-o-horario-verao.htm
[tecmundo2]:                https://www.tecmundo.com.br/mercado/135399-celulares-erram-novo-entram-horario-verao-hora.htm
[ntpbr]:                    http://ntp.br/

