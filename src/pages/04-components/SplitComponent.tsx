import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Dialog from './components/Dialog';


export default function MoDelList() {
  const [display, setDisplay] = useState(false)

  return (
    <>
      <Header setDisplay={setDisplay} />
      <List setDisplay={setDisplay} />
      <Dialog display={display} setDisplay={setDisplay} />
    </>
  )
}
