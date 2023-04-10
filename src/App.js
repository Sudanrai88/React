import React, {useState, useEffect} from 'react';
import './App.css';
//Importing components
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  //STATE STUFF
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //USE EFFECT
  useEffect(() => {
    filterHandler();
   }, [todos, status]);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, []);

const filterHandler = () => {
  switch(status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
    default: 
      setFilteredTodos(todos);
      break;
  }
}

  return (
    <div className="todo-app">
      <header>
        <h1> Sudans Todo-List</h1>

      </header>
      <div>
        <Form 
        filteredTodos={filteredTodos} 
        setStatus={setStatus} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText = {setInputText} 
        inputText={inputText}/>
      </div>
      <div>
        <TodoList filteredTodos={filteredTodos}  todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
