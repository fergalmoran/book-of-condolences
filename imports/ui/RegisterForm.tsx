import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
console.log('App', Accounts);

export default class RegisterForm extends Component {
    registerUser = e => {
        e.preventDefault();
        Accounts.createUser(
            {
                email: this.email.value,
                password: this.password.value
            },
            error => {
                if (!error) {
                    this.props.client.resetStore();
                }
                console.log(error);
            }
        );
    };
    render() {
        return (
            <form onSubmit={this.registerUser}>
                <legend>Register</legend>
                <fieldset>
                    <input
                        type="email"
                        autoComplete="current-username"
                        ref={input => (this.email = input)}
                    />
                    <input
                        type="password"
                        autoComplete="current-password"
                        ref={input => (this.password = input)}
                    />
                    <button className="btn btn-primary btn-sm" type="submit">
                        Register User
                    </button>
                </fieldset>
            </form>
        );
    }
}
