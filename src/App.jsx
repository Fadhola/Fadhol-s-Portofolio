import { Suspense, lazy } from 'react'
import Hero from './components/hero/Hero'



const Services = lazy(() => import('./components/services/Services'))
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'))
const Certificate = lazy(() => import('./components/certificate/Certificate'))
const Contact = lazy(() => import('./components/contact/Contact'))


const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Suspense fallback={<div>Loading Services...</div>}>
          <Services />
        </Suspense>
      </section>
      <section id="portfolio">
        <Suspense fallback={<div>Loading Portfolio...</div>}>
          <Portfolio />
        </Suspense>
      </section>
      <section id="certificate">
        <Suspense fallback={<div>Loading Certificates...</div>}>
          <Certificate />
        </Suspense>
      </section>
      <section id="contact">
        <Suspense fallback={<div>Loading Contact...</div>}>
          <Contact />
        </Suspense>
      </section>
    </div>
  )
}

export default App
