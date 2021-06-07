import React from 'react';
import './card.css';

// import { Link } from 'react-router-dom';

export default function Card ({titulo, marca, precio, img}) {
    return (
      <div className="customCard">
          <div className="contenedorImg">
              {/* <img src={img}/> */}
          </div>
       <h2>{titulo}</h2>
       <p className="marca">{marca}</p>
       <p className="precio">{precio}</p>
       <button className="customButton">COMPRAR</button>
      </div>
    );
};