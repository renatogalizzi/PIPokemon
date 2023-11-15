import React from 'react';
import style from "./FilterOrder.module.css"
import { useSelector,useDispatch } from 'react-redux';
import { filterPokemons , orderPokemons} from "../../redux/actions";
import { useState } from 'react';



export default function FilterOrder() {
const dispatch = useDispatch();

const handleFilter = (e) =>{
  e.preventDefault();
  //console.log(e)
dispatch(filterPokemons(e.target.value));

}
const handleOrder = (e) => {
  dispatch(orderPokemons(e.target.value));
  
}
    return (
      <div>
        <b>Filtrar por Tipo:</b> <select name="type" className={style.type} onChange={handleFilter}>
            <option value=" ">...</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
            <option value="unknown">Unknown</option>
            <option value="shadow">Shadow</option>
      </select>
      <b>Filtrar por Origen:</b> <select name="origen" className={style.type} onChange={handleFilter}>
            <option value="normal">...</option>
            <option value="api">Api</option>
            <option value="bbdd">Base de Datos</option>
            </select>
      <b>Ordenar:</b> <select name="orden" className={style.type} onChange={handleOrder}>
            <option value="AZ">A-Z</option>
            <option value="ZA">Z-A</option>
            <option value="A">Ataque</option>
            </select>
        
      </div>
    );
  }
  

