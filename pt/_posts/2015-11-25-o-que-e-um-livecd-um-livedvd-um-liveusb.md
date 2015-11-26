---
date: '2015-11-25 23:00:00 GMT-3'
layout: post
published: true
title: 'O que é um LiveCD? Um LiveDVD? Um LiveUSB?'
image: /files/2015/11/livecd.png
--- 

{% include image.html src="/files/2015/11/livecd.png" %}

Um LiveCD (do inglês [*live*][dictionary-live], vivo, e [CD][wikipedia-cd], o disco ótico) é um CD que contém um sistema operacional pronto para uso. Esse sistema não precisa ser instalado no computador, pois pode ser executado diretamente a partir do CD: você insere o CD, liga o computador e utiliza o sistema, que já está pronto. Ele é muito parecido com o sistema que é executado a partir do disco rígido, que é o mais comum.

Também existem os mais atuais LiveDVDs e LiveUSBs, que seguem a mesma ideia: são, respectivamente, DVDs e *pendrives* (ou cartões de memória) com sistemas operacionais prontos para uso. Todas as explicações aqui também se aplicam ao LiveDVD e ao LiveUSB.

A principal vantagem de um LiveCD é a despreocupação com instalação: o sistema já vem **pronto para uso** no CD, e seu uso **não altera o sistema instalado no disco rígido**. Ao terminar de usar o LiveCD, você desliga o computador e remove o CD. Da próxima vez em que você ligar o computador, seu sistema operacional rotineiro ([Windows][windows], [Linux][linux] ou outro) será iniciado da mesma maneira, como se ele tivesse sido o último a ser usado.

Isso torna o LiveCD ideal para quem quer **conhecer, experimentar ou utilizar ocasionalmente o Linux**, mas está em dúvida se vai (ou até mesmo não deseja) instalá-lo no computador. Também é possível usar o LiveCD para **instalar o Linux**. A maioria das distribuições Linux oferecem LiveCDs.

A distribuição [openSUSE][opensuse] é excelente, mas oficialmente [não oferece mais LiveCDs][no-opensuse-livecd]. Pensando nisso, o Projeto Linux Kamarada desenvolveu um LiveDVD com o openSUSE, que pode ser obtido [aqui][download]. Com o uso de um [programa apropriado][imagewriter], ele também pode ser instalado em um *pendrive* e usado como um LiveUSB.

LiveCDs (e seus similares LiveDVDs e LiveUSBs) são bons para:

1. **Conhecer o Linux**: você pode utilizar o Linux ocasionalmente para conhecê-lo e aprender mais sobre ele, sem o compromisso de instalá-lo no computador e usá-lo todo dia;
2. **Testar o Linux antes de instalá-lo no computador**: assim você pode conferir se tudo funcionará bem depois da instalação;
3. **Reparar seu computador**: uma vez que você não está usando o sistema instalado no computador, é mais fácil realizar ações de manutenção, como buscar e remover vírus, recuperar arquivos excluídos por acidente, achar arquivos ocultos ou proibidos, recuperar a senha do administrador, testar a memória, criar ou modificar partições, resolver problemas que impedem o computador de ligar, entre outros (na verdade, em um item só listei várias situações);
4. **Usar um ambiente familiar em uma máquina desconhecida** (especialmente se você já utiliza o Linux e possui um LiveCD com a distribuição que você usa);
5. **Usar um mesmo ambiente em várias máquinas**: útil para quem usa vários computadores e não quer ter o trabalho de instalar em todos eles todos os programas de que necessita;
6. **Usar com mais liberdade um computador com restrições de uso** (como o da universidade ou do trabalho): enquanto usa um LiveCD, você pode instalar programas e alterar configurações (note que ainda pode haver restrições, como o acesso a alguns sites);
7. **Usar com segurança um computador que a princípio não é seguro ou não oferece privacidade**: o sistema iniciado pelo LiveCD não armazena dados no computador (existem inclusive [distribuições focadas em privacidade][tails]);
8. **Fazer propaganda do Linux**: se você gosta do Linux, pode mostrá-lo a seus amigos em seus próprios computadores, sem precisar instalar.

Um LiveUSB apresenta uma vantagem a mais em relação a um LiveCD ou LiveDVD: ele permite que alterações feitas no sistema (como programas instalados) sejam armazenadas no *pendrive*, de modo que elas permanecem quando o sistema é iniciado de novo pelo *pendrive*. Note que isso não é possível usando um CD ou DVD, pois não há como fazer alterações nessas mídias. Assim, o LiveUSB é um pouco mais próximo do sistema tradicional, instalado no disco rígido.

Certamente existem outras situações em que um LiveCD pode ser uma ferramenta bastante poderosa. Mesmo que você não pretenda conhecer a fundo o Linux ou instalá-lo em seu computador, recomendo que tenha consigo um LiveCD, pois um dia ele pode servir como um bom quebra-galho!

## Desvantagens

Os LiveCDs, assim como os LiveDVDs, permitem que alterações sejam feitas no sistema (que programas sejam instalados, por exemplo) porque utilizam parte da memória RAM para guardar essas informações enquanto o sistema é usado. Por isso, não é possível instalar muitos programas. Em um LiveUSB é possível instalar mais programas, conforme a capacidade do *pendrive*.

Também vale observar que os sistemas executados a partir de CDs, DVDs, *pendrives* e cartões de memória são mais lentos que os tradicionais executados a partir do disco rígido, porque o disco rígido é mais rápido que essas mídias.

Portanto, de maneira geral, os LiveCDs, assim como LiveDVDs e LiveUSBs, **não são recomendados para uso diário**. Se você pretende usar o Linux todos os dias, considere instalá-lo em seu computador ou em uma máquina virtual.

[dictionary-live]:      http://michaelis.uol.com.br/moderno/ingles/index.php?lingua=ingles-portugues&palavra=live
[wikipedia-cd]:         https://pt.wikipedia.org/wiki/Compact_Disc
[windows]:              http://www.microsoft.com/pt-br/windows
[linux]:                http://www.vivaolinux.com.br/linux/
[opensuse]:             https://www.opensuse.org/
[no-opensuse-livecd]:   https://www.linux.com/news/software/applications/865760-opensuse-leap-421-review-the-most-mature-linux-distribution
[download]:             /pt/download/
[imagewriter]:          https://pt.opensuse.org/SDB:Live_USB
[tails]:                https://tails.boum.org/index.pt.html
