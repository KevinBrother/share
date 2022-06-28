
import { Modal } from 'antd'
import React from 'react'
import { IModelProp } from '../models'

export default function List({ display, setDisplay }: IModelProp) {

  return (
    <Modal title="Basic Modal" visible={display} onOk={() => setDisplay(false)} onCancel={() => setDisplay(false)}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}
