import React from 'react'
import styles from '@styles/pages/dashboard/dashboardcarousel.module.css'
import Image from 'next/image'
import { dashboardCarousel } from '@constants/assets'

const DashboardCarousel = () => {
  return (
    <div className={styles.container}>
      {/* Slides */}
      <div className={styles.slide}>
          <h3 className={styles.slide_header}>List a property for <br/>rentage</h3>
          <div className={styles.btn_img}>
            <Image src={dashboardCarousel.slide1.url} alt='learn more' width={300} height={200} />
              <button>Learn more</button>
          </div>
      </div>
      <div className={styles.progressbar_container}>
        <div className={styles.progressbar}>
            <div className={styles.bar}></div>
        </div>
        <div className={styles.progressbar}>
            <div className={styles.bar}></div>
        </div>
        </div>
    </div>
  )
}

export default DashboardCarousel