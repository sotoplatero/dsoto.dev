---
layout: post
title: Incluyendo las webmetions en mi blog
excerpt: Crear una API muy sencilla utilizando las funciones de Netlify.
date: 2021-01-27
tags: post
---


[Webmention](https://indieweb.org/Webmention) es un [estandar web](https://www.w3.org/TR/webmention/) para menciones y conversaciones a travez de la web. A nosotros lo que nos interesa es que vamos a recibir notificaciones cuando una de nuestros post recibe interacciones (likes, retweets, comments, etc) en Twitter

El objetivo de las webmetions sean para cualquier tipo de sitio web y desde cualquier red social. Nosotros nos concetraremos en nuestro querido blog y en twitter.

Hay montones de tutorial y documentación para implementar las webmetions, este post puede considerarse una version traducida y ampliada de [Adding webmentions to my blog](https://sebastiandedeyne.com/adding-webmentions-to-my-blog/) de [Sebastian De Deyne](https://twitter.com/sebdedeyne)

**DM;MD**

### Detectar interacciones en twitter sobre cada post publicado 

Lo primero es detectar cuando alquien interactúa con la dirección de tu sitio, si alquien le gusta, comenta o retwitea un tweet que contiene la url a tu post necesitamos recibir una notificación. El problema es que twitter no lo hace así que tenemos que valernos de [Bridgy](https://brid.gy) un servicio de la gente de [indieweb](https://indieweb.org) y que se encarga de hacerle el scrape a twitter, detectar las acciones sobre nuestro sitio y notificarnos.

Para esto solo tienes que ir [Bridgy](https://brid.gy) y registrarte con tu cuenta twitter que contiene en el perfil tu sitio web. Cuando lo hagas te mostrará las interacciones 

![Registro en bridgy](/img/bridgy.jpg)

### Almacenar las menciones

Ahora nuestro sitio recibirá las interacciones en twitter con nuestro sitio y debemos de hacer algo con ello. Lo más conveniente es utilizar Webmentions.io un servicio igual de Indiweb que las procesa y almacena e incluye un filtro de spam para cualquier mención de un bot.

Para que webmentions.io nos indentifique tenemos que incluir en nuestro sitio un link a nuestro perfil en twitter, ten en cuenta incluir `rel="me"`

```html
<a href="https://twitter.com/sotoplatero" rel="me">@sotoplatero</a>
```

Luego nos registramos con nuestro sitio en [Webmentions.io](https://webmention.io/) y al hacerlo nos indicará incluir en el `<header>` del sitio estos `<link>`

```html
<link rel="webmention" href="https://webmention.io/dsoto.dev/webmention" />
<link rel="pingback" href="https://webmention.io/dsoto.dev/xmlrpc" />
```

Con esto estamos indicando que las menciones que lleguen a nuestro sitio serán recibidas por Webmetion.io

### Mostrar las interacciones en el post

Ahora solo nos faltaría mostrar las interacciones en cada post. Para esto podemos consultar la api de webmention.io con el formato `https://webmention.io/api/mentions.jf2?target=httpa://dsoto.dev/posts/incluyendo-webmations-en-el-blog/` y nos devolverá un [json](https://webmention.io/api/mentions.jf2?target=https://dsoto.dev/posts/incluyendo-webmations-en-el-blog/).

Para procesar este json e inyectarlo en nuestro blog podemos utilizar el [script de Sebastian De Deyne script](https://github.com/sebastiandedeyne/sebastiandedeyne.com/blob/f9c19f78e7a7b57562059a62154f0c9d9641267b/assets/js/webmentions.js) o si lo prefieres incluir mi [propia versión](https://raw.githubusercontent.com/sotoplatero/dsoto.dev/master/src/scripts/webmentions.js) que es la utilizo en este blog.

¿Cómo hacemos? En cada post incluimos un elemento con el atributo `data-webmentions` y el valor seria la url del post actual.

```html
<div data-webmentions="https://dsoto.dev/posts/incluyendo-webmations-en-el-blog/" ></div>
```

Igualmente incluimos el [script](https://raw.githubusercontent.com/sotoplatero/dsoto.dev/master/src/scripts/webmentions.js).

```javascript
const container = document.querySelector("[data-webmentions]");

if (container) {
    renderWebmentions(container);
}

// Render todas las webmentions en el innerHTML del container
async function renderWebmentions(container) {
  const target = container.dataset.webmentions;
  const url = `https://webmention.io/api/mentions.jf2?target=${target}`;
  const { children: webmentions } = await fetch(url).then( res => res.json() )

  if (webmentions.length === 0) return;

  let view = webmentions.map( webmention => renderWebmention(webmention) );
  container.innerHTML = view.join('');
}

// render una webmetion individual
function renderWebmention(webmention) {

  const action = {
    "in-reply-to": "respondió",
    "like-of": "le gustó",
    "repost-of": " retwiteó",
    "mention-of": "mencionó"
  }[webmention["wm-property"]];

  const receivedAt = new Date(webmention["wm-received"]).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return  `
    <div class="flex items-center mb-6">
      <div class="flex-shrink-0 mr-4">
          <img class="h-8 w-8 rounded-full" loading="lazy" src="${ webmention.author.photo }">
      </div>
      <div class="">
        <div class="space-x-2">
          <a class="font-semibold" href="${ webmention.author.url }">${ webmention.author.name }</a>
          <span class="text-gray-700 dark:text-gray-300">
            <a class="underline" href="${ webmention.url }">${ action }</a>
          </span>
          <span class="text-gray-600 dark:text-gray-400">
            ${ receivedAt }
          </span>
        </div>
        <div class="mt-1">
            ${ webmention.content ? webmention.content.text : '' }
        </div>
      </div>
  </div>`;
}
```

 De forma general este script busca el elemento `[data-webmentions]` en la página actual, consulta la API de webmention.io para obtener un json con las webmetions y  construye un string que se insertará en el elemento `[data-webmentions]`. Por supuesto puedes modificar la estructura y css del html de retorno de la función `renderWebmention`

 🎉 Y ya debes ver las webmentions en cada uno de los post.

