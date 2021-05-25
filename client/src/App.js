import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feeds from "../src/pages/Feeds";
import Login from "../src/pages/Login";


function App() {

  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/feeds" component={Feeds} />
        <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
    </div>
  )

}

export default App;