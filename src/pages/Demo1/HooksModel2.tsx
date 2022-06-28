import { Component, useEffect, useState } from 'react'
// import ThemeContext from './ThemeContext';



export default function HooksModel() {

  const [width, setWidth] = useState(window.innerWidth);
  useEffect((() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }))

  return (
    <div>{width}</div>
  )
}
