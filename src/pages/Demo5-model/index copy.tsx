import React, { useState } from 'react'
import Aside from './components/Aside'
import Dialog from './components/Dialog'
import List from './components/List'
import { Button, Modal } from 'antd';


export default function MoDelList() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)

  function closeModal1() {
    setModal1(false)
  }

  function closeModal2() {
    setModal2(false)
  }

  return (
    <>
      <Aside setDisplay={setModal1} />
      <List setDisplay={setModal1} />
      <Modal title="Basic Modal" visible={modal1} onOk={closeModal1} onCancel={closeModal1}>
        <p>Modal.1</p>
        <p>Modal.1</p>
        <p>Modal.1</p>
      </Modal>
      <Modal title="Basic Modal" visible={modal2} onOk={closeModal2} onCancel={closeModal2}>
        <p>Modal.2</p>
        <p>Modal.2</p>
        <p>Modal.2</p>
      </Modal>
    </>
  )
}
