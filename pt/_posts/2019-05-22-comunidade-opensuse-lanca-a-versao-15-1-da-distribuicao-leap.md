---
date: '2019-05-22 23:59:59 GMT-3'
image: '/files/2019/05/Leap15.1Branding-768x432.jpeg'
layout: post
published: true
nickname: 'opensuse-15.1-release-announcement'
title: 'Comunidade openSUSE lança a versão 15.1 da distribuição Leap'
excerpt: "Hoje o lançamento do openSUSE Leap 15.1 traz para usuários profissionais, empresários e ISVs (Independent Software Vendors) suporte atualizado para o hardware moderno. As funcionalidades do YaST e do instalador foram melhoradas na versão 15.1 da distribuição Leap. \"Continuidade e estabilidade é o que estamos fornecendo aos usuários com o Leap 15.1\", disse Haris Sehic, um membro da comunidade openSUSE. \"Com o Leap 15, nós introduzimos um enorme número de novas funcionalidades e inovações em segurança, performance, ferramentas e áreas de trabalho. Tendo em mente o quão estável, eficiente e confiável o Leap se tornou, com esta versão nós conseguimos manter o nível de qualidade ao ponto que nossos usuários domésticos e de pequenas empresas podem, na verdade mais do que nunca, se beneficiar da base empresarial de uma distribuição Linux openSUSE. Vamos continuar a nos divertir bastante!\""
---

*Esta é uma tradução não oficial da notícia originalmente publicada por [Douglas DeMaio][douglas-demaio] no site [news.opensuse.org][news.opensuse.org].*

{% include image.html src="/files/2019/05/Leap15.1Branding-768x432.jpeg" %}

**Leap 15.1 traz suporte a mais dispositivos de *hardware*, *drivers* e melhorias na instalação**

**Nuremberga, Alemanha** – Hoje o lançamento do openSUSE Leap 15.1 traz para usuários profissionais, empresários e ISVs (*Independent Software Vendors*) suporte atualizado para o *hardware* moderno.

As funcionalidades do YaST e do instalador foram melhoradas na versão 15.1 da distribuição Leap.

"Continuidade e estabilidade é o que estamos fornecendo aos usuários com o Leap 15.1", disse Haris Sehic, um membro da comunidade openSUSE. "Com o Leap 15, nós introduzimos um enorme número de novas funcionalidades e inovações em segurança, performance, ferramentas e áreas de trabalho. Tendo em mente o quão estável, eficiente e confiável o Leap se tornou, com esta versão nós conseguimos manter o nível de qualidade ao ponto que nossos usuários domésticos e de pequenas empresas podem, na verdade mais do que nunca, se beneficiar da base empresarial de uma distribuição Linux openSUSE. Vamos continuar a nos divertir bastante!"

As versões da distribuição Leap são escaláveis e tanto o *desktop* quanto o servidor são igualmente importantes para as cargas de trabalho dos usuários profissionais, o que se reflete no menu de instalação, assim como na quantidade de pacotes oferecidos e dispositivos de *hardware* suportados pela distribuição. O openSUSE Leap é bem adequado e preparado para uso como uma máquina virtual (VM) ou convidado de contêiner, permitindo a usuários profissionais prover serviços de rede de forma eficiente, independentemente de ser um único servidor ou um *data center*.

Usuários profissionais, administradores de sistemas e desenvolvedores podem confiar na qualidade do processo de desenvolvimento da distribuição Leap. Uma distribuição moderna, segura, mantida e altamente testada é construída usando o sistema de compilação de código aberto único ao SUSE e openSUSE, que é o Open Build Service, junto com o teste automatizado da ferramenta openQA.

## O que há de novo

Uma nova da pilha de gráficos inteiramente atualizada está disponível para essa distribuição GNU/Linux estável, de código aberto e baseada em trabalho comunitário e empresarial. O *hardware* gráfico suportado pelo *kernel* Linux 4.19 foi portado para o Leap 15.1, que usa o *kernel* Linux 4.12, suporta *drivers* gráficos adicionais para Unidades de Processamento Gráfico (GPUs) e melhora o suporte ao *chipset* AMD Vega.

A virtualização da GPU se tornou bastante popular entre fabricantes como AMD, Intel e Nvidia e o Leap 15.1 ajuda a entregar a implementação e o suporte dessas soluções para ambientes virtualizados e na nuvem.

