import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const classesForBtn = [
      classes.Button,
      classes[props.type]
    ];

    return (
        <button
            onClick={props.onClick}
            className={classesForBtn.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
};

export default Button