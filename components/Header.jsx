import React from "react";
import styles from "../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { logoFiles } from "@constants/assets";
import Hamburger from "./Hamburger";


const Header = () => {
  return (
    <header className={styles.header}>
      {/* Desktop Header Navigation */}
      <div className={styles.logo_nav}>
        <Hamburger />
        <Link href="/">
          <Image src={logoFiles.logo.url} alt={logoFiles.logo.description} width={112} height={40} />
        </Link>
      </div>
      <div className={styles.menu_links}>
        <Link href="/">Buy</Link>
        <Link href="/">Sell</Link>
        <Link href="/">Rent</Link>
      </div>
      <div className={styles.auth_links}>
        <Link href='/'>Login</Link>
        <button>Sign Up</button>
      </div>

      {/* Mobile Header Navigation */}
      <div className={styles.mobile_nav}>
      <div className={styles.mobile_menu_links}>
        <Link href="/">Buy</Link>
        <Link href="/">Sell</Link>
        <Link href="/">Rent</Link>
      </div>
      </div>
    </header>
  );
};

export default Header;
