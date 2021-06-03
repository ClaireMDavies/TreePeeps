import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "../src/pages/SignUp";
=======

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
>>>>>>> debb0890f7d5380a80fb51fc7b151af704425193
import Project from "../src/pages/ProjectPage";
import Feeds from "../src/pages/Feeds";
import Login from "../src/pages/Login";
import ContactUs from "../src//pages/ContactUs";
import Dashboard from "../src/pages/Dashboard";


function App() {

  return (
    <div>
      <Router>
        <Switch>
          //dashboard
          <Route exact path="/dashboard" component={Dashboard} />
          //
          <Route exact path="/projectpage" component={Project} />
          //
          <Route exact path="/feeds" component={Feeds} />
          
          //
          <Route exact path="/login" component={Login} />
          //
          <Route exact path="/contact" component={ContactUs} />
          //
          <Route exact path="/signup" component={SignUp} />
          // route else
          <Route component={Nomatch} />
        </Switch>  
      </Router>
    </div>
  )

}

export default App;