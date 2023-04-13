import React, { useState } from 'react'

interface User {
  id: number,
  name: string
}
export const Users = () => {
  const [user, setUser] = useState<User>()
  const login = ()=>{
    setUser({
      id: 1234,
      name: "Diego"
    })
  }
  return (
    <div>
     <h3>Users</h3> 
     <button onClick={login}>
      Login
     </button>
     {
      (!user)
      ? <pre>Not found User</pre>
      : <pre>{JSON.stringify(user)}</pre>
     }
     
    </div>
  )
}
