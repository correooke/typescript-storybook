import React from 'react';

const Result = ({text}) => (
    <div className="editable-field" contentEditable={false} >
        {text || 0}
    </div>
);

export default Result;

