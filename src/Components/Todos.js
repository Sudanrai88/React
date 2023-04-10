import React from 'react'

function Todos({text, todoo, setTodos, todos}) {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todoo.id));
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
            if(item.id === todoo.id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        }))
    }
  return (
    <div className='todo'>
        <li className = {`todo-item ${todoo.completed ? "completed": ''}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className = "trash-btn">
            <i className="fas fa-trash"></i>
        </button>
    </div>
  )
}

export default Todos;