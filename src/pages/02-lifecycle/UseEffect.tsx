import React, { useEffect, useState } from 'react'
import { getUserById, IUser } from './utils';

export default function UseEffect({ id = 0 }: { id?: number }) {
  const [user, setUser] = useState<IUser>({ id: 0, name: '' })

  useEffect(() => {
    getUserById({ id })
      .then((user) => {
        setUser(user);
      })
  }, [id])

  return (
    <div>username: {user.name}</div>
  )
}
