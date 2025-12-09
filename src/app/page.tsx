import Image from "next/image";
import Link from "next/link";
import Card from "../app/ui/cards/card";
import styles from "./page.module.css";
import mobHeroImage from "../../public/images/mobile-hero-image.jpg";
import heroImage from "../../public/images/tablet-hero-image.jpg";
import deskHeroImage from "../../public/images/desktop-hero-image.jpg";
import { fetchUsers } from "@/app/lib/data";

export default async function Home() {
  const sellers = await fetchUsers();

  // Pick a random seller
  const featuredSeller = sellers[Math.floor(Math.random() * sellers.length)];

  return (
    <>
      {/* HERO */}
      <div className={styles.heroImageDiv}>
        <Image className={styles.mobile} src={mobHeroImage} alt="hero image" />
        <Image className={styles.tab} src={heroImage} alt="hero image" />
        <Image className={styles.desktop} src={deskHeroImage} alt="hero image" />
      </div>

      {/* CARDS */}
      <div className={styles.cardList}>
        {/* All Products */}
        <Link href="/products">
          <Card
            titleAndImgAlt="All Products"
            imgSrc="/images/stationery.jpg"
            imgWidth={250}
            imgHeight={250}
            description="Explore all handcrafted products."
            category=""
            buttonWordsPrice="Explore"
          />
        </Link>

        {/* Featured Seller */}
        {featuredSeller && (
          <Link href="/artisans">
            <Card
              titleAndImgAlt={featuredSeller.store_name || featuredSeller.name || "Featured Artisan"}
              imgSrc={featuredSeller.profile_image_url || "/default-seller.jpg"}
              imgWidth={250}
              imgHeight={250}
              description={featuredSeller.bio || "Amazing artisan with unique products! Check em out!"}
              category=""
              buttonWordsPrice="View All Artisans"
            />
          </Link>
        )}

        {/* Sign Up */}
        <Link href="/signup">
          <Card
            titleAndImgAlt="Join Us"
            imgSrc="/images/wearable-jewelry.jpg"
            imgWidth={250}
            imgHeight={250}
            description="Become an artisan and start selling your handcrafted products today!"
            category=""
            buttonWordsPrice="Sign Up"
          />
        </Link>
      </div>
    </>
  );
}
