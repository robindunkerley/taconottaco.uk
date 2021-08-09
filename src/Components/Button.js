import React from 'react';

const Button = (props) => {
    return (
    <div className='button-container'>
            <button onClick={props.onClick}>
                {props.text}
            </button>
    </div>
    )
}

export default Button
