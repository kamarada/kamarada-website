---
date: 2018-12-16 20:00:00 GMT-2
image: '/files/2018/12/libreoffice-signing.png'
layout: post
published: true
nickname: 'libreoffice-signing'
title: 'Assinando documentos ODF e PDF com o LibreOffice'
excerpt: 'Se você possui um certificado digital, pode assinar documentos antes de enviá-los para dar mais segurança a quem os recebe. Nesse post, você verá como fazer isso com a suíte de escritório LibreOffice, que é capaz de assinar não só os documentos ODF criados na própria suíte, como documentos PDF quaisquer (mesmo os criados fora da suíte).'
---

{% include image.html src="/files/2018/12/libreoffice-signing.png" %}

Se você possui um [certificado digital][how-to-token], pode assinar documentos antes de enviá-los para dar mais segurança a quem os recebe. Nesse *post*, você verá como fazer isso com a suíte de escritório [LibreOffice], que é capaz de assinar não só os documentos [ODF] criados na própria suíte, como documentos [PDF] quaisquer (mesmo os criados fora da suíte).

{% capture atualizacao_2020 %}
O *post* foi revisado para se aproximar da [versão em inglês]({% post_url en/2020-03-13-signing-odf-and-pdf-documents-with-libreoffice %}), mais recente. Essa nova versão menciona o [Linux Kamarada 15.1]({% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}) e mostra como configurar o LibreOffice para usar os certificados do Chromium.
{% endcapture %}
{% include update.html date="13/03/2020" message=atualizacao_2020 %}

Embora seja capaz de assinar documentos, o LibreOffice não possui sua própria infraestrutura de assinatura. Em vez disso, ele usa a infraestrutura do navegador para assinar documentos.

Por padrão, o LibreOffice procura por certificados e mídias criptográficas na configuração do [Mozilla Firefox][firefox]. Portanto, se você usa o Firefox, precisa configurá-lo para usar seu certificado digital antes de assinar documentos com o LibreOffice. Esses _posts_ podem te ajudar:

- [Como instalar certificados de segurança no Linux][how-to-install-certificates]
- [Configurando certificado digital no Linux openSUSE][how-to-token]

O [Linux Kamarada 15.1][kamarada-15.1] traz o [Chromium] como navegador padrão. Se você usa o Chromium (ou um navegador baseado no Chromium, como [Google Chrome][chrome], [Opera], [Vivaldi] ou [Brave]), é possível configurar o LibreOffice para usá-lo em vez do Firefox. Mas, também nesse caso, você precisa configurar seu navegador primeiro:

- [Configurando certificado digital no navegador Google Chrome / Chromium][chrome-token]

Depois disso, veja no final deste _post_ como configurar o LibreOffice para usar o Chromium.

Todo mundo na mesma página (_tokens_ e navegadores configurados), vamos para o LibreOffice!

## Assinando um documento ODF

O formato de documento aberto (do inglês *Open Document Format* - [ODF]) é o formato de arquivo padrão do LibreOffice. Documentos ODF são identificados pelas extensões:

- `.odt` para documentos de texto (_**t**ext_), abertos com o [Writer];
- `.ods` para planilhas (_**s**preadsheets_), abertas com o [Calc];
- `.odp` para apresentações de _slides_ (_**p**resentations_), abertas com o [Impress];
- `.odg` para desenhos vetoriais (_**g**raphic_), abertos com o [Draw];
- `.odb` para bases de dados (_data**b**ase_), abertas com o [Base]; e
- `.odf` para equações matemáticas (_**f**ormula_), abertas com o [Math].

A seguir, vamos ver como assinar um documento de texto (extensão `.odt`) no LibreOffice Writer, mas os passos são os mesmos para qualquer aplicativo da suíte LibreOffice.

Vá no menu **Arquivo**, **Assinaturas digitais** e clique em **Assinaturas digitais**:

{% include image.html src="/files/2018/12/libreoffice-signing-01.jpg" %}

Caso o documento ainda não esteja salvo, o LibreOffice alerta que é necessário salvar o documento para que ele possa ser assinado e pergunta se deseja salvar o documento. Clique em **Sim** e salve o documento:

{% include image.html src="/files/2018/12/libreoffice-signing-02.jpg" %}

Na caixa de diálogo **Assinaturas digitais**, clique em **Assinar documento**:

{% include image.html src="/files/2018/12/libreoffice-signing-03.jpg" %}

