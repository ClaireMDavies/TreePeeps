import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";


function SignUp() {

    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordError, setPasswordError] = useState("");

    function handleSubmit() {

        console.log(fullName);
        console.log(emailAddress);
        console.log(location);

        if (password.length > 0 && passwordError.length == 0)
        {
            // we have a valid password
            console.log(password);
        }
    };

    function passwordLostFocus() {
        checkPasswordValidity();
    }

    function confirmPasswordLostFocus() {
        checkPasswordValidity();
    }

    function checkPasswordValidity() {
        if (password === undefined || confirmPassword === undefined) {
            setPasswordError("");
            return;
        }

        if (password.length === 0 || confirmPassword.length === 0) {
            setPasswordError("");
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError("Passwords don't match");
            return;
        }

        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            return;
        }

        setPasswordError("");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-3">
                <img className='ps-3 pe-2' src='../../favicon-32x32.png' alt='icon'></img>
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
                                    window.location.pathname === "/" || window.location.pathname === "/about"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                                }
                            >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <div className="card border-success" style={{ padding: 40, margin: 20, }}>
                    <div className="card-body" >
                        <div className="brand-wrapper">
                            <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                            <span className="fs-4">TreePeeps</span>

                        </div>

                        <h2 className="col-md-12" style={{ textAlign: "center" }}>Create an account</h2>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                <h4>Full name:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text" placeholder="Enter full name" onChange={e => setFullName(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                <h4>Email address:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="email" placeholder="Enter email" onChange={e => setEmailAddress(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                <h4>Password:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input  className="form-control" type="password" onBlur={passwordLostFocus} placeholder="Enter password of 8 or more characters" onChange={e => setPassword(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                <h4>Confirm password:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }} >
                                <input className="form-control" type="password" onBlur={confirmPasswordLostFocus} placeholder="Re-enter password" onChange={e => setConfirmPassword(e.target.value)}></input>
                            </div>
                            <span className="has-error">{passwordError}</span>
                        </div>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                <h4>Location:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text" placeholder="Enter nearest town" onChange={e => setLocation(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="row" style={{ margin: 30 }}>
                            <div className="col-md-5"></div>
                            <div className="col-md-5">
                                <button className="btn btn-outline" style={{ backgroundColor: "green", color: "white" }} onClick={handleSubmit} type="submit">Sign Up</button>
                            </div>
                        </div>

                        <div className="row" style={{ margin: 30 }}>
                            <h4 style={{ textAlign: "center" }}>Already got an account?<a href="#" style={{ color: "black" }}>Log in</a></h4>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;