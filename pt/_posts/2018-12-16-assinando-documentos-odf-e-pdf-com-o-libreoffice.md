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

O LibreOffice utiliza a infraestrutura de certificados digitais do navegador [Mozilla Firefox][firefox]. Portanto, antes de assinar documentos com o LibreOffice, você deve ter o Firefox instalado (normalmente já vem na distribuição) e configurado para usar seu certificado digital. Esses dois *posts* mostram como fazer essa configuração:

- [Como instalar certificados de segurança no Linux][how-to-install-certificates]
- [Configurando certificado digital no Linux openSUSE][how-to-token]

## Assinando um documento ODF

O formato de documento aberto (do inglês *Open Document Format* - [ODF]) é o formato de arquivo padrão do LibreOffice. Documentos ODF são identificados pelas extensões:

- `.odt` para documentos de texto (***t**ext*), abertos com o [Writer];
- `.ods` para planilhas (***s**preadsheets*), abertas com o [Calc];
- `.odp` para apresentações de *slides* (***p**resentations*), abertas com o [Impress];
- `.odg` para desenhos vetoriais (***g**raphic*), abertos com o [Draw];
- `.odb` para bases de dados (*data**b**ase*), abertas com o [Base]; e
- `.odf` para equações matemáticas (***f**ormula*), abertas com o [Math].

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

Para verificar a assinatura, você pode clicar duas vezes no ícone **Assinatura digital**, na barra de estado, ou clicar no botão **Mostrar assinaturas**, na notificação.

É aberta a caixa de diálogo **Assinaturas digitais**, na qual você pode selecionar uma assinatura e clicar em **Exibir certificado** para ver mais informações sobre o certificado:

{% include image.html src="/files/2018/12/libreoffice-signing-07.jpg" %}

A mensagem **Este certificado foi validado** indica que o LibreOffice conseguiu estabelecer o **Caminho da certificação** até o certificado de uma autoridade certificadora conhecida:

{% include image.html src="/files/2018/12/libreoffice-signing-08.jpg" %}

Isso é o mesmo que o navegador faz quando você acessa um *site* HTTPS e ele exibe o cadeado verde. Explicamos hierarquia de certificados em [outro *post*][how-to-install-certificates].

## Modificando um documento ODF assinado

Note que você até pode modificar um documento ODF assinado, mas na hora de salvar o LibreOffice avisa que removerá todas as assinaturas que o documento tinha:

{% include image.html src="/files/2018/12/libreoffice-signing-09.jpg" %}

Será necessário assinar o documento novamente.

Com isso, quem abrir um documento que foi assinado e depois modificado pode abrir a caixa de diálogo **Assinaturas digitais** e verificar que ele foi assinado em outra data e hora, possivelmente por outra pessoa.

## Exportando um documento como um PDF assinado

O formato de documento portável (*Portable Document Format* - [PDF]) foi desenvolvido pela [Adobe] para representar documentos de forma independente do aplicativo, do *hardware* e do sistema operacional. Era no início um formato proprietário, que depois foi aberto. É comum compartilhar documentos como PDF na Internet, porque esse formato previne a perda de formatação.

Para exportar um documento ODF como um PDF assinado, vá no menu **Arquivo**, **Exportar como** e clique em **Exportar como PDF**:

{% include image.html src="/files/2018/12/libreoffice-signing-10.jpg" %}

Abra a guia **Assinaturas digitais** e em **Certificado** clique em **Selecionar**:

{% include image.html src="/files/2018/12/libreoffice-signing-11.jpg" %}

Na caixa de diálogo **Selecionar certificado**, selecione o certificado e clique em **Assinar**.

Por fim, clique em **Exportar** e salve o documento PDF.

## Verificando a assinatura de um documento PDF

Você pode abrir documentos PDF no LibreOffice usando o aplicativo Draw.

Quando você abre um documento PDF assinado, o LibreOffice avisa que o documento está assinado, além de exibir o ícone **Assinatura digital** na barra de estado (da mesma forma como ele faz com documentos ODF):

{% include image.html src="/files/2018/12/libreoffice-signing-12.jpg" %}

Para verificar a assinatura, você pode clicar duas vezes no ícone **Assinatura digital**, na barra de estado, ou clicar no botão **Mostrar assinaturas**, na notificação.

## Assinando um documento PDF qualquer

O LibreOffice consegue assinar documentos PDF criados não só pela própria suíte, como também quaisquer documentos PDF já existentes, ainda que criados por outros aplicativos.

Você pode iniciar a assinatura de um documento PDF a partir de qualquer aplicativo da suíte LibreOffice. Para isso, vá no menu **Arquivo**, **Assinaturas digitais**, clique em **Assinar um PDF já existente** e abra o documento PDF que deve ser assinado.

O documento PDF é aberto no LibreOffice Draw no modo somente leitura:

{% include image.html src="/files/2018/12/libreoffice-signing-13.jpg" %}

Clique em **Assinar documento**. Aparece a caixa de diálogo **Assinaturas digitais**.

O resto do procedimento é semelhante ao da assinatura de documentos ODF.

## Referências

- [Sobre assinaturas digitais - LibreOffice Help][libreoffice-help-1]
- [Assinar com assinaturas digitais - LibreOffice Help][libreoffice-help-2]
- [Signing existing PDF files in LibreOffice][vmiklos]

[how-to-token]:                 {%post_url pt/2018-04-16-configurando-certificado-digital-no-linux-opensuse %}
[libreoffice]:                  https://pt-br.libreoffice.org/
[odf]:                          https://pt.wikipedia.org/wiki/OpenDocument
[pdf]:                          https://pt.wikipedia.org/wiki/Portable_Document_Format
[firefox]:                      https://www.mozilla.org/pt-BR/firefox/
[how-to-install-certificates]:  {%post_url pt/2017-08-29-como-instalar-certificados-de-seguranca-no-linux %}
[writer]:                       https://pt-br.libreoffice.org/descubra/writer/
[calc]:                         https://pt-br.libreoffice.org/descubra/calc/
[impress]:                      https://pt-br.libreoffice.org/descubra/impress/
[draw]:                         https://pt-br.libreoffice.org/descubra/draw/
[base]:                         https://pt-br.libreoffice.org/descubra/base/
[math]:                         https://pt-br.libreoffice.org/descubra/math/
[adobe]:                        https://www.adobe.com/br/
[libreoffice-help-1]:           https://help.libreoffice.org/Common/About_Digital_Signatures/pt-BR
[libreoffice-help-2]:           https://help.libreoffice.org/Common/Applying_Digital_Signatures/pt-BR
[vmiklos]:                      https://vmiklos.hu/blog/pdf-sign.html
