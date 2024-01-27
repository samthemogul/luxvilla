import React from "react";
import Image from "next/image";
import styles from "../styles/components/calltoaction.module.css";
import { photoFiles } from "@constants/assets";
import ActionBox from "@components/ActionBox";
import { actions } from "@constants/data";

const HomeCallToAction = () => {
  return (
    <div className={styles.calltoaction_con}>
      <Image
        src={photoFiles.callToActionPhoto.url}
        alt={photoFiles.callToActionPhoto.description}
        width={3000}
        height={1000}
      />
      <div className={styles.cta_description}>
      <h2 className={styles.cta_header}>Find your Home, <br/>Live your dream</h2>
      <p className={styles.tagline}>Unlock your dream lifestyle at Luxvilla, <br/> Find your home, live your dream effortlessly.</p>
      <div className={styles.actions}>
      {actions.map((action) => {
        return (
          <ActionBox
            key={action.id}
            title={action.header}
            description={action.action}
          />
        );
      })}
      </div>
      </div>
    </div>
  );
};

export default HomeCallToAction;
