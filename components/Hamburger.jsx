"use client"

import { useEffect, useState } from 'react'
import styles from '../styles/components/hamburger.module.css'

const Hamburger = () => {
    const [spanClass, setSpanClass] = useState(styles.span_closed)
    const [active, setActive ] = useState(false)

    const handleToggle = () => {
        setActive(prev => !prev)
    }

    useEffect(() => {
        if(!active){
            setSpanClass(styles.span_closed)
        } else {
            setSpanClass(styles.span_open)
        }
    }, [active])
  return (
    <button onClick={handleToggle}>
        <div className={spanClass}></div>
        <div className={spanClass}></div>
        <div className={spanClass}></div>
    </button>
  )
}

export default Hamburger