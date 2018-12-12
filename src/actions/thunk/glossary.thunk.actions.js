import {getGlossaries, getGlossary} from '../../service/glossary';
import {
    glossariesListAction, glossarycardCreateAction, glossaryCardDeletedAction,
    glossaryItemAction
} from '../glossary.actions';
import {createGlossaryCard, delGlossaryCard} from '../../service/glossaryCard';

export const updateGlossaries = () => dispatch => {
    getGlossaries().then(
        glossaries => {
            dispatch(glossariesListAction(glossaries));
        }
    )
};

export const updateGlossary = (id) => dispatch => {
    return getGlossary(id).then(
        glossary => {
            dispatch(glossaryItemAction(glossary));
        }
    )
};

export const addCardToGlossary = (glossaryId, wordId, translationId) => dispatch => {
    return createGlossaryCard(glossaryId, wordId, translationId)
        .then(
            glossaryCard => {
                dispatch(glossarycardCreateAction(glossaryCard))
            }
        )
};

export const removeGlossaryCard = (cardId) => dispatch => {
    return delGlossaryCard(cardId)
        .then(
            () => {
                dispatch(glossaryCardDeletedAction(cardId));
            }
        )
};
