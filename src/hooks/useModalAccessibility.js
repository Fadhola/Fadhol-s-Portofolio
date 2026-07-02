import { useEffect, useRef } from "react";

/**
 * Shared accessibility behavior for modal dialogs (PortfolioModal, CertificateModal).
 *
 * - Moves focus onto the close button when the modal mounts (opens).
 * - Closes the modal on Escape keydown.
 * - Locks background page scroll while the modal is mounted, restoring it on unmount.
 *
 * Focus is captured/restored to the element that triggered the modal by the
 * parent component (Portfolio.jsx / Certificate.jsx), since only the parent
 * knows which element was clicked to open the modal.
 *
 * Returns a ref that must be attached to the modal's close button.
 */
export default function useModalAccessibility(closeModal) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
    // Intentionally run once per mount: each modal instance corresponds to a
    // single open/close cycle (parent conditionally mounts/unmounts it), so
    // capturing `closeModal` at mount time is safe and avoids re-locking
    // scroll/refocusing on unrelated re-renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return closeButtonRef;
}
