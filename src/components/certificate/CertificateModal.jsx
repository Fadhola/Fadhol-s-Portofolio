import 'react'
import './certificate.css'

const CertificateModal = ({ certificate, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-certi-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={closeModal}>
          &times;
        </span>
        <img src={certificate.image} alt={certificate.title} loading="lazy" />
        <h2>{certificate.title}</h2>
      </div>
    </div>
  )
}

export default CertificateModal
