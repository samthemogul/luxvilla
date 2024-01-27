"use client";

import React, { useState } from "react";
import styles from "../styles/components/featuredproperties.module.css";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

const FeatureProperty = ({ image, title, description, location }) => {
  const [descActive, setDescActive] = useState(false);

  const handleDescActive = () => {
    setDescActive((prev) => !prev);
  };
  return (
    <div className={styles.main}>
      <div className={styles.background}>
        <Image
          onClick={handleDescActive}
          className={styles.image}
          src={image}
          alt={description}
          width={3000}
          height={3000}
        />
      </div>
      <div
        className={styles.description_box}
        onMouseEnter={handleDescActive}
        onMouseLeave={handleDescActive}
        onClick={() => setDescActive(true)}
      >
        {descActive ? (
          <>
            <h3 className={styles.description_header}>{title}</h3>
            <div className={styles.location_con}>
              <LocationOnOutlinedIcon className={styles.location_icon} />
              <p className={styles.location}>{location}</p>
            </div>
            <p className={styles.description}>{description}</p>
            <button>view details</button>
          </>
        ) : (
          <div className={styles.desc_dropdown}>
            <ExpandCircleDownOutlinedIcon
              className={styles.desc_dropdown_icon}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureProperty;
