import Layout from '../components/layout'
import Career from '../components/Career'

export default function Index() {
  return (
    <section>
      <h1>Layout Example (Index)</h1>
      <Career />
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
