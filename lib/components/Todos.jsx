import React, { useState, useEffect } from 'react'
import { fetchTodos } from '../api/endpoints'

const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos().then(setTodos)
  }, [])

  if (!todos.length) return <p>Loading Pending Todos...</p>

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
