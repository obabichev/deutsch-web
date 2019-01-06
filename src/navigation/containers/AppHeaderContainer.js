import {connect} from 'react-redux';
import {AppHeaderComponent} from '../components/AppHeaderComponent';
import {userSelector} from '../../selectors/auth.selectors';
import {logout} from '../../auth/actions/auth.thunk.actions';

const mapStateToProps = (state) => ({
    user: userSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export const AppHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(AppHeaderComponent);