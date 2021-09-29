import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar.js";
import Top from "./Top.js";
import Pre from "./Pre.js";
import Mid from "./Mid.js";
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
          <Pre path="/pre" component={Pre} />
          <Mid path="/mid" component={Mid} />
        </Switch>
      </div>
    </Router>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}