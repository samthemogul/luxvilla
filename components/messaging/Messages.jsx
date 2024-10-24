import React from 'react'
import styles from "@styles/pages/messaging/conversations.module.css"
import { demoMessage } from "@constants/data"
import Image from 'next/image'

const Messages = () => {
  return (
    <div className={styles.messages}>
        <div className={styles.sender_photo}>
            <Image src={demoMessage.senderPhoto} alt={demoMessage.name} width={100} height={100}/>
        </div>
        <div className={styles.message_details}>
            <div className={styles.name_date}>
            <h3 className={styles.sender_name}>{demoMessage.sender}</h3>
            <p className={styles.date}>{demoMessage.date}</p>
            </div>
            <p className={styles.content}>{demoMessage.content}</p>
        </div>
    </div>
  )
}

export default Messages