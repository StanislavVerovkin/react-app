import axios from "../../axios/axios-quiz";


export function auth(email, password, isLogin) {
    return dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        };

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBSd8egKT-kMFc_uP7_OEaQYOyDauVA394';

        if (isLogin) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBSd8egKT-kMFc_uP7_OEaQYOyDauVA394'
        }

        axios.post(url, authData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => console.log(error))
    }
}