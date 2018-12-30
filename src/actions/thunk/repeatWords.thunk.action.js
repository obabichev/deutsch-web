import {getRepeatWordProgresses, repeatWord} from '../../service/wordProgress';
import {repeatWordsList, wordProgressRepeated} from '../repeatWords.actions';
import {wordProgressItemAction} from '../wordProgress.actions';

export const getWordsToRepeat = () => dispatch => {
    return getRepeatWordProgresses()
        .then(repeatWords => {
            dispatch(repeatWordsList(repeatWords))
        });
};

export const repeatWordAction = (wordProgressId, success) => dispatch => {
    return repeatWord(wordProgressId, success)
        .then(wordProgress => {
            dispatch(wordProgressItemAction(wordProgress));
            if (success) {
                dispatch(wordProgressRepeated(wordProgressId));
            }
        });
};
