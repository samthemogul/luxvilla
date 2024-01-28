"use client"

import { useEffect, useState } from 'react'
import styles from '../styles/components/hamburger.module.css'
import { useDispatch, useSelector } from "react-redux"
import { sideBarActions } from '@redux/slices/sideBarSlice'

const Hamburger = () => {
    const [spanClass, setSpanClass] = useState(styles.span_closed)

    const activeSidebar = useSelector(state => state.sidebar.display)
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(sideBarActions.toggleSidebar())
    }

    useEffect(() => {
        if(!activeSidebar){
            setSpanClass(styles.span_closed)
        } else {
            setSpanClass(styles.span_open)
        }
    }, [activeSidebar])
  return (
    <button onClick={handleToggle}>
        <div className={spanClass}></div>
        <div className={spanClass}></div>
        <div className={spanClass}></div>
    </button>
  )
}

export default Hamburger