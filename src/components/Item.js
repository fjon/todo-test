import React from 'react';

function Item({ todo }) {
  return (
    <li>
      <p
        style={{
          backgroundColor: todo.completed ? 'green' : 'red',
          width: '300px',
          color: '#fff'
        }}
      >
        {todo.description}
      </p>
    </li>
  );
}

export default Item;
