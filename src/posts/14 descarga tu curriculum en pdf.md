---
layout: post
title: Descarga el PDF de tu curriculum online
excerpt: Agregar el envío de formularios de contacto desde una página html y con seguridad de honeypots
date: 2021-02-10
tags: post
---

En anteriores entradas te mostré como [publicar tu curriculum](/posts/crea-tu-pagina-web-online-en-tres-pasos./) y luego como [recibir los mensajes de contacto]() y ahora quiero que veas cómo puedes permitir que los interesados en tu trabajo puedan descargar el tu curriculum en PDF.

En la página de [Cuco Perez](https://cuco-perez.netlify.app) podemos ver que tenemos un botón `Download CV` para descargar un PDF. Esto es muy bueno porque los interesados podrán llevarse tu curriculum y esto representa nuevas oportunidades. Pero si luego cambias tus datos en la web el pdf estaría desactualizado, tendrías que generar manualmente un pdf con cada cambio que hagas, complicao eh?

![Curriculum de Cuco Perez](/img/cuco-perez.jpg)

Pues la solución es super extra sencilla, en [Apimania](https://apimania.dsoto.dev) tengo un miniservicio para descargar una página web en pdf, este tipo de servicio es muy común y existen varios que puedes buscar pero lo mio primero.

**Modificamos el link de descarga**

Buscamos el link de descarga del PDF y modificamos la url de con la de *Apimania*

```html
<a 
    class="btn btn-light text-dark shadow-sm mt-1 me-1" 
    href="https://apimania.dsoto.dev/api/pdf?url=https://cuco-perez.netlify.app/" 
    target="_blank"
>
    Download CV
</a>
```

**Actualizamos el repo**

En la carpeta donde tenemos el proyecto actualizamos el repo en Github.

```bash
git add .
git commit -am "add netlify form"
git push
```

Espera un momento hasta que Netlify actualice la página y prueba la descarga del CV desde la web y si todo va ok te descargará el PDF. Notarás que el fichero no se muestra como esperabas debido al CSS de la vista print de la web. Para comprobarlo abres la página y en el navegador vas a Vista preliminar de impresión y notarás que es la misma vista del PDF. 

Para solucionar esto debes modificar el css de la vista print pero eso te lo dejo de estudio independiente puedes empezar [por este post](https://flaviocopes.com/css-printing/) o puedes buscarte un template con una mejor vista print.

Lo que quiero mostrarte es que puedes hacer mucho con poco y las posibilidades son infinitas solo depende de ti. Con este ejemplo puedes notar que no necesitas utilizar [about.me](https://about.ne) ni [linktree](https://linktr.ee/) y tendras un resultado mejor.