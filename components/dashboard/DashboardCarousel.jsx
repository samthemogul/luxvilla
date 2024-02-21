import React from 'react'
import styles from '@styles/pages/dashboard/dashboardcarousel.module.css'

const DashboardCarousel = () => {
  return (
    <div className={styles.container}>
      {/* Slides */}
      <div className={styles.slide}>
          <h3 className={styles.slide_header}>List a property for <br/>rentage</h3>
          <div className={styles.btn_img}>
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