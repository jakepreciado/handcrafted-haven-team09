import { ebGaramond, cormorantGaramond } from "../fonts";
import Image from "next/image";
import styles from '../../page.module.css'

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
            <h3 className={`${ebGaramond.className} card-header`}>{titleAndImgAlt}</h3>
            <Image
                src={imgSrc}
                alt={titleAndImgAlt}
                width={imgWidth}
                height={imgHeight}
                loading="lazy"
            />
            <p className={`${cormorantGaramond.className} text-center`}>{description}</p>
            <p className={`${cormorantGaramond.className} text-center`}>{category}</p>
            <h2 className={`${cormorantGaramond.className} text-center`}>{buttonWordsPrice}</h2>
        </div>
    )
}