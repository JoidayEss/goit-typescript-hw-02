import React from "react";
import { LoadMoreBtnProps } from "./LoadMoreBtn"
import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <div>
  <button className={s.button} onClick={onClick} style={{ display: "block", margin: "20px auto" }}>
    Load more
    </button>
    </div>
);

export default LoadMoreBtn;
