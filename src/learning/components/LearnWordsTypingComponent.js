import React, {Component} from 'react';
import _ from 'lodash';

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

        return <div>
            <h2>Words typing</h2>
            {this.renderInputWord(card)}
        </div>;
    }

    renderInputWord = (card) => {
        return <div>
            <div>
                {card.translation.val}
            </div>
            <form onSubmit={this.onSubmit(card)}>
                <input value={this.state.input}
                       onChange={this.onChangeInput}
                       ref={ref => this.ref = ref}/>
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
        return <div style={{margin: '10px'}}>
            <form onSubmit={this.onClickCardResult}>
                <div style={{padding: '5px', backgroundColor: isCorrect ? 'green' : 'red'}}>
                    <p>{isCorrect ? 'Success' : 'Fail'}</p>
                </div>
                <p>Word: {cardResult.expectedCard.translation.val}</p>
                <p>Expected: {fullForm(cardResult.expectedCard.word)}</p>
                <p>Actual: {cardResult.actualValue}</p>
                <button ref={ref => ref && ref.focus()}>Next</button>
            </form>
        </div>;
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
