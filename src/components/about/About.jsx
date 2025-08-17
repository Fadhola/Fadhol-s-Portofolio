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
      title:
        "Bachelor's Degree in Information Systems – Universitas Amikom Yogyakarta",
      desc: (
        <>
          Graduated with <strong>Cum Laude</strong> honors, GPA 3.75. Actively
          participated in Kampus Merdeka&apos;s Certified Independent Study
          (MSIB) programs to enhance skills through external learning
          experiences:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Semester 5: <br></br>
              Dicoding (2023) – Front-End & Backend Web Developer
            </li>
            <li>
              Semester 6: <br></br>
              Tech Academy RevoU (2024) – Data Analytics & Software Engineering
            </li>
          </ul>
        </>
      ),
    },
    {
      year: "2025",
      icon: <FaUsers />,
      title: "Hacktiv8 Bootcamp Graduate",
      desc: "Full-Time Bootcamp in Data Science & Analytics. Focused on Python, SQL, Machine Learning, data engineering, and project-based business analysis.",
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
              I am a graduate in <strong>Information Systems</strong> with a
              current focus on <strong>Data Analytics and Data Science</strong>.
              During my undergraduate studies, I actively participated in the{" "}
              <strong>Kampus Merdeka Independent Study</strong> programs to
              deepen my understanding of web development and data analytics
              using AI tools.
            </p>
            <br />
            <p>
              After graduation, I enhanced my skills in the data field by
              joining a <strong>Full-Time Data Science & Analyst</strong>{" "}
              bootcamp at Hacktiv8. I believe that a combination of{" "}
              <strong>technical proficiency</strong> and{" "}
              <strong>data communication skills</strong> is essential for
              delivering impactful solutions through technology.
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
