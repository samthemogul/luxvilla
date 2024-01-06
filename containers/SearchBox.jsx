"use client"

import React, { useState } from 'react'
import styles from '../styles/components/searchbox.module.css'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const [ optionClass, setOptionClass] = useState(styles.bar);
  const changeToBuy = () => {
    setOptionClass(`${styles.bar} ${styles.buy}`)
  }
  const changeToRent = () => {
    setOptionClass(styles.bar);
  }
  return (
    <div className={styles.container}>
      <div className={styles.searchbox}>

        {/* Rent and Buy option slider */}

        <div className={styles.options}>
          <div className={styles.option}>
            <p onClick={changeToRent} className={styles.option_text}>Rent</p>
            <p onClick={changeToBuy} className={styles.option_text}>Buy</p>
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