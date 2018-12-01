import * as authActions from '../auth.actions';
import * as loadingActions from '../loading.actions';
import {loadingIds} from '../loading.constants';
import {history} from '../../helpers/history';

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
                const user = data.data;
                dispatch(authActions.loginSuccess(user));
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/');
            }
        });
};

export const register = (user) => dispatch => {
    dispatch(loadingActions.loadingStartAction());
    fetch('http://127.0.0.1:8000/api/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then((data) => {
            dispatch(loadingActions.loadingEndAction());
            if (data.errors) {
                dispatch(authActions.loginFailuer(data.errors));
            } else {
                const user = data.data;
                dispatch(authActions.loginSuccess(user));
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/');
            }
        });
};