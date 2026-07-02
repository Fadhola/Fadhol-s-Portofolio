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
    {
      year: "Nov 2025 – May 2026",
      icon: <FaLaptopCode />,
      title: "AI Engineer (Internship) – Jatis Mobile",
      desc: (
        <>
          Built a modular <strong>RAG pipeline</strong> from scratch
          (multi-format ingestion, chunking, pgvector search) and a{" "}
          <strong>tool-enabled AI agent</strong> with guardrails and refusal
          logic. Owned Confidence Scoring & Refusal Logic on a team RAG
          project, then led root-cause analysis on the company&apos;s
          chunking pipeline — the adaptive-chunking redesign I proposed was
          adopted as the official architecture.
        </>
      ),
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
              I am an <strong>AI Engineer</strong> with hands-on experience
              building production-ready LLM applications — including{" "}
              <strong>RAG systems</strong>, <strong>tool-enabled AI agents</strong>,
              and <strong>confidence-aware AI pipelines</strong>. I design
              modular AI architectures, implement guardrails and refusal
              logic for safe AI responses, and integrate vector databases
              into production systems.
            </p>
            <br />
            <p>
              My foundation is in <strong>Information Systems</strong>{" "}
              (Universitas Amikom Yogyakarta) and{" "}
              <strong>Data Science & Analytics</strong> (Hacktiv8), built
              through Kampus Merdeka&apos;s Independent Study programs. I now
              leverage <strong>Claude Code</strong> with multi-agent
              orchestration, MCP integrations, and parallel subagents to
              compress solo build cycles from weeks to days.
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
