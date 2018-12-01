import React, {Component} from 'react';
import './App.css';
import {LoginContainer} from './containers/LoginContainer';
import {connect} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import {history} from './helpers/history';
import {PrivateRoute} from './components/PrivatRouter';
import {RegisterContainer} from './containers/RegisterContainer';
import {HomeContainer} from './containers/HomeContainer';

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