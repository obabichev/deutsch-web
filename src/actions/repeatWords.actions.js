import {generateAction} from '../util/generateAction';
import {REPEAT_WORDS_LIST, WORD_PROGRESS_REPEATED} from './repeatWords.constants';

export const repeatWordsList = (repeatWords) => generateAction(
    REPEAT_WORDS_LIST,
    {repeatWords}
);

export const wordProgressRepeated = (wordProgressId) => generateAction(
    WORD_PROGRESS_REPEATED,
    {wordProgressId}
);
