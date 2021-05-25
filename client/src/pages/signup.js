import React from "react";
import { Link } from "react-router-dom";

function SignUp() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "green" }}>
                <span className="navbar-brand mb-0 h1">TreePeeps</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/aboutus"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contactus"
                                className={window.location.pathname === "/contactus" ? "nav-link active" : "nav-link"
                                }
                            >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <div className="card" style={{ padding: 40, margin: 20, backgroundColor: "#50AF53" }}>
                    <div className="card-body" >
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{backgroundColor: "palegreen", textAlign:"center", margin:10}}>
                                <h4>User name:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{backgroundColor: "palegreen", textAlign:"center", margin:10}}>
                                <h4>Email address:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{backgroundColor: "palegreen", textAlign:"center", margin:10}}>
                                <h4>Password:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{backgroundColor: "palegreen", textAlign:"center", margin:10}}>
                                <h4>Password:</h4>
                            </div>
                            <div className="col-md-6"style={{ margin: 10 }} >
                                <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{backgroundColor: "palegreen", textAlign:"center",  margin:10}}>
                                <h4>Location:</h4>
                            </div>
                            <div className="col-md-6" style={{margin:10}}>
                                <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 30 }}>
                            <div className="col-md-5"></div>
                            <div className="col-md-5">
                                <button className="btn btn-outline" style={{ backgroundColor: "green", color: "white" }} type="submit">Sign Up</button>
                            </div>
                        </div>
                        <div className="row" style={{ margin: 30 }}>
                            <h4>Already got an account?  <a href="#" style={{ textAlign:"center",color:"black"}}>Log in</a></h4>
                        </div>

                    </div>
                </div>


            </div>
        </>

    );
}

export default SignUp;