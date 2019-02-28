import React, {FC} from 'react';
import Button, {ButtonClickHandler} from './Button';

type Props = {
  onClickEquation: ButtonClickHandler, 
  onClickEqual: ButtonClickHandler
}

const ButtonSetEquations: FC<Props> = ({onClickEquation, onClickEqual}) => (
    <section className="button-set--equations">
      <Button text="+" clickHandler={onClickEquation} />
      <Button text="-" clickHandler={onClickEquation} />
      <Button text="*" clickHandler={onClickEquation} />
      <Button text="/" clickHandler={onClickEquation} />
      <Button text="=" clickHandler={onClickEqual} />
    </section>
);

export default ButtonSetEquations;

