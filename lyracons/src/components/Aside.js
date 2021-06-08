import React, { useContext } from "react";
import { ThemeContext } from "../context/GeneralContext";
import "./aside.css";

const Aside = () => {
  const { interruptor, sideColor } = useContext(ThemeContext);

  return (
    <div className={sideColor}>
      {interruptor === "on" ? <p>Hola mundo!</p> : null}
    </div>
  );
};

export default Aside;
