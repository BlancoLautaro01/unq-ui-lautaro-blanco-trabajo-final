import React from "react";
import { Generala } from "./generala/Generala";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/generala">
          <Generala />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
