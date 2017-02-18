---
date: '2016-10-15 10:45:00 GMT-3'
layout: post
published: true
title: 'Mantenha a hora do seu computador sempre certa com o NTP'
image: /files/2016/10/tux-time.png
nickname: 'how-to-ntp-client'
---

Nesse domingo 16 de outubro de 2016 começa o horário de verão. Ele vai até o dia 19 de fevereiro do ano que vem. Já sabe quando e como vai mudar a hora do seu computador? Ano que vem você vai ter que desfazer essa mudança. 

Que tal fazermos melhor? Vamos configurar o computador para sincronizar a data e a hora com a Internet, para nunca mais termos que nos preocupar com essas mudanças. Para isso, vamos utilizar o protocolo NTP.

{% include image.html src="/files/2016/10/tux-time.png" caption="Imagem obtida no [*site* da revista PCLinuxOS](http://pclosmag.com/html/Issues/201503/page06.html)" style="max-height: 240px;" %}

O [**NTP**][ntp], do inglês *Network Time Protocol* (Protocolo de Tempo para Redes) permite que equipamentos conectados à rede, como estações de trabalho, servidores, roteadores (e também o computador de casa, não nos esqueçamos de que ele está conectado à maior rede de todas, que é a Internet), sincronizem seus relógios a partir de referências de tempo confiáveis.

No Brasil, podemos utilizar como referência os servidores de hora do projeto [NTP.br][ntpbr], uma parceria entre o [Observatório Nacional (ON)][on], responsável pelo horário oficial de Brasília, e o [Núcleo de Informação e Coordenação do Ponto BR (NIC.br)][nicbr], um dos órgãos responsáveis pela gestão da Internet no Brasil.

Como você vai configurar seu computador para sincronizar seu relógio com o do NTP.br depende dos sistemas operacionais instalados no computador.

Se você utiliza apenas o Linux [openSUSE][opensuse], ou possui mais de um Linux instalado no computador (openSUSE e [Ubuntu][ubuntu], por exemplo), recomendo que o Linux que você utiliza com mais frequência seja configurado para sincronizar a hora do computador. Você também pode configurar os demais Linux para sincronizar, sem problemas.

Se você utiliza Linux e [Windows][windows], recomendo que o Linux seja configurado para sincronizar a hora do computador e o Windows seja ajustado para que ambos consigam se entender. Essa configuração, apesar de ser a recomendada, é um pouco mais trabalhosa. Se você utiliza o Windows com mais frequência, pode ser mais fácil configurar o Windows para sincronizar a hora e o Linux para "apenas observar". 

Mostrarei todos os casos a seguir.

## Sincronizando a hora pelo Linux

Aqui mostrarei a configuração para o Linux openSUSE. Para as demais distribuições Linux, consulte a documentação da distribuição.

No openSUSE, acesse o Centro de Controle do YaST. Para isso, clique no **Menu de aplicativos**, aponte para **Configurações** e em seguida clique em **YaST**:

{% include image.html src="/files/2016/10/linux-ntp-01.jpg" %}

Será solicitada a você a senha do superusuário (*root*).

Na categoria **Sistema**, clique em **Data e hora**:

{% include image.html src="/files/2016/10/linux-ntp-02.png" %}

Você será apresentado à tela de configuração de data e hora:

{% include image.html src="/files/2016/10/linux-ntp-03.jpg" %}

Verifique se o fuso horário selecionado está correto. Se não, você pode mudá-lo. Para isso, você pode clicar no mapa mais ou menos perto de onde mora ou selecionar primeiro uma **Região** (nesse caso, **Brasil**) e depois um **Fuso horário**:

- se você mora na região Sul, Sudeste ou Centro-Oeste, regiões que adotam o horário de verão, pode selecionar o fuso horário de **São Paulo**; ou
- se você mora no Nordeste ou no Norte, pode selecionar o fuso horário de **Maceió**.

