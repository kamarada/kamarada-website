---
date: '2020-12-06 00:15:00 GMT-3'
image: '/files/2020/12/leap-tumbleweed.png'
layout: post
published: true
nickname: 'leap-vs-tumbleweed'
title: 'openSUSE Leap e openSUSE Tumbleweed: qual é a diferença?'
---

{% include image.html src="/files/2020/12/leap-tumbleweed.png" %}

Quando eu comecei a usar o [openSUSE], em [2012][vinyanalista], "openSUSE" era o nome tanto da distribuição [Linux] quanto do projeto que a desenvolvia. Hoje, o Projeto openSUSE disponibiliza duas distribuições, chamadas [Leap] e [Tumbleweed]. Nesse texto, você vai ver as diferenças entre essas distribuições e como elas começaram.

<!--more-->

Primeiro, vejamos o que são essas distribuições e as diferenças entre elas:

- **[openSUSE Leap][leap]:** mais estável, sucessor do bom e velho openSUSE, mas com um novo processo de desenvolvimento, atualmente está na [versão 15.2][leap-15.2] e lança novas versões com regularidade (geralmente, uma nova versão por ano), de modo semelhante a distribuições mais tradicionais como [Ubuntu], [Debian] e [Fedora]; e

- **[openSUSE Tumbleweed][tumbleweed]:** com lançamentos contínuos (_rolling release_), ou seja, não possui versões distintas, apenas a versão mais recente, que contém sempre os _softwares_ mais recentes, recebe atualizações pequenas e frequentes sempre que um _software_ é atualizado, semelhante a distribuições como [Arch], [Manjaro] e [Gentoo].

O openSUSE Leap é mais indicado para usuários iniciantes e organizações, que tendem a evitar atualizações frequentes. Já o openSUSE Tumbleweed é preferido por usuários entusiastas que desejam usar sempre o que há de mais novo em Linux.

Normalmente, eu falo aqui do openSUSE Leap. É a distribuição que eu uso e indico há anos, principalmente para usuários iniciantes, tanto que o [Linux Kamarada][kamarada-15.2] é baseado nele. O Linux Kamarada está atualmente na [versão 15.2][kamarada-15.2], baseada na versão mais atual do openSUSE Leap, também 15.2. Eu uso números de versões iguais para mostrar esse alinhamento.

## Um pouco de história e mais detalhes

O desenvolvimento da distribuição openSUSE ocorre no [openSUSE Build Service][obs], mais precisamente no repositório [Factory] ("fábrica", no inglês). Novas versões de pacotes sempre entram no openSUSE por esse repositório. Para quem conhece o Debian, o repositório Factory do openSUSE é equivalente ao [repositório instável][debian-sid] (_unstable_, "Sid") do Debian.

O projeto Tumbleweed foi iniciado em [novembro de 2010][tumbleweed-2010] por [Greg Kroah-Hartman][gkh], desenvolvedor do [_kernel_ Linux][linux-kernel] que na época trabalhava na [Novell], então proprietária da [SUSE]. No início, não era propriamente uma distribuição inteira, mas um conjunto adicional de atualizações contínuas que podia ser instalado sobre a versão regular do openSUSE.

Nesse momento, o Projeto openSUSE tinha apenas uma distribuição, o openSUSE 11.3.

Quatro anos depois, em [novembro de 2014][opensuse-13.2], foi lançado o openSUSE 13.2, que acabou sendo a última versão regular da distribuição que se chamava apenas openSUSE. Ao mesmo tempo, os projetos Factory e Tumbleweed foram [mesclados][tumbleweed-2014] e passou a existir a distribuição chamada openSUSE Tumbleweed.

{% include image.html src="/files/2020/12/tumbleweed.jpg" %}

Internamente, no OBS, ainda existe o repositório [Factory][factory-obs]. Os pacotes considerados mais essenciais para o sistema são submetidos a testes automatizados da ferramenta [openQA] integrada ao OBS. Quando os testes são concluídos e o repositório está em um estado considerado estável, o repositório é então sincronizado com os [espelhos][mirrors] (_mirrors_) e publicado como openSUSE Tumbleweed. Cada atualização dessa é chamada de _[snapshot]_ (instantâneo) e normalmente é feita de duas a três vezes na semana.

Já no final de 2014, portanto, o Projeto openSUSE oferecia 2 distribuições: openSUSE 13.2 e openSUSE Tumbleweed.

Visando melhorar o processo de lançamento de novas versões, a SUSE decidiu liberar os códigos-fonte do [SUSE Linux Enterprise][sle] (SLE) para a comunidade e ajudar a oferecer uma distribuição baseada neles. Para marcar a mudança, o Projeto openSUSE decidiu que na próxima versão da distribuição regular o [número][opensuse-42] saltaria para 42 e o [nome][leap-name] mudaria para Leap. E assim foi lançado o [openSUSE Leap 42.1][leap-42.1], sucessor do openSUSE 13.2, em [novembro de 2015][leap-42.1].

{% include image.html src="/files/2020/12/leap.jpg" %}

Portanto, no final de 2015, o Projeto openSUSE já oferecia suas 2 distribuições com os nomes que usam até hoje: openSUSE Leap 42.1 e openSUSE Tumbleweed.

O número 42 — a resposta para "o significado da vida, do universo e tudo mais" — era uma referência ao [Guia do Mochileiro das Galáxias][42]. O número 1 indicava o alinhamento com o Service Pack 1 (SP1) do SLE 12.

Pode-se dizer que esse salto no número foi principalmente uma estratégia de _marketing_, porque depois das versões [42.2] e [42.3], voltaram os números mais baixos, mais próximos dos usados antes. A SUSE e o Projeto openSUSE [decidiram][leap-15-announcement] que as próximas versões das suas distribuições seriam numeradas [openSUSE Leap 15.0][leap-15.0] e SLE 15. Desde então, tivemos [openSUSE Leap 15.1][leap-15.1] e [15.2][leap-15.2] e a próxima versão será a [15.3].

{% include image.html src="/files/2020/12/opensuse-releases.png" caption="Versões do openSUSE (fonte: [Wikipedia](https://en.wikipedia.org/wiki/OpenSUSE_version_history))" %}

Já o nome Leap ("salto", em inglês) remete à forma como a distribuição evolui, o que a distingue da outra distribuição, Tumbleweed ("erva daninha", em inglês, daquelas que andam aos saltos enroladas em bola, muito comuns em filmes de _cowboys_).

{% include image.html src="/files/2020/12/tumbleweed.gif" %}

Enquanto usuários do Leap "saltam" de uma versão para outra (da 15.0 para a 15.1, da 15.1 para a 15.2, e assim por diante), usuários do Tumbleweed estão constantemente "rolando" na única versão que existe, que é sempre a mais recente.

[opensuse]:             https://www.opensuse.org/
[vinyanalista]:         https://vinyanalista.github.io/blog/2012/04/21/problemas-envolvendo-bootloaders-mbr-e-tabela-de-particoes/
[linux]:                https://www.vivaolinux.com.br/linux/
[leap]:                 https://en.opensuse.org/Portal:Leap
[tumbleweed]:           https://en.opensuse.org/Portal:Tumbleweed
[leap-15.2]:            {% post_url pt/2020-07-02-versao-15.2-do-opensuse-leap-traz-novos-e-empolgantes-pacotes-de-inteligencia-artificial-aprendizagem-de-maquina-e-containers %}
[ubuntu]:               https://ubuntu.com/
[debian]:               https://www.debian.org/
[fedora]:               https://getfedora.org/pt_BR/
[arch]:                 https://www.archlinux.org/
[manjaro]:              https://manjaro.org/
[gentoo]:               http://www.gentoo.org/
[kamarada-15.2]:        {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[obs]:                  https://build.opensuse.org/
[factory]:              https://pt.opensuse.org/Portal:Factory
[debian-sid]:           https://www.debian.org/releases/sid/
[tumbleweed-2010]:      https://lists.opensuse.org/opensuse-project/2010-11/msg00206.html
[gkh]:                  https://pt.wikipedia.org/wiki/Greg_Kroah-Hartman
[linux-kernel]:         https://www.kernel.org/
[novell]:               https://pt.wikipedia.org/wiki/Novell
[suse]:                 https://www.suse.com/pt-br/
[opensuse-13.2]:        https://news.opensuse.org/2014/11/04/opensuse-13-2-green-light-to-freedom/
[tumbleweed-2014]:      https://news.opensuse.org/2014/10/24/tumbleweed-factory-rolling-releases-to-merge/
[factory-obs]:          https://build.opensuse.org/project/show/openSUSE:Factory
[openqa]:               https://openqa.opensuse.org/
[mirrors]:              https://en.opensuse.org/openSUSE:Mirrors
[snapshot]:             https://www.vivaolinux.com.br/artigo/openSUSE-Tumbleweed-Snapshots-A-Melhor-Forma-de-Controle-de-Atualizacoes-e-Quebras-do-Sistema
[sle]:                  https://www.suse.com/pt-br/products/
[opensuse-42]:          https://lists.opensuse.org/opensuse-factory/2015-06/msg00203.html
[leap-name]:            https://lists.opensuse.org/opensuse-project/2015-07/msg00054.html
[leap-42.1]:            {% post_url pt/2015-11-04-opensuse-leap-42-1-se-torna-a-primeira-distribuicao-linux-hibrida %}
[42]:                   https://geekness.com.br/porque-42/
[42.2]:                 {% post_url pt/2016-11-16-opensuse-leap-42-2-versao-otima-para-profissionais-linux %}
[42.3]:                 {% post_url pt/2017-08-07-atualizacao-de-distribuicao-linux-continua-empoderando-a-comunidade-e-as-empresas-se-beneficiam %}
[leap-15-announcement]: https://lists.opensuse.org/opensuse-project/2017-04/msg00014.html
[leap-15.0]:            {% post_url pt/2018-05-25-baseado-no-codigo-do-enterprise-testado-milhoes-de-vezes-opensuse-leap-15-lancado %}
[leap-15.1]:            {% post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[15.3]:                 https://lists.opensuse.org/opensuse-announce/2020-04/msg00000.html