O Leap 15.1 agora usará o Network Manager por padrão tanto para *notebooks* quanto *desktops* – antes, apenas os *notebooks* usavam o Network Manager por padrão. Servidores continuarão a usar por padrão o Wicked, o sistema avançado de configuração de rede do openSUSE. Essa nova versão adiciona alguns *drivers* Wi-Fi populares para placas de rede sem fio mais modernas. Uma mudança que se aplica tanto ao Wicked quanto ao Network Manager é que o arquivo `/etc/resolv.conf`, o arquivo `yp.conf` e mais alguns arquivos de configuração são *links* para arquivos em `/run` e são gerenciados pelo netconfig.

O gerenciamento de serviços do sistema no YaST foi remodelado para aproveitar muitas das funcionalidades oferecidas pelo systemd nessa área.

## Instalação e configuração melhoradas

{% include image.html src="/files/2019/05/1yast.png" %}

Aprimoramentos foram feitos no YaST para melhorar o gerenciamento de serviços. O Firewalld pode ser gerenciado no modo texto. Há uma nova interface de usuário para gerenciar o Firewalld, incluindo suporte ao AutoYaST. Administradores de sistema terão melhor controle com fórmulas do Salt no módulo yast2-configuration-management, e o gerenciamento de chaves SSH por usuário tornará as tarefas dos administradores muito mais agradáveis.

O YaST vem com um Particionador melhorado, que agora pode automaticamente formatar discos inteiros sem tabelas de partição, criar MD RAIDs de *software* sobre discos inteiros, criar partições dentro de um MD RAID de *software* e muitas outras combinações. O AutoYaST também suporta todas essas combinações. O YaST agora apresenta melhores propostas de particionamento em vários cenários, como sistemas com discos pequenos ou sistemas com vários discos, facilitando o particionamento para profissionais Linux.

O Leap 15.1 traz novos ícones do YaST criados pela comunidade.

A equipe do YaST trabalhou duro para melhorar a experiência do usuário em telas 4K (HiDPI), que agora são detectadas automaticamente e fazem com que a interface gráfica seja redimensionada, conferindo ao instalador um belo e novo visual.

## Segurança e manutenção

Atualizações de manutenção tanto do Leap 15 quanto do SUSE Linux Enterprise 15 foram herdadas pelo Leap 15.1. A equipe de segurança lança atualizações rápidas para o Leap 15.1. Quanto às atualizações de manutenção, cerca de 10 a 20% são contribuídas pela comunidade.

Há uma opção de teste no YaST para usuários que desejarem testar atualizações de manutenção antes de ser lançadas. O repositório de testes permite aos usuários testar as atualizações sete dias antes de elas irem para o repositório de atualizações.

Versões menores da série Leap 15 tem um ciclo de vida de manutenção e segurança de cerca de 18 meses, uma vez que versões menores são lançadas mais ou menos uma vez por ano. Usuários do openSUSE Leap 15.0, que foi lançado em 25 de maio de 2018, devem atualizar para o Leap 15.1 dentro dos próximos 6 meses. Espera-se que a série 15 do Leap alcance uma estimativa de 36 meses de atualizações de manutenção e segurança.

## Imagens, implantação e hardware com Linode, Slimbooks e Tuxedo

O Leap 15.1 continua a adicionar mais fornecedores de hardware: as companhias Slimbook e TUXEDO Computers oferecerão a opção de comprar computadores com o Leap 15.1 pré-instalado. Imagens do Leap para a nuvem do Linode já estão disponíveis hoje e prontas para todas as necessidades de infraestrutura.

Os computadores da TUXEDO Computers foram uma importante parte dos testes de referência do openSUSE Leap 15.1.

"Nós compartilhamos a crença fundamental que o usuário deve ter a melhor experiência de usuário que podemos oferecer", disse Herbert Feiler, CEO da TUXEDO Computers. "O openSUSE Leap 15.1 é a consistente continuidade e aprimoramento do Linux estável para usuários finais. Por isso, é claro que continuamos a oferecer o openSUSE pré-instalado em todos os *notebooks* e PCs da TUXEDO", acrescenta Feiler.

Serviços de armazenamento na nuvem, como Amazon Web Services, Azure e OpenStack, oferecerão imagens do Leap 15.1 nas próximas semanas. A série 15 do Leap é continuamente otimizada para cenários de uso virtualizado na nuvem tanto como hospedeiro quanto como convidado.

