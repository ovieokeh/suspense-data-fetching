import React, { useState, useTransition, Suspense } from 'react'
import Todos from './Todos'
import Todo from './Todo'
import Loader from './Loader'
import { fetchTodo } from '../api/endpoints'

const initialTodo = fetchTodo(1)

const App = () => {
  const [todo, setTodo] = useState(initialTodo)
  const [startTransition, isPending] = useTransition({ timeoutMs: 2000 })

  const handleTodoClick = (id) => {
    startTransition(() => {
      setTodo(fetchTodo(id))
    })
  }

  return (
    <div className="app">
      <h1>Here are your Todos for today</h1>
      <p>Click on any todo to view more details about it</p>

      <Suspense fallback={<h1>Loading Todos...</h1>}>
        <Todos onClick={handleTodoClick} />

        {isPending && <Loader />}
        <Suspense fallback={<h1>Loading Selected Todo</h1>}>
          <Todo resource={todo} />
        </Suspense>
      </Suspense>
    </div>
  )
}

export default App
