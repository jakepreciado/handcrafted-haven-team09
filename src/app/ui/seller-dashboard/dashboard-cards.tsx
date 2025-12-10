import { ebGaramond, cormorantGaramond } from '../fonts';
import { DeleteProduct, UpdateProduct } from '@/app/ui/products/buttons';
import Image from 'next/image';
import styles from '../../page.module.css'

type CardProps = {
    id: string;
    titleAndImgAlt: string;
    imgSrc: string;
    imgWidth: number;
    imgHeight: number;
    description?: string;
    category: string;
    buttonWordsPrice?: string | number;
};

export default async function DashboardCard({
    id,
    titleAndImgAlt,
    imgSrc,
    imgWidth,
    imgHeight,
    description,
    category,
    buttonWordsPrice,
}: CardProps) {
    return (
        <div className={styles.sellerCard}>
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
            <div className='flex justify-around m-8'>
                <UpdateProduct id={id} />
                <DeleteProduct id={id} />
            </div>
        </div>
    )
}