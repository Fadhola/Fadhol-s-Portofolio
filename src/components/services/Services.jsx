import React, { useState, Suspense, lazy, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './services.css'

/* Data Services (cards) */
const servicesData = [
  {
    title: 'Front-end Development',
    description:
      'Membangun tampilan website yang interaktif dan responsif menggunakan teknologi modern seperti HTML, CSS dan Javascript.',
  },
  {
    title: 'Back-end Development',
    description:
      'Mengelola server, database, dan API agar website atau aplikasi berjalan cepat, aman, dan efisien.',
  },
  {
    title: 'Data Analysis',
    description:
      'Mengubah data menjadi insight yang berguna melalui analisis statistik, visualisasi, dan pemodelan prediktif.',
  },
]

/* Data Skills */
const frontEndSkills = [
  { name: 'HTML', logo: '/skills/html.jpg', value: 70 },
  { name: 'CSS', logo: '/skills/css.png', value: 70 },
  { name: 'JavaScript', logo: '/skills/js.png', value: 50 },
  { name: 'React', logo: '/skills/react.png', value: 20 },
]

const backEndSkills = [
  { name: 'Node.js', logo: '/skills/node.png', value: 50 },
  { name: 'Express', logo: '/skills/express.png', value: 20 },
  { name: 'MongoDB', logo: '/skills/mongodb.png', value: 20 },
]

const dataSkills = [
  { name: 'Python', logo: '/skills/py.png', value: 10 },
  { name: 'SQL', logo: '/skills/sql.jpg', value: 50 },
  { name: 'Excel', logo: '/skills/excel.jpg', value: 50 },
  { name: 'Tableau', logo: '/skills/tableau.webp', value: 60 },
]

// Gabungkan front-end dan back-end untuk kategori web
const webSkills = [...frontEndSkills, ...backEndSkills]

// Lazy load komponen SkillSection
const LazySkillSection = lazy(() => import('./SkillSection'))

const Services = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('all')

  // Jika "all" dipilih, gabungkan semua skill, selain itu pilih sesuai kategori
  const displayedSkills =
    activeSkillCategory === 'all'
      ? [...webSkills, ...dataSkills]
      : activeSkillCategory === 'web'
      ? webSkills
      : dataSkills

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
    const handleResize = () => AOS.refresh()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="services-section">
      <h1 className="services-title" data-aos="fade-down">
        My Services
      </h1>
      <p className="services-subtitle" data-aos="fade-up">
        Building sleek websites and analyzing data, one line of code at a time.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            className={`service-card ${index === 2 ? 'full-width' : ''}`}
            key={index}
            data-aos="zoom-in"
          >
            <h2 className="service-card-title">{service.title}</h2>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
        {/* Kartu full-width untuk menampilkan SkillSection yang di‑lazy load */}
        <div className="service-card full-width" data-aos="fade-up">
          <Suspense fallback={<div>Loading Skills...</div>}>
            <LazySkillSection
              activeSkillCategory={activeSkillCategory}
              setActiveSkillCategory={setActiveSkillCategory}
              displayedSkills={displayedSkills}
            />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default Services
