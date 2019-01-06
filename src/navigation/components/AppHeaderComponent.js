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
            <div className="app-header-repeat app-header-element">
                <Icon icon="alarm-clock"/>
            </div>
            <div className="app-header-user app-header-element">
                {user.name}
            </div>
            <div className="app-header-logout app-header-element"
                 onClick={this.onLogoutClick}>
                <Icon icon="exit"/>
            </div>
        </div>;
    }

}
