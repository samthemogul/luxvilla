"use client"

import React from 'react'
// import styles from '../styles/components/sidebar.module.css'
import styles from '@styles/components/sidebar.module.css'
import Link from 'next/link'
import RegularSideBar from '@containers/SideBarContent/RegularSideBar'
import RegularDashboardSidebar from '@containers/SideBarContent/RegularDashboardSidebar'
import SearchBoxSideBar from '@containers/SideBarContent/SearchBoxSideBar'
import { useSelector } from "react-redux"

const SideBar = () => {
    const activeSidebar = useSelector(state => state.sidebar.display)
    const activeContent = useSelector(state => state.sidebar.content)
  return (
    <div className={activeSidebar ? styles.main_con : `${styles.main_con} ${styles.hidden}`}>
        {activeContent.regularSidebar && <RegularSideBar />}
        {activeContent.DashboardSideBar && <RegularDashboardSidebar />}
        {activeContent.searchboxSidebar && <SearchBoxSideBar />}
    </div>
  )
}

export default SideBar