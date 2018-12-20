import {generateAction} from '../util/generateAction';
import {WORD_PROGRESS_GET_LIST_ACTION, WORD_PROGRESS_ITEM_ACTION} from './wordProgress.constants';

export const wordProgressGetAction = (wordProgresses) => generateAction(
    WORD_PROGRESS_GET_LIST_ACTION,
    {wordProgresses}
);

export const wordProgressItemAction = (wordProgress) => generateAction(
    WORD_PROGRESS_ITEM_ACTION,
    {wordProgress}
);
