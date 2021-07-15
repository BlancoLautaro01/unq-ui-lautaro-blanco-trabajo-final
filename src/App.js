import React from "react";
import { Generala } from "./generala/Generala";
import { Start } from "./start/Start";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/generala" component={Generala} />
      </Switch>
    </Router>
  );
}

export default App;
