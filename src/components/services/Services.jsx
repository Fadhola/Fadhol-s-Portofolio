// Services.jsx
import React, { useRef, useEffect } from 'react'
import './services.css'

/* Data Services (cards) */
const servicesData = [
  {
    title: 'Front-end Development',
    description:
      'Membangun tampilan website yang interaktif dan responsif menggunakan teknologi modern seperti React, Vue, dan lainnya.',
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
  { name: 'HTML', logo: '/html.png', value: 90 },
  { name: 'CSS', logo: '/css.png', value: 85 },
  { name: 'JavaScript', logo: '/js.png', value: 80 },
  { name: 'React', logo: '/react.png', value: 75 },
]

const backEndSkills = [
  { name: 'Node.js', logo: '/node.png', value: 80 },
  { name: 'Express', logo: '/express.png', value: 70 },
  { name: 'MongoDB', logo: '/mongo.png', value: 75 },
  { name: 'SQL', logo: '/sql.png', value: 65 },
]

const dataSkills = [
  { name: 'Python', logo: '/python.png', value: 85 },
  { name: 'R', logo: '/r.png', value: 70 },
  { name: 'Excel', logo: '/excel.png', value: 80 },
  { name: 'Tableau', logo: '/tableau.png', value: 60 },
]

const allSkills = [...frontEndSkills, ...backEndSkills, ...dataSkills]

const Services = () => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    console.log('scrollWidth:', slider.scrollWidth)
    console.log('clientWidth:', slider.clientWidth)

    // Pastikan konten melebihi container
    if (slider.scrollWidth <= slider.clientWidth) return

    let isPaused = false
    let reqId

    const scrollStep = 2

    const autoScroll = () => {
      if (!isPaused) {
        slider.scrollLeft += scrollStep
        console.log('scrollLeft:', slider.scrollLeft)
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
          console.log('Reset scrollLeft ke 0')
        }
      }
      reqId = requestAnimationFrame(autoScroll)
    }
    reqId = requestAnimationFrame(autoScroll)

    // Event handlers untuk pause saat hover/touch
    const pauseScroll = () => {
      isPaused = true
    }
    const resumeScroll = () => {
      isPaused = false
    }

    // Jika ingin menguji tanpa pause, event listener bisa dikomentari
    slider.addEventListener('mouseenter', pauseScroll)
    slider.addEventListener('mouseleave', resumeScroll)
    slider.addEventListener('touchstart', pauseScroll)
    slider.addEventListener('touchend', resumeScroll)

    return () => {
      cancelAnimationFrame(reqId)
      slider.removeEventListener('mouseenter', pauseScroll)
      slider.removeEventListener('mouseleave', resumeScroll)
      slider.removeEventListener('touchstart', pauseScroll)
      slider.removeEventListener('touchend', resumeScroll)
    }
  }, [])

  return (
    <section className="services-section">
      {/* BAGIAN SERVICES (Cards) */}
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
      </div>

      {/* BAGIAN SKILLS */}
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-slider" ref={sliderRef}>
        <div className="skills-track">
          {allSkills.concat(allSkills).map((skill, idx) => (
            <div className="skill-item" key={idx}>
              <SkillCircle logo={skill.logo} value={skill.value} />
              <p className="skill-name">
                {skill.name} - {skill.value}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SkillCircle = ({ logo, value }) => {
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (value / 100) * circumference

  return (
    <div className="skill-circle-container">
      <svg className="skill-circle" width="80" height="80" viewBox="0 0 80 80">
        <circle
          className="circle-bg"
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="10"
          fill="none"
        />
        <circle
          className="circle-progress"
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <image
          href={logo}
          x="40"
          y="40"
          height="20"
          width="20"
          transform="translate(-10, -10)"
          style={{ pointerEvents: 'none' }}
        />
      </svg>
    </div>
  )
}

export default Services
