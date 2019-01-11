import React, {Component} from 'react';

import './AppHeaderComponent.css';
import {history} from '../../helpers/history';
import {Icon} from '../../core/components/Icon';

export class AppHeaderComponent extends Component {

    onHomeClick = (event) => {
        event.stopPropagation();
        history.push('/');
    };

    onLogoutClick = (event) => {
        this.props.logout();
    };

    onRepeatClick = (event) => {
        history.push('/repeat');
    };

    render() {
        const {user} = this.props;

        if (!user) {
            return <></>;
        }
        return <div className="app-header">
            <div className="app-header-logo">
                <h2 className="app-header-logo-text" onClick={this.onHomeClick}>Dapp</h2>
            </div>
            <div className="app-header-delimiter"/>
            {this.renderRepeatWords()}
            <div className="app-header-user app-header-element">
                {user.name}
            </div>
            <div className="app-header-logout app-header-element"
                 onClick={this.onLogoutClick}>
                <Icon width="32px" height="32px" icon="exit"/>
            </div>
        </div>;
    }

    renderRepeatWords = () => {
        const {repeatWordsCount} = this.props;

        const displayRepeatWordsCount = repeatWordsCount > 99 ? 99 : repeatWordsCount;

        if (!repeatWordsCount) {
            return null;
        }

        return <div className="app-header-repeat app-header-element"
                    onClick={this.onRepeatClick}>
            <Icon width="32px" height="32px" icon="alarm-clock"/>
            <span className="app-header-repeat-count">{displayRepeatWordsCount}</span>
        </div>;
    }

}
