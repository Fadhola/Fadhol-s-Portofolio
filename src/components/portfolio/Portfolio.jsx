import React, { useState } from 'react'
import { AiOutlineClose, AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import './portfolio.css'

const portfolioData = [
  {
    id: 1,
    title: 'Data Analysis Project 1',
    category: 'data-analyst',
    images: [
      'https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+1A',
      'https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+1B',
      'https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+1C',
    ],
    description: 'Penjelasan singkat tentang Data Analysis Project 1...',
    githubLink: 'https://github.com/username/project1',
    liveLink: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Web Dev Project 1',
    category: 'web-dev',
    images: ['/web1.png', '/web1.1.png'],
    description: 'Penjelasan singkat tentang Web Dev Project 1...',
    githubLink: 'https://github.com/username/project2',
    liveLink: 'https://example.com/project2',
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

  return (
    <section className="portfolio-hero">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-filters">
        <button
          onClick={() => setActiveCategory('all')}
          className={activeCategory === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory('web-dev')}
          className={activeCategory === 'web-dev' ? 'active' : ''}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveCategory('data-analyst')}
          className={activeCategory === 'data-analyst' ? 'active' : ''}
        >
          Data Analyst
        </button>
      </div>

      {/* Grid Portfolio */}
      <div className="portfolio-grid">
        {filteredData.map((item) => (
          <div
            className="portfolio-card"
            key={item.id}
            onClick={() => openModal(item)}
          >
            <img src={item.images[0]} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              <AiOutlineClose />
            </span>
            <div className="modal-slider">
              <img
                src={selectedItem.images[currentImageIndex]}
                alt={selectedItem.title}
              />
              <div className="dots">
                {selectedItem.images.map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i === currentImageIndex ? 'active' : ''}`}
                    onClick={() => handleDotClick(i)}
                  />
                ))}
              </div>
            </div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <div className="modal-links">
              <a
                href={selectedItem.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub /> GitHub
              </a>
              <a
                href={selectedItem.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal /> Live Preview
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
