import React from "react";
import styles from "../styles/components/hero.module.css";
import { photoFiles } from "@constants/assets";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.hero_text}>
        <h1>
          <span className={styles.highlight}>Elevate</span> your lifestyle: <br />
          Find your <span className={styles.highlight}>Ideal</span> home<br />today
        </h1>
        <p>
          Find available properties and connect with buyers and sellers in a
          fast and seamless way.
        </p>
        <Link href={'/signup'}><button>Get started</button></Link>
      </div>
      <div>
        <Image
          src={photoFiles.heroImage.url}
          alt={photoFiles.heroImage.description}
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
