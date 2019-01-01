import {authConstants} from '../actions/auth.constants';

const defaultState = {loggedIn: false, user: null};

let user = null;
try {
    user = JSON.parse(localStorage.getItem('user'));
} catch (err) {
}
const initialState = user ? {loggedIn: true, user} : defaultState;

export const auth = (state = initialState, action = {}) => {
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload.user
            };
        case authConstants.LOGOUT:
            return {};
        default:
            return state
    }
};