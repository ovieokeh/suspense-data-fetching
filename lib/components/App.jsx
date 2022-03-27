import React, { useState, useEffect } from 'react'

import UserWelcome from './UserWelcome'
import Todos from './Todos'

import { fetchUserDetailsAndTodos } from '../api/endpoints'

const fetchDataPromise = fetchUserDetailsAndTodos()

const App = () => {
  const [userDetails, setUserDetails] = useState({})
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchDataPromise.then((data) => {
      setUserDetails(data.userDetails)
      setTodos(data.todos)
    })
  }, [])

  return (
    <div className="app">
      <h2>Simple Todo</h2>

      <UserWelcome user={userDetails} />
      <Todos todos={todos} />
    </div>
  )
}

export default App
