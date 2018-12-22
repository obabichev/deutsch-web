import React, {Component} from 'react';
import _ from 'lodash';
import {fullForm} from '../util/words';

export class ChooseWordComponent extends Component {

    state = {
        cardsToLearn: [],
        index: 0,
        currentCard: null,
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
            currentCard,
            cards,
            index
        });
    }

    render() {
        const {currentCard, cards} = this.state;

        if (this.state.cardResult) {
            return this.renderCardResult();
        }

        return <div>
            <div style={{margin: '10px'}}>
                <p>{currentCard ? currentCard.translation.val : ''}</p>
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {cards.map(this.renderCard(currentCard))}
            </div>
        </div>;
    }

    renderCard = currentCard => (card, index) => {
        return <div key={index}
                    style={{margin: '10px', padding: '5px', backgroundColor: 'lightgray'}}
                    onClick={this.onCardClick(card)}>
            <p>{fullForm(card.word)}</p>
        </div>;
    };

    onCardClick = (card) => () => {
        const {cardsToLearn} = this.state;

        // let index = this.state.index + 1;
        // if (index === cardsToLearn.length) {
        //     this.props.onFinish(this.state.learned);
        //     return;
        // }
        const index = this.state.index;
        const currentCard = cardsToLearn[index];

        // const cards = _.shuffle([..._.slice(_.shuffle(cardsToLearn.filter(card => card.id !== currentCard.id)), 0, 3), currentCard]);

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
        return <div style={{margin: '10px'}}>
            <form onSubmit={this.onCardResultClick}>
                <div style={{padding: '5px', backgroundColor: isCorrect ? 'green' : 'red'}}>
                    <p>{isCorrect ? 'Success' : 'Fail'}</p>
                </div>
                <p>Word: {cardResult.expectedCard.translation.val}</p>
                <p>Expected: {fullForm(cardResult.expectedCard.word)}</p>
                <p>Actual: {fullForm(cardResult.actualCard.word)}</p>
                <button ref={ref => ref && ref.focus()}>Next</button>
            </form>
        </div>;
    };

    onCardResultClick = (event) => {
        event.preventDefault();
        const {cardsToLearn, index} = this.state;
        const currentCard = cardsToLearn[index];

        if (index + 1 === cardsToLearn.length) {
            this.props.onFinish(this.state.learned);
            return;
        }

        const cards = _.shuffle([..._.slice(_.shuffle(cardsToLearn.filter(card => card.id !== currentCard.id)), 0, 3), currentCard]);
        this.setState({
            cards,
            currentCard,
            index: index + 1,
            cardResult: null
        })
    };
}
