import React, {Component} from 'react';
import './App.css';
import {LoginComponent} from './Components/LoginComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LoginComponent/>
            </div>
        );
    }
}

export default App;
