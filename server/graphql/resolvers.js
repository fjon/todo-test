const fs = require('fs').promises;
const path = require('path');
const { FilterRootFields } = require('apollo-server-express');
const { v4 } = require('uuid');

const resolvers = {
  Mutation: {
    createTodo: async function (root, args) {
      try {
        const data = await fs.readFile(path.join(process.cwd(), 'database', 'data.json'), { encoding: 'utf8' });
        const todos = JSON.parse(data); //
        const id = v4();
        const newTodo = { ...args.input, _id: id }; //
        todos.push(newTodo); // add ao array
        const result = await fs.writeFile(path.join(process.cwd(), 'database', 'data.json'), JSON.stringify(todos), { encoding: 'utf8' });
        return id;
      } catch (err) {}
    }
  },
  Query: {
    todos: async function () {
      try {
        const data = await fs.readFile(path.join(process.cwd(), 'database', 'data.json'), { encoding: 'utf8' });
        const todos = JSON.parse(data);
        // console.log(todos);
        return todos;
      } catch (err) {}
    },
    todo: async function (root, args) {
      try {
        const data = await fs.readFile(path.join(process.cwd(), 'database', 'data.json'), { encoding: 'utf8' });
        const todos = JSON.parse(data);
        const todo = todos.find(todo => todo._id === args.id);
        return todo;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
