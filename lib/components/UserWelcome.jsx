import React from 'react'
import fetchData from '../api/fetchData'

const resource = fetchData(
  'https://run.mocky.io/v3/d6ac91ac-6dab-4ff0-a08e-9348d7deed51'
)

const UserWelcome = () => {
  const userDetails = resource.read()

  return (
    <div>
      <p>
        Welcome <span className="user-name">{userDetails.name}</span>, here are
        your Todos for today
      </p>
      <small>Completed todos have a line through them</small>
    </div>
  )
}

export default UserWelcome
