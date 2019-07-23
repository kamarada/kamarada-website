---
date: 2019-07-23 00:15:00 GMT-3
image: '/files/2019/03/obs-and-github.jpg'
layout: post
published: true
nickname: 'obs-and-github'
title: 'Integrando Open Build Service com GitHub'
excerpt: 'Seu software compilado, empacotado e disponível para download logo após um git push!'
---

{% include image.html src="/files/2019/03/obs-and-github.jpg" %}

Se você desenvolve *software* para [Linux], deveria conhecer o [**Open Build Service (OBS)**][obs]. O que o torna uma ferramenta tão interessante? Extraído do seu [*site*][obs] (tradução livre minha):

> O Open Build Service (OBS) é um sistema para compilar e distribuir pacotes binários a partir de códigos-fonte de forma automática, consistente e reprodutível. Você pode distribuir pacotes, assim como atualizações, *add-ons*, *appliances* e distribuições Linux inteiras para uma vasta gama de sistemas operacionais e arquiteturas de *hardware*.

Na prática, você desenvolvedor pode enviar o código-fonte do seu *software* para o OBS e obter pacotes prontos para instalar no [openSUSE], [Fedora], [Debian], [Ubuntu] e outras distribuições, assim como pacotes para [i586], [x86_64], [ARM] e outras arquiteturas. Os usuários do *software* podem baixar esses pacotes diretamente do OBS. Ele também é capaz de fazer [sistemas Live][what-is-a-livecd-dvd-usb]: você pode oferecer aos seus usuários a possibilidade de testar seu *software* em um sistema limpo e controlado sem necessidade de instalação.

O OBS é um [*software* livre][free-software], de modo que você pode baixá-lo, instalá-lo em um servidor próprio e usá-lo localmente. Ou (mais facil) você pode usar o servidor de referência, disponível pública e gratuitamente em [build.opensuse.org][buildoo]. Esse servidor é usado principalmente para o desenvolvimento da distribuição openSUSE, mas também hospeda vários projetos comunitários.

Além disso, se você é um desenvolvedor, provavelmente conhece o [Git] e o [GitHub] — dispensam apresentações. E se eu te disser que você pode integrar o OBS com o GitHub de modo que seu *software* seja sempre compilado, empacotado e disponibilizado para *download* logo após um `git push`? Ficou interessado?

Como configurar essa integração é o que você verá neste *post*!

## Começando a usar o OBS

Não vou falar sobre os conceitos básicos do OBS aqui, seria assunto para um *post* inteiro. Para aprender o básico do OBS, consulte as páginas a seguir (em inglês):

- [Documentation - Open Build Service][obs-help]
- [openSUSE:Build Service Tutorial - openSUSE Wiki][obs-tutorial]

Vou assumir que você já consegue entrar ("fazer *login*") com sua conta do openSUSE em [build.opensuse.org][buildoo]. Se você ainda não tem uma conta, crie uma clicando no *link* **Sign Up** (inscrever-se) no topo da página.

Crie um pacote vazio para o seu *software* no OBS. Aqui vou usar como exemplo o repositório [patterns] do Linux Kamarada no GitHub, que no momento possui apenas um arquivo *spec*.

Se você não sabe o que é um arquivo *spec* e/ou é novo no empacotamento [RPM], leia (em inglês):

- [Fedora RPM Guide][fedora-rpm-guide]
- [openSUSE:Packaging guidelines - openSUSE Wiki][opensuse-packaging]

Também vou assumir que você instalou o [**osc**][osc] (o cliente de linha de comando do OBS) no seu computador. Se você usa openSUSE, pode instalar o **osc** executando:

```
# zypper install osc
```

Crie uma cópia local ("faça *checkout*") do seu projeto pessoal (*home project*) do OBS:

```
$ osc checkout home:seu_nome_de_usuario
```

Entre na pasta do pacote:

```
$ cd home:seu_nome_de_usuario/nome_do_pacote
```

Agora vamos integrar o OBS com o GitHub.

## OBS: obtendo o código-fonte do GitHub

Usando o **osc**, configure o serviço de código-fonte ([*source service*][obs-user-guide]) do OBS para obter o código-fonte do GitHub:

```
$ osc add git://github.com/kamarada/patterns.git
```

É criado na pasta um arquivo `_service`. Abra-o e substitua seu conteúdo pelo seguinte:

```xml
<services>
    <service name="obs_scm">
        <param name="scm">git</param>
        <param name="url">git://github.com/kamarada/patterns.git</param>
        <param name="revision">15.1-dev</param>
        <param name="extract">patterns-kamarada-gnome.spec</param>
    </service>
</services>
```

Note que estou usando o ramo (*branch*) `15.1-dev`. Se você pretende usar o ramo `master` para o seu pacote, pode simplesmente omitir o parâmetro `revision` (revisão).

Comite as alterações ("faça o *commit*" das alterações):

```
$ osc commit
```

Comitar para o OBS automaticamente dispara o serviço de código-fonte e o processo de compilação e empacotamento. Se você acessar [build.opensuse.org][buildoo], verá que seu projeto está compilando (*building*):

{% include image.html src="/files/2019/03/obs-and-github-1.jpg" %}

Para que o GitHub possa disparar essas mesmas ações, você precisa gerar um *token* de autorização ([*authorization token*][obs-reference-guide-1]) usando o **osc**:

```
$ osc token --create home:seu_nome_de_usuario nome_do_pacote
```

O comando retornará o *token* e sua identificação (*id*):

