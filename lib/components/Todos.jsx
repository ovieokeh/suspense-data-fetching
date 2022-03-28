import React from 'react'
import fetchData from '../api/fetchData'

const resource = fetchData(
  'https://run.mocky.io/v3/8a33e687-bc2f-41ea-b23d-3bc2fb452ead'
)

const Todos = () => {
  const todos = resource.read()

  const renderTodos = todos.map((todo) => {
    const className = todo.status === 'Completed' ? 'todo-completed' : 'todo'
    return (
      <li className={`todo ${className}`} key={todo.id}>
        {todo.title}
      </li>
    )
  })

  return (
    <div>
      <h3>Todos</h3>
      <ol className="todos">{renderTodos}</ol>
    </div>
  )
}

export default Todos
