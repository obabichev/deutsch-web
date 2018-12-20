import {getWordProgresses, postWordProgress} from '../../service/wordProgress';
import {wordProgressGetAction, wordProgressItemAction} from '../wordProgress.actions';

export const downloadWordProgresses = () => dispatch => {
    return getWordProgresses()
        .then(wordProgresses => dispatch(wordProgressGetAction(wordProgresses)));
};

export const saveWordProgress = (word, learned) => dispatch => {
    return postWordProgress(word.id, learned)
        .then(wordProgress => dispatch(wordProgressItemAction(wordProgress)));
};
