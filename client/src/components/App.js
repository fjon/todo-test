import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';
import InputTodo from './InputTodo';
import { loadTodos } from '../requests';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  useEffect(() => {
    (async function () {
      const todos = await (await loadTodos()).data.todos;
      setTodos(todos);
    })();
  }, []);

  function handleOnChange(event) {
    setTodo(event.target.value);
  }

  function addTodo(todo) {
    const todosCopy = [...todos];
    todosCopy.push({ _id: uuidv4(), description: todo, completed: false });
    setTodos(todosCopy);
  }

  return (
    <React.Fragment>
      <InputTodo addTodo={addTodo} />
      <List todos={todos} />
    </React.Fragment>
  );
}

export default App;
