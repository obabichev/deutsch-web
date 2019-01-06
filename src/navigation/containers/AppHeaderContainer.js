import {connect} from 'react-redux';
import {AppHeaderComponent} from '../components/AppHeaderComponent';
import {userSelector} from '../../selectors/auth.selectors';

const mapStateToProps = (state) => ({
    user: userSelector(state)
});

export const AppHeaderContainer = connect(mapStateToProps)(AppHeaderComponent);