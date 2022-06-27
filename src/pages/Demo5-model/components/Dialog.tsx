
import React from 'react'
import { IModelProp } from '../models'

export default function List({ display, setDisplay }: IModelProp) {

  return (
    <div style={{ width: '100px', height: '100px', border: '1px solid black', display }}>
      <header>
        <button onClick={() => setDisplay(true)}>关闭</button>
      </header>
      dialog
    </div>
  )
}
