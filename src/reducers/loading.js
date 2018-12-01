import {loadingConstants} from '../actions/loading.constants';

const initialState = {};

export const loading = (state = initialState, action = {}) => {
    switch (action.type) {
        case loadingConstants.LOADING_START:
            return {
                ...state,
                [action.payload.loadingId]: true
            };
        case loadingConstants.LOADING_END:
            return {
                ...state,
                [action.payload.loadingId]: false
            };
        default:
            return state;
    }
};