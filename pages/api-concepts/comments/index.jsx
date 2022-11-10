import { useState } from 'react'

export default function Comments() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitComment = async () => {
        if (comment.length === 0) return

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        fetchComments()
        setComment('')
    }

    const deleteComment = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })

        fetchComments()
    }

    return (
        <div>
            <div>
                <input
                    type='text'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={submitComment}>Submit comment</button>
            </div>
            <br />
            <button onClick={fetchComments}>Load comments</button>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        {comment.id}. {comment.text}
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
