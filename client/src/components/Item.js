import React from 'react';
import { Link } from 'react-router-dom';

function Item({ todo }) {
  return (
    <li>
      <Link
        style={{
          backgroundColor: todo.completed ? 'green' : 'red',
          width: '300px',
          color: '#fff'
        }}
        to={`/todo/${todo._id}`}
      >
        {todo.title}
      </Link>
    </li>
  );
}

export default Item;
