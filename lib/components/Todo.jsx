import React from 'react'

const Todo = ({ resource }) => {
  const todo = resource.read()

  return (
    <div className="todo">
      <p>
        {todo.id}. {todo.title}
      </p>
      <small>Status: {`${todo.status}`}</small>
    </div>
  )
}

export default Todo
