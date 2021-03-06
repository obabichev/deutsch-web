import {connect} from 'react-redux';
import {GlossaryDetailsComponent} from '../components/GlossaryDetailsComponent';
import {glossarySelectorByPath} from '../../selectors/glossary.selectors';
import {
    addCardToGlossary, removeGlossary, removeGlossaryCard,
    downloadGlossary, updateGlossary
} from '../../actions/thunk/glossary.thunk.actions';
import {downloadWordProgresses} from '../../actions/thunk/wordProgress.thunk';
import {wordProgressesOfGlossarySelector} from '../../selectors/wordProgress.selectors';

const mapStateToProps = (state, props) => ({
    glossary: glossarySelectorByPath(state, props),
    wordProgresses: wordProgressesOfGlossarySelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    downloadGlossary: (id) => dispatch(downloadGlossary(id)),
    addCardToGlossary: (glossaryId, wordId, translationId) => dispatch(addCardToGlossary(glossaryId, wordId, translationId)),
    removeGlossaryCard: (glossaryCardId) => dispatch(removeGlossaryCard(glossaryCardId)),
    removeGlossary: (glossaryId) => dispatch(removeGlossary(glossaryId)),
    updateGlossary: (glossary) => dispatch(updateGlossary(glossary)),
    downloadWordProgresses: () => dispatch(downloadWordProgresses()),
});

export const GlossaryDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(GlossaryDetailsComponent);
