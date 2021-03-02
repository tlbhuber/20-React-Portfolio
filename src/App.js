import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <Router>
      <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route exact path="/resume" component={Resume} /> */}
          <Route exact path="/contact" component={Contact} />
       
      </div>
    </Router>
  );
}

export default App;
