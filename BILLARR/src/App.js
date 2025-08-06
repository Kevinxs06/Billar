import React from 'react';
import Barranav from './componentes/Barranav';
import Carrusel from './componentes/Carrusel'
import Texto from './componentes/Texto';
import Tarjetas from './componentes/Tarjetas';
import '../src/css/Carrusel.css'


function App() {
  return (
    <div>
      <Barranav/>
      
      <div className='principal'> 
        <Carrusel/>
        <Texto/>
      </div>
      
      <div className='secundaria'>
        <Texto/>
        <Carrusel/>
      </div>


      <div className='tarjeticas'>
        <Tarjetas/>

        <Tarjetas/>

        <Tarjetas/>

        <Tarjetas/>
      </div>
     
    
      

     
    </div>
  );
}

export default App;