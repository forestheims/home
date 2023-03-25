import Alert from './personal-bio'
import Footer from './footer'
import Meta from './meta'
import Container from './container'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gradient-to-b from-lime-200 to-pink-400">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}

export default Layout
