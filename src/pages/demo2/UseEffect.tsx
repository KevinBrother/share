import React, { useEffect } from 'react'
import { getUserById } from './utils';

export default function UseEffect({ id }: { id: string }) {

  useEffect(() => {
    getUserById({ id });
  }, [id])

  return (
    <div>UseEffect</div>
  )
}
