---
layout: post
title: Cartelón, proyecto para generar imágenes con texto
excerpt: Generar imágenes con tus frases preferidas de forma fácil y divertida 
date: 2021-02-04
tags: post
---

Les quiero presentar mi nuevo _"proyecto"_. Puse en pausa mi reto de escribir un post diario durante 30 días solo con la intención de hacerlo rápidito pero nada es _rápidito_, no me cansó de aprenderlo y de equivocarme, pero me emociona ver las ideas que se me ocurren.

En este post hay poco código así que no habrá **DM;MD** (Deja la Muela; Me Duermo) solo quiero escribir sobre el proceso. En [Apimani]() otro de mis "proyectos" hay un servicio muy sencillo , _txt2img_, que te permite generar una imagen con un texto que se ajusta al tamaño definido de la imagen de 1280/640. De esto ya comenté en [otro post](/posts/convierte-un-texto-en-imagen/)

### ¿Cómo es la cosa?

Entonces con este servicio en mente quería hacer una interfaz web para que los interesados en consumir el servicio pudieran generar la url, esto me supo a poco y como siempre empezó la soñadera, visualicé una pantalla llena de carteles donde puedas publicar tus pensamientos, tus frases favoritas, tus slogan pero solo en imágenes y que por supuesto puedas descargar, compartir, coño que volao!!!, puede ser una red social, un chat solo con imágenes...y entonces Stop!! Soo caballo, desmonta a tomar café.

Primero vamos a hacer carriola luego el carro. Así surgió [Cartelon](), que clase nombrecito, hay que mejorarlo, y su funcionamiento es muy sencillo solo genera una imagen con el texto, el color del texto y el fondo y seleccionando un font family aleatorio y [como base de datos uso Github](/posts/utiliza-github-como-base-de-datos/). Por supuesto esto es temporal, solo es una probatura.

![Cartelon](/img/cartelon.jpg)

### ¿Qué más?

Hay detalles que me pasaron por la cabeza que pudieran ser interesantes:

* Patrón de fondo personalizado.
* Añadirle una URL a la imagen.
* Permitir Markdown al texto.
* Detectar hashtag(#) y autor(@)
* Compartir en Twitter.


### ¿Y la técnica?

[Svelte](https://svelte.den), [Tailwind](https://tailwindcss.com), [Netlify](https://netlify.com)

### ¿Y entonces?

Como todo, puede crecer tanto como se quiera y caer en lo mismo de siempre, otra red social, otro chat, más seguidores, más corazoncitos. Así que no sé si tiene futuro, si voy a seguirlo, si va a gustar, solo queria verlo funcionando. Espero que al menos escriban su frecesita. Y siguanme para más actualizaciones, proyectos e ideas.

