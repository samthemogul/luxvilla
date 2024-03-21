import React from 'react'
import { useEffect, useRef } from 'react';
import styles from "@styles/components/dropdown.module.css"
import { useProfile } from '@context/ProfileContext';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const ProfileNav = () => {

    const { profileOpen, setProfileOpen } = useProfile()
    const profilePop = useRef(null)

    const name = "Samuel Emeka"

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(profilePop.current && !profilePop.current.contains(event.target)) {
                setProfileOpen(false)
            }
          
        };
    
        if (profileOpen) {
          document.addEventListener('click', handleOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [profileOpen]);
  return (
    <div ref={profilePop} className={styles.profile_container}>
        <div className={styles.profile_photo_details}>
            <div className={styles.active_status}></div>
            <div className={styles.profile_photo}><AccountCircleIcon className={styles.photo_icon} /></div>
            <h3 className={styles.profile_name}>{name}</h3>
        </div>
        <ul className={styles.profile_links}>
            <li className={styles.profile_link_item}><Link href={'/'}>
                <AccountCircleOutlinedIcon className={styles.link_icon} />
                <p className={styles.link_text}>Account</p>
                </Link>
            </li>
            <li className={styles.profile_link_item}><Link href={'/'}>
                <SettingsOutlinedIcon className={styles.link_icon} />
                <p className={styles.link_text}>Settings</p>
                </Link>
            </li>
            <li className={styles.profile_link_item}><button>
                <LogoutOutlinedIcon className={styles.link_icon} />
                <p className={styles.link_text}>Log out</p>
                </button>
            </li>
        </ul>
    </div>
  )
}

export default ProfileNav