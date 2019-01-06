import React, {Component} from 'react';

import './AppHeaderComponent.css';
import {history} from '../../helpers/history';

export class AppHeaderComponent extends Component {

    onHomeClick = (event) => {
        event.stopPropagation();
        history.push('/');
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
            <div className="app-header-user">
                {user.name}
            </div>
        </div>;
    }

}
