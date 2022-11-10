import useSWR from "swr"

export default function DashboardSWR() {
    const { data, error } = useSWR('dashboard', async () => {
        const response = await fetch('http://localhost:4000/dashboard')
        const data = await response.json()
        return data
    })

    if (error) {
        return (
            <p>An error has occurred.</p>
        )
    }

    if (!data) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <div>
            <p>Posts - {data.posts}</p>
            <p>Likes - {data.likes}</p>
            <p>Followers - {data.followers}</p>
            <p>Following - {data.following}</p>
        </div>
    )
}
