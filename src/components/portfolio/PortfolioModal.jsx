// PortfolioModal.jsx
import { AiOutlineClose, AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

// React‑wrapper Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Zoom,
  A11y,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";

// CSS core + modul
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";
import "swiper/css/zoom";

import "./portfolio.css";

const PortfolioModal = ({ selectedItem, closeModal }) => (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="modal-close" onClick={closeModal}>
        <AiOutlineClose />
      </span>

      <Swiper
        // install modul‐modul yang dibutuhkan
        modules={[
          Navigation,
          Pagination,
          Zoom,
          EffectCoverflow,
          Autoplay,
          A11y,
          EffectFade,
        ]}
        effect="flip"
        zoom={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={false}
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        //   pauseOnMouseEnter: true,
        // }}
        className="modal-swiper"
      >
        {selectedItem.images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="swiper-zoom-container">
              <img
                src={src}
                alt={`${selectedItem.title} slide ${idx + 1}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2>{selectedItem.title}</h2>
      <span className="modal-date">
        {new Date(selectedItem.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        })}
      </span>
      <p>{selectedItem.description}</p>

      {selectedItem.technologies?.length > 0 && (
        <div className="modal-tech">
          <h3>Technologies Used</h3>
          <div className="tech-logos">
            {selectedItem.technologies.map((tech, i) => (
              <img
                key={i}
                src={tech.logo}
                alt={tech.name}
                title={tech.name}
                className="tech-logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}

      <div className="modal-links">
        <a href={selectedItem.githubLink} target="_blank" rel="noreferrer">
          <AiFillGithub /> GitHub
        </a>
        {selectedItem.liveLink ? (
          <a href={selectedItem.liveLink} target="_blank" rel="noreferrer">
            <BiLinkExternal /> Live Preview
          </a>
        ) : (
          <button className="disabled-live" disabled>
            <BiLinkExternal /> Live Preview
          </button>
        )}
      </div>
    </div>
  </div>
);

export default PortfolioModal;
