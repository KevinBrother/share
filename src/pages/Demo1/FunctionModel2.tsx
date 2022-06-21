import { useEffect, useState } from 'react'

export default function FunctionModel() {

  const [list, setList] = useState([]);

  useEffect((() => {
    // Http.getList
    setList([]);
  }), []);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect((() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }))

  return (
    <>
      <div>{width}</div>
      <div>{list}</div>
    </>
  )
}