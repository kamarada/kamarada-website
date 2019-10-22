---
date: 2019-10-21 22:30:00 GMT-3
image: '/files/2019/10/horario-de-verao-2019.jpg'
layout: post
published: true
nickname: 'horario-de-verao-2019'
title: 'Não temos mais horário de verão: seu computador já sabe disso?'
---

{% include image.html src="/files/2019/10/horario-de-verao-2019.jpg" style="max-height: 400px;" %}

A partir desse ano, o Brasil não adota mais o [**horário de verão**][horario-de-verao], que é a prática de adiantar os relógios em 1 hora durante o verão. A mudança foi oficializada pelo [Decreto nº 9.772][decreto-9772], assinado pelo presidente Jair Bolsonaro em abril. Se seu sistema está bem configurado e atualizado, já está ciente dessa alteração e não adiantou — e nem adiantará mais — o relógio.

No entanto, alguns sistemas desatualizados adiantaram o relógio nesse domingo 20/10/2019. Isso indica que ainda estão configurados de acordo com a antepenúltima norma ([Decreto nº 8.112][decreto-8112], de 30/09/2013), pela qual o início do horário de verão seria no terceiro domingo de outubro.

Mas mesmo que a hora do seu sistema esteja certa agora, se ele estiver desatualizado, possivelmente adiantará o relógio no primeiro domingo de novembro (03/11/2019), que seria o início do horário de verão, pela norma anterior ([Decreto nº 9.242][decreto-9242], de 15/12/2017).

Você verá nesse _post_ como conferir e ajustar as configurações de data, hora e fuso horário, como verificar a configuração do horário de verão, e como atualizar seu sistema para que ele obtenha as últimas alterações e a data e hora estejam sempre certas!

## Onde conferir a data e hora certas

Para verificar se a data e a hora do seu computador estão certas, você pode acessar o _site_ do projeto **[NTP.br]**, que mantém servidores de hora que podem ser consultados por computadores para sincronizar seus relógios:

{% include image.html src="/files/2019/10/ntpbr-hora-certa.jpg" %}

## Configurações de data, hora e fuso horário

Você pode verificar as configurações de data, hora e fuso horário executando o comando:

```
$ timedatectl
```

Que deve retornar algo parecido com:

```
      Local time: seg 2019-10-21 14:35:46 -03
  Universal time: seg 2019-10-21 17:35:46 UTC
        RTC time: seg 2019-10-21 14:35:46
       Time zone: America/Sao_Paulo (-03, -0300)
 Network time on: no
NTP synchronized: no
 RTC in local TZ: yes
```

Nesse exemplo, o sistema obedece ao fuso horário (_time zone_) **América/São Paulo**.

Ou, se você usa a distribuição Linux [openSUSE] (ou uma distribuição derivada, como é o caso do [Linux Kamarada][linux-kamarada]) e prefere a interface gráfica, pode conferir as configurações de data, hora e fuso horário abrindo o módulo **Data e hora** do YaST:

{% include image.html src="/files/2019/10/yast-data-e-hora.jpg" %}

O sistema operacional pode sincronizar data e hora com a Internet usando o protocolo [NTP][how-to-ntp-client].

Veja como configurar data, hora, fuso horário e sincronização via NTP no _post_:

- [Mantenha a hora do seu computador sempre certa com o NTP][how-to-ntp-client]

Se você usa um sistema que não recebe mais atualizações (por exemplo, um computador de 32 _bits_ com o [openSUSE 13.2][opensuse-13.2]), para desativar o horário de verão, utilize um fuso horário que historicamente não adotou o horário de verão (por exemplo, o fuso horário de **Maceió**).

## Configuração do horário de verão

A data e hora podem ser obtidas da Internet, mas o início e o fim do horário de verão são programados na configuração do fuso horário, que é fixada no sistema operacional.

No caso do openSUSE e do Linux Kamarada, o pacote que contém essa programação é o **[timezone]**, que normalmente vem instalado por padrão.

Para verificar o início e o fim do horário de verão no fuso horário atual, execute:

```
# zdump -v /etc/localtime | tail
```

Usamos o comando **[tail]** para obter apenas as últimas linhas da saída:

