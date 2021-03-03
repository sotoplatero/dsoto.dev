---
layout: post
title: HTML Tailwind Alpinejs Mix Starter
excerpt: Juega y aprende con 
date: 2021-03-02
tags: post
---

Quiero presentarte un _starter_ muy sencillo pero potente que te permitirá comenzar a jugar con tailwind y [alpine](). Alpine es el complemento js perfecto para tailwindcss además que te prodrás crear aplicaciones reactivas increíbles de forma muy rápida sin tanto virtual dom, build y el copón divino.

Lo primero es que no soy experto, ni maestro ni guru; esto es solo mi experiencia, mis gustos, mis errores y solo pretendo ayudarte a dar pasos mas rápido y más largos 🚀, esto es cosa de viejos.

¿Por qué Tailwind? Adam Wathan el creador de Tailwind CSS tiene más razones [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) para mi gusto:

* Es completamente responsivo. Todos los cambios de estilo para los diferentes dispositivos se realizan directamente en el class del elemento.
* No es necesario tocar el css todo se resuelve mediante las utility class sin salir del HTML.
* Solución elegante para transiciones, animaciones y un poco mas.
* Lo que le falte se resuelve con plugins.
* Igualmente puedes crearte tus propias clases para componentes como conoces en el Bootstrap y compañia.
* Diseñado para utilizarse con [PurgeCss](https://purgecss.com/), las clases que no utilices se eliminan en producción con eso garantizas que tus ficheros de estilos sean minúsculos de verdad.

>Sobre Tailwind escribí ya escribí un post: [6 Super-utlidades de Tailwindcss que amarás](/posts/6-super-utlidades-de-tailwindcss-que-amaras/) que puedes consultar. 

>Puedes visitar [Alpine el nuevo jQuery reactivo](/posts/alpine-example/) donde implemento un buscador de cocteles utilizando una api remota.

Normalmente me demoro buscando y probando soluciones que me permitan luego agilizar el desarrollo. Así  estuve dos noches enredao con varias opciones para tener un starter html/tailwind que me gustara; puedes explorar tú mismo en [How to setup Tailwind with PurgeCSS and PostCSS](https://flaviocopes.com/tailwind-setup/) y [Tailwind CSS Laravel Mix Starter Project](https://github.com/parfaitementweb/tailwind-mix-starter). En está última me gustó la idea de utilizar [Laravel Mix](https://laravel-mix.com/) pero tiene problemas con las versiones asi que me aventuré a hacer mi propio starter [HTML Tailwind Alpine Mix](https://github.com/dsoto-blog/html-tailwind-alpine-mix), cosa que no es mi estilo porque realmente soy una fan del copia y pega, no me gusta reinventar la rueda.


### DM;MD

Para usar el proyecto solo clonamos, instalamos paquetería y arrancamos el server

```bash
 git clone https://github.com/dsoto-blog/html-tailwind-alpine-mix.git
 cd html-tailwind-alpine-mix
 npm install # or yarn
 npm run watch # or yarn watch
```

🎉Listo!!! Ya puedes ponerte a jugar, ve edita el public/index.html tanto como quieras.

### Y ahora un poco de muela

Como primer ejemplo le incluí un poco de código para implementar el modo oscuro.

El modo oscuro en el Tailwind es muy sencillo. 

1. En la configuración de Tailwind en el fichero `tailwind.config.j` que está en la raiz del proyecto habilitamos el modo oscuro mediante clases.

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
```

2. Ahora cuando el usuario seleccione el modo oscuro se le agrega la clase `'dark'` al elemento `<html>`
3. Solo nos falta definir los estilos de los elementos para el tema oscuro utilizando el prefijo `dark:` en nuestro caso `<body class="dark:bg-gray-800 dark:text-white transition">`

Para el switch de temas usamos alpinejs. En el `public/index.html` incializamos el componente `<div x-data="app()" x-init="setup()" >`. Cualquier elemento html será un componente solo con agregarle la etiqueta `x-data` y su valor definirá las variables del mismo. En este caso creamos una función javascript `app()` que devuelve las variables y en `setup()` inicializamos. 

Dentro del componente tenemos un botón que al darle click llama una función que cambia la variable tema `x-on:click="toggleTheme"` y luego un `x-show` para mostrar un ícono en base al tema actual.

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

En el javascript definimos las variables y funciones necesarias. Como puedes ver la variable `theme` se guarda en el localStorage para recordarla en próximas visitas. Espero que , solo puntualizar que con `this.$watch` le damos seguimiento a la variable `theme` para que cada vez que cambie actualizamos el localStorage y agregamos/eliminamos la clase _'dark'_ del documento _HTML_ con la función `toggleClassTheme()`

```js
    function app(){
        return {
            theme: localStorage.theme,

            // Inicializamos el componente 
            setup() {
                this.toggleClassTheme() 
                this.$watch('theme', val => {
                    localStorage.setItem('theme',val)
                    this.toggleClassTheme()
                })
            },

            toggleClassTheme(){
                if (localStorage.theme === 'dark') {
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

El proyecto puedes [verlo funcionando](https://html-tailwind-alpine-starter.dsoto.dev/)
 
Esto es solo el proyecto base que utilizaré en varios ejemplos que tengan como herramientas solo Tailwind y Alpine. Vas a poder aprender haciendo.

