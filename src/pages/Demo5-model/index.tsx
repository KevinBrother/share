import React, { useState } from 'react'
import Aside from './components/Aside'
import Dialog from './components/Dialog'
import List from './components/List'

export default function MoDelList() {
  const [display, setDisplay] = useState('none')

  return (
    <>
      <Aside setDisplay={setDisplay} />
      <List setDisplay={setDisplay} />
      <Dialog display={display} setDisplay={setDisplay} />
    </>
  )
}
