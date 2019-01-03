import {authConstants} from './auth.constants';
import {createAction} from '../../util/createAction';

export const loginSuccessAction = user => createAction(
    authConstants.LOGIN_SUCCESS, {user}
);

export const logoutAction = () => createAction(
    authConstants.LOGOUT
);