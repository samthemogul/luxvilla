"use client"

import Image from 'next/image'
import styles from '@styles/page.module.css'
import { useState } from 'react'

export default function Home() {
  const [ count, setCount ] = useState(0)

  const handleIncrease = () => {
    setCount(prev => prev + 1)
  }
  const handleDecrease = () => {
    setCount(prev => prev - 1)
  }
  return (
    <>
    <h1 className={styles.head}>Welcome to Luxvilla: {count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}