{% include image.html src="/files/2016/10/mapa-horario-de-verao-2016-2017.jpg" caption="Estados que adotam horário de verão no Brasil (referências: [G1](http://g1.globo.com/economia/noticia/2016/10/horario-de-verao-comeca-em-16-de-outubro-e-vai-ate-19-de-fevereiro.html) e [Decreto nº 8.112](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/Decreto/D8112.htm), mapa derivado do [mapa do Brasil em branco disponível na WikiMedia](https://commons.wikimedia.org/wiki/File:Brazil_Blank_Map_light.svg))" %}

Certifique-se de que a opção **Relógio do Hardware Definido como UTC** está marcada. Sem ela, a sincronização de hora não funciona no Linux. Explico mais adiante.

Clique no botão **Outras Config** (outras configurações).

Você vai para a tela **Mudar Data e Horário**:

{% include image.html src="/files/2016/10/linux-ntp-04.jpg" %}

Selecione a opção **Sincronizar com o Servidor NTP**.

No campo **Endereço do Servidor NTP**, informe o endereço `pool.ntp.br`.

Clique em **Sincronizar agora** para já acertar a data e hora do seu computador.

Marque as opções **Executar NTP como daemon** e **Gravar Configuração do NTP**. Elas garantem que a sincronização da hora via NTP seja feita constantemente (ela é feita "nos bastidores", você não é notificado quando ela é feita, apenas sabe que é feita porque a hora do computador está sempre certa).

Clique em **Aceitar** para voltar à tela anterior e depois em **OK** para sair da configuração de data e hora. Pode fechar o YaST também.

### Sincronizando a hora pelo Windows

Se você prefere sincronizar a hora pelo Windows, vamos primeiro desativar a sincronização de hora no Linux.

Acesse a configuração de data e hora como expliquei acima: clique no **Menu de aplicativos**, aponte para **Configurações** e em seguida clique em **YaST**. Será solicitada a você a senha do superusuário (*root*). Uma vez no Centro de Controle do YaST, na categoria **Sistema**, clique em **Data e hora**.

Na tela **Relógio e Fuso Horário**, clique no botão **Outras Config** (outras configurações).

Na tela **Mudar Data e Horário**, selecione a opção **Manualmente**. Desmarque a opção **Mudar o Horário Agora** e clique em **Aceitar**:

{% include image.html src="/files/2016/10/linux-localtime.jpg" %}

De volta à tela anterior, desmarque a opção **Relógio do Hardware Definido como UTC**.

Clique em **OK** para salvar as configurações e sair dessa tela.

Reinicie o computador.

No Windows, clique no **Relógio**, no canto inferior direito da tela, e depois clique em **Configurações de data e hora**:

{% include image.html src="/files/2016/10/win-ntp-01.jpg" %}

Na tela **Data e hora**, verifique se o **Fuso horário** selecionado está correto. Se não, você pode mudá-lo:

- se você mora na região Sul, Sudeste ou Centro-Oeste, regiões que adotam o horário de verão, pode selecionar o fuso horário **(UTC-03:00) Brasília** e ativar a opção **Ajustar automaticamente para o horário de verão**; ou
- se você mora no Nordeste ou no Norte, pode selecionar o fuso horário **(UTC-03:00) Salvador**.

Feito isso, clique em **Configurações adicionais de data, hora e região**:

{% include image.html src="/files/2016/10/win-ntp-02.jpg" %}

Na janela que aparece, clique em **Data e Hora**:

{% include image.html src="/files/2016/10/win-ntp-03.jpg" %}

Na caixa de diálogo **Data e Hora**, selecione a aba **Horário na Internet** e clique em **Alterar configurações**:

{% include image.html src="/files/2016/10/win-ntp-04.jpg" %}

Certifique-se de que a opção **Sincronizar com um servidor de horário na Internet** esteja marcada:

{% include image.html src="/files/2016/10/win-ntp-05.jpg" %}

No campo **Servidor**, informe o endereço **pool.ntp.br**.

Clique em **Atualizar agora** para já acertar a data e hora do seu computador.

