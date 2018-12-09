import {rest} from './base/rest';

export const getGlossaries = () => {
    return rest.get('http://127.0.0.1:8000/api/glossary');
};

export const getGlossary = (id) => {
    return rest.get(`http://127.0.0.1:8000/api/glossary/${id}/`);
};