---
layout: post
title: Como seleccioné el generador de mi Blog.
excerpt: El tortuoso proceso mental de elegir con que desarrollar tu blog.
date: 2021-02-05
tags: post
---

Aquí no se habla de wordpress. 

Cuando decidí publicar este blog me enfrenté a un dificil desición. ¿Que framework utilizar? En el sitio [Jamstack](https://jamstack.org/generators/) existen 322 opciones!!!, llené mi laptop de proyectos "blogs" todos con diferentes plataformas, buscaba temas, leía, lo dejaba, luego volvía a probar, una locura.

Para determinar que utilizar debía definir parámetros, una guía que me permita evaluar lo que quiero. Entonces valoré que un blog, portafolio un otro sitio meramente informativo donde los visitantes vienen a leer, a navegar por el sitio no requiere javascript a ningun nivel, seria solo HTML y css, si necesitaba algún tipo de funcionalidad sería con vanilla js o librerias a la vieja usansa como jquery, en mi caso vanilla o una librería especifica como [copee]()

Esto me descartaba cualquier generador que implique el render/template con react, vue o svelte como puede ser Next, Nuxt, Sapper, Gastby, todos luego del build llevarán el js en tu sitio final incluso utilizando SSR, las páginas siempre serán un componente js que haría un render a tu html. Para un blog esto conllevaría un costo adicional en rendimiento y mantenimiento, además que lo veo innecesario y poco eficiente, es cazar un mosquito con un F-16.

Todavía lo tenía complicado porque hay otro gran grupo de generadores basados en template y no en un framework js como son [Jekyll](http://jekyllrb.com), [Hugo](https://gohugo.io/), [Hexo](https://hexo.io/), [GitBook](https://www.gitbook.com/), [Eleventy](https://11ty.dev/), etc. Jekyl debería ser el elegido, el supremo, pero por una cuestión práctica no lo seleccioné: ya tengo mi laptop actualizada con node, los proyectos que hago solo utilizo JavaScript, a pesar que tengo ruby en la PC, mantenerlo sería un "trabajo" extra, tampoco sería un problema...esto me suena a justificación. 😁

Para facilitarme el trabajo me limité a los que tengan multiples templates y entonces tenía a Hexo, Eleventy, [Metalsmith](http://www.metalsmith.io/). Y como me gusta darle oportunidad a los que empiezan seleccioné Eleventy, muy bueno, sencillo y versátil. Luego me gustaría hablar de como me ha ido con él. Un nota a favor de Metalsmith que tiene un concepto muy interesante y me gustaria probar.

>Hugo es una gran propuesta, muy rápido y sencillo, si no te eres tan "indeciso" como yo debería ser tu elección.

### Eleventy 

Fue creado como alternativa JavaScript a Jekyll, es cero-configuración por defecto pero es muy versatil en su configuración.

* Es independiente del motor de template.Taabaja con HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug.
* Estructura de ficheros flexible. 
* No es un framwork JavaScript. No fuerza a que incluyas ninguna libreria en el contenido del sitio. 

Si te interesa puedes leer en el el [sitio de Eleventy](https://www.11ty.dev/docs/) o en el [blog de su creador](https://www.zachleat.com/web/introducing-eleventy/)

Este es solo mi historia. Ojalá te sirva de algo.