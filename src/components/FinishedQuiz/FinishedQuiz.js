import React from 'react';
import classes from './FinishedQuiz.module.css';


const FinishedQuiz = (props) => {

    const successCount = Object.keys(props.results)
        .reduce((total, key) => {

            if (props.results[key] === 'success') {
                total++
            }
            return total
        }, 0);

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const classesForIcons = [
                        'fa',
                        props.results[quizItem.id] === 'failed' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ];

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={classesForIcons.join(' ')}/>
                        </li>
                    );
                })}
            </ul>
            <p>Right {successCount} from {props.quiz.length}</p>
            <div>
                <button onClick={props.onRetry}>Repeat</button>
            </div>
        </div>
    )
};

export default FinishedQuiz