import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-1ffce.firebaseio.com'
})