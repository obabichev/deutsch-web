import {generateAction} from '../util/generateAction';
import {loadingConstants, loadingIds} from './loading.constants';

export const loadingStartAction = (loadingId = loadingIds.COMMON_LOADING) => generateAction(
    loadingConstants.LOADING_START, {loadingId}
);

export const loadingEndAction = (loadingId = loadingIds.COMMON_LOADING) => generateAction(
    loadingConstants.LOADING_END, {loadingId}
);
