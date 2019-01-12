import React, {Component} from 'react';
import {CreateCardComponent} from './CreateCardComponent';
import _ from 'lodash';
import './GlossaryDetailsComponent.css';
import {Icon} from '../../core/components/Icon';
import {Button} from '../../core/components/Button';
import {history} from '../../helpers/history';

export class GlossaryDetailsComponent extends Component {

    state = {
        addingCard: false,
        editingTitle: false,
        titleInput: ''
    };

    titleInputRef = null;

    componentDidMount() {
        this.props.downloadGlossary(this.props.match.params.glossaryId);
        this.props.downloadWordProgresses();
    }

    render() {
        const {glossary} = this.props;
        if (glossary) {
            return this.renderGlossary(glossary);
        }
        return <div>
        </div>;
    }

    renderGlossary = (glossary) => {
        const total = glossary.cards.length;
        const learned = this.props.wordProgresses ? this.props.wordProgresses.filter(wp => wp.learned).length : 0;

        const sortedCards = [...glossary.cards].sort(this.sortCards);

        return <div className="glossary-details-container">

            {this.renderControlBar()}

            <div className="glossaries-details-progress-container">
                <progress className="glossaries-details-progress" max={total} value={learned}/>
            </div>

            {this.state.addingCard
            && <CreateCardComponent
                onSubmit={this.onCardCreate}/>}

            <div>
                {sortedCards.map(this.renderCard)}
            </div>

            <div style={{height: '200px'}}/>
        </div>;
    };

    sortCards = (first, second) => {
        const firstDate = new Date(first.updated_at);
        const secondDate = new Date(second.updated_at);
        return firstDate > secondDate ? -1 : firstDate < secondDate ? 1 : 0;
    };

    renderControlBar = () => {
        const {glossary} = this.props;

        const {wordProgresses} = this.props;
        const total = glossary.cards.length;
        const learned = this.props.wordProgresses ? this.props.wordProgresses.filter(wp => wp.learned).length : 0;

        return <div className="glossaries-details-control-container">
            <div className="glossaries-details-control-icon-container"
                 onClick={this.onCloseClick}>
                <Icon width="16px" height="16px" icon="back"/>
            </div>
            <div className="glossaries-details-control-icon-container"
                 onClick={this.onRemoveGlossaryClick}>
                <Icon width="16px" height="16px" icon="garbage"/>
            </div>
            {this.renderTitle()}
            <div className="glossaries-details-card-delimiter"/>
            {!this.state.addingCard && <div className="glossaries-details-control-button-container">
                <Button title="Add card" blue
                        onClick={this.onAddClick}/>
            </div>}
            {(wordProgresses && learned < total) && <div className="glossaries-details-control-button-container">
                <Button title="Learn" blue
                        onClick={this.onLearnClick}/>
            </div>}
        </div>;
    };

    onRemoveGlossaryClick = () => {
        const {glossary} = this.props;

        this.props.removeGlossary(glossary.id);
        history.goBack();
    };

    onLearnClick = () => {
        const {glossary} = this.props;

        history.push(`/learn/glossary/${glossary.id}`);
    };

    onCloseClick = () => {
        history.goBack();
    };

    renderTitle = () => {
        const {glossary} = this.props;

        if (this.state.editingTitle) {
            return <div>
                <form name="form"
                      className="glossaries-details-title-form"
                      onSubmit={this.onTitleSubmit}>
                    <input className="glossaries-details-title-input"
                           value={this.state.titleInput}
                           onChange={this.onTitleChange}
                           ref={(input) => this.titleInputRef = input}/>
                    {/*<Button title="Save" green/>*/}
                    <button className="glossaries-details-title-save-button">
                        Save
                    </button>
                </form>
            </div>;
        }

        return <div className="glossaries-details-card-title-container"
                    onClick={this.onTitleClick}>
            <span className="glossaries-details-card-title">{glossary.title}</span>
            <div className="glossaries-details-title-edit-container">
                <Icon icon="edit" width="16px" height="16px"/>
            </div>
        </div>;


        if (this.state.editingTitle) {
            return <div style={{margin: '10px', padding: '5px'}}>
                <form name="form"
                      onSubmit={this.onTitleSubmit}>
                    <input value={this.state.titleInput}
                           onChange={this.onTitleChange}
                           ref={(input) => this.titleInputRef = input}/>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>;
        }
        return <div style={{margin: '10px', padding: '5px'}}
                    onClick={this.onTitleClick}>
            <h2>{glossary.title}</h2>
        </div>;
    };

    onTitleChange = (event) => {
        event.preventDefault();
        const {value} = event.target;
        this.setState({
            titleInput: value
        });
    };

    onTitleSubmit = (event) => {
        event.preventDefault();
        this.props.updateGlossary({
            id: this.props.glossary.id,
            title: this.state.titleInput
        });
        this.setState({
            editingTitle: false,
            titleInput: ''
        });
    };

    onTitleClick = () => {
        this.setState({
            editingTitle: true,
            titleInput: this.props.glossary.title
        }, () => this.focusTitleInput());
    };

    focusTitleInput = () => {
        if (this.titleInputRef) {
            this.titleInputRef.focus();
        }
    };

    onCardCreate = (word, translation) => {
        const {addCardToGlossary, glossary} = this.props;
        if (!word || !translation) {
            return;
        }

        addCardToGlossary(glossary.id, word.id, translation.id);
        this.setState({addingCard: false});
    };

    renderCard = (card) => {
        const {wordProgresses} = this.props;

        const wordProgress = _.find(wordProgresses, wordProgress => wordProgress.word_id === card.word.id);

        return <div key={card.id}
                    className="glossaries-details-card-container">
            <div className="glossaries-details-card-word-container">
                <b className="glossaries-details-card-word-value">{card.word.val}</b> - {card.translation.val}
            </div>
            <div className="glossaries-details-card-button-container">
                {this.renderWordStatusIcon(wordProgress)}
            </div>
            <div className="glossaries-details-card-button-container glossaries-details-card-button-remove"
                 onClick={this.onDeleteClick(card.id)}>
                <Icon width="16px" height="16px" icon="garbage"/>
            </div>
        </div>;
    };

    renderWordStatusIcon = (wordProgress) => {
        if (wordProgress && wordProgress.learned) {
            return <Icon width="16px" height="16px" icon="success"/>;
        }
        return <Icon width="16px" height="16px" icon="minus"/>;
    };

    onAddClick = () => {
        this.setState({addingCard: true})
    };

    onDeleteClick = (glossaryCardId) => () => {
        this.props.removeGlossaryCard(glossaryCardId);
    }
}
