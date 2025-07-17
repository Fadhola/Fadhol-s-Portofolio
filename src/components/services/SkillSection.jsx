import React from "react";
import "./services.css";

/* Komponen SkillBox: menampilkan logo di dalam square progress indicator dengan persentase */
const SkillBox = ({ logo, name, value }) => {
  const side = 70;
  const perimeter = side * 4;
  const dashOffset = perimeter * (1 - value / 100);
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
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <img src={logo} alt={name} className="skill-logo" loading="lazy" />
      </div>
      <div className="skill-info">
        <span className="skill-progress-text">{value}%</span>
        <span className="skill-name">{name}</span>
      </div>
    </div>
  );
};

const SkillSection = ({
  activeSkillCategory,
  setActiveSkillCategory,
  displayedSkills,
}) => {
  return (
    <div className="skill-section" data-aos="fade-up">
      <h2 className="skill-section-title" data-aos="fade-right">
        Core Skills
      </h2>
      <p className="skill-section-subtitle" data-aos="fade-left">
        My focus is on data science and analysis, with a supporting background
        in front-end and back-end web development.
      </p>

      <div className="skill-buttons">
        <button
          className={activeSkillCategory === "all" ? "active" : ""}
          onClick={() => setActiveSkillCategory("all")}
        >
          All
        </button>
        <button
          className={activeSkillCategory === "data" ? "active" : ""}
          onClick={() => setActiveSkillCategory("data")}
        >
          Data Science
        </button>
        <button
          className={activeSkillCategory === "web" ? "active" : ""}
          onClick={() => setActiveSkillCategory("web")}
        >
          Web Development
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
  );
};

export default SkillSection;
