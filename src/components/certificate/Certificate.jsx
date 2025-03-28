import React, { useState, Suspense, lazy, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './certificate.css'

// Lazy load komponen modal sertifikat
const CertificateModal = lazy(() => import('./CertificateModal'))

const certificates = [
  {
    id: 1,
    title: 'Certificate 1',
    image: '/certificates/certiRevou.jpg',
  },
  {
    id: 2,
    title: 'Certificate 2',
    image: '/certificates/certiDicoding.jpg',
  },
  {
    id: 3,
    title: 'Certificate 3',
    image: '/certificates/certiMsib6.jpg',
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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="certificate-hero">
      <h1 className="certificate-heading" data-aos="fade-down">
        My Collections of Certificates
      </h1>
      <div className="certificate-container">
        {certificates.map((cert, index) => (
          <div
            className={`certificate-item card-${index + 1}`}
            key={cert.id}
            onClick={() => openModal(cert)}
            data-aos="fade"
            data-aos-delay={index * 100}
          >
            <img src={cert.image} alt={cert.title} loading="lazy" />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <Suspense fallback={<div>Loading modal...</div>}>
          <CertificateModal
            certificate={selectedCertificate}
            closeModal={closeModal}
          />
        </Suspense>
      )}
    </section>
  )
}

export default Certificate
