import { useState } from 'react';
import { Button, Modal } from 'antd';


export default function MoDelList() {
  const [display, setDisplay] = useState(false)

  return (
    <>
      <header>
        default 头部======
        <Button onClick={() => setDisplay(true)}>新增</Button>
      </header>
      <table className="table-auto border border-collapse border-green-800">
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
      </table>
      <Modal title="Basic Modal" visible={display} onOk={() => setDisplay(false)} onCancel={() => setDisplay(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
