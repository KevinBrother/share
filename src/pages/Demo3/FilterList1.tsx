import React, { useCallback, useState } from 'react'

interface IUser {
  name: string;
}

function UserList({ users }: { users: IUser[] }) {

  const [searchKey, setSearchKey] = useState('');

  const [filtered, setFiltered] = useState(users);

  const handleSearch = useCallback((e: any) => {
    setSearchKey(e.target.value);
    setFiltered(users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }, [])

  return (
    <div>
      <input value={searchKey} onChange={handleSearch} />
      {filtered.map(user => <div key={user.name}>{user.name}</div>)}
    </div>
  )
}

const users = [{ name: '章三' }, { name: '里斯' }, { name: '王武' }];
export default function FilterList1() {

  return <UserList users={users} />
}
