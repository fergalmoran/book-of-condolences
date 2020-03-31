import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createBook = gql`
    mutation createBook($name: String!) {
        createBook(name: $name) {
            _id
        }
    }
`;

class BookForm extends Component {
    state = { error: null };

    submitForm = () => {
        this.props
            .createBook({
                variables: {
                    name: this.name.value
                }
            })
            .then(() => {
                this.name.value = '';
            })
            .catch(err => {
                console.error(err);
                this.setState({ error: err.message });
            });
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <input type="text" ref={input => (this.name = input)}></input>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={this.submitForm}
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default graphql(createBook, {
    name: 'createBook',
    options: {
        refetchQueries: ['Books']
    }
})(BookForm);
