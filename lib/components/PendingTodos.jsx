import React from 'react'
import { fetchPendingTodos } from '../api/endpoints'

const resource = fetchPendingTodos()

const PendingTodos = () => {
  const todos = resource.read()

  return (
    <ol className="todos pending">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ol>
  )
}

export default PendingTodos
