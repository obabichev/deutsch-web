import _ from 'lodash';
import {createSelector} from 'reselect';

export const repeatWordsSimpleSelector = (state) => {
    return state.repeatWords;
};

export const repeatWordsCountSelector = createSelector(
    [repeatWordsSimpleSelector],
    (repeatWords) => {
        return _.size(repeatWords);
    }
);

