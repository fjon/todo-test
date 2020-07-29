import React, { useState } from 'react';

function InputTodo({ addTodo }) {
  const [val, setVal] = useState('');

  function onChangeHandler(event) {
    setVal(event.target.value);
  }

  function submit(event) {
    event.preventDefault();
    addTodo(val);
    setVal('');
  }

  return (
    <form onSubmit={submit}>
      <input name="todo" onChange={onChangeHandler} value={val} type="text" autoComplete="off" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default InputTodo;
