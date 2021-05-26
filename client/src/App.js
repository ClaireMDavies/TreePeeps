import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from "../src/pages/ProjectPage";

// Calling all components and using router to render pages
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/ProjectPage" component={Project} />
      </div>
      <div>
        <Route exact path="/" component={Project} />
      </div>
    </Router>
  )

}

export default App;