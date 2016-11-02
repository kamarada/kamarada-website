---
date: '2016-10-21 23:40:00 GMT-2'
layout: post
published: true
title: 'Mantenha seu sistema sempre atualizado'
image: /files/2016/10/sw-updates.jpg
nickname: 'how-to-sw-updates'
---

Os programas de computador, por mais incríveis que sejam, não são perfeitos: são feitos por nós, seres humanos. Com o tempo, eles vão sendo aperfeiçoados, seja por otimizações, adição de novas funcionalidades ou correções de falhas (também conhecidas como *bugs*, insetos em inglês). Existem falhas dos mais diversos tipos, que vão desde um erro de digitação, passando por um mau funcionamento, até uma brecha de segurança que possa ser usada por pessoas mal intencionadas para acessar seus arquivos pessoais. Por isso, é importante manter o computador sempre atualizado, utilizando as versões mais novas dos programas.

Felizmente, manter seu sistema Linux sempre atualizado é fácil quando se utiliza o [openSUSE][opensuse]. Ele permite que você obtenha atualizações pela interface gráfica ou, para quem prefere, pela interface de linha de comando, como veremos.

{% include image.html src="/files/2016/10/sw-updates.jpg" caption="Imagem obtida no [site OMG! Ubuntu!](http://www.omgubuntu.co.uk/2016/10/why-use-linux-answer-three-short-words)" %}

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

Para reiniciar seu computador, abra o **Menu de aplicativos**, aponte para **Desligar / Sessão** e clique em **Reiniciar**:

{% include image.html src="/files/2016/10/restart-kde-pt.jpg" %}

Pode acontecer de o sistema instalar várias atualizações e no final, em vez de avisar que acabou, avisar que há ainda mais atualizações disponíveis:

{% include image.html src="/files/2016/10/sw-updates-04-pt.jpg" %}

Isso raramente ocorre, mas pode acontecer se um programa depende de outro e a versão mais nova desse programa só se torna disponível depois que a versão mais nova do outro estiver instalada.

Siga instalando as atualizações disponíveis até que o sistema informe que está totalmente atualizado:

{% include image.html src="/files/2016/10/sw-updates-05-pt.jpg" %}

Outro motivo que pode levar o sistema a informar que ainda há atualizações para serem instaladas é ter ocorrido falha na instalação de algumas atualizações. Nesse caso, as atualizações que falharam voltam para a lista de atualizações disponíveis. Caso você tente instalá-las novamente e mais uma vez não consiga, investigue o que aconteceu de errado antes de tentar de novo.

## Pela linha de comando

Se você prefere a linha de comando, pode utilizar o gerenciador de pacotes [**zypper**][zypper] para verificar se há atualizações para o openSUSE, baixá-las e instalá-las.

Para isso, você deve primeiro acessar a linha de comando como superusuário (*root*) executando o comando `su`. Ele pedirá a senha do superusuário, que você deve fornecer para continuar.

Então, invoque o **zypper** com o comando `zypper ref` (do inglês *refresh*, atualizar), que fará ele atualizar a lista de pacotes disponíveis na Internet:

{% include image.html src="/files/2016/10/sw-updates-cmd-01-pt.jpg" %}

Note que ele indica o progresso. Quando estiver tudo concluído, execute o comando `zypper up`, que fará com que o **zypper** baixe e instale atualizações disponíveis se houver (esse *up* vem do inglês *update*, atualizar também, mas aqui foi usado com outro significado, como você pode ver):

{% include image.html src="/files/2016/10/sw-updates-cmd-02-pt.jpg" %}

Ele mostra o que precisa fazer para deixar o sistema atualizado e pergunta se você deseja continuar. A opção padrão é continuar (**s**). Se é isso o que deseja, você pode apenas teclar **Enter** e a atualização começará. Ele indica o andamento do processo:

{% include image.html src="/files/2016/10/sw-updates-cmd-03-pt.jpg" %}

Note que é possível que programas tenham que ser removidos para que o sistema como um todo possa ser atualizado. Na imagem acima, vemos que o **zypper** propôs a instalação do [Spectacle][spectacle] e a desinstalação do [KSnapshot][ksnapshot]. Se você pesquisar o que são esses programas, verá que ambos tem a função de capturar a tela (para produzir imagens como essas acima), e que de fato [o KSnapshot foi aposentado e o Spectacle assumiu o seu lugar][spectacle-vs-ksnapshot]. Então, nesse caso, não precisamos nos preocupar.

Caso note que o **zypper** pretende fazer alguma alteração com que não concorda, você pode não continuar teclando **n** e depois **Enter**. Você pode investigar o que houve e tentar de novo depois.

Normalmente, quando a atualização acaba, não é necessário fazer mais nada, nem reiniciar o computador. Mas note que ao final dessa atualização o **zypper** cogitou reiniciar programas, porque arquivos que estavam sendo usados foram apagados:

{% include image.html src="/files/2016/10/sw-updates-cmd-04-pt.jpg" %}

Nesse caso, mesmo que o **zypper** não tenha dito para reiniciar o computador, como ele falou em "reiniciar", recomendo que você reinicie o computador. Quando voltar, seu sistema estará novo e limpo, sem risco de mau funcionamento.

Para se certificar de que instalou realmente todas as atualizações disponíveis até o momento, recomendo que execute o comando `zypper up` repetidas vezes até que ele diga que não há o que fazer:

{% include image.html src="/files/2016/10/sw-updates-cmd-05-pt.jpg" %}

Ou seja, não é possível atualizar ainda mais o sistema, porque não há mais atualizações disponíveis: todas as que havia já foram instaladas.

Se lembre de verificar de tempos em tempos se há atualizações usando os comandos `zypper ref` e `zypper dup`, já que utilizando a linha de comando o sistema não avisa a você quando há atualizações.

[opensuse]:                 https://www.opensuse.org/
[zypper]:                   https://pt.opensuse.org/Portal:Zypper
[spectacle]:                https://www.kde.org/applications/graphics/spectacle/
[ksnapshot]:                https://www.kde.org/applications/graphics/ksnapshot/
[spectacle-vs-ksnapshot]:   https://www.kde.org/announcements/announce-applications-15.12.0.php
