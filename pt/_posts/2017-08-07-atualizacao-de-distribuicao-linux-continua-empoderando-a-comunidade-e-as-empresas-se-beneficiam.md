---
date: 2017-08-07 12:00:00
image: '/files/2015/11/Leap-green.png'
layout: post
published: true
nickname: 'opensuse-42.3-release-announcement'
title: 'Atualização de distribuição Linux continua empoderando a comunidade, e as empresas se beneficiam'
excerpt: 'O Projeto openSUSE lançou hoje o openSUSE Leap 42.3 trazendo a distribuição Linux comunitária ainda mais alinhada com sua base compartilhada do SUSE Linux Enterprise (SLE) 12 Service Pack 3. Os pacotes compartilhados entre as distribuições Leap e SLE dão aos usuários, administradores de sistemas e desenvolvedores Linux experientes ainda mais motivos para usar a mais nova distribuição do camaleão.'
---

*Essa é uma tradução não oficial da notícia originalmente publicada em 26 de julho por [Douglas DeMaio][douglas-demaio] no site [news.opensuse.org][news.opensuse.org].*

{% include image.html src="/files/2015/11/Leap-green.png" style="max-width: 150px;" %}

## openSUSE Leap 42.3 provê atualização suave para *desktops* e servidores

O [Projeto openSUSE][opensuse] lançou hoje o [openSUSE Leap 42.3][opensuse-leap] trazendo a distribuição Linux comunitária ainda mais alinhada com sua base compartilhada do [SUSE Linux Enterprise][sle] (SLE) 12 Service Pack 3.

Os pacotes compartilhados entre as distribuições Leap e SLE dão aos usuários, administradores de sistemas e desenvolvedores Linux experientes ainda mais motivos para usar a mais nova distribuição do camaleão.

Aconselha-se aos usuários realizar a atualização para a Leap 42.3, que deve ocorrer sem problemas. A versão 42.2 terá sua manutenção encerrada em 6 meses.

"Evitando grandes atualizações de versões na base do sistema assim como nos ambientes de trabalho, a atualização para a Leap 42.3 não é uma aventura", disse Ludwig Nussel, gerente de lançamentos do openSUSE Leap.

A versão 42.3 da distribuição Leap provê aos adotantes um sistema operacional para servidores confiável para implantar serviços de TI em ambientes físicos, virtuais ou na nuvem.

A terceira edição da série 42 da Leap tem mais de 10.000 pacotes e oferece aos usuários que se preocupam com estabilidade uma versão que atualiza e habilita *hardware*. Essa versão se baseia no mesmo *kernel* Linux 4.4 com suporte estendido (em inglês, LTS - *Long Term Support*) encontrado na edição anterior da Leap.

Leap 42.3 continua a usar a versão com suporte estendido do KDE 5.8 como ambiente de trabalho padrão, enquanto oferece também o GNOME 3.20, o mesmo usado pelo SUSE Linux Enterprise. Uma variedade de ambientes de trabalho adicionais é disponibilizada pelo instalador por meio da tela de seleção de ambiente de trabalho, que foi redesenhada.

"Leap 42.3 é o resultado de muitos anos de esforço integrando a base de código empresarial da SUSE com o trabalho de alta qualidade excepcional da comunidade openSUSE", disse Richard Brown, gerente do Projeto openSUSE. "Eu estou excepcionalmente orgulhoso do que o Projeto openSUSE alcançou com a Leap 42.3 e espero que nossos usuários apreciem essa abordagem estável, porém inovadora, para o Linux comunitário, em que se pode realmente confiar para trabalhar."

Essa versão do openSUSE Leap é bem apropriada para servidores graças ao seu perfil de instalação em servidor e seu instalador em modo texto cheio de recursos, que inclui todas as opções do YaST sem um ambiente gráfico.

Administradores de sistema vão adorar a solução de *backup* Borg, que agora pode ser usada com mais facilidade do que nunca graças ao Borgmatic, *script* que encapsula o Borg e automaticamente faz *backup* dos seus dados com um serviço do systemd. Administradores de sistema também vão gostar da integração do System Security Services Daemon do Samba com o Active Directory.

Leap, e o Projeto openSUSE, provêm o conjunto de ferramentas DevOps que os desenvolvedores precisam para serem bem sucedidos. Microsserviços com Leap oferecem escalabilidade e entrega contínua por meio da disponibilidade do Docker e Kubernetes assim como fácil configuração com Salt, Ansible e outras tecnologias do openSUSE. A nova integração do AutoYaST com SaltStack e outros sistemas de gerenciamento de configuração pode cuidar da instalação do sistema (particionamento, configuração da rede, etc.) e então delegar a configuração do sistema para uma dessas populares ferramentas externas.

Desenvolvedores e empresas podem se beneficiar do extensivo conjunto de bibliotecas básicas encontradas na Leap 42.3 para criar ou melhorar *softwares* para uso empresarial. Uma vez que Leap e SLE compartilham uma base comum, o desenvolvimento com pacotes na Leap para uso em produção no SLE nunca foi tão fácil. Além disso, integradores de sistemas podem desenvolver na Leap com a possibilidade de ter seu trabalho em futuras versões do SLE.

Leap provê as ferramentas, linguagens e bibliotecas para o desenvolvimento de *software* e engenharia sustentáveis: versões prontas para uso empresarial (*enterprise-ready*) do Python, Ruby, Perl, Go, Rust, Haskell e PHP estão todas disponíveis na Leap.

