import {Image} from "../Image.types"

export type ImageModalProps = {
  image: Image | null; 
  onClose: () => void;
}