import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
    return (
        <ul className={css.list}>
            {images.results?.map((image) => (
                <li key={image.id} className={css.list__item}>
                    <ImageCard image={image}/>
                </li>
            ))}

        </ul>)
}