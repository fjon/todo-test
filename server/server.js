const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }

  type Todo {
    _id: ID
    title: String!
    description: String
    completed: Boolean!
  }

  type Mutation {
    createTodo(input: CreateTodoInput): ID
  }

  input CreateTodoInput {
    title: String
    description: String
    completed: Boolean
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: require('./graphql/resolvers')
});

server.applyMiddleware({ app, path: '/graph' });

app.listen(process.env.PORT, () => {
  console.log('Server is UP', process.env.PORT);
});
