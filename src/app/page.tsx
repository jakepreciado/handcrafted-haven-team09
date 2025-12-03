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
            titleAndImgAlt="Collectables"
            imgSrc="/art-gallery-sharpened.jpg"
            imgWidth={250}
            imgHeight={163}
            description="Find many arts and collectables of wonder."
            category=""
            buttonWordsPrice="Explore" />
          <Card
            titleAndImgAlt="Home Decor"
            imgSrc="/making-pottery.jpg"
            imgWidth={250}
            imgHeight={163}
            description="Look for the decor that is perfect for your home."
            category=""
            buttonWordsPrice="Explore" />
          <Card
            titleAndImgAlt="Fashion"
            imgSrc="/wearable-jewelry.jpg"
            imgWidth={250}
            imgHeight={163}
            description="Want to look more fashionable? This is the place."
            category=""
            buttonWordsPrice="Explore" />
          <Card
            titleAndImgAlt="Stationery"
            imgSrc="/stationery.jpg"
            imgWidth={250}
            imgHeight={163}
            description="Perfect stationery for both office and home use."
            category=""
            buttonWordsPrice="Explore" />
        </div>
      </main>
    </div>
  );
}