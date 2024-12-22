export type Image = {
  urls: {
    regular: string; 
  };
  alt_description: string | null;
}

export type ImageModalProps = {
  image: Image | null; 
  onClose: () => void;
}