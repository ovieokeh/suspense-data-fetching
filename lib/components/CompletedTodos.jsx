import React, { useState, useEffect } from 'react'
import { fetchCompletedTodos } from '../api/endpoints'

const CompletedTodos = ({ pendingTodosLength }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchCompletedTodos().then(setTodos)
  }, [])

  if (!todos.length) return <p>Loading Completed Todos...</p>

  return (
    <div>
      <h3>Completed Todos</h3>
      <ul className="todos completed">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default CompletedTodos
