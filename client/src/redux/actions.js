import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const CREATE_POKEMONS = "CREATE_POKEMONS";
export const ORDER_POKEMONS = "ORDER_POKEMONS";
export const RESET_FILTERS = "RESET_FILTERS";


export const getPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons/";
  return (dispatch) => {
       axios.get(endpoint).then( data => dispatch({ type: GET_POKEMONS, payload: data.data }));
      }
};


export const searchPokemon = (nombre)=>{
  const URL = "http://localhost:3001/pokemons";
  return (dispatch) => {
      axios.get(`${URL}?name=${nombre}`)
      .then( data => dispatch({type:SEARCH_POKEMON,payload:data.data}))
      .catch(error => window.alert(`No hay pokemon con ese Nombre  " ${error.message}`))
      } 
 
}

export const filterPokemons = (type)=>{
  return {type:FILTER_POKEMONS,payload:type}
}


export const orderPokemons = (order) => {
  return {type:ORDER_POKEMONS,payload:order}
}

export const resetFilters = () => {
return {type:RESET_FILTERS}
}









// export const createPokemons = (pokemon) =>{
//   const endpoint = "http://localhost:3001/pokemons/create";
//   return (dispatch) =>{
//     axios.post(endpoint,pokemon)
//     .then(res => dispatch({type:CREATE_POKEMONS,payload:res}))
//     .catch(err => window.alert(err.message))
// }
//}




// export const searchPokemon = (nombre)=>{
//   return {type:SEARCH_POKEMON,payload:nombre}
// }