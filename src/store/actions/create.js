import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from "./actionTypes";
import axios from "../../axios/axios-quiz";

export function createQuizQuestion(item) {
    return {
        item,
        type: CREATE_QUIZ_QUESTION
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz() {
    return (dispatch, getState) => {
        axios.post('/quizes.json', getState().create.quiz)
            .then(() => {
                dispatch(resetQuizCreation())
            })
    }
}