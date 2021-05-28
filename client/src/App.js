import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Project from "../src/pages/ProjectPage";
import Feeds from "../src/pages/Feeds";
import Login from "../src/pages/Login";
import ContactUs from "./pages/ContactUs";

function App() {

  return (
    <div>
    <Router>
       <Route exact path="/ProjectPage" component={Project} />
        <Route exact path="/feeds" component={Feeds} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={ContactUs} />
         <Route exact path="/signup" component={SignUp} />
    </Router>
    </div>
  )

}

export default App;