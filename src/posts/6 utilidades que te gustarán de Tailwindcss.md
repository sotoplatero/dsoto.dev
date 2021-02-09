---
layout: post
title: 6 Super-utlidades de Tailwindcss que amarás
excerpt: Pequeño listado de facilidades que incluye Tailwindcss y que cambiarán tu forma de ver los framework css
date: 2021-02-02
tags: post
---

Tailwindcss es un framework CSS bajo el concepto de _utility-first_ y ofrece las herramientas para que construyas tu propios componentes css. Por supuesto los mismos autores tienen [Tailwindui](https://tailwindui.com) un paquete con más de 300 componentes de pago.

Independiente del debate sobre si clases vs utility [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) Tailwindcss ya es un hecho, viene con fuerza y sin parar. Puedes ignorarlo y sequir con Bootstrap o echarle un vistazo y tener una nueva herramienta css alternativa, realmente no son excluyentes.

### [1 - Diseño responsivo en clases](https://tailwindcss.com/docs/responsive-design)

El diseño responsivo con Tailwind es una gozadera. Primero tienes definidos 5 _breakpoint_ acorde a los diferentes dispositivos:

- `sm` &rarr; 640px
- `md` &rarr; 768px
- `lg` &rarr; 1024px
- `xl` &rarr; 1280px
- `2xl` &rarr; 1536px

Para que una estilo se aplique en ciertos dispositivos solo tienes que usar el `breakpoint` como prefijo a la clase en cuestión. El diseño es `mobile-first` y si quiero que un texto incremente de tamaño en cada tamaño de pantalla tendria que definir `class="text-sm md:text-normal lg:text-lg"`.

Se puede aplicar a todas las clases de tailwind y no tienes que definir una clase para cada breakpoint, solo donde lo necesites.

```html
<img class="w-16 md:w-32 lg:w-48 lg:bg-green-200 md:text-gray-900" src="..." />
```

Para verlo en funcionamiento puedes modificar el tamaño del browser y ver los cambios del siguiente `card`.

<div class="overflow-hidden px-6 py-8">
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-full w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" alt="Man looking at item at a store" width="448" height="299">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium dark:text-gray-900 no-underline hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-500 text-normal">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </div>
  </div>
</div>

### [2 - Gradientes](https://tailwindcss.com/docs/gradient-color-stops)

Ahora que es moda usar gradientes en cualquier parte es muy fácil con Tailwind solo debes agregar la clase el tipo de gradiente `bg-gradient-to-t` y definir los color de inicio `from-`, medio `via-` y final `to-`

<div class="flex justify-around py-8">
	<button class="
		px-8 py-2 
		font-semibold
		rounded-lg
		bg-gradient-to-r 
		from-purple-400 
		via-pink-500 
		to-red-500">
		Botón con grandientes
	</button>
</div>

```html
<button
  class="
		px-8 py-3
		radius-lg
		bg-gradient-to-r 
		from-purple-400 
		via-pink-500 
		to-red-500
	"
>
  Botón con grandientes
</button>
```

#### Con pseudo-clase

Puedes usar los gradientes con una pseudo-clase como _hover_ o _focus_ solo antecediendo la clase de los gradientes con el prefijo `hover:` o `focus:`.

<div class="flex justify-around py-8">
	<button 
		class="
			px-8 py-2
			font-semibold
			rounded-lg			
			bg-gradient-to-r 
			from-purple-400 
			to-red-500
			hover:from-blue-400 
			hover:to-green-500
			transition 
			ease-in-out 
			duration-100			
		"
	>
		Botón con grandientes en el hover
	</button>
</div>

```html
<button
  class="
		px-8 py-2
		bg-gradient-to-r 
		from-purple-400 
		to-red-500
		hover:from-blue-400 
		hover:to-indigo-500
	"
>
  Botón con grandientes
</button>
```

#### Texto con gradientes

El texto con gradientes se basa en un truco. Se define el gradiente al fondo del texto y luego se aplica un clip `bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500`

<div class="flex justify-around py-8">
  <div class="text-center text-5xl font-extrabold leading-none tracking-tight">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
      Hello world
    </span>
  </div>
</div>

```html
<div class="flex justify-around py-8">
  <div class="text-center text-5xl font-extrabold leading-none tracking-tight">
    <span
      class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
    >
      Hello world
    </span>
  </div>
</div>
```

### [3- Transiciones](https://tailwindcss.com/docs/animation)

Podemos manipular las trasiciones CSS mucho más cómoda, si anteriormente no te atrevias a meterte con ellas, ahora es casi un juego. Llegas a entender que cada cambio de estilo debe llevar una trasición y dominar las transiciones hará que tu sitio web luza mucho más profesional.

Puedes manipular la duración de la trasición `duration-100`, `duration-150`, ..., `duration-1000`, la función `ease-linear`,`ease-in`, `ease-out`, `ease-in-out` y el retraso

<div class="flex justify-around py-8">
<button class="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">
  transition duration-150
</button>
<button class="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">
  transition duration-300
</button>
<button class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">
  transition duration-700
</button>
</div>

```html
<button
  class="
	transition 
	duration-500 
	ease-in-out 

	transform hover:-translate-y-1 
	hover:scale-110 
	bg-blue-600 
	hover:bg-red-600 
	text-white 
	font-semibold 
	py-3 px-6 
	rounded-md
"
>
  Botón con transición
</button>
```

### [4- Animaciones](https://tailwindcss.com/docs/animation)

Tailwindcss ofrece 4 tipos de animaciones `animate-spin`, `animate-ping`, `animate-pulse` y `animate-bounce`

**Spin**

<div class="flex justify-around py-8">
	<button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
	    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
	      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
	      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
	    </svg>
	    Actualizando Datos 
	</button>
</div>

```html
<button type="button" class="bg-rose-600 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Actualizando Datos
</button>
```

**Ping**

<div class="flex justify-around py-8">
    <span class="relative inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150">
        Transactions
      </button>
      <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
      </span>
    </span>
  </div>

_Bounce_

<div class="flex justify-around py-8">
<svg class="animate-bounce w-6 h-6 text-orange-900" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
</svg>
</div>

_Pulse_

<div class="flex justify-around py-8">
<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="flex space-x-4 animate-pulse">
      <div class="rounded-full bg-blue-400 h-12 w-12"></div>
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-blue-400 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-4 bg-blue-400 rounded"></div>
          <div class="h-4 bg-blue-400 rounded w-5/6"></div>
        </div>
      </div>
    </div>
 </div>
</div>

### [5- Transformaciones](https://tailwindcss.com/docs/transform)

Ofrece cuatro tipos de tranformaciones: _scale_, _rotate_, _translate_ y _skew_ que las puedes aplicar sobre los componentes, lo habitual es conjugarlos con pseudo-clases o eventos como puede ser el `hover:`.

En este ejemplo se muestran tres de las tranformaciones sobre el hover de un botón. Realmente es muy divertido y las posibilidades son multiples.

<div class="flex justify-center py-6 space-x-4">
	<div class="p-20">
	  <button class="transition duration-500 ease-in-out transform origin-center hover:-translate-y-2 hover:rotate-6 hover:scale-125 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">Botón Transformer</button>
	</div>
</div>

```html
<button
  class="
		transition 
		duration-500 
		ease-in-out 
		
		transform 
		hover:-translate-y-2 
		hover:rotate-6 
		hover:scale-125 
		hover:bg-red-600 

		bg-blue-600 
		text-white 
		font-semibold 
		py-3 px-6 
		rounded-md
	"
>
  Botón Transformer
</button>
```

También puedes controlar el [origen de la tranformación](https://tailwindcss.com/docs/transform-origin), el ejemplo anterior con el `origin-left`

<div class="flex justify-center py-6">
	<div class="p-20">
	  <button class="transition duration-500 ease-in-out transform origin-left hover:-translate-y-2 hover:rotate-6 hover:scale-125 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">Botón Transformer</button>
	</div>
</div>

### [6- Modo Oscuro](https://tailwindcss.com/docs/dark-mode)

Pronto tener una version de estilo en modo oscuro será un obligación, así que definir estos estilos de modo fácil y rápido es muy importante.

Tailwind hace esto de forma muy natural, incluye una variante `dark:` que se usa para definir los estilos cuando está activo el modo oscuro. Todas las clases de pueden definirse en modo oscuro.

```html
<div class="bg-white dark:bg-gray-800">
  <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
  <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
</div>
```

### Conclusiones

Esto es solo un vistazo a Tailwindcss, yo espero que habrán grandes cambios en la forma de ver el css y sus framworks. Si te interesó un poquito pues coge impulso revisa la [ayuda](https://tailwindcss.com/docs) que esta buenísima, pruebalo en tu próximo proyecto. Tailwindcss ya tiene tutoriales para la [instalación](https://tailwindcss.com/docs/installation) con los framework más representativos: next, nuxt, react, gatsby, laravel.

Si quieres probar y jugar un ratos con Tailwindcss puedes utilizar su [Playground](https://play.tailwindcss.com/). Hay uchos recursos y cada día salen nuevas ideas, proyectos.
