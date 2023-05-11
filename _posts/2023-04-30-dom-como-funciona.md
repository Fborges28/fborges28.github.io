---
layout: post
title: DOM - Como funciona?
categories: [HTML, Javascript, Navegadores]
excerpt: Este artigo procura demonstrar algumas curiosidades e, talvez, tentar simplificar a vastidão de informações sobre este tópico tão relevante e, ainda, tão incompreendido.
sections:
  [
    {
      title: "Introdução",
      href: "#intro",
      subtitles:
        [
          { title: "Conceitos", anchor: "#conceitos" },
          { title: "Motivação", anchor: "#motivacao" },
        ],
    },
    {
      title: "Exemplos",
      anchor: "#exemplos",
      subtitles: [{ title: "Vanilla", anchor: "#vanilla" }],
    },
    { title: "Próximos passos", anchor: "#próximos-passos" },
    { title: "Glossário", anchor: "#glossário" },
  ]
---

## [Introdução](#intro)

**Pré-requisitos: Noções básicas de HTML e Javascript**

Existem grandes referências na internet sobre o que é o DOM \(Document Object Model\), por exemplo esta da [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model).

Então, este artigo procura demonstrar algumas curiosidades e tenta simplificar a vastidão de informações sobre este tópico, que é tão relevante e, ainda, tão incompreendido.

#### Motivação

"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

Em tradução livre:

"A especificação W3C Document Object Model é uma plataforma e uma api agnóstica que permite a programas e scripts, dinamicamente, acessarem e atualizarem o conteúdo, a estrutura e os estilos de um documento"

###### Fonte: https://www.w3schools.com/js/js_htmldom.asp

#### [Conceitos](#conceitos)

Estrutura de um documento HTML convencional

```html
<html>
  <head>
    <title>My title</title>
  </head>
  <body>
    <h1>My header</h1>
    <a href="#">My link</a>
  </body>
</html>
```

O DOM é uma estrutura composta de objetos javascript a partir de um documento HTML, no formato de uma árvore de elementos, atributos e conteúdo.

Quando os navegadores de internet recebem um documento HTML, como resposta de um servidor Web, ocorre uma etapa de parseamento, ou seja, de interpretação e conversão do documento recebido.

Durante a interpretação da string recebida do servidor, ocorre então uma etapa de "tokenização", ou seja, de conversão de cada um dos trechos da string recebida em um nó (elemento) HTML, num atributo ou em um trecho de conteúdo. Dessa forma surgem os nós que fazem parte da árvore de elementos DOM, gerados pela engine javascript de cada navegador.

