import {loadingIds} from '../actions/loading.constants';

export const isLoading = (state, props = {}) => {
    const {loadingId = loadingIds.COMMON_LOADING} = props;
    return state.loading[loadingId];
};
