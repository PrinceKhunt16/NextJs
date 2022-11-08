export default function Article({ articles, category }) {
    return (
        <div>
            {articles.map((article) => {
                return (
                    <div key={article.id}>
                        <p>{article.id} {article.title}</p>
                        <p>{article.description}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}