import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ id, nombre, imagen,types}) {
   //console.log(types)
   let type="";
   for (let e of types){
      type=(e.nombre )+" "+type;
   };

   return (
    <div className={styles.divCard}>
      <Link  to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
        <h2  className={styles.h1nombre}>{nombre.toUpperCase()}</h2>
      </Link>
      <img height="55%" width="100%" src={imagen} alt="imagen" />
      <h4>{type}</h4>
    </div>
  );
}
