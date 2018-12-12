import {connect} from 'react-redux';
import {GlossaryDetailsComponent} from '../components/GlossaryDetailsComponent';
import {glossarySelectorByPath} from '../selectors/glossary.selectors';
import {
    addCardToGlossary, removeGlossary, removeGlossaryCard,
    updateGlossary
} from '../actions/thunk/glossary.thunk.actions';

const mapStateToProps = (state, props) => ({
    glossary: glossarySelectorByPath(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    updateGlossary: (id) => dispatch(updateGlossary(id)),
    addCardToGlossary: (glossaryId, wordId, translationId) => dispatch(addCardToGlossary(glossaryId, wordId, translationId)),
    removeGlossaryCard: (glossaryCardId) => dispatch(removeGlossaryCard(glossaryCardId)),
    removeGlossary: (glossaryId) => dispatch(removeGlossary(glossaryId))
});

export const GlossaryDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(GlossaryDetailsComponent);
