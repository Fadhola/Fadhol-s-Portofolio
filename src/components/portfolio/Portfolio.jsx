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
    title: "Dashboard & Data Analysis – Capstone Project RevoU x MSIB",
    date: "2024-04",
    category: ["data-analyst", "web-dev"],
    images: [
      "/portfolio/RevoU/1.png",
      "/portfolio/RevoU/2.png",
      "/portfolio/RevoU/3.png",
      "/portfolio/RevoU/4.png",
    ],
    description:
      "Capstone Project dari program Studi Independen RevoU x MSIB Cycle 6, dikerjakan oleh tim beranggotakan 12 orang. Saya berperan sebagai Data Analyst sekaligus Front-End Developer. Pada tahap analisis, saya melakukan eksplorasi terhadap efektivitas strategi diskon superstore berdasarkan data historis (2014–2017). Selanjutnya, saya mengubah dashboard Looker Studio menjadi website dashboard statis menggunakan HTML, CSS, dan JavaScript.",
    githubLink: "https://github.com/Fadhola/km-feb24-jakarta-16",
    liveLink: "https://km-feb24-jakarta-16.vercel.app/",
    technologies: [
      { name: "Google Sheets", logo: "/skills/excel.jpg" },
      { name: "SQL", logo: "/skills/sql.jpg" },
      { name: "Looker Studio", logo: "/skills/lookers.png" },
      { name: "HTML", logo: "/skills/html.jpg" },
      { name: "CSS", logo: "/skills/css.png" },
      { name: "JavaScript", logo: "/skills/js.png" },
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
    githubLink: "https://github.com/Fadhola/Road-Bikes-Revenue-Strategy",
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
    githubLink: "https://github.com/Fadhola/Heart-Failure-Mortality-Prediction",
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
    title: "End to End Pipeline for E-Commerce Shopping Behavior Analytics",
    date: "2025-06",
    category: "data-analyst",
    images: [
      "/portfolio/data4.jpg",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=Ecom+4B",
      "https://via.placeholder.com/400x300/36ba98/ffffff?text=Ecom+4C",
    ],
    description:
      "Analyzed customer shopping behavior with Apache Airflow pipeline + Kibana dashboard for real-time insights.",
    githubLink:
      "https://github.com/Fadhola/End-to-End-Pipeline-for-E-Commerce-Shopping-Behavior-Analytics",
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
    title: "Dashboard Analisis Data Superstore",
    date: "2024-11",
    category: "web-dev",
    images: [
      "/portfolio/web1.png",
      "/portfolio/web1.1.png",
      "/portfolio/web1.2.png",
    ],
    description:
      "Dashboard interaktif berbasis web untuk analisis visualisasi data Superstore menggunakan arsitektur full-stack (Vite + Express.js) dan database MongoDB. Menyediakan fitur autentikasi, manajemen dataset (unggah/edit/hapus), serta visualisasi data penjualan dan profit secara real-time.",
    githubLink:
      "https://github.com/Fadhola/Full-Stack-Dashboard-Analisis-Visualisasi-Data-Superstore",
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
  {
    id: 6,
    title: "MentalCare – Web Penanganan Kesehatan Mental",
    date: "2023-11",
    category: "web-dev",
    images: [
      "/portfolio/MentalCare/1.png",
      "/portfolio/MentalCare/2.png",
      "/portfolio/MentalCare/3.png",
      "/portfolio/MentalCare/4.png",
      "/portfolio/MentalCare/7.png",
      "/portfolio/MentalCare/8.png",
      "/portfolio/MentalCare/9.png",
      "/portfolio/MentalCare/10.png",
      "/portfolio/MentalCare/11.png",
      "/portfolio/MentalCare/12.png",
      "/portfolio/MentalCare/13.png",
      "/portfolio/MentalCare/14.png",
      "/portfolio/MentalCare/15.png",
    ],
    description:
      "Capstone Project dari program Studi Independen Bersertifikat (SIB) Cycle 5 Dicoding. Saya berperan sebagai frontend developer bersama 1 rekan lainnya, mengimplementasikan desain UI/UX ke dalam kode menggunakan Bootstrap. Website ini bertujuan menyediakan informasi dan dukungan bagi penderita gangguan kesehatan mental. Backend dikembangkan dengan Laravel 10.",
    githubLink: "https://github.com/anggistaop/MentalCare",
    liveLink: null, // sebelumnya: https://mentalcare.biz.id (sudah tidak aktif)
    technologies: [
      { name: "HTML", logo: "/skills/html.jpg" },
      { name: "CSS", logo: "/skills/css.png" },
      { name: "JavaScript", logo: "/skills/js.png" },
      { name: "Bootstrap", logo: "/skills/bootstrap.png" },
      { name: "Laravel", logo: "/skills/laravel.png" },
    ],
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    date: "2025-04",
    category: "web-dev",
    images: ["/portfolio/portfolio.png"],
    description:
      "Website portfolio pribadi yang menampilkan berbagai proyek, sertifikat, dan informasi kontak. Dibangun menggunakan React dan Vite dengan integrasi Three.js untuk efek visual 3D, Swiper untuk carousel, dan AOS untuk animasi scroll.",
    githubLink: "https://github.com/Fadhola/Fadhol-s-Portofolio",
    liveLink: null,
    technologies: [
      { name: "React", logo: "/skills/react.png" },
      { name: "Vite", logo: "/skills/vite.jpeg" },
      { name: "Three.js", logo: "/skills/threejs.png" },
      { name: "Swiper", logo: "/skills/swiper.png" },
      { name: "AOS", logo: "/skills/aos.jpeg" },
      { name: "JavaScript", logo: "/skills/js.png" },
      { name: "CSS", logo: "/skills/css.png" },
    ],
  },
  {
    id: 8,
    title: "Skin Type Classification using CNN",
    date: "2025-06",
    category: "data-analyst",
    images: ["/portfolio/skinpredict.png", "/portfolio/skineda.png"],
    description:
      "Developed a CNN model to classify facial skin types (oily, dry, normal) to assist skincare beginners in selecting suitable products. Improved validation accuracy using data augmentation, batch normalization, dropout, and learning rate scheduling. Deployed via Streamlit for real-time image-based prediction.",
    githubLink: "https://github.com/Fadhola/Skin-Type-Classification-with-CNN",
    liveLink: "https://huggingface.co/spaces/fadhol/skin-type-recognition",
    technologies: [
      { name: "Python", logo: "/skills/py.png" },
      { name: "TensorFlow", logo: "/skills/tf.png" },
      { name: "Keras", logo: "/skills/keras.png" },
      { name: "Scikit-learn", logo: "/skills/sklearn.png" },
      { name: "Pandas", logo: "/skills/pandas.png" },
      { name: "Matplotlib", logo: "/skills/matplotlib.png" },
      { name: "Seaborn", logo: "/skills/seaborn.png" },
    ],
  },
  {
    id: 9,
    title: "BPJSChaBo (BPJS Chatbot with NLP & RAG Pipeline)",
    date: "2025-04",
    category: "data-analyst",
    images: ["/portfolio/chabo.png"],
    description:
      "Developed an AI-powered chatbot that provides real-time, accurate answers to BPJS-related questions by leveraging RAG (Retrieval-Augmented Generation) and NLP techniques. Collaborated in a team of 5 as the Data Engineer, responsible for collecting, cleaning, validating, and storing data from official BPJS sources. Designed an end-to-end data pipeline including MongoDB vector storage and deployed the app on Hugging Face using Streamlit.",
    githubLink:
      "https://github.com/FTDS-assignment-bay/p2-final-project-ftds-043-rmt-group-003",
    liveLink:
      "https://huggingface.co/spaces/ifananwar/p2-final-project-ftds-043-rmt-group-003",
    technologies: [
      { name: "Python", logo: "/skills/py.png" },
      { name: "LangChain", logo: "/skills/langhain.png" },
      { name: "Streamlit", logo: "/skills/streamlit.png" },
      { name: "MongoDB Atlas Vector Search", logo: "/skills/mongodb.png" },
      { name: "Gemini Flash", logo: "/skills/gemini15.jpeg" },
      { name: "Deepseek-V3/R1", logo: "/skills/deepseek.png" },
      { name: "Scikit-learn", logo: "/skills/sklearn.png" },
      { name: "Pandas", logo: "/skills/pandas.png" },
      { name: "Matplotlib", logo: "/skills/matplotlib.png" },
      { name: "Seaborn", logo: "/skills/seaborn.png" },
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
      : portfolioData.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory
        );

  const sortedData = [...filteredData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // useEffect(() => {
  //   AOS.refresh();
  // }, [activeCategory]);

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
        ].map(({ key, label }) => (
          <button
            key={key}
            className={activeCategory === key ? "active" : ""}
            onClick={() => setActiveCategory(key)}
            // data-aos="fade-up"
            // data-aos-delay={100 + i * 100}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Swiper Coverflow Carousel */}
      <Swiper
        key={activeCategory}
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
