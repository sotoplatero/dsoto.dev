---
layout: post
title: Convierte un texto en imagen
excerpt: Un servicio sencillo para para crear imágenes con texto.
date: 2021-01-30
tags: post
---

En apimania existe un endpoint no documentada que devuelve imagen con un texto dato en la *query string*. 

La función de convertir el texto en imagen es muy sencilla y básicamente lo que hace es tomar un screenshot de un elemento de la página. Es decir, se crea un elemento HTML con los parámetros solicitados de texto y estilo y toma el screenshot mediante [Puppeteer](pptr.dev/).

Al principio tenia una función inicial pero [Gabriel](https://twitter.com/glpzzz) me habia solicitado que sin importar el largo del texto se ajustara al tamaño de la imagen. Luego de hacer algunas, varias, bastantes búsquedas y mumurar algunas *$¤%^¿ø¶;* acerca de las personas que piden y piden ca cosas, tuve que implementar la primera solución que me vino a la mente, la más evidente, la que no queria (Ay Dios mio perdóname por lo que voy a hacer): *un loop para aumentar el tamaño del texto hasta que no quepa en el container.* 

Se define el tamaño del container 1280/640, al final será el tamaño de la imagen. Se establece  el tamaño inicial del texto grande y se disminuye hasta que sea inferior al box del container. Se asume que la mayoria del texto será corto (texto tamaño grande) y disminuirlo hará el recorrido del loop más corto. 

```javascript
    let text = document.querySelector('.text');
    let fontSize;

    do {
    	fontSize = parseInt(text.style.fontSize);
        text.style.fontSize =  (  fontSize - 1 ) + 'px'
    } while ( text.offsetHeight > 640 || text.offsetWidth > 1280 );   
```

Lo sé, una *asco* pero funciona.

[![Texto largo](https://apimania.netlify.app/api/txt2img?text=As%C3%AD%20que%20cualquier%20texto%20que%20escribas%20se%20ajustar%C3%A1%20al%20tama%C3%B1o%20de%20la%20imagen)](https://apimania.netlify.app/api/txt2img?text=As%C3%AD%20que%20cualquier%20texto%20que%20escribas%20se%20ajustar%C3%A1%20al%20tama%C3%B1o%20de%20la%20imagen)

[![Texto Corto](https://apimania.netlify.app/api/txt2img?text=Puede%20ser%20texto%20corto)](https://apimania.netlify.app/api/txt2img?text=Puede%20ser%20texto%20corto)

ℹ Luego podemos ponernos creativos:

* **font** Fuente del texto. Puedes pasarle cualqueir familia de Google Font
* **bg** Color de fondo
* **color** Color del texto

`https://apimania.netlify.app/api/txt2img?text=Puedes%20ponerte%20creativo&font=Roboto%20Slab&color=%23fff&bg=brown`

![Imagen para los creativos](https://apimania.netlify.app/api/txt2img?text=Puedes%20ponerte%20creativo&font=Roboto%20Slab&color=%23fff&bg=brown)

💡 Y para los más creativos puedes formatear con algo de markdown. Puedes usar `**negritas**`, `*italic*` y `_subrayado` 

[![Texto con formato](https://apimania.netlify.app/api/txt2img?text=Podemos%20usar%20texto%20en%20**negrita**%20e%20*italic*%20o%20_subrayado_&color=darkmagenta)](https://apimania.netlify.app/api/txt2img?text=Podemos%20usar%20texto%20en%20**negrita**%20e%20*italic*%20o%20_subrayado_&color=darkmagenta)

Listo!! 🎉 y si se te ocurre algo ✈ solo pídelo; con gusto 😠 te complaceré. 