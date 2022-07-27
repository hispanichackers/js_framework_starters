import Navigation from './Navigation.js'
import Footer from './Footer.js'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}