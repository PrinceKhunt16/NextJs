export default function News({ articles }) {
    return (
        <div>
            {
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <p>{article.id} {article.title} | {article.category}</p>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props: {
            articles: data
        }
    }
}