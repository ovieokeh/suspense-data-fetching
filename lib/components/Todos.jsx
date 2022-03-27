import React from 'react'

const Todos = ({ todos }) => {
  if (!todos.length) return <p>Loading Todos...</p>

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
