"use client"

import { useState } from "react"
import styles from '@styles/containers/sidepopup.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { sidePopupActions } from "@redux/slices/sidePopupSlice";

const SidePopup = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(sidePopupActions.hide());
    }
    
    return (
        <div className={styles.sidepop_container}>
            <div className={styles.blank_space}></div>
            <div className={styles.sidepop_content}>
                <div className={styles.pop_buttons}>
                    <button onClick={handleClose} className={styles.pop_close_btn}><ArrowBackIosNewIcon /></button>
                    <div className={styles.new_window_link}><Link href={'/'}><LaunchIcon /><p>Open listing in a new window</p></Link></div>
                </div>
            </div>
        </div>
    )
}

export default SidePopup;