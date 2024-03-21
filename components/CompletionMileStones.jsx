import React from 'react'
import styles from "@styles/containers/centerpops/profilecomplete.module.css"
import CheckBoxCircle from './CheckBoxCircle'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const CompletionMileStones = ({ name, description, link }) => {
  return (
    <div className={styles.milestone_container}>
        <CheckBoxCircle />
        <div className={styles.milestone_details}>
            <h3 className={styles.milestone_name}>{name}</h3>
            <p className={styles.milestone_description}>{description}</p>
        </div>
        <div className={styles.arrow}><KeyboardArrowRightOutlinedIcon className={styles.arrow_icon} /></div>
    </div>
  )
}

export default CompletionMileStones