import {connect} from 'react-redux';
import {AppHeaderComponent} from '../components/AppHeaderComponent';
import {userSelector} from '../../selectors/auth.selectors';
import {logout} from '../../auth/actions/auth.thunk.actions';
import {repeatWordsCountSelector} from '../../selectors/repeatWords.selectors';
import {isLoading} from '../../selectors/loading.selectors';

const mapStateToProps = (state) => ({
    user: userSelector(state),
    repeatWordsCount: repeatWordsCountSelector(state),
    isLoading: isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export const AppHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(AppHeaderComponent);