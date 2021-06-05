import { useState, useRef } from "react";
import React from "react";
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


function SignUp() {

    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    const [userNameError, setUserNameError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [countryError, setCountryError] = useState("");
    const [regionError, setRegionError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

     function validData() {

        
        if (userNameError.length == 0 && firstNameError.length == 0 && lastNameError.length == 0 && emailError.length == 0 && passwordError.length == 0 && countryError.length == 0 && regionError.length == 0) {
            
            console.log("valid data, post to database")
        }
        else{
            console.log("something went wrong");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (userName.length > 7) {
            // console.log(userName); 
            console.log("query database for name");
            setUserNameError("");
        }
        else {
            setUserNameError("User Name needs to be 8 characters and unique");
            return
        }

        if (firstName.length === 0 ) {
           
            setFirstNameError("field needs completing");
            return
        }
        else {
            setFirstNameError("");
        }
        
        if (lastName.length === 0 ) {
           
            setLastNameError("field needs completing");
            return
        }
        else {
            setLastNameError("");
        }

        if (country.length === 0 ) {
           
            setCountryError("field needs completing");
            return
        }
        else {
            setCountryError("");
        }

        if (region.length === 0 ) {
           
            setRegionError("field needs completing");
            return
        }
        else {
            setRegionError("");
        }
        validData();

        // validData();

        // if (password.length > 0 && passwordError.length === 0) {
        //         // we have a valid password
        //         console.log(password);

        // }    

        // checkEmailValidity();



    }

    function checkEmailValidity() {
        if (emailIsValid(emailAddress)) {

            console.log(emailAddress);
            setEmailError("");

        }
        else {
            setEmailError("invalid email");
        }

    }

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

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

        if (password.length === 0) {
            setPasswordError("You must enter a password");
            return;
        }

        if (password.search(/[a-z]/i) < 0 || password.search(/[A-Z]/) < 0 || password.search(/[0-9]/) < 0 || password.length < 8) {
            setPasswordError("Password must contain at least one lowercase letter, one uppercase letter, one digit and be 8 characters long");
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError("Passwords don't match");
            return;
        }

        setPasswordError("");
    }

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
                <div className="card border-success" style={{ padding: 40, margin: 20, }}>
                    <div className="card-body" >
                        <div className="brand-wrapper">
                            <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                            <span className="fs-4">TreePeeps</span>

                        </div>

                        <h2 className="col-md-12" style={{ textAlign: "center" }}>Create an account</h2>
                        <form>

                            <div className="row" style={{ margin: 10 }}>
                                <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>User name:</h4>
                                </div>
                                <div className="col-md-6" style={{ margin: 10 }}>
                                    <input className="form-control" type="text" placeholder="Choose a user name of 8 characters or more" onChange={e => setUserName(e.target.value)}></input>
                                </div>
                                <div className="col-md-5"></div>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{userNameError}</span>
                            </div>

                            <div className="row" style={{ margin: 10 }}>
                                <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>First name:</h4>
                                </div>
                                <div className="col-md-6" style={{ margin: 10 }}>
                                    <input className="form-control" type="text" placeholder="Enter first name" onChange={e => setFirstName(e.target.value)}></input>
                                </div>
                                <div className="col-md-5"></div>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{firstNameError}</span>
                            </div>

                            <div className="row" style={{ margin: 10 }}>
                                <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Last name:</h4>
                                </div>
                                <div className="col-md-6" style={{ margin: 10 }}>
                                    <input className="form-control" type="text" placeholder="Enter last name" onChange={e => setLastName(e.target.value)}></input>
                                </div>
                                <div className="col-md-5"></div>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{lastNameError}</span>
                            </div>

                            <div className="row" style={{ margin: 10 }}>
                                <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Email address:</h4>
                                </div>
                                <div className="col-md-6" style={{ margin: 10 }}>
                                    <input className="form-control" type="email" onBlur={checkEmailValidity} placeholder="Enter email" onChange={e => setEmailAddress(e.target.value)}></input>
                                </div>
                                <div className="col-md-5"></div>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{emailError}</span>
                            </div>

                            <div className="row" style={{ margin: 10 }}>
                                <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Password:</h4>
                                </div>
                                <div className="col-md-6" style={{ margin: 10 }}>
                                    <input className="form-control" type="password" onBlur={passwordLostFocus} placeholder="Enter password of 8 or more characters" onChange={e => setPassword(e.target.value)}></input>
                                </div>
                                <div className="col-md-5"></div>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{passwordError}</span>
                            </div>


                            <div className="row" style={{ margin: 10 }}>
                                <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Confirm password:</h4>
                                </div>
                                <div className="col-md-6" style={{ margin: 10 }} >
                                    <input className="form-control" type="password" onBlur={confirmPasswordLostFocus} placeholder="Re-enter password" onChange={e => setConfirmPassword(e.target.value)}></input>
                                </div>
                                {/* <div className="col-md-5"></div>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{passwordError}</span> */}
                            </div>

                            <div className="row" style={{ margin: 10 }}>
                                <div className="col-md-5 card" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Location:</h4>
                                </div>
                                <div className="col-md-6" style={{ margin: 10 }}>
                                    <CountryDropdown className="form-control"
                                        value={country}
                                        onChange={e => setCountry(e)}
                                        type="text" />
                                    <RegionDropdown className="form-control"
                                        country={country}
                                        value={region}
                                        onChange={e => setRegion(e)} />

                                </div>
                                <div className="col-md-5"></div>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{countryError}</span>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{regionError}</span>
                            </div>

                            <div className="row" style={{ margin: 30 }}>
                                <div className="col-md-5"></div>
                                <div className="col-md-5">
                                    <button className="btn btn-outline" id="submit" style={{ backgroundColor: "green", color: "white" }} onClick={handleSubmit} type="submit" >Sign Up</button>
                                </div>
                            </div>
                        </form>

                        <div className="row" style={{ margin: 30 }}>
                            <h4 style={{ textAlign: "center" }}>Already got an account? <Link style={{ color: "black", textDecorationLine: "underline" }} to="/login">Log in</Link></h4>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;