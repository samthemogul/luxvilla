"use client"

import React, { useEffect, useState } from "react";
import styles from "@styles/pages/dashboard/listings.module.css";

const ProductListings = () => {

    const [activeFilter, setActiveFilter] = useState("all")
    const [activeBarStyle, setActiveBarStyle] = useState(styles.bar)

    const handleFilter =(filter) => {
        setActiveFilter(filter)
    }

    useEffect(() => {
      if(activeFilter == "all") {
        setActiveBarStyle(styles.bar)
      }
      if(activeFilter == "rentage") {
        setActiveBarStyle(styles.bar1)
      }
      if(activeFilter == "buy") {
        setActiveBarStyle(styles.bar2)
      }
    }, [activeFilter])
    
  return (
    <div className={styles.listing_container}>
      <div className={styles.filter_container}>
        <div className={styles.filter_options}>
          <p onClick={() => handleFilter("all")}><span>All</span></p>
          <p onClick={() => handleFilter("rentage")}><span>Rentage</span></p>
          <p onClick={() => handleFilter("buy")}><span>Buy</span></p>
        </div>
        <div className={styles.filter_barline}>
          <div className={activeBarStyle}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <p className={styles.tagline}>Search for property listings near you the match your preference and find your ideal home today.</p>
    </div>
  );
};

export default ProductListings;
