import React from 'react';
import Button from './Button';

const ButtonSetFunctions = ({onContentClear, onDelete}) => (
    <section className="button-set--functions">
        <Button type="long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
);

export default ButtonSetFunctions;

