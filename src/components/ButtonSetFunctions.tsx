import React, {FC} from 'react';
import Button, { ButtonClickHandler } from './Button';

type Props = {
    onContentClear: ButtonClickHandler, 
    onDelete: ButtonClickHandler
}

const ButtonSetFunctions: FC<Props> = ({onContentClear, onDelete}) => (
    <section className="button-set--functions">
        <Button type="long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
);

export default ButtonSetFunctions;

