import { useState } from 'react'

// import css from './App.module.css'
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import ErrorMassage from "../ErrorMassage/ErrorMassage"
import Loader from "../Loader/Loader"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  const handleSubmit = (e, input) => {
    e.preventDefault();
    if (!input) {
      toast("Please enter your search");
    }
    setLoading(true);
    fetchSearchedImages(input);
  };

  const fetchSearchedImages = async(input) => {
    try {
      setPage(page + 1);
      const { data } = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${input}`, {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
          "Accept-Version": "v1"
        }
      })
      console.log(page);
      console.log(data);
      setImages(data);
    } catch(err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

   return(
    <>
      <SearchBar onSubmit={handleSubmit}/>
      {loading ? <Loader/> : error ? <ErrorMassage/> :<ImageGallery images={images}/>}
      {images.results?.length > 0 && <LoadMoreBtn onSubmit={handleSubmit}/>}
      <ImageModal/>
      <Toaster />
    </>
  )
}
