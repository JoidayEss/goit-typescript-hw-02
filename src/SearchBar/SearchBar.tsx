import { ChangeEvent, FormEvent, useState } from "react";
import React from "react";
import {SearchBarProps} from "./SearchBar"
import s from "./SearchBar.module.css";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>(""); 

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSubmit(input); // 
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={input}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
