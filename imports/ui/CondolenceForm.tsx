import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createCondolence = gql`
    mutation createCondolence($name: String!, $bookId: String!) {
        createCondolence(name: $name, bookId: $bookId) {
            _id
        }
    }
`;

class CondolenceForm extends Component {
    submitForm = () => {
        this.props
            .createCondolence({
                variables: {
                    name: this.name.value,
                    bookId: this.props.bookId
                }
            })
            .then(() => {
                this.name.value = '';
            })
            .catch(err => console.error(err));
    };

    render() {
        return (
            <div>
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

export default graphql(createCondolence, {
    name: 'createCondolence',
    options: {
        refetchQueries: ['Books']
    }
})(CondolenceForm);
