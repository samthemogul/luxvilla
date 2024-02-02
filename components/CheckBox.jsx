"use client";

import React, { useState } from "react";
import styles from "@styles/components/checkbox.module.css";
import CheckIcon from "@mui/icons-material/Check";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div
    onClick={toggleChecked}
      className={
        checked
          ? `${styles.check_container} ${styles.active}`
          : styles.check_container
      }
    >
      {checked && <CheckIcon className={styles.check} />}
    </div>
  );
};

export default CheckBox;
