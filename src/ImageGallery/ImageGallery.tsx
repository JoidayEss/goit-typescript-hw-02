import ImageCard from "../ImageCard/ImageCard.js";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types.js";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.ul_list}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};


export default ImageGallery;
