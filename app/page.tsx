import Stats from './components/Stats'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ColorDiv from './components/ColorDiv'
import WebDevSection from './components/WebDevSection'

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className='color-div-container'>
        <ColorDiv />
      </div>
      <main>
        <section className=''>
          <Hero />
        </section>
        <section className='mt-[690px] lg:mt-[730px]'>
          <Stats />
        </section>
        <section>
          <WebDevSection />
        </section>
      </main>
    </>
  )
}
