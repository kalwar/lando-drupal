import React, { useId, useMemo, useState } from 'react';

import { v4 as genUUID4 } from 'uuid';

function CreateTodo({ handleAddTodo }) {
  const id = useId();

  const [currentText, setCurrentText] = useState('');

  const newTodo = useMemo(() => {
    return {
      id: genUUID4(),
      text: currentText,
      completed: false
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    handleAddTodo(newTodo);
    setCurrentText('');
  };

  return (
    <div id='create-todo'>

      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <input value={currentText} onChange={e => { setCurrentText(e.target.value); }} type='text' id={`${id}-name`} placeholder='name' required autoComplete='off' />
          <label htmlFor={`${id}-name`}>Name</label>
        </div>

        <button>Submit</button>
      </form>
    </div>

  );
}

export default CreateTodo;