## Ambientes de trabalho

O Leap oferece uma boa variedade de ambientes de trabalho para Linux, incluindo os tradicionais KDE e GNOME, assim como o eficiente Xfce. Usuários podem escolher seu ambiente de trabalho, configuração e fluxo de trabalho preferidos. O GNOME 3.26 e a versão com suporte estendido (LTS) do KDE Plasma 5.12 estão tanto no Leap 15.0 quanto no Leap 15.1. Usuários empresariais do SLE 15 também podem obter o KDE e outras ferramentas e pacotes da comunidade por meio do [PackageHub]. Imagens Live do KDE e GNOME estão disponíveis para um simples *test drive* na guia **Live** da distribuição **Leap** em [software.opensuse.org][live]. Uma imagem de recuperação (*Rescue LiveCD*) também está disponível [nessa mesma página][live].

## Contêineres

O Leap 15.1 está repleto de tecnologias de conteinerização, como o Singularity, que traz contêineres e reprodutibilidade para a computação científica e a computação de alto desempenho (HPC). O Singularity apareceu pela primeira vez na distribuição Leap na versão 42.3 e provê recursos para criar os menores contêineres possíveis e executá-los como ambientes de apenas uma aplicação. Esta é também a primeira versão do Leap a trazer o gerenciador Podman e a ferramenta de criação de imagens Buildah, usados por padrão no openSUSE Kubic. Em conjunto, eles fornecem uma alternativa mais leve e resiliente ao Docker e adicionam funcionalidades únicas.

## Gamers e designers

*Web designers* e publicitários digitais podem usar a mais nova pilha de gráficos com a atualização de versão menor da biblioteca gráfica Mesa 3D. Também podem usar ferramentas de código aberto como o Blender, programa de criação em 3D, para criar animações intrigantes e cativantes.

*Gamers*, amantes de música e ouvintes de *podcasts* podem aproveitar os melhoramentos do áudio de alta definição, *drivers* de áudio USB portados e atualizações de *software* feitas para os cartões de memória MultiMedia Card (MMC) e embedded MMC (e-MMC).

## Migração facilitada para o Enterprise

O openSUSE Leap 15.1 traz vários pacotes comunitários construídos sobre o núcleo do SUSE Linux Enterprise (SLE) 15 SP1. O núcleo comum compartilhado e o alinhamento com o SLE facilitam migrações para o produto corporativo da SUSE para profissionais que queiram estender o ciclo de vida de manutenção e segurança, uma vez passado o ciclo de vida do Leap. Migrar da versão comunitária do Leap para o SUSE Linux Enterprise é uma opção disponível para quem desejar migrar. A migração de servidores com openSUSE Leap para o SUSE Linux Enterprise é fácil para os integradores de sistema que trabalham sobre o código do Leap e podem decidir migrar para uma versão corporativa para SLAs, certificação, implantação em massa ou suporte estendido. As instruções sobre como fazer isso usando o pacote SUSEConnect e a documentação do SUSE podem ser encontradas [aqui][opensuse-to-sle].

## Todos os serviços de rede padronizados e mais alguns existentes

Como nas versões anteriores, administradores de sistemas e pequenas empresas podem usar o Leap em servidores *web* e de *e-mail* ou para gerenciamento da rede com DHCP, DNS, NTP, Samba, NFS, LDAP e centenas de outros serviços.

Serviços de compartilhamento de arquivos e nuvem incluem *software* como o [NextCloud] e até a suíte de aplicativos de *groupware* [Kopano] (antes conhecida como Zarafa) é parte dos repositórios oficiais do Leap 15.1.

O Leap 15.1 também introduz a configuração automática do SSH por padrão nas instalações dos tipos "Servidor" e "Servidor Transacional", facilitando o trabalho no servidor logo após a instalação.

## Saúde e ciência

A distribuição Leap suporta as comunidades de saúde, ciência, pesquisa e desenvolvimento.

O GNU Health, o sistema de gerenciamento de informações hospitalares ganhador de prêmios, vem na versão 3.4.x, que introduz o Federation Server, gnuhealth-thalamus. Foi adicionado um *script* de configuração do GNU Health chamado openSUSE-gnuhealth-setup para facilitar a instalação de um novo sistema para usuários menos experientes.

