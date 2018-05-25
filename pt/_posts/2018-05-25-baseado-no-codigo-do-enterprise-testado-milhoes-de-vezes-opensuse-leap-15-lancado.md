---
date: 2018-05-25 19:45:00
image: '/files/2018/05/Built-to-scale1.png'
layout: post
published: true
nickname: 'opensuse-15.0-release-announcement'
title: 'Baseado no código do Enterprise, testado milhões de vezes: openSUSE Leap 15 lançado'
excerpt: "A versão mais recente do openSUSE Leap 15 está oferecendo aos usuários profissionais, empreendedores e ISVs (Independent Software Vendors) uma base de código nova, reforçada e robusta para suas cargas de trabalho e que suportam hardware moderno, baseado em código aberto estável, enterprise em uma distribuição GNU/Linux comunidade - desenvolvida com um sistema de construção open source moderno, mais seguro, melhor testado e muito mais aberto, exclusivo do SUSE e do openSUSE."
---

**A nova comunidade criada sobre o SUSE Linux Enterprise 15 traz uma grande variedade de novos softwares, fácil migração para o SLE, atualizações transacionais, funções de servidor, imagens de nuvem escaláveis e laptops Linux**

A versão mais recente do openSUSE Leap 15 está oferecendo aos usuários profissionais, empreendedores e ISVs (Independent Software Vendors) uma base de código nova, reforçada e robusta para suas cargas de trabalho e que suportam hardware moderno, baseado em código aberto estável, enterprise em uma distribuição GNU/Linux comunidade - desenvolvida com um sistema de construção open source moderno, mais seguro, melhor testado e muito mais aberto, exclusivo do SUSE e do openSUSE.

## Novas funcionalidades

O openSUSE Leap 15 agora permite a migração para o SUSE Linux Enterprise (SLE), traz um novo particionador, integra o Groupware Kopano, atualizado para o firewalld - e também vem distribuído pela Linode (para configurações de infraestrutura e nuvem) e hardware de ponta como os Laptops Tuxedo (outros fornecedores de computação em nuvem e hardware segurirão). Além disso, o Leap 15 introduz uma seleção de função do sistema com "'servidor"' ou "'servidor transacional"', com as atualizações transacionais e um sistema de arquivos raiz somente leitura. Isso traz todos os benefícios das atualizações atômicas para o escopo completo das implantações, da Internet das Coisas (IoT) e dispositivos incorporados a funções clássicas de servidor e desktop. Além disso, o Leap 15 foi continuamente otimizado para cenários de uso da nuvem como convidado de virtualização e ao mesmo tempo oferece uma grande variedade de desktops, incluindo o KDE e o GNOME, e apresenta o retorno de imagens ao vivo para uma simples condução de teste.

## Novo visual, bem próximo com o SLE

Com um novo visual desenvolvido pela comunidade, o openSUSE Leap 15 traz muitos pacotes de comunidades construídos sobre um núcleo de fontes do [SUSE Linux Enterprise (SLE)][sle] 15, com os dois principais lançamentos sendo construídos pela primeira vez em paralelo desde o início. O openSUSE Leap 15 compartilha um núcleo comum com o SLE 15, que deve ser lançado nos próximos meses. A primeira versão do Leap foi a versão 42.1 e foi baseada no primeiro Service Pack (SP1) do SLE 12. Três anos depois, a versão corporativa do SUSE e a versão da comunidade do openSUSE agora estão alinhadas na versão 15 com uma nova base.

"Ter uma distribuição comunitária que compartilha um DNA comum com a empresa é a maneira inteligente de interagir com o ecossistema de código aberto"', disse Kai Dupke, usuário de longa data do openSUSE e gerente sênior de produto do SUSE Linux Enterprise 15. "'O Leap oferece grande flexibilidade e liberdade de escolha para desenvolvedores e usuários."

## Migração facilitada para o Enterprise

Conseqüentemente, pela primeira vez, o SUSE suportará a migração das instalações do servidor openSUSE Leap para o SUSE Linux Enterprise, o que torna mais fácil para os integradores de sistemas desenvolverem o código Leap e depois migrarem para uma versão corporativa para disponibilizar SLAs, certificação, implementação em massa e suporte estendido de longo termo.

"A atualização para um produto comercial pode ser complexa para os desenvolvedores que desejam migrar uma solução de uma distribuição Linux comunitária para uma distribuição enterprise", explica Dupke. "Com o Leap 15 SUSE e Linux Enterprise Server 15, essa jornada é facilitada. Sabemos que a comunidade é onde as inovações acontecem e os desenvolvedores da comunidade Leap agora podem facilmente ampliar esse escopo no Linux enterprise, se necessário. O Leap 15 está oferecendo a transição mais rápida e flexível para serviços corporativos, suporte e manutenção."

## OBS, OpenQA: melhor testado, mais seguro e mais aberto que outros

Usando o [Open Build Service][obs] e o [openQA][openqa], o openSUSE Leap se tornou a melhor e mais testada distribuição Linux, e é construído de forma diferente qualquer outra distribuição, usando um modelo de desenvolvimento muito mais seguro do que os concorrentes.

A distribuição da comunidade com sistema base corporativo é desenvolvida em cooperação com os desenvolvedores do SUSE usando ferramentas open source e openSUSE como o Open Build Service e openQA , que [executaram mais de um milhão de testes][million-test].

Uma comunidade vibrante de desenvolvedores, a disponibilidade das ferramentas de código aberto e o alinhamento da distribuição entre o Leap e o SLE facilitam a contribuição dos desenvolvedores para o Leap e impulsionam ainda mais as inovações tecnológicas e as soluções de código aberto.

## Todos os Padrões e Alguns Novos Serviços para Redes

Para todos os usuários existentes do Leap, atualizações contínuas para o Leap 15 estão disponíveis. Qualquer migração é recomendada para ocorrer nos próximos seis meses. Como nas versões anteriores, os administradores de sistema e pequenas empresas podem usar o Leap para hospedagem de servidores web e de e-mail ou para gerenciamento de rede com DHCP, DNS, NTP, Samba, NFS, LDAP e centenas de outros serviços.

Os serviços de compartilhamento de arquivos e nuvem incluem softwares como o [NextCloud][nextcloud] e até mesmo o aplicativo de groupware [Kopano][kopano] (antes conhecido como Zarafa) fazem parte dos repositórios oficiais do Leap 15.

## Novo instalador, particionador e alterado para o Firewalld

O Leap 15 melhora ainda mais uma das ferramentas mais poderosas do openSUSE, o YaST. Por exemplo, o subsistema particionador do Libstorage-ng foi reformulado, tornando-o mais poderoso e confiável e levando a facilidade de uso a um novo nível. O mesmo se aplica à mudança do SuSEfirewall2 para a ferramenta de gerenciamento de firewall amplamente usada, Firewalld, que oferece melhor integração com configurações de rede dinâmicas.

Administradores que precisam de implantações em massa, por exemplo em soluções em nuvem encontrará melhorias úteis no AutoYaST. Seus perfis contêm dados de instalação e configuração para simplificar instalações autônomas. A nova versão do AutoYaST se beneficia de perfis limpos, documentação estendida e agora suporta os novos recursos de particionamento do libstorage-ng.

## Imagens, Implantação e Hardware com Linode e Tuxedo

O lançamento público do Leap 15 não é apenas liberado como DVD e Network ISO: Linode é o fornecedor de hardware do TUXEDO Computers, que também têm imagens em nuvem do Leap. Enquanto o novíssimo InfinityBook Pro 13 da TUXEDO está imediatamente disponível com o Leap 15 pré-instalado e pronto para uso, o Linode tem o Leap disponível para todas as necessidades de infraestrutura. E há mais imagens em nuvem e provedores de hardware que fornecerão o Leap 15 nas próximas semanas, pré-instalados ou implantáveis.

## Atualizações Atômicas pelo Kubic: construção em blocos de para profissionais

