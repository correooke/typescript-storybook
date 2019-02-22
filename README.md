npx create-react-app my-app --typescript

# or

yarn create react-app my-app --typescript


Ejemplo calculadora: https://codepen.io/tbremer/pen/wKpaWe

===============================================


To add TypeScript to a Create React App project, first install it:

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest


=== 

Luego de agregar esas librerías y correr el proyecto normalmente con "yarn start" webpack detectará si hay algún archivo "tsx" y sí es así, entonces generará el archivo de configuración de typescript en la carpeta raiz:

tsconfig.json

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html


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




