import React, {FC} from 'react';

type Props = {
    text: string
}

const Result : FC<Props> = ({text}) => (
    <div className="editable-field" contentEditable={false} >
        {text || 0}
    </div>
);

export default Result;

