"use client"

import React, { useState } from "react";
import styles from '@styles/components/listing.module.css'
import stylesAccent from '@styles/components/accentbutton.module.css'
import stylesBorder from '@styles/components/borderbutton.module.css'
import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import Rating from "./Rating";
import { Chat } from "@mui/icons-material";
import { sidePopupActions } from "@redux/slices/sidePopupSlice";
import { sideBarActions } from "@redux/slices/sideBarSlice";
import { useDispatch, useSelector } from "react-redux";


const Listing = ({
  title,
  description,
  displayImage,
  type,
  budget,
  location,
  rating,
  dateListed,
}) => {
  const [liked, setLiked] = useState(false);
 
  const dispatch = useDispatch();

  const handleLike = () => {
    setLiked(prev => !prev)
  }

  const showMore = () => {
    console.log("details");
    dispatch(sidePopupActions.show());
  }
  
  return <div className={styles.container}>
    <div className={styles.image}>
        <Image src={displayImage} alt={description} width={1000} height={3000} />
    </div>
    <div className={styles.details_container}>
        <p className={styles.timeposted}>Listed on {dateListed}</p>
        <div className={styles.head_favourite} >
            <h3 className={styles.title}>{title}</h3>
            <button  onClick={handleLike}>{liked ?  <FavoriteIcon className={styles.like_btn} /> : <FavoriteBorderIcon className={styles.like_btn} />}</button>
        </div>
        <div className={styles.type_budget}>
          <div className={styles.type}>{type == "rentage" ? "For rentage" : "For sale"}</div>
          <p className={styles.budget}>Budget: {budget}</p>
        </div>
        <div className={styles.rating_container}>
            <Rating rating={rating} />
            <p>Rating: {rating}/5.0</p>
        </div>
        <p className={styles.description}>
          {description}
        </p>
        <div className={styles.location_container}>
            <LocationOnOutlined className={styles.location_icon} />
            <p className={styles.location_text}>{location}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={showMore} type="button" className={stylesAccent.accentbutton}>view details</button>
          <button className={stylesBorder.borderbutton}>
            <Chat />
            <p>message owner</p>
          </button>
        </div>
    </div>
    </div>;
};

export default Listing;
