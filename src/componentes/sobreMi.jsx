import React from "react";
import "./sobreMi.css";
function SobreMi() {
  return (
    <div className="contGrlSM">
      <div className="contCuadradoCent">
        <div id="fotoAM">.</div>
        <div className="contTextoSM">
          <span id="tituloSM1">Quién soy?</span>
          <p id="p1SM">
            Mi nombre es Agustin, tengo 20 años, mi cumpleaños es el 20 de
            Noviembre y vivo en San Miguel de Tucumán - Tucumán - Argentina. He
            querido ser desarrollador desde que estuve en los primeros años de
            secundaria cuando mi profesor de informática nos enseñó etiquetas
            básicas de HTML, en ese entonces lo veía como algo muy lejano pero
            hace unos años(2) empece como autodidacta hasta que entre a Henry.
            Desde entonces programar no es solo un hobby es un trabajo y es lo
            que sigo eligiendo todos los días. Actualmente me siento más que
            preparado para mi primer trabajo en el mundo TI. Puedes ir viendo
            mis proyectos en esta página. :)
          </p>
          <span id="tituloSM1">Mis preferencias</span>
          <p id="p1SM">
            Realmente tengo una gran preferencia por el BackEnd, desde la base
            de datos y la forma en la que el servidor se comunica con el
            cliente, aunque claro, también sé hacer mi parte en el FrontEnd, y
            no es que no me guste solo que si tuviera que escoger iría por el
            Back.
          </p>
          <span id="tituloSM1">Qué hago actualmente?</span>
          <p id="p1SM">
            Actualmente he dejado mi trabajo en Teleperformance (un CallCenter)
            para dedicarme fulltime a la búsqueda de mi primer trabajo además de
            poder extender mis conocimientos para afrontar mis primeros retos.
            La tecnología que estoy aprendiendo ahora es WebSocket con
            Socket.io. Además que me encuentro trabajando individualmente en una
            API-REST de plantas para afianzar aun más mis conocimientos además
            de darle a mi comunidad de henry una nueva herramienta para
            trabajar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
