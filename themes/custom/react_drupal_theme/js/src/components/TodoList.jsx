import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleTodoChecked, handleTodoRemove, handleRemoveCompletedTasks }) {
  const [autoAnimateButton] = useAutoAnimate();
  const [autoAnimateList] = useAutoAnimate();

  return (
    <div>
      <div>
        <div>
          <h2 style={todos.length > 0 ? {} : { fontStyle: 'italic' }} >{todos.length > 0 ? `Todos (${todos.length})` : 'Your todo list is empty'}</h2>
        </div>
        <div>
          <div className='TodoList' ref={autoAnimateButton}>
            {todos.filter(todo => todo.completed).length > 0 &&
              <button onClick={handleRemoveCompletedTasks} className='btn btn-warning btn-lg'>Remove Completed Tasks</button>}
          </div>

          {/* Todo Item List */}
          <div className='TodoList' ref={autoAnimateList}>
            {todos.length > 0
              ? todos.map(todo => <TodoItem key={todo.id} todo={todo} handleTodoChecked={handleTodoChecked} handleTodoRemove={handleTodoRemove} />)
              : <div>
                <h4>All todos are complete!</h4>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;