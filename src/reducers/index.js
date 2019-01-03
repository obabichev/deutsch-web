import {combineReducers} from 'redux';
import {auth} from './auth';
import {loading} from './loading';
import {glossary} from './glossary';
import {wordProgress} from './wordProgress';
import {repeatWords} from './repeatWords';
import {coreReducer} from '../core/reducers';

export const rootReducer = combineReducers({
    core: coreReducer,
    glossary,
    wordProgress,
    repeatWords,
    auth,
    loading,
});
