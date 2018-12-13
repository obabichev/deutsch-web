import {rest} from './base/rest';

export const getGlossaries = () => {
    return rest.get('http://127.0.0.1:8000/api/glossary');
};

export const getGlossary = (id) => {
    return rest.get(`http://127.0.0.1:8000/api/glossary/${id}/`);
};

export const putGlossary = (glossary) => {
    return rest.put(`http://127.0.0.1:8000/api/glossary/${glossary.id}/`, glossary);
};

export const postGlossary = (title) => {
    return rest.post('http://127.0.0.1:8000/api/glossary', {title});
};

export const delGlossary = (glossaryId) => {
    return rest.del(
        `http://127.0.0.1:8000/api/glossary/${glossaryId}/`
    );
};
