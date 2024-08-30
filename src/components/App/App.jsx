// import { useState } from 'react'

// import css from './App.module.css'
import SearchBar from "../SearchBar/SearchBar"
import ImageGallary from "../ImageGallery/ImageGallery"
import ErrorMassage from "../ErrorMassage/ErrorMassage"
import Loader from "../Loader/Loader"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
export default function App() {
   return(
    <>
<SearchBar/>
<ImageGallary/>
<LoadMoreBtn/>
<Loader/>
<ErrorMassage/>
<ImageModal/>
</>
  )
}
