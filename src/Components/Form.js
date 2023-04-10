import React from 'react'

const Form = ({inputText,setInputText,todos,setTodos, setStatus}) => {

   const inputTextHandler = (e) => {
      setInputText(e.target.value);
   };

   const submitTodoHandler = (e) => {
      e.preventDefault(); //Prevents refresh on button click
      setTodos([
         ...todos, {text: inputText, completed: false, id: Math.random() * 1000} // When the button is clicked set Todos as 
      ]); // as the new inputs and save it in an array of Todos.
      setInputText(""); // Reset the inputText to "".
   }

   const statusHandler = (e) => {
      setStatus(e.target.value)
   }
  return ( 
        <form>
         <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder='Add a new Todo'/>
         <button onClick = {submitTodoHandler} className ="todo-button" type="submit">
            <i className ="fas fa-plus-square"></i>
         </button> 
         <div className = "select"> 
            <select onChange={statusHandler} name="todos" className="filter-todo">
               <option value="all">ALL</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
            </select>
         </div>
        </form>
  );
};

export default Form