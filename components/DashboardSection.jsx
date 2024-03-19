import React, { useEffect, useState } from "react";
import styles from "@styles/pages/dashboard/dashboardsections.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

const DashboardSection = ({ title, subsections }) => {
  const [dropSection, setDropSection] = useState(false);
  const [sectionStyle, setSectionStyle] = useState(styles.section);

  const handleDrop = () => {
    setDropSection(prev => !prev)
  }

  useEffect(() => {
    if (dropSection) {
      setSectionStyle(`${styles.section} ${styles.active}`);
    } else {
      setSectionStyle(styles.section);
    }
  }, [dropSection]);
  return (
    <div className={sectionStyle} onClick={handleDrop}>
      <div className={styles.section_title}>
        {title == "Notifications" ? (
          <><p>{title}</p>
          <div className={styles.note_info}>
          <div className={styles.note_mark}><p>1</p></div>
          <KeyboardArrowDownIcon className={styles.section_icon} />
            </div></>
        ) : (
          <><p>{title}</p>
          <KeyboardArrowDownIcon className={styles.section_icon} /></>
        )}
      </div>
      <div className={styles.subsections}>
        {subsections.map((subsection, index) => {
          return (
            <li key={index} className={styles.subsection_title}>
              <Link href={"/"} className={styles.subsection_link}>
                {subsection}
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSection;
