"use client"

import React, { useEffect, useState } from "react";
import styles from "../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { logoFiles } from "@constants/assets";
import Hamburger from "./Hamburger";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux"
import { sideBarActions } from '@redux/slices/sideBarSlice'
import { photoFiles } from "@constants/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";



const Header = () => {
  const pathname = usePathname()
  const sideBarActive = useSelector((state) => state.sidebar.display)
  const dispatch = useDispatch()

  const [header, setHeader] = useState({
    homeHeader: false,
    authHeader: false,
    dashboardHeader: false
  })
  const name = "Samuel Emeka"

  const profilePhoto = () => {
    return photoFiles.defaultProfilePhoto.url
  }

  const handleSearchToggle = () => {
    dispatch(sideBarActions.hide())
    dispatch(sideBarActions.toggleSidebar())
    dispatch(sideBarActions.show({ searchboxSidebar: true }))
  }

 

  useEffect(()=>{
    setHeader({homeHeader: false, authHeader:false, dashboardHeader:false})
    dispatch(sideBarActions.hide())
    if(pathname == '/'){
      setHeader({homeHeader:true, authHeader:false, dashboardHeader:false})
      dispatch(sideBarActions.show({ regularSidebar: true }))
    } else if (pathname == '/signup' || pathname == '/login'){
      setHeader({authHeader: true, homeHeader: false, dashboardHeader:false})
      dispatch(sideBarActions.show({ regularSidebar: true }))
    } else {
      setHeader({dashboardHeader:true, authHeader: false, homeHeader:false})
      dispatch(sideBarActions.show({ DashboardSideBar: true }))
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

      {/* Dashboard Header */}
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
        <Link className={styles.listing_btn} href={'/'}><button>+ New Listing</button></Link>
        <div className={styles.notification_con}>
          
          <button>
          <div className={styles.note_mark}><p></p></div>
          <FontAwesomeIcon icon={faComment} className={styles.header_sideicon} />
          </button>
        </div>
        <div className={styles.notification_con}>
          
          <button>
          <div className={styles.note_mark}><p></p></div>
          <FontAwesomeIcon icon={faBell} className={styles.header_sideicon} /></button>
        </div>
        <div className={styles.profile_container}>
          <button>
            <AccountCircleIcon className={styles.profile_icon} />
            {/* <Image src={profilePhoto} width={500} height={500} alt={name} /> */}
          </button>
        </div>
        <button></button>
        </div>
        </div>}
        <Link className={styles.mobile_logo} href="/">
          <Image src={logoFiles.logo.url} alt={logoFiles.logo.description} width={100} height={32} />
        </Link>
        <button onClick={handleSearchToggle} className={styles.dashboard_search}><SearchIcon className={styles.icon} /></button>
      {!header.dashboardHeader && <Link className={styles.res_btn} href={'/signup'}><button>Sign Up</button></Link>}

      {/* Mobile Header Navigation */}
      <div className={styles.mobile_nav}>
      {!header.dashboardHeader && <div className={styles.mobile_menu_links}>
        <Link href="/">Buy</Link>
        <Link href="/">Sell</Link>
        <Link href="/">Rent</Link>
      </div>}
      {header.dashboardHeader && <div>Nothing</div>}
      </div>
    </header>
  );
};


export default Header;
