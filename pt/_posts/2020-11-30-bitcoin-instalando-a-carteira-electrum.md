---
date: '2020-11-30 23:20:00 GMT-3'
image: '/files/2020/11/electrum-2020-pt.jpg'
layout: post
published: true
nickname: 'electrum-2020'
title: 'Bitcoin: instalando a carteira Electrum'
---

{% include image.html src="/files/2020/11/electrum-2020-pt.jpg" %}

A carteira [Electrum] é a recomendada pelo _site_ oficial do Bitcoin ([bitcoin.org][bitcoin]) para quem usa [Linux] e está começando a mexer com _bitcoins_, e por isso procura uma carteira fácil de usar, mas também para quem deseja que alguns recursos mais avançados já estejam disponíveis, como suporte à [Lightning Network][lightning] e integração com carteiras de _hardware_. A Electrum permite recuperar a carteira facilmente a partir de uma frase secreta (semente ou _seed_).

Eu até já falei sobre a carteira Electrum em outro texto sobre [Bitcoin para iniciantes][bitcoin-electrum], mas isso foi há quase 2 anos. O modo de instalar a carteira Electrum mudou desde então.

No momento, a versão mais atual da carteira Electrum é a [4.0.5], lançada em [18/11/2020][4.0.5].

Hoje, é possível instalar a Electrum de algumas maneiras, desde a mais rápida — e segura, mas não tão segura — para os mais tranquilos e/ou apressados, até a mais trabalhosa mas mais segura para os mais desconfiados. A seguir, vou mostrar essas formas de instalação.

Veja as opções, escolha a sua preferida e mão na massa! (não precisa fazer todas, só uma)

Aqui eu uso a distribuição [Linux Kamarada 15.2][kamarada-15.2], que é baseada no [openSUSE Leap 15.2][leap-15.2].

## 1) Instalação com 1 clique no openSUSE

{% include image.html src="/files/2020/11/electrum-softwareoo.jpg" %}

A carteira Electrum não está disponível nos [repositórios oficiais do openSUSE][opensuse-repos], mas se você procurá-la em [software.opensuse.org][softwareoo], verá que está disponível no repositório semi-oficial [network:cryptocurrencies][electrum-network]. Se você é usuário do [openSUSE] (ou do Linux Kamarada), obter a carteira Electrum desse repositório é a forma mais fácil de instalá-la.

Usuários do openSUSE Tumbleweed vão obter desse repositório a versão 4.0.5 da Electrum, enquanto usuários do openSUSE Leap 15.2 (e do Linux Kamarada 15.2) vão obter a versão 4.0.2. Isso acontece porque a versão mais recente da Electrum depende de uma biblioteca do [Python] que ainda não está disponível no openSUSE Leap 15.2, que é a [python3-aiorpcX]. No momento, essa biblioteca está disponível apenas para o openSUSE Tumbleweed.

Você pode instalar o pacote da carteira Electrum no openSUSE de duas formas: pela interface gráfica, usando a instalação com 1 clique (*1 Click Install*), ou pelo terminal, usando o gerenciador de pacotes **zypper**. Escolha a que prefere.

Para instalar usando a instalação com 1 clique, clique no botão abaixo:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/electrum.ymp'><i class='fas fa-bolt'></i> Instalação com 1 clique</a></p>

Para instalar usando o terminal, primeiro adicione o repositório necessário:

- para o openSUSE Leap 15.2 ou o Linux Kamarada 15.2:

```
# zypper addrepo -f https://download.opensuse.org/repositories/network:/cryptocurrencies/openSUSE_Leap_15.2/ criptomoedas
```

- para o openSUSE Tumbleweed:

```
# zypper addrepo -f https://download.opensuse.org/repositories/network:/cryptocurrencies/openSUSE_Tumbleweed/ criptomoedas
```

Depois, instale o pacote propriamente dito:

```
# zypper in electrum
```

O código-fonte desse pacote pode ser encontrado no [openSUSE Build Service][obs]. Eu tenho familiaridade com o empacotamento [RPM] para openSUSE usando o OBS — até porque uso essa mesma infraestrutura para empacotar para o Linux Kamarada — e por isso inspecionei esses arquivos, principalmente o `electrum.spec`. Os arquivos `Electrum-4.0.5.tar.gz` e `Electrum-4.0.5.tar.gz.asc` coincidem com os disponíveis no [_site_ oficial da carteira Electrum][electrum]. Acredito ser seguro instalar a Electrum a partir desse repositório do openSUSE.

