import {getWordProgresses, postWordProgress} from '../../service/wordProgress';
import {wordProgressGetAction, wordProgressItemAction} from '../wordProgress.actions';

export const downloadWordProgresses = () => dispatch => {
    return getWordProgresses()
        .then(wordProgresses => dispatch(wordProgressGetAction(wordProgresses)));
};

export const saveWordProgress = (word, translation, learned) => dispatch => {
    return postWordProgress(word.id, translation.id, learned)
        .then(wordProgress => dispatch(wordProgressItemAction(wordProgress)));
};

