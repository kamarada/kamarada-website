---
date: 2018-10-06 11:20:00 GMT-3
image: '/files/2018/10/how-to-verify-iso.png'
layout: post
published: true
nickname: 'how-to-verify-iso'
title: 'Verificação de integridade e autenticidade com SHA-256 e GPG'
excerpt: 'Por vezes pode ser importante verificar um arquivo obtido da Internet. Duas verificações comuns que reduzem bastante as chances de usar um arquivo corrompido ou adulterado são a soma de verificação e a assinatura digital. Nesse post, você verá como fazê-las com o sha256sum e o gpg, dois utilitários de linha de comando que por padrão já vem instalados na maioria das distribuições Linux. Se você nunca utilizou o terminal do Linux, não se assuste: verá que não é tão difícil como dizem por aí.'
---

Por vezes pode ser importante verificar um arquivo obtido da Internet, por exemplo, a [imagem ISO][iso] de uma [distribuição Linux][linux-distro] - ela contém o sistema operacional que você vai utilizar ou instalar em seu computador, já pensou se o arquivo se corrompeu durante o *download* ou foi adulterado por um [ataque de homem no meio][man-in-the-middle]?

Duas verificações comuns que reduzem bastante as chances de usar um arquivo corrompido ou adulterado são a [soma de verificação][checksum] e a [assinatura digital][gph]:

- a **soma de verificação** (*checksum*) é uma soma feita antes do envio por quem cria o arquivo e verificada depois por quem baixa o arquivo, há alguns algoritmos para fazer essa soma, mas a ideia geral é somar os *bytes* do arquivo - ao verificar a soma de um arquivo, se houve modificação do arquivo ou da soma em si, a verificação falha, indicando que não é seguro usar o arquivo; e
- a **assinatura digital** certifica um arquivo, tal qual uma assinatura à mão, mas por utilizar mecanismos de criptografia tem a vantagem de ser resistente a fraudes - ao verificar a assinatura de um arquivo, se houve modificação do arquivo ou da assinatura em si, ou se a assinatura foi feita com a chave de outra pessoa, a verificação falha, indicando que não é seguro usar o arquivo.

Elas verificam, respectivamente, **integridade** e **autenticidade**, duas propriedades básicas da [segurança da informação][information-security].

Comumente as distribuições Linux disponibilizam somas de verificação [SHA-256] e assinaturas digitais [GPG] para verificar suas imagens ISO.

Nesse *post*, você verá como fazer essas verificações com o [**sha256sum**][sha256sum-man] e o [**gpg**][gpg-man] (de [**GNU Privacy Guard**][gpg], também conhecido como **GnuPG** ou simplesmente **GPG**), dois utilitários de linha de comando que por padrão já vem instalados na maioria das distribuições Linux.

{% include image.html src="/files/2018/10/how-to-verify-iso.png" %}

Embora usemos aqui o exemplo da imagem ISO, qualquer arquivo pode ser verificado, contanto que a soma de verificação e a assinatura digital estejam disponíveis. É o caso, por exemplo, dos arquivos disponibilizados para *download* no *site* do programa [VeraCrypt].

**Dica:** se você ainda não usa [Linux] e está baixando uma imagem ISO de uma distribuição Linux no [Windows], leia [essa página][gpg4win] em vez desta.

Para referência futura, aqui utilizo a distribuição Linux [openSUSE Leap 15.0][opensuse-leap] e as versões dos utilitários **sha256sum** e **gpg** instalados por padrão nessa versão da distribuição.

Se você nunca utilizou a interface textual do Linux (também conhecida como **linha de comando** ou [**terminal**][terminal]), não se assuste: verá que não é tão difícil como dizem por aí.

## Visão geral

Como a verificação de uma imagem ISO não é um processo tão simples, primeiro tenhamos uma visão geral do processo. A "receita de bolo" se resume a:

