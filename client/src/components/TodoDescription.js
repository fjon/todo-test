import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function TodoDescription() {
  const {
    state: { todo }
  } = useLocation();
  return (
    <div>
      <h1>Description: {todo.description}</h1>
    </div>
  );
}

export default TodoDescription;
