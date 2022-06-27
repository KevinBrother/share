import React from 'react'
import { IDisplayProp } from '../models'

export default function Aside({ setDisplay }: IDisplayProp) {

  return (
    <aside>
      <button onClick={() => setDisplay(true)}>新增</button>
    </aside>
  )
}
