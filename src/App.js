import React, {useState} from 'react';
import './App.css';
import Result from './components/Result';
import ButtonSetNumbers from './components/ButtonSetNumbers';
import ButtonSetFunctions from './components/ButtonSetFunctions';
import ButtonSetEquations from './components/ButtonSetEquations';

const App = () => {
  const [stack, setStack] = useState('')

  return (
    <main className="react-calculator">
      <Result text={stack} />
      <ButtonSetNumbers 
        onClickNumber={number => setStack(`${stack}${number}`)} />
      <ButtonSetFunctions 
        onContentClear={() => setStack('')} 
        onDelete={() => {}} />
      <ButtonSetEquations 
        onClickEquation={eq => setStack(`${stack}${eq}`)} 
        onClickEqual={() => setStack(eval(`${stack}`))} />      
    </main>
  );
};

export default App;

