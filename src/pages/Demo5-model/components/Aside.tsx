import React from 'react'
import { IDisplayProp } from '../models'
import { Button, Modal } from 'antd';

export default function Aside({ setDisplay }: IDisplayProp) {

  return (
    <aside>
      <Button onClick={() => setDisplay(true)}>新增</Button>
    </aside>
  )
}
