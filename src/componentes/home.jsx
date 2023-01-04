import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="contExterior">
      <div className="contInicio">
        <>
          <span id="bienvenido">¡Bienvenido!</span>
        </>
        <div className="contInicioAM">
          <span id="yoSoy">Yo soy</span>
          <span id="agustinMillan">Agustin Millan</span>
        </div>
      </div>
      <div className="divisor">.</div>
      <div className="contInicio">
      <span id="fullStack">FullStack</span>
      <span id="developer">Developer</span>
      </div>
    </div>
  );
}

export default Home;
