import React, { useId } from 'react';

function TodoItem({ todo, handleTodoChecked, handleTodoRemove }) {
  const id = useId();

  return (
    <div>
      <div role='group'>
        <input type='checkbox' id={`${id}-checkbox`} checked={todo.completed} onChange={() => handleTodoChecked(todo.id, !todo.completed)} />
        <label for={`${id}-checkbox`}><h4 className='m-2' style={{ fontWeight: 'normal' }}>{todo.text}</h4></label>
      </div>
      <button onClick={() => handleTodoRemove(todo.id)}></button>
    </div>
  );
}

export default TodoItem;