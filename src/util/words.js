export const fullForm = (word) => {
    console.log('[obabichev] word', word);
    if (word.gender) {
        return `${genderToArticle(word.gender)} ${word.val}`;
    }
    return word.val;
};

export const genderToArticle = (gender) => {
    switch (gender) {
        case 'f':
        case 'pl':
            return 'die';
        case 'm':
            return 'der';
        case 'n':
            return 'das';
        default:
            throw new Error('gender is incorrect');
    }
};
