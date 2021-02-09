---
layout: post
title: La magia de Svelte
excerpt: Un framework JavaScript puesto a dieta.
date: 2021-02-06
tags: post
---

Cuando empecé a probar React sin conocer nada de reactividad mi primera impresión sobre el virtual DOM fue que aquello era una locura, siempre confío en esas primeras impresiones, tener una copia del DOM para modificarlo y luego actualizarel DOM real no me parecía una buena idea, todavia me sigue pareciendo innecesario e ineficiente.

No fue una impresión negativa, no es con mala intención, yo no soy nadie pero tampoco puedo dejar de pensar. En estos casos normalmente me averguenzo y asumo que estoy enquivocado y debe ser algo incomprensible para mi. Hasta que llegó Svelte y dijo: [_Virtual DOM is pure overhead_](https://svelte.dev/blog/virtual-dom-is-pure-overhead) y existe una alternativa mejor.

El virtual DOM es solamente una vía para lograr reactividad, de forma muy muy concisa es actualizar el DOM cuando ocurren cambios en su estado, y era la única vía que conocíamos hasta el momento de aparecer Svelte, y la que han implementado todos los framework javascript frontend: Vue, Preact, Angular, Ember, Ractive, Preact, Riot o Mithril. Svelte vino y lo hizo como nos lo hubieramos imaginado la mayoría de los simples mortales, cuando ocurre un cambio de estado simplemente modifican lo que ha cambiado en el DOM real utilizando js puro y duro.

**La maravilla de Svelte**

Además de enredarse con el virtual DOM para hacer lo evidente:

- Svelte no es un framework, es un compilador y lo que escribas durante el desarrollo Svelte lo convierte a vanilla js después del build. Entonces no tendrás nada de svelte en producción, más rápido y ligero que eso no vas a lograrlo con framework alguno. Aunque en velocidad [están compitiendo](https://svelte.dev/blog/frameworks-without-the-framework#Introducing_Svelte) con [Inferno](https://infernojs.org/)...por el momento.

- Total interoperabilidad. Puedes usar cualquier librería junto con Svelte porque lo que usas en el cliente es javascript, no tienes que ser compatible ni tener la misma libreria para cada framework, solo `npm install cool-calendar-widget` y listo.

- Con el enfoque de Svelte, se pueden agregar tantas características sin costo alguno para las personas que no las usan, porque el compilador no genera el código que implementa esas características si es innecesario. En el resto si agregas nuevas caracteristicas el framework las lleva al browser aunque no las utilice.

- Svelte puede facilitarte el desarrollo tanto como quiera porque en definitiva todo lo que escribas se compilará a javascript.

Hay mucho por venir. Svelte es muy nuevo, solo es el comienzo y está cambiando todo el tiempo. Mantente actualizado porque el "Flaco" será el proximo

[Frameworks without the framework: why didn't we think of this sooner?](https://svelte.dev/blog/frameworks-without-the-framework)
[Svelte 3: Rethinking reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity)
