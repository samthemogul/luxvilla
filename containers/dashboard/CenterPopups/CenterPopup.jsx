"use client"

import React, { useEffect } from 'react'
import styles from '@styles/containers/centerpopup.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { centerPopupActions } from '@redux/slices/centerPopupSlice'
import CloseIcon from '@mui/icons-material/Close';
import ProfileCompletePop from '@components/CenterPopContents/ProfileCompletePop'

const CenterPopup = () => {
    const dispatch = useDispatch();
    const centerPopup = useSelector(state => state.centerpopup.display)
    const popState = useSelector(state => state.centerpopup.content)

    const handleClose = () => {
        dispatch(centerPopupActions.hide());
    
    }

    useEffect(() => {
        if(centerPopup){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [centerPopup])
  return (
    <div>{centerPopup && <div className={styles.c_popup_container}>
        <div className={styles.centerpop_content}>
            <button onClick={handleClose} className={styles.centerpop_close_btn}><CloseIcon /></button>
            {popState.completeProfilePopup && <ProfileCompletePop />}
        </div>
        </div>}</div>
  )
}

export default CenterPopup