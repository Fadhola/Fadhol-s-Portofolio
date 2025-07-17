import { useState, Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./portfolio.css";

// Lazy load modal portfolio
const PortfolioModal = lazy(() => import("./PortfolioModal"));

const portfolioData = [
  {
    id: 1,
    title: "Data Analysis Project 1",
    category: "data-analyst",
    images: [
      "/portfolio/data1.png",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+1B",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+1C",
    ],
    description: "Penjelasan singkat tentang Data Analysis Project 1...",
    githubLink: "https://github.com/username/project1",
    liveLink: "https://example.com/project1",
    technologies: [
      { name: "Excel", logo: "/skills/excel.jpg" },
      { name: "LookerStudio", logo: "/skills/lookers.png" },
      // dsb.
    ],
  },
  {
    id: 2,
    title: "Strategies to Increase Revenue for Road Bikes in Canada",
    category: "data-analyst",
    images: [
      "/portfolio/data2.png",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+2B",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+2C",
    ],
    description:
      "An interactive dashboard built using Tableau to analyze and identify strategies for increasing Road Bike sales revenue in Canada, based on historical trends from 2014–2016.",
    githubLink: "https://github.com/username/project2",
    liveLink:
      "https://public.tableau.com/views/P0M1_fadhola_asandi_dashboard/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    technologies: [
      { name: "Python", logo: "/skills/py.png" },
      { name: "Tableau", logo: "/skills/tableau.webp" },
      { name: "pandas", logo: "/skills/pandas.png" },
      { name: "seaborn", logo: "/skills/seaborn.png" },
    ],
  },

  {
    id: 3,
    title: "Heart Failure Mortality Prediction",
    category: "data-analyst",
    images: [
      "/portfolio/data3.png",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+3B",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+3C",
    ],
    description:
      "A machine learning model to predict the risk of death in heart failure patients using clinical features. Outputs include classification labels, probability scores, and risk level recommendations.",
    githubLink: "https://github.com/username/heart-failure-risk",
    liveLink:
      "https://huggingface.co/spaces/fadhol/hearth-failure-death-proba-prediction",
    technologies: [
      { name: "Python", logo: "/skills/py.png" },
      { name: "XGBoost", logo: "/skills/xgboost.webp" },
      { name: "scikit-learn", logo: "/skills/sklearn.png" },
      { name: "pandas", logo: "/skills/pandas.png" },
      { name: "matplotlib", logo: "/skills/matplotlib.png" },
    ],
  },

  {
    id: 4,
    title: "Shopping Behavior Analytics for E-Commerce Strategy",
    category: "data-analyst",
    images: [
      "/portfolio/data4.jpg",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=Ecom+4B",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=Ecom+4C",
    ],
    description:
      "Analyzed customer shopping behavior using transactional data to uncover trends, preferences, and the impact of discounts. Built an automated data pipeline with Apache Airflow and created an interactive Kibana dashboard for real-time insights.",
    githubLink: "https://github.com/username/shopping-behavior-analytics",
    liveLink: "https://kibana.example.com/dashboard/shopping-behavior",
    technologies: [
      { name: "Python", logo: "/skills/py.png" },
      { name: "PostgreSQL", logo: "/skills/postgresql.png" },
      { name: "Apache Airflow", logo: "/skills/airflow.jpg" },
      { name: "Elasticsearch", logo: "/skills/elasticsearch.png" },
      { name: "Kibana", logo: "/skills/kibana.png" },
      { name: "Pandas", logo: "/skills/pandas.png" },
      { name: "Matplotlib", logo: "/skills/matplotlib.png" },
      { name: "Seaborn", logo: "/skills/seaborn.png" },
      { name: "Great Expectations", logo: "/skills/greatexpectations.png" },
    ],
  },

  {
    id: 5,
    title: "Web Dev Project 1",
    category: "web-dev",
    images: ["/portfolio/web1.png", "/portfolio/web1.1.png"],
    description: "Penjelasan singkat tentang Web Dev Project 1...",
    githubLink: "https://github.com/username/project2",
    liveLink: null,
    technologies: [
      { name: "HTML", logo: "/skills/html.jpg" },
      { name: "CSS", logo: "/skills/css.png" },
      { name: "js", logo: "/skills/js.png" },
      { name: "Node.js", logo: "/skills/node.png" },
      { name: "Express", logo: "/skills/express.png" },
      { name: "Mongodb", logo: "/skills/mongodb.png" },
      // dsb.
    ],
  },
  // ... data lain
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredData =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="portfolio-hero">
      <h1 className="portfolio-title" data-aos="fade-down">
        Portfolio
      </h1>
      <p className="portfolio-subtitle" data-aos="fade-up">
        Showcasing my journey in data science and a bit of web development along
        the way.
      </p>
      <div className="portfolio-filters">
        <button
          onClick={() => setActiveCategory("all")}
          className={activeCategory === "all" ? "active" : ""}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory("data-analyst")}
          className={activeCategory === "data-analyst" ? "active" : ""}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Data Analyst & Science
        </button>
        <button
          onClick={() => setActiveCategory("web-dev")}
          className={activeCategory === "web-dev" ? "active" : ""}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Web Development
        </button>
      </div>

      {/* Grid Portfolio */}
      <div className="portfolio-grid">
        {filteredData.map((item, index) => (
          <div
            className="portfolio-card"
            key={item.id}
            onClick={() => openModal(item)}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              loading="lazy" // Lazy loading gambar
            />
            <h3>{item.title}</h3>
            {item.technologies && item.technologies.length > 0 && (
              <div className="tech-row">
                {item.technologies.map((tech, idx) => (
                  <img
                    key={idx}
                    src={tech.logo}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-logo-small"
                    loading="lazy" // Lazy load logo juga
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal Lazy Loaded */}
      {selectedItem && (
        <Suspense fallback={<div>Loading modal...</div>}>
          <PortfolioModal
            selectedItem={selectedItem}
            closeModal={closeModal}
            currentImageIndex={currentImageIndex}
            handleDotClick={handleDotClick}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Portfolio;
