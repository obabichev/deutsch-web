import {authConstants} from './auth.constants';
import {generateAction} from '../util/generateAction';

export const loginRequest = email => generateAction(
    authConstants.LOGIN_REQUEST, {email}
);

export const loginSuccess = user => generateAction(
    authConstants.LOGIN_SUCCESS, {user}
);

export const loginFailuer = () => generateAction(
    authConstants.LOGIN_FAILURE
);
