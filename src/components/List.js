import React, { useState } from 'react';
import Item from './Item';

function List({ todos }) {
  return (
    <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
      {todos.map(todo => (
        <Item key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

export default List;
