import { useState } from "react";
import React from "react";
import { Container, Row, Col, Card, Form, CardBody, CardHeader, CardTitle, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import API from "../utils/API";
import { toast } from 'react-toastify';

function SignUp(props) {
    const accountCreationFailedNotify = () => toast("there were some errors");
    

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("United Kingdom");
    const [city, setCity] = useState("London");

    const [usernameError, setUsernameError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [countryError, setCountryError] = useState("");
    const [cityError, setCityError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const [citiesLoading, setCitiesLoading] = useState(false);

    // const [location, setLocation] = useState({});

    React.useEffect(() => {

        API.getCountries()
            .then(json => json.data.data.map((country => country.name)))
            .then(countries => setCountries(countries.sort()))
            .then(loadCities());

    }, []);

    function handleSubmit(event) {

        event.preventDefault();

        let validationResults = [];

        validationResults.push(validateUsername());

        validationResults.push(validateFirstName());

        validationResults.push(validateLastName());

        validationResults.push(validateEmailAddress());

        validationResults.push(validatePassword());

        validationResults.push(validateLocation());

        if (validationResults.some(result => result === false)) {
            
            accountCreationFailedNotify();
        }
        else {
            let userData = {};
            userData.username = username;
            userData.firstname = firstName;
            userData.lastname = lastName;
            userData.email = emailAddress;
            userData.password = password;
            userData.country = country;
            userData.city = city;

            API.createUser(userData)
                .then(response => {
                    if (response.data.userId) {
                        localStorage.setItem("userId", response.data.userId);
                        props.history.push("/dashboard");
                    }
                    else {
                        accountCreationFailedNotify();
                    }
                });
        }
    }

    function validateUsername() {

        if (username.length < 6) {

            setUsernameError("User Name needs to be 6 characters");
            return false;
        }
        else if (username.length >= 128) {

            setUsernameError("User Name must be less than 128 characters");
            return false;
        }
        else if (usernameError.length > 0) {
            return false;
        }
        else {
            setUsernameError();
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
        else {
            setCityError("");
            setCountryError("");
            return true;
        }
    }

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function usernameLostFocus() {

        if (username.length > 0) {

            API.doesUsernameExist(username)
                .then((response) => {
                    if (response.status === 200) {
                        setUsernameError("User Name already exists");
                    }
                    else {
                        setUsernameError("");
                    }
                })
                .catch((e) => {
                    setUsernameError("");
                });
        }
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

    function countryChanged(e) {
        setCountry(e.target.value);
        loadCities(e.target.value);
    }

    function cityChanged(e) {
        setCity(e.target.value);
    }

    function loadCities(country) {

        if (country === undefined) country = "United Kingdom";

        API.getCitiesForCountry(country)
            .then(json => setCities(json.data.data.sort()));
    }

    return (
        <div>
            <Navbar>
                <NavItem
                    link="/about"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
            </Navbar>

            <Container className="d-flex justify-content-center mb-3 mt-3">
                <Card className="card border-success m-3" style={{ width: '80%' }}>
                    <CardHeader className="border-success" >  <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                        <span className="fs-4">TreePeeps</span></CardHeader>
                    <CardBody>
                        <CardTitle tag="h3" className="text-center">Create a new account</CardTitle>
                        <Form className="row justify-content-center">
                            <Col md='8' className='mt-3'>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend" style={{ width: '200px' }}>Username</InputGroupAddon>
                                    <Input className="form-control" type="text" placeholder="Choose a user name of 6 characters or more" onBlur={usernameLostFocus} onChange={e => setUsername(e.target.value)}></Input>
                                </InputGroup>
                                <span className="has-error col-md-6"><p className="text-center text-danger" >{usernameError}</p></span>
                            </Col>
                            <Col md='8' className='mt-1'>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend" style={{ width: '200px' }}>First Name</InputGroupAddon>
                                    <Input className="form-control" type="text" placeholder="Enter first name" onChange={e => setFirstName(e.target.value)} />
                                </InputGroup>
                                <span className="has-error col-md-6"><p className="text-center text-danger">{firstNameError}</p></span>
                            </Col>
                            <Col md='8' className='mt-1'>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend" style={{ width: '200px' }} >Last Name</InputGroupAddon>
                                    <Input className="form-control" type="text" placeholder="Enter last name" onChange={e => setLastName(e.target.value)} />
                                </InputGroup>
                                <span className="has-error col-md-6"><p className="text-center text-danger">{lastNameError}</p></span>
                            </Col>
                            <Col md='8' className='mt-1'>
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend" style={{ width: '200px' }}>Email address</InputGroupAddon>
                                    <Input className="form-control" type="email" onBlur={emailAddressLostFocus} placeholder="Enter email" onChange={e => setEmailAddress(e.target.value)}></Input>
                                </InputGroup>
                                <span className="has-error col-md-6"><p className="text-center text-danger">{emailError}</p></span>
                            </Col>
                            <Col md='8' className='mt-1'>
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend" style={{ width: '200px' }}>Password</InputGroupAddon>
                                    <Input className="form-control" type="password" onBlur={passwordLostFocus} placeholder="Enter password of 8 or more characters" onChange={e => setPassword(e.target.value)}></Input>
                                </InputGroup>
                                <span className="has-error col-md-6"><p className="text-center text-danger">{passwordError}</p></span>
                            </Col>
                            <Col md='8' className='mt-1'>
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend" style={{ width: '200px' }}>Confirm Password</InputGroupAddon>
                                    <Input className="form-control" type="password" onBlur={confirmPasswordLostFocus} placeholder="Re-enter password" onChange={e => setConfirmPassword(e.target.value)}></Input>
                                </InputGroup>
                                <span className="has-error col-md-6"><p className="text-center text-danger">{passwordError}</p></span>
                            </Col>
                            <Col md='8' className='mt-1'>
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend" style={{ width: '200px' }}>Location</InputGroupAddon>
                                    <select className="form-control" value={country} onChange={e => countryChanged(e)}>
                                        {countries.map(country => <option key={country} value={country}>{country}</option>)};
                                    </select>
                                    <select className="form-control" disabled={citiesLoading} onChange={e => cityChanged(e)}>
                                        {cities.map(city => <option key={city} value={city}>{city}</option>)};
                                    </select>
                                </InputGroup>
                                <span className="has-error col-md-6"><p className="text-center text-danger">{countryError}</p></span>
                                <span className="has-error col-md-6"><p className="text-center text-danger">{cityError}</p></span>
                            </Col>
                        </Form>
                        <Col className="text-center">
                            <div className="mb-3 mt-3">
                                <button type="button" className="btn btn-success" onClick={handleSubmit} type="submit">Sign Up</button>
                            </div>
                        </Col>
                        <Row className="mb-2">
                            <h5 className='text-center'>Already got an account? <Link className='text-reset' to="/login">Log in</Link></h5>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        
            <Footer />
        </div>
    );
}


export default SignUp;
