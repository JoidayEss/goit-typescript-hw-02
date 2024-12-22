import { useEffect } from "react";
import Modal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: { inset: "10%", border: "none", padding: 0 },
      }}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
          style={{ width: "100%" }}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
