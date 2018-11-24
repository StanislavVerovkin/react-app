import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = (props) => {

    const classesForAnswer = [classes.AnswerItem];
    
    if (props.state) {
        classesForAnswer.push(classes[props.state])
    }
    
    return (
        <li className={classesForAnswer.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    );
};

export default AnswerItem