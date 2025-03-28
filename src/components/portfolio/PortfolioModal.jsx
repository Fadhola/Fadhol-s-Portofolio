import { AiOutlineClose, AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import './portfolio.css'

const PortfolioModal = ({
  selectedItem,
  closeModal,
  currentImageIndex,
  handleDotClick,
}) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={closeModal}>
          <AiOutlineClose />
        </span>
        <div className="modal-slider">
          <img
            src={selectedItem.images[currentImageIndex]}
            alt={selectedItem.title}
            loading="lazy" // Terapkan lazy loading pada gambar modal
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
        {selectedItem.technologies && selectedItem.technologies.length > 0 && (
          <div className="modal-tech">
            <h3>Technologies Used</h3>
            <div className="tech-logos">
              {selectedItem.technologies.map((tech, idx) => (
                <img
                  key={idx}
                  src={tech.logo}
                  alt={tech.name}
                  title={tech.name}
                  className="tech-logo"
                  loading="lazy" // Lazy load logo teknologi
                />
              ))}
            </div>
          </div>
        )}
        <div className="modal-links">
          <a
            href={selectedItem.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub /> GitHub
          </a>
          {selectedItem.liveLink ? (
            <a
              href={selectedItem.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal /> Live Preview
            </a>
          ) : (
            <button className="disabled-live" disabled>
              <BiLinkExternal /> Live Preview
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioModal
