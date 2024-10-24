import React from 'react'
import styles from "@styles/pages/messaging/conversations.module.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SearchMessages from '@components/messaging/SearchMessages';
import MessagesContainer from './MessagesContainer';

const MessagingRoom = () => {
  return (
    <div className={styles.room_container}>
        <div className={styles.room_header}>
            <h4 className={styles.header_text}>Messages</h4>
            <div className={styles.header_navigation}>
            <button className={styles.room_nav_btn}><CalendarMonthOutlinedIcon /></button>
            <button className={styles.room_nav_btn}><MoreHorizOutlinedIcon /></button>
            </div>
        </div>
        <SearchMessages />
        <MessagesContainer />
    </div>
  )
}

export default MessagingRoom