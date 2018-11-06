---
date: 2018-11-06 18:30:00 GMT-2
image: '/files/2018/11/dropbox-veracrypt.png'
layout: post
published: true
nickname: 'how-to-dropbox-veracrypt'
title: 'Criptografando os arquivos do Dropbox no disco com VeraCrypt'
excerpt: 'O Dropbox é um dos serviços de nuvem mais populares. Recentemente, alguns usuários receberam um alerta informando que o Dropbox vai parar de sincronizar, devido a incompatibilidade do sistema de arquivos. Veja como manter a sincronização e ainda de quebra garantir a segurança dos arquivos no disco armazenando-os em um volume criptografado do VeraCrypt.'
---

{% include image.html src="/files/2018/11/dropbox-veracrypt.png" style="max-width: 200px;" %}

O [Dropbox] é um dos serviços de nuvem mais populares e um dos poucos que disponibiliza cliente para sincronização no [Linux]. Recentemente, alguns usuários receberam um alerta:

{% include image.html src="/files/2018/11/dropbox-veracrypt-01-pt.jpg" caption="O Dropbox vai parar de sincronizar em 7 dias. Mova sua pasta do Dropbox para um sistema de arquivos compatível." %}

No meu caso, como eu tenho um *notebook* com Linux e [Windows] e o cliente do Dropbox instalado em ambos os sistemas, eu armazenava a pasta Dropbox em uma partição [NTFS], acessível por ambos.

Mas o Dropbox anunciou [em seu fórum][dropboxforum] que a partir de 07/11/2018 vai restringir o suporte a [sistemas de arquivos][fs] apenas aos mais comuns em cada sistema: NTFS no Windows, [HFS+] ou [APFS] no [Mac OS X][macosx] e [Ext4] limpo (sem criptografia) no Linux. Em tese, essa mudança deve garantir estabilidade e experiência consistente aos usuários. A notícia não é de todo ruim, porque o sistema de arquivos Ext4 é comum em instalações Linux.

Para verificar suas partições e sistemas de arquivos, consulte o aplicativo [**GParted**][gparted]:

{% include image.html src="/files/2018/11/dropbox-veracrypt-02-pt.jpg" %}

Ou, se prefere a linha de comando, utilize o comando [**fdisk**][fdisk]:

```
# mount -l
```

Nenhuma das minhas partições possui sistema de arquivos Ext4. Portanto, a princípio, eu não poderia seguir sincronizando o Dropbox pelo Linux. Eu poderia manter o Dropbox na partição NTFS, mas eu só poderia sincronizar pelo Windows.

Mas como eu uso com muito mais frequência o Linux do que o Windows, decidi viabilizar a sincronização do Dropbox pelo Linux, ainda de quebra garantindo a segurança dos arquivos no disco: vou armazenar os arquivos do Dropbox em um [volume criptografado do VeraCrypt][how-to-veracrypt]. Dessa forma, os arquivos estão seguros contra acesso indevido caso o *notebook* seja roubado, por exemplo.

**Observação:** essa solução garante a segurança dos arquivos apenas no disco. De posse de *e-mail* e senha, uma pessoa mal-intencionada ainda pode acessá-los usando o navegador.

Essa pode ser uma alternativa inclusive para quem hoje armazena os arquivos do Dropbox em uma partição Ext4 criptografada, porque o VeraCrypt realiza a criptografia "nos bastidores", o Dropbox não é ciente que os arquivos são criptografados.

Uma desvantagem dessa solução é que ela requer o trabalho manual de montar o volume e iniciar o Dropbox sempre que for necessário sincronizar. Por isso, recomendo que leia essa página até o final antes de começar, para ver se essa solução de fato te interessa.

Já falamos sobre o *software* de criptografia de arquivos [VeraCrypt] aqui:

- [Criptografia de arquivos com o VeraCrypt][how-to-veracrypt]

Se você ainda não leu aquele *post*, leia antes de continuar.

## Antes de começar

Para evitar problemas, certifique-se de que seus arquivos estão sincronizados. Para isso, clique no **ícone do Dropbox** e certifique-se de que aparece **Atualizado** no menu:

{% include image.html src="/files/2018/11/dropbox-veracrypt-03-pt.jpg" %}

Também nesse menu verifique o espaço disponível para sua conta. No meu caso, eu disponho de 5,8GB de espaço. Normalmente, novas contas começam com 2GB.

## Criando o volume criptografado

Inicie o VeraCrypt e siga o passo-a-passo do [*post* sobre o VeraCrypt][how-to-veracrypt] para criar um volume padrão em arquivo. Apenas se atente a alguns detalhes para esse volume do Dropbox.

O local do volume (tela **Volume Location**) não é relevante, pois essa informação é invisível ao Dropbox. Ele pode inclusive ser armazenado naquela partição NTFS.

O tamanho do volume (tela **Volume Size**) deve ser igual ao espaço disponível no Dropbox (ou um pouco maior, por precaução):

{% include image.html src="/files/2018/11/dropbox-veracrypt-04.jpg" %}

Como informamos um tamanho maior, o assistente mostra uma tela que não apareceu da outra vez, questionando quanto a arquivos grandes (**Large Files**):

{% include image.html src="/files/2018/11/dropbox-veracrypt-05.jpg" %}

