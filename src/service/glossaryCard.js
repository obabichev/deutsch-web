import {rest} from './base/rest';

export const createGlossaryCard = (glossaryId, wordId, translationId) => {
    return rest.post(
        'http://127.0.0.1:8000/api/glossarycard',
        {
            word: wordId,
            translation: translationId,
            glossary: glossaryId
        }
    );
};