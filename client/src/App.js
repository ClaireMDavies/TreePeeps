import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from "../src/pages/ProjectPage";
import Feeds from "../src/pages/Feeds";
import Login from "../src/pages/Login";
import ContactUs from "./pages/ContactUs";


function App() {

  return (
    <div>
    <Router>
      <Switch>
         <Route exact path="/ProjectPage" component={Project} />
        <Route exact path="/feeds" component={Feeds} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={ContactUs} />
        </Switch>
    </Router>
    </div>
  )

}

export default App;