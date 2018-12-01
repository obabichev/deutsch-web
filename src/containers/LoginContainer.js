import {connect} from 'react-redux';
import {LoginComponent} from '../components/LoginComponent';
import {isLoading} from '../selectors/loading.selectors';

const mapStateToProps = (state) => ({
    isLoading: isLoading(state)
});

export const LoginContainer = connect(mapStateToProps)(LoginComponent);