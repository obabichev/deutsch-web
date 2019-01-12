import React, {Component} from 'react';

import './LearnWordsTypingComponent.css';
import {fullForm} from '../../util/words';

export class LearnWordsTypingComponent extends Component {

    state = {
        index: 0,
        input: '',
        cardResult: null
    };

    ref = null;

    componentDidMount() {
        this.focus();
    }

    render() {
        const card = this.props.cardsToLearn[this.state.index];

        if (this.state.cardResult) {
            return this.renderCardResult();
        }

        return this.renderInputWord(card);
    }

    renderInputWord = (card) => {
        return <div className="typing-word-container">
            <span className="typing-word-card-text">{card.translation.val}</span>
            <form onSubmit={this.onSubmit(card)}
                  className="typing-word-card-form">
                <div className="typing-word-card-input-container">
                    <input className="typing-word-card-input"
                           value={this.state.input}
                           onChange={this.onChangeInput}
                           placeholder="Your answer..."
                           ref={ref => this.ref = ref}>
                    </input>
                    <div class="typing-word-card-input-underline"></div>
                </div>
            </form>
        </div>;
    };

    onChangeInput = (event) => {
        event.preventDefault();
        const {value} = event.target;
        this.setState({
            input: value
        });
    };

    onSubmit = card => (event) => {
        event.preventDefault();

        const isCorrect = fullForm(card.word) === this.state.input;

        this.props.onLearn(card, isCorrect);

        const cardResult = {
            isCorrect,
            expectedCard: card,
            actualValue: this.state.input,
            input: ''
        };

        this.setState({
            cardResult,
            input: ''
        }, this.focus);
    };

    renderCardResult = () => {
        const {cardResult} = this.state;
        const {isCorrect} = cardResult;
        return <div className="choose-word-container">
            <form onSubmit={this.onClickCardResult}>
                <div>
                    {isCorrect && <h2 className="choose-word-result-success-color">Right!</h2>}
                    {!isCorrect && <h2 className="choose-word-result-fail-color">Wrong!</h2>}
                </div>
                {this.renderLabeledText('Translation', cardResult.expectedCard.translation.val)}
                {this.renderLabeledText('Right answer', fullForm(cardResult.expectedCard.word))}
                {!isCorrect && this.renderLabeledText('Your answer', cardResult.actualValue, true)}
                <button
                    className="choose-word-continue-button"
                    ref={ref => ref && ref.focus()}>
                    Press Enter to continue...
                </button>
            </form>
        </div>;
    };

    renderLabeledText = (label, text, isRed = false) => {
        const textClassName = `${isRed ? 'choose-word-result-fail-color' : 'choose-word-labeled-text'} `;

        return <div className="choose-word-labeled-container">
            <div className="choose-word-labeled-label">{label}</div>
            <div className={textClassName}>{text}</div>
        </div>
    };

    onClickCardResult = (event) => {
        event.preventDefault();

        const index = this.state.index + 1;

        if (index >= this.props.cardsToLearn.length) {
            this.props.onFinish();
            return;
        }

        this.setState({
            index,
            cardResult: null
        }, this.focus);
    };

    focus = () => {
        if (this.ref) {
            this.ref.focus();
        }
    }
}
