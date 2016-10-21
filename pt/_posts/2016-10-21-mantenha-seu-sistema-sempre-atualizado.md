---
date: '2016-10-21 21:00:00 GMT-2'
layout: post
published: false
title: 'Mantenha seu sistema sempre atualizado'
image: /files/2016/10/tux-time.png
nickname: 'how-to-sw-updates'
---

Os programas de computador, por mais incríveis que sejam, não são perfeitos: são feitos por nós, seres humanos. Com o tempo, eles vão sendo aperfeiçoados, seja por otimizações, adição de novas funcionalidades ou correções de falhas (também conhecidas como *bugs*, insetos em inglês). Existem falhas dos mais diversos tipos, que vão desde um erro de digitação, passando por um mau funcionamento, até uma brecha de segurança que possa ser usada por pessoas mal intencionadas para acessar seus arquivos pessoais. Por isso, é importante manter o computador sempre atualizado, utilizando as versões mais novas dos programas.

Felizmente, manter seu sistema Linux sempre atualizado é fácil quando se utiliza o [openSUSE][opensuse]. Ele permite que você obtenha atualizações pela interface gráfica ou, para quem prefere, pela interface de linha de comando, como veremos.

## Pela interface gráfica

Quando você liga o computador e/ou se conecta à Internet, o Linux openSUSE já busca atualizações para o seu sistema.

Caso ele encontre atualizações para serem instaladas, ele te notifica:

{% include image.html src="/files/2016/10/sw-updates-01-pt.jpg" %}

Ele apenas notifica, deixando você livre para escolher quando instalá-las.

Quando você achar um momento oportuno para baixar e instalar as atualizações, clique no ícone da **Atualização de aplicativos** (*Software Updates*). Ele estará com um X vermelho, indicando que seu sistema não está totalmente atualizado (ou seja, há atualizações que precisam ser instaladas):

{% include image.html src="/files/2016/10/sw-updates-02-pt.jpg" %}

Clique em **Instalar atualizações**. O openSUSE começará a baixar as atualizações.

Você pode conferir o andamento do processo de atualização:

{% include image.html src="/files/2016/10/sw-updates-03-pt.jpg" %}

Mas não precisa ficar acompanhando: enquanto as atualizações são baixadas e instaladas, você pode continuar usando o computador normalmente.

Você será notificado quando a atualização terminar. Normalmente, quando o processo de atualização acaba, não é necessário fazer mais nada, nem mesmo reiniciar o computador. As atualizações já passam a valer e você já as perceberá se abrir algum programa que foi atualizado.

Quando alguma atualização precisa que o computador seja reiniciado, o sistema pede a você que o reinicie assim que possível. Apesar de essa ser a recomendação, você pode reiniciá-lo quando achar conveniente.

Pode acontecer de o sistema instalar várias atualizações e no final, em vez de avisar que acabou, avisar que há mais atualizações disponíveis:

{% include image.html src="/files/2016/10/sw-updates-04-pt.jpg" %}

Isso raramente ocorre, mas pode acontecer se um programa depende de outro e a versão mais nova desse programa só se torna disponível depois que a versão mais nova do outro estiver instalada.

Siga instalando as atualizações disponíveis até que o sistema informe que está totalmente atualizado:

{% include image.html src="/files/2016/10/sw-updates-05-pt.jpg" %}

Outro motivo que pode levar o sistema a informar que ainda há atualizações para serem instaladas é ter ocorrido falha na instalação de algumas atualizações. Nesse caso, as atualizações que falharam voltam para a lista de atualizações disponíveis. Caso você tente instalá-las novamente e mais uma vez não consiga, investigue o que aconteceu de errado antes de tentar de novo.

## Pela linha de comando



[opensuse]: https://www.opensuse.org/
