import React, {FC} from 'react';
import Button, {ButtonClickHandler} from './Button';

type Props = {
    onClickNumber: ButtonClickHandler
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = (onClickNumber : ButtonClickHandler) => (numbers.map( (number: number) => (
    <Button text={number.toString()} clickHandler={onClickNumber} />
)))

// Chequea aunque se invoque a un componente que es javascript

const ButtonSetNumbers: FC<Props> = ({onClickNumber}) => (
    <section className="button-set--numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
);

// Array(10).fill()
export default ButtonSetNumbers;
