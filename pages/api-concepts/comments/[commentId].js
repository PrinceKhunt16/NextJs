import { comments } from '../../data/comments'

export default function Comment({ comment }) {
    return (
        <div>{comment.id}. {comment.text}</div>
    )
}

export async function getStaticProps(context) {
    const { params } = context
    const { commentId } = params

    const comment = comments.find(comment => comment.id === parseInt(commentId))

    /* 
        Don't do this 
        const response = await fetch(`http:localhost:3000/api/comments/${commentId}`)
        const data = await response.json()
    */

    return {
        props: {
            comment
        }
    }
}

export async function getStaticPaths() {
    const paths = comments.map((comment) => {
        return {
            params: {
                commentId: `${comment.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}
