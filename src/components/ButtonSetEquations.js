import React from 'react';
import Button from './Button';

const ButtonSetEquations = ({onClickEquation, onClickEqual}) => (
    <section className="button-set--equations">
      <Button text="+" clickHandler={onClickEquation} />
      <Button text="-" clickHandler={onClickEquation} />
      <Button text="*" clickHandler={onClickEquation} />
      <Button text="/" clickHandler={onClickEquation} />
      <Button text="=" clickHandler={onClickEqual} />
    </section>
);

export default ButtonSetEquations;

