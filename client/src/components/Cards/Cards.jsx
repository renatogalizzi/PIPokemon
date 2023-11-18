import React from 'react'; 
import Card from '../Card/Card';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Pagination from "../Pagination/Pagination";
import { useState } from 'react';
import sty from "./Cards.module.css"

const DivCards = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-items: center;
    margin: 50px auto;
    gap:25px;
   justify-content:center;
`
export default function Cards() {
   const [pagina, setPagina] = useState(1);
   const [pokePorPagina, setPokePorPagina] = useState(12);
   
   const pokemons = useSelector((state) => state.allPokemons);
   const maximo = Math.ceil(pokemons.length / pokePorPagina);
   return (
      <>
      <DivCards>
         {pokemons.length ? pokemons
         .slice(((pagina - 1) * pokePorPagina),(pagina-1)*pokePorPagina+pokePorPagina)
         .map(p => { return <Card 
         key={p.id}
         id={p.id} 
         nombre ={p.nombre}
         imagen={p.imagen}
         types={p?.typePokemons}
         /> }): <div className={sty.loading}></div>}
      </DivCards>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>
   </>
   );
}
