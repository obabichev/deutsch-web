import {createSelector} from 'reselect';
import _ from 'lodash';
import {glossarySelector} from './glossary.selectors';

export const wordProgressesSelector = state => state.wordProgress;

export const wordProgressesOfGlossarySelector = createSelector(
    [wordProgressesSelector, glossarySelector],
    (wordProgresses, glossary) => {
        if (wordProgresses && glossary) {
            return _.intersectionWith(wordProgresses, glossary.cards, (wordProgress, card) => wordProgress.word_id === card.word_id);
        } else {
            return null;
        }
    }
);

