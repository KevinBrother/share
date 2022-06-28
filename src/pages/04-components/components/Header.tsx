import React from 'react'
import { IDisplayProp } from '../models'
import { Button, Modal } from 'antd';

export default function Header({ setDisplay }: IDisplayProp) {

  return (
    <header>
      SplitComponent 头部======
      <Button onClick={() => setDisplay(true)}>新增</Button>
    </header>
  )
}
