"use client"

import Image from 'next/image'
import styles from '@styles/page.module.css'
import { useEffect, useState } from 'react'
import Hero from '@containers/Hero'
import SearchBox from '@containers/SearchBox'
import Features from '@containers/Features'
import FeaturedProperties from '@containers/FeaturedProperties'
import HomeCallToAction from '@containers/HomeCallToAction'
import SideBar from '@components/SideBar'
import SidePopup from "@containers/dashboard/SidePopups/SidePopup";
import { useSelector } from "react-redux";

export default function Home() {
  // const sidePopup = useSelector(state => state.sidepopup.display);

  // useEffect(() => {
  //   console.log(sidePopup)
  // }, [sidePopup])
  return (
    <div className="main">
      <Hero/>
      <SearchBox type="container" />
      <Features />
      <FeaturedProperties />
      <HomeCallToAction />
    </div>
  )
}
