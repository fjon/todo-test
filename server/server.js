const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const { v4 } = require('uuid');

// Add title in bd
const db = {
  todos: [
    {
      _id: v4(),
      title: 'Nadar no mar',
      description: 'Nadar ao menos 5km por dia',
      completed: false
    },
    {
      _id: v4(),
      title: 'Passear com o dog',
      description: 'Doggo está engordando e precisa se exercitar',
      completed: true
    }
  ]
};

// schema - typeDefs
const typeDefs = gql`
  type Query {
    todos: [Todo]
  }

  type Todo {
    _id: ID
    title: String!
    description: String
    completed: Boolean!
  }
`;

// resolvers
const resolvers = {
  Query: {
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
