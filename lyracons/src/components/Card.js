import React from "react";
import "./card.css";

export default function Card({ titulo, marca, precio }) {
  return (
    <div className="customCard">
      <div className="contenedorImg">
        <img className="dimensiones" src={`./assets/sony.png`} alt="" />
      </div>
      <h2>{titulo}</h2>
      <p className="marca">{marca}</p>
      <p className="precio">{`$` + ` ` + `${precio}`}</p>
      <button className="customButton">COMPRAR</button>
    </div>
  );
}
