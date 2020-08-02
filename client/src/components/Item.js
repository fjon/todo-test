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
        to={{
          pathname: `/todo/${todo._id}`,
          state: { todo }
        }}
      >
        {todo.title}
      </Link>
    </li>
  );
}

export default Item;
