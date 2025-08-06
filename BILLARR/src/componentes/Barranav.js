import React from "react"; 
import '../css/Barranav.css'


function Barranav() {
  return (
    <nav className="barra">
      <div className="titulo">club billar o algo asi</div>
      <div className="botoncitoz">
      <button className="botones">iniciar sesion</button>
      <button className="botones">registrarse</button>
      </div>
    </nav>
  );
}

export default Barranav ;