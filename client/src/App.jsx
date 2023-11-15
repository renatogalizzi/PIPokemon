import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home"
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form"
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./redux/actions";


function App() {
  // const dispatch=useDispatch();
  // useEffect(() => {
  //     dispatch(getPokemons());
  //   }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/create" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
