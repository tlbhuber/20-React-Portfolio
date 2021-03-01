import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
// import Footer from "./components/Footer/index";
// import Header from "./components/Header/index";

function App() {
  return (
    <Router>
      <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/React" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route exact path="/resume" component={Resume} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
       
      </div>
    </Router>
  );
}

export default App;
