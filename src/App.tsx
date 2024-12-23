import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar.tsx";
import ImageGallery from "./ImageGallery/ImageGallery.js";
import Loader from "./Loader/Loader.js";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.tsx";
import ImageModal from "./ImageModal/ImageModal.js";
import { Image } from "./Image.types.ts"
import {AppError} from "./App.js"

const ACCES_KEY = "_Eo7wDjneR8d06fqIhWY7qqP86Y1JQ478WdRWeqybdI";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>(""); 
  const [images, setImages] = useState<Image[]>([]); 
  const [page, setPage] = useState<number>(1); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [error, setError] = useState<AppError>(null); 
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const fetchImages = async (newQuery = query, newPage = 1): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get<{ results: Image[] }>(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: newQuery,
            page: newPage,
            per_page: 12,
            client_id: ACCES_KEY,
          },
        }
      );

      setImages((prevImages) =>
        newPage === 1
          ? response.data.results
          : [...prevImages, ...response.data.results]
      );
      setPage(newPage);
    } catch {
      setError("Не вдалося завантажити зображення");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (searchQuery: string): void => {
    if (!searchQuery.trim()) {
      toast.error("Введіть текст для пошуку!");
      return;
    }
    setQuery(searchQuery);
    fetchImages(searchQuery, 1);
  };

  const handleLoadMore = (): void => {
  void fetchImages(query, page + 1);
};

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default App;