1. Baixar a imagem ISO do *site* da distribuição (como de costume, nenhuma novidade);
2. Baixar a soma de verificação e a assinatura digital do *site* da distribuição, a depender da distribuição elas podem ser dois arquivos ou pode ser apenas um arquivo de texto contendo ambas (o openSUSE é o segundo caso);
3. Importar a chave pública da distribuição, seja do *site* da distribuição, seja de um servidor de chaves públicas confiável (aqui, optaremos por importar de um servidor de chaves, mas a chave do openSUSE também está disponível na [página de *downloads*][download-leap]);
4. Fazer a soma de verificação da imagem ISO baixada e conferir com a soma de verificação esperada; e
5. Verificar a assinatura digital, que pode ter sido feita em relação à imagem ISO, ou em relação à soma de verificação, o que estende a proteção à soma de verificação (o openSUSE é o segundo caso).

O processo pode variar de acordo com a distribuição, mas geralmente segue essa linha. Por exemplo, há vários algoritmos de somas de verificação. O algoritmo [MD5] era mais popular, mas tem sido substituído pelo [SHA-256], que em tese é menos vulnerável. Também há distribuições que não fazem assinatura digital, nesses casos não é possível verificar a autenticidade da imagem ISO.

## Usando o Terminal

O [**Terminal**][gnome-terminal] é um aplicativo que recebe comandos na forma de texto. É diferente da maioria dos aplicativos, que você comanda com o *mouse* clicando em botões e menus.

Para iniciá-lo, abra o **panorama de Atividades**, clicando em **Atividades**, no canto superior esquerdo da tela, ou pressionando a tecla **Super** (em alguns teclados, ela possui a bandeira do Windows). Então, digite `terminal` e clique no ícone do aplicativo:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-01-pt.jpg" %}

O Terminal é iniciado. Você verá uma janela praticamente vazia com um cursor piscando após um caractere que pode ser `>` (maior que) ou `$` (cifrão):

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-02-pt.png" %}

Esse caractere indica que o comando será executado por um usuário comum.

Para executar um comando, você deve digitá-lo e teclar **Enter**.

Nas seções seguintes, executaremos alguns comandos.

Se o Terminal está sendo usado pelo administrador (também conhecido como **superusuário** ou usuário *root*), ele mostra o caractere `#` (cerquilha). Exemplo de [outro *post*][how-to-upgrade-to-42.3]:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-07-pt.jpg" %}

Se você utiliza Windows, talvez ache o Terminal parecido com o [Prompt de Comando][cmd].

## 1 e 2) Baixando a imagem ISO do openSUSE

Baixe a imagem de instalação via rede do openSUSE Leap, assim como o arquivo da soma de verificação, em:

