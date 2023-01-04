import "./App.css";
import NavBar from "./componentes/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/home";
import SobreMi from "./componentes/sobreMi";
import Habilidades from "./componentes/habilidades";
import Proyectos from "./componentes/proyectos";
import Contactame from "./componentes/contactame";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Sobre mi" element={<SobreMi/>} />
          <Route path="/Habilidades" element={<Habilidades/>}/>
          <Route path="/Proyectos" element={<Proyectos/>}/>
          <Route path="/Contactame" element={<Contactame/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
