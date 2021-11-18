import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar.js";
import Top from "./Top.js";
import Act from "./Act.js";
import Mid from "./Mid.js";
import Las from "./Las.js";
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
          <Mid path="/mid" component={Mid} />
          <Las path="/las" component={Las} />
        </Switch>
      </div>
    </Router>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}