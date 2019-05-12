import React, { FC } from 'react';

export type ButtonClickHandler = (text: string) => void

type Props = {
    buttonType?: string, 
    text: string, 
    clickHandler: ButtonClickHandler
}

const Button : FC<Props> = ({buttonType, text, clickHandler}) => (
    <button className={buttonType} onClick={() => clickHandler(text)}>
        <span className="title">{text}</span>
    </button>
);

export default Button;

