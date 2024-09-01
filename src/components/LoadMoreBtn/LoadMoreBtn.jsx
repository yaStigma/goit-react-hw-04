import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onSubmit }) {
    return (
        <button className={css.btn} onClick={onSubmit} type="submit">Load More</button>
    )
};
