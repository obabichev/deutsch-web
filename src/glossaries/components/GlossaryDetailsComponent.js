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
        const {glossary, wordProgresses} = this.props;
        if (glossary) {
            return this.renderGlossary(glossary);
        }
        return <div>
        </div>;
    }

    renderGlossary = (glossary) => {
        const total = glossary.cards.length;
        const learned = this.props.wordProgresses ? this.props.wordProgresses.filter(wp => wp.learned).length : 0;

        return <div>

            {this.renderTitle()}
            <div onClick={() => this.props.removeGlossary(glossary.id)}
                 style={{backgroundColor: 'red', margin: '10px', padding: '5px', width: "100px"}}>
                DELETE
            </div>

            {this.rencerControlBar()}

            <div className="glossaries-details-progress-container">
                <progress className="glossaries-details-progress" max={total} value={learned}/>
            </div>

            <div>
                {glossary.cards.map(this.renderCard)}
            </div>

            {this.state.addingCard
                ? <CreateCardComponent
                    onSubmit={this.onCardCreate}/>
                : this.renderAddButton()}

            <div style={{height: '200px'}}></div>
        </div>;
    };

    rencerControlBar = () => {
        const {glossary} = this.props;

        const {wordProgresses} = this.props;
        const total = glossary.cards.length;
        const learned = this.props.wordProgresses ? this.props.wordProgresses.filter(wp => wp.learned).length : 0;

        return <div className="glossaries-details-control-container">
            <div className="glossaries-details-control-icon-container"
                 onClick={this.onCloseClick}>
                <Icon icon="multiply"/>
            </div>
            <div className="glossaries-details-control-icon-container"
                 onClick={this.onRemoveGlossaryClick}>
                <Icon icon="garbage"/>
            </div>
            <div>
                <span className="glossaries-details-card-title">{glossary.title}</span>
            </div>
            <div className="glossaries-details-card-delimiter"/>
            {(wordProgresses && learned < total) && <div>
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

        addCardToGlossary(glossary.id, word.id, translation.id);
        this.setState({addingCard: false});
    };

    renderCard = (card) => {
        const {wordProgresses} = this.props;

        const wordProgress = _.find(wordProgresses, wordProgress => wordProgress.word_id === card.word.id);

        return <div className="glossaries-details-card-container">
            <div className="glossaries-details-card-word-container">
                <b className="glossaries-details-card-word-value">{card.word.val}</b> - {card.translation.val}
            </div>
            <div className="glossaries-details-card-button-container">
                {this.renderWordStatusIcon(wordProgress)}
            </div>
            <div className="glossaries-details-card-button-container glossaries-details-card-button-remove"
                 onClick={this.onDeleteClick(card.id)}>
                <Icon icon="garbage"/>
            </div>
        </div>;
    };

    renderWordStatusIcon = (wordProgress) => {
        if (wordProgress && wordProgress.learned) {
            return <Icon icon="success"/>;
        }
        return <Icon icon="minus"/>;
    };

    renderAddButton = () => {
        return <div style={{margin: 10, padding: 5, backgroundColor: 'lightgray'}}
                    onClick={this.onAddClick}>
            Add
        </div>
    };

    onAddClick = () => {
        this.setState({addingCard: true})
    };

    onDeleteClick = (glossaryCardId) => () => {
        this.props.removeGlossaryCard(glossaryCardId);
    }
}
