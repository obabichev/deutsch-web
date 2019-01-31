import {connect} from 'react-redux';
import {HomeComponent} from '../components/HomeComponent';
import {getWordsToRepeat, initHomeContainerAction} from '../actions/thunk/repeatWords.thunk.action';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    initHomeContainer: () => dispatch(initHomeContainerAction())
});

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);