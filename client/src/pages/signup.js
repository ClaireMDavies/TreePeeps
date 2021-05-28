import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";


function SignUp() {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [userLocation, setUserLocation] = useState("");

    const [passwordError, setPasswordError] = useState("");

    const passwordField = useRef(null);
    const confirmPasswordField = useRef(null);

    const handleConfirmPassword = e => {
        e.preventDefault();
        if (userPassword.target.value !== userConfirmPassword.target.value) {
            console.log("passwords don't match");

        }
        setUserConfirmPassword(e.target.value)
    }

    const handleSubmit = e => {

        console.log(userName, userEmail, userPassword, userConfirmPassword, userLocation);

    };

    function passwordLostFocus()
    {
        checkPasswordValidity(passwordField.current.value, confirmPasswordField.current.value);
    }

    function confirmPasswordLostFocus()
    {
        checkPasswordValidity(passwordField.current.value, confirmPasswordField.current.value);
    }

    function checkPasswordValidity(password, confirmPassword)
    {
        if (password === undefined || confirmPassword === undefined)
        {
            return;
        }

        if (password.length === 0 || confirmPassword.length === 0)
        {
            return;
        }

        if (password !== confirmPassword)
        {
            setPasswordError("Passwords don't match");
            return;
        }

        if (password.length < 8)
        {
            setPasswordError("Password must be at least 8 characters");
            return;
        }

        setPasswordError("");
    }

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
                <div className="card" style={{ padding: 40, margin: 20, backgroundColor: "#50AF53" }}>
                    <div className="card-body" >

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Full name:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text"></input>
                            </div>
                        </div>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Email address:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="email"></input>
                            </div>
                        </div>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Password:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input ref={passwordField}
                                    className="form-control" type="password" onBlur={passwordLostFocus}></input>
                            </div>
                        </div>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Confirm password:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }} >
                                <input ref={confirmPasswordField}
                                    className="form-control" type="password" onBlur={confirmPasswordLostFocus}></input>
                            </div>
                            <span>{passwordError}</span>
                        </div>

                        <div className="row" style={{ margin: 10 }}>
                            <div className="col-md-5 card" style={{ backgroundColor: "palegreen", textAlign: "center", margin: 10 }}>
                                <h4>Location:</h4>
                            </div>
                            <div className="col-md-6" style={{ margin: 10 }}>
                                <input className="form-control" type="text"></input>
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
        </>
    );
}

export default SignUp;