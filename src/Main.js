import React, { useState } from 'react';
import { render } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import InputTodo from './components/InputTodo';

const todosDB = [
  {
    _id: uuidv4(),
    description: 'Nadar no mar',
    completed: false
  },
  {
    _id: uuidv4(),
    description: 'Passear com o dog',
    completed: false
  }
];

function Main() {
  const [todos, setTodos] = useState(todosDB);
  const [todo, setTodo] = useState();

  function handleOnChange(event) {
    setTodo(event.target.value);
  }

  function addTodo(todo) {
    const todosCopy = [...todos];
    todosCopy.push({ _id: uuidv4(), description: todo, completed: false });
    setTodos(todosCopy);
  }

  return (
    <div>
      <InputTodo addTodo={addTodo} />
      <List todos={todos} />
    </div>
  );
}

render(<Main />, document.getElementById('root'));