```
/etc/localtime  Sun Oct 15 02:59:59 2017 UT = Sat Oct 14 23:59:59 2017 -03 isdst=0 gmtoff=-10800
/etc/localtime  Sun Oct 15 03:00:00 2017 UT = Sun Oct 15 01:00:00 2017 -02 isdst=1 gmtoff=-7200
/etc/localtime  Sun Feb 18 01:59:59 2018 UT = Sat Feb 17 23:59:59 2018 -02 isdst=1 gmtoff=-7200
/etc/localtime  Sun Feb 18 02:00:00 2018 UT = Sat Feb 17 23:00:00 2018 -03 isdst=0 gmtoff=-10800
/etc/localtime  Sun Nov  4 02:59:59 2018 UT = Sat Nov  3 23:59:59 2018 -03 isdst=0 gmtoff=-10800
/etc/localtime  Sun Nov  4 03:00:00 2018 UT = Sun Nov  4 01:00:00 2018 -02 isdst=1 gmtoff=-7200
/etc/localtime  Sun Feb 17 01:59:59 2019 UT = Sat Feb 16 23:59:59 2019 -02 isdst=1 gmtoff=-7200
/etc/localtime  Sun Feb 17 02:00:00 2019 UT = Sat Feb 16 23:00:00 2019 -03 isdst=0 gmtoff=-10800
/etc/localtime  9223372036854689407 = NULL
/etc/localtime  9223372036854775807 = NULL
```

Interpretando a saída desse comando, temos:

- início do horário de verão em 2017 na virada de 14/10 para 15/10
- fim do horário de verão em 2018 em 17/02
- início do horário de verão em 2018 na virada de 03/11 para 04/11
- fim do horário de verão em 2019 em 16/02
- nenhuma outra alteração a partir de então

Se sua configuração aparece diferente disso, é sinal que seu sistema está desatualizado.

## Mantenha seu sistema atualizado

O pacote **timezone** recebe atualizações conforme as regras do horário de verão mudam.

Por esse e outros motivos, é importante manter o sistema sempre atualizado, com as versões mais novas dos programas e pacotes.

Veja como obter atualizações para o openSUSE e para o Linux Kamarada no _post_:

- [Como obter atualizações para o Linux openSUSE][howto-update]

## Posts relacionados e referências

Aqui normalmente eu falo de [Linux] em _desktops_ e servidores, mas considerando que [Android também é Linux][android-linux], no ano passado escrevi um _post_ explicando como configurar data, hora e fuso horário em _smartphones_ e _tablets_ com [Android]:

- [Mantenha a hora do Android sempre certa][howto-android-clock]

Se quiser saber mais sobre o fim do horário de verão no Brasil, leia:

- [Bolsonaro assina decreto que acaba com o horário de verão - G1][g1]

[horario-de-verao]:         https://pt.wikipedia.org/wiki/Hor%C3%A1rio_de_ver%C3%A3o
[decreto-9772]:             http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/D9772.htm
[decreto-8112]:             http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2013/Decreto/D8112.htm
[decreto-9242]:             http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2017/Decreto/D9242.htm
[ntp.br]:                   http://ntp.br/
[opensuse]:                 https://www.opensuse.org/
[linux-kamarada]:           {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[how-to-ntp-client]:        {% post_url pt/2016-10-15-mantenha-a-hora-do-seu-computador-sempre-certa-com-o-ntp %}
[opensuse-13.2]:            https://en.opensuse.org/Portal:13.2
[timezone]:                 https://software.opensuse.org/package/timezone
[tail]:                     https://linux.die.net/man/1/tail
[howto-update]:             {% post_url pt/2019-05-14-como-obter-atualizacoes-para-o-linux-opensuse %}
[linux]:                    https://www.vivaolinux.com.br/linux/
[android-linux]:            https://www.tecmundo.com.br/software/127038-android-linux-kernel.htm
[android]:                  https://www.android.com/intl/pt-BR_br/
[howto-android-clock]:      {% post_url pt/2018-10-22-mantenha-a-hora-do-android-sempre-certa %}
[g1]:                       https://g1.globo.com/politica/noticia/2019/04/25/bolsonaro-assina-decreto-que-acaba-com-o-horario-de-verao.ghtml
