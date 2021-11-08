import React from 'react';

function SelectQuestion(props) {
    return (
        <div>
            <label>{props.question}</label>
            <select>
                {props.options.map((item) =>
                    <option>{item}</option>
                )}
            </select>
        </div>
    )
}

export default SelectQuestion