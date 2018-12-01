import {authConstants} from '../actions/auth.constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};

export const auth = (state = initialState, action = {}) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.payload.user
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload.user
            };
        case authConstants.LOGIN_FAILURE:
            return {};
        case authConstants.LOGOUT:
            return {};
        default:
            return state
    }
};