import Stats from './components/Stats'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ColorDiv from './components/ColorDiv'
import LandingPageSection from './components/LandingPageSection';
import WebDevCards from './components/WebDevCards';
import ResponsiveAnimation from './components/ResponsiveAnimation';

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
            In the world of web development there are many different forms of websites.
            Here at ThenDigital we specialize in <span className='text-red9'>Static websites</span>, <span className='text-red9'>Single Page Web Applications</span>, and < span className='text-red9' > E - commerce</span > websites.
            Everything we do is developed from scratch, therefore your website can fit your exact needs!
          </LandingPageSection>
          <LandingPageSection topTitle='Utilities' shinyText='Streamline your tasks with innovative software solutions.' side={<WebDevCards />} bgColor='bg-slate11'>
            Unleash your productivity and efficiency with a suite of powerful and user-friendly software solutions designed to simplify your tasks. 
            Our cutting-edge tools are meticulously crafted to cater to your specific needs, offering intuitive interfaces and robust functionalities. 
            From automating repetitive processes to organizing complex workflows, our software empowers you to accomplish more in less time. 
            Experience the seamless integration, customizable features, and comprehensive support that our tools provide, revolutionizing the way you work. 
            Discover a new level of productivity and unlock your true potential with our helpful software tools.
          </LandingPageSection>
        </section>
      </main>
    </>
  )
}
