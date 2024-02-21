import React from 'react'
import ProfileProgress from '@components/dashboard/ProfileProgress'
import DashboardCarousel from '@components/dashboard/DashboardCarousel'
import styles from '@styles/pages/dashboard/dashboard.module.css'

const ProfileOptions = () => {
  return (
    <div className={styles.profile_options}>
      <ProfileProgress />
      <DashboardCarousel />
    </div>
  )
}

export default ProfileOptions