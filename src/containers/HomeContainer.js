import {connect} from 'react-redux';
import {HomeComponent} from '../components/HomeComponent';
import {getWordsToRepeat} from '../actions/thunk/repeatWords.thunk.action';
import {repeatWordsCountSelector} from '../selectors/repeatWords.selectors';
import {logout} from '../actions/thunk/auth.thunk.actions';

const mapStateToProps = (state) => ({
    repeatWordsCount: repeatWordsCountSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getWordsToRepeat: () => dispatch(getWordsToRepeat()),
    logout: () => dispatch(logout())
});

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);