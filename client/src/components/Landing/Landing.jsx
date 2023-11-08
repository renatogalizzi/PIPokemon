import React from "react";
import style from "./Landing.module.css"

export default function Landing() {
  return (
    <div className={style.divContainer}>
      <button>
        <a href="/Home">Ingresar</a>
      </button>
    </div>
  );
}
