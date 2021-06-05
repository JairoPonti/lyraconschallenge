import './App.css';

function App() {
  return (
    <div >
      <nav>
        <ul className="menu">
      <li id="uno"><a href="#">MENU ITEM 1</a>
         <ul className="submenu">
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
    
    </aside>
    </div>
  );
}

export default App;
