---
date: 2018-03-16 01:20:00 -0300
image: '/files/2018/03/libreoffice-kamarada.png'
layout: post
published: true
nickname: 'libreoffice-autocorrect-autotext'
title: 'Economizando a munheca no LibreOffice com autocorreção e autotexto'
excerpt: 'O LibreOffice Writer possui dois recursos que podem te ajudar a digitar menos: a autocorreção e o autotexto. Veja como utilizá-los.'
---

{% include image.html src="/files/2018/03/libreoffice-kamarada.png" %}

O [LibreOffice Writer][writer] possui dois recursos que podem te ajudar a digitar menos: a autocorreção e o autotexto. Veja como utilizá-los.

## Autocorreção

A **autocorreção** é o recurso do [LibreOffice][libreoffice] que corrige automaticamente o que digitamos ao digitar uma palavra e pressionar a **barra de espaço** logo em seguida.

Experimente criar um novo documento no LibreOffice Writer, digitar `nao` (isso mesmo, sem acento) e pressionar a **barra de espaço**:

{% include image.html src="/files/2018/03/libreoffice-autocorrect-autotext-01-pt.png" %}

Observe que ele corrige para `Não`, em maiúscula por se tratar de início de frase e com acentuação, por ser a escrita correta.

Se isso não aconteceu no seu computador, pode ser que a autocorreção esteja desativada. Para ativar a autocorreção no LibreOffice Writer, vá no menu **Formatar**, **Autocorreção** e marque a opção **Ao digitar**. Agora você pode tentar de novo.

Várias substituições, a exemplo dessa, o LibreOffice já faz por padrão. Mas também podemos configurar nossas próprias substituições.

Por exemplo, vamos configurar o LibreOffice para substituir `sw` por `software`.

Vá no menu **Ferramentas**, **Autocorreção** e clique em **Opções da autocorreção**:

{% include image.html src="/files/2018/03/libreoffice-autocorrect-autotext-02-pt.png" %}

Preencha os campos **Substituir** com `sw` e **Por** com `software` e clique em **Novo**:

{% include image.html src="/files/2018/03/libreoffice-autocorrect-autotext-03-pt.png" %}

Clique em **OK** para salvar a nova configuração da autocorreção.

De volta ao documento, experimente digitar `sw` e pressionar a **barra de espaço**. O LibreOffice substitui `sw` por `software`:

{% include image.html src="/files/2018/03/libreoffice-autocorrect-autotext-04-pt.png" %}

Você pode configurar a autocorreção para substituir uma palavra ou sigla até mesmo por uma frase inteira, te poupando de digitar bastantes caracteres.

Mas e se você quiser substituir uma palavra ou sigla por algo mais completo, como uma tabela ou um parágrafo? Aí é onde entra o autotexto.

## Autotexto

O **autotexto** funciona de forma bastante semelhante à autocorreção, exceto que ele permite armazenar textos inteiros (que contenham inclusive parágrafos, figuras, tabelas, campos) para inserção rápida em um momento posterior.

Esse recurso pode ser muito útil se você costuma repetir textos inteiros em diferentes documentos, repetindo inclusive a formatação.

No judiciário, por exemplo, advogados e juízes com frequência mencionam trechos de leis em documentos do processo.

Para demonstrar o uso do autotexto, vejamos como criar uma entrada de autotexto a partir de um trecho de uma lei.

Digite o texto que você deseja armazenar e aplique a formatação desejada.

Por exemplo, digite o artigo 42 da [Lei nº 8.078, de 11 de setembro de 1990][cdc] (mais conhecida como [Código de Defesa do Consumidor][cdc]), que trata da [cobrança indevida][cobranca-indevida]:

<em>
Art. 42. Na cobrança de débitos, o consumidor inadimplente não será exposto a ridículo, nem será submetido a qualquer tipo de constrangimento ou ameaça.

Parágrafo único. O consumidor cobrado em quantia indevida tem direito à repetição do indébito, por valor igual ao dobro do que pagou em excesso, acrescido de correção monetária e juros legais, salvo hipótese de engano justificável.
</em>

Selecione o texto digitado, aplique o tamanho 10 e um récuo de 4cm em relação à margem esquerda (assim, estamos aplicando a [norma da ABNT para citações][abnt]):

{% include image.html src="/files/2018/03/libreoffice-autocorrect-autotext-05-pt.png" %}

Para criar uma entrada de autotexto, selecione o texto que você deseja armazenar, vá no menu **Ferramentas** e clique em **Autotexto**:

{% include image.html src="/files/2018/03/libreoffice-autocorrect-autotext-06-pt.png" %}

Selecione uma categoria e informe um **Nome** e um **Atalho** para o autotexto (por exemplo, `cdc42`, note que o campo **Atalho** tem o mesmo sentido do campo **Substituir** da autocorreção), clique em **Autotexto** e escolha **Novo**:

{% include image.html src="/files/2018/03/libreoffice-autocorrect-autotext-07-pt.png" %}

Clique em **Fechar**.

Para inserir a entrada de autotexto que acabamos de configurar, experimente criar um novo documento, digitar o atalho da entrada de autotexto e pressionar **F3**:

{% include image.html src="/files/2018/03/libreoffice-autocorrect-autotext-08-pt.png" %}

## Alguns usos úteis da autocorreção

A autocorreção do LibreOffice não apenas corrige erros de ortografia ou substitui palavras, ela também nos ajuda da outras formas. Experimente:

- digitar no início da linha um traço (`-`), um asterisco (`*`) ou um sinal de adição (`+`) e pressionar a **barra de espaço**: o LibreOffice cria uma lista com marcadores;

- digitar no início da linha um número seguido de um ponto (`.`) e pressionar a **barra de espaço**: o LibreOffice cria uma lista numerada;

- digitar no início da linha três ou mais sublinhados (também conhecidos como *underlines*, `___`) e depois pressionar **Enter**: o LibreOffice cria uma linha horizontal da largura da página.

## Referências

Espero que essas dicas possam te ajudar a economizar digitação enquanto utiliza o LibreOffice. Caso deseje mais informações, consulte as referências:

- [Aplicar - LibreOffice Help][ref1]
- [Autocorreção - LibreOffice Help][ref2]
- [Desativar a autocorreção - LibreOffice Help][ref3]
- [Utilizar o autotexto - LibreOffice Help][ref4]

[writer]:               https://pt-br.libreoffice.org/descubra/writer/
[libreoffice]:          https://pt-br.libreoffice.org/
[cdc]:                  http://www.planalto.gov.br/ccivil_03/Leis/L8078.htm
[cobranca-indevida]:    http://www.gazetadopovo.com.br/justica/cobranca-indevida-da-direito-a-receber-o-dinheiro-de-volta-em-dobro-37wplb9sxe1gatv0e8e1us0ui
[abnt]:                 https://www.tecmundo.com.br/tutorial/834-aprenda-a-usar-as-normas-da-abnt-citacao-2-de-4-.htm
[ref1]:                 https://help.libreoffice.org/Writer/Apply/pt-BR
[ref2]:                 https://help.libreoffice.org/Common/AutoCorrect/pt-BR
[ref3]:                 https://help.libreoffice.org/Writer/Turning_Off_AutoCorrect/pt-BR
[ref4]:                 https://help.libreoffice.org/Writer/Using_AutoText/pt-BR
