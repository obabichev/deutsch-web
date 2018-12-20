import React, {Component} from 'react';
import _ from 'lodash';
import {ChooseWordComponent} from './ChooseWordComponent';
import {LearnWordsTypingComponent} from './LearnWordsTypingComponent';
import {history} from '../helpers/history';

export class LearnWordsComponent extends Component {

    state = {
        cardsToLearn: null,
        step: 0,
        firstLearned: [],
    };

    componentDidMount() {
        console.log('[obabichev] component did mount');
        const glossaryId = this.props.match.params.glossaryId;
        this.props.downloadWordProgresses();
        this.props.downloadGlossary(glossaryId);
        this.updateCardsToLearn();
    }

    componentDidUpdate() {
        console.log('[obabichev] component id update');
        this.updateCardsToLearn();
    }

    updateCardsToLearn = () => {
        if (!this.state.cardsToLearn && this.props.glossary && this.props.wordProgressesOfGlossary) {
            this.setState({
                cardsToLearn: this.findUnlearnedCards(this.props.glossary.cards, this.props.wordProgressesOfGlossary)
            });
        }
    };

    findUnlearnedCards = (cards, wordProgresses) => {
        const foundCards = _.filter(cards, card => {
            const wordProgress = _.first(_.filter(wordProgresses, wordProgress => wordProgress.word_id === card.word_id));
            if (wordProgress && wordProgress.learned) {
                return false;
            }
            return true;
        });
        return _.slice(foundCards, 0, 10);
    };

    render() {
        console.log('[obabichev] render', this.props);
        console.log('[obabichev] render.state', this.state);
        if (!this.state.cardsToLearn) {
            return <div>
                There is nothing to learn...
            </div>
        }
        return this.renderLearning();
    }

    renderLearning = () => {
        if (this.state.step === 0) {
            const {cardsToLearn} = this.state;

            return <ChooseWordComponent
                cardsToLearn={cardsToLearn}
                onFinish={this.onChooseWordFinish}
            />;
        }
        if (this.state.step === 1) {
            const {cardsToLearn} = this.state;
            return <LearnWordsTypingComponent
                cardsToLearn={_.shuffle(cardsToLearn)}
                learned={this.state.firstLearned}
                onLearn={this.onLearn}
                onFinish={this.onFinish}/>;
        }
    };

    onChooseWordFinish = learned => {
        this.setState({
            firstLearned: learned,
            step: 1
        })
    };

    onLearn = (word, success) => {
        console.log('[obabichev] saveLearned', word);
        console.log('[obabichev] success', success);
        const {firstLearned} = this.state;
        const learnedBefore = _.indexOf(firstLearned, word.id) !== -1;
        success = success && learnedBefore;
        console.log('[obabichev] success2', success);

        this.props.saveWordProgress(word, success);
    };

    onFinish = () => {
        history.goBack();
    };
}
