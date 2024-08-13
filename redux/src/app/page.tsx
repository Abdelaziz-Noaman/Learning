import Image from "next/image";
import styles from "./page.module.css";
import HomeUI from "@/components/HomeUI/HomeUI";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeUI />
    </main>
  );
}
