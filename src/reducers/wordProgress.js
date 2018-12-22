import {WORD_PROGRESS_GET_LIST_ACTION} from '../actions/wordProgress.constants';

export const wordProgress = (state = null, action = {}) => {
    const {payload} = action;
    switch (action.type) {
        case WORD_PROGRESS_GET_LIST_ACTION:
            return payload.wordProgresses;
        default:
            return state;
    }
};
