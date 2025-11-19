import { supabase } from "../lib/supabaseClient";

export default async function TestPage() {
    const { data: products, error } = await supabase
        .from("products")
        .select(`
    product_id,
    product_name,
    description,
    price,
    category,
    product_image_url,
    seller_profiles!inner (
      display_name,
      bio
    ),
    reviews (
      rating,
      comment
    )
  `);

    if (error) {
        console.error(error);
        return <div>Error loading products.</div>;
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1>Products Test Page</h1>

            {products?.map((product) => (
                <div
                    key={product.product_id}
                    style={{
                        border: "1px solid #ddd",
                        padding: "16px",
                        marginBottom: "20px",
                        borderRadius: "8px"
                    }}
                >
                    <h2>{product.product_name}</h2>
                    <img
                        src={product.product_image_url}
                        alt={product.product_name}
                        style={{ width: "200px", borderRadius: "8px" }}
                    />

                    <p>{product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> ${product.price}</p>

                    <h3>Seller</h3>
                    <p><strong>Name:</strong> {product.seller_profiles?.[0]?.display_name}</p>
                    <p><strong>Bio:</strong> {product.seller_profiles?.[0]?.bio}</p>

                    <h3>Reviews</h3>
                    {product.reviews.length > 0 ? (
                        product.reviews.map((review, idx) => (
                            <div key={idx}>
                                ⭐ {review.rating} — {review.comment}
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            ))}
        </main>
    );
}
