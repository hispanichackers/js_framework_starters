import Layout from '../components/layout'
import Career from '../components/Career'
import Posts from '../components/Posts'

export default function Index({ posts }) {
  return (
    <section>
      <h1>Layout Example (Index)</h1>
      <Career />
      <Posts posts={posts} />
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    },
  }
}