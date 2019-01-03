import {connect} from 'react-redux';
import {ErrorHintComponent} from '../components/ErrorHintComponent';
import {errorSelector} from '../../core/selectors/error.selectors';
import {closeErrorAction} from '../../core/actions/error.actions';

const mapStateToProps = (state) => ({
    error: errorSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    closeError: () => dispatch(closeErrorAction())
});

export const ErrorHintContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorHintComponent);