---
layout: post
title: 10 Tips para lanzar tu BLOG como un DEV
excerpt:
date: 2021-02-07
tags: post
---

Escribir un blog es realmente complicado y si eres desarrollador se te complica más. Además de tener la idea, investigar, documentarte y redactar tienes que escribir el código, probarlo, publicarlo. Y todo este tiempo es luchando con tus pensamientos que te dicen que es una pérdida de tiempo y nadie te va leer.

Si logras superar tus demonios entonces lo mejor es armarte de la mayor cantidad de herramientas y consejos o tips que te ayuden a comenzar sin perder el impulso, "perder" menos tiempo y aumentar tu público.

### 1. Utiliza un generador estático

No utilices ningún framework con base de datos utiliza un generador de sitios estáticos y selecciona alguno en [Jamstack](). Mi consejo es uses un [generador basado en template y nada de javascript, nada de react, preact, vue](/post/), simplemente uno que convierta de md a html. Mantente sencillo.

### 2. Hosting estático

Como tienes un sitio estático puedes utilizar alguno de los servicios de hosting serverless estático, todos tienen planes free super generosos y están orientados a hacerte _"feliz"_ recomiendo [Netlify]() pero también tienes a [Vercel](), [Begin](), [Surge]() y por supuesto [Github Pages](https://pages.github.com/)

### 3. Incluye comentarios

Lo más probable es que desees incluir comentarios; te permiten retroalimentarte de tus lectores y siempre son bienvendos aunque te generan _trabajo_ extra. Ahora cuando tengas comentarios debes estar atento a responder sus preguntas. Aunque existen otras opciones quizás la más coneniente es [utterances](https://utteranc.es/) o [Disqus](https://disqus.com/)

### 4. Muestra los Webmetions

Al igual que los comentarios los Webmetions van a mostrar como se comporta tu blog en las redes sociales. Puedes guiarte con un [post anterior](/posts/) donde explico como incluirlos en tu blog.

### 5. Utiliza un Auto Generador de Meta Images

La mayoría de los blogs incluyen imágenes locales en sus meta tag. Crear una imagen para cada uno de tus post lleva tiempo, normalmente debes utilizar un herramienta como puede ser [Snappa](https://snappa.com/), [Bannerbears](https://www.bannerbear.com/) y por supuesto el [canva](https://www.canva.com/) pero incluso con ellas debes dedicar un tiempo.

La otra opción es buscar una imagen en repositorios públicos pero igualmente lleva tiempo encontrar la correcta, ajustar sus dimensiones y editar los meta tag, todo es tiempo. La solución es muy sencilla, incluye algún [generador de imágenes sociales](/posts/4-generadores-de-imagenes-sociales/).

Recomiendo [Usecard](https://usecard.dsoto.dev) de un servidor muy sencillo pero funcional y de paso me dices que tall va.

```html
<meta
  name="twitter:image:src"
  content="https://usecard.dsoto.dev/card?url=https://dsoto.dev/posts/10-tips-para-lanzar-tu-blog-como-un-dev/&theme=yingyang"
/>

<meta
  name="og:image"
  content="https://usecard.dsoto.dev/card?url=https://dsoto.dev/posts/10-tips-para-lanzar-tu-blog-como-un-dev/&theme=yingyang"
/>
```

### 6. Logos

En ocasiones cuando escribes sobre otros sitios deseas incluir sus logos y he visto que normalmente van al sitio a descargar el logo y luego lo incluyen. Esto igualmente lleva tiempo además que debes ajustar las dimensiones del logo descargado.

Para incluir logos de terceros en tu sitio puedes usar [unavatar](https://unavatar.now.sh) un servicio free y muy bien hecho.

<a href="https://unavatar.now.sh/dsoto.dev" target="_blank" class="font-bold">Logo dsoto.dev</a>

```html
<img src="https://unavatar.now.sh/dsoto.dev" alt="Logo de dsoto.dev" />
```

También puedes utilizar el servicio de logos de [Clearbit](https://clearbit.com/docs#logo-api)

<a href="https://logo.clearbit.com/dev.to" target="_blank" class="font-bold">Logo dev.to</a>

```html
<img src="https://logo.clearbit.com/dev.to" alt="Logo de dev.to" />
```

### 7. Incluir imágenes

Si quieres incluir imágenes de una forma rápida sin tener que descargarlas puedes hacerlo mediante un servicio de [Unsplash](https://unsplash.com/).

```html
<img
  src="https://source.unsplash.com/featured/?habana,havana"
  alt="Habana photo from Unsplash"
/>
```

### 8. Siempre incluye RSS

Asegúrate que la plataforma que utilices en tu blog tenga configurado la publicación [RSS](https://dsoto.dev/feed.xml), esto es importante porque todas las herramientas de lectura consultan esta fuente.

Además verifica que tengas los meta tag de autodescubrimiento de rss.

```html
<link
  rel="alternate"
  type="application/rss+xml"
  title="RSS Feed for dsoto.dev"
  href="/feed.xml"
/>
<link
  rel="alternate"
  type="application/rss+json"
  title="RSS Feed for dsoto.dev"
  href="/feed.json"
/>
```

### 9. Auto compartir en redes sociales

Cada vez que terminas de escribir un post y publicarlo debes socializarlo, es la forma de atraer lectores. Pero puede ser un poco repetitivo o se te olvidá entonces lo más conveniente es utilizar un servicio que te gestione este tipo de tarea:

- [IFTTT](https://ifttt.com/applets/EsftGLhR-rss-to-twitter?term=twitter)
- [dlvr.it](https://dlvrit.com/)
- [RSS Graffiti](http://www.rssgraffiti.com/)
- [Buffer](https://buffer.com/)

### 10. Enlaces para compartir

Siempre incluye al final o algún lugar visible la posibilidad que quien te lee pueda compartir el artículo si le ha gustado, es muy cómodo y muy facil de implementar. Puedes usar un servicio como [shatethis](https://sharethis.com) o si eres twittero simplemente incluye el link directamente del _intent_.

```html
<a href="https://twitter.com/intent/tweet?text=&url=&via=sotoplatero"
  >Compartir en Twitter</a
>
```
