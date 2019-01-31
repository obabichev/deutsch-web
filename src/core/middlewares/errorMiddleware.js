import {CORE_ERROR_ACTION} from '../actions/error.constants';
import {NETWORK_ERROR_EXCEPTION} from './errors/networkErrorException';
import * as authActions from '../../auth/actions/auth.actions';

export const errorMiddleware = store => next => action => {
    switch (action.type) {
        case CORE_ERROR_ACTION: {
            handleError(store.dispatch)(action.payload.error);
        }
        default:
            return next(action);
    }
};

const handleError = dispatch => (error) => {
    switch (error.type) {
        case NETWORK_ERROR_EXCEPTION: {
            handleNetworkError(dispatch)(error.status, error.message);
            break;
        }
        default:
            throw error;
    }
};

const handleNetworkError = dispatch => (status, message) => {
    if (status === 401) {
        localStorage.removeItem('user');
        dispatch(authActions.logoutAction());
    }
};
