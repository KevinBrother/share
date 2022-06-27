import React from 'react'
import { IDisplayProp } from '../models'

export default function List({ setDisplay }: IDisplayProp) {

  return (
    <ul>
      <li>章三 ：<button onClick={() => setDisplay(true)}>编辑</button></li>
      <li>里斯 ：<button onClick={() => setDisplay(true)}>编辑</button></li>
    </ul>
  )
}
