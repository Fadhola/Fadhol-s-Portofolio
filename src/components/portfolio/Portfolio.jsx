// Portfolio.jsx
import { useState, Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./portfolio.css";

// React‑wrapper Swiper + modules
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Lazy load modal
const PortfolioModal = lazy(() => import("./PortfolioModal"));

// Data portfolio
const portfolioData = [
  {
    id: 1,
    title: "Data Analysis Project 1",
    date: "2024-04",
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
    ],
  },
  {
    id: 2,
    title: "Road Bikes Revenue Strategy",
    date: "2025-05",
    category: "data-analyst",
    images: [
      "/portfolio/data2.png",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+2B",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+2C",
    ],
    description:
      "An interactive dashboard built with Tableau to analyze and identify strategies for increasing Road Bike sales revenue in Canada (2014–2016).",
    githubLink: "https://github.com/username/project2",
    liveLink:
      "https://public.tableau.com/views/P0M1_fadhola_asandi_dashboard/Dashboard1",
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
    date: "2025-06",
    category: "data-analyst",
    images: [
      "/portfolio/data3.png",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+3B",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=DA+3C",
    ],
    description:
      "A machine learning model predicting risk of death in heart failure patients using clinical features.",
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
    title: "Shopping Behavior Analytics",
    date: "2025-06",
    category: "data-analyst",
    images: [
      "/portfolio/data4.jpg",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=Ecom+4B",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=Ecom+4C",
    ],
    description:
      "Analyzed customer shopping behavior with Apache Airflow pipeline + Kibana dashboard for real-time insights.",
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
    title: "Skripsi non-Reguler",
    date: "2024-11",
    category: "web-dev",
    images: ["/portfolio/web1.png", "/portfolio/web1.1.png"],
    description: "Penjelasan singkat tentang Web Dev Project 1...",
    githubLink: "https://github.com/username/project2",
    liveLink: null,
    technologies: [
      { name: "HTML", logo: "/skills/html.jpg" },
      { name: "CSS", logo: "/skills/css.png" },
      { name: "JS", logo: "/skills/js.png" },
      { name: "Node.js", logo: "/skills/node.png" },
      { name: "Express", logo: "/skills/express.png" },
      { name: "MongoDB", logo: "/skills/mongodb.png" },
    ],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  // filter + sort by date desc
  const filteredData =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeCategory);

  const sortedData = [...filteredData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  return (
    <section className="portfolio-hero">
      <h1 className="portfolio-title" data-aos="fade-down">
        Portfolio
      </h1>
      <p className="portfolio-subtitle" data-aos="fade-up">
        Showcasing my journey in data science and web development.
      </p>

      <div className="portfolio-filters">
        {[
          { key: "all", label: "All" },
          { key: "data-analyst", label: "Data Analyst & Science" },
          { key: "web-dev", label: "Web Development" },
        ].map(({ key, label }, i) => (
          <button
            key={key}
            className={activeCategory === key ? "active" : ""}
            onClick={() => setActiveCategory(key)}
            data-aos="fade-up"
            data-aos-delay={100 + i * 100}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Swiper Coverflow Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        // speed={3000}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={-40}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        className="portfolio-swiper"
        // breakpoints={{
        //   640: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        // }}
      >
        {sortedData.map((item) => (
          <SwiperSlide
            key={item.id}
            // style={{ width: "300px" }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="portfolio-card">
              <img src={item.images[0]} alt={item.title} loading="lazy" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <span className="project-date">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
                <div className="tech-row">
                  {item.technologies.map((tech, i) => (
                    <img
                      key={i}
                      src={tech.logo}
                      alt={tech.name}
                      title={tech.name}
                      className="tech-logo-small"
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedItem && (
        <Suspense fallback={<div>Loading modal...</div>}>
          <PortfolioModal
            selectedItem={selectedItem}
            closeModal={() => setSelectedItem(null)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Portfolio;
