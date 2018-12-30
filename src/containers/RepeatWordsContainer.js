import {connect} from 'react-redux';
import {RepeatWordsComponent} from '../components/RepeatWordsComponent';
import {repeatWordsSimpleSelector} from '../selectors/repeatWords.selectors';
import {repeatWordAction} from '../actions/thunk/repeatWords.thunk.action';

const mapStateToProps = (state) => ({
    repeatWords: repeatWordsSimpleSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    repeatWordAction: (wordProgressId, success) => dispatch(repeatWordAction(wordProgressId, success))
});

export const RepeatWordsContainer = connect(mapStateToProps, mapDispatchToProps)(RepeatWordsComponent);
