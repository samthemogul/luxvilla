import React from 'react'
import styles from '../styles/components/sidebar.module.css'
import Link from 'next/link'
import { useSelector } from "react-redux"

const SideBar = () => {
    const activeSidebar = useSelector(state => state.sidebar.display)
  return (
    <div className={activeSidebar ? styles.main_con : `${styles.main_con} ${styles.hidden}`}>
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
    </div>
  )
}

export default SideBar