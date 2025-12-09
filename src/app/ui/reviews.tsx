import { Review } from "@/app/lib/definitions";

type ProductReviewsProps = {
    reviews: Review[];
};

export default function Reviews({ reviews }: ProductReviewsProps) {
    if (!reviews || reviews.length === 0) {
        return <h2 className="page-header text-gray-600 dark:text-gray-400">No reviews yet.</h2>;
    }

    return (
        <div className="product-reviews mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Reviews ({reviews.length})
            </h2>

            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="review-content flex items-start gap-4 border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                    {/* Reviewer name */}
                    <span className="font-semibold text-gray-900 dark:text-gray-100 min-w-[120px]">
                        <b>{review.reviewer_name}</b>
                    </span>

                    {/* Rating stars */}
                    <div className="flex items-center gap-1">
                        {/* {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < review.rating
                                        ? "text-yellow-400"
                                        : "text-gray-300 dark:text-gray-600"
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.034 9.384c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.287-3.957z" />
                            </svg>
                        ))} */}
                        <p className="review-rating">Rating: {review.rating}</p>
                    </div>

                    {/* Comment */}
                    <p className="review-comment text-gray-700 dark:text-gray-300 flex-1">{review.comment}</p>
                </div>
            ))}
        </div>
    );
}
