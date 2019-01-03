import {createAction} from '../util/createAction';
import {WORD_PROGRESS_GET_LIST_ACTION, WORD_PROGRESS_ITEM_ACTION} from './wordProgress.constants';

export const wordProgressGetAction = (wordProgresses) => createAction(
    WORD_PROGRESS_GET_LIST_ACTION,
    {wordProgresses}
);

export const wordProgressItemAction = (wordProgress) => createAction(
    WORD_PROGRESS_ITEM_ACTION,
    {wordProgress}
);
