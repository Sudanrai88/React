import React from 'react'; //rfce shortcut
import Todos from './Todos';


function TodoList( {filteredTodos, todos, setTodos} ) {
     return (
        <div className="todo-container">
          <ul className="todo-list">
            {todos.length > 0 ?(
              filteredTodos.map((todoo => (
                <Todos 
                  text={todoo.text}
                  key={todoo.id}
                  todoo={todoo} 
                  todos={todos} 
                  setTodos={setTodos}
                />
              )))
            ) : (
              <p className='noneFound'> DO SOMETHING!!! </p>
            )}
          </ul>
        </div>
      )
};
      

export default TodoList;