"use client"

import React, { useState } from 'react'
import styles from '../styles/components/searchbox.module.css'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({type}) => {
  const [ optionClass, setOptionClass] = useState(styles.bar);
  const [ activeRent, setActiveRent ] = useState(`${styles.option_text} ${styles.active_text}`)
  const [ activeBuy, setActiveBuy ] = useState(styles.option_text)
  const changeToBuy = () => {
    setOptionClass(`${styles.bar} ${styles.buy}`)
    setActiveBuy(`${styles.option_text} ${styles.active_text}`)
    setActiveRent(styles.option_text)
  }
  const changeToRent = () => {
    setOptionClass(styles.bar);
    setActiveRent(`${styles.option_text} ${styles.active_text}`)
    setActiveBuy(styles.option_text)
  }
  return (
    <div className={styles[type]}>
      <div className={styles.searchbox}>

        {/* Rent and Buy option slider */}

        <div className={styles.options}>
          <div className={styles.option}>
            <p onClick={changeToRent} className={activeRent}>Rent</p>
            <p onClick={changeToBuy} className={activeBuy}>Buy</p>
          </div>
          <div className={styles.active}>
            <div className={optionClass}></div>
          </div>
        </div>

        {/* Input fields */}

        <div className={styles.input_area}>
          <form>
          <div className={styles.input_sections}>
            <div className={styles.input_field}>
              <label className={styles.labels} htmlFor="location">Location</label><br />
              <input className={styles.inputs} type="text" id="location" name="location" placeholder='select your city'/><br />
              <MyLocationIcon className={styles.icon} />
            </div>
            <div className={styles.input_field}>
            <label className={styles.labels} htmlFor="property-type">Property Type</label><br />
              <input className={styles.inputs} type="text" id="property-type" name="property-type" placeholder='choose property type'/><br />
              <KeyboardArrowDownIcon className={styles.icon} />
            </div>
            <div className={styles.input_field}>
            <label className={styles.labels} htmlFor="price-range">Price Range</label><br />
              <input className={styles.inputs} type="text" id="price-range" name="price-range" placeholder='set price range'/><br />
              <KeyboardArrowDownIcon className={styles.icon} />
            </div>
            <button className={styles.submit_button} type='submit'><SearchIcon /></button>
          </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default SearchBox