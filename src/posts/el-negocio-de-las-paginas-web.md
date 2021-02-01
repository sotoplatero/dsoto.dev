---
layout: post
title: Crea tu negocio de páginas web.
excerpt: Una forma de armar tu negocio desarrollo de páginas web con gasto 0. 
date: 2021-01-29
tags: post
---

[Michel Aragón](https://twitter.com/michelllaragon) en uno de sus tweets aconsejaba aprender [Carrd]() y luego vender el servicio de hacer web, genial *(porque ya lo había pensado 😇)*; por cierto a mi me gustó también [Tilda](https://tilda.cc). 

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Oportunidad de negocio online:<br><br>- Abre Youtube<br>- Aprende a hacer páginas web sencillas con Carrd<br>- Practica por 1 mes<br>- Paga $19/ año por la versión Pro<br>- Busca en Linkedin emprendedores con webs feas (o sin ellas)<br>- Ofréceles este servicio (email)<br>- Cobra $200 - $450 por página</p>&mdash; Michel Aragón (@michelllaragon) <a href="https://twitter.com/michelllaragon/status/1353844892078891011?ref_src=twsrc%5Etfw">January 25, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

En este post quiero presentar un procedimiento para brindar el servicio de desarrollar páginas web. Cualquiera con deseos de aprender puede hacerlo. Solo necesitas saber/aprender un poco de html/css. 

La idea base es que la página web que necesitamos cada uno, como el 90% de las web del mundo *(💡 el numerito me lo inventé pero son bastantes)*, es estática, exacto!!!, tu página es estática, no necesita wordpress, drupal, laravel, django, solo html; ya sea un portafolio, un restaurante, un hostal, una tienda y etc... otra vez y ya, tú página es estática, este blog es estático. 

De ahí la explosión de generadores de sitios estáticos según  [Jamstack](https://jamstack.org/generators/) van por 322. Hay montones en todos los lenguajes y para todos los gustos. Puedes utilizar un generador y harias páginas web como si fueran chorizos, pero esto lo dejamos para otro post. 

🔅 Una aclaración, que la página sea estática o que utilices generadores no la demerita, las páginas serán tan profesionales como lo sea el desarrollador. Esto es solo es otra herramienta/framework. 

Este es un procedimiento super/extra/contra/sencillo que te permitirá organizarte para vender páginas web.

### 1. Crea un archivo de temas.

Dedica un tiempo a buscar temas de varios estilos y formatos que cubran las necesidades de tus futuros clientes. Existen muchos temas free que puedes utilizar o puedes comprar varios temas avanzados y modernos. Es importante que leas las condiciones de uso, somos una comunidad y debes ser respetuosos con el trabajo de los demás.

* [Templateflip](https://templateflip.com/)
* [Templated](https://templated.co/)
* [6000+ Free HTML Templates](https://nicepage.com/html-templates)
* [15 Beautiful Wedding Website HTML Templates (Free & Premium)](https://superdevresources.com/wedding-website-html-templates/)
* [30+ Material Design HTML5 Templates Available for Download (Free & Paid)](https://superdevresources.com/material-design-html5-templates-free-download/)
* [17 Best Bootstrap Business Templates for Companies, Startups and Agencies](https://superdevresources.com/bootstrap-business-templates/)
* [50+ Best Bootstrap 4 Templates – Free Download & Premium](https://superdevresources.com/bootstrap-templates-download/)
* [30+ Best Bootstrap Templates for Free Download](https://superdevresources.com/bootstrap-templates/)

Crea una carpeta con todos los temas para crear un catálogo que presentarás a tus clientes, como si vendieras muebles. 😈  O mejor:

Create un excel como base de datos con una una tabla donde listes los temas y agrega algunos campos para organizar los datos: 

* url ubucacion del tema
* Categoria(s). Define una categorias o varias que te permita definir el uso del tema. Ej: restaurate, hostal, portafolio, artesanos, etc
* Caracteristicas: Especifica caracteristicas que definan su funcionamiento. Ej: slideshow, landingpage, sidemenu

Una mejor opción sería una página local `index.html` que sirva de portal y donde incluyas el mismo listado y que te permita visualizar, filtrar y paginar todos los temas y así te ayude a la hora de mostrar el portafolio a los posibles clientes.

Y por supuesto crearte tu propia página.

Ahora solo necesitas vender, vender y vender.

### 2. Personaliza. 

Ármate de las herramientas necesarias para hacer el trabajo y estés cómodo. De momento necesitarás un editor de código( VSCode ó Sublime Text ). 

Un editor de imágenes sencillo y rápido, nada de Photoshop, una herramienta que te permita editar varias imágenes al mismo tiempo. No vamos a crear imagenes solo editar las de los clientes:

* [Polarr](https://www.polarr.com/windows/0)
* [Fotosizer](https://www.fotosizer.com)
* [Fotor](https://www.fotor.com/)
* [Light Image Resizer](https://www.obviousidea.com/windows-software/light-image-resizer/)
* [ImBatch](https://www.highmotionsoftware.com/products/imbatch)

Para incluir formularios puedes utilizar: 

[Formspree](https://formspree.io/)
[FormKeep](https://formkeep.com)
[Formspark](https://formspark.io/)

Permitir comentarios:

[utterances](https://utteranc.es)
[Commento](https://www.commento.io/)
[Disqus](https://disqus.com/)

Y hay más, las posibilidades son infinitas.

### 3. Publica

Cuando tengas lista la página solamente falta ponernos en línea. Hay varias opciones para hostear sitios estaticos y vamos con [netlify](https://netlify.com)

Requerimientos: 

* Registro en Github.
* Registro en netlify.
* Cliente [git](https://git-scm.com/downloads).


1. [Crea el repo en Github](https://docs.github.com/es/github/getting-started-with-github/create-a-repo)
2. Al finalizar ejecuta en la carpeta del proyecto que este trabajando:

```bash
echo "# first-api" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dsoto-blog/first-api.git
git push -u origin main
```

Al finalizar esto ya tenemos el repositorio actualizado con nuestros cambios en github.

3. Crear sitio en Netlify desde Github:

![Crear sitio en Netlify](/img/create_new_site_netlify.jpg)

Siga las instrucciones y cuando termine el propio Netlify nos mostrará cuando el sitio este online. Vamos a Domain Settings y nos ponemos un nombre bonito o configuramos el dominio propio que hayamos adquirido.

De esta forma cada vez que actualicemos la pagina web solo tenemos que actualizar el repo `git push` y el sitio se actualizará online sin nada más.  

### Conclusiones.

Al final el gasto de desarrollar el sitio se reduce a "0", claro necesitas mucha práctica, muchos deseos pero ya no hay justificación para no vender páginas web. 

Otro punto a tener en cuenta es el precio. Los precios deben ser mucho menores a lo acostumbrado, ya tenemos gasto 0 solo necesitamos que el cliente confie en nosotros, valora un precio justo y establece un precio anual por el servicio de actualización, Update as a Service, UaaS, me cuadra el nombrecito,  existirá?