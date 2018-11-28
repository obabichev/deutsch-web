import React, {Component} from "react";
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

export class LoginComponent extends Component {

    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('[obabichev] Login!!!!');

        fetch('http://127.0.0.1:8000/api/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('[obabichev] data', data);
            });
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit">
                    Login
                </Button>
            </form>
        </div>;
    }
}

