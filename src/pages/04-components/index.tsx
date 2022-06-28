import React, { useState } from 'react'
import Aside from './components/Aside'
import Dialog from './components/Dialog'
import List from './components/List'
import { Button, Modal } from 'antd';


export default function MoDelList() {
  const [display, setDisplay] = useState(false)

  function closeDialog() {
    setDisplay(false)
  }

  return (
    <>
      <Aside setDisplay={setDisplay} />
      <List setDisplay={setDisplay} />
      <Modal title="Basic Modal" visible={display} onOk={closeDialog} onCancel={closeDialog}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
