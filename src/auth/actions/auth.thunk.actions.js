import * as authActions from './auth.actions';
import * as loadingActions from '../../actions/loading.actions';
import {history} from '../../helpers/history';
import {setErrorAction} from '../../core/actions/error.actions';

export const login = (email, password) => dispatch => {
    dispatch(loadingActions.loadingStartAction());

    fetch('http://127.0.0.1:8000/api/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({email, password})
    })
        .then(async response => {
            if (!response.ok) {
                throw await response.json();
            }
            return response.json();
        })
        .then(data => {
            dispatch(loadingActions.loadingEndAction());
            if (data.errors) {
            } else {
                const user = data.data;
                dispatch(authActions.loginSuccessAction(user));
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/');
            }
        })
        .catch(err => {
            dispatch(loadingActions.loadingEndAction());
            dispatch(setErrorAction(err));
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
        .then(async response => {
            if (!response.ok) {
                throw await response.json();
            }
            return response.json();
        })
        .then((data) => {
            dispatch(loadingActions.loadingEndAction());
            if (data.errors) {
            } else {
                const user = data.data;
                dispatch(authActions.loginSuccessAction(user));
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/');
            }
        })
        .catch(err => {
            dispatch(loadingActions.loadingEndAction());
            dispatch(setErrorAction(err));
        });
};

export const logout = () => dispatch => {
    localStorage.removeItem('user');
    dispatch(authActions.logoutAction());
    history.push('/login');
};
