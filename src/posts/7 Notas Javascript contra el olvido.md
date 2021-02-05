---
layout: post
title: Notas Javascript contra el olvido
excerpt: Snippets en javascript para recordar y tener a mano,
date: 2021-02-03
tags: post
---

Definitivamente tengo mala memoria. Y aunque escriba el código una y otra vez hay detalles que siempre tengo que buscar. Voy a tener este post y lo iré actualizando con esas ayudas que siempre tengo que buscar. Y en vez de buscar en google busco en mi blog.

Incluyo las referencias de cada tema si quieren más información.

### 1. Destructure

Me encanta _destruct_ objectos y arreglos pero hay detallitos que se me olvidan

**Renombrar**

```js
const person = {
  name: 'José',
  lastname: 'González',
};

// Destruct y Renombrar
const { name: nombre, lastname: apellidos } = person;
```

**Objetos anidados**

```js
const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
  },
};

// We define 3 local variables: name, maths, science
const {
  name,
  scores: { maths, science = 50 },
} = student;

console.log(
  `${name} scored ${maths} in Maths and ${science} in Elementary Science.`
);

// John Doe scored 74 in Maths and 50 in Elementary Science.
```

**Ignorar items en un arreglo**

```js
const rgb = [200, 255, 100];

// Skip the first two items
// Assign the only third item to the blue variable
const [, , blue] = rgb;

console.log(`Blue: ${blue}`);
// Blue: 100
```

[ES6 Destructuring: The Complete Guid](https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f)

### 2. Mutation Methods

Parece un tontería pero muchas veces no recuerdo cuáles métodos mutan el arreglo inicial y cual devuelven un nuevo array. A veces puedes estar horas rompiendote la cabeza con una lista en vue que no se entera de los cambios.

**Mutan**

- _push_ Inserta un nuevo elemento al final del arreglo
- _pop_ Elimina el último elemento
- _shift_ Elimina el primer elemento
- _unshift_ Inserta uno o más elemento al inicio del arreglo
- _splice_ Cambia el contenido de un array eliminando y/o agregando nuevos elementos
- _sort_ Ordena los elementos de un arreglo
- _reverse_ Invierte el orden de los elementos

**Nuevo Arreglo**

- _filter_ Filtrar elementos que cumplan la condición implementada mediante una función
- _concat_ Concatena dos o más arreglos
- _slice_ Devuelve una copia de una parte del arreglo
- _map_ Crea un nuevo areglo con los resultados de la función indicada aplicados a cada uno de sus elementos.
- _flat_ Crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

[MDM Web Docs / Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### 3. Clonar Objetos / Array

Existen y varios métodos para clonar arreglos y objetos a me gusta usando sintaxis extendida `...`

```js
const arr = [1, 2, 3, 4];
const arrClone = [...arr];

const obj = { a: 1, b: 2, c: 3 };
const objClone = { ...obj };
```

Este método es sencillo y elegante pero es superficial y si tienes objetos o arreglos anidados no funciona para esto lo reconmendable es usando JSON

```js
const objNested = { a: 1, b: 2, c: { a: 2 } };
const objClone = JSON.parse(JSON.stringify(obj));
```

[How to clone an array in JavaScript](https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/)
[3 Ways to Clone Objects in JavaScript](https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/)

### 4. Sistanxis Extendida _spread_

Estos tres punticos son un vacilón `...` y pudiera llamarse _el destripador_ porque a los efectos lo que hace es _desmembrar_ objetos y arreglos, solo hay que imaginarse al arreglo sin los `[]` y el objeto sin `{}`. Ya vimos que podemos clonar obj y arreglos pero también nos permite hacer más:

**Concatenar**

Aunque existe `arr1.concat(arr2)` es mucho más elegante con _spread_

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

// [1,2,3,4,5,6]
```

**Sobreescribir Propiedades**

Si lo que quieres es actualizar las

```js
const obj = { a: 1, b: 2 };

const obj2 = { ...obj, b: 3 };

console.log(obj2);

// { a: 1, b:3 }
```

[Sintáxis Spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Sintaxis_Spread)

Luego seguimos, este post quiero actualizarlo en la medidad que crece mi mala memoria.
