import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/signup";

// Calling all components and using router to render pages
function App() {
  return (
    <Router>
      <div>
          <SignUp />
      </div>
    </Router>
  )

}

export default App;