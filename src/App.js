import React, {Component} from 'react';
import './App.css';
import {LoginContainer} from './auth/containers/LoginContainer';
import {connect} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import {history} from './helpers/history';
import {PrivateRoute} from './components/PrivatRouter';
import {RegisterContainer} from './auth/containers/RegisterContainer';
import {HomeContainer} from './containers/HomeContainer';
import {GlossaryDetailsContainer} from './containers/GlossaryDetailsContainer';
import {LearnWordsContainer} from './containers/LearnWordsContainer';
import {RepeatWordsContainer} from './containers/RepeatWordsContainer';


class App extends Component {
    render() {
        const {alert} = this.props;
        return <div>
            {alert && alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
                <div>
                    <PrivateRoute exact path="/" component={HomeContainer}/>
                    <PrivateRoute exact path="/glossary/:glossaryId/" component={GlossaryDetailsContainer}/>
                    <PrivateRoute exact path="/learn/glossary/:glossaryId" component={LearnWordsContainer}/>
                    <PrivateRoute exact path="/repeat" component={RepeatWordsContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/register" component={RegisterContainer}/>
                </div>
            </Router>
        </div>;
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};