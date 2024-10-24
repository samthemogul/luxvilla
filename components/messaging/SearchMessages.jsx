import React from 'react'
import styles from "@styles/pages/messaging/conversations.module.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';


const SearchMessages = () => {
  return (
    <div className={styles.search_wrapper}>
        <div className={styles.search_con}>
            <button className={styles.search_btn}><SearchOutlinedIcon /></button>
            <input className={styles.input} type="text" placeholder="Search Messages..." />
        </div>
        <button className={styles.filter_btn}><FilterListOutlinedIcon className={styles.filter_icon} /></button>
    </div>
  )
}

export default SearchMessages