Se você pretende armazenar arquivos grandes (maiores que 4GB) no volume, selecione a segunda opção (**I will store files larger than 4 GB on the volume**). Senão, selecione a primeira. Na dúvida, selecione a segunda. Clique em **Next** (avançar).

A tela seguinte já é conhecida. É importante que o volume seja formatado com o sistema de arquivos **Linux Ext4**:

{% include image.html src="/files/2018/11/dropbox-veracrypt-06.jpg" %}

Ao clicar em **Next**, mais uma tela nova:

{% include image.html src="/files/2018/11/dropbox-veracrypt-07.jpg" %}

Essa tela questiona o suporte multi-plataforma (**Cross-Platform Support**). Como o volume será usado apenas no Linux, marque a segunda opção (**I will mount the volume only on Linux**) e clique em **Next**.

Após a criação do volume, monte-o. Escolha uma vaga e sempre monte esse volume nessa vaga, porque o ponto de montagem será passado para o Dropbox. No meu exemplo, escolhi a vaga 10, então o ponto de montagem do meu volume é `/mnt/veracrypt10`:

{% include image.html src="/files/2018/11/dropbox-veracrypt-08-pt.jpg" %}

## Movendo a pasta do Dropbox

Crie uma pasta chamada `Dropbox` dentro do volume criptografado.

Para mover a pasta do Dropbox, clique no **ícone do Dropbox** e, no menu que aparece, clique em **Preferências**.

Na caixa de diálogo **Preferências do Dropbox**, selecione a aba **Sincronização** e clique no botão **Mover**:

{% include image.html src="/files/2018/11/dropbox-veracrypt-09-pt.jpg" %}

Informe o caminho para a pasta `Dropbox` dentro do volume criptografado e clique em **Choose** (escolher, essa tela o Dropbox não traduziu):

{% include image.html src="/files/2018/11/dropbox-veracrypt-10.jpg" %}

Permita que o Dropbox mova a pasta e o seu conteúdo para o novo local:

{% include image.html src="/files/2018/11/dropbox-veracrypt-11-pt.jpg" %}

Uma barra de progresso indica o andamento da mudança:

{% include image.html src="/files/2018/11/dropbox-veracrypt-12-pt.jpg" %}

Quando terminar, ainda precisamos alterar mais uma configuração. Selecione a aba **Geral** e desmarque a opção **Iniciar o Dropbox junto com o sistema**:

{% include image.html src="/files/2018/11/dropbox-veracrypt-13-pt.jpg" %}

Clique em **OK** para fechar a caixa de diálogo **Preferências do Dropbox**.

## Uso no dia-a-dia

Se você leu todo o [*post* sobre o VeraCrypt][how-to-veracrypt] (suponho que sim), sabe que o volume só deve ficar montado durante o uso.

Se você não vai mais usar os arquivos do Dropbox, encerre o cliente do Dropbox (clique no **ícone do Dropbox** e depois em **Sair do Dropbox**) e depois desmonte o volume pelo VeraCrypt. É importante sempre sair do Dropbox antes de desmontar o volume.

Quando for voltar a usar os arquivos do Dropbox, inicie o VeraCrypt, monte o volume e então, com o volume montado, inicie o Dropbox. Caso você esqueça de montar o volume antes de iniciar o Dropbox, ele não vai encontrar a pasta `Dropbox` e exibir uma mensagem de erro:

{% include image.html src="/files/2018/11/dropbox-veracrypt-14-pt.jpg" caption="A pasta do Dropbox não foi encontrada." %}

## Referências

- [Dropbox To End Sync Support For All Filesystems Except Ext4 on Linux - It's FOSS][itsfoss]
- [Mover a pasta do Dropbox para um novo local - Ajuda do Dropbox][move-dropbox-folder]
- [Quais são os requisitos de sistema para executar o Dropbox? - Ajuda do Dropbox][system-requirements]

[dropbox]: https://www.dropbox.com
[linux]: http://www.vivaolinux.com.br/linux/
[windows]: https://www.microsoft.com/pt-br/windows/
[ntfs]: https://pt.wikipedia.org/wiki/NTFS
[dropboxforum]: https://www.dropboxforum.com/t5/Syncing-and-uploads/Linux-Dropbox-client-warn-me-that-it-ll-stop-syncing-in-Nov-why/m-p/290065/highlight/true#M42255
[fs]: https://www.techtudo.com.br/dicas-e-tutoriais/noticia/2016/02/entenda-o-que-e-sistema-de-arquivos-e-sua-utilidade-no-pc-e-no-celular.html
[hfs+]: https://pt.wikipedia.org/wiki/HFS%2B
[apfs]: https://pt.wikipedia.org/wiki/Apple_File_System
[macosx]: http://www.apple.com/br/macosx/
[ext4]: https://pt.wikipedia.org/wiki/Ext4
[gparted]: https://gparted.org/
[fdisk]: https://www.gnu.org/software/fdisk/
[move-dropbox-folder]: https://www.dropbox.com/pt_BR/help/desktop-web/move-dropbox-folder
[how-to-veracrypt]: {% post_url pt/2018-10-15-criptografia-de-arquivos-com-o-veracrypt %}
[veracrypt]: https://www.veracrypt.fr/

[itsfoss]: https://itsfoss.com/dropbox-linux-ext4-only/
[system-requirements]: https://www.dropbox.com/help/desktop-web/system-requirements#desktop
