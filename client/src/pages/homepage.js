import React from "react";
import Navbar from "../components/Navbar";
import Image1 from "../assets/TREEPEEPS.png";

function HomePage(){
return(
    <div>
        <Navbar />
        <div style={{ 
      backgroundImage: `url(${Image1})`
    }}></div>
    <div>
        <h1>TreePeeps</h1>
        <button>Login</button>
        <button>Sign Up</button>
    </div>
    </div>

)
}

export default HomePage;


