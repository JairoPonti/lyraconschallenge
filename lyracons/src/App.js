import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';


function App() {
  return (
    <div >
       <Router>
            {/* <Nav /> */}
            {/* <Aside/> */}
            {/* <Card/> */}
            <Route path="/" component={Nav} />
            <Route path="/" component={Home} />
            {/* <Route path="/" component={Aside} />
            <Route path="/" component={Card} /> */}
            {/* <Route path="/" render={() => <Catalogo state={this.state} />} />
            <Route exact path="/" component={Footer} /> */}
          </Router>
  </div>  
  );
}

export default App;
