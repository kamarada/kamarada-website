---
date: '2020-07-13 10:30:00 GMT-3'
image: '/files/2020/07/python-colors.png'
layout: post
published: true
nickname: 'python-colors'
title: 'Resolvendo problemas de forma criativa com scripts — comparando paletas de cores usando Python'
---

Eu acredito no poder da automação: o que o computador é capaz de resolver, deveríamos entregar para ele resolver, e ocupar nosso tempo com outras coisas. Por vezes, resolver problemas usando o computador não traz ganho no tempo, mas na qualidade: coisas que normalmente faríamos no "olhômetro", o computador pode fazer com precisão matemática.

<!--more-->

Eu sigo um _blog_ sobre [Linux] chamado [nixCraft], de autoria do indiano Vivek Gite, que não só publica bons conteúdos técnicos, como tutoriais, dúvidas e respostas — vira e mexe eu pesquiso alguma dúvida no [Google] e ele me traz páginas desse _site_ — como também faz publicações bem humoradas nas redes sociais sobre o dia a dia de quem trabalha com TI.

Com frequência, ele publica coisas como "eu na vida real: me preparando para passar 30 minutos escrevendo um _script_ para uma tarefa que vou fazer apenas uma vez e levaria 17 segundos manualmente":

<blockquote class="twitter-tweet" data-lang="pt"><p lang="en" dir="ltr">me_irl <a href="https://t.co/umEratb4t8">pic.twitter.com/umEratb4t8</a></p>&mdash; The Best Linux Blog In the Unixverse (@nixcraft) <a href="https://twitter.com/nixcraft/status/1237428526132822016?ref_src=twsrc%5Etfw">10 de março de 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Ou dedurando os programadores que copiam e colam códigos prontos do [Stack Overflow][so]:

<blockquote class="twitter-tweet" data-lang="pt"><p lang="en" dir="ltr">Lmao. Credit <a href="https://t.co/awgRbvtoWx">https://t.co/awgRbvtoWx</a> <a href="https://t.co/qxSJGJi6wp">pic.twitter.com/qxSJGJi6wp</a></p>&mdash; The Best Linux Blog In the Unixverse (@nixcraft) <a href="https://twitter.com/nixcraft/status/1272432573369573376?ref_src=twsrc%5Etfw">15 de junho de 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Pois bem, por esses dias eu decidi dar uma de nixCraft e resolver via _script_ um problema que eu poderia resolver no "olhômetro".

**O problema:** o [Linux Kamarada][kamarada-15.1] é uma distribuição Linux baseada na distribuição [openSUSE Leap][leap-15.1]. O Projeto openSUSE possui sua [paleta de cores][opensuse-colors], que eu uso com frequência. Mas o _site_ do Linux Kamarada segue o [Material Design][md] do Google, que também possui uma [paleta de cores][material-colors], que eu também uso. Para diferenciar minhas cores das do openSUSE, mas ainda manter uma identidade visual, e seguir o Material Design, eu queria descobrir **quais cores da paleta do Material Design são mais próximas das cores da paleta do openSUSE**.

{% include image.html src='/files/2020/07/opensuse-colors.png' caption='Paleta de cores do Projeto openSUSE. Fontes: [openSUSE Wiki](https://en.opensuse.org/Help:Colors) e [openSUSE Brand Guidelines](http://opensuse.github.io/branding-guidelines/).' %}

{% include image.html src='/files/2020/07/material-colors.png' caption='Paleta de cores do Material Design (apenas em parte). Fontes: [The color system - Material Design](https://material.io/design/color/the-color-system.html) e [Color Tool - Material Design](https://material.io/tools/color/#!/?view.left=0&view.right=0).' %}

Caso eu não tenha me explicado bem ou caso você não tenha entendido o que eu procuro, vou adiantar um pedaço do resultado... o que eu procuro é essa equivalência:

{% include image.html src='/files/2020/07/result-colors.png' caption='Parte do resultado esperado/encontrado. Você pode conferir o resultado completo [aqui](/files/2020/07/output.html).' %}

Eu poderia resolver esse problema comparando as paletas de cores com meus próprios olhos, mas decidi escrever um _script_. Aproveitei a oportunidade para aprender uma nova linguagem de programação. Pesquisei quais [linguagens de programação as pessoas estão buscando mais][pypl] e decidi usar a linguagem [Python]. Achei bem fácil programar nessa linguagem. Tudo bem que o fato de eu já ser programador me ajudou, mas Python tem seu mérito. Eu tive apenas um breve contato com ela na universidade, mas não lembrava mais...

{% include image.html src='/files/2020/07/python-colors.png' %}

Das pesquisas no Google, passando pela programação ao resultado, gastei ao todo 1 hora.

A seguir, apresento como construí o _script_.

## Antes, um pouco de matemática

Existem algumas formas de representar cores na Computação. Uma delas é o sistema [RGB], em que cada cor é representada como sendo uma combinação de determinada quantidade de vermelho (_red_), verde (_green_) e azul (_blue_). Essa combinação pode ser representada por uma tupla de inteiros — `(R,G,B)` — ou por um número em hexadecimal — `#rrggbb`.

Por exemplo, o verde do openSUSE ( <span style="background: #73ba25">&nbsp;&nbsp;&nbsp;&nbsp;</span> ) é representado por `(115,186,37)` ou `#73ba25`.

Podemos pensar nas cores RGB como pontos em um plano cartesiano de 3 dimensões:

{% include image.html src='/files/2020/07/3d-colors.png' caption='Algumas cores plotadas em um plano cartesiano 3D. Imagem feita com auxílio dos programas [Geogebra](https://www.geogebra.org/?lang=pt) e [Inkscape](https://inkscape.org/pt-br/).' %}

"Encontrar a cor mais próxima" significa "encontrar a cor com menor distância". No exemplo da imagem, veja que o verde do openSUSE ( <span style="background: #73ba25">&nbsp;&nbsp;&nbsp;&nbsp;</span> , `(115,186,37)`) é mais próximo do Light Green 600 ( <span style="background: #7cb342">&nbsp;&nbsp;&nbsp;&nbsp;</span> , `(124,179,66)`) do que do Brown 900 ( <span style="background: #3e2723">&nbsp;&nbsp;&nbsp;&nbsp;</span> , `(62,39,35)`) do Material Design.

Existe uma fórmula matemática para calcular a distância entre dois pontos, chamada de [distância euclidiana][distance], mas não vamos entrar nesse detalhe. Vejamos se a nossa linguagem de programação já tem algo pronto pra calcular essa distância pra nós.

## Distância euclidiana no Python

Pesquisando no Google, me deparei com essa página do Stack Overflow:

