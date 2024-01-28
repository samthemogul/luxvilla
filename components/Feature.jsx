import React from "react";
import styles from "../styles/components/features.module.css";
import Image from "next/image";

const Feature = ({ iconPath, title, description }) => {
  return (
    <div className={styles.feature_con}>
      <div className={styles.icon_con}>
        <div className={styles.icon_frame}>
          <Image src={iconPath} alt={title} width={20} height={20} />
        </div>
      </div>
      <div className={styles.feature_description}>
        <h3 className={styles.feature_h3}>{title}</h3>
        <p className={styles.feature_p}>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
