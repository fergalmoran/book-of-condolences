import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import { withApollo } from 'react-apollo';

import BookForm from './BookForm';

import CondolenceForm from './CondolenceForm';
import Condolence from './condolences/Condolence.tsx';
import UserForm from './UserForm';
import Navbar from './components/Navbar';

const App = ({ loading, books, client, user }) => {
    if (loading) return null;
    return (
        <div>
            <Navbar client={client} user={user} />
            <main role="main" className="container">
                <hr />
                {user._id && <BookForm />}
                <hr />
                <ul>
                    {books.map(res => (
                        <li key={res._id}>
                            <span
                                style={{
                                    textDecoration: res.completed
                                        ? 'line-through'
                                        : 'none'
                                }}
                            >
                                {res.name}
                            </span>
                            <ul>
                                {res.condolences.map(condolence => (
                                    <Condolence
                                        condolence={condolence}
                                        key={condolence._id}
                                    />
                                ))}
                            </ul>
                            <CondolenceForm bookId={res._id} />
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

const booksQuery = gql`
    query Books {
        books {
            _id
            name
            condolences {
                _id
                name
                completed
            }
            completed
        }

        user {
            _id
        }
    }
`;

export default graphql(booksQuery, {
    props: ({ data }) => ({ ...data })
})(withApollo(App));
