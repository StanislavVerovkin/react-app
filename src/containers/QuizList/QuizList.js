import React, {Component} from 'react';
import classes from './QuizList.module.css';
import {NavLink} from 'react-router-dom';

class QuizList extends Component {

    static renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li key={index}>

                    <NavLink to={'/quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>

                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List of tests</h1>
                    <ul>
                        {QuizList.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList