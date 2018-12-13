import {delGlossary, getGlossaries, getGlossary, postGlossary, putGlossary} from '../../service/glossary';
import {
    glossariesListAction, glossarycardCreateAction, glossaryCardDeletedAction, glossaryCreatedAction,
    glossaryDeletedAction,
    glossaryItemAction
} from '../glossary.actions';
import {createGlossaryCard, delGlossaryCard} from '../../service/glossaryCard';
import {history} from '../../helpers/history';

export const downloadGlossaries = () => dispatch => {
    getGlossaries().then(
        glossaries => {
            dispatch(glossariesListAction(glossaries));
        }
    )
};

export const downloadGlossary = (id) => dispatch => {
    return getGlossary(id).then(
        glossary => {
            dispatch(glossaryItemAction(glossary));
        }
    )
};

export const createGlossary = (title) => dispatch => {
    return postGlossary(title)
        .then(
            glossary => {
                dispatch(glossaryCreatedAction(glossary));
                history.push(`/glossary/${glossary.id}/`);
            }
        );
};

export const updateGlossary = (glossary) => dispatch => {
    return putGlossary(glossary)
        .then(
            glossary => {
                dispatch(glossaryItemAction(glossary));
            }
        )
};

export const removeGlossary = (glossaryId) => dispatch => {
    return delGlossary(glossaryId)
        .then(
            () => {
                dispatch(glossaryDeletedAction(glossaryId));
                history.goBack();
            }
        );
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
