import {rest} from './base/rest';

export const getWordProgresses = () => {
    return rest.get('http://127.0.0.1:8000/api/wordprogress');
};

export const postWordProgress = (wordId, isLearned) => {
    return rest.post('http://127.0.0.1:8000/api/wordprogress', {learned: isLearned, word_id: wordId});
};