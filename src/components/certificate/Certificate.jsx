import React, { useState } from 'react'
import './certificate.css'

const certificates = [
  {
    id: 1,
    title: 'Certificate 1',
    image: '/certiRevou.jpg',
  },
  {
    id: 2,
    title: 'Certificate 2',
    image: '/certiDicoding.jpg',
  },
  {
    id: 3,
    title: 'Certificate 3',
    image: '/certiMsib6.jpg',
  },
]

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const closeModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <section className="certificate-hero">
      <h1 className="certificate-heading">My Collections of Certificates</h1>
      <div className="certificate-container">
        {certificates.map((cert, index) => (
          <div
            className={`certificate-item card-${index + 1}`}
            key={cert.id}
            onClick={() => openModal(cert)}
          >
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />
            <h2>{selectedCertificate.title}</h2>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificate
