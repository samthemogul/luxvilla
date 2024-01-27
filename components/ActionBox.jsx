import React from 'react'
import styles from '../styles/components/calltoaction.module.css'
import Link from 'next/link'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const ActionBox = ({title, description}) => {
  return (
    <div className={styles.action}>
        <h3 className={styles.action_title}>{title}</h3>
        <Link href={'/'} className={styles.action_call}>
        <p className={styles.action_description}>{description}</p>
        <ArrowForwardOutlinedIcon className={styles.action_icon}/>
        </Link>
    </div>
  )
}

export default ActionBox