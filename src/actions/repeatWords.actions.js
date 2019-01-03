import {createAction} from '../util/createAction';
import {REPEAT_WORDS_LIST, WORD_PROGRESS_REPEATED} from './repeatWords.constants';

export const repeatWordsList = (repeatWords) => createAction(
    REPEAT_WORDS_LIST,
    {repeatWords}
);

export const wordProgressRepeated = (wordProgressId) => createAction(
    WORD_PROGRESS_REPEATED,
    {wordProgressId}
);
