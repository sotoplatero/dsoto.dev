---
layout: post
title: Utiliza Github como base de datos II
excerpt: Crea una aplicación con Alpine, Netlify y Github como base de datos.
date: 2021-02-01
tags: post
---

En el [post anterior](/posts/utiliza-github-como-base-de-datos/) les mostré un ejemplo de como crear la famosa aplicación de TO-DO utilizando [Alpine.js](https://github.com/alpinejs/alpine/) en el front, las [funciones de netlify](https://docs.netlify.com/functions/overview/) en el back y Github como base de datos ahora vamos a agregarle las funciones `delete` y `update` que incluye la funcionalidad de marcar como terminada un  to-do.

Primero incluí un nuevo fichero `index1.html` que contiene la nueva versión del TODO y un menu para navegar entre ellas, luego quiero agregar una tercera version con pacotilla visual.

Si quieres ir al directo solo clona o actualiza el [repo](https://github.com/sotoplatero/github-like-db-alpinejs)

### FRONT

En front cambiamos la configuración del componente para organizar el cuartico y ahora la función `setup()` contiene las variables todo y task; y las funciones `init()`, `add()`, `update()`, `remove()`

El nuevo componente

```html
    <body 
      x-data="setup()" 
      x-init="init()"
      class="container"
    >
```

Cada TO-DO en listado ahora se compone con un checkbox para el estado de terminado, un input para el título y botón de eliminar. Cada uno de ellos llama un método del componente.

```html
   <div class="row">
      <div class="col-1 text-left is-vertical-align">
          <!-- Checkbox para marcar el to-do como terminado -->
         <input 
             type="checkbox"
             x-bind:checked="todo.done"
             x-model="todo.done"
             x-on:click="update({...todo, done: !todo.done})"
          >
      </div>

      <!-- La descripción del to-do ahora está en un input para facilitar el update -->
      <input 
           x-model="todo.title"
           x-on:keydown.enter="update(todo)" 
           class="col-10 ">

      <!-- Eliminar el to-do -->
      <button
            class="button clear text-error pull-right is-paddingless col-1 text-right" 
            x-on:click="remove(todo.id)"
      >✖</button>
   </div>
```

### BACK

En el back agregué las funciones update y delete tienes la misma lógica de cargar el fichero `todos.json` del repo DB hacer los cambios necesarios actualizar, o eliminar el to-do, veamos:

En el update:

```js
  // pasar el objeto todo en el body del metodo POST
  let todo = JSON.parse( event.body )

  // leo el contenido de todos.json con octokit.repos.getContent

  // localizo el to-do mediante el id el todo
  todoIndex = todos.findIndex( el => el.id === todo.id );

  // Actualizo el todo con los datos pasados en el body
  todos.splice( todoIndex, 1, todo);
```

Y la función delete seria lo mismo pero eliminando

```js
  todoIndex = todos.findIndex( el => el.id === id );
  todos.splice( todoIndex, 1);  // eliminamos el elemento del arreglo
```

🚀 La versión final la puedes ver en [github-db](http://localhost:8888/index1.html). Todavia podemos refactorizar, darle más estilo sigueme en [twitter](https://twitter.com/sotoplatero) para estár al tanto de las actualización. 

