import {createAction} from '../../util/createAction';
import {CORE_ERROR_ACTION, CORE_ERROR_DEL, CORE_ERROR_SET} from './error.constants';

export const setErrorAction = (error) => createAction(CORE_ERROR_SET, {error});

export const closeErrorAction = () => createAction(CORE_ERROR_DEL, {});

export const errorAction = (error) => createAction(CORE_ERROR_ACTION, {error});
