---
layout: post
title: Incluyendo las webmetions en mi blog
excerpt: Crear una API muy sencilla utilizando las funciones de Netlify.
date: 2021-01-26
tags: draft
---


*Si ya sabes lo que son las webmetions ve directo al **TL;DR***



**TL;DR**

La función la desarrollaremos en javascript (netlify solo permite js y go) asi que necesitamos tener instalado [**node**](https://nodejs.org/) y **[yarn](https://yarnpkg.com)** además de una cuenta en github y netlify.

Vamo pa llá 🏃

### 1. Preparar el proyecto ###

Creamos una carpeta para el proyecto e iniciamos

```bash
mkdir first-api
cd first-api

# crea package.json sin preguntar nada
yarn init -y
```

Creamos el repo en github y configuramos localmente

```bash
echo "# first-api" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dsoto-blog/first-api.git
git push -u origin main
```

### 2. Creamos la función ###

Creamos una carpeta functions y dentro un fichero `msg.js` con el siguiente contenido. 

```javascript
// funstions/msg.js

exports.handler = async (event, context) => {

    const { name } = event.queryStringParameters;

    const response = {
        msg: "Hola API " + name;
    }

    return {
        statusCode: 200,
        headers: { 'Content-Type':'application/json'},            
        body: JSON.stringify(response)  
    }     
};

```

Esta es un función muy básica donde solo le pasamos el parámetro `name` en la url y respondemos un mensaje. 

En la raiz del proyecto incluimos el fichero de configuración de `netlify.toml`


```toml
[build]
functions = "functions"
```

Con esto le estamos diciendo a netlify que nuestra funciones están en la carpeta `functions`.

### 3. Desplegamos  ###

Actualizamos el repo

```bash
git .
git commit -am "mi primero funcion en netlify" 
git push
```

... y creamos el sitio en netlify. 

![primera funcion en netlify](/img/create_my_first_api.jpg)

Si todo sale bien podrás [.netlify/functions/msg?name=soto](https://hungry-cray-9233f0.netlify.app/.netlify/functions/msg?name=soto). En tu caso fíjate en la cabecera del sitio para ver el nombre.

![primera funcion en netlify](/img/header_first_function.jpg)


Bueno esta es una función my sencilla solo para conocer el flujo de trabajo. Vamos a probar algo más productivo. Vamos a hacer un pequeño scrapper a la [Gaceta de Cuba](https://www.gacetaoficial.gob.cu/es) para obetener la última gaceta publicada.

Primero instalamos lo necesario [got](https://github.com/sindresorhus/got) una libreria de HTTP y [cheerio](https://cheerio.js.org/) una variante de jquery para node.

```bash
yarn add got cheerio
```

Y creamos la funcion `gaceta.js`

```javascript
// /functions/gaceta.js

const got = require('got');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {

    try {
        
        const { body } = await got('https://www.gacetaoficial.gob.cu/es');
        const $ = cheerio.load(body);

        const lastGaceta = {
            type: $('.views-field-field-tipo-edicion-gaceta .field-content').text(),
            date: $('.views-field-field-fecha-gaceta .field-content span').attr('content'),
            number: $('.views-field-field-numero-de-gaceta > .field-content').first().text(),
            url: $('.views-field-field-fichero-gaceta .field-content a').attr('href'),
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type':'application/json'},            
            body: JSON.stringify(lastGaceta),   
        }     

    } catch (e) {
        return {
            headers: { 'Content-Type':'application/json'},            
            statusCode: 500,
            body: JSON.stringify({ error: "Buumm!!! Error a la vista, prueba mas tarde"}),   
        }     
    
    }
};
```

Adicionamos el `.gitignore` para excluir node_modules y siempre me olvida.

```gitignore
/node_modules/
```

Actualizamos el repo en github y esperamos que netlify compile, listo ya podemos consultar [/.netlify/functions/gaceta](https://hungry-cray-9233f0.netlify.app/.netlify/functions/gaceta) ✨

Esto solo es para tener una idea de lo que podemos lograr con las funciones de netlify y con el paradigma **serverless**. Ahora solo falta crear cositas. Consulta la [documentación en netlify](https://docs.netlify.com/functions/overview/) y mira [algunos ejemplos](https://functions.netlify.com/examples).

