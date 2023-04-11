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
  console.log("Calling getLocalTodos");
  getLocalTodos();
}, []);

useEffect(() => {
  filterHandler();
  saveLocalTodos();
 }, [todos, status]);


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

 //save to local
 const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  };

 const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
    console.log(todoLocal);
  }
 };

  return (
    <div className="App">
      <header>
        <h1> Sudans Todo-List</h1>
      </header>
        <Form 
        filteredTodos={filteredTodos} 
        setStatus={setStatus} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText = {setInputText} 
        inputText={inputText}/>
  
        <TodoList 
        filteredTodos={filteredTodos}  
        todos={todos} 
        setTodos={setTodos}/>
      </div>
  );
}

export default App;
