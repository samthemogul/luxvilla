import React from 'react'
import ProfileProgress from '@components/dashboard/ProfileProgress'
import DashboardCarousel from '@components/dashboard/DashboardCarousel'
import DashboardSections from '@components/dashboard/DashboardSections'
import styles from '@styles/pages/dashboard/dashboard.module.css'

const ProfileOptions = () => {

  const desktopSections = [
    {
      title: "My Listings",
      subsections: ['Most recent','Favourites']
    },
    {
      title: "Conversations",
      subsections:['Messages','Calls'],
    },
    {
      title: "Blogs",
      subsections: ['Most recent','Favourites']
    }
  ]
  return (
    <div className={styles.profile_options}>
      <ProfileProgress />
      <DashboardCarousel />
      <DashboardSections sections={desktopSections} />
    </div>
  )
}

export default ProfileOptions