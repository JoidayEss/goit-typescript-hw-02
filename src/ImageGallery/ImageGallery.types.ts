import {Image} from "../assets/Image.types"

export type ImageGalleryProps = {
  images: Image[]; 
  onImageClick: (image: Image) => void; 
}