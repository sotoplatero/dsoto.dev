---
layout: post
title: Crea tu blog como un verdadero DEV. GRATIS!!!
excerpt: How to decrement from a magic debug value to zero.
date: 2021-01-23
tags: post
draft: true
---

Cuando se piensa en blog siempre lo relacionamos con WordPress, y está bien, WordPress es una bestia, el que todo lo puede. Pero necesitas base de datos, servidor, plugines y si no te cuidas se pone gordo y lento. Y como eres un dev quieres un blog que sea tuyo, sin base de datos, ligero, un blog para querer y mimarlo, y una cosa más...**sin servidor** 😱

La idea base es que un blog, como el 90% de las web del mundo  son estáticas *(💡 el numerito me lo inventé, son muchos)*. De ahí la explosión de generadores de sitios estáticos según  [Jamstack](https://jamstack.org/generators/) van por 322. Hay montones en todos los lenguajes incluido papá [Jekyl](https://jekyllrb.com) quizás fue el primero, está en ruby y es el que está detrás de [Github Pages](https://pages.github.com/), y deberías probarlo en algún momento.

Si tienes un sitio estático la complejidad de tu sitio es 0, la velocidad de carga es extrema (si cuidas los assets: imagénes, js, y css) y el despliegue es **gratis** porque tenemos a [netlify](//netlify.com), [vercel](//vercel.com) , [surge](//surge.sh), [Github Pages](//pages.github.com/)...y esto es lo que queriamos. Vamos pa llá. 🚀

**TL;DR (*DLM;A*)**

Entonces lo que haremos sería crear el blog localmente mediante un generador, subirlo a github.
y publicarlo. Para esto:

* Instalamos [node](https://nodejs.org/) si no lo tienes.
* Crear una cuenta en [github](https://github.com). Quien mejor.
* Registrate en [netlify](https://netlify.com) usando la cuenta de github que acabste de crear.

### Generar el blog localmente  ###

Vamos a generar el blog con [hexo](//hexo.io/), principalmente porque maneja varios template engine incluido markdown.

Instalamos hexo

```` bash
# Instalamos globalmente
yarn global add hexo-cli # yarn (recomendado)

# o con npm
npm install -g hexo-cli
````

Creamos el proyecto e iniciamos

```` bash
hexo init my_blog
cd my_blog
yarn
hexo server
````

Abrimos http://localhost:4000 y debemos ver:
![Hexo server](/img/hexo_server.jpg)

Ohhh!! que feo!! Realmente el tema por defecto ta malito pero ya tenemos el blog corriendo local solo  buscamos un tema más chulo, hay montones, y lo instalamos:

```` bash
$ git clone https://github.com/klugjo/hexo-theme-clean-blog.git themes/clean-blog
````

Buscamos en la raiz del proyecto el fichero de configuración `_config.yaml` y editamos:

```` yaml
# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: clean-blog
````
Puedes configurarlo un pouito más pero por el momento queremos 

Espero q como buen de tengas cuenta en github, sino no tienes este es momento de crwala pues createka es free&easy

Publicamos

En el hosting estayixos existen varios opciones todas súper netlify, vercel, surge etc que son realmente una capa superior y amelcochada del los misterios AWS, Google que nos pone la cosa fácil y con planes free que no parecen de este mundo.

Vamos a tomar netlify pero igual sirve. Wecel

Screen cast netlify para publicar el blog. Renombrar dominio.

Realmente todo estoy es lo fácil ahora viene lo importante, razón de ser, el pollo del arroz con pollo, lo desconocido: escribir los post. Así q t dejo para q escribas

Na mentira. Escribe es el post actualizas el repo y listo ya está publicado.

https://www.cgmartin.com/2016/01/03/getting-started-with-hexo-blog/


    stackedit.io (Online Editor)
    https://typora.io/ (Offline Editor)



