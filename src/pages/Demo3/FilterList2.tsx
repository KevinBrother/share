import React, { useEffect, useMemo, useState } from 'react'

interface IUser {
  name: string;
}

function UserList({ users }: { users: IUser[] }) {

  const [searchKey, setSearchKey] = useState('');

  const filtered = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(searchKey.toLowerCase()));
  }, [searchKey, users])

  return (
    <div>
      <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
      {filtered.map(user => <div key={user.name}>{user.name}</div>)}
    </div>
  )
}

const users = [{ name: '章三' }, { name: '里斯' }, { name: '王武' }];
export default function FilterList2() {

  return <UserList users={users} />
}
