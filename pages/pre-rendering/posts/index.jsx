import Link from "next/link";

export default function Posts({ posts }) {
    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            <p>
                                {post.id}
                                {" "}
                                {post.title}
                            </p>
                        </Link>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            posts: data
        }
    }
}