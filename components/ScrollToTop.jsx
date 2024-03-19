"use client"

import { useState, useEffect } from 'react'
import styles from '@styles/components/scrolltotop.module.css'
import { KeyboardArrowUp } from '@mui/icons-material'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);   
  return (
    <>
    {isVisible && (
        <div onClick={scrollToTop} className={styles.scroll_container}><KeyboardArrowUp className={styles.scroll_icon} /></div>
    )}
    </>
  )
}

export default ScrollToTop