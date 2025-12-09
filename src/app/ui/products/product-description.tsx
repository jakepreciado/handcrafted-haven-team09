import { fetchProductById } from "@/app/lib/data";
import "../../globals.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reviews from "../reviews";
import { fetchReviewsByProduct } from "@/app/lib/data";
// @components
import { Button, Rating } from "@material-tailwind/react";

export default async function ProductDescription(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [product, reviews] = await Promise.all([fetchProductById(id), fetchReviewsByProduct(id)]);

    if (!product) {
        notFound();
    }

    return (
        <section className="py-16">
            <div className="product-details container mx-auto grid gap-y-10 gap-x-6 items-center md:grid-cols-2 grid-cols-1">
                {/* Product Image */}
                <div className="product-details-img">
                    <Image
                        alt={product.name}
                        width={500}
                        height={500}
                        src={product.product_image_url}
                        className="w-auto mx-auto h-full"
                    />
                </div>

                {/* Product Info */}
                <div className="product-details-info">
                    <h1 className="text-3xl font-bold">{product.name}</h1>

                    <h1 className="my-4 text-xl font-semibold text-blue-600">
                        {product.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </h1>

                    <h2 className="text-gray-700 mb-6">{product.description}</h2>

                    <div className="mt-6 flex items-center gap-2">
                        <Button className="review-btn max-w-10 bg-blue-600 hover:bg-blue-700 text-white">
                            <Link
                                href={`/products/${id}/review`}
                                className="inline-flex items-center w-full justify-center"
                            >
                                Write a review
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <Reviews reviews={product.reviews} />
        </section>
    );
}
