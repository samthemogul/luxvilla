"use client"

import React from "react";
import styles from "../styles/components/footer.module.css";
import { logoFiles } from "@constants/assets";
import Image from "next/image";
import Link from "next/link";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.navsection}>
          <Image
            className={styles.whitelogo}
            src={logoFiles.whiteLogo.url}
            alt={logoFiles.whiteLogo.description}
            width={150}
            height={50}
          />
        </div>
        <div className={styles.navsection}>
          <div>
            <Link className={styles.links} href={"/"}>
              About Us
            </Link>
          </div>
          <div>
            <Link className={styles.links} href={"/"}>
              Feedback
            </Link>
          </div>
        </div>
        <div className={styles.navsection}>
          <div>
            <Link className={styles.links} href={"/"}>
              Terms & Conditions
            </Link>
          </div>
          <div>
            <Link className={styles.links} href={"/"}>
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className={styles.navsection}>
          <div>
            <Link className={styles.links} href={"/"}>
              Desktop app
            </Link>
          </div>
          <div>
            <Link className={styles.links} href={"/"}>
              Cookie policy
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.socials_downloads}>
        <div className={styles.socials}>
          <p className={styles.footer_desc}>Follow Us</p>
          <Link href={'/'}><div className={styles.icon_con}>
          <FacebookOutlinedIcon className={styles.icon}/>
          </div></Link>
          <Link href={'/'}>
          <div className={styles.icon_con}>
          <LinkedInIcon className={styles.icon}/>
          </div></Link>
          <Link href={'/'}><div className={styles.icon_con}>
          <XIcon className={styles.icon}/>
          </div></Link>
          <Link href={'/'}><div className={styles.icon_con}>
          <InstagramIcon className={styles.icon}/>
          </div></Link>
        </div>
        <div className={styles.downloads}>
          <p className={styles.footer_desc}>Mobile app</p>
          <Link href={'/'}><div className={styles.icon_con}>
          <AndroidIcon className={styles.icon}/>
          </div></Link>
          <Link href={'/'}>
          <div className={styles.icon_con}>
          <AppleIcon className={styles.icon}/>
          </div></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
