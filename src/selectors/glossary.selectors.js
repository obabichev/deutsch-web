import _ from 'lodash';
import {createSelector} from 'reselect';

export const glossariesSelector = (state) => state.glossary;

const glossaryIdProp = (state, props) => {

    return _.parseInt(_.get(props, 'match.params.glossaryId')) || _.get(props, 'glossaryId') || null;
};

export const glossarySelector = createSelector(
    [glossariesSelector, glossaryIdProp],
    (glossaries, glossaryId) => {
        return _.first(_.filter(glossaries, glossary => glossary.id === glossaryId));
    }
);

export const glossarySelectorByPath = (state, props) => {
    const id = parseInt(props.match.params.glossaryId);
    const glossaries = glossariesSelector(state);
    for (const glossary of glossaries) {
        if (glossary.id === id) {
            return glossary;
        }
    }
    return null;
};