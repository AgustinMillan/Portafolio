import React, { useState } from "react";
import "./contactame.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import emailjs from '@emailjs/browser';


function Contactame() {
  // const msj = useState({ titulo: "", mensaje: "" });
  const enviar = async (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE,import.meta.env.VITE_TEMPLATE,e.target,import.meta.env.VITE_USER)
    await swal("Mensaje enviado", "", "success");
    location.reload();
  };
  // const cambiotitulo = (e) => {
  //   msj.titulo = e.target.value;
  // };
  // const cambioMsj = (e) => {
  //   msj.mensaje = e.target.value;
  // };
  return (
    <>
      <center>
        <div className="formCon">
          <form onSubmit={enviar}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              margin="normal"
              // value={msj.titulo}
              name="user_name"
              // onChange={(e) => cambiotitulo(e)}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="normal"
              // value={msj.titulo}
              name="user_email"
              // onChange={(e) => cambiotitulo(e)}
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Mensaje"
              multiline
              rows={15}
              margin="normal"
              name="message"
              // value={msj.mensaje}
              // onChange={(e) => cambioMsj(e)}
            />
            <button id="invBtn" type="submit">
              <Button variant="contained">Enviar</Button>
            </button>
          </form>
        </div>
      </center>
      <center>
        <div className="contContacto">
          <p>
            Linkdin:{" "}
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/agustin-millan-415752244/"
            >
              {" "}
              Agustin Millan
            </a>
          </p>
          <p>E-mail: victor.agustin.millan@gmail.com</p>
          <p> celular: +543813353116</p>
        </div>
      </center>
    </>
  );
}

export default Contactame;
