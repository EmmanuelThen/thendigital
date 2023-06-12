import Link from 'next/link'
import Stats from './components/Stats'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ColorDiv from './components/ColorDiv'
import LandingPageSection from './components/LandingPageSection';
import WebDevCards from './components/WebDevCards';
import ResponsiveAnimation from './components/ResponsiveAnimation';
import OptimizationSection from './components/OptimizationSection'
import PathAnimation from './components/PathAnimation'
import OptimizationAnimation from './components/OptimizationAnimation'
import GridAnimation from './components/GridAnimation'
import ArrowButton from './components/ArrowButton'

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
          <LandingPageSection topTitle='Website Development' shinyText='Every business needs an online presence, make it count.' side={<WebDevCards />} bgColor='bg-slate2'>
            <p className='mb-10'>
              In the ever-evolving world of web development, different types of websites cater to varying objectives. At ThenDigital, we specialize in crafting exceptional <span className='text-red9'>static</span> websites,
              <span className='text-red9'> single-page web applications</span> (SPAs), and <span className='text-red9'>e-commerce</span> websites. Our commitment to creating bespoke solutions ensures that your website aligns perfectly with your unique requirements.
            </p>
            <ArrowButton buttonText='Learn more' href='/webdevelopment' />
          </LandingPageSection>
          <LandingPageSection topTitle='Software Development' shinyText='Streamline your tasks with innovative software solutions.' side={<WebDevCards />} bgColor='bg-slate8'>
            <p className='mb-10'>
              Unleash your productivity and efficiency with a suite of powerful and user-friendly software solutions designed to simplify your tasks.
              Our cutting-edge tools are meticulously crafted to cater to your specific needs, offering intuitive interfaces and robust functionalities.
              From automating repetitive processes to organizing complex workflows, our software empowers you to accomplish more in less time.
              Experience the seamless integration, customizable features, and comprehensive support that our tools provide, revolutionizing the way you work.
              Discover a new level of productivity and unlock your true potential with our helpful software tools.
            </p>
            <ArrowButton buttonText='Learn more' href='/softwaredevelopment' />
          </LandingPageSection>
          <LandingPageSection topTitle='Maintenance' shinyText='Keep your website running smoothly with PixelCare*, our reliable maintenance service.' side={<WebDevCards />} bgColor='bg-slate11'>
            <p className='mb-10'>
              In todays fast-paced digital landscape, its crucial to have a website that consistently performs at its best. With our comprehensive website maintenance services,
              we take the hassle out of managing and optimizing your online presence, allowing you to focus on what matters most—your business.
            </p>
            <ArrowButton buttonText='Learn more' href='/pixelcare' />
          </LandingPageSection>
        </section>
        <section className='mt-[390px] lg:mt-[530px]'>
          <OptimizationSection />
          <GridAnimation />
        </section>
      </main>
    </>
  )
}
