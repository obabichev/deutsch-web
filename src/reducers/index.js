import {combineReducers} from 'redux';
import {auth} from './auth';
import {loading} from './loading';
import {glossary} from './glossary';

export const rootReducer = combineReducers({
    glossary,
    auth,
    loading,
});
