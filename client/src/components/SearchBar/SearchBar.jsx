import React from "react";
import { useDispatch } from "react-redux";
import { searchPokemon , resetFilters } from "../../redux/actions";
import style from "./SearchBar.module.css"
import { Link } from "react-router-dom";

export default function SearchBar() {
   const dispatch=useDispatch();
   const [nombre,setNombre] = React.useState("");

   const handleChange = (event) => {
      setNombre(event.target.value);
   }
   const handleSearch= (nombre)=>{
         dispatch(searchPokemon(nombre))
            //setNombre(); 
         }
      

   const handleKeyPress = (e) => {
         if (e.key === 'Enter') {
           handleSearch(nombre)
         }
      }

      const handleReset = () => {
         dispatch(resetFilters());
      }      
  
   return (
      <div>
         <input type='search' onKeyPress={handleKeyPress} onChange={handleChange} className={style.input} placeholder="Nombre..." />
         <button className={style.button} onClick={()=>handleSearch(nombre)}>Buscar</button>
         <button className={style.button} onClick={()=>handleReset()}>Reset</button>
         <Link to="/create">
         <button className={style.button}>Agregar</button>
         </Link>
      </div>
   );
}