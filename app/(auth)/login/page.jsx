"use client"

import React, { useState } from 'react'
import styles from '@styles/pages/auth.module.css'
import GoogleButton from '@components/GoogleButton'
import CheckBox from '@components/CheckBox'
import Link from 'next/link'

const SignInPage = () => {
  const [focused, setFocused] = useState(false)
  return (
    <div className={styles.main}>
      <div className={styles.form_container}>
        <h3 className={styles.form_header}>Log in to Luxvilla</h3>
        <GoogleButton />
        <div className={styles.divider}>
          <div className={styles.divider_line}></div>
          <p>or</p>
          <div className={styles.divider_line}></div>
        </div>
        <form className={styles.form}>
          <input className={styles.inputs} type="text" name='email' placeholder='Email address' />
          <input className={styles.inputs} type="password" name='password' placeholder='Enter password' />
          
          <button type='submit'>continue with Email</button>
          <div className={styles.divider}>
          <div className={styles.divider_line}></div>
          <p>Dont have an account?</p>
          <div className={styles.divider_line}></div>
        </div>
        </form>
        <button className={styles.signup_btn}>
            <p>Sign Up</p>
    </button>
      </div>
    </div>
  )
}

export default SignInPage