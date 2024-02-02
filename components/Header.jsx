"use client"

import React, { useEffect, useState } from "react";
import styles from "../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { logoFiles } from "@constants/assets";
import Hamburger from "./Hamburger";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux"
import { sideBarActions } from '@redux/slices/sideBarSlice'


const Header = () => {
  const pathname = usePathname()
  const sideBarActive = useSelector((state) => state.sidebar.display)
  const dispatch = useDispatch()

  const [header, setHeader] = useState({
    homeHeader: false,
    authHeader: false,
    dashboardHeader: false
  })

  

 

  useEffect(()=>{
    setHeader({homeHeader: false, authHeader:false, dashboardHeader:false})
    if(pathname == '/'){
      setHeader({homeHeader:true, authHeader:false, dashboardHeader:false})
    } else if (pathname == '/signup' || pathname == '/login'){
      setHeader({authHeader: true, homeHeader: false, dashboardHeader:false})
    } else {
      setHeader({dashboardHeader:true, authHeader: false, homeHeader:false})
    }
  }, [pathname])
  
  return (
    <header className={header.dashboardHeader ? styles.dashboard_header : styles.header}>
      {/* Desktop Header Navigation */}
      <div className={styles.logo_nav}>
        <Hamburger />
        <Link href="/">
          <Image src={logoFiles.logo.url} alt={logoFiles.logo.description} width={100} height={32} />
        </Link>
      </div>
      {header.homeHeader && <><div className={styles.menu_links}>
        <Link href="/">Buy</Link>
        <Link href="/">Sell</Link>
        <Link href="/">Rent</Link>
      </div>
      <div className={styles.auth_links}>
        <Link href='/login'>Login</Link>
        <Link href={'/signup'}><button>Sign Up</button></Link>
      </div></>}
      {header.dashboardHeader && <div className={styles.dashboard_menus}>
        <div className={styles.dashboard_main_menu}>
          <Link href={'/'}><p>My properties</p></Link>
          <div className={styles.reports_option}>
              <div className={styles.report_con}>
                <p>Reports</p>
                <KeyboardArrowDownIcon className={styles.menu_dropdown} />
              </div>
          </div>
        </div>
        <div className={styles.dashboard_sidemenu}>

        </div>
        </div>}
      {!header.dashboardHeader && <Link className={styles.res_btn} href={'/signup'}><button>Sign Up</button></Link>}

      {/* Mobile Header Navigation */}
      <div className={styles.mobile_nav}>
      {!header.dashboardHeader && <div className={styles.mobile_menu_links}>
        <Link href="/">Buy</Link>
        <Link href="/">Sell</Link>
        <Link href="/">Rent</Link>
      </div>}
      </div>
    </header>
  );
};


export default Header;
