import React from 'react'
import styles from "@styles/components/dropdown.module.css"
import Link from 'next/link'

const ReportNav = () => {
  return (
    <div className={styles.report_nav_container}>
      <ul className={styles.nav_links}>
          <li className={styles.nav_link_item}><Link href={'/'}>Overview</Link></li>
          <li className={styles.nav_link_item}><Link href={'/'}>My Reports</Link></li>
          <li className={styles.nav_link_item}><Link href={'/'}>Transactions</Link></li>
      </ul>
    </div>
  )
}

export default ReportNav