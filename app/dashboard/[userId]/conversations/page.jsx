import React from 'react'
import styles from "@styles/pages/messaging/conversations.module.css"
import MessagingRoom from '@containers/messaging/MessagingRoom'
import MessagingContainer from '@containers/messaging/MessagingContainer'
import MessagingOptions from '@containers/messaging/MessagingOptions'

const page = () => {
  return (
    <div className={styles.conversations_page_con}>
      <div className={styles.container}>
        <div className={styles.messaging_room}>
        <MessagingRoom />
        </div>
        <div className={styles.messaging_container}>
        <MessagingContainer />
        </div>
        <div className={styles.messaging_options}>
        <MessagingOptions />
        </div>
      </div>
    </div>
  )
}

export default page