Resolva numericamente problemas lineares e não-lineares e realize outros experimentos numéricos usando uma linguagem que é em grande parte compatível com o MATLAB por meio do GNU Octave.

Ou use o sistema de informação geográfica gratuito e de código aberto [QGIS] para criar, editar, visualizar, analisar e publicar informações geoespaciais.

O Leap tem muito mais pacotes, como o sistema algébrico computacional (CAS) para problemas em teoria dos corpos chamado Cadabra, o simulador interativo de física Step e o pacote de tabela periódica Kalzium.

## Arquiteturas

O Leap trabalha com a arquitetura x86_64 e pode ser instalado em computadores físicos, virtuais, hospedeiro e convidado, e na nuvem. Portes para outras arquiteturas como [ARM64] e [POWER] estão sendo desenvolvidos pela comunidade.

A instalação do openSUSE no Raspberry Pi de arquitetura ARM64 foi simplificada para uma imagem e é personalizável. O openSUSE Leap 15.1 é o primeiro sistema operacional de propósito geral a suportar uma experiência Linux padrão completa no Raspberry Pi. Não há necessidade de usar uma imagem ISO específica para instalar o openSUSE no Raspberry Pi. A imagem padrão e não modificada do openSUSE pode ser instalada, assim como é instalada em qualquer outro computador. O instalador detecta e propõe as configurações padrão. O Raspberry Pi precisa de uma partição muito específica contendo o *firmware* do sistema. É importante que o instalador detecte essa partição específica, preserve-a e monte-a em `/boot/vc` para permitir que o sistema operacional realize atualizações do *firmware*.

## Baixe o openSUSE Leap 15.1

Para baixar a imagem ISO, acesse: [https://software.opensuse.org/distributions/leap](https://software.opensuse.org/distributions/leap)

## Dúvidas

Caso você tenha alguma dúvida sobre a distribuição ou acredita que talvez tenha encontrado um *bug*, pergunte em um dos seguintes canais (em inglês):

- [https://t.me/openSUSE_group](https://t.me/openSUSE_group)
- [https://lists.opensuse.org/opensuse-support/](https://lists.opensuse.org/opensuse-support/)
- [https://discordapp.com/invite/openSUSE](https://discordapp.com/invite/openSUSE)

Há também os canais em português:

- [https://t.me/opensusebr](https://t.me/opensusebr)
- [https://lists.opensuse.org/opensuse-pt/](https://lists.opensuse.org/opensuse-pt/)

## Participe

Se você gostaria de ajudar o Projeto openSUSE, veja a lista de formas como você pode contribuir em: [https://rootco.de/2016-04-03-opensuse-and-you/](https://rootco.de/2016-04-03-opensuse-and-you/)

O Projeto openSUSE é uma comunidade ao redor do mundo que promove o uso do Linux em todos os lugares. Ele cria duas das melhores distribuições Linux do mundo: a Tumbleweed, atualizada continuamente (*rolling-release*), e a Leap, distribuição híbrida de empresa e comunidade. O openSUSE trabalha continuamente de maneira conjunta, aberta, transparente e amigável como parte da comunidade internacional de *software* livre e de código aberto (*Free and Open Source Software* – FOSS). O projeto é comandado por sua comunidade e depende das contribuições de pessoas que trabalham como testadores, escritores, tradutores, especialistas em usabilidade, artistas, embaixadores ou desenvolvedores. O projeto abrange uma ampla variedade de tecnologias, pessoas com diferentes níveis de conhecimentos, que falam diferentes línguas e possuem diversas raízes culturais. Saiba mais sobre o Projeto openSUSE em [opensuse.org](https://opensuse.org).

[packagehub]:           https://packagehub.suse.com/
[live]:                 https://download.opensuse.org/distribution/leap/15.1/live/
[opensuse-to-sle]:      https://www.suse.com/documentation/sles-15/book_sle_upgrade/data/sec_upgrade-online_opensuse_to_sle.html
[nextcloud]:            https://nextcloud.com/
[kopano]:               https://kopano.com/
[qgis]:                 https://www.qgis.org/
[arm64]:                https://en.wikipedia.org/wiki/ARM_architecture
[power]:                https://en.wikipedia.org/wiki/Power_Architecture
[douglas-demaio]:       https://news.opensuse.org/author/ddemaio/
[news.opensuse.org]:    https://news.opensuse.org/2019/05/22/opensuse-community-releases-leap-15-1-version/
