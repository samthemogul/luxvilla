import React from 'react'
import { useEffect, useRef } from 'react';
import styles from "@styles/components/dropdown.module.css"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNotification } from '@context/NotificationContext';

const NotificationNav = () => {

    const { notificationOpen, setNotificationOpen } = useNotification()
    const popupRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(popupRef.current && !popupRef.current.contains(event.target)) {
                setNotificationOpen(false)
            }
          
        };
    
        if (notificationOpen) {
          document.addEventListener('click', handleOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [notificationOpen]);


  return (
    <div ref={popupRef} className={styles.notification_container}>
        <div className={styles.notifications}>
            <div className={styles.notification_body}>
                <div className={styles.notification_icon}><AccountCircleOutlinedIcon /></div>
                <div className={styles.notification_message}>
                    <p className={styles.notification_text}>A recent sign-in to your Luxvilla account from an unknown device or browser.</p>
                    <p className={styles.notification_time}>5:40 PM</p>
                </div>
            </div>
            <div className={styles.notification_body}>
                <div className={styles.notification_icon}><AccountCircleOutlinedIcon /></div>
                <div className={styles.notification_message}>
                    <p className={styles.notification_text}>A recent sign-in to your Luxvilla account from an unknown device or browser.</p>
                    <p className={styles.notification_time}>5:40 PM</p>
                </div>
            </div>
            <div className={styles.notification_body}>
                <div className={styles.notification_icon}><AccountCircleOutlinedIcon /></div>
                <div className={styles.notification_message}>
                    <p className={styles.notification_text}>A recent sign-in to your Luxvilla account from an unknown device or browser.</p>
                    <p className={styles.notification_time}>5:40 PM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotificationNav