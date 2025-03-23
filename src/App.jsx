import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Certificate from './components/certificate/Certificate'
import Nav from './components/hero/Nav'

const App = () => {
  return (
    <div className="container">
      <section id="#home">
        {/* <Nav /> */}
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#certificate">
        <Certificate />
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
