import Link from "next/link";
import Image from "next/image";

import styles from "../styles/navigation.module.scss";
import style from "../styles/home.module.scss";
import { Navadapt } from "../Components/Navadapt";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div></div>
      <Navadapt />
      <div></div>
      <div className={styles.btnMenu}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>

      <div className={styles.menu}></div>
    </nav>
  );
}
