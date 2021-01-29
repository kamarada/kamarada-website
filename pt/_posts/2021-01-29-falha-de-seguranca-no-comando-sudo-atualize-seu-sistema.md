---
date: '2021-01-29 01:10:00 UTC-3'
image: '/files/2021/01/hacker-access-granted.jpg'
layout: post
title: 'Falha de segurança no comando sudo: atualize seu sistema!'
---

{% include image.html src='/files/2021/01/hacker-access-granted.jpg' %}

Uma falha de segurança grave que afeta grande parte dos computadores com [Linux] foi divulgada nessa [terça 26][blog-qualys] pela empresa de auditoria de segurança [Qualys]. A falha envolve o comando **[sudo]**, presente em praticamente todas as instalações do Linux — inclusive do [openSUSE] e do [Linux Kamarada][kamarada-15.2]. A correção já foi disponibilizada pelas distribuições, que recomendam que os usuários instalem as últimas [atualizações][updates].

O utilitário de linha de comando **sudo** permite que usuários comuns do sistema executem comandos que normalmente só podem ser executados pelo administrador do sistema, que no Linux é chamado de _root_ ou **[superusuário][superuser]**. Daí vem o nome do comando **sudo**: _su "do"_ ("superusuário faz", em inglês). O administrador pode conceder permissões para que certos usuários (ou grupos de usuários) sejam capazes de executar certos comandos (ou qualquer comando) como se fossem o _root_ ou outro usuário. Para isso, o administrador deve editar o arquivo de configuração do **sudo**, que é o `/etc/sudoers`.

O _bug_ descoberto pela Qualys foi batizado de "Baron Samedit" e registrado no [CVE] (_Common Vulnerabilities and Exposures_, um banco de dados de falhas de segurança conhecidas) com o código [CVE-2021-3156]. Essa falha de segurança permite que um usuário comum mal-intencionado (ou um invasor que conseguisse acesso a uma conta de usuário comum) obtivesse o mesmo nível de permissões que o usuário _root_, mesmo que essa conta de usuário comum não tivesse sido previamente autorizada no arquivo `/etc/sudoers`.

Para os detalhes técnicos a respeito dessa falha de segurança, você pode conferir o [relatório técnico da Qualys][qualys-report] ou o [vídeo][qualys-video] a seguir, que mostra uma forma de explorar a falha para ganhar acesso ao usuário _root_ a partir de uma conta comum (relatório e vídeo ambos em inglês).

<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/504872555" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p></p>

Curiosamente, embora essa falha tenha sido identificada apenas agora, analisando o código-fonte do **sudo** em busca do trecho de código que a causava, identificou-se que esse código foi introduzido em julho de 2011 (_commit_ [8255ed69][github]). Ou seja, esse _bug_ passou 10 anos (espera-se) despercebido. Felizmente, já foi corrigido.

## Como corrigir essa falha?

Todas as maiores distribuições Linux já liberaram atualizações de segurança com correções (_patches_) que resolvem esse problema. Cabe aos usuários baixarem essas atualizações.

O Projeto openSUSE liberou atualizações para suas [duas distribuições: Leap e Tumbleweed][leap-vs-tumbleweed]. No caso do openSUSE Leap, receberam atualizações as versões 15.1 e 15.2.

Como o Linux Kamarada é baseado no openSUSE Leap, usuários do Linux Kamarada são, por tabela, usuários do openSUSE Leap e recebem essas mesmas atualizações.

Se você usa uma dessas distribuições:

- openSUSE Leap (ou Linux Kamarada) 15.1
- openSUSE Leap (ou Linux Kamarada) 15.2
- openSUSE Tumbleweed

Veja como obter atualizações no texto:

- [Como obter atualizações para o Linux openSUSE][updates]

Se você usa uma versão do openSUSE Leap que já foi descontinuada e já não recebe mais suporte (por exemplo, a 15.0), a orientação passada na [lista de discussão do openSUSE][users-list] foi baixar o código-fonte do pacote do **sudo**, compilar e instalar manualmente. Se esse é o seu caso, consulte a lista de discussão (em inglês) para mais informações.

Outra opção se você usa o openSUSE Leap 15.0 é atualizar para a versão 15.1 e na sequência para a 15.2, já que [o suporte para a versão 15.1 se encerrará agora em janeiro][security-list]. Se quiser instruções de como fazer isso, consulte os textos:

- [Como atualizar do openSUSE Leap 15.0 para o 15.1][upgrade-1]
- [Linux Kamarada e openSUSE Leap: como atualizar da versão 15.1 para a 15.2][upgrade-2]

## Como saber se estou vulnerável?

Os desenvolvedores do **sudo** também emitiram um [alerta][sudo-alert] com informações sobre a falha. Eles sugerem um teste simples para saber se a versão do **sudo** que você está usando está sujeita a essa falha. Abra uma janela do terminal e execute o comando a seguir:

```
$ sudoedit -s '\' `perl -e 'print "A" x 65536'`
```

Antes da correção, o comando deve informar que ocorreu uma [falha de segmentação][segfault].

Se você já está usando a versão corrigida, o comando deve mostrar uma mensagem de erro.

No meu teste, após instalar a correção, a mensagem que apareceu foi:

