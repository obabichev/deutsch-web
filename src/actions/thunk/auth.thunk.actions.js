import * as authActions from '../auth.actions';

export const login = (email, password) => dispatch => {
    dispatch(authActions.loginRequest(email));

    fetch('http://127.0.0.1:8000/api/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({email, password})
    })
        .then(response => response.json())
        .then(data => {
            console.log('[obabichev] data', {data});
            if (data.errors) {
                dispatch(authActions.loginFailuer(data.errors));
            } else {
                dispatch(authActions.loginSuccess(data));
            }
        });
};