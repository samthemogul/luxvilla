"use client";

import React, { useState } from "react";
import styles from "@styles/components/checkbox.module.css";
import CheckIcon from "@mui/icons-material/Check";

const CheckBoxCircle = () => {

    const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div
    onClick={toggleChecked}
      className={
        checked
          ? `${styles.circle_check_container} ${styles.active}`
          : styles.circle_check_container
      }
    >
      {checked && <CheckIcon className={styles.check} />}
    </div>
  )
}

export default CheckBoxCircle