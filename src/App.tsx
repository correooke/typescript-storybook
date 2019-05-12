import React, {useState, FC} from 'react';
import words from 'lodash.words'
import './App.css';
import Result from './components/Result';
import Numbers from './components/Numbers';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';

type FunctionsType = React.ComponentProps<typeof Functions>;

const App : FC = () => {
  const [stack, setStack] = useState('')

  const numbers = words(stack, /[^-^+^*^/]+/g);
  console.log(numbers)
/*
  const re = /\d/g;
  const indexReg = stack.search(re);
  const resultToShow = stack.substring(indexReg);
*/
// type Sal = {a:string, n:number}
// varname?:vartype

// elem as HTMLInputElement

// Generics <T>

// Cuando una librería no tiene los types instalados 
// VSCode te advierte y te permite instalarlos fácilmente (@types/libreria)
  const props : FunctionsType = {
    onContentClear: () => setStack(''),
    onDelete: () => {},
  }
  return (
    <main className="react-calculator">
      <Result text={numbers.length ? numbers[numbers.length - 1] : numbers[0]} />
      <Numbers 
        onClickNumber={(number : string) => setStack(`${stack}${number}`)} />
      <Functions {...props} />
      <MathOperations 
        onClickOperation={(eq: string) => setStack(`${stack}${eq}`)} 
        onClickEqual={() => setStack(eval(`${stack}`))} />      
    </main>
  );
};

export default App;