## 2) Instalação usando Flatpak

{% include image.html src="/files/2020/11/electrum-flatpak.jpg" %}

O [Flatpak] é um gerenciador de pacotes independente de distribuição. Até pouco tempo atrás, diferentes distribuições Linux usavam diferentes formatos de pacotes, geralmente incompatíveis entre si. Por exemplo, [Debian] e [Ubuntu] usam pacotes [DEB], enquanto [RedHat], [Fedora] e openSUSE usam pacotes RPM. O Flatpak trouxe uma alternativa mais simples para instalar programas em diferentes distribuições: contanto que o Flatpak esteja instalado no sistema, o mesmo pacote Flatpak pode ser instalado em qualquer distribuição.

Existe um [pacote Flatpak da carteira Electrum][electrum-flatpak]. No momento, ele traz a versão 4.0.4 da Electrum. É uma alternativa que usuários do openSUSE Leap e do Linux Kamarada tem para usar uma versão mais recente da carteira sem maiores dificuldades.

Para instalar o Flatpak no openSUSE, caso você ainda não o tenha instalado, execute:

```
# zypper in flatpak
```

Com o Flatpak instalado, adicione o principal repositório do Flatpak, o [Flathub]:

```
# flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Por fim, para instalar a carteira Electrum usando o Flatpak:

```
# flatpak install org.electrum.electrum
```

No caso do Flatpak, o código-fonte do pacote da Electrum pode ser encontrado no [GitHub][github-flatpak]. Não examinei esse código-fonte porque não entendo como funciona o empacotamento usando Flatpak. Mas acredito ser igualmente seguro instalar a Electrum dessa forma.

Note que o pacote Flatpak, assim como o pacote do openSUSE, também foi contribuído pela comunidade. Não encontrei menção a esses pacotes no [_site_ oficial da carteira Electrum][electrum].

## 3) Download do site da própria Electrum

Na verdade, essa é a recomendação do criador da Electrum: não baixar a Electrum de outro lugar que não seja o seu _site_ oficial ([electrum.org][electrum]) e verificar a assinatura GPG.

No entanto, vale observar que a Electrum depende da biblioteca [secp256k1], que pode ser facilmente instalada a partir dos repositórios oficiais de distribuições Linux como [Debian][debian-libsecp256k1] ou [Ubuntu][ubuntu-libsecp256k1], mas não está disponível nos repositórios oficiais do openSUSE.

Para usuários do openSUSE, isso gera um problema, que é instalar essa biblioteca antes de instalar a Electrum. Ela até pode ser obtida do repositório [network:cryptocurrencies][libsecp256k1], mas aí faria mais sentido instalar também a Electrum a partir desse mesmo repositório (opção 1). Ou compilar tanto a biblioteca quanto a carteira a partir de seus códigos-fonte.

## 4) Compilando a partir do código-fonte

Para quem é mais detalhista, mais desconfiado ou mais preocupado com a segurança, compilar a carteira Electrum a partir do seu código-fonte pode ser mais interessante devido à possibilidade de [verificar a integridade e autenticidade][how-to-verify-iso] do código, além de auditá-lo antes da instalação — contanto que tenha o conhecimento técnico e tempo necessários, claro.

Comece instalando tudo que vai precisar para compilar e depois usar a carteira Electrum e a biblioteca secp256k1. Para isso, abra o terminal e execute o comando a seguir como _root_:

```
# zypper install autoconf automake gcc gettext-tools git libtool make python3-cryptography python3-devel python3-pip python3-requests python3-setuptools
```

Para verificar a integridade e autenticidade do código-fonte, vamos obter a chave pública do desenvolvedor. Vou explicar o processo de forma resumida, se quiser mais informações, leia:

- [Verificação de integridade e autenticidade com SHA-256 e GPG][how-to-verify-iso]

Acesse o _site_ oficial da carteira Electrum ([electrum.org][electrum]) e clique em **Download**. Na página seguinte, clique no _link_ **ThomasV**, no início da página, onde se lê *Sources and executables are signed by ThomasV* (códigos-fonte e executáveis são assinados por ThomasV):

{% include image.html src="/files/2020/11/electrum-thomasv.jpg" %}

Com isso, você baixará a chave pública do desenvolvedor, um arquivo chamado `ThomasV.asc`. Para importá-la, execute o comando a seguir:

```
$ gpg --import ThomasV.asc

