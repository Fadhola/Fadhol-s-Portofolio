import { useId } from "react";
import "./certificate.css";
import useModalAccessibility from "../../hooks/useModalAccessibility";

const CertificateModal = ({ certificate, closeModal }) => {
  const closeButtonRef = useModalAccessibility(closeModal);
  const titleId = useId();

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-certi-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={closeModal}
          aria-label="Close modal"
          ref={closeButtonRef}
        >
          &times;
        </button>
        <img src={certificate.image} alt={certificate.title} loading="lazy" />
        <h2 id={titleId}>{certificate.title}</h2>
      </div>
    </div>
  )
}

export default CertificateModal
