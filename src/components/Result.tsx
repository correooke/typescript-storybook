import React, { FC } from 'react';

type Prop = {
    text: string
}

const Result: FC<Prop> = ({text}) => (
    <div className="editable-field" contentEditable={false} >
        {text || 0}
    </div>
);

export default Result;

