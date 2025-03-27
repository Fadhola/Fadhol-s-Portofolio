import React, { useState } from 'react'
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
  { name: 'HTML', logo: '/html.jpg', value: 70 },
  { name: 'CSS', logo: '/css.png', value: 70 },
  { name: 'JavaScript', logo: '/js.png', value: 50 },
  { name: 'React', logo: '/react.png', value: 20 },
]

const backEndSkills = [
  { name: 'Node.js', logo: '/node.png', value: 50 },
  { name: 'Express', logo: '/express.png', value: 20 },
  { name: 'MongoDB', logo: '/mongodb.png', value: 20 },
]

const dataSkills = [
  { name: 'Python', logo: '/py.png', value: 10 },
  { name: 'SQL', logo: '/sql.jpg', value: 50 },
  { name: 'Excel', logo: '/excel.jpg', value: 50 },
  { name: 'Tableau', logo: '/tableau.png', value: 60 },
]

// Gabungkan front-end dan back-end untuk kategori web
const webSkills = [...frontEndSkills, ...backEndSkills]

/* Komponen SkillBox: menampilkan logo di dalam square progress indicator dengan persentase di atas nama */
const SkillBox = ({ logo, name, value }) => {
  const side = 70
  const perimeter = side * 4
  const dashOffset = perimeter * (1 - value / 100)
  return (
    <div className="skill-box">
      <div className="skill-square-container">
        <svg width="80" height="80">
          <rect
            x="5"
            y="5"
            width={side}
            height={side}
            rx="5"
            ry="5"
            fill="none"
            stroke="#444"
            strokeWidth="4"
          />
          <rect
            x="5"
            y="5"
            width={side}
            height={side}
            rx="5"
            ry="5"
            fill="none"
            stroke="#36ba98"
            strokeWidth="4"
            strokeDasharray={perimeter}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        <img src={logo} alt={name} className="skill-logo" />
      </div>
      <div className="skill-info">
        <span className="skill-progress-text">{value}%</span>
        <span className="skill-name">{name}</span>
      </div>
    </div>
  )
}

/* Komponen SkillSection: tombol kategori dan grid skill */
const SkillSection = ({
  activeSkillCategory,
  setActiveSkillCategory,
  displayedSkills,
}) => {
  return (
    <div className="skill-section">
      <h2 className="skill-section-title">My Skills</h2>
      <div className="skill-buttons">
        <button
          className={activeSkillCategory === 'web' ? 'active' : ''}
          onClick={() => setActiveSkillCategory('web')}
        >
          Web Development
        </button>
        <button
          className={activeSkillCategory === 'data' ? 'active' : ''}
          onClick={() => setActiveSkillCategory('data')}
        >
          Data Analyst
        </button>
      </div>
      <div className="skills-grid">
        {displayedSkills.map((skill, idx) => (
          <SkillBox
            key={idx}
            logo={skill.logo}
            name={skill.name}
            value={skill.value}
          />
        ))}
      </div>
    </div>
  )
}

const Services = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('web')
  const displayedSkills = activeSkillCategory === 'web' ? webSkills : dataSkills

  return (
    <section className="services-section">
      <h1 className="services-title">My Services</h1>
      <p className="services-subtitle">
        Building sleek websites and analyzing data, one line of code at a time.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            className={`service-card ${index === 2 ? 'full-width' : ''}`}
            key={index}
          >
            <h2 className="service-card-title">{service.title}</h2>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
        {/* Kartu full-width untuk SkillSection */}
        <div className="service-card full-width">
          <SkillSection
            activeSkillCategory={activeSkillCategory}
            setActiveSkillCategory={setActiveSkillCategory}
            displayedSkills={displayedSkills}
          />
        </div>
      </div>
    </section>
  )
}

export default Services
