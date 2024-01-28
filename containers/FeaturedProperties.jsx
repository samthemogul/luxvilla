import React from "react";
import FeatureProperty from "@components/FeatureProperty";
import { featuredProperties } from "@constants/data";
import styles from '../styles/components/featuredproperties.module.css'

const FeaturedProperties = () => {
  return (
    <div className={styles.home_properties}>
    <h3 className={styles.featured_property_header}>Featured Properties</h3>
    <div className={styles.featured_properties_con}>
      {featuredProperties.map((property) => {
        return (
          <FeatureProperty
            key={property.id}
            image={property.img}
            title={property.title}
            description={property.description}
            location={property.location}
          />
        );
      })}
    </div>
    </div>
  );
};

export default FeaturedProperties;
