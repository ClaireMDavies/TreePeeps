import { useState } from "react";
import React from "react";
import { Container, Row, Col, Card, Form, Input, Button, CardBody } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import API from "../utils/API";

function SignUp() {

    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("United Kingdom");
    const [city, setCity] = useState("");

    const [userNameError, setUserNameError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [countryError, setCountryError] = useState("");
    const [cityError, setCityError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const [citiesLoading, setCitiesLoading] = useState(false);

    const [location, setLocation] = useState( {} );

    React.useEffect(() => {

        fetch("https://countriesnow.space/api/v0.1/countries/info?returns=name")
        .then(response => response.json())
        .then(json => json.data.map((country => country.name)))
        .then(countries => setCountries(countries.sort()))
        .then(loadCities());

    }, []);

    function handleSubmit(event) {

        event.preventDefault();

        API.convert(city)
        .then(data => setLocation( { lat: data.data.results[0].geometry.location.lat, lon: data.data.results[0].geometry.location.lng }));


        let validationResults = [];

        validationResults.push(validateUserName());

        validationResults.push(validateFirstName());

        validationResults.push(validateLastName());

        validationResults.push(validateEmailAddress());

        validationResults.push(validatePassword());

        validationResults.push(validateLocation());

        if (validationResults.some(result => result === false))
        {
            // there were some errors
            // alert("Failed!");
        }
        else
        {
            // TODO: submit
        }
    }

    function validateUserName() {

        if (userName.length < 8) {

            setUserNameError("User Name needs to be 8 characters");
            return false;
        }
        else if (userName.length >= 128) {

            setUserNameError("User Name must be less than 128 characters");
            return false;
        }
        else if (isUserNameAlreadyInUse(userName)) {

            setUserNameError("User Name already in user");
            return false;
        }
        else {
            setUserNameError();
            return true;
        }
    }

    function validateFirstName() {

        if (firstName.length === 0) {

            setFirstNameError("Please enter a first name");
            return false;
        }
        else {
            setFirstNameError("");
            return true;
        }
    }

    function validateLastName() {

        if (lastName.length === 0) {

            setLastNameError("Please enter a last name");
            return false;
        }
        else {

            setLastNameError("");
            return true;
        }
    }

    function validateEmailAddress() {

        if (emailIsValid(emailAddress)) {

            setEmailError("");
            return true;
        }
        else {

            setEmailError("Invalid email address");
            return false;
        }
    }

    function validatePassword() {

        if (password.length === 0) {

            setPasswordError("You must enter a password");
            return false;
        }
        else if (password.search(/[a-z]/i) < 0 || password.search(/[A-Z]/) < 0 || password.search(/[0-9]/) < 0 || password.length < 8) {

            setPasswordError("Password must contain at least one lowercase letter, one uppercase letter, one digit and be 8 characters long");
            return false;
        }
        else if (confirmPassword.length > 0 && password !== confirmPassword) {

            setPasswordError("Passwords don't match");
            return false;
        }
        else {

            setPasswordError("");
            return true;
        }
    }   

    function validateLocation() {

        if (country.length === 0) {

            setCountryError("Please select a country");
            return false;
        }
        else if (city.length === 0) {

            setCityError("Please select a City");
            return false;
        }
        else
        {
            setCityError("");
            return true;
        }
    }

    function isUserNameAlreadyInUse(username) {
        // TODO
        return false;
    }

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function emailAddressLostFocus() {

        if (emailAddress.length > 0) {

            validateEmailAddress();
        }
    }

    function passwordLostFocus() {

        if (password.length > 0) {

            validatePassword();
        }
    }

    function confirmPasswordLostFocus() {

        if (confirmPassword.length > 0) {

            validatePassword();
        }
    }

    function countryChanged(e)
    {
        setCountry(e.target.value);
        loadCities();
    }

    function cityChanged(e)
    {
        setCity(e.target.value);
    }

    function loadCities()
    {
        setCitiesLoading(true);

        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ country: country })
        })
        .then(response => response.json())
        .then(json => setCities(json.data.sort()))
        .then(setCitiesLoading(false));
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

            <Container>
                <Card className="border-success" style={{ padding: 40, margin: 20, }}>
                    <CardBody>
                        <Container>
                            <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                            <span className="fs-4">TreePeeps</span>
                        </Container>

                        <h2 className="col-md-12" style={{ textAlign: "center" }}>Create an account</h2>

                        <Form>
                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>User name:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="text" placeholder="Choose a user name of 8 characters or more" onChange={e => setUserName(e.target.value)}></Input>
                                </Col>
                                <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{userNameError}</span>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>First name:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="text" placeholder="Enter first name" onChange={e => setFirstName(e.target.value)}></Input>
                                </Col>
                                <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{firstNameError}</span>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Last name:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="text" placeholder="Enter last name" onChange={e => setLastName(e.target.value)}></Input>
                                </Col>
                                <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{lastNameError}</span>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Email address:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="email" onBlur={emailAddressLostFocus} placeholder="Enter email" onChange={e => setEmailAddress(e.target.value)}></Input>
                                </Col>
                                <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{emailError}</span>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Password:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="password" onBlur={passwordLostFocus} placeholder="Enter password of 8 or more characters" onChange={e => setPassword(e.target.value)}></Input>
                                </Col>
                                <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{passwordError}</span>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Confirm password:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }} >
                                    <input className="form-control" type="password" onBlur={confirmPasswordLostFocus} placeholder="Re-enter password" onChange={e => setConfirmPassword(e.target.value)}></input>
                                </Col>
                                {/* <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{passwordError}</span> */}
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Location:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>

                                    <select className="form-control" value={country} onChange={e => countryChanged(e)}>
                                        {countries.map(country => <option key={country} value={country}>{country}</option>)};
                                    </select>

                                    <select className="form-control" disabled={citiesLoading} onChange={e => cityChanged(e)}>
                                        {cities.map(city => <option key={city} value={city}>{city}</option>)};
                                    </select>

                                </Col>
                                <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{countryError}</span>
                                <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{cityError}</span>
                            </Row>

                            <Row style={{ margin: 30 }}>
                                <Col xs="5"></Col>
                                <Col xs="5">
                                    <Button className="btn btn-outline" style={{ backgroundColor: "green", color: "white" }} onClick={handleSubmit} type="submit">Sign Up</Button>
                                </Col>
                            </Row>
                        </Form>

                        <Row style={{ margin: 30 }}>
                            <h4 style={{ textAlign: "center" }}>Already got an account? <Link style={{ color: "black", textDecorationLine: "underline" }} to="/login">Log in</Link></h4>
                        </Row>

                    </CardBody>
                </Card>
            </Container>
            <Footer />
        </div>
    );
}


export default SignUp;
