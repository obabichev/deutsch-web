import {connect} from 'react-redux';
import {GlossariesListComponent} from '../components/GlossariesListComponent';
import {createGlossary, downloadGlossaries, removeGlossary} from '../../actions/thunk/glossary.thunk.actions';
import {glossariesSelector} from '../../selectors/glossary.selectors';

const mapStateToProps = (state) => ({
    glossaries: glossariesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    updateGlossaries: () => dispatch(downloadGlossaries()),
    createGlossary: (title) => dispatch(createGlossary(title)),
    removeGlossary: (glossaryId) => dispatch(removeGlossary(glossaryId)),
});

export const GlossariesListContainer = connect(mapStateToProps, mapDispatchToProps)(GlossariesListComponent);
