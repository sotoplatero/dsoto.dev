---
layout: post
title: Alpine el nuevo jQuery reactivo
permalink: 'posts/alpine-example/'
excerpt: Alpine es tan versatil, tan fácil y poderoso que parece el nuevo jQuery reactivo, te ofrece la pontencia de vue, react, angular pero sin complicaciones.
date: 2021-01-24
tags: post
---

[Alpine.js](https://github.com/alpinejs/alpine) es tan versatil, tan fácil y poderoso que puede considerarse el nuevo jQuery pero reactivo, te ofrece la pontencia de los grandes vue, react, angular pero sin complicaciones. En el repo dice _"Think of it like Tailwind for JavaScript"_ porque alpine al igual que tailwindcss manejan el concepto de Utility-first que es el mismo concepto del viejo jQuery.

Este post sirva como presentación y te encariñes con alpine.js y para los que lo vieron an algún momento y pasaron de largo, los que no supieron ver su belleza la primera vez...como me pasó a mi, como un amor a segunda vista.

Alpine.js es especial para proyectos pequeños, la presentación de una idea, tutoriales... y un poco más pero ahora solo nos interesa la velocidad.

Solo tienes que agregar el CDN del alpine con la versión actualizada al final del `head` y listo.

```html
<script
  src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
  defer
></script>
```

**TL;DR**

En este post vamos a hacer un buscador de cocteles que contendrá un `input` para escribir el criterio de búsqueda y un listado de los resultados.

Creamos un sencillo html que incluirá el script del alpine.js y la libreria de css [chota](https://jenil.github.io/chota) muy sencilla pero muy completa y de solo 3k.

**1. Creamos una pagina HTML básica**

Creamos una fichero _index.html_ con el siguiente contenido.

```html
<!DOCTYPE html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8" />
    <title>dsoto blog - Ejemplo con Alpine.js</title>
    <meta name="description" content="Breve introducción al Alpine.js" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://unpkg.com/chota@latest" />
    <style type="text/css">
      :root {
        --grid-maxWidth: 60rem;
      }
    </style>
    <script
      src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js"
      defer
    ></script>
  </head>

  <body class="container">
    <h1>Consumir API con Alpine.js</h1>
    <p>
      Un ejemplo básico con <a href="">alpine.js</a> para consumir
      <a href="">TheCocktailDB</a>, que mejor api para consumir.🍹 🎉
    </p>
    <p>
      <label for="input__search">Search</label>
      <input
        id="input__search"
        type="search"
        placeholder="¿Que quieres consumir?"
      />
    </p>
  </body>
</html>
```

**2. Definimos el componente**

Para definir un componente alpine solo le agregamos `x-data` a un elemento html, en este caso es el _body_ pero puede ser cualquier elemento y el interior será el _scope_ del componente.

```html
<body class="container" x-data="{ cocktails: [], q: '' }"></body>
```

**3. Reactivamos el input**

Con la directiva `x-model="q"` le indicamos al input que la variable `q` del componente es "two-way data binding". Mantiene la entrada del elemento sincronizado con los datos del componente.

El `x-on:input` adjunta un evento listener al elemento. Ejecuta una expresión de JS cuando se emite el evento. Puede una expresión js directamente o el nombre función `<button x-on:click="myFunction"></button>`

En este caso cuando la entrada en el input realizamos la búsqueda en _thecocktaildb.com_ y el resultado lo almacenamos en la variable `cocktails` que definimos anteriormente en el componente.

```html
<input
  id="input__search"
  type="search"
  placeholder="Enter Search Term"
  x-model="q"
  x-on:input="
    fetch( 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + q , {
        method: 'GET',
        mode: 'cors',
      })
      .then( response => response.json() )
      .then( json => cocktails = json.drinks )        
  "
/>
```

**4. Un poco de reactividad**

La directiva `x-if` Condiciona la visibilidad de un elemento del DOM. Debe ser utilizado en una etiqueta `<template>`. Entonces si la variable `q` es válida mostramos un mensaje.

```html
<template x-if="q">
  <p>Buscando cocteles que contengan: <strong x-text="q"></strong></p>
</template>
```

**5. Listamos los cocteles**

Con `x-for` crea nuevos nodos en el DOM mediante un _loop_ siempre utiliza la etiqueta `<template>` y es muy importante asignar siempre un _:key_. El interior debe tener un único elemento raíz.

Utilizamos la directiva `x-text` para mostrar mostrar el contenido del coctel. Basicamete actualiza el _innerText_ del elemento también existe `x-html` para el _innerHTML_.

```html
<template x-for="cocktail in cocktails" :key="cocktail.idDrink">
  <div>
    <h3 x-text="cocktail.strDrink" class="is-marginless"></h3>
    <p x-text="cocktail.strInstructions"></p>
  </div>
</template>
```

Y si todo nos fue ok debe verse el resultado, puedes ver el [código en github](https://github.com/dsoto-blog/consumir-api-alpine) y el sitio lo puedes consultar [**online**](https://consumir-api-alpine.netlify.app/)

![ejemplo alpine.js](/img/alpine-cocktails.jpg)

**6. Y una cosa más**

Si nos fijamos en la _DevTool_ en el network veremos que realiza una llamada a la api cada vez que cambia la variable q, esto no es eficiente.

![ejemplo alpine.js](/img/alpine-cocktails-requests.jpg)

Para resolver esto, alpine.js incluye el modificador _.debounce_ al evento input que efectivamnete hace un debounce, es decir, _la respuesta al evento NO se ejecutará hasta que haya pasado una cierta cantidad de tiempo desde que el evento se lanzó por última vez. Cuando está listo para ser llamado, se ejecutará la última respuesta._ [❓](https://github.com/alpinejs/alpine/blob/master/README.es.md#x-on) entonces solo modificamos el evento `x-on:input.debounce` y listo.

---

Espero que te haya servido para conocer alpine.js y experimentar con él. Alpine es fácil, divertido y poderoso. Revisa la documentación y has realidad tus ideas.
