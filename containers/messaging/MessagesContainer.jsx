import React from 'react'
import styles from "@styles/pages/messaging/conversations.module.css"
import Messages from '@components/messaging/Messages'

const MessagesContainer = () => {
  return (
    <div className={styles.messages_wrapper}>
        <Messages />
        <Messages />
    </div>
  )
}

export default MessagesContainer