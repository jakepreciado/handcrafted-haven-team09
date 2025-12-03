import { ebGaramond, cormorantGaramond } from "../fonts";
import Image from "next/image";
import styles from '../page.module.css'

type CardProps = {
    titleAndImgAlt: string;
    imgSrc: string;
    imgWidth: number;
    imgHeight: number;
    description?: string;
    category: string;
    buttonWordsPrice?: string | number;
};

export default function Card({
    titleAndImgAlt,
    imgSrc,
    imgWidth,
    imgHeight,
    description,
    category,
    buttonWordsPrice,
}: CardProps) {
    return (
        <div className={styles.card}>
            <h2 className={ebGaramond.className}>{titleAndImgAlt}</h2>
            <Image
                src={imgSrc}
                alt={titleAndImgAlt}
                width={imgWidth}
                height={imgHeight}
                loading="lazy"
            />
            <p className={cormorantGaramond.className}>{description}</p>
            <p className={cormorantGaramond.className}>{category}</p>
            <button className={cormorantGaramond.className}>{buttonWordsPrice}</button>
        </div>
    )
}