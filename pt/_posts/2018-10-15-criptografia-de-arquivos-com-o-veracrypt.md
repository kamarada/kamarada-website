---
date: 2018-10-15 23:00:00 GMT-3
image: '/files/2018/10/how-to-veracrypt.jpg'
layout: post
published: true
nickname: 'how-to-veracrypt'
title: 'Criptografia de arquivos com o VeraCrypt'
excerpt: 'Criptografar arquivos é como mantê-los trancados em um cofre: só quem possui a senha para abri-lo pode acessá-los. Ainda que você não seja nerd ou paranoico com segurança (do tipo que sempre desconfia de espionagem), criptografia pode ser útil pra você. Se você tem um notebook, imagine o que pode acontecer se ele for roubado: documentos, contatos, dados de clientes, do trabalho, fotos podem levar você e sua empresa à ruína. Felizmente, se você usa Linux, dispõe de um programa gratuito para criar “cofres” de arquivos, que é o VeraCrypt. Nesse post, você verá como pode utilizá-lo para proteger informações sensíveis no seu computador.'
---

Criptografar arquivos é como mantê-los trancados em um cofre: só quem possui a senha para abri-lo pode acessá-los. Ainda que você não seja [*nerd*][nerd] ou paranoico com segurança (do tipo que sempre desconfia de espionagem), [criptografia][cryptography] pode ser útil pra você. Se você tem um *notebook*, imagine o que pode acontecer se ele for roubado: documentos, contatos, dados de clientes, do trabalho, fotos podem levar você e sua empresa à ruína.

Felizmente, se você usa [Linux][linux], dispõe de um programa gratuito para criar "cofres" de arquivos, que é o [VeraCrypt][veracrypt]. Nesse *post*, você verá como pode utilizá-lo para proteger informações sensíveis no seu computador.

{% include image.html src="/files/2018/10/how-to-veracrypt.jpg" %}

## Introdução

O **VeraCrypt** é um [*software* livre][free-software] e gratuito desenvolvido pela companhia [IDRIX][idrix] que pode ser usado no Linux, [Windows][windows] e [Mac OS X][macosx] para guardar arquivos em volumes criptografados. Esses volumes podem ser arquivos (parecidos com um [arquivo ZIP][zip] com senha), partições ou mesmo discos inteiros.

**Observação:** o VeraCrypt suporta [criptografia do disco inteiro][fde] (*full disk encryption* ou FDE) apenas no Windows.

O VeraCrypt é baseado no extinto projeto [TrueCrypt][truecrypt], tendo resolvido suas falhas de segurança e adicionado funcionalidades. Ele se assemelha a outras ferramentas de segurança proprietárias disponíveis em sistemas operacionais pagos, como o [BitLocker][bitlocker] para Windows e o [FileVault][filevault] para Mac OS X.

Nesse *post*, vamos focar nos volumes criptografados em arquivos. No futuro, pretendo escrever um *post* mostrando como criptografar um *pendrive* inteiro com o VeraCrypt.

A diferença entre um volume em arquivo do VeraCrypt e um arquivo ZIP com senha é que no caso do VeraCrypt a criptografia ocorre ao vivo (*on-the-fly*), é automática e transparente.

Por exemplo, suponha que você precisa trabalhar em um documento de texto do [LibreOffice Writer][writer] (extensão **.odt**) ou do [Word][word] (**.doc** ou **.docx**).

Se esse documento está dentro de um arquivo ZIP com senha, você deve extrai-lo do arquivo ZIP para o disco (fornecendo a senha), abri-lo do disco, editá-lo, então salvá-lo no disco e atualizá-lo no arquivo ZIP (fornecendo mais uma vez a senha). Note que enquanto o documento está no disco, fora do do arquivo ZIP, está desprotegido (se há uma queda de energia, por exemplo, é fácil acessar o documento fora do arquivo ZIP com senha). Também é necessário espaço em disco adicional para extrair o documento.