gpg: key 2BD5824B7F9470E6: public key "Thomas Voegtlin (https://electrum.org) <thomasv@electrum.org>" imported
gpg: Número total processado: 1
gpg:               importados: 1
```

Opcionalmente, se você possui uma chave GPG, assine a chave pública importada:

```
$ gpg --edit-key 2BD5824B7F9470E6
> trust
> sign
> quit
```

Agora vamos obter o código-fonte da carteira Electrum, que está hospedado no [GitHub]:

```
$ git clone https://github.com/spesmilo/electrum.git
$ cd electrum
$ git submodule update --init
```

No momento, a versão mais atual da Electrum é a 4.0.5, e o desenvolvedor segue a boa prática de criar uma _tag_ do [Git] para cada versão. Mude o código-fonte para essa _tag_:

```
$ git checkout 4.0.5
```

Códigos-fonte versionados pelo Git possuem uma forma própria de verificar integridade e autenticidade. Para verificar esse código-fonte nessa _tag_ específica, execute:

```
$ git verify-tag 4.0.5
```

Certifique-se de que aparece o aviso de boa assinatura (_good signature_):

```
gpg: Signature made qua 18 nov 2020 16:24:04 -03
gpg:                using RSA key 6694D8DE7BE8EE5631BED9502BD5824B7F9470E6
gpg: Good signature from "Thomas Voegtlin (https://electrum.org) <thomasv@electrum.org>" [ultimate]
gpg:                 aka "ThomasV <thomasv1@gmx.de>" [ultimate]
gpg:                 aka "Thomas Voegtlin <thomasv1@gmx.de>" [ultimate]
```

Se a verificação sucedeu, podemos confiar no código-fonte e seguir em frente.

No fonte da carteira Electrum, há um _script_ para facilitar o _download_ e a compilação da biblioteca secp256k1, cujo fonte também está hospedado no [GitHub][secp256k1]. Execute esse _script_:

```
$ ./contrib/make_libsecp256k1.sh
```

Isso vai criar os binários da biblioteca secp256k1 dentro da pasta `electrum`, em `contrib/secp256k1/dist/lib`.

Para instalar as dependências em Python da Electrum, execute:

```
$ python3 -m pip install --user -e .
```

Opcionalmente, para baixar e compilar as traduções da Electrum, execute:

```
$ ./contrib/pull_locale
```

Nesse ponto, você já é capaz de iniciar a carteira Electrum a partir da pasta do código-fonte:

```
$ ./run_electrum
```

{% include image.html src="/files/2020/11/electrum-run-pt.jpg" %}

Clique em **Cancelar** para sair da Electrum.

Note que para iniciar a carteira Electrum a partir do código-fonte, é necessário sempre acessar essa pasta e executar esse comando. Para o uso no dia a dia, é mais interessante instalá-la no sistema.

Para isso, comece copiando a biblioteca secp256k1 para a pasta de bibliotecas do sistema:

```
# cp --preserve=links contrib/secp256k1/dist/lib/*.so.* /usr/lib64/
# ldconfig
```

Depois, instale a carteira Electrum:

```
$ python3 -m pip install --user .
```

Certifique-se de que o comando informou que a instalação foi feita com sucesso:

```
Successfully installed Electrum-4.0.5
```

Você pode fechar a janela do terminal.

Depois disso, se quiser, você pode excluir a pasta `electrum` contendo os códigos-fonte baixados. Como a carteira foi instalada no sistema, essa pasta não é necessária para o uso cotidiano. No entanto, eu recomendo mantê-la, pois pode facilitar a atualização no futuro.

## Iniciando a carteira Electrum

Independente da forma de instalação que você escolheu, para iniciar a carteira Electrum, clique em **Atividades**, no canto superior esquerdo da tela, digite `electrum` e clique no ícone correspondente:

{% include image.html src="/files/2020/11/electrum-activities-pt.jpg" %}

No primeiro uso, a Electrum apresenta um assistente de configuração.

A partir daí, você já pode voltar a seguir as instruções do tutorial anterior:

- [Bitcoin para iniciantes com a carteira Electrum][bitcoin-electrum]

## Quer saber mais?

Se você quiser saber mais sobre _bitcoins_ e sobre a carteira Electrum, aqui no _site_ do Linux Kamarada há outros textos sobre esses assuntos:

- [Bitcoin para iniciantes com a carteira Electrum][bitcoin-electrum]
- [Dinheiro: passado, presente e... Bitcoin!][bitcoin-history]

Eu também recomendo que você confira o [_site_][bitcoinheiros] assim como o [canal no YouTube][bitcoinheiros-youtube] dos [Bitcoinheiros]. Eles tem os melhores materiais sobre Bitcoin em português brasileiro de toda a Internet. O canal no YouTube tem uma [_playlist_ de vídeos sobre a carteira Electrum][bitcoinheiros-electrum]. Mas o principal, na minha opinião, é o guia [Introdução ao Bitcoin][bitcoinheiros-intro], que é um índice para vários tutoriais deles, ordenados em etapas que um "bitcoinheiro" deve percorrer para começar a usar o Bitcoin e ir melhorando suas práticas e conhecimentos até se tornar um _expert_.

[electrum]:                 https://electrum.org/
[bitcoin]:                  https://bitcoin.org/pt_BR/escolha-sua-carteira
[linux]:                    http://www.vivaolinux.com.br/linux/
[lightning]:                https://pt.wikipedia.org/wiki/Lightning_Network
[bitcoin-electrum]:         {% post_url pt/2018-12-12-bitcoin-para-iniciantes-com-a-carteira-electrum %}
[4.0.5]:                    https://github.com/spesmilo/electrum/releases/tag/4.0.5
[kamarada-15.2]:            {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[leap-15.2]:                {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[opensuse-repos]:           https://en.opensuse.org/Package_repositories
[softwareoo]:               https://software.opensuse.org/package/electrum
[electrum-network]:         https://build.opensuse.org/package/show/network:cryptocurrencies/electrum
[python]:                   https://www.python.org/
[python3-aiorpcx]:          https://software.opensuse.org/package/python3-aiorpcX
[obs]:                      https://build.opensuse.org/package/show/network:cryptocurrencies/electrum
[rpm]:                      https://pt.wikipedia.org/wiki/RPM_(software)
[opensuse]:                 https://www.opensuse.org/
[flatpak]:                  https://flatpak.org/
[debian]:                   https://www.debian.org/index.pt.html
[ubuntu]:                   https://ubuntu.com/
[deb]:                      https://pt.wikipedia.org/wiki/.deb
[redhat]:                   https://www.redhat.com/pt-br/technologies/linux-platforms/enterprise-linux
[fedora]:                   https://getfedora.org/pt_BR/
[electrum-flatpak]:         https://flathub.org/apps/details/org.electrum.electrum
[flathub]:                  https://flathub.org/
[github-flatpak]:           https://github.com/flathub/org.electrum.electrum
[secp256k1]:                https://github.com/bitcoin-core/secp256k1
[debian-libsecp256k1]:      https://packages.debian.org/search?keywords=libsecp256k1
[ubuntu-libsecp256k1]:      https://packages.ubuntu.com/search?keywords=libsecp256k1
[libsecp256k1]:             https://software.opensuse.org/package/libsecp256k1
[how-to-verify-iso]:        {% post_url pt/2018-10-06-verificacao-de-integridade-e-autenticidade-com-sha-256-e-gpg %}
[github]:                   https://github.com/spesmilo/electrum
[git]:                      https://git-scm.com/
[bitcoin-history]:          {% post_url pt/2020-06-20-dinheiro-passado-presente-e-bitcoin %}
[bitcoinheiros]:            https://bitcoinheiros.com/
[bitcoinheiros-youtube]:    https://www.youtube.com/c/bitcoinheiros
[bitcoinheiros-electrum]:   https://www.youtube.com/playlist?list=PLgcVYwONyxmjZuXVmllvk1H5Yyb95u0X2
[bitcoinheiros-intro]:      https://bitcoinheiros.com/intro-bitcoin/
