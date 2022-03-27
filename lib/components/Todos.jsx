import React, { useState, useEffect } from 'react'
import { fetchPendingTodos } from '../api/endpoints'
import CompletedTodos from './CompletedTodos'

const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchPendingTodos().then(setTodos)
  }, [])

  if (!todos.length) return <p>Loading Pending Todos...</p>

  return (
    <div>
      <h3>Pending Todos</h3>
      <ol className="todos">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
      {/* <CompletedTodos /> This makes it's own request too */}
    </div>
  )
}

export default Todos
