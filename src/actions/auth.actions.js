import {authConstants} from './auth.constants';
import {generateAction} from '../util/generateAction';

export const loginSuccessAction = user => generateAction(
    authConstants.LOGIN_SUCCESS, {user}
);

export const logoutAction = () => generateAction(
    authConstants.LOGOUT
);