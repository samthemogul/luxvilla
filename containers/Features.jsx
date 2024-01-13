import React from "react";
import styles from "../styles/components/features.module.css";
import Image from "next/image";
import { feautureCarouselPhotos } from "@constants/assets";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Features = () => {
  return (
    <div className={styles.features_container}>
      <div className={styles.feature_illustration}>
        <div className={styles.ill_con}>
          <div className={styles.illustration_container}>
            <div className={styles.feature_images}>
              <Image
                className={styles.image}
                src={feautureCarouselPhotos.feature1.url}
                alt={feautureCarouselPhotos.feature1.description}
                width={500}
                height={400}
              />
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
        <div className={styles.feature_con}>
          <div className={styles.icon_con}>
            <div className={styles.icon_frame}>
              <HomeOutlinedIcon className={styles.icon} />
            </div>
          </div>
          <div className={styles.feature_description}>
            <h3 className={styles.feature_h3}>Curated property listings</h3>
            <p className={styles.feature_p}>
              Explore a handpicked selection of luxury properties tailored to
              your preferences. Luxvilla&apos;s curated listings showcase exceptional
              homes, ensuring a refined and exclusive real estate experience.
            </p>
          </div>
        </div>
        <div className={styles.feature_con}>
          <div className={styles.icon_con}>
            <div className={styles.icon_frame}>
              <HomeOutlinedIcon className={styles.icon} />
            </div>
          </div>
          <div className={styles.feature_description}>
            <h3 className={styles.feature_h3}>Curated property listings</h3>
            <p className={styles.feature_p}>
              Explore a handpicked selection of luxury properties tailored to
              your preferences. Luxvilla&apos;s curated listings showcase exceptional
              homes, ensuring a refined and exclusive real estate experience.
            </p>
          </div>
        </div>
        <div className={styles.feature_con}>
          <div className={styles.icon_con}>
            <div className={styles.icon_frame}>
              <HomeOutlinedIcon className={styles.icon} />
            </div>
          </div>
          <div className={styles.feature_description}>
            <h3 className={styles.feature_h3}>Curated property listings</h3>
            <p className={styles.feature_p}>
              Explore a handpicked selection of luxury properties tailored to
              your preferences. Luxvilla&apos;s curated listings showcase exceptional
              homes, ensuring a refined and exclusive real estate experience.
            </p>
          </div>
        </div>
        <div className={styles.feature_con}>
          <div className={styles.icon_con}>
            <div className={styles.icon_frame}>
              <HomeOutlinedIcon className={styles.icon} />
            </div>
          </div>
          <div className={styles.feature_description}>
            <h3 className={styles.feature_h3}>Curated property listings</h3>
            <p className={styles.feature_p}>
              Explore a handpicked selection of luxury properties tailored to
              your preferences. Luxvilla&apos;s curated listings showcase exceptional
              homes, ensuring a refined and exclusive real estate experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
