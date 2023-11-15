import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import style from "./Detail.module.css"



export default function Detail () {
    const { id } = useParams();
    const [pokemon , setPokemon] = useState({});
    const getTypes = () => {
      let type="";
   if (id < 50){
      for (let i=0;i<pokemon.types?.length;i++){
         type= type + " | "+ pokemon.types[i]?.name + " | ";
      }
   }else {
      for (let i=0;i<pokemon.typePokemons?.length;i++){
         type= type + " | "+ pokemon.typePokemons[i]?.nombre + " | ";
      }
   }
      return type;
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(({ data }) => {
           if (data.nombre) {
              setPokemon(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setPokemon({});
     }, [id]);

     return(
      <div className={style.detailContainer}>
         <div className={style.nameContainer}>
               <h1>{pokemon.nombre}</h1>
         </div>
         <div className={style.imagenyData}>
            <div className={style.imagenDetail}>
               <img src={pokemon.imagen} alt={pokemon.name || "Image"}/>
            </div>
            <div key={pokemon.id} className={style.data}>
               <p>ID : {pokemon.id}</p>
               <p>Vida: {pokemon.vida}</p>
               <p>Ataque: {pokemon.ataque}</p>
               <p>Defensa: {pokemon.defensa}</p>
               <p>Velocidad: {pokemon.velocidad}</p>
               <p>Altura: {pokemon.altura}</p>
               <p>Peso: {pokemon.peso}</p>
               <p>Tipos: {getTypes()}</p>
            </div>
         </div>
         <Link to="/home">
         <button className={style.button}>Volver</button>
         </Link>
      </div>
      
    );
}