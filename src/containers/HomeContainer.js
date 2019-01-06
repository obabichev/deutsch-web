import {connect} from 'react-redux';
import {HomeComponent} from '../components/HomeComponent';
import {getWordsToRepeat} from '../actions/thunk/repeatWords.thunk.action';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    getWordsToRepeat: () => dispatch(getWordsToRepeat())
});

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);