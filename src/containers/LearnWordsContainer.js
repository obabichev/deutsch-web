import {connect} from 'react-redux';

import {LearnWordsComponent} from '../components/LearnWordsComponent';
import {glossarySelectorByPath} from '../selectors/glossary.selectors';
import {downloadWordProgresses, saveWordProgress} from '../actions/thunk/wordProgress.thunk';
import {downloadGlossary} from '../actions/thunk/glossary.thunk.actions';
import {wordProgressesOfGlossarySelector} from '../selectors/wordProgress.selectors';

const mapStateToProps = (state, props) => ({
    glossary: glossarySelectorByPath(state, props),
    wordProgressesOfGlossary: wordProgressesOfGlossarySelector(state, props)
});

const mapDispatchToProps = (dispatch, props) => ({
    downloadGlossary: (id) => dispatch(downloadGlossary(id)),
    downloadWordProgresses: () => dispatch(downloadWordProgresses()),
    saveWordProgress: (word, translation, learned) => dispatch(saveWordProgress(word, translation, learned))
});

export const LearnWordsContainer = connect(mapStateToProps, mapDispatchToProps)(LearnWordsComponent);
