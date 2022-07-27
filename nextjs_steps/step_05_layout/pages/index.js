import Layout from '../components/layout'

export default function Index() {
  return (
    <section>
      <h1>Layout Example (Index)</h1>
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
