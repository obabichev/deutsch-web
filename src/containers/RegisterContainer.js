import {connect} from 'react-redux';
import {RegisterComponent} from '../components/RegisterComponent';
import {isLoading} from '../selectors/loading.selectors';

const mapStateToProps = state => ({
    isLoading: isLoading(state)
});

export const RegisterContainer = connect(mapStateToProps)(RegisterComponent);