As principais engines javascript da atualidade são: _V8_ para [Chrome, Microsoft Edge](https://v8.dev/); _SpiderMonkey_ para [Mozilla Firefox](https://firefox-source-docs.mozilla.org/js/index.html) e _Webkit_ para [Safari, App Store](https://webkit.org/).

Continuando, o código acima, quando recebido pelo navegador, pode ser traduzido na seguinte representação gráfica:

![Dom Tree]({{ site.baseurl }}/images/htmltree.gif)

###### Fonte: https://www.w3schools.com/js/js_htmldom.asp

Todos os elementos HTML presentes na árvore DOM tem a sua representação como objetos javascript. Então, podemos manipular os elementos e as suas propriedades através de scripts, para que tenhamos o total controle daquilo que é renderizado para os usuários.

Os navegadores web nos fornecem o objeto **document**, o objeto raiz de toda a árvore DOM. A partir deste objeto podemos encontrar todos os demais objetos do nosso documento, pois, hierarquicamente, são seus descendentes.

Através da propriedade **\[children\]** podemos acessar os descendentes diretos do objeto **document**:

```js
document.children; // => [html]
```

O retorno da linha acima será um HTMLCollection, ou seja, uma estrutura de dados similar a um array (lista de itens). Podemos ver que o único item da lista, que é descendente direto do objeto document, é o objeto **html**.

```js
document.children[0]; // => html
document.children[0].children; // => [head, body]
```

Como listas começam no índice 0 (zero), podemos acessar o primeiro item da lista como no exemplo acima. Então, ao solicitar novamente a propriedade **\[children\]** recebemos os elementos: head e body, como índices da lista.

Dessa forma, podemos ver como se dá o acesso através da hierarquia de elementos (nós) da árvore DOM. Ou seja, através da notação de objetos do javascript.

Todo e qualquer elemento HTML (tag) estará acessível através da **API DOM**. É possível adicionar novos nós, alterar nós existentes ou removê-los por completo da árvore de elementos através da API Javascript, assim como seus atributos ou seus conteúdos.

Lembrando, os exemplos de código acima foram apenas fins didáticos. Existem formas mais fáceis de acessar os nós dos documentos HTML, manipular seus atributos ou seu conteúdo, através dos nomes das tags, ids ou classes, com os métodos fornecidos pela **API DOM**.

## [Exemplos](#exemplos)

**Por convenção da comunidade de desenvolvimento, os nomes das variáveis e métodos dos exemplos serão em inglês, com exceção dos conteúdos (valores) das variáveis**

Depois da sequência de informações téoricas, vamos à prática. Abra o console javascript do seu navegador para testar os exemplos à seguir:

### [Vanilla](#vanilla)

#### Criando elementos

```js
// Cria um novo botão em memória
const myButton = document.createElement("button");
// Adiciona um texto ao botão criado
myButton.textContent = "Meu botão";
// Adiciona o botão ao documento HTML e o renderiza na tela
document.body.appendChild(myButton);
```

#### Armazenando elementos em memória

```js
// Através do ID do elemento
const myButton = document.querySelector("#button");
// Através da classe do elemento
const myLink = document.querySelector(".link");
// Através da tag do elemento
const myTitle = document.querySelector("h1");
```

#### Atualizando elementos

Se você já dispõe do elemento armazenado em memória, através de uma variável ou constante, atualize-o da seguinte forma:

```js
// Atualiza o objeto em memória myButton e o renderiza na tela
myButton.textContent = "Botão atualizado";
```

_PS: Cada nó HTML terá suas propriedades nativas, consulte a documentação do nó que está manipulando para verificar como atualizar o elemento em questão_

#### Removendo elementos

Se você já dispõe do elemento armazenado em memória, remova-o da seguinte forma:

```js
// Remove o elemento da árvore de elementos
myButton.remove();
```

#### Métodos API DOM

Caso queira atualizar um nó que não está armazenado em memória, você pode utilizar os métodos da API DOM.

Os principais métodos para recuperar os elementos de um documento HTML são:

**1. getElementById** - Método que varre o documento HTML em busca de um elemento com atributo **id** que seja exatamente igual ao valor passado como parâmetro. Ou seja, o método diferencia maíusculas de minúsculas, acentuação e assim por diante. O retorno é um nó HTML. Caso não encontre resultados o retorno é **null**

```js
document.getElementById("element-id");
```

**2. getElementsByClassName** - Método que varre todo o documento HTML e retorna um HTMLCollection (estrutura de dados similar a um array/lista), com os nós HTML encontrados, baseado no nome da classe passada como parâmetro. Caso não encontre resultados o retorno é uma lista vazia.

```js
document.getElementsByClassName("btn");
document.getElementsByClassName("btn blue"); // Têm as classes btn e blue
```

**3. getElementsByTagName** - Método que varre todo o documento HTML e retorna um HTMLCollection (estrutura de dados similar a um array/lista), com os nós HTML encontrados, baseado no nome da tag passada como parâmetro. Caso não encontre resultados o retorno é uma lista vazia.

```js
document.getElementsByTagName("h1");
```

**4. querySelector** - Retorna o primeiro resultado da busca e encerra a procura. Retorna o nó HTML referente à seleção. É possível passar o seletor HTML desejado: id, classe ou nome da tag. Caso não encontre resultados o retorno é **null**

```js
document.querySelector("#id");
document.querySelector(".classe");
document.querySelector("h1");
```

**5. querySelectorAll** - Retorna todos os resultados encontrados no documento e retorna um NodeList (estrutura de dados similar a um array/lista), com os nós HTML encontrados, baseado no nome do seletor passado como parâmetro. Caso não encontre resultados o retorno é uma lista vazia.

```js
document.querySelectorAll(".btn");
```

#### Eventos

Também é possível adicionar eventos aos nós HTML. Eventos representam ações que são disparadas a partir de determinada interação do usuário com o documento html, como nos exemplos mais comuns: inputs e botões. Abaixo seguem alguns usos mais comuns.

**1. addEventListener** - O método addEventListener está disponível para todos os nós HTML. A sintaxe exige um elemento, um tipo de evento (no exemplo representado pela string "click") e uma função callback. Os tipos de evento podem ser consultados na [documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener):

```js
const element = document.querySelector("element");

element.addEventListener("click", function (event) {
  console.log(event);
});
```

**2. click** - É possível acionar o clique já atribuído a algum elemento programaticamente:

```js
const element = document.querySelector("#element");
element.click();
```

**3. focus** - Também é possível disparar o foco em algum elemento programaticamente:

```js
const myInput = document.querySelector("#input");
myInput.focus();
```

**4. setAttribute** - Este método permite atributir, através da combinação chave/valor, um atributo e seu valor a qualquer nó HTML.

```js
const myLink = document.querySelector("#link");
myLink.setAttribute("href", "https://url.com");
```

**5. getAttribute** - Este método permite recuperar o valor de qualquer atributo de um nó HTML.

```js
const myLink = document.querySelector("#link");
const url = myLink.getAttribute("href"); // => Retorna uma string
```

#### Referências

Mozilla - Para uma consulta completa sobre os métodos e eventos da API, [acessar](https://developer.mozilla.org/pt-BR/docs/Web/API/Document).

W3C DOM - [link](https://www.w3schools.com/js/js_htmldom.asp)

## [Próximos passos](#próximos-passos)

Este artigo faz parte de uma série de artigos que virão nas próximas semanas explicando um pouco mais a fundo sobre como funcionam as tecnologias web por "trás das cortinas". Deixo aqui uma sugestão de leitura:

**Shadow Dom** - [link](https://www.treinaweb.com.br/blog/o-que-e-dom-virtual-dom-e-shadow-dom). Este conteúdo fará parte desta série de artigos nas próximas semanas.

### O que vem na sequência

O próximo artigo será **"Virtual DOM: Como o React realmente funciona?"**

## [Glossário](#glossário)

**1. DOM** - Document Object Model é uma API (Interface de Programação de Aplicações) que auxilia pessoas que estejam programando páginas WEB para criar documentos, navegar dentro da estrutura desses documentos via código, adicionar, modificar ou deletar elementos e seus conteúdos.

**2. Interface** - Interfaces representam um contrato com as propriedades e métodos que determinada classe possui, para auxiliar na comunicação com outras classes ou sistemas.

**3. Herança** - Em programação Orientada a Objetos, as classes que extendem características de outras classes herdam as propriedades e métodos que foram expostos na classe base.

**4. Protótipos Javascript** - Dentro da árvore dos objetos javascript, cada um desses foi construído a partir de outro objeto, o seu protótipo. Diferente da herança baseada em classes, onde cada objeto somente conhece as propriedades da instância da classe, em objetos javascript temos uma cadeia de objetos vinculados uns aos outros através da propriedade **\[\_\_proto\_\_\]**.

**5. Dot Notation** - O tipo de acesso as propriedades dos objetos javascript. Exemplo: objeto.propriedade ou objeto.metodo().
