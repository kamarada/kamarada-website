---
date: '2016-06-05 14:30:00 GMT-3'
excerpt: 'Está com sono e não quer esperar o computador terminar uma tarefa para desligá-lo e ir dormir? Aquele arquivo parece estar levando uma eternidade para baixar... no Linux, você não precisa esperar: você pode programar o desligamento do computador e ir dormir sossegado com a certeza de que acordará com o computador desligado e a tarefa concluída!'
layout: post
published: true
title: 'Como agendar o desligamento do computador'
image: /files/2016/06/tux-asleep.png
nickname: 'how-to-schedule-shutdown'
--- 

{% include image.html src="/files/2016/06/tux-asleep.png" style="max-height: 240px;" %}

Está com sono e não quer esperar o computador terminar uma tarefa para desligá-lo e ir dormir? Aquele arquivo parece estar levando uma eternidade para baixar... no Linux, você não precisa esperar: você pode programar o desligamento do computador e ir dormir sossegado com a certeza de que acordará com o computador desligado e a tarefa concluída!

<!--more-->

## Como desligar o computador no Linux

No Linux, podemos desligar o computador tanto pela interface gráfica quanto pela linha de comando (terminal).

Pela interface gráfica, desligar o computador é bastante intuitivo: no **Menu de aplicativos** do KDE, há um botão **Desligar**, assim como um menu **Desligar / Sessão**, que oferece a opção **Desligar**. Esse menu também oferece outras opções relacionadas, como **Reiniciar**, **Hibernar** e **Suspender**:

{% include image.html src="/files/2016/06/shutdown-kde-pt.jpg" %}

Via linha de comando, podemos desligar o computador utilizando o comando **shutdown** (desligar, em inglês). Ele precisa ser executado com permissões de administrador:

```
# shutdown
```

Sem fornecer informação adicional para o comando, ele desligará o computador em 1 minuto. Podemos passar o argumento **-h** (do inglês *halt*, parar) para que o computador seja desligado imediatamente:

```
# shutdown -h
```

Se você não quiser fazer *login* como superusuário (*root*) apenas para invocar o comando **shutdown**, você pode invocá-lo por meio do comando **sudo**. Para desligar o computador, por exemplo, seria assim:

```
$ sudo shutdown -h
```

A depender de como seu computador esteja configurado, você será solicitado a fornecer a senha do superusuário.

Pela interface gráfica, a princípio, não temos como agendar ou programar o desligamento do computador, mas pela linha de comando temos algumas opções interessantes.

## Desligando em determinado horário

Como vimos, o comando **shutdown** faz com que o computador seja desligado em instantes ou imediatamente. Podemos passar para ele **quando** o computador deve ser desligado.

Podemos ser enfáticos e dizer que o computador deve ser desligado agora (*now* em inglês):

```
# shutdown -h now
```

Ou podemos agendar o desligamento do computador para ocorrer às 10 da noite:

```
# shutdown -h 22:00
```

Ou podemos agendar o desligamento para daqui a **m** minutos, passando o argumento **+m** para o comando **shutdown**. Se queremos que o computador seja desligado daqui a 5 minutos, por exemplo, invocamos o comando **shutdown** assim:

```
# shutdown -h +5
```

Podemos agendar o desligamento do computador para daqui a algumas horas, mas aí temos que fazer uma pequena conta. Por exemplo, para desligar o computador daqui a 2 horas (120 minutos), invocamos o comando **shutdown** assim:

```
# shutdown -h +120
```

Como isso pode ser útil? Se você está baixando um arquivo e seu navegador prevê que o *download* será concluído daqui a 40 minutos, você pode agendar o computador para desligar daqui a 1 ou 2 horas. É bom dar um espaço de tempo porque a previsão pode não se confirmar, devido à velocidade da conexão oscilar, ora estando mais rápida, ora estando mais lenta.


## Desligando após a conclusão de um comando

Antes de iniciar a execução de um comando demorado, você pode programar o computador para desligar após a execução desse comando.

Sigamos com o exemplo do *download* de um arquivo grande. Vamos tomar como exemplo a imagem ISO do [openSUSE][opensuse] mais recente produzida pelo [Projeto Linux Kamarada][kamarada] (que pode ser encontrada [aqui][download]). Pelo terminal, podemos baixar esse arquivo usando o comando **wget**:

```
$ wget http://iweb.dl.sourceforge.net/project/kamarada/distribution/leap/42.1/iso/openSUSE-Leap-42.1-KDE-Live.x86_64-20160604.iso
```

Em vez de apenas baixá-lo, podemos ordenar que o computador seja desligado após o fim do *download*. Para isso, unimos os dois comandos usando o operador **&&**, fazendo com que os dois comandos sejam executados um após o outro:

```
# wget http://iweb.dl.sourceforge.net/project/kamarada/distribution/leap/42.1/iso/openSUSE-Leap-42.1-KDE-Live.x86_64-20160604.iso && shutdown
```

Observe que, nesse caso, precisamos executar os dois comandos como administrador, visto que não desejamos estar presentes na hora em que o *download* terminar para fornecer a senha do superusuário para que o comando **shutdown** seja executado.

Também é importante observar que, no exemplo acima, o computador só será desligado caso o *download* seja concluído com sucesso. O operador **&&** garante que caso o primeiro comando falhe, o segundo não seja executado.

Para desligar o computador independente de o *download* concluir ou não, podemos modificar um pouco esse comando:

```
# wget http://iweb.dl.sourceforge.net/project/kamarada/distribution/leap/42.1/iso/openSUSE-Leap-42.1-KDE-Live.x86_64-20160604.iso & shutdown -h +180
```

O operador **&** une os dois comandos de modo que os dois são executados imediatamente. Em ordem, mas imediatamente. Assim, o computador não espera o fim do comando **wget** para executar o comando **shutdown**. Por isso, precisamos agendar o desligamento, senão o computador será desligado imediatamente.

Interpretando o comando, é como se estivéssemos dizendo para o computador: "inicie o *download* agora e desligue o computador daqui a 3 horas". Estipulei esse prazo dada uma previsão inicial de 2 horas para concluir o *download*. Note que o computador será desligado independente de o *download* ter sido concluído ou não.

## Cancelando um desligamento agendado

Se você agendou o computador para desligar daqui a algum tempo e por algum motivo desistiu desse agendamento, é possível cancelá-lo invocando o comando **shutdown** com o argumento **-c** (do inglês *cancel*, cancelar):

```
# shutdown -c
```

Espero que essas dicas possam ser úteis, da mesma forma como executo esses comandos na minha casa com alguma frequência. Caso surja alguma dúvida, não deixe de comentar!

Até a próxima!

## Referências

- [shutdown(8) - Linux manual page][shutdown]
- [bash - command-line - what is the purpose of "&&"? - Stack Overflow][operador]

[opensuse]: https://www.opensuse.org/
[kamarada]: https://kamarada.github.io/
[download]: https://kamarada.github.io/pt/download/
[shutdown]: http://man7.org/linux/man-pages/man8/shutdown.8.html
[operador]: http://stackoverflow.com/a/30508672/1657502
