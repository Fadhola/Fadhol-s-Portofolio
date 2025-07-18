import "./about.css";
import { useEffect } from "react";
import AOS from "aos";
import {
  FaGraduationCap,
  FaUsers,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timeline = [
    {
      year: "2021 - 2025",
      icon: <FaGraduationCap />,
      title: "S1 Sistem Informasi – Universitas Amikom Yogyakarta",
      desc: (
        <>
          Lulus dengan predikat <strong>Cum Laude</strong>, IPK 3.75. Selama
          kuliah aktif mengikuti program eksternal dan studi independen:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Semester 5: <br></br>Dicoding (2023) – Full-Stack Web Developer
            </li>
            <li>
              Semester 6: <br></br>Tech Academy RevoU (2024) – Data Analytics
            </li>
          </ul>
        </>
      ),
    },
    {
      year: "2025",
      icon: <FaUsers />,
      title: "Lulus Bootcamp Hacktiv8",
      desc: "Full-Time Bootcamp Data Science & Analyst. Fokus pada Python, SQL, Machine Learning, data engineer dan analisis bisnis berbasis proyek.",
    },
  ];

  return (
    <div className="about-section">
      <div className="about-container" id="about">
        <h2 className="about-title" data-aos="fade-up">
          About Me
        </h2>
        <div className="about-content">
          {/* LEFT: Introduction */}
          <div
            className="about-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p>
              Saya adalah lulusan <strong>Sistem Informasi</strong> yang kini
              fokus di bidang <strong>Data Analytics dan Data Science</strong>.
              Selama kuliah, saya aktif mengikuti program{" "}
              <strong>Studi Independen Kampus Merdeka</strong> untuk mendalami
              web development dan data analytics dengan AI tools.
            </p>
            <br />
            <p>
              Setelah lulus, saya memperkuat kemampuan saya di dunia data dengan
              mengikuti bootcamp{" "}
              <strong>Full-Time Data Science & Analyst</strong> di Hacktiv8.
              Saya percaya bahwa kombinasi <strong>penguasaan teknis</strong>{" "}
              dan <strong>kemampuan komunikasi data</strong> akan sangat penting
              dalam menghadirkan solusi yang berdampak lewat teknologi.
            </p>
          </div>

          {/* RIGHT: Timeline */}
          <div className="about-right" data-aos="fade-up" data-aos-delay="200">
            <div className="timeline-line" />
            <div className="timeline">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  //   data-aos="fade-up"
                  //   data-aos-delay={0}
                >
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <h4>
                      {item.year} — {item.title}
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
