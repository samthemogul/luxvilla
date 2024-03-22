"use client"
import React from 'react'
import styles from '@styles/pages/dashboard/profileprogress.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { centerPopupActions } from '@redux/slices/centerPopupSlice';
import { useDispatch } from 'react-redux';

const ProfileProgress = () => {
    const dispatch = useDispatch();
    const user = {}
    const handleComplete = () => {
        dispatch(centerPopupActions.show({ completeProfilePopup: true }));
    }
  return (
    <div className={styles.container}>
        <div className={styles.profile_details}>
            {user.image ? user.image : <AccountCircleIcon className={styles.profile_demo} />}
            <div>
                <Link href={"/"}><h4>Samuel. E</h4></Link>
                <p>Lagos, Nigeria.</p>
            </div>
        </div>
        <div><button onClick={handleComplete} className={styles.cta_btn}>Complete your profile</button></div>
        <div className={styles.progressbar_container}>
        <div className={styles.progressbar}>
            <div className={styles.bar}></div>
        </div>
        <p>70%</p>
        </div>
    </div>
  )
}

export default ProfileProgress