```
sudoedit: invalid mode flags from sudo front end: 0x20002
sudoedit: não foi possível inicializar plug-in de política
```

No caso do openSUSE e do Linux Kamarada, distribuições que usam o formato de empacotamento [RPM], você também pode verificar a lista de mudanças (_changelog_) do pacote **[sudo][softwareoo]**. Se a atualização foi instalada, ela deve aparecer, como no exemplo abaixo:

```
$ rpm -q --changelog sudo | head
* sáb jan 23 2021 Simon Lees <sflees@suse.de>
- Fix Heap-based buffer overflow in Sudo [bsc#1181090,CVE-2021-3156]
  * sudo-CVE-2021-3156.patch
```

## Referências

Se quiser saber mais sobre a falha de segurança do **sudo** código CVE-2021-3156 codenome "Baron Samedit", você pode dar uma conferida nos textos que consultei para escrever este:

- Sobre a falha, em português:
  - [Vulnerabilidade com mais de dez anos de idade é finalmente corrigida no Linux - Canaltech][canaltech]
  - [Bug de 10 anos permite que usuários Linux obtenham acesso nível root - SempreUpdate][sempreupdate]
- Sobre a falha, em inglês:
  - [Decade-old bug in Linux world's sudo can be abused by any logged-in user to gain root privileges - The Register][theregister]
  - [10-year-old Sudo bug lets Linux users gain root-level access - ZDNet][zdnet]
- Informações específicas para o openSUSE, em inglês:
  - [sudo \*\*BUG\*\* (Mother of All sudo BUGS) -- rebuild if you are using old release - openSUSE Users - openSUSE Mailing Lists][users-list]
  - [CVE-2021-3156 (sudo) vs Leap 15.1 - openSUSE Factory - openSUSE Mailing Lists][factory-list]
  - [CVE-2021-3156 - SUSE][suse-cve]
  - [Bug 1181090 &ndash; VUL-0: CVE-2021-3156: sudo: Heap-based buffer overflow in Sudo &quot;Baron Samedit&quot; - SUSE Bugzilla][bugzilla]

[linux]:                https://www.vivaolinux.com.br/linux/
[blog-qualys]:          https://blog.qualys.com/vulnerabilities-research/2021/01/26/cve-2021-3156-heap-based-buffer-overflow-in-sudo-baron-samedit
[qualys]:               https://www.qualys.com/company/
[sudo]:                 https://man7.org/linux/man-pages/man8/sudo.8.html
[opensuse]:             https://www.opensuse.org/
[kamarada-15.2]:        {% post_url pt/2020-09-11-linux-kamarada-15.2-venha-para-o-lado-verde-elegante-e-moderno-da-forca %}
[updates]:              {% post_url pt/2019-05-14-como-obter-atualizacoes-para-o-linux-opensuse %}
[superuser]:            https://pt.wikipedia.org/wiki/Superusu%C3%A1rio
[cve]:                  https://cve.mitre.org/index.html
[cve-2021-3156]:        https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3156
[qualys-report]:        https://www.qualys.com/2021/01/26/cve-2021-3156/baron-samedit-heap-based-overflow-sudo.txt
[qualys-video]:         https://vimeo.com/504872555
[github]:               https://github.com/sudo-project/sudo/commit/8255ed69
[leap-vs-tumbleweed]:   {% post_url pt/2020-12-06-opensuse-leap-e-opensuse-tumbleweed-qual-e-a-diferenca %}
[users-list]:           https://lists.opensuse.org/archives/list/users@lists.opensuse.org/thread/2LKJJVNGGGMLLF4242KK6HCCAQTTWPQS/
[security-list]:        https://lists.opensuse.org/opensuse-security-announce/2020-11/msg00040.html
[upgrade-1]:            {% post_url pt/2019-05-26-como-atualizar-do-opensuse-leap-150-para-o-151 %}
[upgrade-2]:            {% post_url pt/2020-08-31-linux-kamarada-e-opensuse-leap-como-atualizar-da-versao-151-para-a-152 %}
[sudo-alert]:           https://www.sudo.ws/alerts/unescape_overflow.html
[segfault]:             https://pt.wikipedia.org/wiki/Falha_de_segmenta%C3%A7%C3%A3o
[rpm]:                  https://pt.wikipedia.org/wiki/RPM_(software)
[softwareoo]:           https://software.opensuse.org/package/sudo
[canaltech]:            https://canaltech.com.br/seguranca/vulnerabilidade-com-mais-de-dez-anos-de-idade-e-finalmente-corrigida-no-linux-178118/
[sempreupdate]:         https://sempreupdate.com.br/bug-de-10-anos-permite-que-usuarios-linux-obtenham-acesso-nivel-root/
[theregister]:          https://www.theregister.com/2021/01/26/qualys_sudo_bug/
[zdnet]:                https://www.zdnet.com/article/10-years-old-sudo-bug-lets-linux-users-gain-root-level-access/
[factory-list]:         https://lists.opensuse.org/archives/list/factory@lists.opensuse.org/thread/SIYRY4CB5OM4W3DM7GPNUPGZXW6EOPQC/
[suse-cve]:             https://www.suse.com/security/cve/CVE-2021-3156/
[bugzilla]:             https://bugzilla.suse.com/show_bug.cgi?id=1181090
