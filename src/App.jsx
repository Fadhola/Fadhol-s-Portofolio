import { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import Hero from "./components/hero/Hero";

const About = lazy(() => import("./components/about/About"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Certificate = lazy(() => import("./components/certificate/Certificate"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  useEffect(() => {
    // Each lazy-loaded section calls AOS.init() on mount, but since they mount
    // asynchronously (and at different times), earlier sections' scroll-trigger
    // offsets go stale as later sections change the document height. Re-run
    // AOS.refresh() once everything has had a chance to mount so all
    // data-aos elements get correct trigger positions (otherwise they can be
    // stuck permanently invisible at opacity: 0).
    const timer = setTimeout(() => AOS.refresh(), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>
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
  );
};

export default App;
