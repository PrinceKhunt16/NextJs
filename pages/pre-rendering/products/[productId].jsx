import { useRouter } from "next/router"

export default function Post({ product }) {
    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading</div>
    }

    return (
        <div>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`http://localhost:4000/products`)
    const data = await response.json()
    const paths = data.map((product) => {
        return {
            params: {
                productId: `${product.id}`
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { productId } = context.params
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const data = await response.json()

    return {
        props: {
            product: data
        },
        revalidate: 10
    }
}
