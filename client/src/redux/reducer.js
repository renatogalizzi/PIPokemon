import {FILTER_POKEMONS, GET_POKEMONS, SEARCH_POKEMON, ORDER_POKEMONS, RESET_FILTERS}  from "./actions";

const initialState = {
  pokemons: [],
  allPokemons:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, 
        pokemons: action.payload,
        allPokemons:action.payload };
      

    case FILTER_POKEMONS:
      if(action.payload === "api" || action.payload ==="bbdd"){
        switch (action.payload){
          case "bbdd":
            const filter1 = state.allPokemons.filter(poke => poke.id.length > 10)
            if (filter1.length === 0) {window.alert("No hay Pokemons en  Base de Datos para ese tipo")}
            else 
             return {...state,allPokemons:filter1}
             
          default:
            const filter2 = state.allPokemons.filter(poke => poke.id < 50)
            if (filter2.length === 0) {window.alert("No hay Pokemons del Origen "+ action.payload + " para ese tipo")}
            else 
            return {...state,allPokemons:filter2}
        }
      }
      else {
      const filter3 = state.pokemons.filter(poke => {
        for (let i=0;i<poke.typePokemons.length;i++){
          if(poke.typePokemons[i].nombre === action.payload) return poke;
        }
      });
      if(filter3.length === 0) (window.alert("No hay Pokemons del Tipo Seleccionado"))
      else {
      return {...state,
        allPokemons:filter3}}
      }


    case ORDER_POKEMONS:
            let copia = [...state.allPokemons];
            let copyAllPoke = copia.sort((a, b) => {
              if(action.payload == 'AZ'){
                  return a.nombre.localeCompare(b.nombre)
              }else if (action.payload == 'ZA'){
                  return b.nombre.localeCompare(a.nombre)
              }else{
                  return b.ataque- a.ataque;
              }
            })
          return{
              ...state,
              allPokemons:copyAllPoke}

      case SEARCH_POKEMON:
        return{...state,allPokemons:action.payload}
      
      case RESET_FILTERS:
        return{...state,allPokemons:state.pokemons}

  default:
          return {...state};
  }


};

export default reducer;







// Para usarlo con search en el estado global sin el server
// case SEARCH_POKEMON:
//       if(action.payload){
//       const filter = state.pokemons.filter(p=> p.nombre.toLowerCase() === action.payload.toLowerCase())
//       if(filter.length === 0) {window.alert("No hay pokemones con ese Nombre")}
//       else return {...state,allPokemons:filter}
//       }else {
//         return{...state,allPokemons:state.pokemons}
//       }
