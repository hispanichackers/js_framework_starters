export default function Posts({ posts }) {
    return (
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                  {post.id} - {post.title}
              </li>
            )
          })}
        </ul>
    )
}
  
  