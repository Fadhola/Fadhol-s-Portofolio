import { useState, Suspense, lazy, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './portfolio.css'

// Lazy load modal portfolio
const PortfolioModal = lazy(() => import('./PortfolioModal'))

const portfolioData = [
  {
    id: 1,
    title: 'Data Analysis Project 1',
    category: 'data-analyst',
    images: [
      '/portfolio/data1.png',
      'https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+1B',
      'https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+1C',
    ],
    description: 'Penjelasan singkat tentang Data Analysis Project 1...',
    githubLink: 'https://github.com/username/project1',
    liveLink: 'https://example.com/project1',
    technologies: [
      { name: 'Excel', logo: '/skills/excel.jpg' },
      { name: 'LookerStudio', logo: '/skills/lookers.png' },
      // dsb.
    ],
  },
  {
    id: 2,
    title: 'Web Dev Project 1',
    category: 'web-dev',
    images: ['/portfolio/web1.png', '/portfolio/web1.1.png'],
    description: 'Penjelasan singkat tentang Web Dev Project 1...',
    githubLink: 'https://github.com/username/project2',
    liveLink: null,
    technologies: [
      { name: 'HTML', logo: '/skills/html.jpg' },
      { name: 'CSS', logo: '/skills/css.png' },
      { name: 'js', logo: '/skills/js.png' },
      { name: 'Node.js', logo: '/skills/node.png' },
      { name: 'Express', logo: '/skills/express.png' },
      { name: 'Mongodb', logo: '/skills/mongodb.png' },
      // dsb.
    ],
  },
  // ... data lain
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredData =
    activeCategory === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory)

  const openModal = (item) => {
    setSelectedItem(item)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const handleDotClick = (index) => {
    setCurrentImageIndex(index)
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="portfolio-hero">
      <h1 className="portfolio-title" data-aos="fade-down">
        Portfolio
      </h1>
      <div className="portfolio-filters">
        <button
          onClick={() => setActiveCategory('all')}
          className={activeCategory === 'all' ? 'active' : ''}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory('web-dev')}
          className={activeCategory === 'web-dev' ? 'active' : ''}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveCategory('data-analyst')}
          className={activeCategory === 'data-analyst' ? 'active' : ''}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Data Analyst
        </button>
      </div>

      {/* Grid Portfolio */}
      <div className="portfolio-grid">
        {filteredData.map((item, index) => (
          <div
            className="portfolio-card"
            key={item.id}
            onClick={() => openModal(item)}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              loading="lazy" // Lazy loading gambar
            />
            <h3>{item.title}</h3>
            {item.technologies && item.technologies.length > 0 && (
              <div className="tech-row">
                {item.technologies.map((tech, idx) => (
                  <img
                    key={idx}
                    src={tech.logo}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-logo-small"
                    loading="lazy" // Lazy load logo juga
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal Lazy Loaded */}
      {selectedItem && (
        <Suspense fallback={<div>Loading modal...</div>}>
          <PortfolioModal
            selectedItem={selectedItem}
            closeModal={closeModal}
            currentImageIndex={currentImageIndex}
            handleDotClick={handleDotClick}
          />
        </Suspense>
      )}
    </section>
  )
}

export default Portfolio
