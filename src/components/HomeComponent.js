import React, {Component} from 'react';
import {GlossariesListContainer} from '../glossaries/containers/GlossariesListContainer';
import {history} from '../helpers/history';

export class HomeComponent extends Component {

    onLogout = event => {
        event.preventDefault();

        const {logout} = this.props;
        logout();
    };

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
            <p>Home</p>
            <button className="btn btn-primary" onClick={this.onLogout}>Logout</button>

            <div>
                <p>Words to repeat: {repeatWordsCount}</p>
                {repeatWordsCount > 0 && <button onClick={this.onRepeatClick}>Repeat</button>}
            </div>

            <GlossariesListContainer/>
        </div>
    }
}