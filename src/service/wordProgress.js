import {rest} from './base/rest';

export const getWordProgresses = () => {
    return rest.get('http://127.0.0.1:8000/api/wordprogress');
};

export const getRepeatWordProgresses = () => {
    return rest.get('http://127.0.0.1:8000/api/wordprogress?filter=repeat');
};

export const postWordProgress = (wordId, translationId, isLearned) => {
    return rest.post('http://127.0.0.1:8000/api/wordprogress', {
        learned: isLearned,
        word_id: wordId,
        translation_id: translationId
    });
};

export const repeatWord = (wordProgressId, success) => {
    return rest.put(`http://127.0.0.1:8000/api/wordprogress/${wordProgressId}?action=repeat`, {success});
};
