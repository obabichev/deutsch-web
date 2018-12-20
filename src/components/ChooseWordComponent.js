import React, {Component} from 'react';
import _ from 'lodash';

export class ChooseWordComponent extends Component {

    state = {
        cardsToLearn: [],
        index: 0,
        currentCard: null,
        cards: [],
        learned: []
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

        return <div>
            <div>
                <p>{currentCard ? currentCard.translation.val : ''}</p>
            </div>
            {cards.map(this.renderCard(currentCard))}
        </div>;
    }

    renderCard = currentCard => (card, index) => {
        return <div key={index}
                    onClick={this.onCardClick(currentCard.word_id, currentCard.id === card.id)}>
            <p>{card.word.val}</p>
        </div>
    };

    onCardClick = (wordId, isCorrect) => () => {
        console.log('[obabichev] wordId', wordId);
        console.log('[obabichev] isCorrect', isCorrect);

        const {cardsToLearn} = this.state;

        let index = this.state.index + 1;
        if (index === 10) {
            console.log('[obabichev] ALLLLLLLES');
            this.props.onFinish(this.state.learned);
            return;
        }
        const currentCard = cardsToLearn[index];

        const cards = _.shuffle([..._.slice(_.shuffle(cardsToLearn.filter(card => card.id !== currentCard.id)), 0, 3), currentCard]);

        this.setState({
            learned: isCorrect ? [...this.state.learned, wordId] : this.state.learned,
            index,
            cards,
            currentCard
        });
    };
}