Clique em **OK** para sair da caixa de diálogo **Configurações de Horário na Internet**. Depois, em **OK** para sair da caixa de diálogo **Data e Hora** e pode fechar as janelas restantes.

## Um pouco mais de detalhe

Vamos a algumas explicações, para quem tiver curiosidade de entender o que se passa.

Todos os fusos horários do mundo são definidos em relação ao [**UTC**][utc] (*Universal Time Coordinated*, Tempo Universal Coordenado), que é o fuso horário da cidade de Londres quando não está no horário de verão. Esse fuso também é conhecido por fuso horário de Greenwich ou [**GMT**][gmt] (*Greenwich Mean Time*, hora de Greenwich).

O [fuso horário de Brasília][brasilia] marca 3 horas a menos que o fuso horário de Greenwich (por isso abrevia-se UTC-03:00) quando não está no horário de verão, ou 2 horas a menos (UTC-02:00) no horário de verão.

Suponhamos, para exemplificar, que estamos em Brasília, que agora sejam dez horas da noite (22:00) no fuso horário de Greenwich e que não estamos no horário de verão. Então, em Brasília, nossa hora local, são sete horas da noite (19:00).

O computador possui dois relógios: um do *hardware*, semelhante ao relógio de pulso (se você abrir seu computador perceberá que há uma pilha de relógio lá); e um do *software*, que é o que você vê enquanto usa o sistema operacional, geralmente fica em um canto da tela. Você pode conferir a hora do relógio do *hardware* reiniciando o computador e acessando a configuração da placa-mãe (também conhecida como *setup*, BIOS ou UEFI; consulte o manual da sua placa-mãe ou do seu computador).

<div class="alert alert-warning" role="alert">
{% markdown %}

**Cuidado:** não abra o computador ou acesse a configuração da placa-mãe se não tiver conhecimento técnico suficiente, ou poderá danificar seu equipamento!

{% endmarkdown %}
</div>

Windows e Linux trabalham com esses dois relógios, por padrão, de maneiras diferentes.

Por padrão, o Windows usa a hora local como referência e a armazena diretamente no relógio do *hardware*. O relógio do *software* exibe uma cópia fiel da hora armazenada no *hardware*. Então, seguindo o exemplo, caso você tenha configurado o Windows para gerenciar a hora do computador, perceberá tanto no relógio do *hardware* quanto no relógio do *software* a hora local (19:00).

Por padrão, o Linux armazena no relógio do *hardware* a hora em UTC, e o relógio do *software* exibe a hora local calculada, levando em consideração a hora em UTC, o fuso horário que nós escolhemos e se estamos ou não no horário de verão. Então, seguindo o exemplo, caso você tenha configurado o Linux para gerenciar a hora do computador, perceberá que o relógio do *hardware* armazena a hora em UTC (22:00), enquanto o relógio do *software* mostra a hora local (19:00).

A vantagem dessa configuração é que o relógio do *hardware* não precisa ser ajustado quando você muda de fuso horário (se você viaja pelo mundo) ou quando começa e termina o horário de verão. A desvantagem é que pode ser confuso acessar a configuração da placa-mãe e ver uma hora diferente da hora local, mas raramente precisamos mexer nessa configuração, de modo que podemos deixá-la aos cuidados do sistema operacional.

Podemos configurar um sistema ou outro para trabalhar de forma diferente.

De fato, mostramos acima como fazer para que o Linux funcione de maneira diferente, entendendo que o relógio do *hardware* armazena a hora local e exibindo na tela uma cópia dessa hora, sem mexer no relógio do *hardware*, que deixamos aos cuidados do Windows.

Vejamos agora outra possibilidade.

## Windows e relógio em UTC

Vamos mostrar agora como fazer para que o Windows funcione de maneira diferente, entendendo que o relógio do *hardware* armazena a hora em UTC e exibindo na tela a hora local calculada, como faz o Linux. Essa é a configuração recomendada se você possui esses dois sistemas operacioanis instalados no computador.

