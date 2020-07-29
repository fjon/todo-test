const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const { v4 } = require('uuid');

const db = {
  todos: [
    {
      _id: v4(),
      description: 'Nadar no mar',
      completed: false
    },
    {
      _id: v4(),
      description: 'Passear com o dog',
      completed: false
    }
  ]
};

// schema - typeDefs
const typeDefs = gql`
  type Query {
    test: String
    todos: [Todo]
  }

  type Todo {
    _id: ID
    description: String
    completed: Boolean
  }
`;

// resolvers
const resolvers = {
  Query: {
    test: function () {
      return 'test retornado';
    },
    todos: function () {
      return db.todos;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app, path: '/graph' });

app.listen('3333', () => {
  console.log('Server is UP');
});