Esta versão tem uma seleção do tipo de sistema, dando como opções uma função de servidor clássica e uma função de servidor transacional. Contribuído pelo projeto da plataforma em contêiner do openSUSE Kubic, essa função usa atualizações transacionais e um sistema de arquivos raiz somente para leitura para fornecer no Leap todos os benefícios de atualizações atômicas em vários casos de uso, incluindo hosts de contêiner, Internet das coisas (IoT). ), e as funções clássicas de servidor com potenciais aplicações futuras envolvendo também desktops.

## Construído para escalar

{% include image.html src="/files/2018/05/clear-748x1024.png" style="max-height: 400px;" %}

O openSUSE Leap também é perfeitamente adequado e preparado para uso como uma máquina virtual (VM) ou guest de contêiner, permitindo que os usuários profissionais executem serviços de rede com eficiência, independentemente de ser um único servidor ou um data center.

## Qualquer ambiente Desktop e Live Images estão disponíveis

Os usuários do openSUSE Leap podem escolher seu ambiente de desktop, configuração e seup. A versão do [GNOME][gnome] no Leap é a mesma usada no SLE 15, agora usando [Wayland][wayland] por padrão. O [GNOME Builder][gnome-builder] está disponível para o Leap pela primeira vez, permitindo fácil desenvolvimento para [GNOME Projects][gnome-projects]. O [KDE][kde] é a versão mais recente do Suporte a Longo Prazo do KDE Plasma 5.12, também estão disponíveis novos pacotes para o SLE 15 através do [PackageHub][packagehub], incluindo todas as ferramentas e aplicativos suportados pela comunidade. Leap oferece o várias [Live Images][live] para os desktops mencionados acima.

## Saúde e Ciência

A distribuição Leap suporta as comunidades de saúde, ciências, pesquisa e desenvolvimento com pacotes como o [GNU Health][gnu-health], que podem ajudar a facilitar a execução das operações de um hospital e a coleta de dados vitais do paciente e [QGIS][qgis], que permite aos pesquisadores criar, editar, visualizar, analisar e publicar informações geoespaciais.

## Plataformas

O Leap funciona em X86_64 e os cenários de implantação podem ser executados para físico, virtual, host, convidado e na nuvem. Suporte para outras arquiteturas como [ARM64][arm64] e [POWER][power] estão em desenvolvimento pela comunidade.

As atualizações de manutenção e segurança para a série Leap 15 devem durar pelo menos três anos. Os usuários devem atualizar para o mais novo Leap 15 Service Packs (SP) dentro de seis meses de cada versão do SP para receber atualizações. Atualizações do Service Pack são esperadas anualmente.

*Notícia adaptada da original publicada por [Aslan Ramos][aslan-ramos] na [*wiki* do openSUSE em Português][pt.opensuse.org].*

[sle]:                  https://www.suse.com/products/server/
[obs]:                  https://build.opensuse.org/
[openqa]:               https://openqa.opensuse.org/
[million-test]:         https://www.suse.com/c/celebrate-openqa-one-million-reasons-believe-testing/
[nextcloud]:            https://nextcloud.com/
[kopano]:               https://kopano.com/
[linode]:               https://www.linode.com/
[tuxedo]:               https://www.tuxedocomputers.com/
[kubic]:                https://en.opensuse.org/Kubic
[gnome]:                https://en.opensuse.org/GNOME
[wayland]:              https://wayland.freedesktop.org/
[gnome-builder]:        https://wiki.gnome.org/Apps/Builder
[gnome-projects]:       https://wiki.gnome.org/Projects
[kde]:                  https://en.opensuse.org/KDE
[packagehub]:           https://packagehub.suse.com/
[live]:                 https://download.opensuse.org/distribution/leap/15.0/live/
[gnu-health]:           http://health.gnu.org/
[qgis]:                 https://www.qgis.org/
[arm64]:                https://en.wikipedia.org/wiki/ARM_architecture
[power]:                https://en.wikipedia.org/wiki/Power_Architecture
[aslan-ramos]:          https://en.opensuse.org/User:Asramos
[pt.opensuse.org]:      https://pt.opensuse.org/openSUSE:Lancamento_versao_15
