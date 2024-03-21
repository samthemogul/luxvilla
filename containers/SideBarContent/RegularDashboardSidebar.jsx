"use client"

import React from 'react'
import styles from '@styles/components/sidebar.module.css'
import Link from 'next/link'

const RegularDashboardSidebar = () => {
  return (
    <ul className={styles.link_con}>
            <li className={styles.menu_links}>
                <Link href={'/dashboard/1'}>Dashboard</Link>
            </li>
            <li className={styles.menu_links}>
                <Link href={'/dashboard/1/property-listings'}>My Properties</Link>
            </li>
            <li className={styles.menu_links}>
                <Link href={'/'}>Reports</Link>
            </li>
            <li className={styles.menu_links}>
                <Link href={'/'}>Blogs</Link>
            </li>
            <li className={styles.menu_links}>
                <Link href={'/'}>Chats</Link>
            </li>
        </ul>
  )
}

export default RegularDashboardSidebar