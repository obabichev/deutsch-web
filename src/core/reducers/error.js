import {CORE_ERROR_DEL, CORE_ERROR_SET} from '../actions/error.constants';

const defaultState = null;

export const error = (state = defaultState, action = {}) => {
    const {payload} = action;

    switch (action.type) {
        case CORE_ERROR_SET: {
            return payload.error;
        }
        case CORE_ERROR_DEL: {
            return defaultState;
        }
        default:
            return state;
    }
};