- [python - How can the Euclidean distance be calculated with NumPy? - Stack Overflow](https://stackoverflow.com/a/21986532/1657502)

A linguagem Python, por meio da biblioteca [SciPy], dispõe de uma função pronta para calcular a distância euclidiana, chamada `euclidean()`:

```python
from scipy.spatial import distance

green = (115,186,37)
light_green_600 = (124,179,66)
brown_900 = (62,39,35)

distancia_1 = distance.euclidean(green, light_green_600)
distancia_2 = distance.euclidean(green, brown_900)

print(distancia_1)
print(distancia_2)
```

Abra o editor de texto, copie e cole o código acima e salve o arquivo como `cores.py`.

Instale o interpretador Python e a biblioteca SciPy, caso ainda não tenha instalado:

```
# zypper in python3 python3-scipy
```

E, por fim, execute o _script_ acima:

```
$ python3 cores.py
31.160872901765767
156.27539793582355
```

Realmente, o verde do openSUSE é mais próximo do Light Green 600 do que do Brown 900.

Não é meu objetivo aqui fazer um tutorial completo de Python, apenas quero ilustrar a experiência. Se quiser mais informações sobre Python, por favor, pesquise na Internet.

## Percorrendo arquivos JSON no Python

Procurei a paleta de cores do Material Design no formato de uma lista que o _script_ pudesse compreender. Encontrei um arquivo [JSON] no [GitHub]:

- [buschtoens/material-colors-json/colors.json - GitHub](https://github.com/buschtoens/material-colors-json/blob/master/colors.json)

```json
{
  "red-50": "#ffebee",
  "red-100": "#ffcdd2",
  "red-200": "#ef9a9a",
  "red-300": "#e57373",
  "red-400": "#ef5350",
  "red-500": "#f44336",
  "red-600": "#e53935",
  "red-700": "#d32f2f",
  "red-800": "#c62828",
  "red-900": "#b71c1c",
  "red-a100": "#ff8a80",
  "red-a200": "#ff5252",
  "red-a400": "#ff1744",
  "red-a700": "#d50000",

  "pink-50": "#fce4ec",

  ...

  "white": "#ffffff",
  "black": "#000000"
}
```

Salvei esse arquivo com o nome de `material-colors.json` na mesma pasta do _script_.

Mas como fazer para o Python ler todas essas cores? Google e Stack Overflow novamente:

- [How to Parse Data From JSON Into Python - LinuxConfig.org](https://linuxconfig.org/how-to-parse-data-from-json-into-python)
- [Getting values from JSON using Python - Stack Overflow](https://stackoverflow.com/a/12353363/1657502)

Eis que para ler todos os pares de chave e valor (nome e hexadecimal) do arquivo JSON usamos o seguinte código:

```python
import json

with open('material-colors.json') as json_file:
    color_palette = json.load(json_file)
    for color_name, color_hex in color_palette.items():
        print(color_name, '=>', color_hex)
```

Que, se executado, deve produzir o seguinte resultado:

```
red-50 => #ffebee
red-100 => #ffcdd2
red-200 => #ef9a9a

...

light-icon-inactive => rgba(255, 255, 255, 0.5)
white => #ffffff
black => #000000
```

Perceba que algumas poucas cores no final do arquivo JSON estavam expressas em RGB. Eu excluí essas linhas do arquivo para ficar apenas as cores principais em hexadecimal.

Para a paleta de cores do openSUSE, produzi eu mesmo um arquivo JSON semelhante:

```json
{
  "Green": "#73ba25",
  "Green 90%": "#81c13b",
  "Green 75%": "#96cb5c",
  "Green 50%": "#b9dc92",
  "Green 25%": "#dceec8",

  ...

  "Blue 50%": "#90d1ef",
  "Blue 25%": "#c7e8f7"
}
```

Salvei esse arquivo com o nome de `opensuse-colors.json` na mesma pasta do _script_.

## Convertendo de hexadecimal para RGB

Para calcular a distância entre duas cores, precisamos que elas estejam no formato de tuplas `(R,G,B)`, mas nos arquivos JSON elas estão em hexadecimal `#rrggbb`.

Como fazer essa conversão? Mais uma vez, Google e Stack Overflow:

- [Converting hex color to RGB and vice-versa - Stack Overflow](https://stackoverflow.com/a/214657/1657502)

```python
def hex_to_rgb(value):
    """Return (red, green, blue) for the color given as #rrggbb."""
    value = value.lstrip('#')
    lv = len(value)
    return tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))

color_rgb = hex_to_rgb('#73ba25')
print(color_rgb)
```

O _script_ acima, se executado, deve produzir o seguinte resultado:

```
(115, 186, 37)
```

## Encontrando a cor mais próxima

Para uma determinada cor da paleta do openSUSE — por exemplo, o verde ( <span style="background: #73ba25">&nbsp;&nbsp;&nbsp;&nbsp;</span> `#73ba25`) — vejamos como encontrar a cor mais próxima na paleta de cores do Material Design.

Para isso, combinamos tudo que já vimos até aqui para criar a função `closest_color()`:

```python
from scipy.spatial import distance
import json

def hex_to_rgb(value):
    """Return (red, green, blue) for the color given as #rrggbb."""
    value = value.lstrip('#')
    lv = len(value)
    return tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))

def closest_color(reference_color_hex, color_palette_file):
    reference_color_rgb = hex_to_rgb(reference_color_hex)
    closest_color_name = 'black'
    closest_color_hex = '#000000'
    closest_color_rgb = (0, 0, 0)
    closest_color_distance = distance.euclidean(reference_color_rgb, closest_color_rgb)
    with open(color_palette_file) as json_file:
        color_palette = json.load(json_file)
        for palette_color_name, palette_color_hex in color_palette.items():
            palette_color_rgb = hex_to_rgb(palette_color_hex)
            palette_color_distance = distance.euclidean(reference_color_rgb, palette_color_rgb)
            if palette_color_distance < closest_color_distance:
                closest_color_name = palette_color_name
                closest_color_hex = palette_color_hex
                closest_color_rgb = palette_color_rgb
                closest_color_distance = palette_color_distance
    print(closest_color_name, '=>', closest_color_hex)

closest_color('#73ba25', 'material-colors.json')
```

Explicando o algoritmo acima de forma resumida: de início, eu tenho apenas a cor que estou buscando e a origem do plano cartesiano, que é a cor preta ( <span style="background: #000000">&nbsp;&nbsp;&nbsp;&nbsp;</span> `#000000`). Provavelmente, qualquer cor da paleta será mais próxima da cor buscada que a cor preta (a menos que estejamos buscando a própria cor preta). Daí eu comparo a cor buscada com todas as cores da paleta de cores, mantendo o registro da cor mais próxima (a cor com menor distância) que encontrei até então. No final, eu exibo a cor mais próxima encontrada.

Execute o _script_ acima e obterá o seguinte resultado:

```
light-green-600 => #7cb342
```

Portanto, dentre todas as cores da paleta do Material Design, a cor Light Green 600 ( <span style="background: #7cb342">&nbsp;&nbsp;&nbsp;&nbsp;</span> `#7cb342`) é a que mais se aproxima da cor verde ( <span style="background: #73ba25">&nbsp;&nbsp;&nbsp;&nbsp;</span> `#73ba25`) da paleta do openSUSE.

## Comparando as paletas de cores

Para comparar todas as cores de uma paleta A com todas as cores de uma paleta B, é só estender o _script_ acima, que já percorre a paleta B, para percorrer a paleta A.

Para isso, substitua a chamada da função `closest_color()` na última linha por:

```python
def compare_color_palettes(reference_color_palette_file, target_color_palette_file):
    with open(reference_color_palette_file) as reference_json_file:
        reference_color_palette = json.load(reference_json_file)
        for reference_color_name, reference_color_hex in reference_color_palette.items():
            print(reference_color_name, '=>', reference_color_hex)
            closest_color(reference_color_hex, target_color_palette_file)
            print()

compare_color_palettes('opensuse-colors.json', 'material-colors.json')
```

Execute o _script_ e o resultado será a comparação entre as paletas de cores:

```
Green => #73ba25
light-green-600 => #7cb342

Green 90% => #81c13b
light-green-600 => #7cb342

Green 75% => #96cb5c
light-green-400 => #9ccc65

...

Blue 75% => #59bbe7
blue-300 => #64b5f6

Blue 50% => #90d1ef
blue-200 => #90caf9

Blue 25% => #c7e8f7
blue-100 => #bbdefb
```

## Resultado

Já temos o esqueleto do _script_ pronto, no mais é otimização e embelezamento.

Publiquei a versão final do _script_ e demais arquivos que usei no GitHub:

- [kamarada/python-colors - GitHub](https://github.com/kamarada/python-colors)

Essa versão deve ser executada da seguinte forma:

```
$ python3 colors.py > saida.html
```

O resultado da comparação é um arquivo HTML com uma tabela, que você pode ver [aqui](/files/2020/07/output.html).

Eu gostei do resultado. Apenas trocaria a cor Green 200 do Material Design ( <span style="background: #a5d6a7">&nbsp;&nbsp;&nbsp;&nbsp;</span> `#a5d6a7`) que foi associada à cor Dark Green 50% do openSUSE ( <span style="background: #b6d3a0">&nbsp;&nbsp;&nbsp;&nbsp;</span> `#b6d3a0`).

Experimente excluir a linha `green-200` do arquivo `material-colors.json` e executar o _script_ de novo. Verá que a segunda cor mais próxima é a <span style="background: #c5e1a5">&nbsp;&nbsp;&nbsp;&nbsp;</span> Light Green 200, mais uniforme com as cores acima ( <span style="background: #9ccc65">&nbsp;&nbsp;&nbsp;&nbsp;</span> Light Green 400) e abaixo ( <span style="background: #dcedc8">&nbsp;&nbsp;&nbsp;&nbsp;</span> Light Green 100) na tabela do resultado.

[linux]:            https://www.vivaolinux.com.br/linux/
[nixcraft]:         https://www.cyberciti.biz/
[google]:           https://www.google.com/
[so]:               https://pt.stackoverflow.com/
[kamarada-15.1]:    {% post_url pt/2020-02-24-kamarada-15.1-vem-com-tudo-que-voce-precisa-para-usar-o-linux-no-dia-a-dia %}
[leap-15.1]:        {% post_url pt/2019-05-22-comunidade-opensuse-lanca-a-versao-15-1-da-distribuicao-leap %}
[opensuse-colors]:  https://en.opensuse.org/Help:Colors
[md]:               https://material.io/
[material-colors]:  https://material.io/design/color/the-color-system.html
[pypl]:             http://pypl.github.io/PYPL.html
[python]:           https://www.python.org/
[rgb]:              https://pt.wikipedia.org/wiki/RGB
[distance]:         https://pt.wikipedia.org/wiki/Dist%C3%A2ncia_euclidiana
[scipy]:            https://www.scipy.org/
[json]:             https://pt.wikipedia.org/wiki/JSON
[github]:           https://github.com/
