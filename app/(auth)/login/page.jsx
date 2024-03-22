"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@styles/pages/auth.module.css'
import GoogleButton from '@components/GoogleButton'
import CheckBox from '@components/CheckBox'
import Link from 'next/link'

const SignInPage = () => {
  const [focused, setFocused] = useState(false)
  const router = useRouter()

  const navTosignUp = () => {
    router.push('/signup')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/auth/1/security-question')
  }
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
        <form onSubmit={handleSubmit} className={styles.form}>
          <input className={styles.inputs} type="text" name='email' placeholder='Email address' />
          <input className={styles.inputs} type="password" name='password' placeholder='Enter password' />
          
          <button type='submit'>continue with Email</button>
          <div className={styles.divider}>
          <div className={styles.divider_line}></div>
          <p>Dont have an account?</p>
          <div className={styles.divider_line}></div>
        </div>
        </form>
        <button onClick={navTosignUp} className={styles.signup_btn}>
            <p>Sign Up</p>
    </button>
      </div>
    </div>
  )
}

export default SignInPage
