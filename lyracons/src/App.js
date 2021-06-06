import './App.css';
import Menu from './img/menuRedimensionado.png'

function App() {
  return (
    <div >
      <nav>
        <div id="hamburguesa">
            <img src={Menu}></img>
        </div>
         <div id="marca">
           <div className="circulo1"></div>
           <div className="circulo2"></div>
           <div className="circulo3"></div>
           <div className="circulo4"></div>
            <h3>lyracons</h3>
          </div> 
          <ul id="menu">
            <li id="uno"><a href="#">MENU ITEM 1</a>
                <ul class="submenu">
                <li id="uno"><a href="#">SUBMENU ITEM 1</a></li>
                <li id="uno"><a href="#">SUBMENU ITEM 2</a></li>
                <li id="uno"><a href="#">SUBMENU ITEM 3</a></li>
                </ul>
             </li>
             <li id="dos">MENU ITEM 2</li>
             <li id="tres">MENU ITEM 3</li>
             <li id="cuatro">MENU ITEM 4</li> 
          </ul>
      </nav>
      <aside>
        {/* <p>Hola mundo</p>  */}
       </aside>  
  </div>  
  );
}

export default App;
