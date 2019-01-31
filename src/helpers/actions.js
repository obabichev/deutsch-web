import {loadingIds} from '../actions/loading.constants';
import {loadingEndAction, loadingStartAction} from '../actions/loading.actions';
import {errorAction} from '../core/actions/error.actions';

export const loadingActionWrapper = (action, loadingId = loadingIds.COMMON_LOADING) => dispatch => {
    return Promise.resolve()
        .then(() => dispatch(loadingStartAction()))
        .then(() => dispatch(action))
        .then(() => dispatch(loadingEndAction()))
};

export const errorActionWrapper = (action) => dispatch => {
    return Promise.resolve()
        .then(() => dispatch(action))
        .catch(error => dispatch(errorAction(error)))
};

export const errorLoadingActionWrapper = (action) => loadingActionWrapper(errorActionWrapper(action));
