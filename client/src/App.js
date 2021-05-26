import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import dashboard from "./pages/dashboard";


// Calling all components and using router to render pages
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/dashboard" component={dashboard} />
      </div>
      <div>
        <Route exact path="/" component={dashboard} />
      </div>
    </Router>
  )

}

export default App;