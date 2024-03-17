import Image from "next/image";
import Hero from "../../public/hero.png";
import styles from "./page.module.css";
import BoxComponent from '@/components/Box';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Find the Best Motorbike Parts For <span style={{ color: 'red' }}>Your Vehicle</span>
        </h1>
        <p className={styles.desc}>
          Rev Up Your Ride with Premium Motorcycle Parts- Unleash the Power of Performance and Style
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.boxRow}>
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />

        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={Hero} alt="hero" className={`${styles.img} ${styles.inverted}`} />
      </div>
    </div>
  );
}
