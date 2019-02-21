import React from 'react';
import Button from './Button';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = onClickNumber => (numbers.map( number => (
    <Button text={number} clickHandler={onClickNumber} />
)))

const ButtonSetNumbers = ({onClickNumber}) => (
    <section className="button-set--numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
);

// Array(10).fill()
export default ButtonSetNumbers;
