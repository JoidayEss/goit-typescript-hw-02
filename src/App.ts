export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

export type AppError = string | null;