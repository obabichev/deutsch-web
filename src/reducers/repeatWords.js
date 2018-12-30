import {REPEAT_WORDS_LIST, WORD_PROGRESS_REPEATED} from '../actions/repeatWords.constants';

export const repeatWords = (state = null, action = {}) => {
    const {payload} = action;

    switch (action.type) {
        case REPEAT_WORDS_LIST: {
            return payload.repeatWords;
        }
        case WORD_PROGRESS_REPEATED: {
            const {wordProgressId} = payload;
            return state.filter(wordProgress => wordProgress.id !== wordProgressId)
        }
        default:
            return state;
    }
};