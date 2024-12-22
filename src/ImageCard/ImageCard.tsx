import s from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div>
    <img
      className={s.image}
      src={image.urls.small}
      alt={image.alt_description || "Image"} 
    />
  </div>
);

export default ImageCard;
