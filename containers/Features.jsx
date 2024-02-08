import React from "react";
import styles from "../styles/components/features.module.css";
import Image from "next/image";
import { feautureCarouselPhotos } from "@constants/assets";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { features } from "@constants/data";
import Feature from "@components/Feature";
import Skeleton from 'react-loading-skeleton'

const Features = () => {
  return (
    <div className={styles.features_container}>
      <div className={styles.feature_illustration}>
        <div className={styles.ill_con}>
          <div className={styles.illustration_container}>
            <div className={styles.feature_images}>
                { <Image
                className={styles.image}
                src={feautureCarouselPhotos.feature1.url}
                alt={feautureCarouselPhotos.feature1.description}
                width={400}
                height={300}
              />}
            </div>
            <div className={styles.progressbar_container}>
              <div className={styles.progressbar}>
                <div className={styles.bar}></div>
              </div>
              <div className={styles.progressbar}>
                <div className={styles.bar}></div>
              </div>
              <div className={styles.progressbar}>
                <div className={styles.bar}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.feature_texts}>
        <h2 className={styles.feature_header}>
          Finding a home has never been this{" "}
          <span className={styles.highlight}>easy</span>
        </h2>
        {features.map((feature) => {
          return (
            <Feature
              key={feature.title}
              iconPath={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
