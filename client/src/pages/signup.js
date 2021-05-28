import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import NavItem from "../components/NavItem";

function SignUp() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userLocation, setUserLocation] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userName, userEmail, userPassword, userLocation);

    };

    return (
        <div>
            <Navbar>
                <NavItem
                    link="/"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
            </Navbar>

            <div className="container">
                <div className="card" style={{ padding: 40, margin: 20, backgroundColor: "#50AF53" }}>
                    <div className="card-body" >
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>User name:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text" value={userName} onChange={e => setUserName(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Email address:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Password:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Password:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }} >
                                <input className="form-control" type="password"></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Location:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text" value={userLocation} onChange={e => setUserLocation(e.target.value)} ></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 30 }}>
                            <div className="col-md-5"></div>
                            <div className="col-md-5">
                                <button className="btn btn-outline" style={{ backgroundColor: "green", color: "white" }} onClick={handleSubmit} type="submit">Sign Up</button>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 30 }}>
                            <h4>Already got an account?  <a href="#" style={{ textAlign: "center", color: "black" }}>Log in</a></h4>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    );
}

export default SignUp;