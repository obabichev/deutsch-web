import React, {Component} from 'react';
import _ from 'lodash';
import {LearnWordsTypingComponent} from './LearnWordsTypingComponent';
import {history} from '../helpers/history';

export class RepeatWordsComponent extends Component {

    state = {
        cardsToLearn: null
    };

    componentDidMount() {
        const {repeatWords} = this.props;
        if (_.size(repeatWords) > 0) {
            this.setState({cardsToLearn: _.shuffle(_.slice(repeatWords, 0, 10))})
        }
    }

    render() {
        const {cardsToLearn} = this.state;

        return <div>
            {cardsToLearn && this.renderWordsTyping()}
        </div>;
    }

    renderWordsTyping = () => {
        const {cardsToLearn} = this.state;

        return <LearnWordsTypingComponent
            cardsToLearn={cardsToLearn}
            onLearn={this.onLearn}
            onFinish={this.onFinish}/>;
    };

    onLearn = (card, success) => {
        this.props.repeatWordAction(card.id, success);
    };

    onFinish = () => {
        history.goBack();
    };
}
