import { useRouter } from "next/router"

export default function ProductDetails() {
    const router = useRouter();
    const { productId } = router.query;
    
    return (
        <div>Details about product {productId}</div>
    )
}
