import React from 'react'
import DashboardSection from '@components/DashboardSection'
import styles from '@styles/pages/dashboard/dashboardsections.module.css'

const DashboardSections = ({sections}) => {
  return (
    <div className={styles.sections_container}>
        {sections.map((section) => {
           return  <DashboardSection key={section.title} title={section.title} subsections={section.subsections} />
        })}
    </div>
  )
}

export default DashboardSections