import React from 'react';
import CreateTodo from './CreateTodo';

function Header({ handleAddTodo }) {
  return (
    <nav className='Header py-2 text-white mb-4'>
      <div className='container text-center'>
        <div className="d-flex align-items-center justify-content-center">
          <h3 className='py-3 mx-2'>Todo App: Drupal & React </h3>
          <button className='btn btn-primary mx-2' data-bs-toggle="collapse" data-bs-target='#create-todo' onClick={
            e => e.target.innerText = e.target.getAttribute('aria-expanded') == "true" ? 'Close Menu' : 'Create Todo'}
          >Create Todo</button>
        </div>
        <CreateTodo handleAddTodo={handleAddTodo} />
      </div>
    </nav>
  );
}

export default Header;