[https://software.opensuse.org/distributions/leap][download-leap]

{% include image.html src="/files/2018/10/how-to-verify-iso-01-pt.png" %}

Escolhi a imagem de instalação via rede por ser o menor arquivo, apenas para exemplo.

Quando acabar, você deve ter dois arquivos na pasta `Downloads`:

- a imagem ISO (`openSUSE-Leap-15.0-NET-x86_64.iso.sha256`) e
- a soma de verificação (`openSUSE-Leap-15.0-NET-x86_64.iso.sha256`).

## 3) Importando a chave pública do openSUSE

Mais abaixo na página **Baixe o openSUSE**, na seção **Verifique seu download antes de usar**, veja o grande número em [hexadecimal][hexadecimal]:

{% include image.html src="/files/2018/10/how-to-verify-iso-02-pt.png" %}

Esse número é a **impressão digital** (*fingerprint*) da chave pública do Projeto openSUSE.

Para importá-la, execute o comando a seguir, com os 8 últimos dígitos da impressão:

```
$ gpg --recv-keys 3DBDC284
```

**Dica:** você pode copiar o texto da página e colar no Terminal com **Ctrl + Shift + V**. Se você precisar copiar um texto do Terminal, o atalho é parecido: **Ctrl + Shift + C**.

No terminal aparece o seguinte texto, que é a **saída** (o retorno) do comando:

```
gpg: directory '/home/kamarada/.gnupg' created
gpg: keybox '/home/kamarada/.gnupg/pubring.kbx' created
gpg: key B88B2FD43DBDC284: 20 signatures not checked due to missing keys
gpg: /home/kamarada/.gnupg/trustdb.gpg: base de dados de confiança criada
gpg: key B88B2FD43DBDC284: public key "openSUSE Project Signing Key <opensuse@opensuse.org>" imported
gpg: no ultimately trusted keys found
gpg: Número total processado: 1
gpg:               importados: 1
```

Pena que a tradução está incompleta... Mas resumidamente o **gpg** informa que criou alguns arquivos de configuração, devido à primeira execução, e importou a chave do openSUSE.

Execute o comando a seguir para conferir a impressão digital da chave importada:

```
$ gpg --fingerprint 3DBDC284
```

Ele retorna:

```
pub   rsa2048 2008-11-07 [SC] [expires: 2024-05-02]
      22C0 7BA5 3417 8CD0 2EFE  22AA B88B 2FD4 3DBD C284
uid           [ unknown] openSUSE Project Signing Key <opensuse@opensuse.org>
```

Compare a impressão digital com a presente no site do openSUSE:

{% include image.html src="/files/2018/10/how-to-verify-iso-03-pt.jpg" %}

Se os números conferem, você importou com sucesso a chave pública do openSUSE.

## 4) Verificando a integridade da imagem ISO

No terminal, passe para a pasta `Downloads` com o comando:

```
$ cd Downloads
```

Em seguida, verifique sua imagem ISO com o **sha256sum**:

```
$ sha256sum -c openSUSE-Leap-15.0-NET-x86_64.iso.sha256
```

(observe que é passado no comando o nome do arquivo da soma de verificação, que termina com `.iso.sha256`, não da imagem ISO, que termina com `.iso`)

O **sha256sum** demora um tempo calculando a soma de verificação da imagem ISO e depois confere essa soma com a presente no arquivo. A saída do comando deve ser:

```
openSUSE-Leap-15.0-NET-x86_64.iso: SUCESSO
sha256sum: AVISO: 14 linhas estão formatadas inapropriadamente
```

{% include image.html src="/files/2018/10/how-to-verify-iso-04-pt.jpg" %}

Nesse exemplo, a primeira linha da saída informa que as somas foram conferidas com sucesso. Portanto, do ponto de vista da integridade, é seguro usar a imagem ISO baixada. Você pode proceder à verificação de autentiticade.

Se a saída do comando **sha256sum** for diferente para você, informando que a verificação falhou, não é seguro usar essa imagem ISO: durante o *download* ela se corrompeu e você deve baixá-la novamente.

A segunda linha avisa que algumas das linhas do arquivo da soma de verificação estão formatadas impropriamente. O comando **sha256sum** dá esse aviso porque ele não entende as linhas que se referem à assinatura GPG, que o openSUSE coloca no mesmo arquivo.

Se tiver curiosidade, você pode ver essas linhas abrindo o arquivo da soma de verificação.

Como é um arquivo de texto simples, podemos abri-lo com o próprio terminal:

```
$ cat openSUSE-Leap-15.0-NET-x86_64.iso.sha256
```

O comando [**cat**][cat-man] exibe o conteúdo de um arquivo de texto. Veja:

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

1a322de7c215da96fdbad4c247d218eb79073c5620a332a759c0291b44746fbc  openSUSE-Leap-15.0-NET-x86_64.iso
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.0.7 (GNU/Linux)

iQEVAwUBWv2l17iLL9Q9vcKEAQgYyAf8DFVIKlbzmTteoIXCyxTO78QbJl764CvS
Vf+deIEIfyHwvHIFR9diQm3gWeSuxD4dE+rhmRrDZBXsOIf1Xr1cXCAOWfr6zn5E
8CurCwfYF4rKYu6wGqGJgf5WMh9E3swpJTfH4izvkRrGEDK13NRQcnXdhJYn5cJa
9tC8n9sNdmzGSwaK44WCxhoN5+8EgJoJQTh1m3n7+O5xD6un9MD7Xh8dlfBxBMtV
N0zZxCBEBbg+fL+/I7793R8RbZZwxihES4xmn2BLF5GeC28xBaWblbWmVBbo8un1
aJu8EqdG3Kn43bX1FwAecNgRov7PSFGua/38ANdLWMsBpV6jNpMoyA==
=YLLc
-----END PGP SIGNATURE-----
```

Ao comando **sha256sum** interessa apenas essa linha:

```
1a322de7c215da96fdbad4c247d218eb79073c5620a332a759c0291b44746fbc  openSUSE-Leap-15.0-NET-x86_64.iso
```

Todas as outras ele não consegue entender, por isso ele dá aquele aviso.

## 5) Verificando a autentiticade da imagem ISO

Agora sim vamos verificar a assinatura GPG com o comando apropriado:

```
$ gpg --verify openSUSE-Leap-15.0-NET-x86_64.iso.sha256
```

(aqui mais uma vez usamos o arquivo da soma de verificação, cuja extensão termina com `.iso.sha256`)

A saída informa que a assinatura confere (*good signature*, boa assinatura):

```
gpg: Signature made qui 17 mai 2018 12:55:03 -03
gpg:                using RSA key B88B2FD43DBDC284
gpg: Good signature from "openSUSE Project Signing Key <opensuse@opensuse.org>" [unknown]
gpg: AVISO: Esta chave não está certificada com uma assinatura confiável!
gpg:          Não há indicação de que a assinatura pertence ao dono.
Impressão da chave primária: 22C0 7BA5 3417 8CD0 2EFE  22AA B88B 2FD4 3DBD C284
```

{% include image.html src="/files/2018/10/how-to-verify-iso-05-pt.jpg" %}

O aviso **Esta chave não está certificada com uma assinatura confiável** não indica um problema, mas apenas o fato de que você não assinou a chave você mesmo, o que é opcional e explicarei melhor a seguir.

Se você não é paranoico com segurança, pode ficar satisfeito com a mensagem acima e usar a imagem ISO tranquilamente.

Veja como a saída é diferente se a assinatura não confere:

```
gpg: CRC error; 60B2DC - 60B2DA
gpg: no signature found
gpg: a assinatura não pode ser verificada.
Não se esqueça que o ficheiro com a assinatura (.sig ou .asc)
deve ser o primeiro a ser dado na linha de comando.
```

Se você recebeu essa saída, não é seguro usar essa imagem ISO: você deve verificar sua procedência e baixá-la novamente.

## 6) Opcionalidades

Até aqui, você fez todos os passos que elencamos na visão geral, no início.

Você pode ir um passo além assinando a chave pública do openSUSE com uma chave privada sua, sinalizando para o **gpg** que você confia que a chave pública do Projeto openSUSE pertence de fato ao Projeto openSUSE.

Pode parecer burocrático, mas da forma como o GPG foi projetado, idealmente as pessoas trocariam chaves apenas pessoalmente, para formar uma rede de confiança. Na prática, não é assim que funciona. Obter a chave pública do *site* da distribuição é o máximo que você pode fazer enquanto usuário final que deseja verificar uma imagem ISO. De qualquer forma, já é mais seguro do que baixar a imagem ISO e confiar nela sem fazer nenhuma verificação.

Para assinar a chave pública do openSUSE, você precisa antes criar um par de chaves seu.

## 6.1) Criando um par de chaves pessoal

Para iniciar a criação de um par de chaves, execute o seguinte comando no terminal:

```
$ gpg --gen-key
```

O **gpg** solicita seu nome completo:

```
gpg (GnuPG) 2.2.5; Copyright (C) 2018 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Note: Use "gpg2 --full-generate-key" for a full featured key generation dialog.

GnuPG needs to construct a user ID to identify your key.

Nome completo:
```

Digite seu nome completo e tecle **Enter**.

Depois, ele pede seu *e-mail*, digite-o e tecle **Enter**.

O **gpg** oferece a oportunidade de mudar alguma informação. Verifique seus dados:

```
Nome completo: Linux Kamarada
Endereço de correio eletrónico: linux@kamarada.com.br
Você selecionou este identificador de utilizador:
    "Linux Kamarada <linux@kamarada.com.br>"

Change (N)ame, (E)mail, or (O)kay/(Q)uit?
```

Se está tudo certo, digite `O` (de *OK*) e tecle **Enter**.

O **gpg** solicita que seja criada uma senha (*passphrase*) para a nova chave. Por algum motivo aqui ele apresenta uma janela fora do terminal para a digitação da senha:

{% include image.html src="/files/2018/10/how-to-verify-iso-06-pt.jpg" %}

Digite a senha no campo de cima e depois digite mais uma vez no campo de baixo, para se certificar que não digitou errado. Quando terminar, clique em **OK** (ou tecle **Enter**).

Feito isso, sua chave pessoal foi criada:

```
Change (N)ame, (E)mail, or (O)kay/(Q)uit? o
Precisamos gerar muitos bytes aleatórios. É uma boa ideia realizar outra
actividade (escrever no teclado, mover o rato, usar os discos) durante a
geração dos números primos; isso dá ao gerador de números aleatórios
uma hipótese maior de ganhar entropia suficiente.
gpg: key 622F81C351878B72 marked as ultimately trusted
gpg: directory '/home/kamarada/.gnupg/openpgp-revocs.d' created
gpg: revocation certificate stored as '/home/kamarada/.gnupg/openpgp-revocs.d/52213656B323285921EF8144622F81C351878B72.rev'
chaves pública e privada criadas e assinadas.

pub   rsa2048 2018-10-06 [SC] [expires: 2020-10-05]
      52213656B323285921EF8144622F81C351878B72
uid                      Linux Kamarada <linux@kamarada.com.br>
sub   rsa2048 2018-10-06 [E] [expires: 2020-10-05]
```

## 6.2) Assinando a chave pública do openSUSE

Para assinar a chave pública do openSUSE, execute o comando:

```
$ gpg --edit-key 3DBDC284
```

O **gpg** inicia uma espécie de terminal próprio (`gpg>`) e mostra informações sobre a chave:

```
gpg (GnuPG) 2.2.5; Copyright (C) 2018 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.


pub  rsa2048/B88B2FD43DBDC284
     created: 2008-11-07  expires: 2024-05-02  usage: SC
     trust: unknown       validity: unknown
[ unknown] (1). openSUSE Project Signing Key <opensuse@opensuse.org>

gpg>
```

Confira mais uma vez a impressão digital com aquela que está no *site* do openSUSE.

Para fazer isso, digite **fpr** (de *fingerprint*, impressão digital) e tecle **Enter**:

```
gpg> fpr
pub   rsa2048/B88B2FD43DBDC284 2008-11-07 openSUSE Project Signing Key <opensuse@opensuse.org>
Impressão da chave primária: 22C0 7BA5 3417 8CD0 2EFE  22AA B88B 2FD4 3DBD C284

gpg>
```

Estando correta, digite **trust** (confiar) e tecle **Enter**:

```
gpg> trust
pub  rsa2048/B88B2FD43DBDC284
     created: 2008-11-07  expires: 2024-05-02  usage: SC  
     trust: unknown       validity: unknown
[ unknown] (1). openSUSE Project Signing Key <opensuse@opensuse.org>

Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Decisão?
```

Ele pergunta o quanto você confia nessa chave, as opções são:

1. Eu não sei ou não direi
2. Eu não confio
3. Eu confio em parte
4. Eu confio completamente
5. Eu confio em última análise

(não soube traduzir essa última, pedi ajuda ao [Google][google-translate])

Digite **5** (parece haver uma escala gradativa de confiança) e tecle **Enter**:

```
Decisão? 5
Do you really want to set this key to ultimate trust? (y/N)
```

Ele pergunta se você realmente deseja confiar nessa chave, tecle **y** (de *yes*, sim) e depois **Enter**:

```
Do you really want to set this key to ultimate trust? (y/N) y

pub  rsa2048/B88B2FD43DBDC284
     created: 2008-11-07  expires: 2024-05-02  usage: SC  
     trust: ultimate      validity: unknown
[ unknown] (1). openSUSE Project Signing Key <opensuse@opensuse.org>
Não se esqueça que a validade de chave mostrada não é necessáriamente a
correcta a não ser que reinicie o programa.

gpg>
```

Agora digite **sign** (assinar) e tecle **Enter**:

```
gpg> sign

pub  rsa2048/B88B2FD43DBDC284
     created: 2008-11-07  expires: 2024-05-02  usage: SC  
     trust: ultimate      validity: unknown
Impressão da chave primária: 22C0 7BA5 3417 8CD0 2EFE  22AA B88B 2FD4 3DBD C284

     openSUSE Project Signing Key <opensuse@opensuse.org>

Esta chave vai expirar em 2024-05-02.
Are you sure that you want to sign this key with your
key "Linux Kamarada <linux@kamarada.com.br>" (622F81C351878B72)

Really sign? (y/N)
```

Ele pergunta se você realmente deseja assinar essa chave, tecle **y** e depois **Enter**.

Digite a senha da sua chave e clique em **OK** (ou tecle **Enter**):

{% include image.html src="/files/2018/10/how-to-verify-iso-07-pt.jpg" %}

Por fim, digite **quit** (sair) e tecle **Enter**:

```
gpg> quit
Save changes? (y/N)
```

Ele pergunta se você deseja salvar as alterações, tecle **y** e depois **Enter**.

Feito isso, a chave pública do openSUSE foi assinada e voltamos para o terminal normal.

Para conferir que a chave foi de fato assinada, execute o comando:

```
$ gpg --list-sig 3DBDC284
```

Ele lista todas as assinaturas da chave. Observe que a sua aparece na lista, na última linha:

{% include image.html src="/files/2018/10/how-to-verify-iso-08-pt.jpg" %}

```
gpg: a verificar a base de dados de confiança
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   2  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 2u
gpg: proxima verificação da base de dados de confiança a 2020-10-05
pub   rsa2048 2008-11-07 [SC] [expires: 2024-05-02]
      22C07BA534178CD02EFE22AAB88B2FD43DBDC284
uid           [ultimate] openSUSE Project Signing Key <opensuse@opensuse.org>
sig          EA7BF3970175623E 2012-08-23  [User ID not found]
sig          8BD82E6F30B94B5C 2013-05-04  [User ID not found]
sig          6347B5055AB3D350 2017-01-30  [User ID not found]
sig          1C2B0DA2920E6F97 2013-08-15  [User ID not found]
sig          29ED86E6F9CBBD4C 2018-02-10  [User ID not found]
sig          77B2E6003D25D3D9 2012-08-23  [User ID not found]
sig          080B3B0AD1E3EBDD 2014-02-11  [User ID not found]
sig          D9C63ADCE11CE0A5 2016-07-18  [User ID not found]
sig          4525B0A6741B9BBC 2018-04-02  [User ID not found]
sig 3        B88B2FD43DBDC284 2010-05-05  openSUSE Project Signing Key <opensuse@opensuse.org>
sig 3        B88B2FD43DBDC284 2014-05-05  openSUSE Project Signing Key <opensuse@opensuse.org>
sig 3        B88B2FD43DBDC284 2008-11-07  openSUSE Project Signing Key <opensuse@opensuse.org>
sig          37F0BE6297A01F40 2015-09-03  [User ID not found]
sig          E7820D7B72511999 2016-02-29  [User ID not found]
sig          A485A0ED51B8B7C4 2015-05-19  [User ID not found]
sig          37B31673C6FD5677 2016-04-10  [User ID not found]
sig          CA3A5E56C08DE9DB 2016-11-28  [User ID not found]
sig          449AC1719D98D793 2017-12-01  [User ID not found]
sig          2209D6902F969C95 2016-02-29  [User ID not found]
sig          E6596246D46BD98A 2016-12-03  [User ID not found]
sig          F8E8F9BBBD86B2BD 2018-09-18  [User ID not found]
sig          19D77FD04BCDA246 2018-10-03  [User ID not found]
sig          58FC58B1317CD502 2017-09-28  [User ID not found]
sig          622F81C351878B72 2018-10-06  Linux Kamarada <linux@kamarada.com.br>
```

## 6.3) Verificando novamente a autentiticade da imagem ISO

Repita a verificação de autentiticade da imagem ISO (passo 5):

```
$ gpg --verify openSUSE-Leap-15.0-NET-x86_64.iso.sha256
```

Veja que agora a mensagem apresentada pelo **gpg** não mostra o aviso nem a impressão digital ao final, apenas informa que a assinatura confere (*good signature*, boa assinatura):

```
gpg: Signature made qui 17 mai 2018 12:55:03 -03
gpg:                using RSA key B88B2FD43DBDC284
gpg: Good signature from "openSUSE Project Signing Key <opensuse@opensuse.org>" [ultimate]
```

{% include image.html src="/files/2018/10/how-to-verify-iso-09-pt.jpg" %}

## Finalizando

Agora que você já conhece o **sha256sum** e o **gpg**, pode usá-los para verificar imagens ISO do openSUSE, assim como imagens ISO de outras distribuições, ou quaisquer arquivos que precise verificar. Como expliquei na visão geral, o processo é semelhante.

Possivelmente, boa parte do que fizemos aqui você não precisará fazer de novo:

- você só precisa importar de novo a chave pública do openSUSE (seção 3) se no futuro o openSUSE criar uma nova chave;
- você só precisa assinar de novo a chave pública do openSUSE (seção 6.2) se no futuro importar uma nova chave; e
- se você só utiliza sua chave GPG pessoal para verificar arquivos baixados, não precisará criar um novo par de chaves (seção 6.1).

Caso baixe outra imagem ISO do openSUSE (por exemplo, quando houver uma nova versão da distribuição), você pula o passo 3 e repete os passos 1, 2, 4 e 5.

Caso baixe uma imagem ISO de outra distribuição, aí sim você deve repetir todo o processo, opcionalmente assinando a chave pública da distribuição após importá-la (seção 6.2).

Espero que tenha ajudado. Deixo as referências para o caso de você querer ler mais.

## Referências

- [How to Verify a Linux ISO's Checksum and Confirm It Hasn't Been Tampered With][howtogeek]
- [How to Verify an Electrum Download on Windows - Bitzuma][bitzuma]
- [How to verify the authenticity and integrity of a downloaded file on Linux - Xmodulo][xmodulo]
- [SDB:Ajuda de download - openSUSE][opensuse-wiki]
- [The GNU Privacy Handbook][gph]
- [GnuPrivacyGuardHowto][ubuntu-wiki]
- [digital signature - Verify a key was signed by another key - Information Security Stack Exchange][security]

[iso]:                      https://pt.wikipedia.org/wiki/Imagem_ISO
[linux-distro]:             https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_Linux
[man-in-the-middle]:        https://pt.wikipedia.org/wiki/Ataque_man-in-the-middle
[checksum]:                 https://pt.wikipedia.org/wiki/Soma_de_verifica%C3%A7%C3%A3o
[gph]:                      https://www.gnupg.org/gph/en/manual.html
[information-security]:     https://pt.wikipedia.org/wiki/Seguran%C3%A7a_da_informa%C3%A7%C3%A3o
[sha-256]:                  https://pt.wikipedia.org/wiki/SHA-2
[gpg]:                      https://gnupg.org/
[sha256sum-man]:            https://linux.die.net/man/1/sha256sum
[gpg-man]:                  https://linux.die.net/man/1/gpg
[veracrypt]:                {% post_url pt/2018-10-15-criptografia-de-arquivos-com-o-veracrypt %}
[linux]:                    http://www.vivaolinux.com.br/linux/
[windows]:                  https://www.microsoft.com/pt-br/windows/
[gpg4win]:                  https://vinyanalista.github.io/blog/2018/10/05/verificacao-de-integridade-e-autenticidade-com-o-gpg4win/
[opensuse-leap]:            {% post_url pt/2018-05-25-baseado-no-codigo-do-enterprise-testado-milhoes-de-vezes-opensuse-leap-15-lancado %}
[terminal]:                 http://www.hardware.com.br/livros/linux/usando-terminal.html
[download-leap]:            https://software.opensuse.org/distributions/leap
[md5]:                      https://pt.wikipedia.org/wiki/MD5
[gnome-terminal]:           https://help.gnome.org/users/gnome-terminal/stable/index.html.pt_BR
[how-to-upgrade-to-42.3]:   {% post_url pt/2017-08-01-como-atualizar-do-opensuse-leap-422-para-o-423 %}
[cmd]:                      https://pt.wikipedia.org/wiki/Prompt_de_comando
[hexadecimal]:              https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_hexadecimal
[cat-man]:                  https://linux.die.net/man/1/cat
[kleopatra]:                https://www.openpgp.org/software/kleopatra/
[notepad]:                  https://notepad-plus-plus.org/
[google-translate]:         https://translate.google.com.br/
[howtogeek]:                https://www.howtogeek.com/246332/how-to-verify-a-downloaded-linux-iso-file-wasnt-tampered-with/
[bitzuma]:                  https://bitzuma.com/posts/how-to-verify-an-electrum-download-on-windows/
[xmodulo]:                  http://xmodulo.com/verify-authenticity-integrity-downloaded-file.html
[opensuse-wiki]:            https://pt.opensuse.org/SDB:Ajuda_de_download
[ubuntu-wiki]:              https://help.ubuntu.com/community/GnuPrivacyGuardHowto
[security]:                 https://security.stackexchange.com/a/120926
