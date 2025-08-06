import React from "react";
import img from '../img/1.jpg'
import css from '../css/Tarjetas.css'

function Tarjetas() {
  return (
    <div className="tarjetas">
        <img src={img} alt="Imagen 1" />
        <p>aca iria las descripcion de la mesa</p>
        <div className="botoncitos">
        <button className="botones">reservar</button>
        </div>



    </div>
  );
}

export default Tarjetas ;