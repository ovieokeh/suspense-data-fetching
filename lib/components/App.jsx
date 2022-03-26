import React, { Suspense } from 'react'
import CompletedTodos from './CompletedTodos'
import PendingTodos from './PendingTodos'

const App = () => {
  return (
    <div className="app">
      <h1>Here are your Todos for today</h1>
      <p>Click on any todo to view more details about it</p>

      <h3>Pending Todos</h3>
      <Suspense fallback={<p>Loading Pending Todos...</p>}>
        <PendingTodos />
      </Suspense>

      <h3>Completed Todos</h3>
      <Suspense fallback={<p>Loading Completed Todos...</p>}>
        <CompletedTodos />
      </Suspense>
    </div>
  )
}

export default App
