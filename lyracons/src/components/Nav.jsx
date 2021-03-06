import React, { useContext } from "react";
import { ThemeContext } from "../context/GeneralContext";
import Menu from "../img/menuRedimensionado.png";
import "./nav.css";

const Nav = () => {
  const {
    setInterruptor,
    setSidecolor,
    interruptorItems,
    setInterruptorItems,
  } = useContext(ThemeContext);

  function myFunction() {
    setInterruptor("on");
    console.log("ejecuté setInterruptor");
  }

  function changeColor() {
    console.log("me ejecuté!");
    setSidecolor("changed");
  }

  function normalColor() {
    setSidecolor("aside");
  }

  function hideItems() {
    if (interruptorItems === "off") {
      setInterruptorItems("on");
    } else {
      setInterruptorItems("off");
    }
  }

  return (
    <nav>
      <input type="checkbox" id="btn-menu"></input>
      <label for="btn-menu">
        <img src={Menu} alt=""></img>
      </label>
      <div id="marca">
        <div className="circulo1"></div>
        <div className="circulo2"></div>
        <div className="circulo3"></div>
        <div className="circulo4"></div>
        <div className="circulo5"></div>
        <img
          className="logoLyra"
          src={`./assets/logo-lyracons.png`}
          alt=""
        ></img>
      </div>
      <ul id="menu">
        <li>
          <li id="uno">
            <a href="#">MENU ITEM 1</a>
          </li>
          <ul class="submenu">
            <li>
              <a href="#">SUBMENU ITEM 1</a>
            </li>
            <li>
              <a href="#">SUBMENU ITEM 2</a>
            </li>
            <li>
              <a href="#">SUBMENU ITEM 3</a>
            </li>
          </ul>
        </li>
        <li id="dos" onClick={() => hideItems()}>
          MENU ITEM 2
        </li>
        <li
          id="tres"
          onMouseOver={() => changeColor()}
          onMouseOut={() => normalColor()}
        >
          MENU ITEM 3
        </li>
        <li id="cuatro" onClick={() => myFunction()}>
          MENU ITEM 4
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
