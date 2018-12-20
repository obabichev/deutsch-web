import {combineReducers} from 'redux';
import {auth} from './auth';
import {loading} from './loading';
import {glossary} from './glossary';
import {wordProgress} from './wordProgress';

export const rootReducer = combineReducers({
    glossary,
    wordProgress,
    auth,
    loading,
});
