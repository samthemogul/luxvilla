import React from 'react'
import styles from "@styles/containers/centerpops/profilecomplete.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CompletionMileStones from '@components/CompletionMileStones';
import Link from 'next/link';

const ProfileCompletePop = () => {

    const completionMilestones = [
        {
            name: "Upload profile photo",
            description: "choose a photo thats shows who you are",
            link: "/"
        },
        {
            name: "Verify phone number",
            description: "verify mobile number via SMS or call",
            link: "/"
        },
        {
            name: "Verify identity",
            description: "National Id-card, passport or driver's licence",
            link: "/"
        },
        {
            name: "Add your first property",
            description: "Hit the ground running, list a property",
            link: "/"
        },
    ]
        
  return (
    <div className={styles.container}>
        <div className={styles.container_illustration}>
            <div className={styles.profile_photo}><AccountCircleIcon className={styles.photo_icon} /></div>
            <p className={styles.percent_progress}>70% complete</p>
            <p className={styles.remark}>Youre almost done!</p>
            <Link className={styles.illustration_link} href={'/'}>Go to account</Link>
        </div>
        <div className={styles.container_actions}>
            <h2 className={styles.pop_header}>Complete your profile</h2>
            <p className={styles.pop_tagline}>You look more <span>credible</span> to clients and buyers when you have a complete profile.</p>
            <div className={styles.milestones}>
            {completionMilestones.map((milestone) => {
                return <CompletionMileStones key={milestone.name} name={milestone.name} description={milestone.description} link={milestone.link} />
            })}
        </div>
        <button className={styles.accent_close_btn}>Close</button>
        </div>
    </div>
  )
}

export default ProfileCompletePop