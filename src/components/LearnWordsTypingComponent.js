import React, {Component} from 'react';
import _ from 'lodash';

import {fullForm} from '../util/words';

export class LearnWordsTypingComponent extends Component {

    state = {
        index: 0,
        learned: [],
        input: ''
    };

    render() {
        const card = this.props.cardsToLearn[this.state.index];

        return <div>
            LearnWordsTypingComponent

            {this.renderInputWord(card)}
        </div>;
    }

    renderInputWord = (card) => {
        return <div>
            <div>
                {card.translation.val}
            </div>
            <form onSubmit={this.onSubmit(card.word)}>
                <input value={this.state.input}
                       onChange={this.onChangeInput}/>
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

    onSubmit = word => (event) => {
        event.preventDefault();

        const index = this.state.index + 1;

        console.log('[obabichev] this.state.input', this.state.input);
        const isCorrect = fullForm(word) === this.state.input;
        console.log('[obabichev] isCorrct', isCorrect);

        console.log('[obabichev] word.id', word.id);
        console.log('[obabichev] this.props.learned', this.props.learned);

        if (isCorrect && _.indexOf(this.props.learned, word.id) !== -1) {
            console.log('[obabichev] SUCCESS');
        }

        this.props.onLearn(word, isCorrect);

        if (index >= this.props.cardsToLearn.length) {
            console.log('[obabichev] ALLLLES');
            this.props.onFinish();
            return;
        }

        this.setState({
            index,
            input: ''
        });
    };
}
