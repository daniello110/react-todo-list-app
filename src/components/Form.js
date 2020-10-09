import React from 'react'
import { nanoid } from 'nanoid'

export default function Form({ inputText, setInputText, todos, setTodos, setStatus, status }) {
  const handleInputChange = e => {
    setInputText(e.target.value);
  }

  const handleTodoSubmit = e => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: nanoid(10),
        }
      ])
    }
    setInputText('');
  }

  const handleStatusChange = e => {
    setStatus(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div>
      <form action="" className="todo-form">

        <input
          onChange={handleInputChange}
          type="text"
          className="todo-form__input"
          placeholder="Wpisz nowe zadanie"
          value={inputText}
        />
        <button
          onClick={handleTodoSubmit}
          className="todo-form__button"
          type="submit"
        >
          +
        </button>

        <div className="todo-form__select">
          <div className="todo-form__radio-container" onChange={handleStatusChange}>
            <input
              className="todo-form__radio"
              checked={status === 'all'}
              type="radio"
              id="all"
              name="filter"
              value="all"
            />
            <label className="todo-form__radio-label" htmlFor="all">wszystkie</label>
          </div>
          <div className="todo-form__radio-container" onChange={handleStatusChange}>
            <input
              className="todo-form__radio"
              type="radio"
              id="completed"
              name="filter"
              value="completed"
            />
            <label className="todo-form__radio-label" htmlFor="completed">ukończone</label>
          </div>
          <div className="todo-form__radio-container" onChange={handleStatusChange}>
            <input
              className="todo-form__radio"
              type="radio" id="uncompleted"
              name="filter"
              value="uncompleted"
            />
            <label className="todo-form__radio-label" htmlFor="uncompleted">nieukończone</label>
          </div>
          {/* <select onChange={handleStatusChange} name="todos" className="todo-form__filter-todo">
            <option value="all">Wszystkie</option>
            <option value="completed">Ukończone</option>
            <option value="uncompleted">Nieukończone</option>
          </select> */}
        </div>
      </form>
    </div>
  )
}
