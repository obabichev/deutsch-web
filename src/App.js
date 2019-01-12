import React, {Component} from 'react';
import './App.css';
import {LoginContainer} from './auth/containers/LoginContainer';
import {connect} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import {history} from './helpers/history';
import {PrivateRoute} from './components/PrivatRouter';
import {RegisterContainer} from './auth/containers/RegisterContainer';
import {HomeContainer} from './containers/HomeContainer';
import {GlossaryDetailsContainer} from './glossaries/containers/GlossaryDetailsContainer';
import {LearnWordsContainer} from './learning/containers/LearnWordsContainer';
import {RepeatWordsContainer} from './learning/containers/RepeatWordsContainer';
import {AppHeaderContainer} from './navigation/containers/AppHeaderContainer';
import {userSelector} from './selectors/auth.selectors';


class App extends Component {
    render() {
        const {alert} = this.props;
        return <div>
            {alert && alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
                <div>
                    {this.renderHeader()}
                    <PrivateRoute exact path="/" component={HomeContainer}/>
                    <PrivateRoute exact path="/glossary/:glossaryId/" component={GlossaryDetailsContainer}/>
                    <PrivateRoute exact path="/learn/glossary/:glossaryId" component={LearnWordsContainer}/>
                    <PrivateRoute exact path="/repeat" component={RepeatWordsContainer}/>
                    {this.renderAuthRouters()}
                </div>
            </Router>
        </div>;
    }

    renderHeader = () => {
        return <AppHeaderContainer/>;
    };

    renderAuthRouters = () => {
        if (this.props.user) {
            return null;
        }
        return <>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/register" component={RegisterContainer}/>
        </>;
    };
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert,
        user: userSelector(state)
    };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};