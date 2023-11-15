import React from "react";
import style from "./Landing.module.css"

export default function Landing() {
  return (
    
    <div className={style.divContainer}>
      <div className={style.divButtonImage}>
        <img width="100" src="/ico.png" alt="" />
        <button className={style.ovbtnslideleft}>
          <a href="/Home">Ingresar</a>
        </button>
      </div>
    <div className={style.footer}>
      <span>Proyecto Individual Pokemons | Renato Galizzi</span>
    </div>
    </div>
  );
}
