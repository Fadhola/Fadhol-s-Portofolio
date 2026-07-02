import React, { useState, Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";

/* Data Services (cards) */
const servicesData = [
  {
    title: "AI & LLM Engineering",
    description:
      "Building production-ready LLM applications — RAG pipelines, tool-enabled AI agents, guardrails, and confidence-aware pipelines that know when to refuse a low-confidence answer.",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Transforming raw data into valuable insights using statistical analysis, machine learning, and data visualization.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Building interactive web interfaces and the APIs behind them — from FastAPI/Node.js backends to React/Vue frontends.",
  },
];

/* Data Skills */
const aiSkills = [
  { name: "LangChain", logo: "/skills/langchain.png", value: 100 },
  { name: "FastAPI", logo: "/skills/fastapi.png", value: 100 },
  { name: "Pydantic", logo: "/skills/pydantic.png", value: 100 },
  { name: "Hugging Face", logo: "/skills/huggingface.png", value: 100 },
  { name: "Ollama", logo: "/skills/ollama.png", value: 100 },
  { name: "PyTorch", logo: "/skills/pytorch.png", value: 100 },
  { name: "pgvector", logo: "/skills/postgresql.png", value: 100 },
  { name: "Docker", logo: "/skills/docker.png", value: 100 },
];

const dataSkills = [
  { name: "Python", logo: "/skills/py.png", value: 100 },
  { name: "SQL", logo: "/skills/sql.jpg", value: 100 },
  { name: "Pandas", logo: "/skills/pandas.png", value: 100 },
  { name: "Scikit-learn", logo: "/skills/sklearn.png", value: 100 },
  { name: "TensorFlow", logo: "/skills/tf.png", value: 100 },
  { name: "Keras", logo: "/skills/keras.png", value: 100 },
  { name: "Streamlit", logo: "/skills/streamlit.png", value: 100 },
  { name: "Tableau", logo: "/skills/tableau.webp", value: 100 },
];
const frontEndSkills = [
  { name: "HTML", logo: "/skills/html.jpg", value: 100 },
  { name: "CSS", logo: "/skills/css.png", value: 100 },
  { name: "JavaScript", logo: "/skills/js.png", value: 100 },
  { name: "React", logo: "/skills/react.png", value: 100 },
];

const backEndSkills = [
  { name: "Node.js", logo: "/skills/node.png", value: 100 },
  { name: "Express", logo: "/skills/express.png", value: 100 },
  { name: "MongoDB", logo: "/skills/mongodb.png", value: 100 },
  { name: "PostgreSQL", logo: "/skills/postgresql.png", value: 100 },
];

// Gabungkan front-end dan back-end untuk kategori web
const webSkills = [...frontEndSkills, ...backEndSkills];

// Lazy load komponen SkillSection
const LazySkillSection = lazy(() => import("./SkillSection"));

const Services = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  // Jika "all" dipilih, gabungkan semua skill, selain itu pilih sesuai kategori
  const displayedSkills =
    activeSkillCategory === "all"
      ? [...aiSkills, ...webSkills, ...dataSkills]
      : activeSkillCategory === "ai"
      ? aiSkills
      : activeSkillCategory === "web"
      ? webSkills
      : dataSkills;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="services-section">
      <h2 className="services-title" data-aos="fade-down">
        My Services
      </h2>
      <p className="services-subtitle" data-aos="fade-up">
        Building production-ready AI systems — with a full-stack development
        and data science foundation to back it up.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            className={`service-card ${index === 2 ? "full-width" : ""}`}
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
  );
};

export default Services;
