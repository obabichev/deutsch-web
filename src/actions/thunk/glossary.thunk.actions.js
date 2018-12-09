import {getGlossaries, getGlossary} from '../../service/glossary';
import {glossariesListAction, glossaryItemAction} from '../glossary.actions';

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
