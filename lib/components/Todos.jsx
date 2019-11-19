import React from 'react'
import { fetchTodos } from '../api/endpoints'

const resource = fetchTodos()

const Todos = ({ onClick }) => {
  const todos = resource.read()

  return (
    <ol className="todos">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => onClick(todo.id)}>
          {todo.title}
        </li>
      ))}
    </ol>
  )
}

export default Todos
