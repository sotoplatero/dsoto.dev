---
layout: post
title: Comienza con HTML/Tailwind/Alpinejs
excerpt: Juega y aprende con 
date: 2021-03-02
tags: post
draft: true
---

Quiero presentarte un _starter_ muy sencillo pero potente que te permitirá comenzar a jugar con tailwind y [alpine](). Alpine es el complemento js perfecto para tailwindcss además que te permitirá crear aplicaciones reactivas increíbles de forma muy rápida.

¿Por qué Tailwind? Adam Wathan el creador de Tailwind CSS tiene más razones [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) para mi gusto:

* Es completamente responsivo solo mediante clases. Es decir todos los cambios de estilo para los diferentes dispositivos se realizan directamente en el class del elemento.
* No es necesario tocar el css para nada todo se resuelve

Normalmente me demoro buscando y probando soluciones que me permitan luego agilizar el desarrollo. Así  estuve dos noches enredao con varias opciones para tener un starter html/tailwind; puedes explorar tú mismo en [How to setup Tailwind with PurgeCSS and PostCSS](https://flaviocopes.com/tailwind-setup/) y [Tailwind CSS Laravel Mix Starter Project](https://github.com/parfaitementweb/tailwind-mix-starter). En está última me gustó la idea de utilizar [Laravel Mix](https://laravel-mix.com/) y luego de probar sin resultado porque estaban desincronizadas las versiones me aventuré a hacer mi propio starter [HTML Tailwind Alpine Mix](https://github.com/dsoto-blog/html-tailwind-alpine-mix)

### DM;MD

Para comenzar solo clonamos, instalamos paquetería y arrancamos el server

```bash
 git clone https://github.com/dsoto-blog/html-tailwind-alpine-mix.git
 cd html-tailwind-alpine-mix
 npm install # or yarn
 npm run watch # or yarn watch
```

🎉Listo!!! Ya puedes ponerte a jugar.

### Y ahora un poco de muela

Como primer ejemplo le incluí un poco de código para implementar el modo oscuro con Tailwind.

Esto es muy sencillo!!!. En el `public/index.html` está el componente el que incializamos con `<div x-data="app()" x-init="setup()" >` con esto definimos un componente Alpine con los datos definidos en `app()` y lo inicializamos en `setup()`. Dentro incluimos un botón que al darle click cambia el tema `x-on:click="toggleTheme"` y luego se muestra un íconito en base al theme actual `x-show="theme === 'dark'"`

```html
    <div x-data="app()" x-init="setup()" >

        <div class="w-screen h-screen flex items-center justify-center">
            <div>
                <h1 class="text-6xl font-bold mb-4">Tailwind + Alpine</h1>
                <div class="text-center">
                    <button x-on:click="toggleTheme" class="mx-auto" >

                        <svg x-show=" theme === 'dark' " class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>   

                        <svg x-show=" theme !== 'dark' " class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg> 
                        
                    </button>
                </div>        
            </div>
        </div>

    </div>
```

En js definimos las variables y funciones necesarias. Como puedes ver la variable `theme` se guarda en el localStorage para recordar la selección en proximas visitas. Todo muy claro. Solo puntualizar que con `this.$watch` le damos seguimiento a la variable `theme` para que cada vez que cambie actualizamos el localStorage y agregamos/eliminamos la clase _'dark'_ del documento _HTML_ con la función `toggleClassTheme()`

```js
    function app(){
        return {
            theme: localStorage.theme,
            setup() {
                this.toggleClassTheme()
                this.$watch('theme', val => {
                    localStorage.setItem('theme',val)
                    this.toggleClassTheme()
                })
            },
            toggleClassTheme(){
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
                    window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.documentElement.classList.add('dark')
                    } else {
                        document.documentElement.classList.remove('dark')
                }   
            },
            toggleTheme() {
                this.theme = (this.theme === 'dark') ? '' : 'dark'
            }
        }
    }
```

  apara que aprendas a querer a tailwind ya sobre este _framework_ me referí en [6 Super-utlidades de Tailwindcss que amarás](/posts/6-super-utlidades-de-tailwindcss-que-amaras/)

Sobre alpine [Alpine el nuevo jQuery reactivo](/posts/alpine-example/) 

