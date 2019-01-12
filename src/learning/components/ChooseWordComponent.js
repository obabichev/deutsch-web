import React, {Component} from 'react';
import _ from 'lodash';
import {fullForm} from '../../util/words';
import './ChooseWordComponent.css';

export class ChooseWordComponent extends Component {

    state = {
        cardsToLearn: [],
        index: 0,
        cards: [],
        learned: [],
        cardResult: null
    };

    componentDidMount() {
        const {cardsToLearn} = this.props;
        const index = 0;
        const currentCard = cardsToLearn[index];
        const cards = _.shuffle([..._.slice(_.shuffle(cardsToLearn.filter(card => card.id !== currentCard.id)), 0, 3), currentCard]);

        this.setState({
            cardsToLearn,
            cards,
            index
        });

        document.addEventListener("keydown", this.onKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPress, false);
    }

    onKeyPress = event => {
        const keyOne = 49;

        const key = event.keyCode;

        const {cards} = this.state;

        const index = key - keyOne;
        if (index < 0) {
            return;
        }

        if (cards && index < cards.length) {
            const card = cards[index];
            this.onCardClick(card)();
        }
    };

    render() {
        const {cards} = this.state;
        const currentCard = this.currentCard();

        if (this.state.cardResult) {
            return this.renderCardResult();
        }

        return <div className="choose-word-container">
            <div>
                <h2 className="choose-word-value">
                    {currentCard ? currentCard.translation.val : ''}
                </h2>
            </div>
            <div className="choose-word-cards-container">
                {cards.map(this.renderCard(currentCard))}
            </div>
        </div>;
    }

    renderCard = currentCard => (card, index) => {
        return <div key={index}
                    className="choose-word-card-container"
                    onClick={this.onCardClick(card)}>
            <span className="choose-word-card-text">{fullForm(card.word)}</span>
            <span className="choose-word-card-index">{index + 1}</span>
        </div>;
    };

    onCardClick = (card) => () => {
        const {cardsToLearn} = this.state;

        const index = this.state.index;
        const currentCard = cardsToLearn[index];

        const isCorrect = currentCard.id === card.id;

        const cardResult = {
            isCorrect,
            expectedCard: currentCard,
            actualCard: card
        };

        this.setState({
            learned: isCorrect ? [...this.state.learned, currentCard.word.id] : this.state.learned,
            cardResult
        });
    };

    renderCardResult = () => {
        const {cardResult} = this.state;
        const {isCorrect} = cardResult;
        return <div className="choose-word-container">
            <form onSubmit={this.onCardResultClick}>
                <div>
                    {isCorrect && <h2 className="choose-word-result-success-color">Right!</h2>}
                    {!isCorrect && <h2 className="choose-word-result-fail-color">Wrong!</h2>}
                </div>
                {this.renderLabeledText('Translation', cardResult.expectedCard.translation.val)}
                {this.renderLabeledText('Right answer', fullForm(cardResult.expectedCard.word))}
                {!isCorrect && this.renderLabeledText('Your answer', fullForm(cardResult.actualCard.word), true)}
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

    onCardResultClick = (event) => {
        event.preventDefault();
        const {cardsToLearn, index} = this.state;
        const currentCard = cardsToLearn[index + 1];

        if (index + 1 === cardsToLearn.length) {
            this.props.onFinish(this.state.learned);
            return;
        }

        const cards = _.shuffle([..._.slice(_.shuffle(cardsToLearn.filter(card => card.id !== currentCard.id)), 0, 3), currentCard]);
        this.setState({
            cards,
            index: index + 1,
            cardResult: null
        })
    };

    currentCard = () => {
        const {index, cardsToLearn} = this.state;
        return cardsToLearn[index];
    }
}
