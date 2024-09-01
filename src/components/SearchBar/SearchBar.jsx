import css from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar ({ onSubmit }) {
  const [input, setInput] = useState();

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={(e) => onSubmit(e, input)}>
        <input
          className={css.input}
          onChange={e => setInput(e.target.value)}
          value={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">Search</button>
      </form>
    </header>  
  )
}

