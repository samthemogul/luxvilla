"use client"

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from '../styles/components/hamburger.module.css'
import { useDispatch, useSelector } from "react-redux"
import { sideBarActions } from '@redux/slices/sideBarSlice'

const Hamburger = () => {
    const [spanClass, setSpanClass] = useState(styles.span_closed)
    const pathname = usePathname()

    const activeSidebar = useSelector(state => state.sidebar.display)
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(sideBarActions.hide())
        if(pathname == '/'){
            dispatch(sideBarActions.show({ regularSidebar: true }))
            } else if (pathname == '/signup' || pathname == '/login'){
            dispatch(sideBarActions.show({ regularSidebar: true }))
            } else {
            dispatch(sideBarActions.show({ DashboardSideBar: true }))
            }
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