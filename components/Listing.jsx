import React from "react";
import styles from '@styles/components/listing.module.css'
import Image from "next/image";

const Listing = ({
  key,
  title,
  description,
  displayImage,
  type,
  budget,
  location,
  rating,
  dateListed,
}) => {
  return <div className={styles.container}>
    <div className={styles.image}>
        <Image src={displayImage} alt={description} width={1000} height={3000} />
    </div>
    <div className={styles.details_container}>
        <p className={styles.timeposted}>Listed on {dateListed}</p>
        <h3 className={styles.title}>{title}</h3>
    </div>
    </div>;
};

export default Listing;
