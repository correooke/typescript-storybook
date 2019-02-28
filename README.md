npx create-react-app my-app --typescript

# or

yarn create react-app my-app --typescript


Ejemplo calculadora: https://codepen.io/tbremer/pen/wKpaWe

===============================================


To add TypeScript to a Create React App project, first install it:

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest

Para instalar typescript globalmente: npm install -g typescript

=== 

Luego de agregar esas librerías y correr el proyecto normalmente con "yarn start" webpack detectará si hay algún archivo "tsx" y sí es así, entonces generará el archivo de configuración de typescript en la carpeta raiz:

tsconfig.json

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html


========


Sobre Typescript

Se utiliza el casteo de la forma (En los archivos jsx)

a as typex

y no se utiliza: 

<typex>a

Se distinguen dos tipos de elementos: los intrínsecos y los creados por el desarrollador (value-based).

Los intrínsecos estan definidos en la definición de tipos de React, mediante:
 interface IntrinsicElements


https://medium.freecodecamp.org/effective-use-of-typescript-with-react-3a1389b6072a

The only downside of using external type declarations is that it can be a bit annoying to track down bugs which are due to a versioning mismatch, or subtle bugs in type declaration files themselves. The type declaration files aren’t always supported by the original library authors.

https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb

https://github.com/piotrwitek/react-redux-typescript-guide

https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d

https://www.typescriptlang.org/docs/handbook/functions.html

MaterialUI : https://material-ui.com/guides/typescript/

Resolución de módulos: https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Module%20Resolution.md

===== 

Utilización de storybook

npx -p @storybook/cli sb init

https://facebook.github.io/create-react-app/docs/developing-components-in-isolation
https://storybook.js.org/basics/writing-stories/
https://storybook.js.org/basics/guide-react/
https://github.com/storybooks/storybook


================

https://firebase.google.com/docs/cli/?hl=es-419

npm install -g firebase-tools

firebase login

firebase init


https://react-calc-app.firebaseapp.com/

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






    "flow.pathToFlow": "${workspaceRoot}\\\\node_modules\\\\.bin\\\\flow",
    "flow.showUncovered": true,

        "editor.quickSuggestions": {
        "comments": false,
        "strings": false
    },
