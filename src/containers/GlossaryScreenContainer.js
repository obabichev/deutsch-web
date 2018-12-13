import {connect} from 'react-redux';
import {GlossaryScreenComponent} from '../components/GlossaryScreenComponent';
import {createGlossary, downloadGlossaries} from '../actions/thunk/glossary.thunk.actions';
import {glossariesSelector} from '../selectors/glossary.selectors';

const mapStateToProps = (state) => ({
    glossaries: glossariesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    updateGlossaries: () => dispatch(downloadGlossaries()),
    createGlossary: (title) => dispatch(createGlossary(title))
});

export const GlossaryScreenContainer = connect(mapStateToProps, mapDispatchToProps)(GlossaryScreenComponent);
