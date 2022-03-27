import React, { useState, useEffect } from 'react'

import UserWelcome from './UserWelcome'
import Todos from './Todos'

import { fetchUserDetails } from '../api/endpoints'

const App = () => {
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    fetchUserDetails().then(setUserDetails)
  }, [])

  if (!userDetails.id) return <p>Fetching user details...</p>

  return (
    <div className="app">
      <h2>Simple Todo</h2>

      <UserWelcome user={userDetails} />
      <Todos />
    </div>
  )
}

export default App
