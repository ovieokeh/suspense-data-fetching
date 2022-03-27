import React, { useState, useEffect } from 'react'

import Todos from './Todos'
import { fetchUser } from '../api/endpoints'

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser().then(setUser)
  }, [])

  const content = user.id ? (
    <>
      <strong>Welcome {user.name}</strong>
      <Todos />
    </>
  ) : (
    <p>Fetching user details...</p>
  )

  return (
    <div className="app">
      <h1>Here are your Todos for today</h1>
      <p>Click on any todo to view more details about it</p>

      {content}
    </div>
  )
}

export default App
