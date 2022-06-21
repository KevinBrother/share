import { useEffect, useState } from 'react'

export default function FunctionModel() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect((() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      console.log('===============', 111);
      window.removeEventListener('resize', handleResize)
    }
  }))

  return (
    <div>{width}</div>
  )
}