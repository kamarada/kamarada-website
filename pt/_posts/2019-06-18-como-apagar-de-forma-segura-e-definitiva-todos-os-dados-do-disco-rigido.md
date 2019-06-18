---
date: '2019-06-18 22:00:00 GMT-3'
layout: post
published: true
title: 'Como apagar de forma segura e definitiva todos os dados do disco rígido'
image: /files/2019/06/wipe-disk.png
nickname: 'wipe-disk'
---

Você precisa apagar os dados de um HD, seja porque vai vendê-lo ou doá-lo, seja porque é um jornalista ou uma empresa de TI que precisa proteger os dados de acessos indevidos. Como fazer para destruir os arquivos do disco rígido de forma definitiva, de modo que não seja possível, mesmo para um especialista, recuperá-los? É o que você verá neste *post*.

<!--more-->

{% include image.html src="/files/2019/06/wipe-disk.png" %}

Destruir dados não é tão simples quanto mover arquivos para a lixeira (usando a tecla **Delete**), deletá-los (**Shift + Delete**) ou formatar sistemas de arquivos. Quando você deleta ou formata, o sistema operacional apenas apaga metadados, tornando aquela área do disco disponível para escrever outros arquivos. Mas os *bits* permanecem onde estão e podem ser recuperados com o apoio de *software* especializado.

O [método mais eficiente][canaltech] para destruir dados é [limpar o disco rígido][archwiki]. Isso é feito sobrescrevendo cada *bit* do disco com novos dados.

Por exemplo, você pode substituir todos os *bits* do disco por zeros — esse processo é conhecido como ***zero fill*** (preencher com zeros).

**Atenção:** certifique-se de qual HD vai limpar, para não correr o risco de limpar o HD errado, o que pode causar perda permanente de dados!

No [Linux], para preencher o HD com zeros, execute o comando a seguir (vou usar como exemplo o `/dev/sda`, altere conforme sua necessidade):

```
# dd if=/dev/zero of=/dev/sda status=progress
```

Para a maioria dos casos, isso já deve ser suficiente. Recuperar arquivos desse disco após esse procedimento pode exigir *software*, *hardware*, até pessoal especializado, custar caro e mesmo assim não ser garantido.

Se você precisa limpar justamente o HD que armazena o sistema operacional, saiba que é impossível fazê-lo com o próprio sistema em execução. Nesse caso, utilize um [LiveUSB][live] ou [LiveDVD][live] ou conecte o HD a outro computador para fazer a limpeza.

Se você é um paranóico da segurança, pode aumentar a segurança da limpeza preenchendo o disco com *bits* aleatórios, em vez de zeros:

```
# dd if=/dev/urandom of=/dev/sda status=progress
```

Ou repetir esse procedimento algumas vezes, em vez de executá-lo apenas uma vez:

```
# for i in {1..5}; do dd if=/dev/urandom of=/dev/sda status=progress; done
```

A [*wiki* do Arch Linux][archwiki] discute diversos procedimentos para limpeza segura de disco.

Se a informação armazenada no disco é muito confidencial, o guia de segurança [Security in a Box][securityinabox] recomenda fazer a limpeza com zeros e em seguida destruir fisicamente o disco (com golpes de martelo, por exemplo).

**Cuidado:** use óculos de proteção e tome muito cuidado ao destruir um disco rígido por conta própria! Nunca toque fogo em um disco rígido, nunca coloque um disco rígido no microondas e nunca derrame ácido em um disco rígido.

{% include image.html src="/files/2019/06/destroy-a-hard-drive.jpg" caption="Imagem obtida no site [Lifewire](https://www.lifewire.com/how-to-completely-erase-a-hard-drive-2626173)" %}

[A destruição física de HDs é usada pelo Google][google-hds] para proteger dados dos seus usuários.

## Referências

- [Apague definitivamente os dados de seu disco rígido - Hardware - Canaltech][canaltech]
- [Securely wipe disk - ArchWiki][archwiki]
- [Como destruir informações sensíveis - Security in a Box][securityinabox]

[canaltech]:        https://canaltech.com.br/hardware/apague-definitivamente-os-dados-de-seu-disco-rigido/
[archwiki]:         https://wiki.archlinux.org/index.php/Securely_wipe_disk
[linux]:            http://www.vivaolinux.com.br/linux/
[live]:             {% post_url pt/2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}
[securityinabox]:   https://securityinabox.org/pt/guide/destroy-sensitive-information/
[google-hds]:       https://super.abril.com.br/tecnologia/o-predio-secreto-do-google/
