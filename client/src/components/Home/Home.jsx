import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import style from "./Home.module.css"
import FilterOrder from "../FilterOrder/Filter";



export default function Home() {
   
  return (
    <div>
      <a href="https://pokeapi.co/" target="_blank"><img className={style.container} src="/poke.png"/></a>
      <SearchBar />
      <FilterOrder/>
      <Cards  />
     </div>
  );
}
