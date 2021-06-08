import React, { useContext } from "react";
import { ThemeContext } from "../context/GeneralContext";
import Menu from "../img/menuRedimensionado.png";
import "./nav.css";

const Nav = () => {
  const { setInterruptor, setSidecolor, accesoGlobal, setInterruptorItems } = useContext(ThemeContext);
 
  function myFunction() {
    setInterruptor("on");
    console.log("ejecuté setInterruptor");
  }

  function changeColor(){
    setSidecolor('changed')
  }

  function hideItems(){
    setInterruptorItems("on")
  }

  // var menuItemTres = document.getElementById("tres");
  // // var afectado = document.getElementById("afectado");
  // menuItemTres.addEventListener( "mouseover", () => {
  //     setSidecolor('changed')
  //   }
  // );
  // sobremi.addEventListener(
  //   "mouseout",
  //   () => {
  //     afectado.className = "";
  //   },
  //   false
  // );

  return (
    <nav>
      <input type="checkbox" id="btn-menu"></input>
      <label for="btn-menu">
      <img src={Menu} alt=""></img>
      </label>
      {/* <div id="hamburguesa">
        
      </div> */}

      <div id="marca">
        <div className="circulo1"></div>
        <div className="circulo2"></div>
        <div className="circulo3"></div>
        <div className="circulo4"></div>
        <h3>lyracons</h3>
      </div>
      <ul id="menu">
        <li >
          <li id="uno">
          <a href="#">MENU ITEM 1</a>
          </li>
          <ul class="submenu">
            <li >
              <a href="#">SUBMENU ITEM 1</a>
            </li>
            <li >
              <a href="#">SUBMENU ITEM 2</a>
            </li>
            <li>
              <a href="#">SUBMENU ITEM 3</a>
            </li>
          </ul>
        </li>
        <li id="dos" onClick={() => hideItems()}>MENU ITEM 2</li>
        <li id="tres" onMouseOver={() => changeColor}>MENU ITEM 3</li>
        <li id="cuatro" onClick={() => myFunction()}>
          MENU ITEM 4
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
