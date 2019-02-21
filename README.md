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





================

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