O LibreOffice solicita a senha PIN do *token*. Informe-a e clique em OK.

Na caixa de diálogo **Selecionar certificado**, selecione o certificado e clique em **Assinar**:

{% include image.html src="/files/2018/12/libreoffice-signing-04.jpg" %}

De volta à caixa de diálogo **Assinaturas digitais**, note que ela mostra a assinatura:

{% include image.html src="/files/2018/12/libreoffice-signing-05.jpg" %}

Clique em **Fechar**.

## Verificando a assinatura de um documento ODF

Quando você abre um documento ODF assinado, o LibreOffice avisa que o documento está assinado, além de exibir o ícone **Assinatura digital** na barra de estado:

{% include image.html src="/files/2018/12/libreoffice-signing-06.jpg" %}

Com isso, você sabe que está vendo o documento original: ele foi assinado e depois da assinatura não foi mais modificado.

Para verificar a assinatura, você pode clicar duas vezes no ícone **Assinatura digital**, na barra de estado, ou clicar no botão **Mostrar assinaturas**, na notificação.

É aberta a caixa de diálogo **Assinaturas digitais**, na qual você pode selecionar uma assinatura e clicar em **Exibir certificado** para ver mais informações sobre o certificado:

{% include image.html src="/files/2018/12/libreoffice-signing-07.jpg" %}

A mensagem **Este certificado foi validado** indica que o LibreOffice conseguiu estabelecer o **Caminho da certificação** até o certificado de uma autoridade certificadora conhecida:

{% include image.html src="/files/2018/12/libreoffice-signing-08.jpg" %}

Isso é o mesmo que o navegador faz quando você acessa um *site* HTTPS e ele exibe o cadeado verde. Explicamos hierarquia de certificados em [outro *post*][how-to-install-certificates].

## Modificando um documento ODF assinado

Você até pode modificar um documento ODF assinado, mas na hora de salvar o LibreOffice avisa que as assinaturas que o documento tinha não são mais válidas e serão removidas:

{% include image.html src="/files/2018/12/libreoffice-signing-09.jpg" %}

Se quiser que o documento continue assinado, você terá que assiná-lo novamente depois de salvar.

Com isso, quem teve acesso à versão anterior do documento pode verificar sua assinatura digital (abrindo a caixa de diálogo **Assinaturas digitais**) e perceber que ele foi assinado novamente em outra data e hora, possivelmente por outra pessoa.

## Exportando um documento como um PDF assinado

O formato de documento portável (*Portable Document Format* - [PDF]) foi desenvolvido pela [Adobe] para representar documentos de forma independente do aplicativo, do *hardware* e do sistema operacional. Era no início um formato proprietário, que depois foi aberto. É comum compartilhar documentos como PDF na Internet, porque esse formato previne a perda de formatação.

Para exportar um documento ODF (que não precisa ter sido previamente assinado) como um PDF assinado, vá no menu **Arquivo**, **Exportar como** e clique em **Exportar como PDF**:

{% include image.html src="/files/2018/12/libreoffice-signing-10.jpg" %}

Abra a guia **Assinaturas digitais** e em **Certificado** clique em **Selecionar**:

{% include image.html src="/files/2018/12/libreoffice-signing-11.jpg" %}

Na caixa de diálogo **Selecionar certificado**, selecione o certificado e clique em **Assinar**.

Por fim, clique em **Exportar** e salve o documento PDF.

## Verificando a assinatura de um documento PDF

Você pode abrir documentos PDF no LibreOffice usando o aplicativo Draw.

Quando você abre um documento PDF assinado, o LibreOffice avisa que o documento está assinado, além de exibir o ícone **Assinatura digital** na barra de estado (da mesma forma como ele faz com documentos ODF assinados):

{% include image.html src="/files/2018/12/libreoffice-signing-12.jpg" %}

Para verificar a assinatura, você pode clicar duas vezes no ícone **Assinatura digital**, na barra de estado, ou clicar no botão **Mostrar assinaturas**, na notificação.

## Assinando um documento PDF qualquer

O LibreOffice consegue assinar documentos PDF criados não só pela própria suíte, como também quaisquer documentos PDF já existentes, ainda que criados por outros aplicativos.

Você pode iniciar a assinatura de um documento PDF a partir de qualquer aplicativo da suíte LibreOffice. Para isso, vá no menu **Arquivo**, **Assinaturas digitais**, clique em **Assinar um PDF já existente** e abra o documento PDF que deve ser assinado.

