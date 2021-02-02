---
layout: post
title: Utiliza Github como base de datos
excerpt: Crea una aplicación todos utilizando Github como base de datos.
date: 2021-01-31
tags: post
---

En el algún momento puedes necesitar una solución de base de datos para tus *side project* o presentar tus ideas online que sea fácil y con 0 costo. Esta puede ser una variante básica pero funcional.

Esta idea es la utilizada por [Staticman](https://staticman.net/) una solución de comentarios para sitios estáticos muy bien lograda. Y si quieres BD a lo grande, con todas las de la ley, entonces la solución es [Fauna](https://fauna.com/)

Bueno nosotros vamos pequeño.

*requerimientos*

* node, npm o yarn
* cuenta en github
* cuenta en netlify

**DM;MD**

### Crea repositorio y el json para guardar los datos

En Github crea un repositorio privado con nombre **db**, puede ser el cualquier otro, en este repo radicarán los ficheros `json` que funcionarán como base de datos. 

En la configuración de Github ve a `Settings / Settings Developer / Personal access tokens` y genera un nuevo token `Generate New Token`

![Developer settings](/img/github-personal-tokens.jpg)

Luego define el scope del token marca `Full control of private repositories `

![Developer settings](/img/personal-token-scopes.jpg)

Con este token vamos a poder auteticarnos y manipular los repositorios privados nuestros desde la API.

Vamos al contenido del repositorio que acabamos de crear y agregamos un nuevo fichero  `todos.json` mediante el botón `Add fIle` y le agregamos en el contenido `[]`, es decir, un arreglo vacío.

### Iniciamos el proyecto

Clona el repo [github-db](https://github.com/sotoplatero/github-db) es el contenido de este ejemplo e in

```bash
git clone https://github.com/sotoplatero/github-db
cd github-db
yarn # or npm nstall
```

Instala el cliente de Netlify. Este cliente nos va permitir ejecutar localmente las funciones de Netlify.

```bash
npm install -g netlify-cli
```

Crea un fichero `.env` con el contenido `GITHUB_TOKEN=<token creado anteriormente>`. Luego puedes ejecutar el serviro de netlify

```bash
netlify dev # or ntl dev
```

Si todo va bien puedes ir a `http://localhost:8888` y ver el ejemplo corriendo.

### ¿Qué hay en el código?

Como toda app [Jamstack](https://jamstack.org/)  tenemos  el front que para no complicarnos usamos [Alpine.js](https://github.com/alpinejs/alpine) bueno, bonito y barato. En el back están las funciones netlify que harán el trabajo gordo. La pieza más importante es la utilización de la api de Github y para esto utilizamos [Octokit](https://github.com/octokit/rest.js) no busques otro.

#### Back / Funciones

`functions/all.js` Lee el archivo `todos.json` desde el repo `db` lo devuelve. Lee los comentarios del código

```js

  // Nos authenticamos usando el personal token que hemos creado 
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  // leemos el contenido del json los tomamos los datos
  let {data} = await octokit.repos.getContent({
    owner: 'sotoplatero',
    repo: 'db',
    path: 'todos.json',
  });

  // Decodificamos a string
  let todos = Buffer.from(data.content, 'base64').toString('utf8') ;
```

`functions/create.js`

```js

  // leemos los datos del body de la llamada POST
  let todo = JSON.parse( event.body )

  // le adjuntamos un ID
  todo = {
    id: uuidv4(),
    ...todo,
  };

  // Nos authenticamos usando el personal token que hemos creado 
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  // Leemos el json que contiene el listado de todos
  let {data} = await octokit.repos.getContent({
    owner: 'sotoplatero',
    repo: 'db',
    path: 'todos.json',
  });

  // decodificamos y le agregamos el nuevo todo
  let todos = Buffer.from(data.content, 'base64').toString('utf8') 
  todos = [ ...JSON.parse(todos), todo ];

  // volvemos a codificar
  var fileContent = Buffer.from( JSON.stringify( todos ), 'utf8' ).toString('base64') 

  // actualizamos el fichero en el repo. Esto es un commit
  await octokit.repos.createOrUpdateFileContents({
      owner: 'sotoplatero',
      repo: 'db',
      path: 'todos.json',
      message: '+',
      sha: data.sha,
      content: fileContent,
    });
```

#### Front

Ya dijimos que tenemos alpine un forma muy sencilla y rápida de tener reactividad.

Declaramos el componente mediante la función `setup()` e inicimos con `init()`, esta función es como el `mounted()` de *vue.js*

```html
    <body 
      x-data="setup()" 
      x-init="init()"
      class="container"
    >
```

El setup es muy sencillo. Declaramos el arreglo `todos` para  almacenar el listado de todos y `task` para el input, `init()` llama a la función `all.js`que declaramos anteriormente que devuelve el `todos.json` que tenemos en el repo.

```js
function setup() {
    return {
        task: '',
        todos: [],
        init() {
            fetch('/api/all')
                .then( res => res.json() )
                .then( json => this.todos = json );
        }
    }
}
```

Solo falta crear el input para crear los *todo*. Definimos que al presionar enter `x-on:keydown.enter` se haga la llamada POST a la funcion `create.js` para crear el *todo*, en el body se envia el valor del input `JSON.stringify({ title: task })`

```html
        <input 
            id="input__todos" 
            type="text" 
            placeholder="Enter Todo"
            x-model="task"
            x-on:keydown.enter="
                fetch( '/api/create' , {
                    method: 'POST',
                    body: JSON.stringify({ title: task })
                })
                .then( response => response.json() )
                .then( json => todos = json )        
            "
        >
```

### Produción

Listo ahora falta crear tu propio repo con el código y publicar el sitio en Netlify.

Realmente es algo muy sencillo pero sigo empeñao en mostrar que podemos hacer muchas cosas con pocos elementos y sin complicarnos mucho la existencia. Aplicaciones de este tipo te dan experiencia, resultados rápidos, nuevas ideas. 

En el proximo post vamos a darle cultura.

El ejemplo lo puedes ver [funcionando en Netlify](https://github-db.netlify.app/)

A dormir..