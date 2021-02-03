---
layout: post
title: 10 características que me gustan de TailwindCSS
excerpt: Alpine es tan versatil, tan fácil y poderoso que parece el nuevo jQuery reactivo, te ofrece la pontencia de vue, react, angular pero sin complicaciones.
date: 2021-02-02
tags: draft
---

### [Diseño responsivo](https://tailwindcss.com/docs/responsive-design)


### [1 - Gradientes](https://tailwindcss.com/docs/gradient-color-stops)

<div class="flex justify-around">
	<button class="
		px-8 py-2 
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

Puedes usar los gradientes con una pseudo-clase como *hover* o *focus* solo antecediendo la clase de los gradientes con el prefijo `hover:` o `focus:`.

<div class="flex justify-around">
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

#### [2- Animaciones]()



<button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Actualizando Datos 
</button>


```html
<button type="button" class="bg-rose-600 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Actualizando Datos 
</button>
```

<div class="flex justify-center">
	<svg class="animate-bounce w-6 h-6 text-amber-900" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
	  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
	</svg>
</div>

### [3- Transformaciones](https://tailwindcss.com/docs/transform)

### [3- Modo Oscuro](https://tailwindcss.com/docs/dark-mode)