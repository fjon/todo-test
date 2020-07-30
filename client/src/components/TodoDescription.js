import React from 'react';
import { useParams } from 'react-router-dom';

function TodoDescription() {
  const { id } = useParams();
  return (
    <div>
      <h1>Todo Description of: {id}</h1>
    </div>
  );
}

export default TodoDescription;
