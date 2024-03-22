"use client"

import React from 'react'
import styles from '@styles/components/sidebar.module.css'
import Link from 'next/link'

const RegularSideBar = () => {
  return (
    <ul className={styles.link_con}>
            <li className={styles.menu_links}>
                <Link href={'/'}>Buy</Link>
            </li>
            <li className={styles.menu_links}>
                <Link href={'/'}>Sell</Link>
            </li>
            <li className={styles.menu_links}>
                <Link href={'/'}>Rent</Link>
            </li>
        </ul>
  )
}

export default RegularSideBar