import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
      </main>
    </>
  )
}
