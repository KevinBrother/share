import React from 'react'
import { IDisplayProp } from '../models'
import { Button, Modal, Table } from 'antd';

export default function List({ setDisplay }: IDisplayProp) {

  return (
    <><div className="text-blue-500">TailwindCSS setup</div><table className="table-auto border border-collapse border-green-800">
      <thead>
        <tr>
          <th>用户名</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border">章三 </td>
          <td className="border"><Button onClick={() => setDisplay(true)}>编辑</Button></td>
        </tr>
        <tr>
          <td className="border">里斯 </td>
          <td className="border"><Button onClick={() => setDisplay(true)}>编辑</Button></td>
        </tr>
      </tbody>
    </table></>

    /*   <ul>
        <li>章三 ：<Button onClick={() => setDisplay(true)}>编辑</Button></li>
        <li>里斯 ：<Button onClick={() => setDisplay(true)}>编辑</Button></li>
      </ul> */
  )
}
