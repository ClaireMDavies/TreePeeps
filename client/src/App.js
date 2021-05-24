import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feeds from "../src/pages/Feeds"

// Calling all components and using router to render pages
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/feeds" component={Feeds} />
      </div>
    </Router>
  )

}

export default App;