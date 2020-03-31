import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

console.log('App', Accounts);

export default class LoginForm extends Component {
    login = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log(
            'LoginForm',
            'Logging in with',
            this.email.value,
            this.password.value
        );
        Meteor.loginWithPassword(
            this.email.value,
            this.password.value,
            (error: any) => {
                if (!error) {
                    this.props.client.resetStore();
                }
                console.log(error);
            }
        );
    };
    render() {
        return (
            <form onSubmit={this.login}>
                <legend>Login</legend>
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
                        Login User
                    </button>
                </fieldset>
            </form>
        );
    }
}
