"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import { useParams } from "next/navigation"
import ProductListings from '@containers/dashboard/ProductListings'
import ProfileOptions from '@containers/dashboard/ProfileOptions'
import SearchBox from '@containers/SearchBox'
import styles from '@styles/pages/dashboard/dashboard.module.css'

const Dashboard = () => {
 

  const firstName = "Samuel"
  return (
    <div className={styles.main}>
      <div className={styles.search_and_listings}>
        <h2 className={styles.name_header}>{`Hi ${firstName}`}!</h2>
        <SearchBox className={styles.dashboard_searchbox} type="dashboard_searchbox" />
        <ProductListings />
      </div>
      <div>
      <ProfileOptions />
      </div>
    </div>
  )
}

export default Dashboard