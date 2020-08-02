const fs = require('fs').promises;
const path = require('path');
const { FilterRootFields } = require('apollo-server-express');

// const db = {
//   todos: [
//     {
//       _id: 'asdas',
//       title: 'Nadar no mar',
//       description: 'Nadar ao menos 5km por dia',
//       completed: false
//     },
//     {
//       _id: 'v4()',
//       title: 'Passear com o dog',
//       description: 'Doggo está engordando e precisa se exercitar',
//       completed: true
//     }
//   ]
// };

// read
// fs.readFile(path.join(__dirname, 'database', 'data.json'), { encoding: 'utf8' }, (err, data) => {
//   if (err) throw err;
//   console.log('data', JSON.parse(data));
// });

const resolvers = {
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
