export default function ProductList({ products }) {
    return (
        <>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <p>{product.id} {product.title} {product.price}</p>
                        <br />
                    </div>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()

    return {
        props: {
            products: data
        },
        revalidate: 10
    }
}
