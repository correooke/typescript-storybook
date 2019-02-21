import React from 'react';

const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span className="title">{text}</span>
    </button>
);

export default Button;

