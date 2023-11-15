import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import style from "./Home.module.css"
import FilterOrder from "../FilterOrder/Filter";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";



export default function Home() {
  const [render,setRender] = useState(false);
  const dispatch=useDispatch();
  useEffect(() => {
      dispatch(getPokemons());
    },[]);
  return (
    <div>
      <a href="https://pokeapi.co/" target="_blank"><img className={style.container} src="/poke.png"/></a>
      <SearchBar />
      <FilterOrder/>
      <Cards  />
     </div>
  );
}
