import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import BooksSchema from '../../api/books/Books.graphql';
import BooksResolvers from '../../api/books/resolvers';

import CondolencesSchema from '../../api/condolences/Condolences.graphql';
import CondolencesResolvers from '../../api/condolences/resolvers';

import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';

//aasdasdasdasdasd

const typeDefs = [BooksSchema, CondolencesSchema, UsersSchema];

const resolvers = merge(BooksResolvers, CondolencesResolvers, UsersResolvers);
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });
