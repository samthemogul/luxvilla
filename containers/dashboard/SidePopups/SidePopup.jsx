"use client"

import { useEffect, useState } from "react"
import styles from '@styles/containers/sidepopup.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { sidePopupActions } from "@redux/slices/sidePopupSlice";
import sidePopupSlice from "@redux/slices/sidePopupSlice";

const SidePopup = () => {
    const sidePopup = useSelector(state => state.sidepopup.display);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(sidePopupActions.hide());
    }
    useEffect(() => {
        if(sidePopup){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [sidePopup])
    
    return (
        <>{sidePopup && (<div className={styles.sidepop_container}>
            <div onClick={handleClose} className={styles.blank_space}></div>
            <div className={styles.sidepop_content}>
                <div className={styles.pop_buttons}>
                    <button onClick={handleClose} className={styles.pop_close_btn}><ArrowBackIosNewIcon /></button>
                    <div className={styles.new_window_link}><Link href={'/'}><LaunchIcon /><p>Open listing in a new window</p></Link></div>
                </div>
            </div>
        </div>)}</>
    )
}

export default SidePopup;