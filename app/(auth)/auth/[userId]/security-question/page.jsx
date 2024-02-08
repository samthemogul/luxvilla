"use client"

import React, { useEffect } from 'react'
import styles from '@styles/pages/auth.module.css'
import { useParams } from 'next/navigation'

const SecurityForm = () => {
    const securityQuestion = "what is my pet's name?";
    const params = useParams()

    // useEffect(()=> {
    //     console.log(params.userId)
    // }, [])
  return (
    <div className={styles.main}>
      <div className={styles.form_container}>
        <h3 className={styles.form_header}>{securityQuestion.length == 0 ? "Choose a security question" : "Confirm it is you"}</h3>
        <form className={styles.form}>
          <p>{securityQuestion}</p>
          <input className={styles.inputs} type="password" name='security_answer' placeholder='Enter answer' />
          <button type='submit'>continue to account</button>
        </form>
      </div>
    </div>
  )
}

export default SecurityForm