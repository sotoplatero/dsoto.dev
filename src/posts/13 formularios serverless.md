---
layout: post
title: Formularios Netlify en páginas estáticas
excerpt: Agregar el envío de formularios de contacto desde una página html y con seguridad de honeypots
date: 2021-02-09
tags: post
---

Con el [anterior post](/posts/crea-tu-pagina-web-online-en-tres-pasos./) pudiste publicar una página web en Netlify y con este post podrás recibir los mensajes de cotacto. 

Para lograrlo existen [varios servicios](https://jekyllrb.com/resources/#forms) que permiten lograrlo en sitios estáticos a mi me gusta [Formspree](https://formspree.io/) aunque en este caso utilizaremos el propio Netlify.

Vamos preparar el código. En la página veremos un formulario en la parte inferior:

![](/img/formulario-de-contacto.jpg)

Edita el index.html y busca la etiqueta del formulario `<form action="https://formspree.io/your@email.com" method="POST"` y sustituyela con el siquiente código. 

```html
  <form 
    netlify
    name="contact"
    method="POST">
```
Verás que solamente estamos agregando el atributo `netlify` que también puede ser `'data-netlify="true"'` para indicarle a Netlify que este formulario es dinámico.

Y para darle un poco de seguridad incluye una solución aplicando el mecanismo de  [`honeypost`](https://en.wikipedia.org/wiki/Honeypot_(computing)), que se basa en incluir un input oculto para que las personas no puedan completarlo. En caso que este campo `honeypots` contenga algun valor indicará que ha sido completado por un `bot` que si pueden verlo.

Puedes leer en la [doc](https://docs.netlify.com/forms/spam-filters/) si quieres agregar un poco más de seguridad con [Akismet](https://akismet.com/) o reCAPTCHA 2.

Entonces dentro de la etiqueta `form` incluimos el honeypots:

```html
  <p style="display: none;">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>
```

Actualizamos el repo.

```bash
git add .
git commit -am "add netlify form"
git push
```

Esperamos qe netlify termine el deploy y en entonces podemos ir a **Forms** veremos que netlify ha detectado el formulario.

![formulario en netlify](/img/form-netlify.jpg)

Solo falta decirle que hacer cuando reciba un _submit_ para esto vamos a _Form notifications_

![formulario en netlify](/img/form-netlify-notifications.jpg)

Vemos que tenemos tres opciones: webhook, email, slack; escogemos **Email notificación** y completamos con la dirección de correos donde queremos recibir los contactos.

![formulario en netlify](/img/form-netlify-notification-email.jpg)

Solo nos falta probar así completamos el formulario en la página y luego de enviar te debe mostrar:

![formulario en netlify](/img/form-netlify-thankyou.jpg)

Puedes [leer en la doc](https://docs.netlify.com/forms/setup/#success-messages) si quieres aprender como personalizar este mensaje.

Luego de enviar el formulario puedes ver en Netlify que nos ha llegado la notificación y si revisas tu correo debes tener el mensaje.

![formulario en netlify](/img/form-netlify-submitions.jpg)

Está bueno eh? 

🚀 Listo !! Ya tenemos la página que nos gusta donde pueden contactarnos y todo rápido, sencillo y gratis. ¿Que esperas para montar tu página?