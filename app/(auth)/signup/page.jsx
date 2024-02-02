"use client"

import React, { useState } from 'react'
import styles from '@styles/pages/auth.module.css'
import GoogleButton from '@components/GoogleButton'
import CheckBox from '@components/CheckBox'
import Link from 'next/link'

const SignUpPage = () => {
  const [focused, setFocused] = useState(false)
  return (
    <div className={styles.main}>
      <div className={styles.form_container}>
        <h3 className={styles.form_header}>Sign up and find your dream home today</h3>
        <GoogleButton />
        <div className={styles.divider}>
          <div className={styles.divider_line}></div>
          <p>or</p>
          <div className={styles.divider_line}></div>
        </div>
        <form className={styles.form}>
          <div className={styles.name_inputs}>
            <input className={styles.inputs} type="text" name='firstname' placeholder='Firstname' />
            <input className={styles.inputs} type="text" name='lastname' placeholder='Lastname' />
          </div>
          <input className={styles.inputs} type="text" name='email' placeholder='Email address' />
          <input className={styles.inputs} type="password" name='password' placeholder='Enter password' />
          <input className={styles.inputs} type="password" name='confirm_password' placeholder='Confirm password' />
          <div className={styles.checkbox_option}>
            <CheckBox />
            <p>Send me regular emails about recent property listings around me</p>
          </div>
          <div className={styles.checkbox_option}>
            <CheckBox />
            <p>Yes, I understand and agree with the Luxvilla <Link href={'/'}>Terms of service</Link> and <Link href={'/'}>Privacy policy</Link></p>
          </div>
          <button type='submit'>Create my account</button>
          <p className={styles.auth_option}>Already have an account? <strong><Link href={'/login'}>Log In</Link></strong></p>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage