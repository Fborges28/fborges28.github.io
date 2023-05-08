---
layout: post
title: Manipulando o DOM
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
      subtitles:
        [
          { title: "Vanilla", anchor: "#vanilla" },
          { title: "Web Components", anchor: "#web-components" },
          { title: "React", anchor: "#react" },
          { title: "Angular", anchor: "#angular" },
          { title: "Vue", anchor: "#vue" },
        ],
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

Estrutura HTML convencional

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

O DOM pode ser representado através de uma estrutura de dados no formato de uma árvore de elementos, atributos e conteúdo. O código acima pode ser traduzido na seguinte representação gráfica:

![Dom Tree]({{ site.baseurl }}/images/htmltree.gif)

###### Fonte: https://www.w3schools.com/js/js_htmldom.asp

Cada um dos nós HTML será convertido num objeto javascript pelo navegador de internet. Cada um desses objetos estará acessível pelos métodos disponíveis na API do navegador para manipular o documento, ou seja, o próprio DOM.

Como todos os elementos HTML presentes na árvore DOM tem a sua representação criada a partir da engine javascript do navegador, nós podemos manipular os elementos e as suas propriedades, através de scripts, para que tenhamos o total controle daquilo que é renderizado para o usuário.

Os navegadores web nos fornecem o objeto **document**, o objeto raiz de toda a árvore DOM. A partir deste objeto podemos encontrar todos os demais objetos do nosso documento, pois, hierarquicamente, são seus descendentes. Através da propriedade **\[children\]** podemos acessar os descendentes diretos do objeto **document**

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

Lembrando, este foi apenas um exemplo didático, existem formas mais fáceis de acessar os nós HTML dos documentos HTML, através dos nomes das tags, ids ou classes, com os métodos fornecidos pela API DOM.

## [Exemplos](#exemplos)

Depois da sequência de informações téoricas, vamos à prática. Abra o console javascript do seu navegador para testar os exemplos à seguir:

#### [Vanilla](#vanilla)

Todo e qualquer elemento HTML (tag) estará acessível através da API DOM. É possível adicionar novos nós, alterar nós existentes ou removê-los por completo da árvore de elementos através da API Javascript.

```js
const a = 10; // Exemplo
const a = 10; // Exemplo

function hello() {
  return `Hello`;
}

hello();
```

#### [Web Components](#web-components)

Existem grandes referências na internet sobre o que é o DOM \(Document Object Model\), por exemplo esta da [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model).

```js
const a = 10; // Exemplo
const a = 10; // Exemplo

function hello() {
  return `Hello`;
}

hello();
```

#### [React](#react)

Existem grandes referências na internet sobre o que é o DOM \(Document Object Model\), por exemplo esta da [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model).

```js
const a = 10; // Exemplo
const a = 10; // Exemplo

function hello() {
  return `Hello`;
}

hello();
```

#### [Angular](#angular)

Existem grandes referências na internet sobre o que é o DOM \(Document Object Model\), por exemplo esta da [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model).

```js
const a = 10; // Exemplo
const a = 10; // Exemplo

function hello() {
  return `Hello`;
}

hello();
```

#### [Vue](#vue)

Existem grandes referências na internet sobre o que é o DOM \(Document Object Model\), por exemplo esta da [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model).

```js
const a = 10; // Exemplo
const a = 10; // Exemplo

function hello() {
  return `Hello`;
}

hello();
```

## [Próximos passos](#próximos-passos)

Existem grandes referências na internet sobre o que é o DOM \(Document Object Model\), por exemplo esta da [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model).

## [Glossário](#glossário)

**1. DOM** - Document Object Model é uma API (Interface de Programação de Aplicações) que auxilia pessoas que estejam programando páginas WEB para criar documentos, navegar dentro da estrutura desses documentos via código, adicionar, modificar ou deletar elementos e seus conteúdos.

**2. Interface** - Interfaces representam um contrato com as propriedades e métodos que determinada classe possui, para auxiliar na comunicação com outras classes ou sistemas.

**3. Herança** - Em programação Orientada a Objetos, as classes que extendem características de outras classes herdam as propriedades e métodos que foram expostos na classe base.

**4. Herança com Protótipos Javascript** - Dentro da árvore dos objetos javascript, cada um desses foi construído a partir de outro objeto, o seu protótipo. Diferente da herança baseada em classes, onde cada objeto somente conhece as propriedades da instância da classe, em objetos javascript temos uma cadeia de objetos vinculados uns aos outros através da propriedade **\[\_\_proto\_\_\]**.

**5. Shadow DOM** - É a nomenclatura utilizada para definir a árvore de objetos pertencentes a um **Web Component**. Web Components fazem parte da especificação nativa do javascript e permitem o encapsulamento - capacidade de isolar as funcionalidades, os estilos e a semântica - para uma determinada tag HTML, que terá sua própria estrutura de elementos (árvore shadow) e métodos para manipular o seu conteúdo.

**7. Dot Notation** - O tipo de acesso as propriedades dos objetos javascript. Exemplo: objeto.propriedade ou objeto.metodo().