Se esse mesmo documento está dentro de um volume do VeraCrypt, você monta o volume (fornecendo a senha), abre o documento de dentro do volume (não é necessário copiá-lo para o disco, para fora do volume), edita e salva. Quando terminar, desmonta o volume. Note que dentro do volume o documento está protegido (se há uma queda de energia, o documento está dentro do volume, que é protegido por senha). Também não é necessário espaço em disco ou memória RAM adicional para abrir o documento.

Agora que já apresentei o funcionamento básico do VeraCrypt, mostrarei na prática como baixá-lo, instalá-lo e usá-lo para criar, montar, desmontar e usar volumes em arquivo.

Esse *post* é baseado em grande parte no [guia de segurança digital Security in a Box][securityinabox-veracrypt] e na [documentação do VeraCrypt][veracrypt-documentation].

Para referência futura, aqui uso a versão 1.23 do VeraCrypt, [lançada em 12 de setembro de 2018][veracrypt-release-notes], e a distribuição Linux [openSUSE Leap 15.0][opensuse-leap].

## Baixando o instalador do VeraCrypt

Em se tratando de programas relacionados a segurança, sempre os baixe do repositório oficial da própria distribuição ou do *site* oficial do programa.

Como o openSUSE não possui o VeraCrypt em seu repositório, vamos baixá-lo do *site* oficial.

Para baixar o VeraCrypt, acesse sua página de *downloads* em:

[https://www.veracrypt.fr/en/Downloads.html][veracrypt-downloads]

Na seção **Linux**, clique no *link* para *download* do instalador:

{% include image.html src="/files/2018/10/veracrypt-01.jpg" %}

(o arquivo se chama `veracrypt-1.23-setup.tar.bz2`)

### Verificando o instalador

Em se tratando de programas relacionados a segurança, também é sempre importante verificar a integridade e autenticidade do programa baixado.

O processo é bem semelhante ao já apresentado no *post*:

- [Verificação de integridade e autenticidade com SHA-256 e GPG][how-to-verify-iso]

Naquele *post*, vimos como verificar uma imagem ISO baixada do *site* do openSUSE.

Aqui, vou resumir o passo-a-passo para o instalador baixado do *site* do VeraCrypt.

Ainda na página de *downloads* do VeraCrypt, baixe também:

- a chave pública do Projeto VeraCrypt (o arquivo se chama `VeraCrypt_PGP_public_key.asc`, o *link* para *download* é um dos primeiros, no topo da página),
- a assinatura do instalador (`veracrypt-1.23-setup.tar.bz2.sig`, o *link* está ao lado do *link* do instalador) e
- a soma de verificação do instalador (`veracrypt-1.23-sha256sum.txt`, o *link* está disponível mais abaixo).

Usando o terminal, verifique a integridade do instalador com o comando **sha256sum**:

```
$ cd Downloads
$ sha256sum veracrypt-1.23-setup.tar.bz2
fcbffa08f34695570dcaaa89a10cac9bf999766fd92f84eb66ad718255fb2432  veracrypt-1.23-setup.tar.bz2
$ cat veracrypt-1.23-sha256sum.txt | grep veracrypt-1.23-setup.tar.bz2
fcbffa08f34695570dcaaa89a10cac9bf999766fd92f84eb66ad718255fb2432  veracrypt-1.23-setup.tar.bz2
```

Certifique-se de que confere a soma informada por ambos os comandos (`fcbf...2432`).

Aqui, optamos por fazer a verificação de forma diferente, manual: calculamos a soma de verificação e a comparamos com a esperada, porque o arquivo de texto contém as somas para os vários arquivos disponibilizados no *site* e parece estar mal formatado.

Importe a chave pública do Projeto VeraCrypt com o comando:

```
$ gpg --import VeraCrypt_PGP_public_key.asc
```

Perceba que a saída do comando revela parte da impressão digital (*fingerprint*) da chave:

```
gpg: key 821ACD02680D16DE: 1 signature not checked due to a missing key
gpg: key 821ACD02680D16DE: public key "VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>" imported
gpg: Número total processado: 1
gpg:               importados: 1
gpg: no ultimately trusted keys found
```

(nesse caso, `821ACD02680D16DE`)

Confira a impressão digital completa com o comando:

```
$ gpg --fingerprint 821ACD02680D16DE
```

Compare o número informado com o que aparece na página de *downloads*:

```
pub   rsa4096 2018-09-11 [SC]
      5069 A233 D55A 0EEB 174A  5FC3 821A CD02 680D 16DE
uid           [ unknown] VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>
sub   rsa4096 2018-09-11 [E]
sub   rsa4096 2018-09-11 [A]
```

{% include image.html src="/files/2018/10/veracrypt-02-pt.jpg" %}

Se a impressão digital confere, podemos continuar a verificação de autenticidade (ainda não é hora de pular para a instalação).

Opcionalmente, se você possui uma chave GPG, assine a chave pública do VeraCrypt com a sua chave, estabelecendo uma rede de confiança (*web of trust*):

```
$ gpg --edit-key 821ACD02680D16DE
gpg (GnuPG) 2.2.5; Copyright (C) 2018 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.


pub  rsa4096/821ACD02680D16DE
     created: 2018-09-11  expires: never       usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/200B5A9D26878A32
     created: 2018-09-11  expires: never       usage: E
sub  rsa4096/0F5AACD65483D029
     created: 2018-09-11  expires: never       usage: A
[ unknown] (1). VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>

gpg> fpr
pub   rsa4096/821ACD02680D16DE 2018-09-11 VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>
Impressão da chave primária: 5069 A233 D55A 0EEB 174A  5FC3 821A CD02 680D 16DE

gpg> trust
pub  rsa4096/821ACD02680D16DE
     created: 2018-09-11  expires: never       usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/200B5A9D26878A32
     created: 2018-09-11  expires: never       usage: E
sub  rsa4096/0F5AACD65483D029
     created: 2018-09-11  expires: never       usage: A
[ unknown] (1). VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>

Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Decisão? 5
Do you really want to set this key to ultimate trust? (y/N) y

pub  rsa4096/821ACD02680D16DE
     created: 2018-09-11  expires: never       usage: SC
     trust: ultimate      validity: unknown
sub  rsa4096/200B5A9D26878A32
     created: 2018-09-11  expires: never       usage: E
sub  rsa4096/0F5AACD65483D029
     created: 2018-09-11  expires: never       usage: A
[ unknown] (1). VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>
Não se esqueça que a validade de chave mostrada não é necessáriamente a
correcta a não ser que reinicie o programa.

gpg> sign

pub  rsa4096/821ACD02680D16DE
     created: 2018-09-11  expires: never       usage: SC
     trust: ultimate      validity: unknown
Impressão da chave primária: 5069 A233 D55A 0EEB 174A  5FC3 821A CD02 680D 16DE

     VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>

Are you sure that you want to sign this key with your
key "Linux Kamarada <linux@kamarada.com.br>" (E9A54DC9D55B83C6)

Really sign? (y/N) y

gpg> quit
Save changes? (y/N) y
$ gpg --list-sig 821ACD02680D16DE
gpg: a verificar a base de dados de confiança
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   2  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 2u
gpg: proxima verificação da base de dados de confiança a 2020-10-13
pub   rsa4096 2018-09-11 [SC]
      5069A233D55A0EEB174A5FC3821ACD02680D16DE
uid           [ultimate] VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>
sig 3        821ACD02680D16DE 2018-09-11  VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>
sig          EB559C7C54DDD393 2018-09-11  VeraCrypt Team <veracrypt@idrix.fr>
sig          E9A54DC9D55B83C6 2018-10-14  Linux Kamarada <linux@kamarada.com.br>
sub   rsa4096 2018-09-11 [E]
sig          821ACD02680D16DE 2018-09-11  VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>
sub   rsa4096 2018-09-11 [A]
sig          821ACD02680D16DE 2018-09-11  VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>
```

Verifique a assinatura GPG do instalador com o comando:

```
$ gpg --verify veracrypt-1.23-setup.tar.bz2.sig
```

Se você não assinou a chave pública do VeraCrypt, a saída desse comando deve ser parecida com:

```
gpg: assuming signed data in 'veracrypt-1.23-setup.tar.bz2'
gpg: Signature made qua 12 set 2018 19:50:49 -03
gpg:                using RSA key 5069A233D55A0EEB174A5FC3821ACD02680D16DE
gpg: Good signature from "VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>" [unknown]
gpg: AVISO: Esta chave não está certificada com uma assinatura confiável!
gpg:          Não há indicação de que a assinatura pertence ao dono.
Impressão da chave primária: 5069 A233 D55A 0EEB 174A  5FC3 821A CD02 680D 16DE
```

O mais importante é o aviso de boa assinatura (*good signature*).

Se você assinou a chave pública do VeraCrypt, a saída desse comando é menor:

```
gpg: assuming signed data in 'veracrypt-1.23-setup.tar.bz2'
gpg: Signature made qua 12 set 2018 19:50:49 -03
gpg:                using RSA key 5069A233D55A0EEB174A5FC3821ACD02680D16DE
gpg: Good signature from "VeraCrypt Team (2018 - Supersedes Key ID=0x54DDD393) <veracrypt@idrix.fr>" [ultimate]
```

Nesse ponto, se ambas as verificações de integridade e autenticidade sucederam, podemos confiar tranquilamente no instalador baixado e seguir à instalação.

## Instalando o VeraCrypt

Antes de começar, verifique se você está usando um sistema de 32 *bits* ou 64 *bits*. Para isso, no terminal execute o comando:

```
$ uname -m
```

Se você estiver usando um sistema de 32 *bits*, o terminal irá mostrar `i686` ou `i386`.

Se seu sistema for de 64 *bits*, o terminal irá mostrar `x86_64`.

Nos exemplos, vou assumir a utilização de um sistema de 64 *bits*, que é o meu caso.

Extraia os arquivos do instalador:

```
$ tar xvjf veracrypt-1.23-setup.tar.bz2
```

Execute o instalador:

```
$ ./veracrypt-1.23-setup-console-x64
```

Ele limpa a tela do terminal e apresenta:

```
VeraCrypt 1.23 Setup
____________________


Installation options:

 1) Install veracrypt_1.23_console_amd64.tar.gz
 2) Extract package file veracrypt_1.23_console_amd64.tar.gz and place it to /tmp

To select, enter 1 or 2:
```

Digite `1` e tecle **Enter**.

```
Before you can use, extract, or install VeraCrypt, you must accept the
terms of the VeraCrypt License.

Press Enter to display the license terms...
```

Antes de continuar, você deve ler a licença. Tecle **Enter**.

Pressione **Page Down** até chegar ao final da licença.

```
Do you accept and agree to be bound by the license terms? (yes/no):
```

Ele pergunta se você aceita a licença. Digite `yes` (sim) e tecle **Enter**.

```
Uninstalling VeraCrypt:
-----------------------

To uninstall VeraCrypt, please run 'veracrypt-uninstall.sh'.

Installing package...
[sudo] senha para root:
```

Digite a senha do administrador (usuário *root*) e tecle **Enter**.

Os arquivos são extraídos.

```
...
usr/share/veracrypt/doc/HTML/VeraCrypt Volume Format Specification.html
usr/share/veracrypt/doc/HTML/VeraCrypt Rescue Disk.html
usr/share/veracrypt/doc/HTML/VeraCrypt128x128.png
usr/bin/
usr/bin/veracrypt-uninstall.sh
usr/bin/veracrypt

Press Enter to exit...
```

Tecle **Enter** para encerrar o instalador e voltar ao terminal.

## Iniciando o VeraCrypt

Para iniciar o VeraCrypt, abra o **panorama de Atividades**, digite `veracrypt` e clique no ícone do aplicativo:

{% include image.html src="/files/2018/10/veracrypt-03-pt.jpg" %}

Aparece a tela principal do VeraCrypt:

{% include image.html src="/files/2018/10/veracrypt-04.jpg" caption="Tela principal do VeraCrypt sem volume montado" %}

Assim como o instalador, a interface do aplicativo não possui tradução.

## Criando um volume padrão em arquivo

Na tela principal do VeraCrypt, clique no botão **Create Volume** (criar volume).

É iniciado o **VeraCrypt Volume Creation Wizard** (assistente de criação de volume do VeraCrypt). Na primeira tela, informe se o volume será um arquivo ou uma partição:

{% include image.html src="/files/2018/10/veracrypt-05.jpg" %}

Como eu expliquei anteriormente, um volume em arquivo do VeraCrypt é parecido com um arquivo ZIP com senha. É esse volume que vamos criar nesse *post*. Para isso, vamos utilizar a primeira opção, **Create an encrypted file container** (criar um arquivo de recipiente encriptado), que já vem marcada por padrão. É a opção recomendada para quem está começando a usar o VeraCrypt. Deixe como está e clique em **Next** (avançar).

Na segunda tela, selecione o tipo de volume:

{% include image.html src="/files/2018/10/veracrypt-06.jpg" %}

O VeraCrypt permite criar dois tipos de volumes criptografados: volumes padrão (*standard*) e volumes escondidos (*hidden*). Um **volume padrão** é protegido por uma senha, semelhante a um cofre simples. Um **volume escondido** é protegido por duas senhas, semelhante a um cofre com fundo falso. Ao acessá-lo, se você informa uma senha, determinados arquivos são apresentados, se você informa outra, outros arquivos são apresentados no lugar. Um volume escondido oferece mais segurança para arquivos ainda mais confidenciais.

Aqui, vamos nos ater à simplicidade do volume padrão. Para mais informações sobre volumes escondidos, consulte o [guia Security in a Box][securityinabox-veracrypt].

A opção **Standard VeraCrypt volume** (volume padrão do VeraCrypt) deve vir marcada por padrão. Deixe como está e clique em **Next**.

Na tela seguinte, informe o local onde será criado o volume. Para isso, clique em **Select File** (selecionar arquivo):

{% include image.html src="/files/2018/10/veracrypt-07.jpg" %}

Como exemplo, vou por meu volume na pasta `Documentos` e chamá-lo de `FotosAntigasDoVovo.zip`. O volume pode ter quaisquer nome e extensão, assim como ser salvo em qualquer lugar. O objetivo é disfarçar a existência de um volume do VeraCrypt. Não selecione um arquivo que já existe, senão ele será sobrescrito, e memorize bem o nome e o local que escolheu para o volume.

Quando terminar, clique em **Next**.

Na tela seguinte, **Encryption Options** (opções de encriptação), você pode selecionar qual algoritmo usar para criptografia (*encryption*) e soma (*hash*) do volume:

{% include image.html src="/files/2018/10/veracrypt-08.jpg" %}

As opções padrão já são suficientemente seguras e atendem aos usos mais comuns. A menos que saiba o que está fazendo, não altere essas opções e clique em **Next**.

Na tela seguinte, informe um tamanho para o volume (**Volume Size**):

{% include image.html src="/files/2018/10/veracrypt-09.jpg" %}

Como exemplo, vou criar um volume de 250MB, mas defina o tamanho do volume conforme sua necessidade. Considere o espaço disponível em disco (diferente de um arquivo ZIP, o volume do VeraCrypt não cresce conforme a necessidade, todo o espaço já é reservado de antemão), o tipo de arquivo que você vai encriptar (documentos de texto ocupam menos espaço que fotos e vídeos, por exemplo) e como você vai fazer *backup* desse volume (se o *backup* será feito em [DVD][dvd], por exemplo, o volume deve ser de 4,3GB ou menos).

Quando terminar, clique em **Next**.

Na tela seguinte, crie uma senha para o volume (**Volume Password**):

{% include image.html src="/files/2018/10/veracrypt-10.jpg" %}

Para se certificar de que digitou a senha corretamente, você deve digitá-la no campo de cima (**Password**, senha) e repeti-la no campo de baixo (**Confirm password**, confirme a senha).

A senha é o principal componente da segurança do volume. Escolha uma senha forte. Se precisar de dicas para pensar em uma senha segura, consulte o [guia Security in a Box][securityinabox-passwords].

Quando terminar, clique em **Next**. Se o botão estiver desabilitado, é porque as senhas digitadas nos dois campos não conferem. Se sua senha for fraca, o VeraCrypt apresentará um alerta. Se isso acontecer, considere mudar a senha.

Na tela seguinte, selecione um sistema de arquivos (*filesystem*) para o volume:

{% include image.html src="/files/2018/10/veracrypt-11.jpg" %}

Por dentro, um volume do VeraCrypt é como uma partição de disco, que deve ser formatada com um [sistema de arquivos][filesystems]. Não vou explicar em detalhes sistemas de arquivos (você pode ler mais [aqui][filesystems]), mas apenas pontuar algumas questões.

O sistema de arquivos que vem selecionado por padrão ([FAT][fat]) vai funcionar para a maioria dos usos e é suportado por todos os sistemas operacionais - Linux, Windows e Mac OS X. No entanto, se você pretende armazenar dentro do volume arquivos maiores que 4GB, terá que selecionar outro sistema de arquivos. Nesse caso, o [NTFS][ntfs] é uma opção, e é suportado pelo Windows e pela maioria das [distribuições Linux][linux-distro] - incluindo o [openSUSE][opensuse]. Os sistemas de arquivos [Ext2][ext2], [Ext3][ext3] e [Ext4][ext4] são suportados apenas pelo Linux. O sistema de arquivos [exFAT][exfat] é suportado, a princípio, apenas pelo Windows e pelo Mac OS X.

**Observação:** se você pretende usar o volume no Linux para armazenar arquivos do [Dropbox][dropbox], obrigatoriamente terá que utilizar o sistema de arquivos Ext4 (saiba mais [aqui][dropbox-filesystems]).

Quando terminar, clique em **Next**.

O VeraCrypt já dispõe de quase todas as informações que necessita para criar o volume. Resta apenas criar as chaves de criptografia (*encryption keys*). Mova o cursor do *mouse* aleatoriamente dentro da janela do assistente. Perceba que a barra de progresso avança conforme você move o *mouse*:

{% include image.html src="/files/2018/10/veracrypt-12.jpg" %}

O VeraCrypt usa as posições do cursor como números aleatórios para gerar chaves mais fortes. Portanto, quanto mais você mover o *mouse* nessa tela, melhor.

Mova-o até preencher a barra de progresso. Quando terminar, clique em **Format** (formatar).

O VeraCrypt cria o volume, o que pode demorar um pouco. Ele avisa quando termina:

{% include image.html src="/files/2018/10/veracrypt-13.jpg" %}

Clique em **OK**.

A última tela do assistente, **Volume Created**, basicamente avisa que o volume foi criado:

{% include image.html src="/files/2018/10/veracrypt-14.jpg" %}

Clique em **Exit** (sair) para terminar. Se quiser criar outro volume, você pode clicar em **Next**. Nesse caso, o assistente volta para a primeira tela.

## Montando o volume

**Montar** um volume do VeraCrypt significa torná-lo **disponível** para uso.

É semelhante a montar uma partição no Linux, o que deve ser feito sempre antes do uso. Normalmente, as partições do disco do próprio computador são montadas automaticamente quando o computador é ligado, e dispositivos de armazenamento removíveis - como *pendrives* - são montados automaticamente quando conectados, mas em alguns casos a montagem é um processo manual.

Para montar um volume do VeraCrypt, na tela principal do VeraCrypt, selecione qualquer vaga (*slot*) disponível na lista e clique no botão **Select File** (selecionar arquivo).

Aqui, vou usar a primeira vaga, mas você pode escolher qualquer uma. Inclusive, pode selecionar uma vaga diferente cada vez que montar um volume.

Procure o arquivo de volume, selecione-o e clique em **Abrir**:

{% include image.html src="/files/2018/10/veracrypt-15-pt.jpg" %}

**Cuidado:** nessa tela fica bem visível que o arquivo de volume é um arquivo como outro qualquer. Portanto, ele pode ser excluído acidentalmente, como qualquer outro arquivo. Mantenha seu volume em um local seguro e evite que ele seja excluído junto com todos os arquivos secretos que ele abriga.

De volta à tela principal do VeraCrypt, clique em **Mount** (montar):

{% include image.html src="/files/2018/10/veracrypt-16-pt.jpg" %}

Digite a senha do volume e clique em **OK**:

{% include image.html src="/files/2018/10/veracrypt-17-pt.jpg" %}

Digite a senha do administrador (usuário *root*) e clique em **OK**:

{% include image.html src="/files/2018/10/veracrypt-18-pt.jpg" %}

Se a senha do volume estiver correta, o VeraCrypt montará o volume e informará o ponto de montagem (**Mount Directory**) na tela principal (nesse exemplo, `/mnt/veracrypt1`). Para acessar um volume montado, você pode clicar duas vezes na vaga correspondente na tela principal do VeraCrypt ou navegar para a pasta normalmente, como faria com um *pendrive*:

{% include image.html src="/files/2018/10/veracrypt-19-pt.jpg" %}

## Usando o volume

O volume recém criado está vazio. Experimente criar pastas e arquivos dentro dele.

Um volume do VeraCrypt montado é um disco virtual. Para os aplicativos, ele se comporta como um dispositivo de armazenamento externo. Você pode copiar e mover arquivos e pastas de e para o volume, criar pastas e salvar arquivos diretamente no volume, assim como faria com um *pendrive*. A criptografia e a descriptografia dos dados são feitas nos bastidores pelo VeraCrypt, de forma transparente e automática.

Se o computador for desligado ou reiniciado (de forma intencional ou acidental), o conteúdo do volume permanecerá criptografado e inacessível até que seja montado novamente.

**Cuidado:** enquanto o volume VeraCrypt estiver montado, os arquivos dentro dele podem ser acessados livremente. Para proteger seus arquivos sensíveis, você deve desmontar o volume do VeraCrypt assim que terminar de usá-los.

Vejamos agora como e quando devemos desmontar o volume do VeraCrypt.

## Desmontando o volume

**Desmontar** um volume do VeraCrypt significa torná-lo **indisponível** para uso.

É semelhante a desmontar uma partição no Linux, o que deve ser feito sempre após o uso. Normalmente, as partições do disco do próprio computador são desmontadas automaticamente quando o computador é desligado. Mas na maior parte dos casos a desmontagem é um processo manual. Você sempre deve desmontar partições de dispositivos de armazenamento externos antes de removê-los.

Para desmontar um volume do VeraCrypt, selecione-o na tela principal do VeraCrypt e clique em **Dismount** (desmontar):

{% include image.html src="/files/2018/10/veracrypt-20-pt.jpg" %}

Uma vez desmontado o volume, para acessar novamente os arquivos que estão dentro dele, é necessário montá-lo, o que requer que sua senha seja informada novamente. Dessa forma, a menos que saiba a senha, ninguém pode acessar os arquivos que estão dentro do volume. Com o volume desmontado, os arquivos dentro dele estão seguros contra acesso indevido.

Sempre desmonte o volume do VeraCrypt:

- antes de sair de perto do computador (dependendo da confidencialidade dos arquivos, você vai querer desmontar o volume antes de ir para outra sala - se vai perder o computador de vista - ou antes de sair de casa, por exemplo),
- antes de entrar em uma situação em que há risco de perda ou roubo (antes de levar o *notebook* para a faculdade, por exemplo),
- antes de colocar o computador em suspensão ou hibernação, e
- antes de remover o dispositivo de armazenamento externo (*pendrive*, HD externo ou cartão de memória, por exemplo), caso seu volume esteja em um.

Em resumo, sempre desmonte o volume do VeraCrypt se não estiver usando seus arquivos.

Para acessar os arquivos dentro de um volume, monte-o novamente.

**Cuidado:** o volume do VeraCrypt protege os arquivos dentro dele contra acesso indevido. Mas, como qualquer sistema de arquivos, ele está sujeito a corrupção. Portanto, certifique-se de fazer *backup* dos seus arquivos regularmente.

## Referências

- [VeraCrypt para Linux - Armazenamento seguro de arquivos - Security in a Box][securityinabox-veracrypt]
- [Como proteger os arquivos sensíveis em seu computador - Security in a Box][securityinabox-secure-file-storage]
- [VeraCrypt Documentation][veracrypt-documentation]
- [3 encryption tools for Linux that will keep your data safe - PCWorld][pcworld]
- [How To Install & Use VeraCrypt In Linux An Alternative To TrueCrypt - LinuxAndUbuntu][linuxandubuntu]

[nerd]:                                 https://pt.wikipedia.org/wiki/Nerd
[cryptography]:                         https://noticias.r7.com/tecnologia-e-ciencia/tudo-que-voce-sempre-quis-saber-sobre-criptografia-e-nao-perguntou-24012018
[linux]:                                http://www.vivaolinux.com.br/linux/
[veracrypt]:                            https://www.veracrypt.fr/
[free-software]:                        https://www.gnu.org/philosophy/free-sw.pt-br.html
[idrix]:                                https://www.idrix.fr
[windows]:                              https://www.microsoft.com/pt-br/windows/
[macosx]:                               http://www.apple.com/br/macosx/
[zip]:                                  https://pt.wikipedia.org/wiki/ZIP
[truecrypt]:                            http://truecrypt.sourceforge.net/
[fde]:                                  https://pt.wikipedia.org/wiki/Criptografia_de_disco
[bitlocker]:                            https://docs.microsoft.com/pt-br/windows/security/information-protection/bitlocker/bitlocker-overview
[filevault]:                            https://en.wikipedia.org/wiki/FileVault
[writer]:                               https://pt-br.libreoffice.org/descubra/writer/
[word]:                                 https://products.office.com/pt-br/word
[veracrypt-documentation]:              https://www.veracrypt.fr/en/Documentation.html
[securityinabox-veracrypt]:             https://securityinabox.org/pt/guide/veracrypt/linux/
[veracrypt-release-notes]:              https://www.veracrypt.fr/en/Release%20Notes.html
[opensuse-leap]:                        {% post_url pt/2018-05-25-baseado-no-codigo-do-enterprise-testado-milhoes-de-vezes-opensuse-leap-15-lancado %}
[veracrypt-downloads]:                  https://www.veracrypt.fr/en/Downloads.html
[how-to-verify-iso]:                    {%post_url pt/2018-10-06-verificacao-de-integridade-e-autenticidade-com-sha-256-e-gpg %}
[dvd]:                                  https://pt.wikipedia.org/wiki/DVD
[securityinabox-passwords]:             https://securityinabox.org/pt/guide/passwords/
[filesystems]:                          https://www.techtudo.com.br/dicas-e-tutoriais/noticia/2016/02/entenda-o-que-e-sistema-de-arquivos-e-sua-utilidade-no-pc-e-no-celular.html
[fat]:                                  https://pt.wikipedia.org/wiki/File_Allocation_Table
[ntfs]:                                 https://pt.wikipedia.org/wiki/NTFS
[linux-distro]:                         https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_Linux
[opensuse]:                             https://www.opensuse.org/
[ext2]:                                 https://pt.wikipedia.org/wiki/Ext2
[ext3]:                                 https://pt.wikipedia.org/wiki/Ext3
[ext4]:                                 https://pt.wikipedia.org/wiki/Ext4
[exfat]:                                https://pt.wikipedia.org/wiki/ExFAT
[dropbox]:                              https://www.dropbox.com/pt_BR/
[dropbox-filesystems]:                  https://www.diolinux.com.br/2018/08/dropbox-nao-tera-mais-suporte-para-ext4-criptografado.html
[securityinabox-secure-file-storage]:   https://securityinabox.org/pt/guide/secure-file-storage/
[pcworld]:                              https://www.pcworld.com/article/3140023/linux/3-encryption-tools-for-linux-that-will-keep-your-data-safe.html
[linuxandubuntu]:                       http://www.linuxandubuntu.com/home/encrypt-data-in-linux-with-veracrypt-an-alternative-to-truecrypt