```xml
<status code="ok">
  <summary>Ok</summary>
  <data name="token">UmAsTrInGeNoRmEcOmSeUtOkEn</data>
  <data name="id">4321</data>
</status>
```

Como teste, você pode disparar manualmente a criação do seu pacote usando esse *token*:

```
$ osc token --trigger UmAsTrInGeNoRmEcOmSeUtOkEn
```

Se você acessar [build.opensuse.org][buildoo], verá que seu projeto está compilando.

## GitHub: avisando novos commits ao OBS

Queremos atualizar o código-fonte do nosso pacote no OBS toda vez que ele mudar no GitHub. Podemos fazer com que o GitHub dispare automaticamente essa atualização configurando um [*webhook* do GitHub][github-webhook].

Para fazer isso, execute os seguintes passos:

1. Entre (*sign in*) no GitHub e vá até seu repositório (no meu caso, [https://github.com/kamarada/patterns](https://github.com/kamarada/patterns))
2. Clique em **Settings** (configurações)
3. Clique em **Webhooks**
4. Clique no botão **Add webhook** (adicionar *webhook*):

{% include image.html src="/files/2019/03/obs-and-github-2.jpg" %}

Forneça os seguintes parâmetros:

- **Payload URL**: `https://build.opensuse.org/trigger/webhook?id=4321` (endereço de carregamento, substitua `4321` pela *id* do seu *token*)
- **Content type** (tipo do conteúdo): `application/x-www-form-urlencoded` (padrão)
- **Secret** (segredo, senha): `AcRaZyStRiNgWhIcHiSyOuRtOkeN`

Deixe os outros parâmetros como estão, com seus valores padrão:

- **SSL verification**: Enable SSL verification (verificação SSL: habilitar)
- **Which events would you like to trigger this webhook?** Just the push event (que eventos você gostaria que disparassem este *webhook*? Apenas o evento *push*)
- **Active** (ativo)

Finalmente, clique no botão verde **Add webhook** (adicionar *webhook*):

{% include image.html src="/files/2019/03/obs-and-github-3.jpg" %}

De volta à página anterior, você pode ver o *webhook* adicionado:

{% include image.html src="/files/2019/03/obs-and-github-4.jpg" %}

A partir de agora, cada `git push` para o GitHub irá disparar automaticamente uma reconstrução do pacote no OBS. Seu nome de usuário aparecerá no histórico do código-fonte do OBS, que pode ser verificado com o comando `osc log`.

Divirta-se muito! (*Have a lot of fun!*)

## Referências

- [openSUSE:Build Service Tutorial - openSUSE Wiki][obs-tutorial]
- [Let github.com trigger your source update - OBS blog][obs-blog]
- [OBS + GitHub - deprecation of GitHub Services - opensuse-buildservice Mailing List Archive][mailing-list-1] (e a [sequência][mailing-list-2] alguns meses depois)
- [Integrating External Source Repositories - OBS Reference Guide][obs-reference-guide-2]
- [Using Source Services - OBS User Guide][obs-user-guide]
- [OBS Token Authorization - OBS Reference Guide][obs-reference-guide-1]
- [GitHub - seccubus/obs_autobuild_test: Test to see how you make OpenSUSE build services build automagically][seccubus]

[linux]:                    http://www.vivaolinux.com.br/linux/
[obs]:                      https://openbuildservice.org/
[opensuse]:                 https://www.opensuse.org/
[fedora]:                   https://getfedora.org/
[debian]:                   https://www.debian.org
[ubuntu]:                   https://www.ubuntu.com/
[i586]:                     https://pt.wikipedia.org/wiki/X86
[x86_64]:                   https://pt.wikipedia.org/wiki/AMD64
[arm]:                      https://pt.wikipedia.org/wiki/Arquitetura_ARM
[what-is-a-livecd-dvd-usb]: {%post_url pt/2015-11-25-o-que-e-um-livecd-um-livedvd-um-liveusb %}
[free-software]:            https://www.gnu.org/philosophy/free-sw.pt-br.html
[buildoo]:                  https://build.opensuse.org
[github]:                   https://github.com/
[git]:                      https://git-scm.com/
[obs-help]:                 https://openbuildservice.org/help/
[obs-tutorial]:             https://en.opensuse.org/openSUSE:Build_Service_Tutorial
[patterns]:                 https://github.com/kamarada/patterns/tree/15.1-dev
[rpm]:                      https://pt.wikipedia.org/wiki/RPM_(software)
[fedora-rpm-guide]:         http://docs.fedoraproject.org/en-US/Fedora_Draft_Documentation/0.1/html/RPM_Guide/index.html
[opensuse-packaging]:       https://en.opensuse.org/openSUSE:Packaging_guidelines
[osc]:                      https://linux.die.net/man/1/osc
[obs-user-guide]:           https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.source_service.html
[obs-reference-guide-1]:    https://openbuildservice.org/help/manuals/obs-reference-guide/cha.obs.authorization.token.html#id-1.7.18.4
[github-webhook]:           https://developer.github.com/webhooks/
[obs-blog]:                 https://openbuildservice.org/2013/11/22/source-update-via_token/
[mailing-list-1]:           https://lists.opensuse.org/opensuse-buildservice/2018-05/msg00042.html
[mailing-list-2]:           https://lists.opensuse.org/opensuse-buildservice/2018-10/msg00034.html
[obs-reference-guide-2]:    https://openbuildservice.org/help/manuals/obs-reference-guide/cha.obs.concepts.html#concept_scm_integration
[seccubus]:                 https://github.com/seccubus/obs_autobuild_test
