import React from "react";
import "./habilidades.css";

function Habilidades() {
  return (
    <div className="contGrlSM1">
      <div className="contCuadradoCent1">
        <div className="contIzqImgs">
          <span id="tituloSM1">Aprendidas</span>
          <div className="contSkillsImgs">
            <img
              className="imgExpressSkill"
              src="src\images\lengua.png"
              alt="lenguajes"
            />
            <img
              className="imgExpressSkill"
              src="src\images\express.png"
              alt="express"
            />
            <img
              className="imgExpressSkill"
              src="src\images\node.png"
              alt="node"
            />
            <img
              className="imgExpressSkill"
              src="src\images\react.png"
              alt="react"
            />
            <img
              className="imgExpressSkill"
              src="src\images\redux.png"
              alt="redux"
            />
            <img
              className="imgExpressSkill"
              src="src\images\sequelize.png"
              alt="seque"
            />
          </div>
        </div>
        <div className="contIzqImgs">
          <span id="tituloSM1">Aprendiendo</span>
          <div className="contSkillsImgs">
            <img
              className="imgExpressSkill"
              src="src\images\socketio.png"
              alt="socket"
            />
            <img
              className="imgExpressSkill"
              src="src\images\python.png"
              alt="python"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
