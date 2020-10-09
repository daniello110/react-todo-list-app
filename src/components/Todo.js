import React from 'react'

export default function Todo({ text, id, itemState, todos, setTodos }) {
  const handleDeleteTodoItem = () => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const handleCompleteTodoItem = () => {
    setTodos(todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        }
      }
      return item;
    }))
  }
  return (
    <div className="todo-item">
      <div className="todo-container">
        <label className="todo-item__checkbox-container">
          <input
            type="checkbox"
            onClick={handleCompleteTodoItem}
            className="todo-item__checkbox"
            checked={itemState}
          />
          <span className="todo-item__checkmark" ></span>
        </label>
        <p className={`todo-item__text ${itemState ? 'todo-item__text--completed' : null}`}>{text}
        </p>
      </div>
      <button onClick={handleDeleteTodoItem} className="todo-item__button todo-item__button--delete"><i className="far fa-trash-alt"></i></button>
    </div>
  )
}
