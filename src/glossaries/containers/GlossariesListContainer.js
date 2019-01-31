import {connect} from 'react-redux';
import {GlossariesListComponent} from '../components/GlossariesListComponent';
import {
    createGlossary, initGlossariesListContainerAction,
    removeGlossary
} from '../../actions/thunk/glossary.thunk.actions';
import {glossariesSelector} from '../../selectors/glossary.selectors';

const mapStateToProps = (state) => ({
    glossaries: glossariesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    initGlossariesListContainer: () => dispatch(initGlossariesListContainerAction()),
    createGlossary: (title) => dispatch(createGlossary(title)),
    removeGlossary: (glossaryId) => dispatch(removeGlossary(glossaryId)),
});

export const GlossariesListContainer = connect(mapStateToProps, mapDispatchToProps)(GlossariesListComponent);
