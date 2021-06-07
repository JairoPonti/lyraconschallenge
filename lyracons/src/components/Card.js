import React from 'react';
import './card.css';

// import { Link } from 'react-router-dom';

export default function Card ({titulo, marca, precio, img}) {
    return (
      <div className="card">
          <div className="contenedorImg">
              <img src={img}/>
          </div>
       <h2>{titulo}</h2>
      </div>
    );
};