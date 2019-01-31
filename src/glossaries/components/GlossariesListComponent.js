import React, {Component} from 'react';
import {history} from '../../helpers/history';
import {GlossaryCardComponent} from './GlossaryCardComponent';
import './GlossariesListComponent.css';
import {Button} from '../../core/components/Button';

export class GlossariesListComponent extends Component {

    componentDidMount() {
        const {initGlossariesListContainer} = this.props;
        initGlossariesListContainer();
    }

    render() {
        if (!this.props.glossaries) {
            return <div/>;
        }

        return <div className="glossaries-container">
            {this.renderGlossariesHeader()}
            <div className="glossaries-content-container">
                {this.renderGlossaries()}
            </div>
        </div>;
    }

    renderGlossariesHeader = () => {
        return <div className="glossaries-header-container">
            <h2 className="glossaries-list-title">Glossaries</h2>
            <div className="glossaries-header-delimiter"/>
            <div className="glossaries-create-button">
                <Button
                    title="Create"
                    onClick={() => this.props.createGlossary('Unknown')}
                    blue/>
            </div>
        </div>;
    };

    onGlossaryClick = glossaryId => () => {
        history.push(`/glossary/${glossaryId}/`);
    };

    renderGlossaries = () => {
        return this.props.glossaries.map(this.renderGlossary);
    };

    onDeleteClick = (glossaryId) => () => {
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
    };
}