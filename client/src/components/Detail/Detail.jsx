import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import style from "./Detail.module.css"



export default function Detail () {
    const { id } = useParams();
    const [character , setCharacter] = useState({});
    const getTypes = () => {
      let type="";
       for (let i=0;i<character.types?.length;i++){
         type= type + " | "+ character.types[i]?.name + " | ";
      }
      return type;
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(({ data }) => {
           if (data.nombre) {
            console.log(data)
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     return(
      <div className={style.container}>
         <div className={style.imagenDetail}>
            <img src={character.imagen} alt={character.name}/>
         </div>
            <div key={character.id} className={style.data}>
               <h1>{character.nombre}</h1>
               <h2>ID : {character.id}</h2>
               <h2>Vida: {character.vida}</h2>
               <h2>Ataque: {character.ataque}</h2>
               <h2>Defensa: {character.defensa}</h2>
               <h2>Velocidad: {character.velocidad}</h2>
               <h2>Altura: {character.altura}</h2>
               <h2>Peso: {character.peso}</h2>
               <h2>Tipos: {getTypes()}</h2>
            </div>
        
        </div>
    );
}