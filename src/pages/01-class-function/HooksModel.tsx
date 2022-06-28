import { Component, useEffect, useState } from 'react'

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect((() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }))

  return { width };
}

export default function HooksModel() {
  const { width } = useWidth();

  return (
    <div>{width}</div>
  )
}
