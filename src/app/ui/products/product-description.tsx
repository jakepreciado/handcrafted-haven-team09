import { fetchProductById } from "@/app/lib/data";
import "../../globals.css";
import { notFound } from "next/navigation";
import Link from "next/link";
// @components
import {
    Button,
    Rating,
    Typography,
} from "@material-tailwind/react";

export default async function ProductDescription(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [product] = await Promise.all([fetchProductById(id)]);

    if (!product) {
        notFound();
    }

    return (
        <section className="py-16">
            <div className="container mx-auto grid gap-y-10 gap-x-6 items-center md:grid-cols-2 grid-cols-1">
                <div className="h-full w-full max-h-[30rem] border border-surface rounded-lg">
                    <img
                        alt="image"
                        src="https://v3.material-tailwind.com/coat-1.png"
                        className="w-auto mx-auto h-full"
                    />
                </div>
                <div className="md:p-2">
                    <h1 color="default" className="text-3xl font-bold">
                        {product.name}
                    </h1>
                    <Typography type="h2" color="primary" className="my-4">
                        {product.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </Typography>
                    <Typography className="text-foreground [text-wrap:_balance]">
                        {product.description}
                    </Typography>
                    <div className="flex items-center gap-2 my-8">
                        <Rating value={4} color="warning" readonly />
                        <Typography className="font-semibold text-foreground">
                            {product.reviews} Reviews
                        </Typography>
                    </div>
                    <Typography type="h6" color="default" className="my-4">
                        Color
                    </Typography>
                    <div className="flex gap-2">
                        <div className="h-5 w-5 bg-black rounded" />
                        <div className="h-5 w-5 bg-white rounded-[4px] border border-surface" />
                        <div className="h-5 w-5 bg-surface rounded-[4px] border border-surface" />
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                        <Button className="w-full max-w-60">
                            <Link
                                href={`/products/${id}/review`}
                                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                Write a review
                            </Link>
                        </Button>
                    </div>
                    <div className="mt-6">

                    </div>
                </div>
            </div>
        </section>
    )
}