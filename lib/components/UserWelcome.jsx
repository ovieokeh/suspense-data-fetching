import React from 'react'

const UserWelcome = ({ user }) => {
  if (!user.id) return <p>Loading user...</p>

  return (
    <div>
      <p>Welcome {user.name}, here are your Todos for today</p>
      <small>Completed todos have a line through them</small>
    </div>
  )
}

export default UserWelcome
