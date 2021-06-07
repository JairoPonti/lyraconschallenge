import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import  ThemeContext from './context/GeneralContext';


function App() {
  return (
    <div >
      <ThemeContext >
       <Router>
            <Route path="/" component={Nav} />
            <Route path="/" component={Home} />       
       </Router>
       </ThemeContext>
  </div>  
  );
}

export default App;
