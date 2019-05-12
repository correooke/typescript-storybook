# ¿Cómo utilizar TypeScript (TS) con React? 

*Código base calculadora: https://codepen.io/tbremer/pen/wKpaWe*

## ¿Qué es TypeScript?

TypeScript es un lenguaje para JavaScript que agrega agrega tipos, clases y módulos opcionales a JavaScript. TypeScript compila a JavaScript legible, basado en estándares.

## Instalación de TypeScript
### Al crear un proyecto nuevo

    // con npm
    npx create-react-app my-app --typescript

    // con yarn
    yarn create react-app my-app --typescript



### Al agregar TS a un proyecto creado con CRA

    // con npm
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest

    // con yarn 
    yarn add typescript @types/node @types/react @types/react-dom @types/jest

### Instalación de TS Global

    npm install -g typescript

## Tipos de archivos Typescript

La extensión de los archivos que poseen tipado TypeScript es:
- ".ts": Para el caso de archivos con funciones que normalmente estarían en un archivo ".js".
- ".tsx": Para componentes de React, los cuales contienen JSX
  
## Archivo de configuración tsconfig.json
Luego de agregar las librerías anteriores y correr el proyecto normalmente con "yarn start" webpack detectará si hay algún archivo "tsx" o "ts" y sí es así, entonces generará el archivo de configuración de typescript en la carpeta raiz:

> tsconfig.json

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## Notas sobre TS

### Casteo en archivos .tsx
Mientras que en los archivos de TypeScript normal podemos encontrar este tipo de casteo:

    atyped = <TypeX>a;

En los archivos que poseen JSX, es decir, con la extensión .tsx, el casteo se hace así:

    atyped = a as TypeX

### Tipos de elementos JSX que TS distingue

Se distinguen dos tipos de elementos JSX: los intrínsecos y los creados por el desarrollador (value-based). 

Los elementos intrínsecos estan definidos en la definición de tipos de React, mediante:

    interface IntrinsicElements

Este tipo de elementos no es necesario realizar el *import* para que esten disponibles. Algunos ejemplos son:
 - div
 - span
 - a
 - input
 - main
 - etc

Además de los elementos definidos en forma "intrínseca" hay algunos atributos que se definen de esta misma manera, por ejemplo:
  - key

Cuando veamos un error que diga algo de "intrinsec elements" o props, en realidad probablemente quiera decir que el elemento no existe dentro de los importados ni en los intrínsecos, o que la propiedad no existe ni en las declaradas ni en las intrínsecas

https://medium.freecodecamp.org/effective-use-of-typescript-with-react-3a1389b6072a

### Contras de utilizar Typescript

*"The only downside of using external type declarations is that it can be a bit annoying to track down bugs which are due to a versioning mismatch, or subtle bugs in type declaration files themselves. The type declaration files aren’t always supported by the original library authors."*

## Links de interés

- https://github.com/piotrwitek/react-redux-typescript-guide

- https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb

- https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d

- https://www.typescriptlang.org/docs/handbook/functions.html

- https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c

- MaterialUI : https://material-ui.com/guides/typescript/

- Resolución de módulos: https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Module%20Resolution.md

# StoryBook

### ¿Qué es StoryBook? 

Es una herramienta que permite desarrollar componentes React aisladamente de la aplicación donde los usa. También sirve para Angular y Vue.
Además, favorece la introducción de test visual automático.

### Agregar StoryBook a un proyecto

Para agregar StoryBook a un proyecto se debe ejecutar el siguiente comando:
    
    npx -p @storybook/cli sb init

### ¿Cómo ejecutar el StoryBook?

Con el comando:

    yarn storybook
    // o...
    npm run storybook

### Para generar un StoryBook listo para mostrar

  yarn build-storybook



### Ejemplo de un story

    import React from 'react';
    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import Button from './Button';

    storiesOf('Button', module)
    .add('normal', () => <Button text={'Ejecutar'} clickHandler={action('Clicking!')} />)
    .add('anormal', () => <Button text={'😍'} clickHandler={action('Clicking!')} />)

### Configuración de StoryBook

La configuración de StoryBook se realiza dentro de una carpeta que se encuentra en la raíz del proyecto y se denomina ".storybook"
El archivo "config.js" es donde reside la lógica para "levantar" los archivos que contienen stories:

Con la siguiente configuración se tomarán todos los archivos que contengan ".stories" en parte de su nombre:

    import { configure } from '@storybook/react';

    const req = require.context('../src/components', true, /\.stories\.js$|\.stories\.tsx$/);

    function loadStories() {
      req.keys().forEach(filename => req(filename));
    }

    configure(loadStories, module);

En cambio con esta configuración se tomarán sólo aquellos archivos que se encuentren en la carpeta "/stories":

    import { configure } from '@storybook/react';

    function loadStories() {
      require('../src/stories');
    }

    configure(loadStories, module);

  
### Links de interés
- https://facebook.github.io/create-react-app/docs/developing-components-in-isolation
- https://storybook.js.org/basics/writing-stories/
- Guía para React: https://storybook.js.org/basics/guide-react/
- Código fuente: https://github.com/storybooks/storybook

# Deploy en Firebase 

https://firebase.google.com/docs/cli/?hl=es-419

    > npm install -g firebase-tools
    > firebase login
    > firebase init

## Ver el proyecto corriendo en server Firebase

**https://react-calc-app.firebaseapp.com/**

### Anotaciones

// Firebase App is always required and must be first
var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");

var config = {
  // ...
};
firebase.initializeApp(config);



===================