O documento PDF é aberto no LibreOffice Draw no modo somente leitura:

{% include image.html src="/files/2018/12/libreoffice-signing-13.jpg" %}

Clique em **Assinar documento**. Aparece a caixa de diálogo **Assinaturas digitais**. A partir dela, você pode assinar o documento PDF da mesma forma como assinaria um documento ODF.

## Configurando o LibreOffice para usar os certificados do Chromium

Se você usa o navegador Chromium, não precisa instalar e configurar o Firefox para assinar documentos com o LibreOffice: você pode configurar o LibreOffice para usar os certificados do Chromium.

Para fazer isso, abra o menu **Ferramentas** e clique em **Opções**.

Na árvore de opções à esquerda, expanda **LibreOffice** e selecione **Segurança**:

{% include image.html src="/files/2020/03/libreoffice-cert-chrome-01-pt.jpg" %}

À direita, em **Caminho do certificado**, clique no botão **Certificado**.

Na caixa de diálogo **Caminho do certificado**, clique em **Adicionar**:

{% include image.html src="/files/2020/03/libreoffice-cert-chrome-02-pt.jpg" %}

O Chromium armazena suas configurações de certificados em `~/.pki/nssdb/`.

Na caixa de diálogo **Selecione o caminho**, pressione **Ctrl + L** para informar manualmente a localização, digite `~/.pki/nssdb/` e clique em **OK**:

{% include image.html src="/files/2020/03/libreoffice-cert-chrome-03-pt.jpg" %}

De volta à caixa de diálogo **Caminho do certificado**, clique em **OK** para fechá-la:

{% include image.html src="/files/2020/03/libreoffice-cert-chrome-04-pt.jpg" %}

De volta à caixa de diálogo **Opções**, clique em **OK** para fechá-la.

Reinicie o LibreOffice e faça bom proveito!

## Referências

- [Assinar com assinaturas digitais - LibreOffice Help][libreoffice-help-1]
- [Assinaturas digitais - LibreOffice Help][libreoffice-help-2]
- [Sobre assinaturas digitais - LibreOffice Help][libreoffice-help-3]
- [Signing existing PDF files in LibreOffice][vmiklos]
- [firefox - How do I make a digital certificate available to LibreOffice Writer for digital signatures? - Ask Ubuntu][askubuntu]

[how-to-token]:                 {% post_url pt/2018-04-16-configurando-certificado-digital-no-linux-opensuse %}
[libreoffice]:                  https://pt-br.libreoffice.org/
[odf]:                          https://pt.wikipedia.org/wiki/OpenDocument
[pdf]:                          https://pt.wikipedia.org/wiki/Portable_Document_Format
[firefox]:                      https://www.mozilla.org/pt-BR/firefox/
[how-to-install-certificates]:  {% post_url pt/2017-08-29-como-instalar-certificados-de-seguranca-no-linux %}
[kamarada-15.1]:                {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[chromium]:                     https://www.chromium.org/
[chrome]:                       https://www.google.com/chrome/
[opera]:                        https://www.opera.com/pt-br
[vivaldi]:                      https://vivaldi.com/pt-br/
[brave]:                        https://brave.com/
[chrome-token]:                 {% post_url pt/2019-09-26-configurando-certificado-digital-no-navegador-google-chrome-chromium %}
[writer]:                       https://pt-br.libreoffice.org/descubra/writer/
[calc]:                         https://pt-br.libreoffice.org/descubra/calc/
[impress]:                      https://pt-br.libreoffice.org/descubra/impress/
[draw]:                         https://pt-br.libreoffice.org/descubra/draw/
[base]:                         https://pt-br.libreoffice.org/descubra/base/
[math]:                         https://pt-br.libreoffice.org/descubra/math/
[adobe]:                        https://www.adobe.com/br/
[libreoffice-help-1]:           https://help.libreoffice.org/Common/Applying_Digital_Signatures/pt-BR
[libreoffice-help-2]:           https://help.libreoffice.org/Common/Digital_Signatures/pt-BR
[libreoffice-help-3]:           https://help.libreoffice.org/Common/About_Digital_Signatures/pt-BR
[vmiklos]:                      https://vmiklos.hu/blog/pdf-sign.html
[askubuntu]:                    https://askubuntu.com/a/1212197/560233
