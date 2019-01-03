import {createAction} from '../util/createAction';
import {loadingConstants, loadingIds} from './loading.constants';

export const loadingStartAction = (loadingId = loadingIds.COMMON_LOADING) => createAction(
    loadingConstants.LOADING_START, {loadingId}
);

export const loadingEndAction = (loadingId = loadingIds.COMMON_LOADING) => createAction(
    loadingConstants.LOADING_END, {loadingId}
);
