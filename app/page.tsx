import Link from 'next/link'
import Stats from './components/Stats'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ColorDiv from './components/ColorDiv'
import LandingPageSection from './components/LandingPageSection';
import WebDevCards from './components/WebDevCards';
import ResponsiveAnimation from './components/ResponsiveAnimation';
import OptimizationFirst from './components/OptimizationFirst'

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
            <p>
              In the ever-evolving world of web development, different types of websites cater to varying objectives. At ThenDigital, we specialize in crafting exceptional <span className='text-red9'>static</span> websites,
              <span className='text-red9'> single-page web applications</span> (SPAs), and <span className='text-red9'>e-commerce</span> websites. Our commitment to creating bespoke solutions ensures that your website aligns perfectly with your unique requirements.
            </p>
          </LandingPageSection>
          <LandingPageSection topTitle='Software Development' shinyText='Streamline your tasks with innovative software solutions.' side={<WebDevCards />} bgColor='bg-slate8'>
            <p>
              Unleash your productivity and efficiency with a suite of powerful and user-friendly software solutions designed to simplify your tasks.
              Our cutting-edge tools are meticulously crafted to cater to your specific needs, offering intuitive interfaces and robust functionalities.
              From automating repetitive processes to organizing complex workflows, our software empowers you to accomplish more in less time.
              Experience the seamless integration, customizable features, and comprehensive support that our tools provide, revolutionizing the way you work.
              Discover a new level of productivity and unlock your true potential with our helpful software tools.
            </p>
            <Link href='/webdevelopment' className='arrow flex items-center text-slate1 mt-5 w-fit'>
              Learn more
              <span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </span>
            </Link>
          </LandingPageSection>
          <LandingPageSection topTitle='Maintenance' shinyText='Keep your website running smoothly with our reliable maintenance services.' side={<WebDevCards />} bgColor='bg-slate11'>
            <p>
              In todays fast-paced digital landscape, its crucial to have a website that consistently performs at its best. With our comprehensive website maintenance services,
              we take the hassle out of managing and optimizing your online presence, allowing you to focus on what matters most—your business.
            </p>
          </LandingPageSection>
        </section>
        <section>
          <OptimizationFirst />
        </section>
      </main>
    </>
  )
}
