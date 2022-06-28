import { Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { getUserById, IUser } from './utils';


function useList(id: number) {
  const [user, setUser] = useState<IUser>({ id: 0, name: '' })

  useEffect(() => {
    getUserById({ id })
      .then((user) => {
        setUser(user);
      })
    return () => {
      console.log(111);
    }
  }, [id])

  return { user };
}

export default function UseEffect({ id }: { id: number }) {

  const [count, setCount] = useState(id);
  // const { user } = useList(id);
  const { user } = useList(count);

  return (
    <div>
      <header>
        UseEffect
      </header>
      <div>
        <div>{count}: {user.name}</div>
      </div>
      <Button size="small" onClick={() => setCount(count + 1)}>add</Button>
    </div>
  )
}
