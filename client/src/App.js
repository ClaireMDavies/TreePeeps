import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import SignUp from "../src/pages/SignUp";
import Project from "../src/pages/ProjectPage";
import Feeds from "../src/pages/Feeds";
import Login from "../src/pages/Login";
import Logout from "../src/pages/Logout";
import ContactUs from "../src//pages/ContactUs";
import AboutUs from "../src//pages/AboutUs";
import Dashboard from "../src/pages/Dashboard";
import NoMatch from "../src/pages/NoMatch";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          //
          <Route exact path="/" component={Home} />
          //
          <Route exact path="/dashboard" component={Dashboard} />
          //
          <Route exact path="/projectpage" component={Project} />
          //
          <Route exact path="/search" component={Feeds} />
          //
          <Route exact path="/login" component={Login} />
          //
          <Route exact path="/logout" component={Logout} />
          //
          <Route exact path="/about" component={AboutUs} />
          //
          <Route exact path="/contact" component={ContactUs} />
          //
          <Route exact path="/signup" component={SignUp} />
          // route else
          <Route component={NoMatch} />
        </Switch>  
      </Router>
    </div>
  )

}

export default App;