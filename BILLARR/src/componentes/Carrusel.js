import React, { useState } from "react";
import '../css/Carrusel.css'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'


export default function Carrusel() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="slide active">
          <img src={img1} alt="Imagen 1" />
        </div>
        <div className="slide">
          <img src={img2} alt="Imagen 2" />
        </div>
        <div className="slide">
          <img src={img3} alt="Imagen 3" />
        </div>

      
       
      </div>
       
    </div>
  );
}
