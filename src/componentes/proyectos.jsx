import React from "react";

function Proyectos() {
  return (
    <div className="contGrlSM">
      <div className="contCuadradoCent">
        <div className="contTextoSM">
          <span id="tituloSM1">Clima APP</span>
          <center>
            <p id="p1SM">
              Fue el primer proyecto que realice en React utilizando una{" "}
              <a target="_blank" href="https://openweathermap.org/">
                API
              </a>{" "}
              que me daba la información para colocar en las tarjetas. Me ayudo
              mucho a entender los componentes de React y a como manejar una
              API. <br />
            </p>
            <a
              target="_blank"
              href="https://app-clima-gh6dshkch-agustinmillan.vercel.app/"
            >
              Clic para ver la página
            </a>
          </center>
          <span id="tituloSM1">Countries APP</span>
          <center>
            <p id="p1SM">
              Aquí tuve la oportunidad de poder hacer una app donde podías ver
              la información de todos los países además de crear, editar y
              eliminar actividades donde podían estar todos los países que
              desees utilizando una pequeña dashboard. Está realizada con React
              y Redux para el front, CSS nativo para los estilos. Para el
              BackEnd las rutas están siendo controladas por Express usando una
              base de datos Postgres manejada por la ORM Sequelize. Sin duda la
              mejor forma de poner a prueba todo lo que aprendí en el bootcamp
              de Henry.
            </p>
          </center>
          <span id="tituloSM1">Plantango</span>
          <center>
            <p id="p1SM">
              Mi primer proyecto grupal utilizando la modalidad ágil SCRUM. Sin
              duda uno de los mayores retos a los que me enfrente hasta ahora,
              no por la complejidad sino por el límite de tiempo que nos daban,
              tuvimos que poner mucho trabajo en equipo y sacrificio, sin duda
              creo que sobrepasamos las expectativas con este proyecto grupal.
              La página es para especialistas en plantas donde pueden encontrar
              gran información sobre la flora que puedes tener en tu casa, como
              la cantidad de agua que debes darle, si debe estar expuesta a los
              rayos del sol, si es tóxica para animales, etc. Además que tiene
              la funcionalidad de favoritos donde también puedes ver cuantas
              personas les gusta esa planta. Cuenta con un diario para agregar
              anotaciones y muy importante con una sección para que compres
              semillas y artículos de jardinería.
            </p>
            <a target="_blank" href="https://plantango.vercel.app/">
              Clic para ver la página
            </a>
          </center>
          <span id="tituloSM1">API-PLANT</span>
          <center>
            <p id="p1SM">
              Este es el proyecto en el que me encuentro trabajando actualmente,
              la idea es crear una API donde puedas encontrar toda la
              información sobre plantas, utilizando scraping para obtener la
              información. Tendrá la versión gratuita que te dará la información
              sobre todas las plantas y además tendrá el plan de pago donde no
              solo te da interacciones ilimitadas, sino que también te dan las
              opciones de pedir la información ordenada, filtrada, además de
              darte un espacio especifico para que puedas agregar y editar tus
              propias plantas dentro de la base de datos.
            </p>
            <a
              target="_blank"
              href="https://github.com/AgustinMillan/api-plantas"
            >
              Clic para ver el repositorio
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
