import {rest} from './base/rest';

export const searchWords = (val) => {
    return rest.post(
        'http://127.0.0.1:8000/api/words/search',
        {val}
    );
};