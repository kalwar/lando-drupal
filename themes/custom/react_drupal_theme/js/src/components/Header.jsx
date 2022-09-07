import React from 'react';
import CreateTodo from './CreateTodo';

function Header({ handleAddTodo }) {
  return (
    <nav>
      <div>
        <div>
          <h3>Todo App: Drupal & React </h3>
          <button data-bs-toggle="collapse" data-bs-target='#create-todo' onClick={
            e => e.target.innerText = e.target.getAttribute('aria-expanded') == "true" ? 'Close Menu' : 'Create Todo'}
          >Create Todo</button>
        </div>
        <CreateTodo handleAddTodo={handleAddTodo} />
      </div>
    </nav>
  );
}

export default Header;