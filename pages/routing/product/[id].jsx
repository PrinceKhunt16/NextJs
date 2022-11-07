import { useRouter } from "next/router"

export default function ProductDetails() {
    const router = useRouter();
    const id = router.query.id;
    
    return (
        <div>Details about product {id}</div>
    )
}
