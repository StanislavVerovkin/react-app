import axios from 'axios';
import {AUTH_SUCCESS} from "./actionTypes";

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
                console.log(response.data);

                const data = response.data;
                const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

                localStorage.setItem('token', data.idToken);
                localStorage.setItem('userId', data.localId);
                localStorage.setItem('expirationDate', expirationDate);

                dispatch(authSuccess(data.idToken));

            })
            .catch((error) => console.log(error));
    }
}


export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}