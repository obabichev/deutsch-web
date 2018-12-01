import {connect} from 'react-redux';
import {LoginComponent} from '../components/LoginComponent';

const mapStateToProps = (state) => ({
    loggingIn: state.auth.loggingIn
});

export const LoginContainer = connect(mapStateToProps)(LoginComponent);