Atualizações para o *kernel* e a pilha gráfica (*graphics stack*) habilitam mais *hardware* e provêm melhorias na estabilidade e desempenho.

## O openSUSE Leap 42.3 é...

<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/status/meeting-participant.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Ainda mais empresarial

Depois de basear o openSUSE Leap no SLE (SUSE Linux Enterprise) e adicionar mais código fonte do SLE 12 à Leap 42.2, a Leap 42.3 adiciona ainda mais pacotes do SLE 12 SP 3 e sincroniza vários pacotes comuns. A base de código compartilhada permite ao openSUSE Leap 42.3 receber melhor manutenção e correções de falhas (*bugs*) tanto da comunidade openSUSE quanto dos engenheiros da SUSE.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/network-server.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Pronto para servidores

O instalador do openSUSE Leap 42.3 oferece uma opção de instalação em servidor. Sem interface gráfica, um servidor com Leap está pronto para fazer o que você precisar. Algo simples como servir um *site* ou *e-mail* é mais fácil do que nunca, assim como projetos complexos usando tecnologias de virtualização ou contêiner (*container*). Por exemplo, usuários procurando por um serviço parecido com o Exchange podem se beneficiar da versão mais recente da plataforma de colaboração Kopano, que inclui suporte para Thunderbird, Outlook e clientes de e-mail móveis.

Também é bom lembrar que a Leap e todas as outras distribuições do openSUSE e do SLE oferecem suporte a um completo instalador em modo texto, que oferece exatamente as mesmas funcionalidades que o instalador gráfico. O instalador também é capaz de realizar instalações remotamente usando VNC ou SSH, permitindo a você configurar seu servidor com openSUSE Leap sem precisar estar perto dele.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/start-here-branding.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Para jogos

Jogos no Linux estão cada vez mais populares. O openSUSE Leap 42.3 provê um sistema estável para rodar a popular plataforma Steam. Para rodar jogos ainda não disponíveis no Linux, Wine e PlayOnLinux também estão incluídos nessa versão.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/favorites.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Para mentes criativas e profissionais

Liberte a sua criatividade com aplicativos de desenho como o FreeCAD para impressão em 3D ou gPhoto para edição de imagens. Cientistas podem usar o Avogadro para química computacional, modelagem molecular, bioinformática e mais. Profissionais de saúde também podem escolher o GNU Health para cuidar do paciente confiando na segurança e manutenção fornecida com a Leap 42.3.

{% endmarkdown %}
</div>
</div>

## Baixe a Leap!

Veja você mesmo porque o openSUSE Leap é uma distribuição comunitária-empresarial que vale a pena adotar. *Downloads* do openSUSE Leap 42.3 podem ser encontrados em [software.opensuse.org][software.opensuse.org]. Recomendamos verificar as [Notas de Lançamento][release-notes] antes de atualizar ou instalar. Usuários que no momento utilizam o openSUSE Leap 42.2 podem [atualizar para o openSUSE Leap 42.3 via instruções neste *link*][upgrade].

## Obrigado!

O openSUSE Leap 42.3 representa o esforço conjunto de milhares de desenvolvedores que participam das nossas distribuições e projetos de código aberto (*open source*). "Obrigado" a todos os colaboradores, dentro e fora do Projeto openSUSE. Todo o seu trabalho duro e contribuições são apreciados pela comunidade do código aberto e usuários ao redor do mundo. Acreditamos que Leap é a distribuição Linux ideal para desenvolvedores, administradores de sistemas e usuários. Esperamos que você se divirta bastante usando a Leap, e aguardamos ansiosamente contar com você no lançamento da próxima versão ou no [Tumbleweed][tumbleweed].

## Sobre o Projeto openSUSE

O Projeto openSUSE é uma comunidade ao redor do mundo que promove o uso do Linux em todos os lugares. Ele cria duas das melhores distribuições Linux do mundo: a Tumbleweed, atualizada continuamente (*rolling-release*), e a Leap, distribuição híbrida de empresa e comunidade. O openSUSE trabalha continuamente de maneira conjunta, aberta, transparente e amigável como parte da comunidade internacional de *Software* Livre e Aberto (*Free and Open Source Software* - FOSS). O projeto é comandado por sua comunidade e depende das contribuições de pessoas, que trabalham como testadores, escritores, tradutores, especialistas em usabilidade, artistas, embaixadores ou desenvolvedores. O projeto abrange uma ampla variedade de tecnologias, pessoas com diferentes níveis de conhecimentos, que falam diferentes línguas e possuem diversas raízes culturais. Saiba mais sobre o Projeto openSUSE em [opensuse.org][opensuse].

{% include image.html src="/files/2017/07/leap-release-image-150x150.png" %}

[opensuse]:                 https://www.opensuse.org/
[opensuse-leap]:            https://software.opensuse.org/distributions/leap
[sle]:                      https://www.suse.com/pt-br/products/server/
[software.opensuse.org]:    https://software.opensuse.org/distributions/leap
[release-notes]:            https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/42.3/RELEASE-NOTES.pt_BR.html
[upgrade]:                  https://en.opensuse.org/Upgrade
[tumbleweed]:               https://pt.opensuse.org/Portal:Tumbleweed
[douglas-demaio]:           https://news.opensuse.org/author/ddemaio/
[news.opensuse.org]:        https://news.opensuse.org/2017/07/26/refresh-of-linux-distribution-continues-leveraging-community-enterprise-benefits/
