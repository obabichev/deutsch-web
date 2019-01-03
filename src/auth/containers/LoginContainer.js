import {connect} from 'react-redux';
import {LoginComponent} from '../components/LoginComponent';
import {isLoading} from '../../selectors/loading.selectors';
import {errorSelector} from '../../core/selectors/error.selectors';
import {closeErrorAction} from '../../core/actions/error.actions';
import {login} from '../actions/auth.thunk.actions';

const mapStateToProps = (state) => ({
    isLoading: isLoading(state),
    error: errorSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    closeError: () => dispatch(closeErrorAction()),
    login: (email, password) => dispatch(login(email, password))
});

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);