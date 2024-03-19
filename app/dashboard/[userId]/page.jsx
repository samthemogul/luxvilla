"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import { useParams } from "next/navigation"
import ProductListings from '@containers/dashboard/ProductListings'
import ProfileOptions from '@containers/dashboard/ProfileOptions'
import SearchBox from '@containers/SearchBox'
import DashboardSections from "@components/dashboard/DashboardSections"
import styles from '@styles/pages/dashboard/dashboard.module.css'

const Dashboard = () => {
 

  const firstName = "Samuel"
  const mobileSections = [
    {
      title: "My Listings",
      subsections: ['Most recent','Favourites']
    },
    // {
    //   title: "Conversations",
    //   subsections:['Messages','Calls'],
    // },
    {
      title: "Notifications",
      subsections: ['Conversations','Alerts']
    },
    {
      title: "My Profile",
      subsections: ['Account','Settings']
    }
  ]
  return (
    <>
      <div className={styles.main}>
      <div className={styles.search_and_listings}>
        <h2 className={styles.name_header}>{`Hi ${firstName}`}!</h2>
        <SearchBox className={styles.dashboard_searchbox} type="dashboard_searchbox" />
        <ProductListings />
      </div>
      <div className={styles.progress_and_options}>
      <ProfileOptions />
      </div>
    </div>

    {/* Mobile Main */}
    <div className={styles.mobile_dashboard}>
      <DashboardSections sections={mobileSections} />
      <ProductListings />
    </div>
    </>
  )
}

export default Dashboard