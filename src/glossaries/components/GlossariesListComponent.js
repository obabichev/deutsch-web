import React, {Component} from 'react';
import {history} from '../../helpers/history';
import {GlossaryCardComponent} from './GlossaryCardComponent';

export class GlossariesListComponent extends Component {

    componentDidMount() {
        const {updateGlossaries} = this.props;
        updateGlossaries();
    }

    render() {
        return <div>
            <h1>Glossaries</h1>
            <div style={{width: 50, height: 50, backgroundColor: 'lightgray', margin: '10px', padding: '5px'}}
                 onClick={() => this.props.createGlossary('Unknown')}>
                NEW
            </div>

            {this.renderGlossaries()}
        </div>;
    }

    onGlossaryClick = glossaryId => () => {
        history.push(`/glossary/${glossaryId}/`);
    };

    renderGlossaries = () => {
        return this.props.glossaries.map(this.renderGlossary);
    };

    onDeleteClick = (glossaryId) => () => {
        console.log('[obabichev] DELETE', glossaryId);
        this.props.removeGlossary(glossaryId);
    };

    onLearnClick = (glossaryId) => () => {
        history.push(`/learn/glossary/${glossaryId}`);
    };

    renderGlossary = (glossary) => {
        return <GlossaryCardComponent
            key={glossary.id}
            title={glossary.title}
            count={glossary.cards.length}
            onClick={this.onGlossaryClick(glossary.id)}
            onDeleteClick={this.onDeleteClick(glossary.id)}
            onLearnClick={this.onLearnClick(glossary.id)}/>
        // return <div style={{backgroundColor: 'lightgray', margin: '10px', padding: '5px'}}
        //             key={glossary.id}
        //             onClick={this.onGlossaryClick(glossary.id)}>
        //     <p>{glossary.title}</p>
        //     <p>Terms: {glossary.cards.length}</p>
        // </div>;
    };
}