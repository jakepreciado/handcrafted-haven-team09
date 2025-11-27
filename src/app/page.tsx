import Image from "next/image";
import Card from "../app/component/card"
import styles from "./page.module.css";
import Header from "./component/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* <Image 
        src={}
        alt=""
        /> */}
        <div className={styles.cardList}>
          <Card
            titleAndImgAlt="Art"
            imgSrc="/art-gallery-sharpened.jpg"
            imgWidth={250}
            imgHeight={163}
            description="Find many arts of wonder for your home."
            price="" />
          <Card
            titleAndImgAlt="Pottery"
            imgSrc="/making-pottery.jpg"
            imgWidth={250}
            imgHeight={163}
            description="Find many arts of wonder for your home."
            price="" />
          <Card
            titleAndImgAlt="Wearables"
            imgSrc="/wearable-jewelry.jpg"
            imgWidth={250}
            imgHeight={163}
            description="Find many arts of wonder for your home."
            price="" />
        </div>
      </main>
    </div>
  );
}