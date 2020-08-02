const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const { v4 } = require('uuid');

// const obj = { nome: 'kon' };

// // write
// fs.writeFile(path.join(__dirname, 'database', 'teste.json'), JSON.stringify(obj), err => {
//   if (err) throw err;
// });

// schema - typeDefs
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
`;

// resolvers
// const resolvers = {
//   Query: {
//     todos: function () {
//       return db.todos;
//     }
//   }
// };

const server = new ApolloServer({
  typeDefs,
  resolvers: require('./graphql/resolvers')
});

server.applyMiddleware({ app, path: '/graph' });

app.listen('3333', () => {
  console.log('Server is UP');
});
