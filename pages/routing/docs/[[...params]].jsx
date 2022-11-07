import { useRouter } from "next/router"

export default function Docs() {
    const router = useRouter();
    const { params = [] } = router.query;

    return (
        <div>Docs Page 
            {" "}
            {
                params?.map((query) => (
                    <span key={query}>
                        {query} {" "}
                    </span>
                ))
            }
        </div>
    )
}
