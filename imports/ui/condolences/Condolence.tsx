import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const toggleCondolence = gql`
    mutation toggleCondolence($id: String!) {
        toggleCondolence(_id: $id) {
            _id
        }
    }
`;
class Condolence extends Component {
    toggleCondolence = () => {
        this.props.toggleCondolence({
            variables: {
                id: this.props.condolence._id
            }
        });
    };
    render() {
        const { condolence } = this.props;
        return (
            <li>
                <input
                    type="checkbox"
                    checked={condolence.completed}
                    onChange={this.toggleCondolence}
                />
                <span
                    style={{
                        textDecoration: condolence.completed
                            ? 'line-through'
                            : 'none'
                    }}
                >
                    {condolence.name}
                </span>
            </li>
        );
    }
}
export default graphql(toggleCondolence, {
    name: 'toggleCondolence',
    options: {
        refetchQueries: ['Books']
    }
})(Condolence);
