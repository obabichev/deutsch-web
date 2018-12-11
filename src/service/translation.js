import {rest} from './base/rest';

export const searchTranslation = (word_id, val) => {
    return rest.post(
        'http://127.0.0.1:8000/api/translation/search',
        {word_id, val}
    );
};