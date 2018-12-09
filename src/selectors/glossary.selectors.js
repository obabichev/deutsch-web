export const glossariesSelector = (state) => state.glossary;

export const glossarySelectorByPath = (state, props) => {
    const id = parseInt(props.match.params.id);
    const glossaries = glossariesSelector(state);
    for (const glossary of glossaries) {
        if (glossary.id === id) {
            return glossary;
        }
    }
    return null;
};