<div class="alert alert-warning" role="alert">
{% markdown %}

Esse procedimento só funciona para o Windows Vista SP2, o Windows Server 2008, o Windows 7 e versões mais recentes do Windows. Em versões anteriores, trabalhar com o relógio em UTC não era oficialmente documentado nem suportado pela Microsoft. Mais informações podem ser obtidas [aqui](https://support.microsoft.com/kb/2687252) e [aqui](http://www.cl.cam.ac.uk/~mgk25/mswish/ut-rtc.html). Se você utiliza versões mais recentes do Windows, pode seguramente desconsiderar esse aviso. Apenas certifique-se de que todas as atualizações disponíveis para a sua versão do Windows estão instaladas.

{% endmarkdown %}
</div>

Abra o **menu Iniciar**, digite **regedit** na caixa de pesquisa, depois clique com o botão direito do *mouse* em **regedit** e clique em **Executar como administrador**:

{% include image.html src="/files/2016/10/utc-win-01.jpg" %}

Na estrutura de árvore da esquerda, navegue até a chave de registro **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation**. Clique com o botão direito do *mouse* em uma área livre da janela à direita, aponte para **Novo** e clique em **Valor DWORD (32 bits)**:

{% include image.html src="/files/2016/10/utc-win-02.jpg" %}

Digite **RealTimeIsUniversal** e tecle **Enter**. Depois, dê dois cliques no valor recém-criado, atribua-lhe o valor **1** e clique em **OK**:

{% include image.html src="/files/2016/10/utc-win-03.jpg" %}

Feche o **Editor do Registro** e reinicie o computador.

No Linux, configure-o para sincronizar a hora do computador como expliquei acima.

Note que o Windows é capaz de sincronizar a hora com o relógio do *hardware* em UTC. Sendo assim, não é necessário desativar a sincronização de hora no Windows.

Espero que essas dicas possam ser úteis, da mesma forma como já me foram úteis. Se tiver qualquer dúvida, não deixe de comentar!

Até a próxima!

## Referências

- [NTP.br][ntpbr]
- [Economia - Horário de verão começa em 16 de outubro e vai até 19 de fevereiro - G1][g1]
- [Decreto nº 8.112][decreto]
- [SDB:Configuring the clock - openSUSE][opensuse-wiki]
- [Why does Windows keep your BIOS clock on local time? - The Old New Thing][win-localtime]
- [Time - ArchWiki][archwiki]
- [IBM PC Real Time Clock should run in UT][win-utc]
- [UbuntuTime - Community Help Wiki][ubuntu-wiki]

[ntp]:              http://ntp.br/ntp.php
[ntpbr]:            http://ntp.br/
[on]:               http://pcdsh01.on.br/
[nicbr]:            http://nic.br/
[opensuse]:         https://www.opensuse.org/
[ubuntu]:           https://www.ubuntu.com/
[windows]:          https://www.microsoft.com/pt-br/windows/
[utc]:              https://pt.wikipedia.org/wiki/Tempo_Universal_Coordenado
[gmt]:              https://pt.wikipedia.org/wiki/Greenwich_Mean_Time
[brasilia]:         https://pt.wikipedia.org/wiki/Fusos_hor%C3%A1rios_no_Brasil
[g1]:               http://g1.globo.com/economia/noticia/2016/10/horario-de-verao-comeca-em-16-de-outubro-e-vai-ate-19-de-fevereiro.html
[decreto]:          http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/Decreto/D8112.htm
[opensuse-wiki]:    https://en.opensuse.org/SDB:Configuring_the_clock
[win-localtime]:    https://blogs.msdn.microsoft.com/oldnewthing/20040902-00/?p=37983/
[archwiki]:         https://wiki.archlinux.org/index.php/Time
[win-utc]:          http://www.cl.cam.ac.uk/~mgk25/mswish/ut-rtc.html
[ubuntu-wiki]:      https://help.ubuntu.com/community/UbuntuTime
