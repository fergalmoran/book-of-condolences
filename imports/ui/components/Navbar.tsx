import React, { Component } from 'react';
import UserForm from '../UserForm';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">
                    Book of Condolences
                </a>
                <UserForm user={this.props.user} client={this.props.client} />
            </nav>
        );
    }
}
