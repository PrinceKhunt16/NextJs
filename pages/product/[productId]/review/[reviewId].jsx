import { useRouter } from "next/router"

export default function Review() {
    const router = useRouter();
    const { reviewId, productId } = router.query;

    return (
        <div>Review {reviewId} for product {productId}</div>
    )
}
