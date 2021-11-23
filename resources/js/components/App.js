import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar.js";
import Top from "./Top.js";
import Act from "./Act.js";
import Bct from "./Bct.js";
import Cct from "./Cct.js";
import Dct from "./Dct.js";
import Ect from "./Ect.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Top path="/" exact component={Top} />
          <Act path="/act" component={Act} />
          <Bct path="/bct" component={Bct} />
          <Cct path="/cct" component={Cct} />
          <Dct path="/dct" component={Dct} />
          <Ect path="/ect" component={Ect} />
        </Switch>
      </div>
    </Router>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}