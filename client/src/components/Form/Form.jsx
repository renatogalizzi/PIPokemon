import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "../../../../api/src/helpers/validation";
import { useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";
import axios from "axios";

export default function Form() {
  const navigate = useNavigate();

  // let type =[];
  // const handleTypes = (e) => {
  //   type.push(e.target.value);
  //   console.log(type);
  //   return type;
  // }  

  const [pokeData, setPokeData] = useState({
    nombre: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    types:[],
    imagen: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if(Object.keys(errors).length !== 0){
      setErrors({general:"Faltan Campos obligatorios"});
    }else{
      const endpoint = "http://localhost:3001/pokemons/create";
      axios.post(endpoint,pokeData)
      .then(({data}) => {window.alert(data.message +" => "+ data.data),navigate("/home")})
      .catch(error => window.alert(error.response.data.message))
    }
  };

  const handleChange = (event) => {
    setPokeData({ ...pokeData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...pokeData, [event.target.name]: event.target.value })
    );
  };

  return (
    <div>
      <p className={style.titulo}>
        <img width="50" src="logo.png"></img>Nuevo Pokemon
        <img src="logo.png" width="50"></img>
      </p>
      <div className={style.containerForm}>
        <div className={style.divForm}>
          <form onSubmit={handleSubmit} className={style.form}>
            <div id={style.nameContainer} >
              <div className={style.inputBox}>
                <label className={style.labels}>Nombre</label>
                <input
                  name="nombre"
                  value={pokeData.nombre}
                  type="text"
                  className={style.inputs}
                  onChange={handleChange}
                ></input>
              </div>
              <p className={style.errors}>{errors.nombre}</p>
            </div>
            <div className={style.divLabels}>
              <div className={style.inputBox}>
                <label className={style.labels}>Vida</label>
                <input
                  name="vida"
                  value={pokeData.vida}
                  className={style.inputs}
                  onChange={handleChange}
                ></input>
              </div>
              <p id={style.errorVida}>{errors.vida}</p>
            </div>
            <div className={style.divLabels}>
              <div className={style.inputBox}>
                <label className={style.labels}>Ataque</label>
                <input
                  name="ataque"
                  value={pokeData.ataque}
                  type="text"
                  className={style.inputs}
                  onChange={handleChange}
                ></input>
              </div>
              <p id={style.errorAtaque}>{errors.ataque}</p>
            </div>
            <div className={style.divLabels}>
              <div className={style.inputBox}>
                <label className={style.labels}>Defensa</label>
                <input
                  name="defensa"
                  value={pokeData.defensa}
                  type="text"
                  className={style.inputs}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className={style.divLabels}>
              <div className={style.inputBox}>
                <label className={style.labels}>Velocidad</label>
                <input
                  name="velocidad"
                  value={pokeData.velocidad}
                  type="text"
                  className={style.inputs}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className={style.divLabels}>
              <div className={style.inputBox}>
                <label className={style.labels}>Altura</label>
                <input
                  name="altura"
                  value={pokeData.altura}
                  type="text"
                  className={style.inputs}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className={style.divLabels}>
              <div className={style.inputBox}>
                <label className={style.labels}>Peso</label>
                <input
                  name="peso"
                  value={pokeData.peso}
                  type="text"
                  className={style.inputs}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div id={style.tipoPadre} >
              <div id={style.tipoContainer} >
                <label className={style.labels}>Tipos</label>
                <select
                  name="types"
                  size="6"
                  value={pokeData.types}
                  multiple
                  className={style.tipos}
                  onChange={handleChange}
                >
                  <option value="1">Normal</option>
                  <option value="2">Fighting</option>
                  <option value="3">Flying</option>
                  <option value="4">Poison</option>
                  <option value="5">Ground</option>
                  <option value="6">Rock</option>
                  <option value="7">Bug</option>
                  <option value="8">Ghost</option>
                  <option value="9">Steel</option>
                  <option value="10">Fire</option>
                  <option value="11">Water</option>
                  <option value="12">Grass</option>
                  <option value="13">Electric</option>
                  <option value="14">Psychic</option>
                  <option value="15">Ice</option>
                  <option value="16">Dragon</option>
                  <option value="17">Dark</option>
                  <option value="18">Fairy</option>
                  <option value="19">Unknown</option>
                  <option value="20">Shadow</option>
                </select>
              </div>
            </div>
            <div className={style.divLabels}>
              <div className={style.inputBox}>
                <label className={style.labels}>Imagen</label>
                <input
                  name="imagen"
                  value={pokeData.imagen}
                  className={style.inputs}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <button className={style.buttonForm}>
              Crear
            </button>
          </form>
            <p id={style.campos}>{errors.general}</p>
        </div>
      </div>
    </div>
  );
}
