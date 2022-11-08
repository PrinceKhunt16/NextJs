import { useRouter } from "next/router"

export default function Post({ post }) {
    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading</div>
    }

    return (
        <div>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div> 
    )
}

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    const paths = data.map((post) => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    /*
    
    https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
    
    */

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { postId } = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
}
