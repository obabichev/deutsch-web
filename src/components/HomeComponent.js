import React, {Component} from 'react';
import {GlossariesListContainer} from '../glossaries/containers/GlossariesListContainer';
import {history} from '../helpers/history';

export class HomeComponent extends Component {

    componentDidMount() {
        this.props.getWordsToRepeat();
    }

    onRepeatClick = (event) => {
        event.preventDefault();
        history.push('/repeat');
    };

    render() {
        const {repeatWordsCount} = this.props;

        return <div>
            <div>
                <p>Words to repeat: {repeatWordsCount}</p>
                {repeatWordsCount > 0 && <button onClick={this.onRepeatClick}>Repeat</button>}
            </div>

            <GlossariesListContainer/>
        </div>
    }
}