"use client";

import React, { useEffect, useState } from "react";
import styles from "@styles/pages/dashboard/listings.module.css";
import Listing from "@components/Listing";
import { listings } from "@constants/data";

const ProductListings = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeBarStyle, setActiveBarStyle] = useState(styles.bar);
  const [listing, setListings] = useState(listings);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (activeFilter == "all") {
      setActiveBarStyle(styles.bar);
      setListings(listings);
    }
    if (activeFilter == "rentage") {
      setActiveBarStyle(styles.bar1);
      setListings(listings.filter((item) => item.type == "rentage"));
    }
    if (activeFilter == "buy") {
      setActiveBarStyle(styles.bar2);
      setListings(listings.filter((item) => item.type == "buy"));
    }
  }, [activeFilter]);

  return (
    <div className={styles.listing_container}>
      {/* Listing filter */}
      <div className={styles.filter_container}>
        <div className={styles.filter_options}>
          <p onClick={() => handleFilter("all")}>
            <span>All</span>
          </p>
          <p onClick={() => handleFilter("rentage")}>
            <span>Rentage</span>
          </p>
          <p onClick={() => handleFilter("buy")}>
            <span>Buy</span>
          </p>
        </div>
        <div className={styles.filter_barline}>
          <div className={activeBarStyle}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <p className={styles.tagline}>
        Search for property listings near you the match your preference and find
        your ideal home today.
      </p>
      {/* Listings */}
      <div className={styles.listings_box}>
      {listing.map((item) => {
        return (
          <Listing
            key={item.id}
            title={item.title}
            description={item.description}
            displayImage={item.displayImage}
            type={item.type}
            budget={item.budget}
            location={item.location}
            rating={item.rating}
            dateListed={item.dateListed}
          />
        );
      })}
      </div>
    </div>
  );
};

export default ProductListings;
