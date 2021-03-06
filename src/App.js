import React, { useState, useEffect } from 'react';
import './reset.css'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos()
  }, [])





  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }

  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos, status])

  return (
    <div className="app">
      <div className="wrapper">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          status={status}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
