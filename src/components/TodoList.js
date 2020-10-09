import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, filteredTodos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-container__list">
        {filteredTodos.map(item => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={item.id}
            text={item.text}
            id={item.id}
            itemState={item.completed}
          />
        ))}
      </ul>
    </div>
  )
}
